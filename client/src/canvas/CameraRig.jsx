import React from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import { useSnapshot } from "valtio";

import state from '../store';

const CameraRig = ({children}) => {
  const group = useRef();

  return (
    <group ref={group}>{chldren} </group>
  )
}

export default CameraRig