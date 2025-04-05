import React from "react";

export default function Divider(
  orientacion: string,
  width: number,
  height: number
) {
  return (
    <div
      className={`bg-black ${
        orientacion === "vertical" ? "h-[1px]" : "h-[1px]"
      } `}
    ></div>
  );
}
