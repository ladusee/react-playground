import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./main.css";
import { Providers } from "./providers";

const jsx = (
	<StrictMode>
		<Providers>
			<App />
		</Providers>
	</StrictMode>
);

createRoot(document.getElementById("root")!)
	//
	.render(jsx);
