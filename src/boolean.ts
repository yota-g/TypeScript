export {};

// let isFinished = true; js
// 型をつける方法 　変数の後に:をつけて型を指定する。
let isFinished: boolean = true;
isFinished = false;
// letなので上書き可能。　ファイルの変更を検知してすぐに変更される。
// 型で指定した以外のものを入れるとどうなるか。
// isFinished = 1; 
// isFinishedに波線が入って1はbooleanに対応してないよというものが注釈で表示される。　trueでもfalseでもないから。
//JSだと変数にものを代入する度に型が変わるのでエラーは出ない。　普通に許される。
console.log({isFinished});　
//フラグのような働きを持たせたくて定義しているときはtrue or false以外を持たせることは想定していない。
//想定外が入っていたら想定外の動きをしているというもの。typescriptだとエディタ の中のコーディング中に教えてくれる。
//そのときは事故が起きている jsだと事故るのを待つだけ。　jsの最大の弱点。
//コードを書いている最中に波線を出してくれて、未然に防げるのがtypescriptの良いところ。





