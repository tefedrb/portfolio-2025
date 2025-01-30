import styled from 'styled-components';

const Display = styled.div<{ flexbox?: boolean, name?: string }>`
  display: ${props => props.flexbox ? "flex" : "block"};
  flex-direction: ${props => props.flexbox ? "column" : "none"};
  justify-content: ${props => props.flexbox ? "center" : "none"};
  align-items: ${props => props.flexbox ? "center" : "none"};
  margin: ${props => props.flexbox ? "0" : "auto"};
  text-align: center;
  width: 90%;
  max-width: 800px;
  @media(max-height: 825px){
    display: ${props => props.flexbox ? "flex" : "block"};
    margin: ${props => props.flexbox ? "none" : "auto"};
  }
  @media(max-width: 630px){
    // display: block;
  }
`
const Project = (props: any) => {
  return (
    <Display flexbox={props.flexbox} name={"display project"}>
      {/* <p style={{textAlign: "center"}}>{props.name}</p> */}
      {props.component}
    </Display>
  )
}

export default Project;