import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const MainContent = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row justify-between items-center m-16 gap-8 my-32 mx-12 align-middle">
        <div className="">
          <img
            src="/images/stickman.png"
            alt=""
            className="w-96 h-96 object-cover"
          />
        </div>
        <div className="flex flex-col gap-4  ">
          <h1 className="text-4xl ">
            im Amir <span className="text-sky-500 text-3xl">Masihi</span>
          </h1>
          <h2 className="text-xl">Front end developer</h2>
          <p className="w-96">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            esse quas delectus eveniet voluptate earum itaque corporis
            praesentium, tempore culpa ea tempora molestias dicta pariatur id
            cumque vitae laborum enim.
          </p>
          <div className="flex mt-2 gap-4">
            <a href="https://github.com/Amirmasihi">
              <FaGithub
                className="hover:scale-125 transition-transform duration-300 cursor-pointer"
                size={32}
              />
            </a>
            <a href="https://www.linkedin.com/in/amir-masihi-1a0bab350?utm_source=share&amp;utm_campaign=share_via&amp;utm_content=profile&amp;utm_medium=android_app">
              <FaLinkedin
                className="hover:scale-125 transition-transform duration-300 cursor-pointer"
                size={32}
              />
            </a>
            <a href="https://t.me/amirmasihi">
              <FaTelegram
                className="hover:scale-125 transition-transform duration-300 cursor-pointer"
                size={32}
              />
            </a>
            <a href="mailto:amirmasihi1387@gmail.com">
              <BiLogoGmail
                className="hover:scale-125 transition-transform duration-300 cursor-pointer"
                size={32}
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainContent;
