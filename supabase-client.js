
(function () {
  const config = window.SUPABASE_CONFIG;

  if (!window.supabase || !config ||
      !config.url || !config.publishableKey) {
    console.error("Front Desk Pro: Supabase configuration missing.");
    return;
  }

  window.frontDeskProSupabase =
    window.supabase.createClient(
      config.url,
      config.publishableKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: true
        }
      }
    );

  console.info("Front Desk Pro: Supabase client initialized.");
})();
