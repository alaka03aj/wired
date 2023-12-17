import { createClient } from '@supabase/supabase-js'
const supabaseUrl = "https://zopuqalglvctvhwzrwlf.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpvcHVxYWxnbHZjdHZod3pyd2xmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI3MjUxODUsImV4cCI6MjAxODMwMTE4NX0.-IgWgWtC50THAAM7AGOrJ7Qi_yqy_mDZM2ISEGhjMJA"
export const supabase = createClient(supabaseUrl, supabaseKey)
