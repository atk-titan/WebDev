import type React from "react";

type Props = {
  head: string;
  subHead?: string;
  icon?: React.ReactNode;
};

const Key = (props: Props) => {
  const dontInclude = ["Backspace", "Enter", "Space"];
  let height = "h-[100%] hover:h-[97%] rounded"

  if(["←", "→", "↑", "↓"].includes(props?.head)){
    if(props.head === "↓") height = "h-[42%] hover:h-[41%] rounded-b-sm my-0"
    else if(props.head === "↑") height = "h-[42%] hover:h-[41%] rounded-t-sm"  
    else height = "h-[48%] hover:h-[47%] rounded";
  }
  return (
    <div className={`w-full p-1 relative bg-background hover:shadow-neutral-600 shadow-[0px_1px_5px_2px] shadow-neutral-200/45 transition-all duration-200 hover:my-auto ${height}`}>
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
