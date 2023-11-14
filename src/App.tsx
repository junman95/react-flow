import { useCallback } from 'react';
import ReactFlow, {
  Controls,
  Background,
  MiniMap,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
} from 'reactflow';

import 'reactflow/dist/style.css';
import { initialNodes, nodeTypes } from './nodes'




function App() {
  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]);

  return (
    <div style={{ width: '100vw', height: '100vh', backgroundColor: 'black' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div >
  );
}

export default App;
