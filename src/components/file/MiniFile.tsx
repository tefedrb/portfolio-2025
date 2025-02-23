import {
  GraphicWrapper,
  GraphicHeadWrapper,
  GraphicHead,
  GraphicFold,
  GraphicBody,
} from './fileStyledComponents';

interface MiniFileProps {
  open?: boolean;
  data?: {name: string};
  name?: string;
  size?: number;
  mini: boolean;
  foldSize?: number;
}

const MiniFile = (props: MiniFileProps) => {
  return (
    <GraphicWrapper
      name="file GraphicWrapper"
      size={props.size}
      mini={props.mini}
    >
      <GraphicHeadWrapper
        name="GraphicHeadWrapper"
        foldSize={props.foldSize}
        mini={props.mini}
      >
        <GraphicHead mini={props.mini} name="head" />
        <GraphicFold
          name="flap"
          foldSize={props.foldSize}
          mini={props.mini}
        />
      </GraphicHeadWrapper>
      <GraphicBody
        name="GraphicBody"
        size={props.size}
        mini={props.mini}
      />
    </GraphicWrapper>
  );
};

export default MiniFile;