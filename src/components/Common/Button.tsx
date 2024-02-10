interface ButtonProps {
  text: string;
  onClick: () => void;
}

/**
 * @param {string} text 버튼 text
 * @param {() => void)} onClick 클릭 이벤트
 * @description 버튼 컴포넌트
 * @returns {JSX.Element}
 */
const Button = ({ text, onClick }: ButtonProps) => {
  return (
    <input
      className="rounded-3xl border px-4 py-2 text-xs md:text-sm"
      type="button"
      role="button"
      value={text}
      onClick={onClick}
    />
  );
};

export default Button;
