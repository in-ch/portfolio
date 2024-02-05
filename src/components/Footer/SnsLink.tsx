import { SNS_DATA } from "@/constants/snsData";

/**
 * @description 회사의 sns 링크
 * @returns {JSX.Element}
 */
const SnsLink = () => {
  return (
    <div
      itemType="http://schema.org/Organization"
      className="mb-[32px] h-fit flex space-x-2"
    >
      {SNS_DATA.map((data) => (
        <div key={`sns-data-${data.url}`}>
          <a rel="noopener noreferrer" target="_blank" itemProp="sameAs">
            {data.component}
          </a>
        </div>
      ))}
    </div>
  );
};

export default SnsLink;
