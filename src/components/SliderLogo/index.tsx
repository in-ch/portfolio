import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowButton from "./ArrowButton";
import ContentLayout from "@/components/Common/ContentLayout";
import { SLIDER_RESPONSE } from "@/constants/sliderResponsive";
import { Logo } from "@/types/etc";

interface LogoSliderSectionProps {
  title: string;
  logos: Logo[];
  buttonColor: string;
}

/**
 * @param {string} title 로고 슬라이더 제목
 * @param {Logo[]} logos 슬라이더의 로고 데이터들
 * @param {string} buttonColor 버튼 색상
 * @returns {JSX.Element}
 */
const SliderLogo = ({
  title,
  logos,
  buttonColor,
}: LogoSliderSectionProps): JSX.Element => {
  const settings = {
    infinite: true,
    adaptiveHeight: true,
    prevArrow: <ArrowButton direction="LEFT" color={buttonColor} />,
    nextArrow: <ArrowButton direction="RIGHT" color={buttonColor} />,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: SLIDER_RESPONSE,
  };
  return (
    <ContentLayout>
      <h2>{title}</h2>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={`slider-logo-${logo.alt}-${index}`} className="p-1">
            <img src={logo.imgUrl} alt={logo.alt} />
          </div>
        ))}
      </Slider>
    </ContentLayout>
  );
};

export default SliderLogo;
