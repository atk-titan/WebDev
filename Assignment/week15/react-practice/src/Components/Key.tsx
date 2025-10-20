import type React from "react";

type Props = {
  head: string;
  subHead?: string;
  icon?: React.ReactNode;
};

const Key = (props: Props) => {
  const dontInclude = ["Backspace", "Enter", "Space"];
  return (
    <div className="h-10 w-full p-1 relative bg-background rounded hover:cursor-pointer shadow-md shadow-neutral-200/45">
      {props?.subHead && (
        <div className="absolute text-sm -inset-y-0 inset-x-1">
          {props.subHead}
        </div>
      )}
        <div className="h-full w-full flex flex-col items-center justify-center text-foreground/75">
          {props?.icon && (
            <div className="text-xl mb-[-5px]">{props.icon}</div>
          )}
          {!dontInclude.includes(props.head) && <div className={"text-sm"}>
            {props.head.toUpperCase()}
          </div>}
        </div>
    </div>
  );
};

export default Key;
