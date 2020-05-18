import { BT } from './BookType'
import Output from './Output';

const books: BT[] = [
  {
    title: "幼年期の終り",
    author: "アーサー・C・クラーク"
  },
  {
    title: "タイタンの妖女",
    author: "カート・ヴォネガット・ジュニア"
  },
  {
    title: "夏への扉",
    author: "ロバート・A・ハインライン"
  },
];

Output('------------Template Method------------');

import TemplateMethod from './TemplateMethod/Main'
const tm = TemplateMethod.getInstance(books);
tm.check();

Output('------------Factory Method------------');

import FactoryMethod from './FactoryMethod/Main'
const fm = FactoryMethod.getInstance(books);
fm.check();

Output('------------Iterator------------');

import Iterator from './Iterator/Main'
const it = Iterator.getInstance(books);
it.check();

Output('------------Observer------------');

import Observer from './Observer/Main';
const obs = Observer.getInstance(books);
obs.check();



