"use client";
import { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [file, setFile] = useState(null);
  const [fileExtension, setFileExtension] = useState("");
  const [name, setName] = useState("");
  const [cargo, setCargo] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const notify = () =>
    toast.success("Mensaje enviado", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!acceptPolicy) {
      return alert("Debes aceptar la política de privacidad");
    }
    const userData = {
      name,
      cargo,
      email,
      phone,
    };
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ file, userData, fileExtension }),
    }).then((res) => {
      if (res.ok) {
        notify();
        form.current.reset();
      }
    });
  };

  return (
    <section
      className="bg-background font-montserrat p-5"
      id="contact"
    >
      <div className="max-w-screen-xl mx-auto my-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-4xl text-center font-museomoderno font-bold tracking-tight text-secondary">
          Contacto
        </h2>
      </div>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mx-auto pt-5 max-w-xl sm:pt-14"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="nombre"
              className="block text-sm font-semibold leading-6 text-text"
            >
              Nombre completo
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="nombre"
                id="nombre"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2  shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="cargo"
              className="block text-sm font-semibold leading-6 text-text"
            >
              Cargo
            </label>
            <div className="mt-2.5">
              <input
                required
                type="text"
                name="cargo"
                id="cargo"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                onChange={(e) => setCargo(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-text"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                required
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="telNum"
              className="block text-sm font-semibold leading-6 text-text"
            >
              Teléfono
            </label>
            <div className="mt-2.5">
              <input
                required
                type="tel"
                name="telNum"
                id="telNum"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>
          <div className="">
            <label
              htmlFor="file"
              className="block text-sm font-semibold leading-6 text-text"
            >
              Sube tu CV
            </label>
            <div className="mt-2.5">
              <input
                required
                type="file"
                accept=".pdf,.doc,.docx,.odt"
                name="file"
                id="file"
                className="text-sm text-grey-500
                file:mr-5 file:py-2 file:px-6
                file:rounded-md file:border-0
                file:text-sm file:font-medium
                file:bg-accent file:text-white
                hover:file:cursor-pointer hover:file:bg-secondary
              "
                onChange={(e) => {
                  const file = e.target.files[0];
                  const fileExtension = file.name.split(".").pop();
                  if (
                    fileExtension !== "pdf" &&
                    fileExtension !== "doc" &&
                    fileExtension !== "docx" &&
                    fileExtension !== "odt"
                  ) {
                    e.target.value = null;
                    return alert("Solo se permiten archivos .pdf, .doc, .docx y .odt");
                  }
                  setFileExtension(fileExtension);
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    const fileData = e.target.result;
                    setFile(fileData);
                  };
                  reader.readAsDataURL(file);
                }}
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <div className="flex items-center">
              <input
                required
                type="checkbox"
                name="acceptPolicy"
                id="acceptPolicy"
                className="rounded text-primary border-0 focus:ring-2 focus:ring-inset focus:ring-primary"
                onChange={(e) => setAcceptPolicy(e.target.checked)}
              />
              <label
                htmlFor="acceptPolicy"
                className="ml-2 text-sm font-semibold leading-6 text-text"
              >
                Acepto que YMe pueda utilizar mis datos y compartirlos con posibles empleadores.
                {/* <a
                  href="#"
                  className="text-primary hover:text-secondary"
                  target="_blank"
                >
                  política de privacidad
                </a> */}
              </label>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-accent px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            Enviar
          </button>
          <ToastContainer />
        </div>
      </form>
    </section>
  );
}
