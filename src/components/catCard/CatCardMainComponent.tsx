import React, { useEffect, useState } from "react";
import CatCard from "./CatCard";
import Button from "../button/Button";
import style from "./catCardMainComponent.module.css";

export default function CatCardMainComponent() {
  const [catImage, setCatImage] = useState<string>("");

  async function getCatImage() {
    const res = await fetch("https://api.thecatapi.com/v1/images/search");
    const data = await res.json();
    setCatImage(data[0].url);
  }

  useEffect(() => {
    getCatImage();
  }, []);

  return (
    <div className={style.catCardMainComponent}>
      <h2>catCardMainComponent</h2>
      <Button
        buttonText="another image"
        onButtonClick={getCatImage}
        isGetButton={false}
      />
      <div className="catCardContainer">
        <CatCard imageUrl={catImage} />
      </div>
    </div>
  );
}
