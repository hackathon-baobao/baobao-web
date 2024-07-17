import React, {Suspense, useRef} from "react";
import {Canvas, useLoader} from "@react-three/fiber";
import {OrbitControls, useGLTF} from '@react-three/drei'

const Tree = () => {
    const {scene} = useGLTF('./model/tree/bigTree.glb');
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <primitive object={scene}></primitive>
            <OrbitControls/>
        </Canvas>
    );
};

export default Tree;
