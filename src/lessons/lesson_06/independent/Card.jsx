import { v4 } from "uuid";

const Card = ({ moto }) => {
  console.log(moto);
  console.log(v4());

  return (
    <div key={v4()} className="card">
      <h2>{moto.manufacturer}</h2>
      <p>{moto.model}</p>
      <p>{moto.year}</p>
      <p>{moto.description}</p>
      <ol>
        {moto.color.map((color) => (
          <li key={v4()}>{color}</li>
        ))}
      </ol>
      <img src={moto.image} alt="netu" />
    </div>
  );
};
export default Card;
