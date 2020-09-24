export {}

//restパラメーターのおさらいとtsでの書き方を学習
// const sum = (...values) => {
//     console.log(values);　//valuesに中身を出力する。
// };

// sum(1, 2, 3, 4, 5);
//引数に数値の並びを渡してあげる。適当に数値を与えた時全ての総和を求めるsumを定義した。
//引数の数が何個かわからない時。何個でもいいよという関数。全ての引数を受け取れる。それがrest paramerterである。
//引数を(...変数名)で設定することでrest paramerterにせって可能。
//このままだとコンパイルエラーになるのでブラウザで実行。　
//(5)[1,2,3,4,5]  と配列が表示される。これがjsのrestパラメーター
//undefinedと表示される。
//tsとしてどのようなアノテーションをしてあげるべきなのか。
//出力されたデータ各要素が数字なのでそれを表し、配列なのでnumuberの後ろに[]をつけると完成。

// const sum = (...values: number[]): number=> {
//   console.log(values);　
//   return 100;
// };
//アノテーションはこれで終わり。returnで戻り値を今回は100にしておく。そうするとsumはリターンで数値を変えるのでアノテーションを書ける。():numberとして書く事ができる。
//sum関数にカーソルを当てると関数の推論がわかるので、コピーして、貼り付ける。

const sum: (...values: number[]) => number = (
  ...values: number[]): number=> {
  console.log(values);　
  return 100;
};
//アノテーションできるところには全てアノテートが完了。

//現時点では適当に100を返しているのでリアルな総和を返していくようにする。reduce関数を使用していく。
//mdn　reduceで検索 Array.prototype.reduce()というのがあるので、サンプルコードがあるので参考にする。
const reducer = (accumulator: number, currentValue: number) => {
  console.log({accumulator, currentValue});
  return accumulator + currentValue;
};

// const sum1: (...values: number[]) => number = (
//   ...values: number[]): number=> {
//   console.log(values);　
//   return 100;
// };
// mdnと同じ配列を書いて、その配列にメソッドを使用する。reduce　reduceにロジックを渡す。今回はreducerという足し算をする関数を渡す。
// [1, 2, 3, 4].reduce(reducer)
//実行すると
//{accumlator: 1, currentValue: 2}
//{accumlator: 3, currentValue: 3}
//{accumlator: 6, currentValue: 4}という結果を得る事ができた。
//引数に対して、どうゆう値が渡っているのかを愚直に表現している。
//配列から1と2が最初に渡ってくる。
//何をしているかというと acuumulatorとcurrentValueは足し算されてreturnされている。
//それが新たなaccumulatorとして渡ってくるので次のaccumulatorが３になる。cuurrentValueは何になるかというと1,2は評価済なので3になる。という風になる。
///currentValueが4までいくともう配列の要素がないので、役目が終わる。

const sum1: (...values: number[]) => number = (
  ...values: number[]): number=> {
  return values.reduce(reducer);
};
//valuesは配列なのでreduceを書く事ができる。またreduceには関数を渡す事ができるのでreducerを渡す。

console.log(sum1(1,2,3,4,5));
// 総和が計算されて表示されるようになった。
