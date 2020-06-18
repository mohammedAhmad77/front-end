/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface bellProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const bell: React.SFC<bellProps> = ({size, ...props}) => (
  <svg viewBox="0 0 512 512" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M467.812 431.851l-36.629-61.056c-16.917-28.181-25.856-60.459-25.856-93.312V224c0-67.52-45.056-124.629-106.667-143.04V42.667C298.66 19.136 279.524 0 255.993 0s-42.667 19.136-42.667 42.667V80.96C151.716 99.371 106.66 156.48 106.66 224v53.483c0 32.853-8.939 65.109-25.835 93.291l-36.629 61.056c-1.984 3.307-2.027 7.403-.128 10.752 1.899 3.349 5.419 5.419 9.259 5.419H458.66c3.84 0 7.381-2.069 9.28-5.397C469.839 439.275 469.775 435.136 467.812 431.851zM188.815 469.333C200.847 494.464 226.319 512 255.993 512s55.147-17.536 67.179-42.667H188.815z"
    />
  </svg>
);
bell.displayName = 'bell';
export default bell;
/* tslint:enable */
/* eslint-enable */
