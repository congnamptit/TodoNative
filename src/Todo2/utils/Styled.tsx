import React from 'react';
import {useStyledSystemPropsResolver} from 'native-base';

export const makeStyledComponent = (Comp: any) => {
  return React.forwardRef((props: any, ref: any) => {
    const [style, resProps] = useStyledSystemPropsResolver(props);

    return (
      <Comp {...resProps} style={style} ref={ref}>
        {props.children}
      </Comp>
    );
  });
};
