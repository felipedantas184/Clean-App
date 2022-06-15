import MenuBlocks from "../MenuBlocks";
import { SportsContainer, SportsHeading, SportsWrapper } from "./SportsStyles";

const Sports = () => {
  return ( 
    <SportsContainer>
      <SportsWrapper>
        <SportsHeading>Treinos</SportsHeading>

        <MenuBlocks />
      </SportsWrapper>
    </SportsContainer>
   );
}
 
export default Sports;