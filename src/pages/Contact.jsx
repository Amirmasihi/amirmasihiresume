import Header from "../components/Header";

const Contact = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center  items-center w-96 h-96 bg-white/5 mx-auto mt-12">
        <form className="flex flex-col items-center gap-8">
          <input
            type="text"
            placeholder="Name"
            className="w-72 p-3 h-12 border "
          />
          <input
            type="email"
            placeholder="Email"
            className="w-72 p-3 h-12 border "
          />
          <textarea
            className="w-72 h-20 border p-3"
            placeholder="Write Your Message..."
          ></textarea>
          <button className="w-72 h-12 bg-sky-500 outline" type="submit">
            submit
          </button>
        </form>
      </div>

      <div className="">
        <img src="/images/0a3073a8f7bc312cf44000f4b5971379.png" alt="" className="w-[200px] h-[200px] mx-12" />
      </div>
    </>
  );
};

export default Contact;
