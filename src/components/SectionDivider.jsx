const SectionDivider = ({ className = '' }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-px bg-slate-200/60"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
