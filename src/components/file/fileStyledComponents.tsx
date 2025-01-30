import styled from "styled-components";
import "98.css";

interface GraphicWrapperProps {
  mini?: boolean;
  size?: {
    height: number;
  };
}

interface GraphicHeadWrapperProps {
  mini?: boolean;
  foldSize?: string;
}

interface GraphicHeadProps {
  mini?: boolean;
}

interface GraphicFoldProps {
  mini?: boolean;
  foldSize?: string;
  dynamicHeight?: number;
}

interface GraphicBodyProps {
  mini?: boolean;
}

interface OpenFileDisplayProps {
  children: React.ReactNode;
  name?: string;
  size?: number;
}

export const GraphicWrapper = styled.div<GraphicWrapperProps>`
  pointer-events: auto;
  width: ${(props) => (props.mini ? "30px" : "90%")};
  max-width: 900px;
  height: ${(props) => (props.mini ? "auto" : "95%")};
  margin-bottom: ${(props) =>
    props.mini ? 35 : (props.size && props.size.height <= 35 ? "0" : "20px")};
  margin-top: ${(props) => (props.mini ? "0" : "20px")};
  @media (max-width: 948px) {
    width: ${(props) => (props.mini ? "20px" : "90%")};
    margin-bottom: ${(props) => (props.mini ? "0" : "10px")};
    margin-top: ${(props) => (props.mini ? "0" : "25px")};
  }
  @media (max-width: 948px), @media (max-height: 590px) {
    height: ${(props) => (props.mini ? "auto" : "93%")};
  }
  @media (max-width: 650px), @media (max-height: 590px) {
    width: ${(props) => (props.mini ? "18px" : "90%")};
  }
`;

export const GraphicHeadWrapper = styled.div<GraphicHeadWrapperProps>`
  display: flex;
  height: ${(props) => (props.mini ? "10px" : props?.foldSize || "10%")};
`;

export const GraphicHead = styled.div<GraphicHeadProps>`
  box-shadow: 1px -5px 27px -7px rgba(42, 160, 42, 1);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: ${(props) =>
    props.mini ? "rgba(255, 255, 255, 0.83)" : "rgba(42, 160, 42, 1)"};
`;

export const GraphicFold = styled.div<GraphicFoldProps>`
  border-right: ${(props) => (props.mini ? "10px" : props?.foldSize || "75px")}
    solid transparent;
  border-bottom: ${(props) => `${props.mini ? "10" : props?.dynamicHeight}px`}
    solid ${(props) => (props.mini ? "white" : "rgb(42, 227, 42)")};
  box-shadow: -7px 3px 7px -4px rgba(00, 00, 00, 0.4);
`;

export const GraphicBody = styled.div<GraphicBodyProps>`
  cursor: ${(props) => (props.mini ? "pointer" : "")};
  display: flex;
  justify-content: center;
  overflow: auto;

  height: ${(props) => (props.mini ? "35px" : "90%")};
  width: ${(props) => (props.mini ? "100%" : "90%")};
  box-shadow: 1px -5px 27px -7px
    ${(props) => (props.mini ? "transparent" : "rgba(42, 160, 42, 0.4)")};
  background-color: ${(props) =>
    props.mini ? "rgba(255, 255, 255, 0.83)" : "rgba(42, 160, 42, 1)"};

  @media (max-width: 948px) {
    height: ${(props) => (props.mini ? "20px" : "93%")};
  }

  @media screen and (max-width: 650px) {
    font-size: 0.75em;
    height: ${(props) => (props.mini ? "15px" : "90%")};
  }

  @media screen and (max-width: 650px) and (max-height: 736px) {
    max-height: 90%;
    width: 95%;
  }
`;

export const GraphicBody2 = styled.div<GraphicBodyProps>`
  cursor: ${(props) => (props.mini ? "pointer" : "")};
  display: flex;
  justify-content: center;
  overflow: auto;

  height: 97.5%;
  width: 100%;

  @media (max-width: 948px) {
    height: ${(props) => (props.mini ? "20px" : "93%")};
  }

  @media screen and (max-width: 650px) {
    font-size: 0.75em;
    height: ${(props) => (props.mini ? "15px" : "90%")};
  }

  @media screen and (max-width: 650px) and (max-height: 736px) {
    max-height: 90%;
    width: 95%;
  }
`;

export const OpenFileDisplay: React.FC<OpenFileDisplayProps> = (props) => {
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
            <GraphicBody2>
                {props.children}
            </GraphicBody2>
        </div>
    )
}