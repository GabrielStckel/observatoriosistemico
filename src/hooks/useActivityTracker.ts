import { supabase } from "@/integrations/supabase/client";

export const trackActivity = async (action: string, metadata: Record<string, unknown> = {}) => {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user) return;

  await supabase.from("activity_logs").insert({
    user_id: session.user.id,
    action,
    metadata,
  });
};
