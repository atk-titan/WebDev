import {
  GeminiLogo,
  GoCopilotLogo,
  ClaudeLogo,
  OpenAILogo,
  MetaIconOutline,
} from "../assets/Logos";

const Card = ({ className }: { className: string }) => {
  const logo = [
    <GeminiLogo className="h-7" />,
    <GoCopilotLogo className="text-3xl" />,
    <ClaudeLogo className="h-7 w-7" />,
    <OpenAILogo className="h-7 w-7" />,
    <MetaIconOutline className="h-7 w-7" />,
  ];
  return (
    <div
      className={`relative text-white border border-neutral-800 p-5 rounded min-w-xs max-w-md shadow hover:shadow-md shadow-neutral-800/50 transition-shadow duration-200 ${className}`}
    >
      <div className="relative h-56 p-4 mask-r-from-50% mask-l-from-50% overflow-hidden">
        <div className="h-full flex items-center justify-between gap-5 animate-me">
            {[...logo, ...logo].map((l, index) => (
            <div
                key={index}
                className="bg-neutral-300 rounded-full p-3"
            >
                {l}
            </div>
            ))}
        </div>
      </div>
      <div className="p-3">
        <div className="text-xl font-semibold leading-7 text-neutral-200">
            <h4>
                You can definately use these AI's to  increase yourr productivity.
            </h4>
        </div>
        <div className="text-sm tracking-wide leading-5 text-neutral-400 mt-2">
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum veniam harum sint hic laboriosam architecto necessitatibus earum velit cupiditate itaque, iusto expedita suscipit iure ipsa dolor voluptatem omnis, similique non delectus, ipsum et saepe minus animi! Culpa tempore rem mollitia sunt quis laboriosam et assumenda optio nisi reiciendis earum magnam est rerum, quisquam totam quasi beatae debitis fugit. Consectetur, sit?
            </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
