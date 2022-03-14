// Object
const person: {
  name: string;
  age: number;
} = {
  name: 'Jack',
  age: 21
};

// Array
const fruits: string[] = ['Apple', 'Banana', 'Grape'];

// Tupple(最初の配列長、各要素の型を厳しく指定できる型。pushはできるが使用できないので、静的配列に近い。) → 型推論してしてくれない
const book: [string, number, boolean] = ['business', 1500, false];
// 後からpushできてしまう
book.push(21);
// 使用できない
console.log(book[3]);

// Enum
// valueの文字列は消すこともできる
// その場合、配列のindexのように0から採番される(Railsのenumと同じ)
enum CoffeeSize {
  SHORT = 'SHORT',
  TALL = 'TALL',
  GRANDE = 'GRANDE',
  VENTI = 'VENTI'
}
// size がCoffeeSize型になる
// size はCoffeeSizeの値しか取ることができなくなる
const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}
 
// Any
let anything: any = true;
anything = 'string';
let typed = 1;
// 型が決まっている変数に対してAny型の変数を代入できる
typed = anything;

// Union
let unionType: number | string = 10;
let unionTypes: (number | string)[] = ['element', 10];

// Literal
// 明示した値しか入れられない型
// 定数に使えるかも？
const apple: 'apple' = 'apple';
// const で型推論すると、Literal型になる
const orange = 'orange';

// type
type ClothSize = 'small' | 'medium' | 'large';
let cloth: {
  color: string;
  size: ClothSize;
} = {
  color: 'red',
  size: 'small'
};

// 関数に型をつける
// パラメータと戻り値につける
function add(num1: number, num2: number): number {
  return num1 + num2;
}
// 戻り値には型推論が効く
// 引数には型推論が効かない(any型になる)
// 極力両方に型注釈すべき

// 関数を保持する変数に型をつける
// 型注釈で関数の型をつける時は、=> を使う
const anotherAdd: (num1: number, num2: number) => number = add;