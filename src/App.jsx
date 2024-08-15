import { Routes, Route } from "react-router-dom";
import LinkedListPage from "./pages/LinkedList";
import Stack from "./pages/Stack";
import Tree from "./pages/Tree";
import HashMaps from "./pages/HashMaps";
import Graphs from "./pages/Graphs";
import Sets from "./pages/Sets";
import QuickSort from "./pages/QuickSort";
import MergeSort from "./pages/MergeSort";
import HeapSort from "./pages/HeapSort";
import Queues from "./pages/Queues";
import Greedy from "./pages/Greedy";
import Layout from "./Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Graphs />} />
          <Route path="/greedy" element={<Greedy />} />
          <Route path="/linked-list" element={<LinkedListPage />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/tree" element={<Tree />} />
          <Route path="/hash-maps" element={<HashMaps />} />
          <Route path="/sets" element={<Sets />} />
          <Route path="/queues" element={<Queues />} />
          <Route path="/quick-sort" element={<QuickSort />} />
          <Route path="/merge-sort" element={<MergeSort />} />
          <Route path="/heap-sort" element={<HeapSort />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
