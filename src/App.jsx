import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { Scroll, ScrollControls } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { Menu } from "./components/Menu";
import { useEffect, useState } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";

function App() {
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  useEffect(() => {
    setMenuOpened(false);
  }, [section]);

  return (
    <>
    <MotionConfig transition={{
          ...framerMotionConfig,
        }}>
    <Canvas shadows camera={{ position: [0, 0.3, 1.5], fov: 30 }}>
      <color attach="background" args={["white"]} />
      <ScrollControls pages={4} damping={0.1}>
        <ScrollManager section={section} onSectionChange={setSection}/>
        <Experience section={section} />
        <Scroll html>         
          <Interface />
        </Scroll>
      </ScrollControls>
    </Canvas>
     <Menu onSectionChange={setSection}
               menuOpened={menuOpened}
               setMenuOpened={setMenuOpened}/>
               </MotionConfig>
     </>
  );
}

export default App;
