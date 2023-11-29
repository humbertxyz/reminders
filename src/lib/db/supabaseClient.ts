import { createClient } from '@supabase/supabase-js'

const PUBLIC_SUPABASE_URL = process.env.SUPABASE_URL || 'supabase_url';
const PUBLIC_SUPABASE_KEY = process.env.SUPABASE_PUBLIC_KEY || 'supabase_key';

export const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_KEY)