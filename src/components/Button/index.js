import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../theme';
import remCalc from '../../helpers/remCalc';

const ButtonContainer = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ButtonBackground = styled.div`
  position: absolute;
  z-index: -1;
  width: 300%;
  height: 100%;
  background: ${Theme.colors.pupple_0};
  background: -webkit-linear-gradient(right,
    ${Theme.colors.blue}, ${Theme.colors.pupple},
    ${Theme.colors.blue}, ${Theme.colors.pupple});
  background: -o-linear-gradient(right,
    ${Theme.colors.blue}, ${Theme.colors.pupple},
    ${Theme.colors.blue}, ${Theme.colors.pupple});
  background: -moz-linear-gradient(right,
    ${Theme.colors.blue}, ${Theme.colors.pupple},
    ${Theme.colors.blue}, ${Theme.colors.pupple});
  background: linear-gradient(right,
    ${Theme.colors.blue}, ${Theme.colors.pupple},
    ${Theme.colors.blue}, ${Theme.colors.pupple});
  top: 0;
  left: -100%;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  -moz-transition: all 0.4s;
  transition: all 0.4s;
`;

const ButtonContent = styled.button`
  font-family: Open Sans;
  font-weight: 500;
  font-size: 15px;
  color: ${Theme.colors.white};
  line-height: 1.2;
  text-transform: uppercase;
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  width: 100%;
  height: 50px;
  border: none;
  background: transparent;
  cursor: pointer;
  outline: none !important;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
  z-index: 1;
  border-radius: 25px;
  overflow: hidden;
  margin: 0 auto;

  &:hover ${ButtonBackground} {
    left: 0;
  }
`;

const Button = (props) => {
  return (
    <ButtonContainer>
      <ButtonWrapper>
        <ButtonBackground></ButtonBackground>
        <ButtonContent>
          {props.children}
        </ButtonContent>
      </ButtonWrapper>
    </ButtonContainer>
  );
};

// Button.defaultProps = {
//   disabled: false
// };

Button.propTypes = {
  /** Button text */
  children: PropTypes.node
};

export default Button;
