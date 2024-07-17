import React from "react";
import Tree from "src/components/Tree/Tree";
import Point from "src/components/Tree/Point/index";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;

const AbsoluteTree = styled(Tree)`
    position: absolute;
    top: 20px; 
    left: 50%; 
    transform: translateX(-50%); 
    width: 50%; 
    height: auto; 
    max-width: 80%; 
    max-height: 80%; 
    z-index: 0; 
`;

const AbsolutePoint = styled(Point)`
    position: absolute;
    top: 0;
    left: 20px; 
    z-index: 1; 
`;

const TreeMain = () => {
    return (
        <Container>
            <AbsolutePoint />
            <AbsoluteTree />
        </Container>
    )
}

export default TreeMain;
