import { MOCK_LOGO_ICON } from '../../constants/icon-file-paths';
import '../taskbar.css';


const Start = () => {
  return (
    <button className="start-btn">
      <img src={MOCK_LOGO_ICON} alt="Start" />
      <span>launch</span>
    </button>
  );
};

export default Start;