import React, { Suspense, useRef } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei';
import styled from 'styled-components';
import "src/assets/scss/common.scss"
import Point from "@src/components/Tree/Point";

const StyledCanvas = styled(Canvas)`
  width: 50vw;
  height: 50vh;
`;

const Tree = () => {
    const { scene } = useGLTF('./model/tree/bigTree.glb');

    return (
        <StyledCanvas>
            <ambientLight intensity={1} />
            <primitive object={scene} position={[0, -3, 0]} scale={[0.4, 0.4, 0.4]} />
            <OrbitControls />
        </StyledCanvas>
    );
};

export default Tree;
