import NextLink from "next/link";
import { useRouter } from "next/router";
import { ComponentProps, useMemo } from "react";

import { cn } from "../lib/utils";

function Link({ className, href, ...props }: ComponentProps<"a">) {
	const router = useRouter();

	const isActive = useMemo(() => {
		return router.pathname === href;
	}, [router, href]);

	return (
		<NextLink href={href ?? ""} legacyBehavior passHref>
			<a
				{...props}
				className={cn(
					"rounded-md p-2",
					isActive && "bg-white text-black",
					className,
				)}
			/>
		</NextLink>
	);
}

export function Navigation() {
	return (
		<nav className="rounded-md border p-4">
			<ul className="flex gap-4">
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<Link href="/docs">Docs</Link>
				</li>
			</ul>
		</nav>
	);
}
