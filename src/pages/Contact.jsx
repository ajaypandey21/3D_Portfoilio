import { Suspense, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fox } from "../models";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const { alert, showAlert, hideAlert } = useAlert();

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onBlur = () => setCurrentAnimation("idle");

  const onFocus = () => setCurrentAnimation("walk");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

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
          reply_to: form.email,
          subject: `New message from ${form.name}`,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setCurrentAnimation("idle");
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setIsLoading(false);
          console.error(error);
          setCurrentAnimation("idle");

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };
  return (
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">
      {alert.show && <Alert {...alert} />}

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
      <div className="lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]">
        <Canvas
          camera={{
            position: [0, 0, 5],
            fov: 75,
            near: 0.1,
            far: 1000,
          }}
        >
          <directionalLight position={[0, 0, 1]} intensity={2.5} />
          <ambientLight intensity={1} />
          <pointLight position={[5, 10, 0]} intensity={2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={2}
          />

          <Suspense fallback={<Loader />}>
            <Fox
              currentAnimation={currentAnimation}
              position={[0.5, 0.35, 0]}
              rotation={[12.629, -0.6, 0]}
              scale={[0.5, 0.5, 0.5]}
            />
          </Suspense>
        </Canvas>
      </div>
    </section>
  );
};

export default Contact;
