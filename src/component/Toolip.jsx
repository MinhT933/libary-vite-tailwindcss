import React from "react";

export default function Toolip(props) {
  let { children } = props;
  // group-hover:flex hidden ẩn để khi nào hover sẽ hiện lên
  return (
    <div className="absolute inset-y-0 left-12 group-hover:flex hidden items-center">
      <div className="whitespace-nowrap relative px-4 py-2 bg-white rounded-md font-semibold drop-shadow-lg text-sm">
        <div className="absolute inset-y-0 flex items-center -left-1">
          <div className="h-2 w-2 rotate-45 bg-slate-50" />
        </div>
        {children}
      </div>
    </div>
  );
}
