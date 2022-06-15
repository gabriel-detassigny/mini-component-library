import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <Selector value={value} onChange={onChange}>
        {children}
      </Selector>
      <SelectIcon id={'chevron-down'} size={24} strokeWidth={2}></SelectIcon>
    </Wrapper>
  );
};

const SelectIcon = styled(Icon)`
  display: inline-block;
  position: absolute;
  right: 12px;
  top: 10px;
`;

const Wrapper = styled.div`
  padding: 12px 52px 12px 16px;
  background-color: ${COLORS.transparentGray15};
  width: fit-content;
  border-radius: 8px;
  position: relative;
  color: ${COLORS.gray700};

  &:focus-within {
    outline: medium auto currentColor;
    outline: medium auto invert;
    outline: 5px auto -webkit-focus-ring-color;  
  }
  
  &:hover {
    color: ${COLORS.black};
  }
`;

const Selector = styled.select`
  appearance: none;
  background: none;
  border: none;
  color: inherit;
  &:focus {
    outline: none;
  }
`;

export default Select;
