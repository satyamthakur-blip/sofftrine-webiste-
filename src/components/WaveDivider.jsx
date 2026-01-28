const WaveDivider = ({ flip = false, className = '' }) => {
  return (
    <div className={`relative w-full ${className}`}>
      <svg
        className={`w-full h-12 md:h-16 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 43.3C1200 47 1320 53 1380 56.7L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z"
          fill="currentColor"
          className="text-slate-50"
        />
      </svg>
    </div>
  );
};

export default WaveDivider;
