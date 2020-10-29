import ControlContainer from './Dep/ControlContainer';

import Kernel from './System/Core/Engine/Kernel';

let control = new ControlContainer();
let kernel = <Kernel> control.getMain();


kernel.start();