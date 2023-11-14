import { ChangeEvent, Fragment, useCallback } from 'react';
import { Handle, Position } from 'reactflow';
import Label from '../common/Label';
import Input from '../common/Input';
import ControlWrap from '../common/ControlWrap';

type Props = {
  label: string;
  handle: {
    index: number;
    position: 'input' | 'output';
  }
}

export default function ConstantNumberInput({ label, handle }: Props) {
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  }, []);
  const position = handle.position === 'input' ? Position.Left : Position.Right;
  const target = handle.position === 'input' ? 'source' : 'target';
  return (
    <Fragment>
      <Handle type={target} position={position} id={`${label}_${handle.index}`} style={{ top: 30 * (handle.index + 1) }} />
      <ControlWrap>
        <Label htmlFor={'number'}>{label}</Label>
        <Input
          id={'number'}
          type={'number'}
          onChange={onChange}
          className={'nodrag'}
        />
      </ControlWrap>
    </Fragment>
  );
}





