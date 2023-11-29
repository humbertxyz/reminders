import type { Route, AuthRoutes } from '$lib/typing/constants';

export const AUTH_ROUTES: AuthRoutes = {
	redirectSuccessLogin: '/dashboard'
}

export const APP_ROUTES: Route[] = [
	{ path: '/', label: 'Home', highlight: true },
	{ path: '/accounts', label: 'Accounts', highlight: false },
]