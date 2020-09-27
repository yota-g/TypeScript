export {}

let fooCompatible: any;
let barCompatible: string = 'TypeScript';

console.log(typeof fooCompatible); //undefind
fooCompatible = barCompatible;
//エラーが発生しない。代入する事ができた。代入できるかどうかを決めるのが両者の型の互換性がコンパイラに判断されている。
//今回のように代入できる時、互換性があるという。
//typeof　でそれぞれの変数の型を表示させる。

console.log(typeof fooCompatible); //string
//stringのデータを代入した事で、型がstring型に遷移している。
//any型はデータを代入されるとその型になってしまう。

//互換性がない場合の挙動を確認する。
let fooIncompatible: string;
let barIncompatible: number = 1;
// fooIncompatible = barIncompatible;
//string型にnumber型は代入できないというエラーが出る。型の互換性がない事がわかる。この時点でエラーが出る。
//型の互換性については意識していないといけない。

let fooString: string;
let barString: string = 'string';
fooString = barString;
// 同じ型のデータの代入なので問題ない。互換性がある。

//literal型で文字列風にするt互換性があるのか。
let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'

fooString = fooStringLiteral;
//エラーが出ないので互換性がある。
//文字列literal型は文字列の一部なので互換性がある。
console.log(fooString);

//number型を見ていく。
let fooNumber: number;
let fooNumberLiteral: 1976 = 1976;

fooNumber = fooNumberLiteral;
//numberLiteralとnumberは互換性がある。numberは数値全体を含むのでnumberLiteralを含む。

//より複雑な例を見ていく。
// interface Animal {
//   age: number;
// }

// class Person {//Animalからは独立している。
//   constructor(public age: number){

//   }
// }

// let me: Animal;//Animal型のmeを作成。AnimalというInterfaceを使用してアノテーションをしているだけで、初期化はしていない。
// 初期化をしていく。

// me = new Person(43);
//Personクラスを使用して、インスタンスを作成して、そのインスタンスをmeに代入したがエラーは出ない。/
//PersonクラスとAnimal クラスは依存関係ない。
//オブジェクトを代入できるかどうかは、そのオブジェクトの型は関係がない。
//intrefaceに存在するageをコメントアウトしてもエラーが発生しない。
//型の互換性があるという事。
// interface Animal {
// }

// class Person {
//   constructor(public age: number){
//   }
// }
//代入されるメンバーになくて、代入する側にメンバーが多くあってもエラーが出ない。
//けど、代入されるメンバーにあって、代入するメンバーにないのはエラーが出る。


//nameを追加する。
// let me: Animal;
// me = new Person(43);

// interface Animal {
//   age: number;
//   name: string;
// }

// class Person {
//   constructor(public age: number){
//   }
// }

// let me: Animal;
// me = new Person(43);

//Animalにname: stringを追加するとmeでエラーが発生する。
//nameがPersonクラスにないですと言われている。
//required in type ’Animal’ Person型にnameはない。
//Animal型で必要ですと言っている。代入される側の型にあるメンバーは代入する側メンバーにも存在していないといけない。
//エラーを取り除く方法は、interfaceのメンバーであるnameを削除するまたは、Personメンバーにnameを追加する方法。
//Animalのメンバーにはnameが存在するのが要件ならPersonクラスにnameを追加するしかなくなる。

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number,public name: string){
  }
}

let me: Animal;
me = new Person(43,'Lion');
//これでエラーが解消される。
//オブジェクト間での代入の場合も型の互換性の有無が必ず評価される。　
// 各々の型が一致するかどうかは気にしない。代入されるオブジェクトの内部で持つメンバーが代入するオブジェクトの方に存在するか。そのメンバーの型にあるかどうかを評価する。
//クラスの継承、interfaceを実装しているかは気にしない。
//これを構造的部分型という。

