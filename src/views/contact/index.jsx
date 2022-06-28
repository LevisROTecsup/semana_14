import { useState } from "react";

const initialState = {
  name: "",
  lastname: "",
  company: "",
  email: "",
  phone: "",
};

const Contact = () => {
  const [info, setInfo] = useState(initialState);

  const [showInfo, setShowInfo] = useState(false);

  const handleChange = (e) => {
    let { name, value } = e.target;

    setInfo({
      ...info,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowInfo(true);

    setTimeout(() => {
      setShowInfo(false);
      setInfo(initialState);
    }, 5000);
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Contacto</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
          <div className="col-span-1">
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900">
              Nombres
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={info.name}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900">
              Apellidos
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={info.lastname}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">
              Empresa
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={info.company}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="col-span-1">
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">
              Teléfono
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={info.phone}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
          <div className="mb-6 col-span-1">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={info.email}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              onChange={(e) => handleChange(e)}
              required
            />
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Enviar
        </button>
      </form>

      {showInfo && (
        <div className="font-semibold text-lg mt-10">
          <h3>Información enviada</h3>
          <pre className="font-sans"> {JSON.stringify(info, null, 2)} </pre>
        </div>
      )}
    </>
  );
};

export default Contact;
