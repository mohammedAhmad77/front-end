/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface downArrowProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const downArrow: React.SFC<downArrowProps> = ({size, ...props}) => (
  <svg viewBox="0 0 213.333 213.333" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M0 53.333L106.667 160 213.333 53.333z" />
  </svg>
);
downArrow.displayName = 'downArrow';
export default downArrow;
/* tslint:enable */
/* eslint-enable */
