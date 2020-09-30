export {};

const debugProfile = (name: string, age: number) => {
  console.log({name,age});
};

debugProfile('Ham',43);
//npx ts-node-dev --repawn src/parameter.ts で実行して、動作確認を実施。　

type Profile = Parameters<typeof debugProfile>;
//引数typeof debubProfileの型を得る事ができる。
//Profileをチェックするとtype Profile = [string, number];とタプル型の変数が返ってきている。　タプル ～ [ 型1, 型2, ... ] などと書く。例: [string, int]
// 最初の要素にはstring次にはnumber
//Profileを使用してデータを作っていく
const profile: Profile = ['Gloria', 76];
//Profile という型制約がついているのでbooleanに変えたりしたらエラーが出る。　順番に型を指定しているから。　
//Profileを使用して関数の引数として使用することもできる。展開しないといけないので....を入力。...は可変長引数
//他人が作成した関数の型やライブラリーからインポートした型など容易に変更できない型からその引数のみの型を取り出したい時にParametersを使うといい。　
debugProfile(...profile);

//Parameters の定義を見ていく。
type MyParameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
  ) => any 
  ? P 
  : never;
//この内容はconditional typesが使用されている。？が目に入ればそう解釈すること。　
//関数の型を受け取ってそのまま関数の型がある。inferは型推論するところ。
//infer P は実質anyなのでT extends ( ...args: infer P  ) => anyは真になる。
//infer Pは引数の型。　Pには引数の型。　trueの場合が返ってくるのでPが返ってくる。引数の型をMyParameterは返してくるという事がわかる。



