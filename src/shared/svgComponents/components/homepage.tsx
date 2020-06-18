/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface homepageProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const homepage: React.SFC<homepageProps> = ({size, ...props}) => (
  <svg viewBox="0 0 491.398 491.398" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M481.765,220.422L276.474,15.123c-16.967-16.918-44.557-16.942-61.559,0.023L9.626,220.422 c-12.835,12.833-12.835,33.65,0,46.483c12.843,12.842,33.646,12.842,46.487,0l27.828-27.832v214.872 c0,19.343,15.682,35.024,35.027,35.024h74.826v-97.62c0-7.584,6.146-13.741,13.743-13.741h76.352 c7.59,0,13.739,6.157,13.739,13.741v97.621h74.813c19.346,0,35.027-15.681,35.027-35.024V239.091l27.812,27.815 c6.425,6.421,14.833,9.63,23.243,9.63c8.408,0,16.819-3.209,23.242-9.63C494.609,254.072,494.609,233.256,481.765,220.422z"
      id="Icons_19_" />
  </svg>
);
homepage.displayName = 'homepage';
export default homepage;
/* tslint:enable */
/* eslint-enable */
