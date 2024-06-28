import { useState } from "react";
import style from "./catFacts.module.css";
import Button from "../button/Button";
import Spinner from "../Spinner/Spinner";
import CatCardMainComponent from "../catCard/CatCardMainComponent";
import { faArrowDownLong, faCat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ICatFact {
  fact: string;
  length: number;
}

const CatFacts = () => {
  const [facts, setFacts] = useState<ICatFact[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  async function getCatFacts() {
    setIsLoading(true);

    const response = await fetch("https://catfact.ninja/fact");
    const data = await response.json();
    setFacts((prev) => [...prev, data]);

    setIsLoading(false);
  }

  const deleteFact = (factToDelete: ICatFact) => {
    setFacts((prevFacts) => prevFacts.filter((fact) => fact !== factToDelete));
  };

  const deleteAll = () => {
    setFacts([]);
  };

  return (
    <div>
      <div className={style.loader}>{isLoading && <Spinner />}</div>
      <div className={style.container}>
        {facts.length > 0 ? (
          <>
            <h1>Cat Facts</h1>
            <div>              
              {facts.map((fact, index) => (
                <div key={index} className={style.factContainer}>
                  <p>{fact.fact}</p>
                  <CatCardMainComponent />
                  <Button
                    buttonText="Delete"
                    onButtonClick={() => deleteFact(fact)}
                    isGetButton={true}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <div>
            <p>No facts yet. Click  <span> {<FontAwesomeIcon icon={faArrowDownLong} />}</span> to start!</p>
            <p><span><FontAwesomeIcon icon={faCat} /></span></p>
          </div>
        )}

        <div className={style.buttonContainer}>
          <Button buttonText="Get Facts" onButtonClick={getCatFacts} />
          {facts.length > 0 && (
            <Button
              buttonText="Delete All"
              onButtonClick={deleteAll}
              isGetButton={true}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CatFacts;
