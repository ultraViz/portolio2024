import { Environment, OrbitControls, Sky } from "@react-three/drei";
import { Avatar } from "./Avatar";
import { Suspense } from "react";
import { Chair } from "./Chair";
import { Screen } from "./Screen";
import { PcSetup } from "./PcSetup";
import { motion } from "framer-motion-3d";

export const Experience = (props) => {
  const {section} = props;
  return (
    <>
      {/* <OrbitControls /> */}
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.6} color={"Blue"} />
      <motion.group position-y={-1}
       animate={{
        y: section === 0 ? -1.1 : -1,
      }}
      >

        <Avatar />
        <Chair />
        <PcSetup />

      </motion.group >
    </>
  );
};
