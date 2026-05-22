import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { session } = useAuth();

  useEffect(() => {
    if (session) navigate("/ano3", { replace: true });
  }, [session, navigate]);

  const handleOAuth = async (provider: "google" | "apple") => {
    const result = await lovable.auth.signInWithOAuth(provider, {
      redirect_uri: window.location.origin + "/ano3",
    });
    if (result.error) {
      toast({ title: "Erro ao entrar", description: result.error.message, variant: "destructive" });
      return;
    }
    if (result.redirected) return;
    navigate("/ano3", { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    if (isSignUp) {
      const { error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: { full_name: fullName.trim() },
          emailRedirectTo: window.location.origin,
        },
      });
      if (error) {
        toast({ title: "Erro ao criar conta", description: error.message, variant: "destructive" });
      } else {
        toast({ title: "Conta criada!", description: "Verifique seu email para confirmar o cadastro." });
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) {
        toast({ title: "Erro ao entrar", description: error.message, variant: "destructive" });
      } else {
        navigate("/ano3", { replace: true });
      }
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen theme-blue gradient-hero flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-medium text-primary-foreground tracking-wide mb-2">
            Observatório Sistêmico
          </h1>
          <p className="text-primary-foreground/40 text-sm font-body">
            {isSignUp ? "Crie sua conta para acessar" : "Entre para acessar o conteúdo"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="card-refined p-6 space-y-4 bg-surface">
          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground text-xs font-body">Nome completo</Label>
              <Input
                id="name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                placeholder="Seu nome"
                className="text-sm"
              />
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground text-xs font-body">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="seu@email.com"
              className="text-sm"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-foreground text-xs font-body">Senha</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="••••••••"
              className="text-sm"
            />
          </div>

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Aguarde..." : isSignUp ? "Criar conta" : "Entrar"}
          </Button>

          <p className="text-center text-xs text-muted-foreground font-body">
            {isSignUp ? "Já tem conta?" : "Não tem conta?"}{" "}
            <button
              type="button"
              onClick={() => setIsSignUp(!isSignUp)}
              className="text-accent hover:underline"
            >
              {isSignUp ? "Entrar" : "Criar conta"}
            </button>
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
