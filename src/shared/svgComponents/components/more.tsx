/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface moreProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const more: React.SFC<moreProps> = ({size, ...props}) => (
  <svg viewBox="0 0 515.555 515.555" fill="currentColor" width={ size || "512" } height={ size || "512" } {...props}>
    <path d="M303.347 18.875c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0M303.347 212.209c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0M303.347 405.541c25.167 25.167 25.167 65.971 0 91.138s-65.971 25.167-91.138 0-25.167-65.971 0-91.138c25.166-25.167 65.97-25.167 91.138 0"
    />
  </svg>
);
more.displayName = 'more';
export default more;
/* tslint:enable */
/* eslint-enable */
