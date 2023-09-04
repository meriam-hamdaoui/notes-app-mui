import { Routes, Route } from "react-router-dom";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/create-note" element={<CreateNote />} />
    </Routes>
  );
}

export default App;
