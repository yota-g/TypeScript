export {};


// まずは関数を書く。
// function returnNothing(): undefined {
//   console.log("I don't return anything");　
//   return undefined;//これを書くことでエラーが消える。
// };

// console.log(returnNothing());

//このvoid.tsを実行するとどうなるか。通常のjsの状態で実行した場合
//I don't return anythingが表示される
//undefinedが下に表示される。
//何も関数がリターンしない場合でもundefinedが返ってくる。
//関数の戻り値に対する型を指定できる。undefined
//関数の変数の後に:　返されるデータの型を記入すること。
//今回は: undefinedを入力する。
//エラーが出る。というのは、ある関数があってその関数が返すデータの型がvoidやanyでもないとき何かしらのデータをreturnで返さないといけないということ。
//:undefinedはundefinedなデータを返すと言っている。がundefinedという型はvoidでもanyでもないので、明示的にundefinedをreturnするコードを書かないといけなくなる。
//関数の中にreturn;を書くか、return undefined;のいずれかを書くことで先ほど出ていたエラーが表示されなくなる。
// これで解決ではなくて、return文を書いて、return値を受け取って何かをするというような堅実な処理ではなく、
//returnNothingがreturnで何かを返すようなものではない。 returnをいちいち書き直すようなことをしたくない。
//さらっと関数の中の処理をしてそれが済んだら終わりにするのが本来の目的。returnを書くのは本来の目的から離れている。
//どうするのか。
//undefined型が適切でないのでvoidかanyに書き換えるのが適切。
//関数からのリターン値を期待することがないような型をvoid型という。
//一般的に関数にはreturnを入れることができてreturnされるデータの型を指定することができるが、関数には必ずreturnがあるわけではないので今回のvoid型を指定することができる。


function returnNothing(): void {
  console.log("I don't return anything");　
};

console.log(returnNothing());
