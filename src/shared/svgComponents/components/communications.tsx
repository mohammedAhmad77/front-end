/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface communicationsProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const communications: React.SFC<communicationsProps> = ({size, ...props}) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={ size || "512" } height={ size || "512" } {...props}>
    <path d="M8.75 17.612v4.638c0 .324.208.611.516.713.077.025.156.037.234.037.234 0 .46-.11.604-.306l2.713-3.692zM23.685.139c-.23-.163-.532-.185-.782-.054l-22.5 11.75c-.266.139-.423.423-.401.722.023.3.222.556.505.653l6.255 2.138 13.321-11.39-10.308 12.419 10.483 3.583c.078.026.16.04.242.04.136 0 .271-.037.39-.109.19-.116.319-.311.352-.53l2.75-18.5c.041-.28-.077-.558-.307-.722z"
    />
  </svg>
);
communications.displayName = 'communications';
export default communications;
/* tslint:enable */
/* eslint-enable */
