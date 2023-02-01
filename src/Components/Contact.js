import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import ReactLoading from "react-loading";
import "./style.css";

const Contact = () => {
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbwS_6wJy8N5HA7Y0pLbdnS_e-q-2xId1uIjR09BnQT35Klz0aVuaafF1yYGGizWhpDd6A/exec";
  const form = document.forms["forms"];
  const bodyFormData = new FormData();

  const [isSubmit, setSubmit] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pesan, setPesan] = useState("");

  const FormSwal = withReactContent(swal);

  const sendForm = (e) => {
    setSubmit(true);
    e.preventDefault();
    bodyFormData.append("nama", name);
    bodyFormData.append("email", email);
    bodyFormData.append("pesan", pesan);
    axios({
      method: "post",
      url: scriptURL,
      data: bodyFormData,
    })
      .then((res) => {
        console.log(res);
        FormSwal.fire({
          title: "Berhasil!",
          text: "Berhasil mengirimkan feedback!",
          icon: "success",
          allowOutsideClick: false,
        }).then((isClicked) => {
          if (isClicked) e.target.reset();
        });
      })
      .catch((res) => {
        console.error(res);
      })
      .finally(() => {
        setSubmit(false);
      });
  };

  return (
    <section id="contact" className="flex p-32 max-lg:flex-col max-lg:px-4 ">
      <div className="w-1/2 flex flex-col items-center max-lg:items-center max-lg:w-full ">
        <h2 className="title -mb-10 max-lg:text-6xl max-lg:text-center">
          Contact
        </h2>
        <h4 className="sub-title z-10 max-lg:text-3xl max-lg:mt-1 max-lg:text-center">
          Lets Chat
        </h4>

        {/* <span className="text-lg mt-14 mb-4 text-gray-400">* * *</span> */}

        <p className="text-center text-gray-400 text-sm px-20 leading-relaxed max-lg:px-2">
          Jika anda mempunyai ktitik & saran harap mengisi form di samping, dan
          dengan anda mengisi form Makan KuY berusaha berkembang
        </p>
      </div>
      <div className="w-1/2 px-10 max-lg:w-full max-lg:mt-5">
        <form
          name="forms"
          onSubmit={(e) => {
            sendForm(e);
          }}
        >
          <div className="flex flex-col my-3">
            <label>Your Name</label>
            <input
              type="nama"
              className="rounded-md border-gray-300 border-yellow-600"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="flex flex-col my-3">
            <label>Your Email</label>
            <input
              type="email"
              className="rounded-md border-gray-300"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col my-3">
            <label>You messege</label>
            <textarea
              cols="50"
              rows="10"
              className="rounded-md border-gray-300"
              name="pesan"
              onChange={(e) => setPesan(e.target.value)}
            />
          </div>
          <div className="btn-about py-6 flex justify-center">
            <button className="py-2 px-5 bg-orange-400 text-white rounded-full w-full ">
              {isSubmit ? (
                <>
                  <ReactLoading type="cylon" width={24} height={24} /> Send
                  Message
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
