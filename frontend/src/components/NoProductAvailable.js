const NoProductsAvailable = () => {
    return (
      <div className="flex items-center justify-center h-[26rem] w-full opacity-70"> {/* reduced opacity */}
        <div className="relative w-52 sm:w-64 h-80 sm:h-96">
          {/* Back Bag */}
          <div className="absolute left-4 top-4 w-full h-full bg-orange-700 rounded-sm shadow-inner transform rotate-[2deg] border-2 border-[#1d0e01]"></div>
  
          {/* Front Bag */}
          <div className="relative w-full h-full bg-orange-600 rounded-sm border-2 border-[#1d0e01] flex flex-col justify-start items-center px-4 pb-6 shadow-md">
            {/* Handles */}
            <div className="absolute -top-6 left-6 flex gap-10">
              <div className="w-6 h-12 border-[3px] border-orange-500 rounded-full border-b-transparent border-r-transparent rotate-[-20deg]"></div>
              <div className="w-6 h-12 border-[3px] border-orange-500 rounded-full border-b-transparent border-l-transparent rotate-[20deg]"></div>
            </div>
  
            {/* Message */}
            <div className="mt-24 text-center text-lg sm:text-xl font-bold font-mono text-white animate-pulse">
              No Products <br /> Available
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NoProductsAvailable;
  