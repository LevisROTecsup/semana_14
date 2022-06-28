import { Link } from "react-router-dom";

import { getIdFromUrl } from "../../libs";

const SecondaryCard = ({ name, image, status, gender, origin, location }) => {
  return (
    <>
      <div className="card">
        <img src={image} alt={name} />
        <div className="containerBody">
          <h4>{name}</h4>
          <p>
            <b>Estado</b>:{" "}
            <span>
              {status === "Alive" && "Vivo"}
              {status === "Dead" && "Muerto"}
              {status === "unknown" && "Desconocido"}
            </span>
          </p>
          <p>
            <b>Género</b>:{" "}
            <span>
              {gender === "Female" && "Femenino"}
              {gender === "Male" && "Masculino"}
              {gender === "Genderless" && "Sin género"}
              {gender === "unknown" && "Desconocido"}
            </span>
          </p>
          <p>
            <b>Origen</b>: {origin.name}
          </p>
          <p>
            <b>Ubicación</b>: {location.name}
          </p>
        </div>
      </div>
    </>
  );
};

export default SecondaryCard;
