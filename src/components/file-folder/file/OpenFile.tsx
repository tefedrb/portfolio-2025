import { OpenFileInterface } from '../../../types/globalTypes';
import { OpenFileDisplay } from './fileStyledComponents';
import "98.css";

// interface OpenFileProps {
//   name: string;
//   color: string;
//   size: { width: string; height: string };
// }

const OpenFile = ({ data }: { data: OpenFileInterface }) => {
  const { name, icon, link, content } = data;
  console.log({ name, icon, link, content } );
  return (
    <OpenFileDisplay name={"GraphicBody"}>
      <div></div>
    </OpenFileDisplay>
  )
}

export default OpenFile;