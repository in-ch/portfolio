import FacebookIcon from "@/components/Icon/FacebookIcon";
import InstagramIcon from "@/components/Icon/InstagramIcon";
import LinkedInIcon from "@/components/Icon/LinkedInIcon";
import TwitterIcon from "@/components/Icon/TwitterIcon";

const iconColor = "#d1d9df";
export const SNS_DATA = [
  {
    url: "https://www.facebook.com/neofect",
    component: <FacebookIcon color={iconColor} />,
  },
  {
    url: "https://www.instagram.com/neofect.usa",
    component: <InstagramIcon color={iconColor} />,
  },
  {
    url: "https://www.linkedin.com/company/neofect/",
    component: <LinkedInIcon color={iconColor} />,
  },
  {
    url: "https://twitter.com/neofect",
    component: <TwitterIcon color={iconColor} />,
  },
];
