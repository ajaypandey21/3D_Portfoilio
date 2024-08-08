import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onBlur = () => {};
  const onFocus = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Ajay",
          from_email: form.email,
          to_email: "pajay7686@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        // TODO: Show success message
        // TODO : HiDE THE ALERT
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container">
      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get In Touch</h1>
        <form
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
        >
          <label className="text-black-500 font-semibold">
            Name
            <input
              className="input"
              type="text"
              name="name"
              placeholder="john"
              value={form.name}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Email
            <input
              className="input"
              type="email"
              name="email"
              placeholder="john@gmail.com"
              value={form.email}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              required
            />
          </label>
          <label className="text-black-500 font-semibold">
            Your Message
            <textarea
              className="input"
              name="message"
              placeholder="Let me know how i can help you!"
              value={form.message}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              required
            />
          </label>
          <button
            type="submit"
            className="btn"
            onBlur={onBlur}
            onFocus={onfocus}
            disabled={isLoading}
          >
            {isLoading ? "Sending.." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
