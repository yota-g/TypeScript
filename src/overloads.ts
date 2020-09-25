export {}

//文字列をもらったらhelloを2つ記入した文字列を返し、数値をもらうと2倍にして返すという関数を作成する。

// function double (value: number):number {
//   return value * 2;
// }

// //200表示される。
// // 次は文字列の文を作成する。
// 　
// function double(value: string): string {
//   return value + value;
// };

// console.log(double(100));
// console.log(double('go'));
//gogoと表示される。
//個々の関数の実装までは終わったのでoverloadsをやっていく
//コメントアウトを外してdouble の関数を２つ定義している状態にしている。
//Duplicate function implementationというエラーが発生している。
//同じ関数名で関数を重複して定義するとこうなる。
//このエラーは定義が重複しているから。そこで必要なのがoverload
//signatureという宣言が必要。関数の処理の実態は書かずに関数の名前、引数、戻り値の型を書いたもの。関数の概略みたいなもの。
//isignatureで型制約をする事ができるので便利。上のdoubleと下のdouble関数は違うもの。
//引数の型と戻り値の型が違う。 上はnumber,s下はstring　それぞれのためのsignatureを書かないいけない。

function double (value: number): number;
function double (value: string): string;
//引数と戻り値の型だけを指定している。これがsignature。関数の実態の前に書く事。
//これからこういった関数の構造を書くよという宣言みたいなものがsignature。
//sigunatureが２種類あっても実態は1つしか関数は書けない。実態でnumberとstringのデータが来たときの処理を書く。
//関数の引数と戻り値をany型にする。unionで指定する訳ではない。
//overloadでは関数の実態の方では型制約を行わない。全ての型を受け取れるようにany型で受け取る。実態に型の制約を行う必要がない。
//型の制約を行うのはシグネチャーの役割だから。現時点でシグネチャーを用意している。numberとstringのデータを受け取るようになっててそれ以外を受け取らない。
//型制約はちゃんとされている。
// function double (value: any): any {
//   if (typeof value === 'number'){
//     return value * 2;
//   }else if (typeof value === 'string'){ 
//     return value + value;
//   } else {
//     throw 'numberでもstringでもないので、引数の型を確認してください。';
//   }
// }
//valueにそれぞれstirngとnumberがくるときの処理を渡さないといけない。
//実装の仕方は分岐を使用する。型の見極め方はtypeofを使用。if文で分岐を行う。elseでそれ以外だった場合を記入する。
//doubleにnumberでもstringでもないものが代入されるとどうなるか。　実行される前にコンパイルエラーが出る。else節にこない。signatureで宣言されたもの以外こない。
//型制約がきっちりとsingnatureで担保されていてelseが必要なくなり、else ifを2つなのでelseにできる。
//signature的にはstirngかnumberしかdoubleにはこないから。

function double (value: any): any {
  if (typeof value === 'number'){
    return value * 2;
  }else { 
    return value + value;
  }
}
//例外に関する分岐は必要なくなった。

console.log(double(100));
console.log(double('go'));
// console.log(double(true));
//booleanに対してエラーが出る　シグネチャーが門番をしている。ないとエラーは出ない。ifとelseの文にしていると。
//不正なデータの混入を防ぐ事ができる。



