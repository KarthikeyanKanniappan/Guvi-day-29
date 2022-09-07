import Navbar from "./components/Navbar";
import Portal from "./components/Portal";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateStudent from "./components/CreateStudent";
import ViewStudent from "./components/ViewStudent";
import EditStudent from "./components/EditStudent";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="portal" element={<Portal />} />
          <Route path="create" element={<CreateStudent />} />
          <Route path="student/:id" element={<ViewStudent />} />
          <Route path="EditStudent/:id" element={<EditStudent />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
