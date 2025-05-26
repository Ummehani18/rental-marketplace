import React from "react";

const NoSignal = () => {
  return (
    <div className="flex items-center justify-center w-[30em] h-[30em] relative">
      <div className="flex flex-col items-center justify-center mt-20 relative">
        {/* Antenna */}
        <div className="w-20 h-20 rounded-full border-2 border-black bg-[#f27405] relative z-0 -mb-24">
          <div className="absolute w-[50px] h-[56px] left-[1.68em] rounded-[45%] rotate-[140deg] border-4 border-transparent shadow-[inset_0_16px_#a85103,inset_0_16px_1px_1px_#a85103]"></div>
          <div className="absolute top-[-9.4em] left-[0.4em] rotate-[-25deg] w-4 h-2 rounded-full bg-[#f69e50]"></div>
          <div className="absolute top-[0.2em] left-[1.25em] rotate-[-20deg] w-6 h-3 rounded-full bg-[#f69e50]"></div>

          {/* Antenna rods */}
          <div className="absolute top-[-102%] left-[-130%] w-[12em] h-[5.5em] rounded-full bg-gradient-to-b from-[#171717] via-[#353535] to-[#171717] rotate-[-29deg] [clip-path:polygon(50%_0%,49%_100%,52%_100%)]" />
          <div className="absolute top-[-211%] left-[-35%] w-2 h-2 rounded-full border-2 border-black bg-[#979797] z-10 rotate-45" />
          <div className="absolute top-[-210%] left-[-10%] w-[12em] h-[4em] rounded-full bg-gradient-to-b from-[#171717] via-[#353535] to-[#171717] rotate-[-8deg] [clip-path:polygon(47%_0,47%_0,34%_34%,54%_25%,32%_100%,29%_96%,49%_32%,30%_38%)]" />
          <div className="absolute top-[-294%] left-[94%] w-2 h-2 rounded-full border-2 border-black bg-[#979797] z-10" />
        </div>

        {/* TV */}
        <div className="relative w-[17em] h-[9em] mt-12 rounded-[15px] border-2 border-[#1d0e01] bg-[#d36604] shadow-inner shadow-[inset_0.2em_0.2em_#e69635] flex flex-col items-center">
          {/* SVG curve */}
          <svg
            viewBox="0 0 189.929 189.929"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute w-3 h-3 top-1 left-[-0.25em]"
          >
            <path
              d="M70.343,70.343c-30.554,30.553-44.806,72.7-39.102,115.635l-29.738,3.951C-5.442,137.659,11.917,86.34,49.129,49.13
                C86.34,11.918,137.664-5.445,189.928,1.502l-3.95,29.738C143.041,25.54,100.895,39.789,70.343,70.343z"
              fill="black"
            />
          </svg>

          {/* Display */}
          <div className="rounded-[15px] shadow-[3.5px_3.5px_0px_#e69635] my-2">
            <div className="w-[11em] h-[7.75em] flex items-center justify-center rounded-[10px]">
              <div className="w-[13em] h-[7.85em] font-bold text-[#252525] border-2 border-[#1d0e01] bg-[#0173f7] rounded-[10px] flex items-center justify-center text-[0.75em] tracking-wider font-mono z-10">
                No Signal!
              </div>
            </div>
          </div>

          {/* Lines */}
          <div className="flex gap-[0.1em] self-end mt-[-1em]">
            <div className="w-[2px] h-2 bg-black rounded-t-[25px]" />
            <div className="w-[2px] h-4 bg-black rounded-t-[25px]" />
            <div className="w-[2px] h-2 bg-black rounded-t-[25px]" />
          </div>

          {/* Buttons */}
          <div className="w-[4.25em] h-[8em] bg-[#e69635] border-2 border-[#1d0e01] p-2 rounded-[10px] flex flex-col items-center justify-center gap-3 shadow-[3px_3px_0px_#e69635] mt-2">
            {/* b1 */}
            <div className="relative w-[1.65em] h-[1.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_2px_2px_1px_#b49577,-2px_0px_#513721,-2px_0px_0px_1px_black]">
              <div className="absolute top-[-0.1em] left-[0.65em] rotate-45 w-[0.15em] h-[1.5em] bg-black" />
              <div className="absolute top-[1em] left-[0.5em] rotate-[47deg] w-[0.1em] h-[0.4em] bg-black rounded-sm" />
              <div className="absolute top-[0.9em] left-[0.8em] rotate-[47deg] w-[0.1em] h-[0.55em] bg-black rounded-sm" />
            </div>

            {/* b2 */}
            <div className="relative w-[1.65em] h-[1.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_2px_2px_1px_#b49577,-2px_0px_#513721,-2px_0px_0px_1px_black]">
              <div className="absolute top-[-0.1em] left-[0.65em] rotate-[-45deg] w-[0.15em] h-[1.5em] bg-black" />
              <div className="absolute top-[1.05em] left-[0.8em] rotate-[-45deg] w-[0.15em] h-[0.4em] bg-black rounded-sm" />
            </div>

            {/* Speakers */}
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
                <div className="w-[0.65em] h-[0.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_1.25px_1.25px_1px_#b49577]" />
                <div className="w-[0.65em] h-[0.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_1.25px_1.25px_1px_#b49577]" />
                <div className="w-[0.65em] h-[0.65em] rounded-full bg-[#7f5934] border-2 border-black shadow-[inset_1.25px_1.25px_1px_#b49577]" />
              </div>
              <div className="w-full h-[2px] bg-[#171717]" />
              <div className="w-full h-[2px] bg-[#171717]" />
            </div>
          </div>
        </div>

        {/* Base */}
        <div className="flex justify-center items-center gap-[8.7em] w-full mt-2 relative">
          <div className="w-8 h-4 bg-[#4d4d4d] border-2 border-[#171717] z-0" />
          <div className="w-8 h-4 bg-[#4d4d4d] border-2 border-[#171717] z-0" />
          <div className="absolute w-[17.5em] h-[0.15em] bg-[#171717] bottom-[-0.5em]" />
        </div>
      </div>
    </div>
  );
};

export default NoSignal;
