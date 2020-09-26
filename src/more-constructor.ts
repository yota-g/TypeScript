export {}

class Person {
  public name: string;
  protected age: number;
  
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
//constructorのよるメンバー引数の初期化をしているだけ。
//constructorではメンバー引数の初期化はオブジェクト指向ではお決まり。何度もお決まりを書くが、
//tsではそのルーティーンワークの負荷を軽減してくれる機能がある。

//まずはインスタンスを作って出力する。
const me  = new Person ('Ham', 43);
console.log(me);
//Person { name: 'Ham', age: 43 }と表示される。
//tsで現状の実装をどのように書き換える事ができるのか。
class Person2 {
  //メンバーの型指定を削除　するとコンパイルエラーが出る。 一旦置いておく。
  constructor(name: string, age: number){
    //constructoメソッドの初期化設定も削除する。中身が空っぽに。エラーが出なくなるが、name,age初期化処理ができない。
  }
}
const you  = new Person2 ('Ham', 43);
console.log(you);
//このままだと youのオブジェクトが　Person2 {}のオブジェクトが空の状態になる。
//初期化処理をなんとかしないといけない。
//constructorの引数にname,ageを与えているが書き換える。

class Person3 {
  //constructorの引数の前にアクセス修飾子を入れると。。。
  constructor(public name: string, protected age: number){
    //通常publicは省略するがこの形の時は省略してはいけない。初期化をするために必要。全て引数に対してアクセス修飾子をつけないといけない。
  }
}
const he = new Person3 ('Ham', 43);
console.log(he); 
//Person3 {name: 'Ham', age: 43}と表示されるようになる。
//この実装はPerson3のクラスでは初期化処理をしているように見えないが、constructorの引数にアクセス修飾子を入れるとtsでは自動で初期化処理をしてくれる。

