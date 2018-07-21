import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../theme';
import remCalc from '../../helpers/remCalc';

const SCBoxDisplay = styled.div`
  background: ${props => props.bgColor ? props.bgColor : '#eee'};
  font-size: 11px;
  margin-bottom: 10px;
  min-height: 2rem;
  line-height: 2rem;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.borderColor ? props.borderColor : '#c6c6c6'};
  text-align: center;
  color: ${props => props.color ? props.color : '#000'};
  font-family: ${Theme.fonts.families.AvenirBook};
`;

const BoxDisplay = (props) => {
  return (
    <SCBoxDisplay
      color={props.color}
      borderColor={props.borderColor}
      bgColor={props.bgColor}
    >
      {props.children}
    </SCBoxDisplay>
  );
};

BoxDisplay.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  bgColor: PropTypes.string,
};

export default BoxDisplay;
