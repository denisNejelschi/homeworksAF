import AnimalCard from "../../components/animalCard/AnimalCard"
import { lionData, zebraData } from "./data"
import './style.css'
import Button from "../../components/button/Button"


function Lesson04(){
    return(
        <div>
            <h1>Lesson04</h1>
            <AnimalCard animalData={lionData}/>            
            <AnimalCard animalData={zebraData}/>
            <Button buttonText = {'first'} isGetButton = {true}/>
            <Button buttonText ={'second'} isGetButton = {false}/>
            
        </div>
    )
}
export default Lesson04