export {}

class Me {
  isProgrammer: boolean = true;
  firstName: string = 'Atsushi';
  lastName: string = 'Ishida';
}
//コンストラクターによってこれらのメンバは動的な設定をしないもの。だが、newによってインスタンスをつくって出ないとアクセスはできない。

let me = new Me ();
console.log(me.isProgrammer);
//npmで実行する trueが表示。

//静的メンバーに変える。頭にstaticを入れる事で静的メンバになる。
class Me2 {
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';
  static isProgrammer: boolean = true;

  static work(){
    //return "Hey, guys! Are you interested in TypeScript? Let's dive into TypeScript!";
    return `Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!`;
  }
}
// console.log(me.isProgrammer);
//isProgrammerが静的になったので動的アクセスができなくなった。
//静的メンバーへのアクセスは、
console.log(Me2.isProgrammer); 
//クラス名.変数名で呼び出す事ができるように。
//Me2というクラスに３つのstaticな変数を持たせている。動的メンバを使っても管理できるが、毎回クラスからインスタンスをnewで作らないといけないのでそのためにstaticがある。
//インスタンス化しないでアクセスする事ができる。クラス名.変数
//アクセスできるのは変数だけでなく、メソッドもできるので確認する。
// staticをつける事で、メソッドも静的にできる。わざわざインスタンスメソッドを呼び出さなくてもworkメソッドを呼び出す事ができる。
console.log(Me2.work());
//workメソッドを修正していく。
//メンバ変数を参照したworrkメソッドを使用する。まずはバッククォートに変換。
//`Hey, guys! This is ${this.firstName}! Are you interested in TypeScript? Let's dive into TypeScript!` とする事で表示させる事ができる。
//${firstName}で変数を代入するとコンパイルエラーが出て変更すべきはMe2.firstName？と出る、そしてそれを書く事でコンパイルエラーば消える。
//Me2firstNameという設定でもいいのだが、このクラスをベースにyouクラスを作ろうとした時にMeという依存が残ってしまう。
//もっとフワッと表現したい。このメソッドが実行されいるクラスだよというように抽象的にする。流用性の強い。thisを使用してあげる。