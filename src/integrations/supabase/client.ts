// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://caoaynkwozphzrvtublj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhb2F5bmt3b3pwaHpydnR1YmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk5NzI2NjEsImV4cCI6MjA2NTU0ODY2MX0.ARuVnY3JoJckgKu07FlrMj3zANrCnuHXpxvdvLlmYU0";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);