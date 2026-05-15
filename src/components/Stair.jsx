import React from "react";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
function Stair() {
  return (
    <div className="h-full w-1/6 flex ml-auto">
  <div className="stair flex-1 bg-white/5 backdrop-blur-[2px] border-l border-white/10"></div>
  <div className="stair flex-1 bg-white/5 backdrop-blur-[2px] border-l border-white/10"></div>
  <div className="stair flex-1 bg-white/5 backdrop-blur-[2px] border-l border-white/10"></div>
  <div className="stair flex-1 bg-white/5 backdrop-blur-[2px] border-l border-white/10"></div>
</div>
  );
}

export default Stair;