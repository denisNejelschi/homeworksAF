import style from './animalCard.css'

function AnimalCard({animalData}){
  
  return (
    <div
    className='product-card'
      
    >
      <h4>{animalData.name}</h4>
      <p>I am {animalData.species}</p>

      <img src={animalData.img} alt="" />
     
    </div>
  );
}
export default AnimalCard;