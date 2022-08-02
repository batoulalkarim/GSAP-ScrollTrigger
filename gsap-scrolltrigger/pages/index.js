import Boxes from "../components/Boxes"
import Scroll from "../components/Scroll"
import FlipPlugin from '../components/FlipPlugin'
import MotionPath from "../components/MotionPath";
import TextPluginExample from "../components/TextPluginExample";
import RegGSAP from "../components/RegGSAP";
import React, { useEffect, useRef } from 'react';
import FlipGame from "../components/FlipGame";

export default function Home() {

  return (
    <>
    <TextPluginExample />
    <MotionPath />
    <Boxes />
    <Scroll />
    <RegGSAP />
    <FlipPlugin />
    <FlipGame />
    </>
  )
}
