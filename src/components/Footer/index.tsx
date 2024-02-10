import CompanyInfo from './CompanyInfo';
import ContentLayout from '@/components/Common/ContentLayout';
import SnsLink from '@/components/Footer/SnsLink';

/**
 * @description 푸터 컴포넌트
 * @returns {JSX.Element}
 */
const Footer = (): JSX.Element => {
  return (
    <footer className="mt-2 flex justify-center px-4">
      <ContentLayout>
        <SnsLink />
        <CompanyInfo />
        <div itemType="http://schema.org/Organization">
          <link itemProp="url" href="https://test.com" />
          <a itemProp="sameAs" aria-label="페이스북" href="https://www.facebook.com/test" />
          <a itemProp="sameAs" aria-label="인스타그램" href="https://www.instagram.com/test.usa" />
          <a itemProp="sameAs" aria-label="링크드인" href="https://www.linkedin.com/test/test" />
          <a itemProp="sameAs" aria-label="트위터" href="https://twitter.com/test" />
          <a itemProp="sameAs" aria-label="블로그" href="https://blog.naver.com/test" />
        </div>
      </ContentLayout>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
