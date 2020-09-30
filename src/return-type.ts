export {};

//return typeは関数の戻り値の型を返してくれるUtility型
//関数を作成し、動くのか確認する。
function add(a: number, b: number ){
  return a + b ;
};

console.log(add(1,2));
//実行してみる。npx ts-node-dev --respawn src/return-type.ts
//3が帰ってくる。
//このような関数があったときにこの関数の戻り値の型をなんとかして取得したいときにreturntypeを使用できる。

type ReturnTypeFromAdd = ReturnType<typeof add>;
// 関数の型を渡す必要がある。 typeofで型を取得してReturnTypeの型引数に渡す。
//ReturnTypeFromAddの型が今回はnumberにと推論される。
//動的に戻り値の型をを持ってくる事ができ、　Utilityとして多くの人から使用されるであろう型を使用するReturnTypeを実施できる。






