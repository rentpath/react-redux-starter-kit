//import { createAction } from 'redux-actions';

export const INC = 'INC';
export const DEC = 'DEC';

export function inc(by = 1) {
  return { type: INC, by };
}

export function dec(by = 1) {
  return { type: DEC, by };
}
