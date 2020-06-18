/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface multimediaProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const multimedia: React.SFC<multimediaProps> = ({size, ...props}) => (
  <svg viewBox="0 0 320.001 320.001" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M295.84,146.049l-256-144c-4.96-2.784-11.008-2.72-15.904,0.128C19.008,5.057,16,10.305,16,16.001v288	c0,5.696,3.008,10.944,7.936,13.824c2.496,1.44,5.28,2.176,8.064,2.176c2.688,0,5.408-0.672,7.84-2.048l256-144	c5.024-2.848,8.16-8.16,8.16-13.952S300.864,148.897,295.84,146.049z"
    />
  </svg>
);
multimedia.displayName = 'multimedia';
export default multimedia;
/* tslint:enable */
/* eslint-enable */
