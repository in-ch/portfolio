import ArrowLeft from "@/components/Icon/ArrowLeft";
import ArrowRight from "@/components/Icon/ArrowRight";

interface ArrowButtonProps {
  direction: "RIGHT" | "LEFT";
  onClick?: () => void;
  color?: string;
}

/**
 * @param {"RIGHT" | "LEFT"} direction 화살표 방향
 * @param {() => void} onClick 부수효과 없는 버튼 클릭 이벤트
 * @param {string} color 버튼 색상
 * @description 화살표 버튼
 * @returns {JSX.Element}
 */
const ArrowButton = ({
  direction,
  onClick,
  color,
}: ArrowButtonProps): JSX.Element => {
  return (
    <button
      aria-label="button"
      type="button"
      onClick={onClick}
      style={{
        position: "absolute",
        right: 16,
        lineHeight: 30,
      }}
    >
      {direction === "LEFT" ? (
        <ArrowLeft color={color} />
      ) : (
        <ArrowRight color={color} />
      )}
    </button>
  );
};

export default ArrowButton;
