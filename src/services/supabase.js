import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://scivfcmmuwygtzoahwqc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjaXZmY21tdXd5Z3R6b2Fod3FjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4Mzc0NDQsImV4cCI6MjA3MTQxMzQ0NH0.A9QWY6ve2DenNYu3VbggGBpImI5Pu_WkIZPmRTN4T6M";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
