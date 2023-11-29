export interface Route {
	path: string;
	label: string;
	highlight?: boolean;
};

export type AuthRoutes = {
	redirectSuccessLogin: string;
}
