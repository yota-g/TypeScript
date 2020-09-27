export {}
//２つのクラスを使う。

class Mahotsukai {}

class Souryo {}

//継承。ts では１つのクラスしか継承できない。単一継承。ここでTaroはSouryoも継承したいとコードを書くとエラーが出る。単一ですよという。
class Taro extends Mahotsukai {}
//class Taro extends Mahotsukai, Souryo{}
//tsでは言語仕様として、多重継承は許されていないが、複数箇所に分散している機能を集めて、１つに統合したい時にどうするか。
//tsで複数のクラスを継承することは許可されていないが、複数のinterfaceを継承することは許可されている。
//interfaceは今までオブジェクトの型として定義するものだったが、他の機能がある。
//interfaceとは全てのメソッドが抽象メソッドのようなクラスのようなもの。 interfaceは複数同時に継承できる。多重継承のようなものができる。
//なぜようななのか。interfaceで定義された機能を持ってくることを正確には実装するというから。事実上継承と言ってもいいが。

//複数のinterfaceを実装できることを確認していく。

interface Kenja {
  ionazun(): void ;
}

interface Senshi {
  kougeki(): void;
}
// 処理の実態がわからないような宣言。これをシグネチャーという。
//この時点で、Jiroクラスでエラーが出ている。　interface側でシグネチャーを宣言しているものに対して、Jiroに実装がないので実装しないといけないよというもの。
//これで実装忘れがなくなり、実装エラーがなくなる。Jiroクラスに実装をしてあげる。

//Kenja とSenshiというinterfaceを２つ実装している
class Jiro implements  Kenja, Senshi {
  ionazun() : void {
    console.log('ionazun');
  }
  kougeki(): void{
    console.log('kougeki')
  }
  //実装してあげる事でコンパイルエラーがなくなる。
}
//実装する場合、implementsする場合複数のinterfaceを指定してもエラーにならない。
//interfaceによる多重継承になる。

const jiro = new Jiro(); //インスタンス化する。
jiro.ionazun();
jiro.kougeki();
//複数箇所に散らばったinterfaceを利用する事で集めて、複数の機能を実装する事ができる。



