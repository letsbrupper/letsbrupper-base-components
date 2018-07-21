import { css } from 'styled-components';

// Converts the breakpoints into styled-components css functions

export default function mediaQueries(breakPoints) {
  return Object.keys(breakPoints).reduce((acc, label) => {
    acc[label] = (...args) => css`
      @media (min-width: ${breakPoints[label]}em) {
        ${css(...args)};
      }
    `;
    return acc;
  }, {});
}
