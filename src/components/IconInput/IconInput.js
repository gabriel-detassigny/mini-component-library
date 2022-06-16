import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    iconSize: 12,
    fontSize: 14,
  },
  large: {
    iconSize: 14,
    fontSize: 18,
  },
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const sizes = SIZES[size];

  return <Wrapper width={width}>
    <StyledIcon size={sizes.iconSize} id={icon}></StyledIcon>
    <label>
      <VisuallyHidden as="span">{label}</VisuallyHidden>
      <TextInput fontSize={sizes.fontSize} margin={ sizes.iconSize * 1.5 } type="text" placeholder={placeholder}/>
    </label>
  </Wrapper>;
};

const Wrapper = styled.div`
  border-bottom: 1px solid ${COLORS.black};
  width: ${ p => p.width + 'px'};
  color: ${COLORS.gray700};
  
  &:hover {
    color: ${COLORS.black};  
  }
  
  &:focus-within {
    margin: 3px;
    outline: 3px auto -webkit-focus-ring-color;
    outline-offset: 3px;
  }
`;

const StyledIcon = styled(Icon)`
  display: inline-block;
  margin-right: 6px;
`;

const TextInput = styled.input`
  border: none;
  outline: none;
  font-weight: 700;
  width: calc(100% - ${ p => p.margin + 'px'});
  font-size: ${ p => p.fontSize + 'px'};

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }
`;



export default IconInput;
