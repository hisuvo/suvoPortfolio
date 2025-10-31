import Button from "../shared/Button";
import Input from "../shared/Input";
import Textarea from "../shared/Textarea";

const ContactForm = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full">
        <Input type={"text"} placeholder={"Name"} />
        <Input type={"email"} placeholder={"Email"} />
      </div>
      <Input type={"text"} placeholder={"Title"} />
      <Textarea placeholder={"Message"} />
      <Button className={"w-full"}>Send</Button>
    </div>
  );
};

export default ContactForm;
