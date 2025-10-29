import { Telescope } from "lucide-react";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Button from "./shared/Button";
import DemoButton from "./shared/DemoButton";
import LiveButton from "./shared/LiveButton";
import Title from "./shared/Title";

function App() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <Button>Contact me !!</Button>
      <DemoButton>Client</DemoButton>
      <DemoButton>Backend</DemoButton>
      <LiveButton>{<Telescope size={18} />}</LiveButton>
      <br />
      <div className="w-full max-w-8/12 mx-auto my-8">
        <Title />
        <br />
        <Contact />
      </div>
    </div>
  );
}

export default App;
