/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface exploreProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const explore: React.SFC<exploreProps> = ({size, ...props}) => (
  <svg viewBox="0 0 512.021 512.021" fill="currentColor" width={ size || "512" } height={ size || "512" } {...props}>
    <circle cx="254.953" cy="188.664" transform="rotate(-22.48 254.854 188.407)" r="82.333" />
    <path d="M54.476 490.682c0 11.767 9.573 21.34 21.34 21.34h347.512v-42.68h-347.512c-11.767 0-21.34 9.573-21.34 21.34zM254.953 300.997c-61.94 0-112.333-50.392-112.333-112.333s50.393-112.333 112.333-112.333 112.332 50.393 112.332 112.333c0 9.671-1.229 19.061-3.538 28.021l59.58 49.994v-266.679h-306.749v439.342h306.749v-44.227l-123.384-103.532c-13.783 6.048-29 9.414-44.99 9.414zM75.816 439.342h10.763v-439.342h-10.763c-28.309 0-51.34 23.031-51.34 51.34v439.342c0-28.309 23.031-51.34 51.34-51.34zM456.012 383.379c8.107 6.803 20.238 5.741 27.042-2.366 3.295-3.927 4.864-8.903 4.417-14.01s-2.855-9.735-6.783-13.03l-25.413-21.324-24.675 29.407z"
    />
    <path d="m326.794 274.951 80.825 67.821 24.675-29.407-80.615-67.644c-6.58 11.112-15.017 21-24.885 29.23z" />
  </svg>
);
explore.displayName = 'explore';
export default explore;
/* tslint:enable */
/* eslint-enable */
