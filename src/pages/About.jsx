import Header from "../components/Header";
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoHtml5 } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-12 py-16 px-16 ">
        <h1 className="text-3xl">About Me :</h1>
        <p className="text-lg">
          I’m Amir Masihi, a front-end developer focused on React and Tailwind.
          To me, coding isn’t just about building web pages — it’s about
          crafting experiences that users can connect with. I’m passionate about
          modern, minimalist design, and I always strive to balance visual
          beauty with optimal performance. Every project is an opportunity for
          me to turn an idea from concept into reality.
        </p>
        <h1 className="text-3xl">Skill Me :</h1>
        <div className="flex justify-center gap-3">
          <IoLogoHtml5
            size={62}
            className="hover:scale-125 transition-transform duration-300 "
          />
          <IoLogoCss3
            size={62}
            className="hover:scale-125 transition-transform duration-300"
          />
          <IoLogoJavascript
            size={62}
            className="hover:scale-125 transition-transform duration-300"
          />
          <RiTailwindCssFill
            size={62}
            className="hover:scale-125 transition-transform duration-300"
          />
          <FaReact
            size={62}
            className="hover:scale-125 transition-transform duration-300"
          />
          <FaGitAlt
            size={62}
            className="hover:scale-125 transition-transform duration-300"
          />
          <FaGithub
            size={62}
            className="hover:scale-125 transition-transform duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default About;
