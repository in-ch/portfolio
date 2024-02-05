import Checkbox from "@/components/Common/Checkbox";
import TrashIcon from "@/components/Icon/TrashIcon";
import { Todo } from "@/types/todo";
import Link from "next/link";

interface TodoItemProps {
  data: Todo;
}

/**
 * @description Todo Item 컴포넌트
 * @returns {JSX.Element}
 */
const TodoItem = ({ data }: TodoItemProps) => {
  return (
    <Link href="/useEffect/detail">
      <div key={`todo-${data.id}`} className="space-y-6 py-6">
        <div className="flex items-center space-x-2">
          <Checkbox id={`todo-${data.id}`} />
          <label
            className="font-normal flex-1 ml-2"
            htmlFor={`todo-${data.id}`}
          >
            <p className="text-2xl">{data.id}</p>
            <p className="cursor-pointer text-xl">{data.title}</p>
          </label>
          <button>
            <TrashIcon className="w-6 h-6" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default TodoItem;
