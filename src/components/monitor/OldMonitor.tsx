import styled from 'styled-components';
import { FC, ReactNode } from 'react';

interface MonitorProps {
  children: ReactNode;
}

const MonitorWrapper = styled.div`
  pointer-events: none;
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: transparent;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  z-index: 1;
`;

const MonitorTop = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 4.1em;
  width: 100%;
  background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
  color: black;
  box-shadow: 15px 9px 5px -5px black;
  @media (max-height: 825px) {
    height: 2.5em;
  }
`;

const MonitorInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  color: #755D4F;
  font-size: .9em;
`;

const MonitorVersion = styled.p`
  margin-right: 50px;
  margin-top: 2em;
  margin-bottom: 10px;
  @media (max-height: 825px) {
    margin-top: .6em;
    margin-bottom: .2em;
  }
`;

const MonitorName = styled(MonitorVersion)`
  margin-left: 50px;
  margin-right: 0px;
`;

const TopWrap = styled.div`
  display: flex;
  width: 100%;
`;

const InnerTop = styled.div`
  width: 100%;
  z-index: 1;
  border-top: 10px solid rgb(127,119,88);
  box-sizing: border-box;
`;

const Bumper = styled.div`
  width: 2.3em;
  height: .7em;
  @media (max-width: 650px) {
    width: 1.1em;
  }
`;

const MonitorBottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
  box-shadow: 15px 9px 5px 12px black;
  height: 3.6em;
  @media (max-height: 825px) {
    height: 2.1em;
  }
`;

const BottomWrap = styled.div`
  display: flex;
  z-index: 0;
  width: 100vw;
  height: 100%;
  @media (max-height: 825px) {
    z-index: 1;
  }
`;

const InnerBottom = styled.div`
  align-self: flex-start;
  width: 100%;
  z-index: 1;
  border-left: 10px solid transparent;
  border-bottom: 10px solid rgb(267,259,228);
  border-right: 10px solid transparent;
  box-sizing: border-box;
  @media (max-height: 825px) {
    border-bottom: 8px solid rgb(267,259,228);
  }
`;

const Logo = styled.p`
  font-family: 'Diplomata', cursive;
  color: #755D4F;
  margin-top: 0px;
`;

const InnerMonitor = styled.div`
  z-index: 1;
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100%;
`;

const MonitorRight = styled.div`
  display: flex;
  z-index: 1;
  background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
  width: 2.8em;
  height: 100%;
  box-shadow: -9px 0px 8px -8px black;
  @media(max-width: 1420px) {
    width: 2.7em;
  }
  @media(max-width: 746px) {
    width: 2.7em;
  }
  @media (max-width: 650px) {
    width: 1.6em;
  }
`;

const InnerRight = styled.div`
  height: 100%;
  z-index: 3;
  border-top: 10px solid transparent;
  border-right: 10px solid rgb(177,169,138);
  transform: translate(0px, -10px);
  @media (max-height: 825px) {
    border-bottom: 2px solid transparent;
  }
`;

const MonitorLeft = styled(MonitorRight)`
  justify-content: flex-end;
  background: linear-gradient(to right, rgb(227,219,188), rgb(227,219,188));
  box-shadow: 10px 0px 8px -8px black;
`;

const InnerLeft = styled.div`
  width: 0;
  height: 100%;
  z-index: 3;
  border-top: 10px solid transparent;
  border-left: 10px solid rgb(177,169,138);
  transform: translate(0px, -10px);
  @media (max-height: 825px) {
    border-bottom: 2px solid transparent;
  }
`;

const BottomInnerWrap = styled.div`
  width: 100%;
  height: 10px;
  background-color: rgb(177,169,138);
`;

const SideInnerWrap = styled.div`
  width: 10px;
  height: 100%;
  background-color: rgb(127,119,88);
`;

const Monitor: FC<MonitorProps> = ({ children }) => {
  return (
    <MonitorWrapper>
      <MonitorTop>
        <MonitorInfo>
          <MonitorName>Minitron</MonitorName>
          <MonitorVersion>Multiscan <span style={{ fontWeight: 800 }}>A18</span></MonitorVersion>
        </MonitorInfo>
        <TopWrap>
          <Bumper />
          <InnerTop />
          <Bumper />
        </TopWrap>
      </MonitorTop>
      <InnerMonitor>
        <MonitorLeft>
          <SideInnerWrap>
            <InnerLeft />
          </SideInnerWrap>
        </MonitorLeft>
        {children}
        <MonitorRight>
          <SideInnerWrap>
            <InnerRight />
          </SideInnerWrap>
        </MonitorRight>
      </InnerMonitor>
      <MonitorBottom>
        <BottomWrap>
          <Bumper />
          <BottomInnerWrap>
            <InnerBottom />
          </BottomInnerWrap>
          <Bumper />
        </BottomWrap>
        <Logo>PONY</Logo>
      </MonitorBottom>
    </MonitorWrapper>
  );
};

export default Monitor;