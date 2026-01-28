const SectionLabel = ({ children, className = '' }) => {
  return (
    <p className={`text-xs font-light tracking-widest uppercase text-slate-400 mb-4 ${className}`}>
      {children}
    </p>
  );
};

export default SectionLabel;
