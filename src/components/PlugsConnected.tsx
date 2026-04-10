import { PuzzlePiece01 } from "@untitled-ui/icons-react";

interface PlugsConnectedProps {
  className?: string;
}

export const PlugsConnected = ({ className }: PlugsConnectedProps): JSX.Element => {
  return <PuzzlePiece01 className={`w-6 h-6 text-[#3A3A3AB2] ${className || ""}`} />;
};
