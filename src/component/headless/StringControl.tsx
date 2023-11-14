import { Fragment } from 'react'
import { Handle, Position } from 'reactflow'
import ControlWrap from '../common/ControlWrap';
import Label from '../common/Label';

type Props = {
  label: string;
  handle: {
    index: number;
    position: 'input' | 'output';
  }
}

const StringControl = ({ label, handle }: Props) => {
  const position = handle.position === 'input' ? Position.Left : Position.Right;
  const target = handle.position === 'input' ? 'source' : 'target';
  return (
    <Fragment>
      <Handle type={target} position={position} id={`${label}_${handle.index}`} style={{
        top: 30 * (handle.index + 1)

      }} />
      <ControlWrap>
        <Label htmlFor={'string'}>{label}</Label>
      </ControlWrap>
    </Fragment>
  )
}

export default StringControl