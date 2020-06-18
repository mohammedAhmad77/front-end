/* eslint-disable */
/* tslint:disable */
import * as React from 'react';
export interface groupProps extends React.SVGAttributes<SVGElement> {
size?: string;
}
const group: React.SFC<groupProps> = ({size, ...props}) => (
  <svg viewBox="0 0 449.353 449.353" fill="currentColor" width={ size || "1em" } height={ size || "1em" } {...props}>
    <circle cx="224.676" cy="39.729" r="39.184" />
    <path d="M239.86 88.33c-.185-.005-.37-.01-.555-.013h-29.257c-30.003.564-53.867 25.344-53.303 55.347.003.185.008.37.013.555v8.359c0 4.18 1.567 8.882 6.269 8.882h123.298c4.702 0 6.269-4.702 6.269-8.882v-8.359C293.465 114.224 269.855 89.201 239.86 88.33zM54.88 260.725c4.328 0 7.837-3.509 7.837-7.837-.109-49.175 22.201-95.718 60.604-126.433 3.281-2.356 4.032-6.926 1.676-10.207-.193-.269-.404-.524-.631-.764-2.753-3.295-7.646-3.761-10.971-1.045-41.948 33.715-66.349 84.631-66.351 138.449C47.044 257.217 50.552 260.725 54.88 260.725zM276.399 406.488L276.399 406.488c-33.431 10.967-69.491 10.967-102.922 0-4.118-1.333-8.536.924-9.87 5.041-.02.061-.039.122-.057.183-1.067 4.16 1.192 8.451 5.224 9.927 18.054 5.869 36.918 8.866 55.902 8.882 19.37.019 38.611-3.158 56.947-9.404 3.845-1.986 5.353-6.714 3.367-10.559C283.37 407.421 279.852 405.755 276.399 406.488zM318.094 120.64c.033.023.067.046.101.069 42.84 30.405 68.337 79.646 68.441 132.18 0 4.328 3.509 7.837 7.837 7.837s7.837-3.509 7.837-7.837c-.144-57.724-28.166-111.822-75.233-145.241-3.654-2.207-8.384-1.306-10.971 2.09C313.643 113.298 314.534 118.179 318.094 120.64z"
    />
    <circle cx="67.941" cy="327.076" r="39.184" />
    <path d="M83.125,375.677c-0.185-0.005-0.37-0.01-0.555-0.013H53.313C23.31,376.228-0.555,401.008,0.01,431.011 c0.003,0.185,0.008,0.37,0.013,0.555v8.359c0,4.18,1.567,8.882,6.269,8.882H129.59c4.702,0,6.269-4.702,6.269-8.882v-8.359 C136.731,401.57,113.121,376.548,83.125,375.677z"
    />
    <circle cx="381.411" cy="327.076" r="39.184" />
    <path d="M396.594,375.677c-0.185-0.005-0.37-0.01-0.555-0.013h-29.257c-30.003,0.564-53.867,25.344-53.303,55.347 c0.003,0.185,0.008,0.37,0.013,0.555v8.359c0,4.18,1.567,8.882,6.269,8.882H443.06c4.702,0,6.269-4.702,6.269-8.882v-8.359 C450.2,401.57,426.59,376.548,396.594,375.677z"
    />
  </svg>
);
group.displayName = 'group';
export default group;
/* tslint:enable */
/* eslint-enable */
