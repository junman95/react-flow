import Node from './Node'


const ConstantNumberNode = () => {
  return (
    <Node title='상수 노드' >
      <Node.ConstantNumberInput label='1번상수' handle={{ index: 0, position: 'output' }} />
    </Node>
  )
}

export default ConstantNumberNode;