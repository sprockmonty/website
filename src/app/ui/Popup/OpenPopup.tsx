"use client";

import { useState } from "react";
import Popup from "@/app/ui/Popup/Popup";
import Button from "@/app/ui/Button";

export default function OpenPopup() {
  const [pop, setPop] = useState(false);
  return (
    <>
    <Button onClick={() => setPop(true)}/>
      {pop && (
        <Popup name="Open" onClose={() => setPop(false)}>
          <p>Hello There</p>
        </Popup>
      )}
    </>
  );
}
