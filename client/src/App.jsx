import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <header className="w-full max-w-[1024px] mx-auto">
        <Navbar />
      </header>

      {/* body of portfolio*/}
      <main className="w-full max-w-[1024px] mx-auto">
        <Outlet />
      </main>

      <hr className="mt-8" />

      {/* footer of portfolio */}
      <footer className="w-full max-w-[1024px] mx-auto">
        <Footer />
      </footer>
    </>
  );
}

export default App;
