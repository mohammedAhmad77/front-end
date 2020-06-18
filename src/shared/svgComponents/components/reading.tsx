/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface readingProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const reading: React.SFC<readingProps> = ({size, ...props}) => (
  <svg viewBox="0 0 374.105 374.105" fill="currentColor" width={ size || "374.105" } height={ size || "374.105" } {...props}>
    <path d="M45.015,14.03C-19.452,10.629,4.26,64.847,4.26,64.847s55.987,175.809,61.835,242.369 c5.849,66.549,66.795,51.569,66.795,51.569s221.213-31.475,227.01-32.668c5.809-1.188,4.95-2.442,5.309-6.04 c0.359-3.6-4.785-2.941-4.785-2.941s-1.37,0.201-3.672,0.523c-9.907-13.822-7.648-32.924,0.791-46.941l16.562-3.695L238.476,21.61 C238.476,21.61,109.474,17.428,45.015,14.03z M347.648,318.962c-45.967,6.595-201.329,28.899-208.283,29.935 c-8.153,1.218-51.478,4.652-53.691-25.69c-2.213-30.342,51.322-33.246,51.322-33.246l210.407-18.359 C340.311,286.61,339.525,304.439,347.648,318.962z"
    />
  </svg>
);
reading.displayName = 'reading';
export default reading;
/* tslint:enable */
/* eslint-enable */