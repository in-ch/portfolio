import SvgImage, { IconProps } from "@/components/Icon/SvgImage";

/**
 * @param {IconProps} props 컬러 등 기타 아이콘 필요 정보
 * @description 왼쪽 화살표 아이콘
 * @returns {JSX.Element}
 */
const ArrowLeft = (props: IconProps) => {
  const { className, color } = props;
  return (
    <SvgImage width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        d="M15.76 18.35a1 1 0 1 1-1.52 1.3l-6-7a1 1 0 0 1 0-1.3l6-7a1 1 0 1 1 1.52 1.3L10.316 12l5.442 6.35z"
      />
    </SvgImage>
  );
};

export default ArrowLeft;
