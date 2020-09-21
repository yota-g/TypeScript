export {};

//let absence = null ;
//この変数はnullを持つことができる。
//nullを代入しても型推論ではnull型を型推論してくれない。any型と推論される。
let absence: null = null;
//nullのみが許容されるような変数にしたい場合に指定。null型であるというアノテーションを書くことができる。
// 型として局所型にできる
// absence = 'hello';
//null型にhelloは入力できませんよと表示される。

//undefined型 undefinedという型のみを使用できるもの。
// let data = undefined;
//nullと同じ様にundefined型であるとは推論してくれない。
//従って、データという変数をundefined以外は持たせないという時は明示的にアノテーションする必要がある。
let data: undefined = undefined;

// data = 123;
//undefined以外が入力できませんよというエラーが出る様になった。
//primitive型の要素としてnullとundefinedがあることを学習。
//実践は後ほど詳しく学習する。　基本は終了。


