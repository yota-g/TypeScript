export {};

//jsのオブジェクトを作成する。 
// let object: {
//   name: string;
//   age: number;
// } = { 
//   name: 'Ham-san',
//   age: 43
// };
//アノテーションを加える inlineで加える。
type ObjectType = {
  name: string;
  age: number;
} ;
//aliasesを作成する　type aliasesを使用して作成。　別名をつけていたので=を使用していた。

let object: ObjectType= { 
  name: 'Ham-san',
  age: 43
};

//見た目がすっきりする。ここまでは習ったこと。これと同じことができるもう一つのもの。
//interfaceは型エイリアスではないので＝はいらない。interfaceは型エイリアスではないので、interface単独で、object型の名前をつけれる構文。
//interfaceもしっかりとアノテーションを行うことができる。 interfaceで指定した型を使用して書き換えをすることができる。
interface ObjectInterface {
  name: string;
  age: number;
};


let object2: ObjectInterface= { 
  name: 'Ham-san',
  age: 43
};
//interfaceでもアノテーションして制約をつけることができるので、
//指定以外のものを入力するとコンパイルエラーが出るようになる。
//interfaceで指定されているものを表示してくれて事故にはならないようになっている。
//適宜必要な場合に使用する。　classを作る時にも使用する objectにinterfaceの型を使用することができる。
