export default function remCalc(
  px /* :number */,
  base /* :number */ = 16
) /* :string */ {
  return px / base + 'rem';
}
