import React, { forwardRef, RefObject } from 'react';

export type Ref = HTMLInputElement;

interface IProps {
    type?: 'text' | 'password' | 'number',
    ref: RefObject<HTMLInputElement>;
};

const Input = forwardRef<Ref, IProps>((props, ref) => (
    <input type={ props.type } ref={ ref }/>
));

Input.defaultProps = {
    type: 'text'
}

export default Input;