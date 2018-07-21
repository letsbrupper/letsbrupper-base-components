import PropTypes from 'prop-types';
import styled from 'styled-components';
import Theme from '../../theme';

const Row = styled.div`
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-wrap: wrap;
  margin-right: ${Theme.grid.gutterWidth / 2 * -1}rem;
  margin-left: ${Theme.grid.gutterWidth / 2 * -1}rem;
  flex-direction: ${p => (p.reverse ? 'row-reverse' : 'row')};

  ${p =>
    p.start &&
    Theme.media[p.start]`
    justify-content: flex-start;
    text-align: start;
  `} ${p =>
  p.center &&
  Theme.media[p.center]`
    justify-content: center;
    text-align: center;
  `} ${p =>
  p.end &&
  Theme.media[p.end]`
    justify-content: flex-end;
    text-align: end;
  `} ${p =>
  p.top &&
  Theme.media[p.top]`
    align-items: flex-start;
  `} ${p =>
  p.middle &&
  Theme.media[p.middle]`
    align-items: center;
  `} ${p =>
  p.bottom &&
  Theme.media[p.bottom]`
    align-items: flex-end;
  `} ${p =>
  p.around &&
  Theme.media[p.around]`
    justify-content: space-around;
  `} ${p =>
  p.between &&
  Theme.media[p.between]`
    justify-content: space-between;
  `};
`;

Row.propTypes = {
  /** Reverse flex direction */
  reverse: PropTypes.bool,
  /** Start alignment */
  start: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Center alignment */
  center: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** End alignment */
  end: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Top alignment */
  top: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Middle alignment */
  middle: PropTypes.oneOf(['sm', 'md', 'lg']),
  /** Bottom alignment */
  bottom: PropTypes.oneOf(['sm', 'md', 'lg'])
};

/** @component */
export default Row;
