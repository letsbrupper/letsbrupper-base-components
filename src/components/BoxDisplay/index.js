import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../theme';
import remCalc from '../../helpers/remCalc';

const SCBoxDisplay = styled.div`
  background: ${props => props.bgColor || '#eee'},
  fontSize: '11px',
  marginBottom: '10px',
  minHeight: '2rem',
  lineHeight: '2rem',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: ${props => props.borderColor || '#c6c6c6'},
  textAlign: 'center',
  color: ${props => props.color || '#000'},
  fontFamily: ${Theme.fonts.families.AvenirBook}
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
