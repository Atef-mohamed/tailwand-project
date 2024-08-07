import React from "react";

const FetureList = () => {
  return <section className="pb-[150px]">
    <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[80px] w-[865px] max-w-full mx-auto">
            <div className="text-white element-center flex-col text-center">
                <img className="h-[80px] w-[80px] object-contain" src="/src/assets/images/icon-access-anywhere.svg" alt="anywere-icon" />
                <h4 className="text-xl font-semibold my-[15px]">Access Your files anywhere</h4>
                <p className="font-normal text-sm ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, tempore.</p>
            </div>
            <div className="text-white element-center flex-col text-center">
                <img className="h-[80px] w-[80px] object-contain" src="/src/assets/images/icon-security.svg" alt="anywere-icon" />
                <h4 className="text-xl font-semibold my-[15px]">Security you can trust</h4>
                <p className="font-normal text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, tempore.</p>
            </div>
            <div className="text-white element-center flex-col text-center">
                <img className="h-[80px] w-[80px] object-contain" src="/src/assets/images/icon-collaboration.svg" alt="anywere-icon" />
                <h4 className="text-xl font-semibold my-[15px]">Real-time collaboration</h4>
                <p className="font-normal text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, tempore.</p>
            </div>
            <div className="text-white element-center flex-col text-center">
                <img className="h-[80px] w-[80px] object-contain" src="/src/assets/images/icon-any-file.svg" alt="file-icon" />
                <h4 className="text-xl font-semibold my-[15px]">Store any type of file</h4>
                <p className="font-normal text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, tempore.</p>
            </div>
        </div>
    </div>
  </section>;
};

export default FetureList;
