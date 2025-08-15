import { Loader2 } from "lucide-react";

type Props = {
  size?: number;
  className?: string;
};

const Spinner = ({ size, className }: Props) => {
  return (
    <Loader2 size={size ?? 25} className={`mr-2 animate-spin ${className}`} />
  );
};

export default Spinner;
