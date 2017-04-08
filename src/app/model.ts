/**
 * Created by jenksy on 4/8/17.
 */
export class Customer {
  private _id: number;
  private _name : string;
  private _image : any;
  private _address: Address;


  constructor(id: number, name: string, image: any, address: Address) {
    this._id = id;
    this._name = name;
    this._image = image;
    this._address = address;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get image(): any {
    return this._image;
  }

  set image(value: any) {
    this._image = value;
  }

  get address(): Address {
    return this._address;
  }

  set address(value: Address) {
    this._address = value;
  }
}

export class Address{
  private _street :string;
  private _city : string;
  private _region : string;
  private _state: string;


  constructor(street: string, city: string, region: string, state: string) {
    this._street = street;
    this._city = city;
    this._region = region;
    this._state = state;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get region(): string {
    return this._region;
  }

  set region(value: string) {
    this._region = value;
  }

  get state(): string {
    return this._state;
  }

  set state(value: string) {
    this._state = value;
  }
}
