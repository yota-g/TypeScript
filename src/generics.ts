export {}

// const echo = (arg: number): number => {
//   return arg;
// };

//文字列を受け取る場合のechoも作成
// const echo = (arg: string):string => {
//   return arg;
// }
//型が違うだけで同じ処理をしている関数を共通化できないか。
//新たな関数を作るコストを減らすのがgenericsという。
//genericsを使用して、2つの関数を1つの記法にリファクタリングしていく。
//書いた関数をコメントアウト
//genericsの記法を作成する。型指定を抽象(今回はT)にしていく。
//引数の手前に<T>を書く generics関数を定義した。
const echo = <T> (arg: T): T => {
    return arg;
  };
  //注目するのは<T>の記法　genericsの宣言でTが抽象的な型を宣言している。慣習でよくTが用いられている。
  //Tを型引数という。argとreturnの型を現状意味している。
  //Tはnumberにもstringにもなる。
  //現時点ではなんの型かがわからない状態。
  //これがgenerics型を用いた関数の定義になる。
  //関数を使用していく。
  //変数名<型を指定>(引数を入れる)で実行できる。　　
  console.log(echo<number>(100));
  //numberを受け取って具体的に動作する関数に返信して、引数を受け取って動作しリターンされて出力されるように。なって処理が実行された。

  //文字列の場合。
  console.log(echo<string>('Hello'));
  //Helloと表示される。
  console.log(echo<boolean>(true));
  //genericsで抽象的な型を作れば、型をしてするだけでいくらでも関数を作成する事ができるので関数を作るコストがへる。


  // classの方のgenericsを使用する。
  //普通のクラスを作成する。

  // class Mirror {
  //   constructor(public value: number){}
  //   echo(): number {
  //     return this.value;
  //   }
  // }


  // console.log(new Mirror(123).echo());
  //123と表示される。
  //これを汎用的な関数にする。
  //どんな型でも初期化をしたvalueをechoメソッドで返せるようにできる。

  //class名の後に<T>を挿入。引数とretrunの型もTにしてあげる。generics型を指定してあげる。

  class Mirror<T> {
    constructor(public value: T){}
    echo(): T {
      return this.value;
    }
  }

  console.log(new Mirror<number>(123).echo());
//123と表示される。
console.log(new Mirror<string>('Hello').echo());
console.log(new Mirror<boolean>(true).echo());
//console.log(new Mirror<boolean>(true);　だと{value: true}と表示される。
//genericsで実装コストを下げる事ができる。　

