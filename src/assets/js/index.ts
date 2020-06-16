import { BT } from './BookType';
import Output from './Output';

const books: BT[] = [
  {
    title: '幼年期の終り',
    author: 'アーサー・C・クラーク',
  },
  {
    title: 'タイタンの妖女',
    author: 'カート・ヴォネガット・ジュニア',
  },
  {
    title: '夏への扉',
    author: 'ロバート・A・ハインライン',
  },
];

window.addEventListener('load', () => {
  const codeArea = document.getElementById('code');
  if (codeArea) {
    codeArea.innerHTML = JSON.stringify(books, null, 2);
  }
});

Output('------------Template Method------------');

import TemplateMethod from './TemplateMethod/Main';
const tmp = TemplateMethod.getInstance();
tmp.setData(books);
tmp.check();

Output('------------Factory Method------------');

import FactoryMethod from './FactoryMethod/Main';
const fm = FactoryMethod.getInstance();
fm.setData(books);
fm.check();

Output('------------Iterator------------');

import Iterator from './Iterator/Main';
const it = Iterator.getInstance();
it.setData(books);
it.check();

Output('------------Observer------------');

import Observer from './Observer/Main';
const obs = Observer.getInstance();
obs.setData(books);
obs.check();

Output('------------State------------');

import State from './State/Main';
const stt = State.getInstance();
stt.check();

Output('------------Decorator------------');

import Decorator from './Decorator/Main';
const deco = Decorator.getInstance();
deco.setData(books);
deco.check();

Output('------------Builder------------');
import Builder from './Builder/Main';
const bld = Builder.getInstance();
bld.setData(books);
bld.check();
