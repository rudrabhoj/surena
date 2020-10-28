class Surena {
  private _name: string;
  private _age: number;

  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  get name(): string {
    return this._name;
  }

  get age(): number {
    return this._age;
  }
}

let s = new Surena('Rawal Rudrabhoj Singh Bhati', 26);

console.log(s.name, s.age);