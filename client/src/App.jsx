import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="w-full max-w-[1024px] mx-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
