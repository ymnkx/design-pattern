import Client from "./Client";
import ConcretePrototype from "./ConcretePrototype";

export default class Main {
  private static instance: Main;

  public check(): void {
    const client = new Client();

    // const tbox = new ConcretePrototype('|');
    const mbox = new ConcretePrototype('*');
    const sbox = new ConcretePrototype('/');
    client.register('warning box', mbox);
    client.register('slash box', sbox);

    const p1 = client.create('warning box');
    p1.use('Hello, world.');
    const p2 = client.create('slash box');
    p2.changeTest('This is test.');
    p2.use('Hello, world.');

    sbox.use();
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}