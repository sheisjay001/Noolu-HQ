import { Users01 } from "@untitled-ui/icons-react";

interface UsersProps {
  className?: string;
}

export const Users = ({ className }: UsersProps): JSX.Element => {
  return <Users01 className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
