const Pattern = () => {
    const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
  return (
    <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <div className="flex gap-36 h-full">
                {arr.map((el) => (
                <div
                    key={el}
                    className={`h-full w-px bg-gradient-to-b from-pattern-color to-transparent rounded-full`}
                ></div>
                ))}
            </div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
            <div className="flex flex-col gap-36 w-full">
                {arr.map((el) => (
                <div
                    key={el}
                    className={`h-px w-full bg-gradient-to-r from-transparent via-pattern-color/70 to-transparent rounded-full`}
                ></div>
                ))}
            </div>
        </div>    
    </div>
  );
}

export default Pattern;