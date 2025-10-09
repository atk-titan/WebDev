const Hero = () => {
  return (
    <div className="flex h-screen flex-col items-center py-40">
      <h1 className="leading-tighter max-w-2xl bg-gradient-to-r from-neutral-50 to-neutral-400 bg-clip-text text-center text-7xl font-bold tracking-tight text-transparent">
        Unleash the power of intuitive finance
      </h1>
      <p className="mt-10 max-w-2xl text-center text-xl text-neutral-500 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="mt-10 flex w-full max-w-lg justify-center">
        <input
          type="text"
          className="mr-4 flex-1 rounded border border-neutral-700 px-3 py-2 text-white transition duration-200 placeholder:text-neutral-500 focus:ring-1 focus:ring-primary focus:outline-none"
          placeholder="Enter any value"
        />
        <button className="relative cursor-pointer rounded border border-neutral-700 px-3 py-2 text-neutral-50">
          <div className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
