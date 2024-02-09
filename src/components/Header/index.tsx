import Logo from '@/components/Common/Logo';
import Menu from '@/components/Header/Menu';

/**
 * @description 헤더 컴포넌트
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
  return (
    <header className="fixed h-24 w-full max-w-4xl border p-4">
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <Menu />
      </div>
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
