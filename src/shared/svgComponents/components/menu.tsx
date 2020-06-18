/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface menuProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const menu: React.SFC<menuProps> = ({size, ...props}) => (
  <svg viewBox="0 0 384.97 384.97" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <g id="Menu_1_">
      <path d="M12.03 120.303h360.909c6.641 0 12.03-5.39 12.03-12.03 0-6.641-5.39-12.03-12.03-12.03H12.03c-6.641 0-12.03 5.39-12.03 12.03C0 114.913 5.39 120.303 12.03 120.303zM372.939 180.455H12.03c-6.641 0-12.03 5.39-12.03 12.03s5.39 12.03 12.03 12.03h360.909c6.641 0 12.03-5.39 12.03-12.03S379.58 180.455 372.939 180.455zM372.939 264.667H132.333c-6.641 0-12.03 5.39-12.03 12.03 0 6.641 5.39 12.03 12.03 12.03h240.606c6.641 0 12.03-5.39 12.03-12.03C384.97 270.056 379.58 264.667 372.939 264.667z"
      />
    </g>
  </svg>
);
menu.displayName = 'menu';
export default menu;
/* tslint:enable */
/* eslint-enable */
