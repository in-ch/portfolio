import { ReactNode } from "react";

/**
 * @param {ReactNode} children 자식 node
 * @description 모바일 퍼스트 레이아웃입니다.
 *              데스크탑일 경우 모바일 크기로 제한합니다.
 * @returns {JSX.Element}
 */
const MobileFirstLayout = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const gradientStyle = {
                           background: "linear-gradient(in oklab, #f8fefe, #e3faff, #d5fff9)",
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="py-12 h-screen">
        <div
          className="w-full h-full p-6 shadow-md rounded-lg overflow-hidden"
          style={gradientStyle}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MobileFirstLayout;
