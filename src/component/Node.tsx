import React from "react";
import { styled } from "styled-components";
import ConstantNumberInput from "./headless/ConstantNumberInput";
import StringControl from "./headless/StringControl";


type NodeData = {
  title: string;
};

const NodeContext = React.createContext<NodeData>({
  title: "",
});

type Props = {
  title: string;
  children?: React.ReactNode;
};

const Node = ({ title, children }: Props) => {
  return (
    <NodeContext.Provider value={{
      title
    }}>
      <Wrapper>
        <Header>
          <span>{title}</span>
        </Header>
        <Body>
          {children}
        </Body>
      </Wrapper>
    </NodeContext.Provider>
  );
};

Node.ConstantNumberInput = ConstantNumberInput;
Node.StringControl = StringControl;

export default Node;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
  background-color: #272749;
  color: white;
  padding: 4px 12px;
  border-radius: 10px 10px 0 0;
`;

const Body = styled.div`
  position: relative;
  display: flex;
  gap:10px;
  flex-direction: column;
  background-color: #393939;
  padding: 14px 18px;
  border-radius: 0 0 10px 10px;
`;
