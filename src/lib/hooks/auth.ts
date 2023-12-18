import { supabase } from "$lib/db/supabaseClient";
import { AUTH_ROUTES } from "$lib/data/constants";

async function loginWithMagicLink(email_to_login_with: string) {
	const { data, error } = await supabase.auth.signInWithOtp({
		email: email_to_login_with,
		options: {
			shouldCreateUser: true,
			emailRedirectTo: AUTH_ROUTES.redirectSuccessLogin
		}
	});

	return { data, error };
}

async function registerWithMagicLink(email_to_register: string) {
	const { data, error } = await supabase.auth.signInWithOtp({
		email: email_to_register,
		options: {
			shouldCreateUser: true,
			emailRedirectTo: AUTH_ROUTES.redirectSuccessLogin
		}
	});

	return { data, error };
}

async function signOut() {
	const { error } = await supabase.auth.signOut()

	return { error };
}

export {
	loginWithMagicLink,
	registerWithMagicLink,
	signOut
}