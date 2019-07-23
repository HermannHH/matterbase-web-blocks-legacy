import React from 'react';
import styled, { withTheme } from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = withTheme(styled.div`
  ${props => `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    flex-direction: row;
    border-radius: 5px;
    &:hover {
      background-color: ${props.theme.colors.selago};
    }
  `}
`);

const IconContainer = withTheme(styled.div`
  ${props => `
    display: flex;
    padding: 0 10px;
    > div {
      border-radius: 50%;
      background-color: ${props.theme.colors.selago};
      padding: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `}
`);

const TextContainer = withTheme(styled.div`
  ${props => `
    display: flex;
    padding: 20px;
    flex-direction: column;
    > h3 {
      
    }
  `}
`);

function BlockOption({
  icon,
  handleClick,
  heading,
  description,
  theme
}) {
  return (
    <Wrapper onClick={handleClick}>
        <IconContainer>
          <div>
            <FontAwesomeIcon icon={icon} color={theme.colors.dodgerBlue} size="lg"/>
          </div>
        </IconContainer>
        <TextContainer>
          <h3>{heading}</h3>
          <p>{description}</p>
        </TextContainer>
    </Wrapper>
  )
}


export default withTheme(BlockOption)
