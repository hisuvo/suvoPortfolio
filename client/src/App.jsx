import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="w-full max-w-[1024px] mx-auto">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <hr className="mt-8" />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
