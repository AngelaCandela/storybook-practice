import * as React from "react";
import * as L from "leaflet";
import * as ReactDOM from "react-dom";
import type { ControlPosition } from "leaflet";
import styled from "styled-components";

interface Props {
  position: L.ControlPosition;
  children?: React.ReactNode;
  style?: React.CSSProperties;
  open: boolean;
  translateX: string;
}

const POSITION_CLASSES = {
  bottomleft: "leaflet-bottom leaflet-left",
  bottomright: "leaflet-bottom leaflet-right",
  topleft: "leaflet-top leaflet-left",
  topright: "leaflet-top leaflet-right",
  topcenter: "leaflet-top leaflet-center",
  bottomcenter: "leaflet-bottom leaflet-center",
  middlecenter: "leaflet-middle leaflet-center",
  middleleft: "leaflet-middle leaflet-left",
  middleright: "leaflet-middle leaflet-right",
};

interface CustomControlPanelProps {
  background?: string;
  padding?: string;
  width?: string;
}

interface ControlContainerWrapperProps {
  open: boolean;
  translateX: string;
}

const ControlContainerWrapper = styled.div<ControlContainerWrapperProps>`
  transition: transform 0.5s ease-out;
  transform: ${({ open, translateX }) =>
    open ? "none" : translateX ? translateX : "none"};
`;

const Control = (props: Props): JSX.Element => {
  const [container, setContainer] = React.useState<any>(
    document.createElement("div")
  );
  const positionClass =
    (props.position && POSITION_CLASSES[props.position]) ||
    POSITION_CLASSES.topright;

  React.useEffect(() => {
    const targetDiv = document.getElementsByClassName(positionClass);
    setContainer(targetDiv[0]);
  }, [positionClass]);

  const controlContainer = (
    <ControlContainerWrapper
      className="leaflet-control leaflet-bar"
      style={props.style}
      open={props.open}
      translateX={props.translateX}
    >
      {props.children}
    </ControlContainerWrapper>
  );

  L.DomEvent.disableClickPropagation(container);

  return ReactDOM.createPortal(controlContainer, container);
};

const CustomControlPanel = styled.div<CustomControlPanelProps>`
  background: ${(props) =>
    props.background ? props.background : "rgb(255, 255, 255)"};
  padding: ${(props) => (props.padding ? props.padding : "1rem")};
  width: ${(props) => (props.width ? props.width : "auto")};
  border-radius: 5px;
`;

interface CustomControlProps {
  position?: ControlPosition;
  width?: string;
  padding?: string;
  open?: boolean;
  translateX?: string;
  background?: string;
}

const CustomControl: React.FunctionComponent<CustomControlProps> = ({
  position,
  width,
  padding,
  open,
  translateX,
  background,
  children,
}) => {
  return (
    <Control position={position} open={open} translateX={translateX}>
      <CustomControlPanel
        width={width}
        padding={padding}
        background={background}
      >
        {children}
      </CustomControlPanel>
    </Control>
  );
};

export default CustomControl;
