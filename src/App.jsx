import { Routes, Route, Link } from "react-router-dom";
import LinkedListPage from "./pages/LinkedList";
import Stack from "./pages/Stack";
import Tree from "./pages/Tree";
import HashMaps from "./pages/HashMaps";
import Graphs from "./pages/Graphs";
import Sets from "./pages/Sets";
import QuickSort from "./pages/QuickSort";
import MergeSort from "./pages/MergeSort";
import HeapSort from "./pages/HeapSort";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/linked-list">Linked List</Link>
          </li>
          <li>
            <Link to="/stack">Stack</Link>
          </li>
          <li>
            <Link to="/tree">Tree</Link>
          </li>
          <li>
            <Link to="/hash-maps">Hash Maps / Tables</Link>
          </li>
          <li>
            <Link to="/graphs">Graphs</Link>
          </li>
          <li>
            <Link to="/sets">Sets</Link>
          </li>
          <li>
            <Link to="/quick-sort">Quick Sort</Link>
          </li>
          <li>
            <Link to="/merge-sort">Merge Sort</Link>
          </li>
          <li>
            <Link to="/heap-sort">Heap Sort</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/linked-list" element={<LinkedListPage />} />
        <Route path="/stack" element={<Stack />} />
        <Route path="/tree" element={<Tree />} />
        <Route path="/hash-maps" element={<HashMaps />} />
        <Route path="/graphs" element={<Graphs />} />
        <Route path="/sets" element={<Sets />} />
        <Route path="/quick-sort" element={<QuickSort />} />
        <Route path="/merge-sort" element={<MergeSort />} />
        <Route path="/heap-sort" element={<HeapSort />} />
      </Routes>
    </div>
  );
}

export default App;
