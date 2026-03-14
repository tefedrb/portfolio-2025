import { OpenFileInterface } from '../../../types/globalTypes';
import openFileStyles from './OpenFile.module.css';

// interface OpenFileProps {
//   name: string;
//   color: string;
//   size: { width: string; height: string };
// }

const OpenFile = ({ data }: { data: OpenFileInterface }) => {
  const { name, icon, link, content } = data;
  console.log({ name, icon, link, content } );
  return (
    <div style={{height: "90%", width: "90%"}} className="window">
      <div className="title-bar">
        <div className="title-bar-text">Counter</div>
        <div className="title-bar-controls">
          <button aria-label="Minimize" />
          <button aria-label="Maximize" />
          <button aria-label="Close" />
        </div>
      </div>
      <div className={openFileStyles.body}>
        <div></div>
      </div>
    </div>
  )
}

export default OpenFile;