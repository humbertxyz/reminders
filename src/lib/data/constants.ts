import type { Route } from '$lib/typing/constants';

export const APP_ROUTES: Route[] = [
	{ path: '/', label: 'Home', highlight: true },
	{ path: '/accounts', label: 'Accounts', highlight: false },
]