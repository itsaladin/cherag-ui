export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
export { default as PText } from './components/Text';
export { default as Div } from './components/Div';