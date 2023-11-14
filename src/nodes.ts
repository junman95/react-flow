import { Node } from "reactflow";
import ConstantNumberNode from "./component/ConstantNumberNode";
import NumberSumNode from "./component/NumberSumNode";

export const nodeTypes = {
  constantNumber: ConstantNumberNode,
  numberSum: NumberSumNode,
};

export const initialNodes: Node[] = [
  {
    id: "1",
    type: "constantNumber",
    data: {},
    position: { x: 150, y: 250 },
    selectable: true,
  },
  {
    id: "2",
    type: "constantNumber",
    data: {},
    position: { x: 450, y: 250 },
    selectable: true,
  },
  {
    id: "3",
    type: "numberSum",
    data: {},
    position: { x: 450, y: 250 },
    selectable: true,
  },
];
