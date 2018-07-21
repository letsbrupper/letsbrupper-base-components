import colors from './colors';
import grid from './grid';

import remCalc from '../helpers/remCalc';

let families = {
  Museo100: `Museo-100, Georgia, Times New Roman, Times, serif`,
  Museo300: `Museo-300, Georgia, Times New Roman, Times, serif`,
  Museo500: `Museo-500, Georgia, Times New Roman, Times, serif`,
  AvenirBook: `AvenirLTStd-Book, Arial, Helvetica, sans-serif`,
  AvenirHeavy: `AvenirLTStd-Heavy, Arial, Helvetica, sans-serif`,
  Arial: `Arial, Helvetica, sans-serif;`
};

let sizes = {
  xxxxlarge: remCalc(48),
  xxxlarge: remCalc(32),
  xxlarge: remCalc(28),
  xlarge: remCalc(21),
  large: remCalc(18),
  regular: remCalc(16),
  small: remCalc(14),
  xsmall: remCalc(12)
};

let styles = {
  Header1: `
    font-family: ${families.Museo100};
    font-size: ${sizes.xxxlarge};
    letter-spacing: ${remCalc(1.6)};
    font-weight: normal;
    margin-bottom: .5rem;
    margin-top: .2rem;
    @media (min-width: ${grid.breakpoints.md}em) {
      font-size: ${sizes.xxxxlarge};
    }
  `,
  Header2: `
    font-family: ${families.Museo300};
    font-size: ${sizes.xxxlarge};
    letter-spacing: ${remCalc(1.6)};
    font-weight: normal;
    margin-bottom: .5rem;
    margin-top: .2rem;
    @media (min-width: ${grid.breakpoints.md}em) {
      font-size: ${sizes.xxxxlarge};
    }
  `,
  Header3: `
    font-family: ${families.Museo100};
    font-size: ${sizes.xlarge};
    letter-spacing: ${remCalc(0.5)};
    line-height: 33px;
    font-weight: normal;
    margin-bottom: .5rem;
    margin-top: .2rem;
    @media (min-width: ${grid.breakpoints.md}em) {
      font-size: ${sizes.xxlarge};
    }
  `,
  Header4: `
    font-family: ${families.Museo100};
    font-size: ${sizes.xlarge};
    letter-spacing: ${remCalc(1.6)};
    font-weight: normal;
    margin-bottom: .5rem;
    margin-top: .2rem;
    @media (min-width: ${grid.breakpoints.md}em) {
      font-size: ${sizes.xlarge};
    }
  `,
  Header5: `
    font-family: ${families.AvenirBook};
    font-size: ${sizes.large};
    letter-spacing: ${remCalc(1.6)};
    font-weight: normal;
    margin-bottom: .5rem;
    margin-top: .2rem;
    @media (min-width: ${grid.breakpoints.md}em) {
      font-size: ${sizes.xxlarge};
    }
  `,
  Header6: `
    font-family: ${families.AvenirHeavy};
    font-size: ${sizes.regular};
    letter-spacing: ${remCalc(1.6)};
    font-weight: normal;
    margin-bottom: .5rem;
    margin-top: .2rem;
    @media (min-width: ${grid.breakpoints.md}em) {
      font-size: ${sizes.large};
    }
  `,
  Header7: `
    font-family: ${families.AvenirHeavy};
    font-size: ${sizes.regular};
    font-weight: normal;
  `,
  BodyCopy: `
    font-family: ${families.AvenirBook};
    font-size: ${sizes.regular};
  `,
};

const fonts = {
  families: families,
  sizes: sizes,
  styles: styles
};

export default fonts;
