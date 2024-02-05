import SvgImage, { IconProps } from "./SvgImage";

/**
 * @param {IconProps} props 컬러 등 기타 아이콘 필요 정보
 * @description 페이스북 아이콘
 * @returns {JSX.Element}
 */
const FacebookIcon = (props: IconProps): JSX.Element => {
  const { className, color } = props;
  return (
    <SvgImage width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        fillRule="nonzero"
        d="M20.766 0H3.234A3.234 3.234 0 0 0 0 3.234v17.532A3.234 3.234 0 0 0 3.234 24h8.647l.014-8.576H9.667a.526.526 0 0 1-.526-.524l-.01-2.765a.525.525 0 0 1 .525-.527h2.225v-2.67c0-3.1 1.893-4.79 4.658-4.79h2.27c.29 0 .525.236.525.526v2.332c0 .29-.235.525-.525.525l-1.392.001c-1.505 0-1.796.714-1.796 1.764v2.312h3.305c.315 0 .559.275.522.587l-.328 2.765a.525.525 0 0 1-.522.464h-2.962L15.621 24h5.145A3.234 3.234 0 0 0 24 20.766V3.234A3.234 3.234 0 0 0 20.766 0z"
      />
    </SvgImage>
  );
};

export default FacebookIcon;
