/**
 * @description 회사 정보 관련 molecule 컴포넌트
 * @returns {JSX.Element}
 */
const CompanyInfo = (): JSX.Element => {
  return (
    <address>
      <p className="mr-4 mt-2 text-xs font-normal not-italic"></p>
      <p className="mt-2 text-left text-xs  font-normal not-italic leading-4 text-gray-600">
        Copyright © 2024 . All rights reserved.
      </p>
      <p className="h-max-content text-left text-xs font-normal  not-italic leading-4 text-orange-500">
        개인정보처리방침
      </p>
    </address>
  );
};

export default CompanyInfo;
