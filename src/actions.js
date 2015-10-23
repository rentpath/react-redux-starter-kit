//import { createAction } from 'redux-actions';

export const INC = 'INC';
export function inc(by = 1) {
  return { type: INC, by };
}
