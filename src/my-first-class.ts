export {}

// class Person {}
//classを使って、インスタンスを作る。
//クラスはインスタンスを作る雛形なので;はいらない。
// let taro = new Person ();
//classを使ったインスタンスができた。newでインスタンスを作成できる。
// let hanako = new Person ();
//もう一つのインスタンスを作成
//インスタンの作成が簡単

//コンストラクターメソッド。
//new 演算子でクラスのインスタンスをnewで作成した時に自動で呼び出されるメソッド
//class名の()に引数を渡す事ができる。渡したものはコンストラクターのメソッドに入る。
//通常はインスタンスメソッド生成時の諸々の初期化処理を行うというもの。
//classの{}の中にコンストラクターメソッドを実装する。
// class Person{
//   constructor(name, age){
//     this.name = name;
//     this.age = name;
    //引数で渡ってくるnameをPersonのインスタンス、今回だとtaroさんのnameとageという事で設定してあげる。そうゆうときのPersonのインスタンスの属性としての設定をしている。
    //taroの実態を設定する事ができる。
//   }
// }

// let taro = new Person ('taro', 23);
//constructorメソッドの引数に渡す事ができる。 
//ここからtsの定義 プロパティとしてnameとageを使用しているが、それぞれの型の定義をしないといかない。
//classのなかのトップレベルで行う。 今までと同じような型の定義を行う。
class Person{
  name: string;
  age: number;
  //さらにやるべきなのはconstructorはメソッドだが関数と同じなので、引数に型のアノテーションをする。　
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
}
//一通りのコンパイルエラーが消える。
let taro = new Person ('taro', 23);
console.log(taro);
//Person { name: 'taro', age: 23 }が出力される。これは初期化時に渡したデータがインスタンスに保持されている
//Personに機能を追加する。

class Person2{
  name: string;
  age: number;　
  constructor(name: string, age: number){
    this.name = name;
    this.age = age;
  }
  //constructorに対しているときは型設定しない。言語仕様としてconstructorの戻り値に対応する戻り値は書かない。constructorはreturnしない。もし書いたら、戻ってくるものがないのでvoid型にしたらコンパイルエラーが出る。　引数は必要。tsの言語使用なので覚える。
 //profileはメソッドの関数なので()がいる。引数はいらない。
  profile (): string {//返す値が文字列なのでstring
    return `name: ${this.name} , age: ${this.age}`
  }

}

let rika  = new Person2 ('rika', 23);
console.log(rika.profile()); ///そうする事でreturnで変えてきたものがconsole.logで表示される。
//Personクラスで初期化をする際に指定した文字列と数値が１続きの文字列で表示されるようになった。


