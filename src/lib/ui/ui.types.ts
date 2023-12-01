export interface ButtonProps {
	text: string;
	onClick?: () => void;
	disabled?: boolean;
	type?: "button" | "submit" | "reset";
	flavor?: "primary" | "success" | "warning" | "danger";
	is_block?: boolean;
}