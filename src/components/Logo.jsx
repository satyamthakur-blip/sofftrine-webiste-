import { Link } from 'react-router-dom';

const Logo = ({ className = '' }) => {
  return (
    <Link 
      to="/" 
      className={`flex items-center gap-3 ${className}`}
      aria-label="Softtrine - Home"
    >
      <img 
        src="/images/company-logo.png" 
        alt="Softtrine - Enterprise IT Solutions" 
        className="h-8 w-auto"
      />
      <span className="text-xl font-bold tracking-tight text-slate-900">
        SOFTTRINE
      </span>
    </Link>
  );
};

export default Logo;
