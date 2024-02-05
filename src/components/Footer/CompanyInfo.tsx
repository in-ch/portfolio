/**
 * @description 회사 정보 관련 molecule 컴포넌트
 * @returns {JSX.Element}
 */
const CompanyInfo = (): JSX.Element => {
  return (
    <address>
      <p className="mt-2 mr-4 font-normal not-italic text-xs"></p>

      <p className="text-xs font-normal not-italic  leading-4 text-left text-gray-600 mt-2">
        Copyright © 2024 . All rights reserved.
      </p>
      <p className="h-max-content text-xs font-normal not-italic  leading-4 text-left text-orange-500">
        개인정보처리방침
      </p>
    </address>
  );
};

export default CompanyInfo;
