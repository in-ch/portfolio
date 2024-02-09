import { CSSProperties, ReactNode } from "react";

interface ContentLayoutProps {
  style?: CSSProperties;
  children: ReactNode;
}

/**
 * @param {CSSProperties?} style 옵셔널한 스타일 적용
 * @param {ReactNode} children 하위 node
 * @description breakpoint의 md 기준인 1280px으로 최대 크기가 제한된 컨텐츠 레이아웃 컴포넌트
 * @returns {JSX.Element}
 */
const ContentLayout = ({
  style = {},
  children,
}: ContentLayoutProps): JSX.Element => {
  return (
    <div className="w-full max-w-[1270px]" style={style}>
        {children}
    </div>
  );
};

export default ContentLayout;
