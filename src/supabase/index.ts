// Import the functions you need from the SDKs you need
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://dvdzjuolhvxzqohloxqt.supabase.co';
// const supabaseKey =  || "";
console.log()

export const supabase = createClient(supabaseUrl, import.meta.env.VITE_SUPABASE_KEY);
