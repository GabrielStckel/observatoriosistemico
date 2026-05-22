import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();
  const { session } = useAuth();
  const from = (location.state as { from?: string } | null)?.from || "/informacoes";

  useEffect(() => {
    // Só redireciona automaticamente se o usuário foi enviado para /login a partir de uma rota protegida
    if (session && (location.state as { from?: string } | null)?.from) {
      navigate(from, { replace: true });
    }
  }, [session, navigate, from, location.state]);

  const handleOAuth = async (provider: "google" | "apple") => {
    const result = await lovable.auth.signInWithOAuth(provider, {
      redirect_uri: window.location.origin + from,
    });
    if (result.error) {
      toast({ title: "Erro ao entrar", description: result.error.message, variant: "destructive" });
      return;
    }
    if (result.redirected) return;
    navigate(from, { replace: true });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSignUp) {
      if (!firstName.trim() || !lastName.trim()) {
        toast({ title: "Dados incompletos", description: "Informe nome e sobrenome.", variant: "destructive" });
        return;
      }
      if (password !== confirmPassword) {
        toast({ title: "Senhas não conferem", description: "A confirmação deve ser igual à senha.", variant: "destructive" });
        return;
      }
    }

    setLoading(true);

    try {
      if (isSignUp) {
        const fullName = `${firstName.trim()} ${lastName.trim()}`;
        const { data, error } = await supabase.auth.signUp({
          email: email.trim(),
          password,
          options: {
            data: { full_name: fullName },
            emailRedirectTo: `${window.location.origin}${from}`,
          },
        });
        if (error) {
          toast({ title: "Erro ao criar conta", description: error.message, variant: "destructive" });
        } else if (data.session) {
          toast({ title: "Conta criada!", description: "Redirecionando..." });
          navigate(from, { replace: true });
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
          navigate(from, { replace: true });
        }
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen theme-blue gradient-hero flex items-center justify-center px-4 py-8">
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
            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-foreground text-xs font-body">Nome</Label>
                <Input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                  placeholder="Nome"
                  className="text-sm"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-foreground text-xs font-body">Sobrenome</Label>
                <Input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                  placeholder="Sobrenome"
                  className="text-sm"
                />
              </div>
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
            <div className="relative">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                placeholder="••••••••"
                className="text-sm pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {isSignUp && (
            <div className="space-y-2">
              <Label htmlFor="confirmPassword" className="text-foreground text-xs font-body">Confirmar senha</Label>
              <div className="relative">
                <Input
                  id="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={6}
                  placeholder="••••••••"
                  className="text-sm pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword((v) => !v)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-muted-foreground hover:text-foreground"
                  aria-label={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {confirmPassword && password !== confirmPassword && (
                <p className="text-xs text-destructive font-body">As senhas não conferem.</p>
              )}
            </div>
          )}

          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Aguarde..." : isSignUp ? "Criar conta" : "Entrar"}
          </Button>

          <div className="relative my-2">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-wider">
              <span className="bg-surface px-2 text-muted-foreground font-body">ou continue com</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <Button type="button" variant="outline" onClick={() => handleOAuth("google")} className="w-full">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
              Google
            </Button>
            <Button type="button" variant="outline" onClick={() => handleOAuth("apple")} className="w-full">
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor"><path d="M17.05 12.04c-.03-2.85 2.33-4.22 2.43-4.29-1.32-1.94-3.39-2.2-4.13-2.23-1.76-.18-3.43 1.04-4.32 1.04-.89 0-2.27-1.01-3.73-.98-1.92.03-3.69 1.12-4.68 2.83-2 3.46-.51 8.59 1.44 11.4.95 1.38 2.08 2.93 3.55 2.87 1.43-.06 1.97-.93 3.69-.93 1.72 0 2.21.93 3.72.9 1.54-.03 2.51-1.4 3.45-2.79 1.09-1.6 1.54-3.15 1.56-3.23-.03-.01-2.98-1.14-3.01-4.59zM14.2 4.13c.79-.96 1.32-2.29 1.17-3.61-1.13.05-2.5.75-3.31 1.71-.73.85-1.36 2.21-1.19 3.51 1.26.1 2.55-.64 3.33-1.61z"/></svg>
              Apple
            </Button>
          </div>

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
          <p className="text-center text-[10px] text-muted-foreground/70 font-body">
            Funciona com Gmail, Hotmail/Outlook, iCloud e qualquer outro email.
          </p>
        </form>
      </div>
    </main>
  );
};

export default Login;
