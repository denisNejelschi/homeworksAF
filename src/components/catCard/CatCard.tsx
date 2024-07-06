import { useState } from "react";
import styled from "./catCard.module.css";
import Spinner from "../Spinner/Spinner";


interface IcatCardProps {
    imageUrl: string;
}

const CatCard = ({ imageUrl }: IcatCardProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    return (
        <div className={styled.catCard}>
            {isLoading && <Spinner />}
            <img src={imageUrl} alt="cat" onLoad={handleImageLoad} />
        </div>
    );
}

export default CatCard;
