import SubTitle from "../shared/SubTitle";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  return (
    <div className="py-[84px]">
      <SubTitle icon={"/"} title={"Contacts"} text={"Contact with me!"} />

      <div className="w-full max-w-[900px] mx-auto mb-12">
        <p className="text-gray-clr text-base sm:text-xl  text-center">
          "I’m open to all kinds of opportunities, including freelance, remote,
          and on-site roles. Feel free to reach out if you have a project, job,
          or any other request—I’d be happy to connect!"
        </p>
      </div>

      <div>
        <SubTitle icon={"#"} title={"submit-contact-form"} />
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
