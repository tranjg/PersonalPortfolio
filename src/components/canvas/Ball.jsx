import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  Text,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      
      <mesh castShadow receiveShadow scale={2.75}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
        <Text 
          position={[0, 0, -1.05]}
          rotation={[2 * Math.PI, 3, 6.25]}
          fontSize={.2}
          font="\Lato-Regular.ttf"
        >
            {props.name}
        </Text>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon, name }) => {
  return (
    <Canvas
      frameloop='always'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false} 
        />
        <Ball 
          imgUrl={icon} 
          name={name}
        />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;