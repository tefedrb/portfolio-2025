import { /*useContext,*/ useState, useEffect, useRef } from "react";
import { useDoubleClick } from "../hooks/hooks";
import { isMobile } from "react-device-detect";
import styled from "styled-components";
import Draggable from 'react-draggable'; 
import { UnknownObject } from "../../types/globalTypes";
// import { Context } from '../context';
// 3D space pinball Space Cadet

interface FolderWrapperProps {
  name: string;
}

const FolderWrapper = styled.div<FolderWrapperProps>`
  display: flex;
  flex-direction: column;
  width: 75px;
  height: auto;
  // ADJUSTING FOR MOBILE VIEW
  @media (max-width: 948px) and (min-height: 500px) {
    // width: auto;
    width: 55px;
    height: auto;
    margin-right: 0;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }
  @media (max-width: 667px) and (max-height: 375px) {
  }

  @media screen and (max-width: 651px), screen and (max-height: 757px) {
    margin-top: 2%;
    color: green;
    flex-direction: column;
    justify-content: center;
  }
`;

interface FolderInnerWrapProps {
  name: string;
}

const FolderInnerWrap = styled.div<FolderInnerWrapProps>`
  position: relative;
  height: 100px;
  width: 75px;
  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 948px), (max-height: 700px) {
    height: 65px;
    width: 55px;
  }

  @media screen and (max-width: 500px) and (max-height: 700px),
    (max-height: 400px) {
    height: 30px;
    width: 30px;
  }
`;

interface FolderTabProps {
  name: string;
}

const FolderTab = styled.div<FolderTabProps>`
  height: 10%;
  width: 15%;
  background-color: rgba(190, 186, 63, 1);
`;

interface FolderBackProps {
  name: string;
}

const FolderBack = styled.div<FolderBackProps>`
  height: 90%;
  width: 100%;
  background-color: rgba(190, 186, 63, 1);
  box-shadow: 1px -5px 8px -7px rgba(216, 212, 79, 0.3);
`;

interface PaperProps {
  name: string;
  toggle?: {
    paper: {
      bottom: string;
    };
  };
}

const Paper = styled.div<PaperProps>`
  position: absolute;
  height: 75%;
  width: 90%;
  background-color: white;
  bottom: ${(props) => props?.toggle?.paper?.bottom || "14px"};
  left: 5%;
`;

interface FolderFrontProps {
  name: string;
  toggle?: {
    folderFront: {
      left: string;
      trans: string;
    };
  };
}

const FolderFront = styled.div<FolderFrontProps>`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
  bottom: 0;

  box-shadow: 1px -5px 8px -7px rgba(216, 212, 79, 1);
  left: ${(props) => props?.toggle?.folderFront?.left || "10%"};
  width: 100%;
  transform: ${(props) => props?.toggle?.folderFront?.trans || "skew(-20deg)"};
  background-color: rgba(216, 212, 79, 1);
`;

const Contents = styled.p`
  @media screen and (max-width: 650px),
    (max-width: 948px) and (max-height: 400px) {
    display: none;
  }
`;

interface SmScrnContentsProps {
  name: string;
}

const SmScrnContents = styled.p<SmScrnContentsProps>`
  display: none;
  @media screen and (max-width: 650px),
    (max-width: 948px) and (max-height: 400px) {
    display: block;
    margin: 0px;
    margin-top: 1px;
  }
`;

interface FolderProps {
  title: string;
  files: UnknownObject[];
  windowIsClosed: boolean;
  defaultPos: { x: number; y: number };
  addWindow: ({ key, data }: {
    key: string;
    data: UnknownObject[];
  }) => void;
}

interface StyledCompProps {
  folderFront: {
    trans: string;
    left: string;
  };
  paper: {
    bottom: string;
  };
}

const XPFolder = (props: FolderProps) => {
  const [styledCompProps, changeStyledProps] = useState<StyledCompProps>();
  const folderNode = useRef(null);
  const [ doubleTouchCallback ] = useDoubleClick(handleClick, isMobile ? 'touchstart' : 'click');

  function handleClick(){
    if(props.windowIsClosed){
      console.log(props.files, "<---files")
      props.addWindow({ key: props.title, data: props.files });
    }
  };

  useEffect(() => {
    console.log("setting folder props");
    const setFolderProp = () => {
      return {
        folderFront: {
          trans: `${!props.windowIsClosed ? "skew(-20deg)" : "skew(-10deg)"}`,
          left: `${!props.windowIsClosed? "20%" : "10%"}`,
        },
        paper: {
          bottom: `${!props.windowIsClosed ? "12%" : "0"}`,
        },
      };
    };
  
    changeStyledProps(setFolderProp());
  }, [ props.windowIsClosed, props ]);

  return (
		<Draggable 
      bounds={'parent'} 
      defaultPosition={props.defaultPos}>
			<FolderWrapper ref={doubleTouchCallback} name={"folderWrSap"}>
				<FolderInnerWrap
					id="innerWrap"
					ref={folderNode}
					name={"folderInnerWrap"}
				>
					<FolderTab name={"tab"} />
					<FolderBack name={"folder back"} />
					<Paper name={"paper"} toggle={styledCompProps} />
					<FolderFront
						id="folderFront"
						name={"folder front"}
						toggle={styledCompProps}
					>
						<Contents>{props.title}</Contents>
					</FolderFront>
				</FolderInnerWrap>
				<SmScrnContents name={"small scrn"}>{props.title}</SmScrnContents>
			</FolderWrapper>
		</Draggable>
  );
};

export default XPFolder;
