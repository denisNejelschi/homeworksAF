import Button from "../../components/button/Button";
import ButtonStyledComponent, { StyledButton } from "../../components/buttonStyledComponent/ButtonStyledComponent";


export default function Lesson09() {
    
    return(
        <div className="container">
            <h1>Lesson09</h1>
            <p>Styled components</p>
            <ButtonStyledComponent  />
            <Button buttonText="Push me" isGetButton={true} />
          <StyledButton primary={false}>Styled Button</StyledButton>

            
        </div>
    )
}