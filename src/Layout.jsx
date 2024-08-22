import { NavLink } from "react-router-dom";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
	const [isCollapsed, setIsCollapsed] = useState(false);

	const toggleMenu = () => {
		setIsCollapsed(!isCollapsed);
	};

	return (
		<>
			<div className="flex grow h-screen w-screen">
				<div className="flex flex-1 flex-col">
					<header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
						<h1 className="text-xl font-semibold">
							<a href="/">Algorithms and Data Structures Playground</a>
						</h1>
						<a
							href="https://github.com/andrewjamesford/Algorithms-and-Data-Structures"
							className="inline-flex items-center justify-center whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ml-auto gap-1.5 text-sm"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="size-3.5"
								alt="Share icon"
							>
								<title>Share icon</title>
								<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
								<polyline points="16 6 12 2 8 6" />
								<line x1="12" x2="12" y1="2" y2="15" />
							</svg>
							Source Code
						</a>
					</header>
					<main className="flex flex-col h-full lg:flex-row gap-4 overflow-auto p-4 ">
						<aside>
							<div className="md:basis-1/5 lg:basis-1/6 flex h-full flex-col rounded-lg border p-4">
								<nav className="grid gap-6 ">
									<button className="" onClick={toggleMenu} type="button">
										{isCollapsed ? (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="size-3.5"
												alt="Arrow right icon"
											>
												<title>Arrow right icon</title>
												<polyline points="9 18 15 12 9 6" />
											</svg>
										) : (
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="size-3.5"
												alt="Arrow left icon"
											>
												<title>Arrow left icon</title>
												<polyline points="15 18 9 12 15 6" />
											</svg>
										)}
									</button>
									<ul
										className={`overflow-hidden transition-all duration-300 ${isCollapsed ? "hidden" : "block"}`}
									>
										<li>
											<NavLink
												to="/binary-search"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Binary Search
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/depth-first-search"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Depth First Search
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Graphs
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/greedy"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Greedy
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/hash-maps"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Hash Maps / Tables
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/hash-string"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Hash String
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/heap-sort"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Heap Sort
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/linked-list"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Linked List
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/merge-sort"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Merge Sort
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/queues"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Queues
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/quick-sort"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Quick Sort
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/sets"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Sets
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/stack"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Stack
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/tower-hanoi"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Tower of Hanoi
											</NavLink>
										</li>
										<li>
											<NavLink
												to="/tree"
												className={({ isActive }) =>
													isActive ? "font-bold" : ""
												}
											>
												Tree
											</NavLink>
										</li>
									</ul>
								</nav>
							</div>
						</aside>

						<article className="flex-1">
							<div className="md:basis-4/5 lg:basis-5/6 flex h-full flex-col rounded-xl bg-muted/50 p-4 border">
								<div className="flex flex-col flex-grow h-full max-h-fit overflow-auto rounded-[4px] ">
									{children}
								</div>
							</div>
						</article>
					</main>
				</div>
			</div>
		</>
	);
}

export default Layout;
