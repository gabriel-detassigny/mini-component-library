/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': '8px',
    '--margin': '0',
    '--inner-height': '8px',
  },
  medium: {
    '--height': '12px',
    '--margin': '0',
    '--inner-height': '12px',
  },
  large: {
    '--height': '24px',
    '--margin': '4px',
    '--inner-height': '16px',
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return <Wrapper style={styles}>
    <VisuallyHidden>{value}%</VisuallyHidden>
    <Filling style={styles} value={value}></Filling>
  </Wrapper>;
};

const Wrapper = styled.div`
  width: 370px;
  height: var(--height);
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0 2px 4px ${COLORS.transparentGray35};
  border-radius: 4px;
  overflow: hidden;
  position: relative;
`;

const Filling = styled.div`
  position: absolute;
  height: var(--inner-height);
  width: ${p => p.value + '%'};
  background: ${COLORS.primary};
  margin: var(--margin);
`

export default ProgressBar;
