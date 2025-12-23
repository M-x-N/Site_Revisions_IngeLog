import Link from 'next/link';

interface HomeButtonProps {
  className?: string;
}

const HomeButton: React.FC<HomeButtonProps> = ({ className }) => {
  return (
    <Link
      href="/"
      className={`flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 ${className}`}
    >
      🏠 Retour à l'accueil
    </Link>
  );
};

export default HomeButton;
