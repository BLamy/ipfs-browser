import React from "react";

export default ({ size = "24", fill = "currentColor", ...args }) => (
  <svg fill={fill} width={size} height={size} {...args} viewBox="0 0 24 24">
    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);
