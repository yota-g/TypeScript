export {}

abstract class Animal {
  //cryメソッドを抽象メソッドにしてあげる。
  abstract cry(): string;
  //これで抽象メソッドの完成。 だが、抽象メソッドは抽象メソッドの中で定義されないといけないのでクラスも抽象にしてあげる。
  // これでコンパイルエラーが出る。
}
//必ずオーバーライドしないといけないので継承をする。
class Lion extends Animal {
  cry() {
    return 'roar';
  }
}

// class Tiger extends Animal {
// }
//継承している抽象メンバーであるcryを実装していないとエラーば発生する。
//抽象クラスで定義されている抽象メソッドを実装し忘れることはありえる話
//抽象クラスを継承してクラスを作って実装するとなった時に、抽象メソッドでどんなメソッドを定義してのか覚えていないけど、コンパイラーがいちいち教えてくれて非常に便利
//抽象クラスで複数（数百）の抽象メソッドをの数多くが共通して実装しない時に、抽象メソッドにしておくと便利。どんなに多くの抽象メソッドがあっても実装し忘れがなくなる。自動的に実装もれを教えてくれる。実際に実装もれがなくなることを確認できる。大規模アプリ開発には使用できる。　
//abstractをクラスの前につけても通常のメソッド定義などはできる。

class Tiger extends Animal {
  cry() { return 'grrrr'}
}
//こうする事でエラーがなくなる。　