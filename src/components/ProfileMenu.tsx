import { useEffect, useState } from "react";
import { User as UserIcon, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

const ProfileMenu = () => {
  const { user, signOut } = useAuth();
  const { toast } = useToast();
  const [open, setOpen] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!open || !user) return;
    setLoading(true);
    supabase
      .from("profiles")
      .select("full_name, phone")
      .eq("user_id", user.id)
      .maybeSingle()
      .then(({ data }) => {
        setFullName(data?.full_name ?? "");
        setPhone(data?.phone ?? "");
        setLoading(false);
      });
  }, [open, user]);

  const handleSave = async () => {
    if (!user) return;
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ full_name: fullName.trim(), phone: phone.trim() || null })
      .eq("user_id", user.id);
    setSaving(false);
    if (error) {
      toast({ title: "Erro ao salvar", description: error.message, variant: "destructive" });
    } else {
      toast({ title: "Perfil atualizado" });
    }
  };

  return (
    <>
      <div className="fixed top-0 right-0 z-50 p-3 flex items-center gap-2">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setOpen(true)}
          className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/10 text-xs gap-1"
        >
          <UserIcon size={14} />
          Perfil
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={signOut}
          className="text-primary-foreground/60 hover:text-primary-foreground hover:bg-white/10 text-xs gap-1"
        >
          <LogOut size={14} />
          Sair
        </Button>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-sm">
          <DialogHeader>
            <DialogTitle className="font-display">Meu perfil</DialogTitle>
            <DialogDescription className="text-xs">
              Suas informações de cadastro.
            </DialogDescription>
          </DialogHeader>

          {loading ? (
            <div className="py-8 flex justify-center">
              <div className="w-5 h-5 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="profile-name" className="text-xs">Nome completo</Label>
                <Input
                  id="profile-name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="text-sm"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-email" className="text-xs">Email</Label>
                <Input
                  id="profile-email"
                  value={user?.email ?? ""}
                  disabled
                  className="text-sm bg-muted"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="profile-phone" className="text-xs">Telefone</Label>
                <Input
                  id="profile-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(00) 00000-0000"
                  className="text-sm"
                />
              </div>
            </div>
          )}

          <DialogFooter className="flex-row justify-between gap-2 sm:justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={signOut}
              className="gap-1"
            >
              <LogOut size={14} />
              Sair
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              disabled={loading || saving}
            >
              {saving ? "Salvando..." : "Salvar"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileMenu;
