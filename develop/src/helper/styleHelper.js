// @flow
import { css } from 'styled-components';

const sp_design_width: number = 768;
const sizes: Object = {
  pc: 769,
  sp: 768
};

export const zIndex: Object = {
  ui: 3000,
  upper: 3001,
  modal: 3002
};

export const colors: Object = {
  theme: `#cca94b`,
  hr: `#e5e6e8`
};

export const media: Object = Object.keys(sizes).reduce(
  (accumulator: any, label: any): any => {
    if (label === 'pc') {
      accumulator[label] = (...args: any) => css`
        @media screen and (min-width: ${sizes[label]}px), print {
          ${css(...args)};
        }
      `;
    } else {
      accumulator[label] = (...args: any) => css`
        @media screen and (max-width: ${sizes[label]}px) {
          ${css(...args)};
        }
      `;
    }
    return accumulator;
  },
  {}
);

export const vw = (num: number): string => {
  return num / sp_design_width * 100 + 'vw';
};

export const rem = (num: number): string => {
  return `${num / 16}rem`;
};

