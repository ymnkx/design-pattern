import Context from "./Context";
import ProgramNode from "./ProgramNode";

export default class Main {
  private static instance: Main;

  public check(): void {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.open('GET', './data/program.txt', true);
    xmlHttp.send(null);
    xmlHttp.onload = () => {
      const lines = xmlHttp.responseText.split('\n');
      for (let i=0; i<lines.length; i++) {
        console.log('text=' + lines[i]);
        const program = new ProgramNode();
        program.parse(new Context(lines[i]));
      }
    }
  }

  public static getInstance(): Main {
    this.instance = new Main();
    return this.instance;
  }
}