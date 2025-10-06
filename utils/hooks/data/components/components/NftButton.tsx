import { CreditCard } from "lucide-react";

interface NftButtonProps {
  onClick?: () => void;
}

const NftButton: React.FC<NftButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent via-primary to-secondary px-5 py-2 text-sm font-semibold text-background shadow-aurora transition-transform hover:-translate-y-0.5 hover:brightness-110"
    >
      <CreditCard className="h-4 w-4" />
      Buy with NFT
    </button>
  );
};

export default NftButton;
