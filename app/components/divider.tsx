import React from "react";

export default function Divider(
  orientacion: string,
  width: number,
  height: number
) {
  return (
    <div
      className={`bg-black ${
        orientacion === "vertical" ? "w-[1px] h-[100px] " : "h-[1px] w-auto"
      } `}
    ></div>
  );
}
