import { Button } from "@/components/ui/button";
import { AppWindowMac, Loader2, Mail } from "lucide-react";
import { FC } from "react";
import { ModeToggle } from "./components/mode-toggle";

type WrapProps = {
	children: React.ReactNode;
};

const Wrap: FC<WrapProps> = ({ children }) => (
	<div className="flex flex-row gap-4 items-center flex-wrap">
		{/*  */}
		{children}
	</div>
);

export const App: FC = () => {
	return (
		<>
			<section className="self-center flex flex-col gap-3 w-full max-w-4xl mx-auto">
				<h1 className="relative font-bold underline bg-muted px-8 py-4 rounded-sm text-center">
					<span>Tailwindcss + Shadcn UI</span>

					<div className="absolute right-4 top-1/2 -translate-y-1/2">
						<ModeToggle />
					</div>
				</h1>

				<hr className="my-5" />

				<Wrap>
					<Button variant={"default"} size={"sm"}>
						Default "sm"
					</Button>

					<Button variant={"default"} size={"default"}>
						Default
					</Button>

					<Button variant={"default"} size={"lg"}>
						Default "lg"
					</Button>

					<Button variant={"default"} size={"lg"} disabled>
						Default "lg"
					</Button>
				</Wrap>

				<Wrap>
					<Button variant={"secondary"} size={"sm"}>
						Secondary "sm"
					</Button>

					<Button variant={"secondary"} size={"default"}>
						Secondary
					</Button>

					<Button variant={"secondary"} size={"lg"}>
						Secondary "lg"
					</Button>

					<Button variant={"secondary"} size={"lg"} disabled>
						Secondary "lg"
					</Button>
				</Wrap>

				<Wrap>
					<Button variant={"outline"} size={"sm"}>
						Outline "sm"
					</Button>

					<Button variant={"outline"} size={"default"}>
						Outline
					</Button>

					<Button variant={"outline"} size={"lg"}>
						Outline "lg"
					</Button>

					<Button variant={"outline"} size={"lg"} disabled>
						Outline "lg"
					</Button>
				</Wrap>

				<Wrap>
					<Button variant={"ghost"} size={"sm"}>
						Ghost "sm"
					</Button>

					<Button variant={"ghost"} size={"default"}>
						Ghost
					</Button>

					<Button variant={"ghost"} size={"lg"}>
						Ghost "lg"
					</Button>

					<Button variant={"ghost"} size={"lg"} disabled>
						Ghost "lg"
					</Button>
				</Wrap>

				<Wrap>
					<Button variant={"link"} size={"sm"}>
						Link "sm"
					</Button>

					<Button variant={"link"} size={"default"}>
						Link
					</Button>

					<Button variant={"link"} size={"lg"}>
						Link "lg"
					</Button>

					<Button variant={"link"} size={"lg"} disabled>
						Link "lg"
					</Button>
				</Wrap>

				<Wrap>
					<Button variant={"destructive"} size={"sm"}>
						Destructive "sm"
					</Button>

					<Button variant={"destructive"} size={"default"}>
						Destructive
					</Button>

					<Button variant={"destructive"} size={"lg"}>
						Destructive "lg"
					</Button>

					<Button variant={"destructive"} size={"lg"} disabled>
						Destructive "lg"
					</Button>
				</Wrap>

				<Wrap>
					<Button variant={"default"} size={"icon"}>
						<AppWindowMac />
					</Button>

					<Button variant={"secondary"} size={"icon"}>
						<AppWindowMac />
					</Button>

					<Button variant={"outline"} size={"icon"}>
						<AppWindowMac />
					</Button>

					<Button variant={"ghost"} size={"icon"}>
						<AppWindowMac />
					</Button>

					<Button variant={"link"} size={"icon"}>
						<AppWindowMac />
					</Button>

					<Button variant={"destructive"} size={"icon"}>
						<AppWindowMac />
					</Button>
				</Wrap>

				<hr className="my-5" />

				<Button>
					<Mail className="mr-2 h-4 w-4" /> Login with Email
				</Button>

				<Button disabled>
					<Loader2 className="mr-2 h-4 w-4 animate-spin" />
					Please wait
				</Button>
			</section>
		</>
	);
};
