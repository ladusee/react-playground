import { FC } from "react";
import { ThemeProvider } from "./components/theme-provider";

type Props = {
	children: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
	return (
		<>
			<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
				{children}
			</ThemeProvider>
		</>
	);
};
