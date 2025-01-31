import { useProfileContext } from '../../useProfileContext';
import { OpenFileDisplay } from './fileStyledComponents';
import "98.css";

interface OpenFileProps {
  name: string;
  color: string;
  size: { width: string; height: string };
}

const OpenFile = (props: OpenFileProps) => {
    const { files, globalState } = useProfileContext();
    // const classicWindow = (
    //     <div style={{ width: 1000}} className="window">
    //         <div className="title-bar">
    //             <div className="title-bar-text">Counter</div>
    //             <div className="title-bar-controls">
    //             <button aria-label="Minimize" />
    //             <button aria-label="Maximize" />
    //             <button aria-label="Close" />
    //             </div>
    //         </div>
            
    //         <div className="window-body">
    //             <GraphicBody2 name="GraphicBody" size={props.size}>
    //                 {files[globalState.fileLoaded]?.content || ""}
    //             </GraphicBody2>
    //         </div>
    //     </div>
    // )
    // <GraphicBody
    //         name={"GraphicBody"} 
    //         size={props.size} 
    //     > 
    //         {files[globalState.fileLoaded]?.content || ""}
    // </GraphicBody>
  return (
    <OpenFileDisplay name={"GraphicBody"} size={props.size}>
      {files[globalState.fileLoaded]?.content || ""}
    </OpenFileDisplay>
  )
}

export default OpenFile;