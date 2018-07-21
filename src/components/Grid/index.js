import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Theme from '../../theme';

const Grid = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 100%;
  padding-right: ${Theme.grid.outerMargin / 2}rem;
  padding-left: ${Theme.grid.outerMargin / 2}rem;

  ${p =>
    p.fluid &&
    `
      padding-right: ${Theme.grid.outerMargin}rem;
      padding-left: ${Theme.grid.outerMargin}rem;
  `};

  ${p =>
    !p.fluid &&
    css`
      ${['md', 'lg'].map(
        viewport =>
          Theme.media[viewport]`
        width: ${Theme.grid.container[viewport]}rem;
      `
      )};
    `};
`;

Grid.propTypes = {
  /**
   * Create a responsive fixed width Grid or a
   * full width Grid, spanning the entire width
   * of your viewport. */
  fluid: PropTypes.bool
};

/** @component */
export default Grid;
