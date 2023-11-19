// import { invalidate } from '$app/navigation'
import { createSupabaseLoadClient } from '@supabase/auth-helpers-sveltekit'

export const load = async ({ fetch, data, depends }) => {
	depends('supabase:auth')

	const PUBLIC_SUPABASE_URL = process.env.SUPABASE_URL || 'supabase_url';
	const PUBLIC_SUPABASE_KEY = process.env.SUPABASE_PUBLIC_KEY || 'supabase_key';
	const supabase = createSupabaseLoadClient({
		supabaseUrl: PUBLIC_SUPABASE_URL,
		supabaseKey: PUBLIC_SUPABASE_KEY,
		event: { fetch },
		serverSession: data.session,
	})

	const {
		data: { session },
	} = await supabase.auth.getSession()

	return { supabase, session }
}