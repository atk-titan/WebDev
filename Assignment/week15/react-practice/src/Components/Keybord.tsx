import Key from "./Key";
import { HiOutlineBackspace } from "react-icons/hi2";
import { MdOutlineKeyboardTab } from "react-icons/md";
import { MdOutlineKeyboardCapslock } from "react-icons/md";
import { MdKeyboardReturn } from "react-icons/md";
import { BsShift } from "react-icons/bs";
import { MdOutlineSpaceBar } from "react-icons/md";

type KeyType = {
  head: string;
  subHead?: string;
  icon?: React.ReactNode;
  up?: string;
  down?: string;
};


const Keybord = () => {
  const keys: KeyType[][] = [
    // Row 1
    [
      { head: "`", subHead: "~" },
      { head: "1", subHead: "!" },
      { head: "2", subHead: "@" },
      { head: "3", subHead: "#" },
      { head: "4", subHead: "$" },
      { head: "5", subHead: "%" },
      { head: "6", subHead: "^" },
      { head: "7", subHead: "&" },
      { head: "8", subHead: "*" },
      { head: "9", subHead: "(" },
      { head: "0", subHead: ")" },
      { head: "-", subHead: "_" },
      { head: "=", subHead: "+" },
      { head: "Backspace", icon: <HiOutlineBackspace /> },
    ],

    // Row 2
    [
      { head: "Tab", icon: <MdOutlineKeyboardTab /> },
      { head: "Q" },
      { head: "W" },
      { head: "E" },
      { head: "R" },
      { head: "T" },
      { head: "Y" },
      { head: "U" },
      { head: "I" },
      { head: "O" },
      { head: "P" },
      { head: "[", subHead: "{" },
      { head: "]", subHead: "}" },
      // { head: "dummy", subHead: "" },
      { head: "\\", subHead: "|" },
    ],

    // Row 3
    [
      { head: "Caps", icon: <MdOutlineKeyboardCapslock /> },
      { head: "A" },
      { head: "S" },
      { head: "D" },
      { head: "F" },
      { head: "G" },
      { head: "H" },
      { head: "J" },
      { head: "K" },
      { head: "L" },
      { head: ";", subHead: ":" },
      { head: "'", subHead: '"' },
      { head: "Enter", icon: <MdKeyboardReturn /> },
    ],

    // Row 4
    [
      { head: "Shift", icon: <BsShift size={14} className="mb-1" /> },
      { head: "Z" },
      { head: "X" },
      { head: "C" },
      { head: "V" },
      { head: "B" },
      { head: "N" },
      { head: "M" },
      { head: ",", subHead: "<" },
      { head: ".", subHead: ">" },
      { head: "/", subHead: "?" },
      { head: "Shift", icon: <BsShift size={14} className="mb-1" /> },
    ],

    // Row 5 (Bottom)
    [
      { head: "Ctrl" },
      { head: "Fn" },
      { head: "Alt" },
      { head: "Space", icon: <MdOutlineSpaceBar /> },
      { head: "Alt" },
      { head: "Ctrl" },
      { head: "←" },
      {
        head: "updown",
        up: "↑",
        down: "↓",
      },
      { head: "→" },
    ],
  ];
  return (
    <div className="relative border border-neutral-700 p-2 min-w-2xs w-[80vw] h-[22vw] bg-keyboard-color rounded-2xl">
      <div className="h-full w-full flex flex-col">
        {keys.map((row, rowIndex) => {
          return (
            <div
              key={rowIndex}
              className="grid grid-cols-58 grid-rows-1 items-center h-[calc(100%/5)]"
            >
              {row.map((key, index) => {
                let span;
                if (key.head === "Space") span = "col-span-24";
                else if (["Tab", "\\", "Ctrl"].includes(key.head))
                  span = "col-span-5";
                else if (key.head === "Caps") span = "col-span-6";
                else if (key.head === "Shift") span = "col-span-9";
                else if (key.head === "Enter") span = "col-span-8";
                else if (key.head === "Backspace") span = "col-span-6";
                else if (key.head === "dummy") span = "col-span-1 opacity-0 ";
                else span = "col-span-4";
                if(key.head === "→" || key.head === "←"){
                  return (
                    <div key={index} className={`${span} relative h-full`}>
                      <div className="h-full flex flex-col p-1">
                        <div className="h-full">

                        </div>
                        <Key
                          head={key?.head}
                          icon={key.icon}
                        />
                      </div>
                    </div>
                  );
                }
                if (key.head === "updown") {
                  return (
                    <div key={index} className={`${span} relative h-full`}>
                      <div className="h-full flex flex-col justify-center items-center">
                        <Key
                          head={key.up || ""}
                          icon={key.icon}
                        />
                        <Key
                          head={key?.down || ""}
                          icon={key.icon}
                        />
                      </div>
                    </div>
                  );
                }
                return (
                  <div key={index} className={`${span} p-2 h-full flex items-end `}>
                    <Key
                      head={key.head}
                      subHead={key.subHead || ""}
                      icon={key.icon}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Keybord;
