import React from 'react';
import styled from 'styled-components';
import BootstrapButton from 'react-bootstrap/Button';

const Wrapper = styled(BootstrapButton)``;

export default function Button({ children }) {
  return <div ><Wrapper>{children}</Wrapper></div>;
}
