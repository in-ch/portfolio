import React from "react";
import SvgImage, { IconProps } from "./SvgImage";

/**
 * @param {IconProps} props 안에 보면 알겠지만 className만 있음ㅋ
 * @description 트위터 아이콘
 * @returns {JSX.Element}
 */
const TwitterIcon = (props: IconProps): JSX.Element => {
  const { className, color } = props;
  return (
    <SvgImage width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        fillRule="nonzero"
        d="M21 24H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h18a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3zM19.086 6.13a6.156 6.156 0 0 1-1.954.747 3.078 3.078 0 0 0-5.245 2.807 8.734 8.734 0 0 1-6.343-3.216 3.063 3.063 0 0 0-.416 1.547c0 1.068.542 2.01 1.369 2.561a3.047 3.047 0 0 1-1.394-.384v.039a3.078 3.078 0 0 0 2.468 3.018 3.11 3.11 0 0 1-1.39.052 3.078 3.078 0 0 0 2.875 2.137 6.17 6.17 0 0 1-4.555 1.275 8.707 8.707 0 0 0 4.716 1.383c5.66 0 8.757-4.69 8.757-8.758 0-.132-.003-.265-.01-.397A6.226 6.226 0 0 0 19.5 7.347a6.153 6.153 0 0 1-1.766.486 3.094 3.094 0 0 0 1.353-1.703z"
      />
    </SvgImage>
  );
};

export default TwitterIcon;
