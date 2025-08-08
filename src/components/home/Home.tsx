import { useEffect } from 'react';
import MainDisplay from '../mainDisplay/MainDisplay';
import MobileNavAdapter from '../navigation/MobileNavAdapter';
import styled, { keyframes } from 'styled-components';
import paper from '../../assets/paper.png';
import { useProfileContext } from '../../contexts/useProfileContext';


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