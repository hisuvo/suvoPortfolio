import { Link } from "react-router";
import Banner from "../components/Banner";
import PersonTheory from "../components/PersonTheory";
import ProjectList from "../components/ProjectList";
import Title from "../shared/Title";
import Skills from "../components/Skills";
import SelfInfo from "../components/SelfInfo";
import ContactForm from "../components/ContactForm";

const Home = () => {
  return (
    <div className="mt-8">
      <Banner />

      <PersonTheory />

      {/* project */}
      <div className="mt-20 space-y-12">
        {/* title and all veiew project link */}

        <div className="grid grid-cols-2">
          <Title title={"Projects"} />{" "}
          <Link
            className="text-right cursor-pointer hover:text-secondary-clr"
            to={"/works"}
            target="_blank"
          >
            View All
          </Link>
        </div>

        {/* Project Components */}
        <ProjectList limit={3} />
      </div>

      {/* Skills Components */}
      <div className="mt-20 space-y-12">
        {/* components title */}
        <Title title={"Skills"} />

        <div className="flex gap-4">
          {/* left side */}
          <div className="w-full max-w-[650px] flex-1">
            <Skills />
          </div>

          {/* rigth side */}
          <div></div>
        </div>
      </div>

      {/* About-me Components */}
      <div className="mt-20">
        <Title title={"about-me"} />
        <SelfInfo />
      </div>

      {/* Contact Components */}
      <div className="my-20 space-y-12">
        <Title title={"contacts"} />

        {/* contact form */}
        <div className="grid grid-cols-1 sm:grid-cols-5">
          <div className="sm:col-span-2"></div>

          <div className="sm:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
