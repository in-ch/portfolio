import React, { ReactNode } from "react";

interface SvgImageProps {
  children: ReactNode;
  width: number;
  height: number;
  viewBox: string;
  className?: string;
}
export interface IconProps extends Pick<SvgImageProps, "className"> {
  color?: string;
}

/**
 * @param {ReactNode} children 자식 node
 * @param {number} width svg 넓이
 * @param {number} height svg 높이
 * @param {string} viewBox 뷰 박스
 * @param {string} className? 클래스 네임
 * @description svg img 뼈대 컴포넌트
 * @returns {JSX.Element}
 */
const SvgImage = (props: SvgImageProps): JSX.Element => {
  const { children, width, height, viewBox, className } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
    >
      {children}
    </svg>
  );
};

export default SvgImage;
