import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../theme';

const isNumber = val => {
  return val === parseInt(val, 10);
};

const getColumnWidthFromProps = props => {
  return Object.keys(props)
    .filter(propKey => ['sm', 'md', 'lg'].indexOf(propKey) !== -1)
    .map(viewport => {
      // if prop is set to a fixed width (1-12)
      if (isNumber(props[viewport])) {
        return Theme.media[viewport]`
            flex-basis: ${100 / 12 * props[viewport]}%;
            max-width: ${100 / 12 * props[viewport]}%;
            display: block;
          `;
      } else if (props[viewport]) {
        // else if prop is set to true (auto sizing)
        return Theme.media[viewport]`
            flex-grow: 1;
            flex-basis: 0;
            max-width: 100%;
            display: block;
          `;
      } else {
        // else column is hidden
        return Theme.media[viewport]`display: none`;
      }
    });
};

const getColumnOffsetFromProps = props => {
  return Object.keys(props)
    .filter(
      propKey => ['smOffset', 'mdOffset', 'lgOffset'].indexOf(propKey) !== -1
    )
    .map(
      viewport => Theme.media[viewport.replace(/Offset$/, '')]`
        margin-left: ${100 / 12 * props[viewport]}%;
      `
    );
};

const Column = styled.div`
  box-sizing: border-box;
  flex: 0 0 auto;
  padding-right: ${Theme.grid.gutterWidth / 2}rem;
  padding-left: ${Theme.grid.gutterWidth / 2}rem;
  flex-direction: ${p => (p.reverse ? 'column-reverse' : 'column')};

  ${p => getColumnWidthFromProps(p)} ${p => getColumnOffsetFromProps(p)};
`;

Column.defaultProps = {
  sm: true
};

Column.propTypes = {
  /** Reverse flex direction */
  reverse: PropTypes.bool,
  /**
   * When interger value, it specify the column size on the grid.
   * When true, enable auto sizing column.
   * When false, hide colomn for the breakpoint.
   */
  sm: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  md: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  lg: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  smOffset: PropTypes.number,
  mdOffset: PropTypes.number,
  lgOffset: PropTypes.number
};

/** @component */
export default Column;
