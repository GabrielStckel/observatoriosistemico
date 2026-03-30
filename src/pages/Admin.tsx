import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Plus, Users, Activity, BookOpen } from "lucide-react";
import type { Database } from "@/integrations/supabase/types";

type Profile = Database["public"]["Tables"]["profiles"]["Row"];
type Turma = Database["public"]["Tables"]["turmas"]["Row"];
type ActivityLog = Database["public"]["Tables"]["activity_logs"]["Row"];

const Admin = () => {
  const { signOut } = useAuth();
  const { toast } = useToast();
  const [turmas, setTurmas] = useState<Turma[]>([]);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [logs, setLogs] = useState<ActivityLog[]>([]);
  const [newTurmaName, setNewTurmaName] = useState("");
  const [selectedTurma, setSelectedTurma] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    const [turmasRes, profilesRes, logsRes] = await Promise.all([
      supabase.from("turmas").select("*").order("created_at", { ascending: false }),
      supabase.from("profiles").select("*").order("created_at", { ascending: false }),
      supabase.from("activity_logs").select("*").order("created_at", { ascending: false }).limit(200),
    ]);
    setTurmas(turmasRes.data ?? []);
    setProfiles(profilesRes.data ?? []);
    setLogs(logsRes.data ?? []);
    setLoading(false);
  };

  useEffect(() => { fetchData(); }, []);

  const createTurma = async () => {
    if (!newTurmaName.trim()) return;
    const { error } = await supabase.from("turmas").insert({ name: newTurmaName.trim() });
    if (error) {
      toast({ title: "Erro", description: error.message, variant: "destructive" });
    } else {
      setNewTurmaName("");
      fetchData();
    }
  };

  const assignTurma = async (profileId: string, turmaId: string | null) => {
    await supabase.from("profiles").update({ turma_id: turmaId }).eq("id", profileId);
    fetchData();
  };

  const filteredProfiles = selectedTurma
    ? profiles.filter((p) => p.turma_id === selectedTurma)
    : profiles;

  const filteredLogs = selectedTurma
    ? logs.filter((l) => {
        const profile = profiles.find((p) => p.user_id === l.user_id);
        return profile?.turma_id === selectedTurma;
      })
    : logs;

  const getProfileName = (userId: string) => {
    const p = profiles.find((p) => p.user_id === userId);
    return p?.full_name ?? p?.email ?? userId.slice(0, 8);
  };

  const actionLabels: Record<string, string> = {
    page_view: "Visualizou página",
    pdf_download: "Baixou PDF",
    calendar_add: "Agendou encontro",
    calendar_download_all: "Baixou todos encontros",
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="w-6 h-6 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface">
        <div className="container max-w-6xl flex items-center justify-between py-4">
          <div>
            <h1 className="font-display text-xl font-medium text-foreground">Painel Admin</h1>
            <p className="text-xs text-muted-foreground font-body">Observatório Sistêmico</p>
          </div>
          <Button variant="ghost" size="sm" onClick={signOut}>
            <LogOut size={16} />
            <span className="ml-1">Sair</span>
          </Button>
        </div>
      </header>

      <div className="container max-w-6xl py-8">
        {/* Turma filter */}
        <div className="flex items-center gap-2 mb-6 flex-wrap">
          <Button
            variant={selectedTurma === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedTurma(null)}
          >
            Todas
          </Button>
          {turmas.map((t) => (
            <Button
              key={t.id}
              variant={selectedTurma === t.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTurma(t.id)}
            >
              {t.name}
            </Button>
          ))}
        </div>

        <Tabs defaultValue="alunos">
          <TabsList>
            <TabsTrigger value="alunos" className="gap-1"><Users size={14} /> Alunos</TabsTrigger>
            <TabsTrigger value="atividade" className="gap-1"><Activity size={14} /> Atividade</TabsTrigger>
            <TabsTrigger value="turmas" className="gap-1"><BookOpen size={14} /> Turmas</TabsTrigger>
          </TabsList>

          <TabsContent value="alunos" className="mt-4">
            <div className="card-refined overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Nome</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Turma</TableHead>
                    <TableHead>Cadastro</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredProfiles.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="font-medium">{p.full_name}</TableCell>
                      <TableCell className="text-muted-foreground">{p.email}</TableCell>
                      <TableCell>
                        <select
                          value={p.turma_id ?? ""}
                          onChange={(e) => assignTurma(p.id, e.target.value || null)}
                          className="text-xs border border-border rounded px-2 py-1 bg-background"
                        >
                          <option value="">Sem turma</option>
                          {turmas.map((t) => (
                            <option key={t.id} value={t.id}>{t.name}</option>
                          ))}
                        </select>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {new Date(p.created_at).toLocaleDateString("pt-BR")}
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredProfiles.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                        Nenhum aluno encontrado
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="atividade" className="mt-4">
            <div className="card-refined overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Aluno</TableHead>
                    <TableHead>Ação</TableHead>
                    <TableHead>Detalhes</TableHead>
                    <TableHead>Data/Hora</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredLogs.map((log) => (
                    <TableRow key={log.id}>
                      <TableCell className="font-medium">{getProfileName(log.user_id)}</TableCell>
                      <TableCell>{actionLabels[log.action] ?? log.action}</TableCell>
                      <TableCell className="text-xs text-muted-foreground max-w-[200px] truncate">
                        {log.metadata ? JSON.stringify(log.metadata) : "—"}
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground whitespace-nowrap">
                        {new Date(log.created_at).toLocaleString("pt-BR")}
                      </TableCell>
                    </TableRow>
                  ))}
                  {filteredLogs.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={4} className="text-center text-muted-foreground py-8">
                        Nenhuma atividade registrada
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          <TabsContent value="turmas" className="mt-4">
            <div className="flex items-center gap-2 mb-4">
              <Input
                placeholder="Nome da nova turma"
                value={newTurmaName}
                onChange={(e) => setNewTurmaName(e.target.value)}
                className="max-w-xs text-sm"
              />
              <Button size="sm" onClick={createTurma}>
                <Plus size={14} />
                <span className="ml-1">Criar</span>
              </Button>
            </div>

            <div className="card-refined overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Turma</TableHead>
                    <TableHead>Alunos</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Criada em</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {turmas.map((t) => (
                    <TableRow key={t.id}>
                      <TableCell className="font-medium">{t.name}</TableCell>
                      <TableCell>{profiles.filter((p) => p.turma_id === t.id).length}</TableCell>
                      <TableCell>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${t.is_active ? "bg-green-100 text-green-700" : "bg-muted text-muted-foreground"}`}>
                          {t.is_active ? "Ativa" : "Inativa"}
                        </span>
                      </TableCell>
                      <TableCell className="text-xs text-muted-foreground">
                        {new Date(t.created_at).toLocaleDateString("pt-BR")}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
};

export default Admin;
