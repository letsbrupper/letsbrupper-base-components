import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../theme';
import remCalc from '../../helpers/remCalc';

const SCButton = styled.a`
  display: inline-block;
  cursor: pointer;
  text-decoration: none;
  transition: background-color 0.3s ease-out;
  text-align: center;
  font-family: ${Theme.fonts.families.AvenirHeavy};
  min-width: 100%;
  max-height: ${remCalc(40)};
  height: ${remCalc(40)};
  width: auto;
  padding: ${remCalc(8.8)} ${remCalc(40)};
  border-radius: ${remCalc(20)};
  border-width: 2px;
  border-style: solid;
  border-color: ${Theme.colors.brupperBlue};
  font-size: ${remCalc(16)};
  line-height: initial;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  user-select: none;
  ${Theme.media.md`
    min-width: ${remCalc(100)};
    border-width: 1px;
  `}
  color: ${Theme.colors.white};
  background-color: ${Theme.colors.brupperBlue};

  &:hover {
    color: ${Theme.colors.black};
    background-color: ${Theme.colors.grey};
  }
`;

const Button = (props) => {
  return (
    <SCButton
      className={props.className}
      id={props.id}
      href={props.href}
      target={props.target}
      title={props.title}
      tabIndex={props.tabIndex}
      disabled={props.disabled}
    >
      {props.children}
    </SCButton>
  );

};

Button.defaultProps = {
  disabled: false
};

Button.propTypes = {
  /** Button text */
  children: PropTypes.node,
  /** Extra class to apply to element */
  className: PropTypes.string,
  /** ID of button */
  id: PropTypes.string,
  /** The link for the button tag */
  href: PropTypes.string,
  /** Set the target of the link */
  target: PropTypes.string,
  /** Add a title to the link */
  title: PropTypes.string,
  /** Set the tab index */
  tabIndex: PropTypes.number,
  /** Event to fire when component is clicked */
  onClick: PropTypes.func,
  /** Disable button */
  disabled: PropTypes.bool,
};
export default Button;
