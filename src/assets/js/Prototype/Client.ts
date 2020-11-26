import Prototype from './Prototype';

export default class Client {
  private showcase: { [key: string]: Prototype } = {};

  public register(name: string, proto: Prototype) {
    this.showcase[name] = proto;
  }

  public create(name: string): Prototype {
    const p = this.showcase[name];
    return p.createClose();
  }
}
