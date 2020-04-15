import React from 'react';
import styled from 'styled-components';
import Waves from '../../assets/waves.svg';
import Lines from '../../assets/lines.svg';
import Logo from '../../assets/logo.svg';


const WavesPattern = styled.img.attrs(props => ({src: Waves}))`
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 0;
`;

const LinesPattern = styled.img.attrs(props => ({src: Lines}))`
    position: fixed;
    top: 150px;
    right: 40px;
    z-index: 0;
`;

const ListiumLogo = styled.img.attrs(props => ({src: Logo}))`
    height: 32px;
`;

export {
    WavesPattern,
    LinesPattern,
    ListiumLogo
}