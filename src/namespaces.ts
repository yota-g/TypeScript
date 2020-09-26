export {}

namespace Japanese {
  export class Person {
    constructor (public name: string) { } 
  }
}
//Japeneseに属するPersonクラスになる。ファイルをあるフォルダに移動した感じになる。これでエラーがなくなる。
//Personが別の階層に入ったから。

//英語圏の名前なのでその名前空間を用意してあげる。
namespace English{
  export class Person {
    constructor (
      public firstName: string, 
      public middleName: string ,
      public lastName: string){}
  }
}
//Englishという名前空間に属するPersonクラスになった。


const me = new Japanese.Person('はむさん');
console.log(me.name);
//実行する
//もう一つ同じPersonクラスを作る。
//Personクラスが２つあるのでコンパイルエラーが出る。クラスは同じ空間に１つしか作れない。
//じゃあどうするか。クラスはファイルと同じような感じやから。フォルダーに相当する機能がないのか。tsではどうするのか。
//名前空間を使用してエラーを消す。　
//名前空間namespaceを直訳して名前空間と略しただけ。
// 名前の競合問題を解消できるが、その代わりにPersonのインスタンスを生成する際にPersonのクラスが見つからないというエラーが出る。
//cannot find personという事ができる。Personがある名前空間に移動したから見つからない。
//どこのPersonかを確認して指定してあげる。空間名.クラス名で参照できるようになる。これだけでもアクセスができない。
//言語仕様として決まっていて、足りないものがある。外から見えるようにする修飾子がいる。　exprotが必要。
//名前空間にあるクラスの前にexportをつけることを忘れないようにする。

const michael = new English.Person('Michael', 'Joseph', 'Jackson');
console.log(michael);
//これで出力される。
//名前空間を使用することで同じクラス名をつけられない時に設定できるようになる。

//応用編
//トップクラスに複数のクラス名を設定する時に行っていた。競合しないように。
//例えばJapaneseの中にさらに複数のPersonクラスを設定したくなった時にどうするのか。
//nestされたnamespaceの話。　
//Japaneseの中に東京と大阪の名前空間を作ってそれぞれにPersonクラスを作りたくなった時。
// namespaceの中にnamespaceを作る事ができる。

namespace Japanese {
  export namespace Tokyo{
    export class Person {
      constructor (public name: string) { } 
    }
  }
  export namespace Osaka {
    export class Person {
      constructor (public name: string) { } 
    }
  } 
}
//上記のようにnest出来る。Japanese.Tokyo.Personというようにアクセス出来る。
const me2 = new Japanese.Tokyo.Person('はむさん');
//今の時点だとTokyoを利用できない。 exportをnamespaceにもつけてあげる事でエラーが解消される。
console.log(me2);

const me3 = new Japanese.Osaka.Person('はむやん');
console.log(me3);
//ちゃんと設定されている事が確認できる。
//namespaceを使用すると無制限に同じ名前のクラスを作る事ができる。
