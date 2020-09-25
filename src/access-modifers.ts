export {}
//アクセス修飾子を使う。

class Person2{
  public name: string; //アクセス修飾子を実際に見合ったものを設定する。 アクセスできる。　
  private age: number;　//アクセスできない。　こうする事でこのクラスのインスタンスを制限する事ができた。
  protected nationality:string;
  constructor(name: string, age: number, nationality: string){
    this.name = name;
    this.age = age;
    this.nationality =  nationality;
  }
  profile (): string {
    return `name: ${this.name} , age: ${this.age}`
  }
}

let rika  = new Person2 ('rika', 23,'Japan');
// console.log(rika.profile()); 
console.log(rika.name);
//npm run dev src/access-modifers.ts
//rikaと表示される。rika.nameでnameにアクセスできるから。nameがアクセス可能なメンバーだから。
// console.log(rika.age); //アクセス修飾子privateを制限したので出力できないとエラーが出る。
//23と表示される。ageにアクセスできる。こうゆう風にインスタンスに対してメンバーの呼び出しはオブジェクト指向言語の１つの仕組み。
//この呼び出しに対する制約をつける事ができる。
//インスタンスに対して呼び出しを禁止する。
//インスタンス名.メンバーで呼び出せるものに対して参照されたくないメンバーがある時に使用。
//そういった場合を想定して、参照を禁止するための機能がアクセス修飾子がオブジェクト指向言語にあってtsにもあるので確認する。
//今のものに適用していく。メンバー変数を宣言しているところに使用していく。
//privateはあくまでインスタンスからの呼び出しができなくなったという事でエラーが出る。
//つまりPersonクラス内部のメンバーからの使用は可能。profileでの内部処理は実行可能。
console.log(rika.profile());
//profile()はageの使用を制限されていないのでname: rika , age: 23を表示でき、privateなメンバーであるageを参照できているということを意味する。
// これはprivateなアクセスに反している訳ではない。
//publicはアクセスに関する制約は持たない。書いても書かなくてもいい。実際には書かない。
//規制したいものし対してprivateを書く事が一般的。

//他のアクセス修飾子 protected　privateと同じようにクラスの内部からの参照はできる。何が違うか。派生クラス。子クラスとか孫クラスなどのクラスが派生したクラスでも参照できるという特徴がある。privateとは異なる点
//protectedの機能がどうなのかを確認する。
//protectedなメンバーを追加。　今回はnationalityを追加する。
//この段階では引数を３つ入れないといけないようになる。３つ目を追加する。せやないとコンパイルエラーが出る。
//protectedとprivateの違いを確認。サブクラスを作成する。Personクラスを継承するAndroidクラスを作る。 
//Personクラスと同じようにコンストラクターのメソッドを用意して、初期値を受け取って初期化をさせる
class Android extends Person2 {
  constructor (name: string, age: number, nationality: string) {//親クラスと同じ初期化処理を使用する時はsuperを使用できる。
    super(name, age, nationality);//Personクラスのconstructorメソッドを呼ぶ事ができるので、親クラスのコンストラクターメソッドで期待されている引数を渡すとsuperが実行され初期化処理が実行される。　
  }

  profile(): string {
    // return `name: ${this.name} age: ${this.age} nationality:${this.nationality}`;
    //こうするとthis.ageの部分にエラーが表示される。ageはprivateなのでPersonクラスのだけでアクセス可能。this.ageと呼んでいいのはPersonクラスだけだという事。
    //this.nationalityはアクセス修飾子がprotectedなのでエラーにはなっていない。これがprivateとprotectedの違い。
    return `name: ${this.name}  nationality:${this.nationality}`; //これだとエラーが出なくなる。
  }
}

// クラスを作って人に使ってもらう人はこれを意識しないといけない。

