export {}
//またbmiのarrow関数を実施していく。

// let bmi = (weight: number, height: number):number => {
//   return weight / (height * height);
// };
//まずは引数と戻り値で返す値のアノテーションを決定する。
// console.log(bmi(1.78, 86));
//arrow関数はees2015で追加された関数の表現方法。
//アノテーションの方法も他と同じ。
//引数や戻り値にアノテーションすることは同じようにできる。
//bmiにアノテーションを書いてあげると上記のようになる。
//ただし、bmiは関数を代入しているので、bmiの変数の型推論がホバーすると表示される。arrow関数が代入されているのかという確認が入る。
//bmiにアノテーションをしたいときは型推論をコピーして、貼り付けることでアノテーションできる。

let bmi: (weight: number, height: number) => number = (
  weight: number, height: number):number => {
  return weight / (height * height);
};
//bmiに対するアノテーションも容易にする事が可能。
//arrow関数で、今回のように戻り値の関数処理が1行しかない場合、その1行の処理の結果がリターンされる場合は書き方を変更する事ができる。
//return部分の{return }を省略することができる。1行であれば。
　
// let bmi: (weight: number, height: number) => number = (
//   weight: number, 
// height: number
// ):number =>  weight / (height * height);
//1lineだとこのように書いてもリターンは戻ってくると理解しておくこと
//実行して確認。npm run dev src/arrwo-function.ts
