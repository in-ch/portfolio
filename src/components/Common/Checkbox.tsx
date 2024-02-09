interface CheckboxProps {
  id: string;
}

/**
 * @param {string} id 체크 박스의 id값
 * @description 체크박스 컴포넌트
 * @returns {JSX.Element}
 */
const Checkbox = ({ id }: CheckboxProps) => {
  return (
    <input
      className="peer h-4 w-4 shrink-0 rounded-sm border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
      id={id}
      type="checkbox"
      role="checkbox"
      aria-checked="false"
      data-state="unchecked"
    />
  );
};

export default Checkbox;
