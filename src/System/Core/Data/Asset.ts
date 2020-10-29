class Asset {
  private _name: string;
  private _binanceName: string;

  constructor() {
    this._name = '';
    this._binanceName = '';
  }

  set name(n: string) {
    this._name = n;
    this._binanceName = n;
  }


  get name(): string {
    return this._name;
  }

  get binanceName(): string {
    return this._binanceName;
  }

  public createNew(): Asset {
    return new Asset();
  }


}

export default Asset;