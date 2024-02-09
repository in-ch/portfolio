import Image from 'next/image';

/**
 * @description 검색창
 * @returns {JSX.Element}
 */
const SearchBar = () => {
  return (
    <form
      aria-label="검색창"
      role="search"
      className="mr-4 flex h-[36px] w-[200px] justify-center overflow-hidden rounded-2xl border border-gray-200"
    >
      <input type="text" placeholder="검색어를 입력해주세요." className="text-xs outline-none" />
      <button>
        <Image
          alt="검색"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M15.1991 6.74703C12.865 4.4131 9.08077 4.4131 6.74668 6.74703C4.41256 9.08098 4.41256 12.8651 6.74668 15.199C8.90131 17.3535 12.2917 17.5192 14.6364 15.696L17.9384 18.9978L18.999 17.9371L15.6969 14.6353C17.5194 12.2908 17.3535 8.90121 15.1991 6.74703ZM7.8073 7.80772C9.55561 6.05953 12.3902 6.05953 14.1385 7.80772C15.8868 9.55588 15.8868 12.3902 14.1385 14.1383C12.3902 15.8865 9.55561 15.8865 7.8073 14.1383C6.05902 12.3902 6.05902 9.55588 7.8073 7.80772Z' fill='%23222222'/%3e %3c/svg%3e"
          width={24}
          height={24}
        />
      </button>
    </form>
  );
};

export default SearchBar;
