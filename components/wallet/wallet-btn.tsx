import { ReactNode } from "react";

type Props = {
  onClick: () => void;
  name: string;
  icon: ReactNode;
};

const WalletBtn = ({ onClick, name, icon }: Props) => {
  return (
    <button
      className="bg-[#25213D] border border-[#3A3C41] rounded-[10px] flex flex-col space-y-2.5 items-center w-full py-7 cursor-pointer hover:bg-[#1e1e1e]"
      onClick={onClick}
    >
      {icon}
      <p className="text-white text-sm font-semibold">{name}</p>
    </button>
  );
};

export default WalletBtn;
