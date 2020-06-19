/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface phoneProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const phone: React.SFC<phoneProps> = ({size, ...props}) => (
  <svg viewBox="0 0 513.64 513.64" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72 c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68 c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44 l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z"
    />
  </svg>
);
phone.displayName = 'phone';
export default phone;
/* tslint:enable */
/* eslint-enable */
