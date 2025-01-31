import styled from 'styled-components';
import gitHubImg from '../../assets/icons/github.png';
import linkedInImg from '../../assets/icons/linkedin.png';
import gmailImg from '../../assets/icons/gmail.png';
import twitterImg from '../../assets/icons/twitter.png';

const ContactOuterWrap = styled.div`
  height: 70%;
  width: 70%;
  margin: auto;
  text-align: center;
  border: 2px solid black;
  @media screen and (max-width: 651px), screen and (max-height: 757px) {
    height: 98%;
  }
`;

const ContactInnerWrap = styled.div`
  display: grid;
  grid-template-rows: repeat(2, minmax(0, .5fr));
  grid-template-columns: repeat(2, minmax(0, .5fr));
  align-items: center;
  height: 93%;
  width: 100%;
`;

const ContactDiv = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const Icon = styled.img`
  height: 60px;
  width: 60px;
`;

const WindowTop = styled.div`
  color: white;
  width: 100%;
  height: 15px;
  background-color: black;
  margin: 0;
  padding: 0;
`;

const Contact = () => {
  return (
    <ContactOuterWrap>
      <WindowTop>
        <h1 style={{ margin: "0", fontSize: "inherit" }}>contact.js</h1>
      </WindowTop>
      <ContactInnerWrap>
        <ContactDiv href="https://github.com/tefedrb" target="_blank" rel="noopener">
          <Icon src={gitHubImg} />
          <p>GitHub</p>
        </ContactDiv>
        <ContactDiv href="https://www.linkedin.com/in/tefedrb/" target="_blank" rel="noopener">
          <Icon src={linkedInImg} />
          <p>LinkedIn</p>
        </ContactDiv>
        <ContactDiv>
          <Icon src={gmailImg} />
          tefebell@gmail.com
        </ContactDiv>
        <ContactDiv href="https://twitter.com/HypedOnTofu" target="_blank" rel="noopener">
          <Icon src={twitterImg} />
          <p>Twitter</p>
        </ContactDiv>
      </ContactInnerWrap>
    </ContactOuterWrap>
  );
};

export default Contact;