import Asset from '../Data/Asset';

class Kernel {
  private _asset: Asset;

  constructor(asset: Asset) {
    this._asset = asset;
  }

  public start() {
    let btc = this._asset.createNew();
    btc.name = "BTC";

    console.log("Asset Name: ", btc.name);
  }
}

export default Kernel;