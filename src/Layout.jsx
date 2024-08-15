import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <div className="flex grow h-screen w-screen">
        <div className="flex flex-1 flex-col">
          <header className="sticky top-0 z-10 flex h-[57px] items-center gap-1 border-b bg-background px-4">
            <h1 className="text-xl font-semibold">
              Algorithms and Data Structures Playground
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
              >
                <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"></path>
                <polyline points="16 6 12 2 8 6"></polyline>
                <line x1="12" x2="12" y1="2" y2="15"></line>
              </svg>
              Source Code
            </a>
          </header>
          <main className="flex flex-col h-full lg:flex-row gap-4 overflow-auto p-4 ">
            <div className="md:basis-1/5 lg:basis-1/6 flex h-full flex-col rounded-lg border p-4">
              <nav className="grid gap-6 ">
                <ul>
                  <li>
                    <Link to="/">Graphs</Link>
                  </li>
                  <li>
                    <Link to="/greedy">Greedy</Link>
                  </li>
                  <li>
                    <Link to="/hash-maps">Hash Maps / Tables</Link>
                  </li>
                  <li>
                    <Link to="/hash-string">Hash String</Link>
                  </li>
                  <li>
                    <Link to="/heap-sort">Heap Sort</Link>
                  </li>
                  <li>
                    <Link to="/linked-list">Linked List</Link>
                  </li>
                  <li>
                    <Link to="/merge-sort">Merge Sort</Link>
                  </li>
                  <li>
                    <Link to="/queues">Queues</Link>
                  </li>
                  <li>
                    <Link to="/quick-sort">Quick Sort</Link>
                  </li>
                  <li>
                    <Link to="/sets">Sets</Link>
                  </li>
                  <li>
                    <Link to="/stack">Stack</Link>
                  </li>
                  <li>
                    <Link to="/tower-hanoi">Tower of Hanoi</Link>
                  </li>
                  <li>
                    <Link to="/tree">Tree</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="md:basis-4/5 lg:basis-5/6 flex h-full flex-col rounded-xl bg-muted/50 p-4 border">
              <div className="flex flex-col flex-grow h-full max-h-fit overflow-auto rounded-[4px] pt-4">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Layout;
