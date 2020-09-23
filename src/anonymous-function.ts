export {}

//bmi関数の無名関数版を作成する。
// let bmi = function (height: number, weight: number): number{
//   return weight / (height * height);
// }
//無名関数を作成した。
// 引数にアノテーションをして、numberを型指定。
//returnのアノテーションもfunction と同じ。
// console.log(bmi(1.78, 86));
//bmi自体はできたが、変数にホバーすると関数の型が表示されている。
//let bmi: (height: number, weight: number) => number　これも１つの型 推論されているのは大正解。　この引数が入る関数を受け取ったんじゃないの？ということを表してくれている。
//bmi自体の型をきちんとアノテートしておきたい場合は型を、bmi (無名関数)に対してもアノテートする事ができる。　
let bmi:  (height: number, weight: number) => number  = function (height: number, weight: number): number{
  return weight / (height * height);
}
//無名関数に対するアノテーションの紹介。

