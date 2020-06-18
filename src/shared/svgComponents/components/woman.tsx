/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface womanProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const woman: React.SFC<womanProps> = ({size, ...props}) => (
  <svg viewBox="0 0 529.301 529.301" fill="currentColor" width={ size || "529.301" } height={ size || "529.301" } {...props}>
    <path d="M400.051,335.7c0.8-2.8,1.6-5.899,2.199-9.399c0.601-2.9,1.101-6,1.7-9.5c4.3-27.201,6.5-70.101,6.5-134.601 C410.45,81.5,345.15,0,264.65,0c-29.3,0-56.6,10.9-79.4,29.6c-4,2.8-7.5,5.9-10.4,9.3c-34,33.4-56,85.1-56,143.5 c0,68.4,2.6,112.6,7.3,139.3c0.6,3.399,1.2,6.5,1.9,9.399c0.8,3.5,1.7,6.601,2.6,9.301c-37.9,25-66.5,63.299-66.5,97.699v91.201 h401c0,0,0-45.801,0-91.201C465.15,401.199,439.25,360.4,400.051,335.7z M168.65,179.3l-5.9-0.8c-7.2-1-16.4-9.2-19.8-22.8 c-2.4-9.2-1.5-18.6,2.4-25c1.3-2.4,3.9-5.4,7.7-6.3c0.6-0.1,1.2-0.2,2-0.2c0.6,0,1,0,1.6,0.1l8.5,0.8l1.2-8.5 c1.1-7.1,2.6-13.9,4.6-20.4c10.6,34.3,40,30.6,82.5,36c13.2,1.7,29.3,2.6,38.5,2.4c1.601-26.8-29.5-56.8-29.5-56.8 s0.7-0.4,3.9-0.1c4.6,0.6,14.399,4,16.5,5.4c34,19,40.5,46.5,41,47.5c17.399-4.7,30.5-13.8,35.7-29.5c1.3,5,2.6,10.3,3.399,15.7 l1.2,8.5l8.5-0.8c1.2-0.1,2.6-0.1,3.5,0.1c3.8,0.9,6.3,3.9,7.7,6.3c3.8,6.4,4.7,15.7,2.399,25c-3.5,13.8-12.699,22-19.8,22.8 l-5.899,0.8l-1.601,5.8c-9.3,33.5-28.899,68.3-53.399,88.299c-12.7,10.201-26.4,16.601-40.9,16.601s-28.3-6.3-40.9-16.601 c-24.5-19.799-44.1-54.7-53.4-88.299L168.65,179.3z M327.95,368.301c-34.7,18.299-58,32.898-60.6,33 c-11.3-1.5-64.5-32.5-64.5-32.5c-13.2-6.9-21.2-10.801-36.3-25.201c1.9-2.399,9.2-12.5,11.1-15.1c1.9-2.4,3.8-4.8,5.7-7.4 c8.6-11.199,17.9-23.6,27.7-34.699c16,13.3,34.2,21.5,53.5,21.5c19.3,0,37.5-8.301,53.5-21.5c12.3,14,24,30.1,34.399,43.3 c2,2.601,4,5,5.9,7.3c2.1,2.6,4.1,4.9,6.2,7.1C356.851,354.301,338.45,362.7,327.95,368.301z"
    />
  </svg>
);
woman.displayName = 'woman';
export default woman;
/* tslint:enable */
/* eslint-enable */
