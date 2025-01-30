import equipmentImg from '../../imgs/Equipped_Equipment.png';
import { TextWrap, Text, AppUI, ProjLinkWrap, ProjLink } from './styledComponents';

const Equipped = () => {
  return (
    <>
      <ProjLinkWrap>
        <ProjLink href="https://github.com/tefedrb/equipped" target="_blank">[ GitHub ]</ProjLink>
        <ProjLink>[ Demo ]</ProjLink>
      </ProjLinkWrap>
      <h1 style={{marginTop: "0"}}>Equipped</h1>
      <AppUI src={equipmentImg} />
      <TextWrap>
        <Text>
          Equipped is a video & photography equipment management application, 
          meant to help film collectives, media companies, or rental houses 
          keep track of all their equipment. A user can browse a catalog of items 
          and stash the ones they own into their company inventory. There is a feature 
          that allows you to see who has what piece of equipment checked out, along with 
          a history of the usage. There is also a message board that can utilized.
        </Text>
        <Text>
          I made this app after thinking about my time working for a small media company that
          could have used an equipment manager. This application would have been a good aid for keeping track 
          of who was using what and when.
        </Text>
      </TextWrap>
    </>
  )
}

export default Equipped;