import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Button from "./shared/Button";
import DemoButton from "./shared/DemoButton";
import Input from "./shared/Input";
import LiveButton from "./shared/LiveButton";
import Textarea from "./shared/Textarea";

function App() {
  return (
    <div className="app_style">
      <Navbar />
      <Button>Contact me !!</Button>
      <DemoButton>Client</DemoButton>
      <DemoButton>Backend</DemoButton>
      <LiveButton />
      <br />
      <br />
      <br />
      <Contact />
    </div>
  );
}

export default App;
