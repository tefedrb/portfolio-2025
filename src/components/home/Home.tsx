import { useEffect } from 'react';
import MainDisplay from '../mainDisplay/MainDisplay';
import MobileNavAdapter from '../navigation/MobileNavAdapter';
import styled, { keyframes } from 'styled-components';
import paper from '../../assets/paper.png';
import { useProfileContext } from '../../useProfileContext';

const grain = keyframes`
  0%, 100% { transform: translate(0, 0) }
  10% { transform: translate(-5%, -10%) }
  20% { transform: translate(-15%, 5%) }
  30% { transform: translate(7%, -25%) }
  40% { transform: translate(-5%, 25%) }
  50% { transform: translate(-15%, 10%) }
  60% { transform: translate(15%, 0%) }
  70% { transform: translate(0%, 15%) }
  80% { transform: translate(3%, 25%) }
  90% { transform: translate(-10%, 10%) }
`;

interface HomeWrapperProps {
  name?: string;
}

const HomeWrapper = styled.div<HomeWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  grid-area: centerA;
  background-color: rgb(5, 5, 5);
  pointer-events: auto;
`;

interface InnerHomeProps {
  name?: string;
}

const InnerHome = styled.div<InnerHomeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  margin: 0;
  background-color: rgb(10, 10, 10);
  border-radius: 28px;
  pointer-events: auto;
  // &:after {
  //   top: -100%;
  //   left: -50%;
  //   position: fixed;
  //   opacity: .2;
  //   content: "";
  //   height: 300%;
  //   width: 300%;
  //   background-image: url(${paper});
  //   animation: ${grain} 8s steps(10) infinite;
  // }

  @media (max-width: 948px) and (min-height: 500px) {
    flex-direction: column-reverse;
  }
`;

// const BlueScreen = styled.div`
//   display: none;
//   background-color: blue;
//   width: 100%;
//   height: 100%;
// `;

// Info needs to go from navigation through MainDisplay
const Home = () => {
  const { checkStorageForMobileHack, saveStateForMobileHack, globalState } = useProfileContext();
  const { monitorPower } = globalState;
  console.log('globalState', globalState);

  useEffect(() => {
    console.log("11.11.20 v9");
    document.addEventListener('keydown', (e) => {
      console.log('keydown', e);
    });

    if (!checkStorageForMobileHack()) {
      saveStateForMobileHack('isMobileHack', 'false');
    }

    const mobileHack = () => {
      // Trigger mobile hack
      saveStateForMobileHack('isMobileHack', 'true');
      window.location.reload();
    };

    window.addEventListener('orientationchange', mobileHack);
    return () => window.removeEventListener('orientationchange', mobileHack);
  }, [checkStorageForMobileHack, saveStateForMobileHack]);

  return (
    <HomeWrapper className={`container ${monitorPower ? 'addFlicker' : 'none'}`} name={"home wrapper"}>
      <InnerHome className={`screen ${monitorPower ? 'screenOn' : 'screenOff'}`} name={"inner home"}>
        <MobileNavAdapter
          name={"mobileNav"}
        />
        <MainDisplay
          name={"main display"}
        />
      </InnerHome>
      <div className={`overlay ${monitorPower ? 'overlay-ani' : 'none'}`}>
        <span>AV-1</span>
      </div>
    </HomeWrapper>
  );
};

export default Home;