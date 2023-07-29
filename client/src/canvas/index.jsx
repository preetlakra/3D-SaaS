import { Canvas } from '@react-three/fiber';
import { Enviroment, Center } from '@react-three/drei';

import Shirt from './Shirt';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';


const CanvasModel = () => {
  return (
    <Canvas>
      <embienLight intenstiy ={0.5}/>
      <Enviroment preset="city"/>

      <CameraRig>
        <Backdrop>
          <Center>
            <Shirt />
          </Center>
        </Backdrop>

      </CameraRig>
    </Canvas>
  )>
}

export default CanvasModel