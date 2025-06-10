import styled from "styled-components";

interface FolderWrapperProps {
  name: string;
}

interface FolderWrapperProps {
  name: string;
}

const FolderFileWrapper = styled.div<FolderWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 75px;
  height: auto;
  align-items: center;
  img {
    width: 100%;
    height: 100%;
  }
  // ADJUSTING FOR MOBILE VIEW
  @media (max-width: 948px) and (min-height: 500px) {
    // width: auto;
    width: 55px;
    height: auto;
    margin-right: 0;
  }
  @media (max-width: 667px) and (max-height: 375px) {
  
  }
  
  @media screen and (max-width: 651px), screen and (max-height: 757px) {
    margin-top: 2%;
    color: green;
    flex-direction: column;
    justify-content: center;
  }
`;

export default FolderFileWrapper;
