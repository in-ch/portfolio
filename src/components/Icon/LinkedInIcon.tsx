import SvgImage, { IconProps } from "./SvgImage";

/**
 * @param {IconProps} props 컬러 등 기타 아이콘 필요 정보
 * @description 링크드인 아이콘
 * @returns {JSX.Element}
 */
const LinkedInIcon = (props: IconProps): JSX.Element => {
  const { className, color } = props;
  return (
    <SvgImage width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        fillRule="nonzero"
        d="M22.224 0H1.772C.794 0 0 .775 0 1.73v20.538C0 23.224.794 24 1.772 24h20.452c.979 0 1.776-.776 1.776-1.732V1.73C24 .775 23.203 0 22.224 0zM7.118 20.452h-3.56V8.998h3.56v11.454zM5.339 7.432a2.064 2.064 0 1 1-.002-4.128 2.064 2.064 0 0 1 .002 4.128zm15.111 13.02h-3.557v-5.57c0-1.329-.024-3.038-1.85-3.038-1.851 0-2.135 1.447-2.135 2.941v5.667H9.35V8.998h3.414v1.565h.048c.475-.9 1.636-1.85 3.368-1.85 3.605 0 4.27 2.373 4.27 5.456v6.283z"
      />
    </SvgImage>
  );
};

export default LinkedInIcon;
