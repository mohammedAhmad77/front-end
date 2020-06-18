/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface attentionProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const attention: React.SFC<attentionProps> = ({size, ...props}) => (
  <svg viewBox="0 0 512 512" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <path d="M256,0C114.848,0,0,114.848,0,256s114.848,256,256,256s256-114.848,256-256S397.152,0,256,0z M256,480 C132.48,480,32,379.52,32,256S132.48,32,256,32s224,100.48,224,224S379.52,480,256,480z"
    />
    <path d="M240 112H272V336H240zM240 368H272V400H240z" />
  </svg>
);
attention.displayName = 'attention';
export default attention;
/* tslint:enable */
/* eslint-enable */
