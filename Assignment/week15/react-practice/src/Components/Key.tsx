import type React from "react";

type Props = {
  head: string;
  subHead?: string;
  icon?: React.ReactNode;
};

const Key = (props: Props) => {
  const dontInclude = ["Backspace", "Enter", "Space"];
  let height = "h-12 hover:h-11 rounded"

  if(["←", "→", "↑", "↓"].includes(props?.head)){
    if(props.head === "↓") height = "h-6 hover:h-5.5 rounded-b-sm mt-0.5"
    else if(props.head === "↑") height = "h-6 hover:h-5.5 rounded-t-sm mt-1"  
    else height = "h-6 hover:h-5.5 rounded";
  }
  return (
    <div className={`w-full p-1 relative bg-background hover:cursor-pointer hover:shadow-neutral-600 shadow-[0px_1px_5px_2px] shadow-neutral-200/45 transition-all duration-200 ${height}`}>
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
