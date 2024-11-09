import { createClient } from '@supabase/supabase-js';

const SUPABASE_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxjcndya3BubGNlcHB0Y2Fxcm1sIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0ODYzNDMsImV4cCI6MjA0NjA2MjM0M30.BDqgoieJ1epmI_ShuXIRfhOvKVG9zuUAdumGbstvCWM';

export const SUPABASE_URL = 'https://lcrwrkpnlcepptcaqrml.supabase.co';
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export default supabase;
