import React from "react";
import SvgImage, { IconProps } from "./SvgImage";

/**
 * @param {IconProps} props 컬러 등 기타 아이콘 필요 정보
 * @description 인스타그램 아이콘
 * @returns {JSX.Element}
 */
const InstagramIcon = (props: IconProps): JSX.Element => {
  const { className, color } = props;
  return (
    <SvgImage width={24} height={24} viewBox="0 0 24 24" className={className}>
      <path
        fill={color}
        fillRule="nonzero"
        d="M22.226 0H1.774C.834 0 0 .73 0 1.774V22.33C0 23.27.835 24 1.774 24h20.452c.94 0 1.774-.73 1.774-1.774V1.774C24 .73 23.165 0 22.226 0zM12.104 18.574c-3.443 0-6.156-2.713-6.156-6.157 0-3.443 2.817-6.156 6.156-6.156 3.444 0 6.157 2.713 6.157 6.156 0 3.444-2.713 6.157-6.157 6.157zm6.47-11.165c-.835 0-1.461-.626-1.461-1.461 0-.835.626-1.461 1.46-1.461.836 0 1.462.626 1.462 1.46-.105.836-.73 1.462-1.461 1.462z"
      />
    </SvgImage>
  );
};

export default InstagramIcon;
