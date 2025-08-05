import { ReactNode, RefObject, useRef } from "react";
import Draggable from "react-draggable";

interface PopupProps {
  name: string;
  children: ReactNode;
  onClose: () => void;
}

export type PopupT = ReactNode;

export default function Popup({ name, children, onClose }: PopupProps): PopupT {
  const nodeRef = useRef(null);
  return (
    <div className="fixed z-40 top-0 left-0 overflow-hidden w-screen h-screen pointer-events-none">
      <Draggable
        axis="both"
        handle=".handle"
        nodeRef={nodeRef as unknown as RefObject<HTMLElement>}
      >
        <div
          className="absolute w-screen left-1/2 -translate-x-1/2 -translate-y-1/2 top-1/2 md:w-3xl z-50 border-raised flex flex-col bg-greyterm pointer-events-auto"
          ref={nodeRef}
        >
          <div className="px-1 w-full handle">
            <div className=" bg-linear-to-r from-gray-500 to-gray-400 flex flex-row justify-between">
              <p className="text-greyterm px-1 place-content-center">{name}</p>
              <button className="border-raised bg-greyterm font-bold px-1 my-1">
                X
              </button>
            </div>
          </div>
          <div className="p-1 md:p-3 grow w-full">{children}</div>
        </div>
      </Draggable>
    </div>
  );
}
