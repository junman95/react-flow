import Node from './Node'


const NumberSumNode = () => {
  return (
    <Node title='합 노드' >
      <Node.ConstantNumberInput label='1번상수' handle={{ index: 0, position: 'input' }} />
      <Node.ConstantNumberInput label='2번상수' handle={{ index: 1, position: 'input' }} />
      <Node.StringControl label='결과' handle={{ index: 2, position: 'output' }} />
    </Node>
  )
}

export default NumberSumNode;