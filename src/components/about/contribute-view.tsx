interface ContributeViewProps {
  title: string;
  subs: string[];
  lis: string[];
}

const ContributeView = ({ title, subs, lis }: ContributeViewProps): JSX.Element => {
  return (
    <div className="mt-2 pl-6">
      <p className="mt-4 bg-primary inline-block px-2 py-1 rounded-[6px] text-white mb-4 text-[14px]">
        {title}
      </p>
      {subs.map((sub: string) => {
        return (
          <p key={`contribute-sub-${sub}`} className="text-[13px] text-[#535353]">
            {sub}
          </p>
        );
      })}
      <ul className="ml mt-[12px] gap-2 flex flex-col">
        {lis.map((li) => {
          return (
            <li key={`contribute-li-${li}`}>
              <p className="text-[14px]">{li}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContributeView;
