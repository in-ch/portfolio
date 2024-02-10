import Logo from '@/components/Common/Logo';
import Menu from '@/components/Header/Menu';
import Tags from '@/components/Header/Tags';

/**
 * @description 헤더 컴포넌트
 * @returns {JSX.Element}
 */
const Header = (): JSX.Element => {
  const mock_tags = [
    '🔥 지금 핫한',
    '🚥 실시간 랭킹',
    '🕰️ 오늘 신작',
    '🙋‍♂️ 남성 추천',
    '🙆‍♀️ 여성 추천',
    '😭 명작',
  ];
  return (
    <header className="fixed z-10 h-[120px] w-full max-w-4xl bg-white p-4">
      <div className="flex flex-row items-center justify-between">
        <Logo />
        <Menu />
      </div>
      <Tags tags={mock_tags} />
    </header>
  );
};

Header.displayName = 'Header';
export default Header;
