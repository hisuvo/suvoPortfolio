import Button from "./shared/Button";
import DemoButton from "./shared/DemoButton";
import Input from "./shared/Input";
import LiveButton from "./shared/LiveButton";
import Textarea from "./shared/Textarea";

function App() {
  return (
    <div className="app_style">
      <Button>Contact me !!</Button>
      <DemoButton>Client</DemoButton>
      <DemoButton>Backend</DemoButton>
      <LiveButton />
      <br />
      <br />
      <br />
      <Input placeholder={"Name"} />
      <br />
      <Textarea placeholder={"Enter your info .."} />
    </div>
  );
}

export default App;
