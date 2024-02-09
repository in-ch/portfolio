/**
 * @description 로고 컴포넌트
 * @returns {JSX.Element}
 */
const Logo = (): JSX.Element => {
  return (
    <section className="hidden font-semibold md:block">
      <p className="text-md md:text-sm">네이버 페이지</p>
    </section>
  );
};

Logo.displayName = 'Logo';
export default Logo;
