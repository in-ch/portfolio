import Image from 'next/image';
import SearchBar from './SearchBar';

/**
 * @description 메뉴 컴포넌트
 * @returns {JSX.Element}
 */
const Menu = (): JSX.Element => {
  return (
    <div className="flex pl-2">
      <SearchBar />
      <button className="px-[8px]">
        <Image
          alt="선물함"
          width={24}
          height={24}
          aria-hidden="false"
          className="cursor-pointer"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.9992 5.99905L9 2.99981C7.89543 1.89524 6.10457 1.89524 5 2.99981C4.18885 3.81096 3.97337 4.99222 4.35357 6H4C2.89543 6 2 6.89543 2 8V20C2 21.1046 2.89543 22 4 22H11.25H12.75H20C21.1046 22 22 21.1046 22 20V8C22 6.89543 21.1046 6 20 6H19.6449C20.0251 4.99222 19.8096 3.81096 18.9985 2.99981C17.8939 1.89524 16.103 1.89524 14.9985 2.99981L11.9992 5.99905ZM17.9993 6C18.5517 5.44751 18.5516 4.55172 17.9989 3.99943C17.4463 3.44734 16.5509 3.44762 15.9987 4.00007L14 5.99981L17.9993 6ZM9.99981 6L8 3.99981C7.44771 3.44753 6.55228 3.44753 6 3.99981C5.44771 4.5521 5.44771 5.44753 6 5.99981L9.99981 6ZM20 20.5H12.75V7.5H20C20.2761 7.5 20.5 7.72386 20.5 8V20C20.5 20.2761 20.2761 20.5 20 20.5ZM11.25 20.5V7.5H4C3.72386 7.5 3.5 7.72386 3.5 8V20C3.5 20.2761 3.72386 20.5 4 20.5H11.25Z' fill='%23222222'/%3e %3c/svg%3e"
        />
      </button>
      <button className="px-[8px]">
        <Image
          alt="유저"
          width={24}
          height={24}
          aria-hidden="false"
          className="cursor-pointer"
          src="data:image/svg+xml,%3csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3cpath fill-rule='evenodd' clip-rule='evenodd' d='M12.0009 2C9.23899 2 7 4.23898 7 7.00091C7 9.76285 9.23899 12.0018 12.0009 12.0018C14.7629 12.0018 17.0018 9.76285 17.0018 7.00091C17.0018 4.23898 14.7629 2 12.0009 2ZM8.5 7.00091C8.5 5.06741 10.0674 3.5 12.0009 3.5C13.9344 3.5 15.5018 5.06741 15.5018 7.00091C15.5018 8.93441 13.9344 10.5018 12.0009 10.5018C10.0674 10.5018 8.5 8.93441 8.5 7.00091Z' fill='%23222222'/%3e %3cpath d='M8.75 14C5.02208 14 2 17.0221 2 20.75V21.9953H3.5V20.75C3.5 17.8505 5.85051 15.5 8.75 15.5H15.2527C18.1522 15.5 20.5027 17.8505 20.5027 20.75V21.9953H22.0027V20.75C22.0027 17.0221 18.9807 14 15.2527 14H8.75Z' fill='%23222222'/%3e %3c/svg%3e"
        />
      </button>
      <div className="h-4 w-4 md:w-2"></div>
    </div>
  );
};

Menu.displayName = 'Menu';
export default Menu;
