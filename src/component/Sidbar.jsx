import React from "react";
import { Icon } from "@iconify/react";
import Toolip from "./toolip";

export default function Sidbar() {
  //gọi group để hover
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <div className="h-screen w-18 border-r border-gray-200 bg-white ">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <Icon icon="emojione:letter-m" width="40" height="40" />
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10 items-center justify-center">
          <a
            className="  rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon className="h-6 w-6" icon="material-symbols:add-box-outline" />
            <Toolip> Thêm phần tử</Toolip>
          </a>
          <a
            className="rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon className="h-6 w-6" icon="tabler:layout" />
            <Toolip> Thêm phần tử</Toolip>
          </a>
          <a
            className="rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon className="h-6 w-6 " icon="vaadin:palete" />
            <Toolip> Thêm phần tử</Toolip>
          </a>

          <a
            className="rounded-xl group bg-gray-100 p-2 text-blue-400 hover:bg-gray-50 relative"
            href="#"
          >
            <Icon
              className="h-6 w-6 stroke-current"
              icon="mdi:file-document-box-outline"
            />
            <Toolip> Thêm phần tử</Toolip>
          </a>
        </nav>
      </div>
    </div>
  );
}
