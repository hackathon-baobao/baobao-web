import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei';
import "src/assets/scss/common.scss"

const Tree = () => {
    const { scene } = useGLTF('./model/tree/bigTree.glb');
    return (
        <Canvas>
            <ambientLight intensity={1} />
            <primitive object={scene} position={[0, -3, 0]} scale={[0.4, 0.4, 0.4]} />
            <OrbitControls />
        </Canvas>
    );
};

export default Tree;
