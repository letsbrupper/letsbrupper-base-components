```js noeditor

const colors = require('../src/theme/colors').default;
const Grid = require('../src/components/Grid').default;
const Row = require('../src/components/Row').default;
const Column = require('../src/components/Column').default;
const BoxDisplay = require('../src/components/BoxDisplay').default;

const nameMapping = {
  red: 'Red',
  blue: 'Blue',
  yellow: 'Yellow',
  pupple: 'Pupple'
}

const ignoreColors = ['white', 'black', 'grey'];

const colorOrder = Object.keys(colors).reduce((accum, key) => {
  if (key.indexOf('_') !== -1) {
    let colorMain = key.split('_')[0];
    accum[colorMain] = accum[colorMain] || [];
    accum[colorMain].push(key);
  } else {
    accum['extras'] = accum['extras'] || [];
    accum['extras'].push(key);
  }
  return accum;
}, {});

const colorPalettes = Object.keys(colorOrder).map((color, key) => {
  if (nameMapping[color]) {
    return (
      <Column sm={12} md={4} lg={2} key={key}>

        <BoxDisplay color="#FFF" borderColor="transparent" bgColor={colors[color]}>
          <p>{nameMapping[color]}</p>
          <p>{colors[color]}</p>
        </BoxDisplay>

        {colorOrder[color].map((colorName, key) => {
          let color = colorName.indexOf('_l') !== -1 ? '#000' : '#FFF';
          return (
            <BoxDisplay key={key} color={color} borderColor="transparent" bgColor={colors[colorName]}>
              {colorName}: {colors[colorName]}
            </BoxDisplay>
          );
        })}

      </Column>
    );
  }
});

const greyColors = Object.keys(colorOrder).map((color, key) => {
  if (color === 'grey') {
    return colorOrder[color].map((colorName, key) => {
      return (
        <Column sm={12} md={4} lg={2} key={key}>
          <BoxDisplay color='#000' borderColor="transparent" bgColor={colors[colorName]}>
            {colorName}: {colors[colorName]}
          </BoxDisplay>
        </Column>
      );
    })
  }
});

const extraColors = Object.keys(colorOrder).map((color, key) => {
  if (!nameMapping[color] && ignoreColors.indexOf(color) === -1) {
    return colorOrder[color].map((colorName, key) => {
      if (!nameMapping[colorName] && ignoreColors.indexOf(colorName) === -1) {
        return (
          <Column sm={12} md={4} lg={2} key={key}>
            <BoxDisplay color='#FFF' borderColor="transparent" bgColor={colors[colorName]}>
              {colors[colorName]}
            </BoxDisplay>
          </Column>
        );
      }
    })
  }
});

<Grid fluid>
  <Row>
    {colorPalettes}
  </Row>
  <Row>
    {greyColors}
  </Row>
  <Row>
    {extraColors}
  </Row>
</Grid>
```
