import SmartDepend from '../Dep/SmartDepend';

import Asset from '../System/Core/Data/Asset';
import Kernel from '../System/Core/Engine/Kernel';




class ControlContainer {
  private _smartDepend: SmartDepend;

  protected _Asset: any;
protected _Kernel: any;


  constructor() {
    this._smartDepend = new SmartDepend();

    this._addModules();
    this._addDepends();
  }

  public getMain(): Kernel {
    let spEntity = <Kernel>this._smartDepend.resolve(this._Kernel);

    return spEntity;
  }

  private _addModules() {
    this._Asset = this._smartDepend.addModule(Asset, false);
this._Kernel = this._smartDepend.addModule(Kernel, false);

  }

  private _addDepends() {
    this._smartDepend.addDependency(this._Kernel, this._Asset);



  }

}

export default ControlContainer;