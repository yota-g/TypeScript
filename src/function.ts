export {}

// function bmi (height , weight) {
//   return weight  / (height * height);
// }
//bmiを算出する関数を定義する。
//これを使用する。 mを身長は渡す必要がある。
console.log(bmi (1.78, 88));
//身長・体重を渡せばreturnで返ってくる
//これはjsで書いている。tsではない。
//この関数に対して、引数と戻り値にアノテーションをしてあげるといい
function bmi (height: number , weight: number): number {
  return weight  / (height * height);
}
//引数は引数の後ろにそのまま型注釈をいれる。今回はnumber型
//returnに戻されるものの型注釈をどうするのか。
//functionで受け取る引数の)の後ろに書く。
//returnもnumberにする。
//こうする事で引数と戻り値に型で指定した以外のものが入ってくるとエラーとして戻されるようになる。型指定したもの以外のものが戻されるのを防げる。
//npm run dev src/functio.tsで実行する。
//動作確認をした。



