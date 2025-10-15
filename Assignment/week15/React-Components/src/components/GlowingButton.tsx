const GlowingButton = ({
  className,
  title,
}: {
  className: string;
  title: string;
}) => {
  return (
    <div className="group hover:shadow shadow-blue-300/30">
      <button
        className={`relative rounded cursor-pointer text-text-light font-semibold py-2 px-4 text-center border border-neutral-500 ${className}`}
      >
        <div className="absolute opacity-0 group-hover:opacity-100 inset-x-0 h-0.5 -top-px w-full bg-gradient-to-r from-transparent via-blue-400 to-transparent transition-opacity duration-200"></div>
        <div className="absolute inset-x-0 h-0.5 -bottom-px w-full bg-gradient-to-r from-transparent via-blue-400/60 group-hover:via-blue-400/75 to-transparent"></div>
        {title}
      </button>
    </div>
  );
};

export default GlowingButton;
