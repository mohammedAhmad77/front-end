/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface closeProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const close: React.SFC<closeProps> = ({size, ...props}) => (
  <svg viewBox="0 0 512.001 512.001" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M284.286,256.002L506.143,34.144c7.811-7.811,7.811-20.475,0-28.285c-7.811-7.81-20.475-7.811-28.285,0L256,227.717 L34.143,5.859c-7.811-7.811-20.475-7.811-28.285,0c-7.81,7.811-7.811,20.475,0,28.285l221.857,221.857L5.858,477.859 c-7.811,7.811-7.811,20.475,0,28.285c3.905,3.905,9.024,5.857,14.143,5.857c5.119,0,10.237-1.952,14.143-5.857L256,284.287 l221.857,221.857c3.905,3.905,9.024,5.857,14.143,5.857s10.237-1.952,14.143-5.857c7.811-7.811,7.811-20.475,0-28.285 L284.286,256.002z"
    />
  </svg>
);
close.displayName = 'close';
export default close;
/* tslint:enable */
/* eslint-enable */
