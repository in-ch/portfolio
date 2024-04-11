interface ItemProps {}

const Item = ({}: ItemProps): React.ReactElement => {
  return (
    <div className="w-[280px] h-[360px] bg-white rounded-[10px] shadow-md cursor-pointer hover:shadow-xs"></div>
  );
};

export default Item;
