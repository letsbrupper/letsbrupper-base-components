import { injectGlobal } from 'styled-components';

import grid from './grid';
import colors from './colors';
import fonts from './fonts'
import mediaQueries from '../helpers/mediaQueries';

export default {
  media: mediaQueries(grid.breakpoints),
  grid: grid,
  colors: colors,
  fonts: fonts,
};
