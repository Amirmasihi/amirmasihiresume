import Header from "../components/Header";
import { Link } from "react-router-dom";


const Projects = () => {
  return (
    <>
      <Header />
      <div className=" p-12">
        <h1 className="text-3xl text-center mt-12 ">New Project :</h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-4 my-8 mx-12  flex-wrap">
        <div className="w-96 h-96  bg-white/5">
          <Link to="/">
            <img
              src="/images/project-resume.png"
              alt=""
              className="w-96 h-60 object-cover"
            />
          </Link>
          <h1 className="p-3">Resume Amir Masihi</h1>
          <h1 className="p-3">react + tailwind css</h1>
          <p className="p-3 text-end">2025 / 10 / 17</p>
        </div>
        <div className="w-96 h-96 bg-white/5">
          <img
            src="/images/coming-soon.jpg"
            alt=""
            className="w-96 h-60 object-cover"
          />
          <h1 className="m-3">coming soon...</h1>
        </div>
        <div className="w-96 h-96 bg-white/5">
          <img
            src="/images/coming-soon.jpg"
            alt=""
            className="w-96 h-60 object-cover"
          />
          <h1 className="m-3">coming soon...</h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
