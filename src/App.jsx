import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <div className="flex bg-slate-900	">
            <div className="flex-2">
              <Sidebar />
            </div>
            <div className="flex-1">
              <Home />
            </div>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
