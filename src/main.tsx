import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app";
import "./main.css";

const jsx = (
	<StrictMode>
		<App />
	</StrictMode>
);

createRoot(document.getElementById("root")!)
	//
	.render(jsx);
