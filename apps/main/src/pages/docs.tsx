import { Navigation } from "../components/navigation";

export default function Home() {
	return (
		<div className="container m-auto grid gap-4 p-4">
			<Navigation />
			<main className="rounded-md border p-4">Welcome to the docs page!</main>
		</div>
	);
}
