import Header from "../components/Header";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rg56sec",
        "template_ipueyph",
        form.current,
        "izVaE2LjxglDjWG5e"
      )
      .then(
        () => {
          alert("Massage send successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send Massage , please try again! ", error);
        }
      );

  };

  return (
    <>
      <Header />

      <div className="flex flex-col justify-center  items-center w-[400px] h-[450px] bg-white/5 mx-auto mt-32">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center gap-8"
        >
          <input
            placeholder="Name"
            type="text"
            name="user-name"
            className="w-72 p-3 h-12 border "
          />
          <input
            type="text"
            placeholder="subject"
            className="w-72 p-3 h-12 border "
            name="subject"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-72 p-3 h-12 border "
            name="user-email"
          />
          <textarea
            className="w-72 h-20 border p-3"
            placeholder="Write Your Message..."
            name="message"
          ></textarea>
          <button className="w-72 h-12 bg-sky-500 outline" type="submit">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
