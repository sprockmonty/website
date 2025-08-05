"use client";

import { useState } from "react";
import Popup from "@/app/ui/Popup/Popup";
import { buttonTags } from "@/app/ui/Dropdown";

export default function OpenPopup() {
  const [pop, setPop] = useState(false);
  return (
    <>
      <button className={buttonTags} onClick={() => setPop(true)}>
        Open...
      </button>
      {pop && (
        <Popup name="Open" onClose={() => setPop(false)}>
          <p>Wagwan</p>
        </Popup>
      )}
    </>
  );
}
