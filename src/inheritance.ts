export {};

class Animal {
  run(): string {
    return 'I can run';
  }
}

let animal = new Animal();
console.log(animal.run());

//ここから継承してRaionクラスを作る。
class Lion extends Animal {
  run(): string {
    return 'I can run 80km';
  }
}

const lion = new Lion();
console.log(lion.run());
//lionのメソッドが正常に表示される。Animalクラスの継承がわかるようにしていく。
//Animalに初期化処理を追加。 Animalに名前を保持できるようになった
class Animal2 {
  constructor(public name: string) {}
  run(): string {
    return 'I can run';
  }
}

class Lion2 extends Animal2 {
  //constructor(public name: string) {}; こうするとエラーが出る。コンストラクターではsuper()を実行しろとなる。
  // constructor(public name: string, public speed: number) {
  //   super(name); //superクラスは親クラスのコンストラクターメソッドそのものなので、name(引数)を入れないといけない。　コンパイルエラーが消える。
  // };
  //初期化が2回行われる現象が起きている。ここはtsの使用なので親クラスの初期化と子クラスの初期化順序は親の次に子クラスの処理という風になっている。ここをわかりやすい内容に書き換えるべき。
  //speedを外に出してあげる。speedに対して、コンストラクターのspeedのpublicを取れる。nameの初期化処理をマニュアル処理したいのでpublicを取る。
  public speed: number;
  constructor( name: string, speed: number) {
  super(name);
  this.speed = speed;  //speedの初期化処理を誰もこの状態だとしてくれないので自分で記入する。
  };
  //こうする事でnameの初期化処理は親クラスがsuperで実行してくれ、speedは自分で行う。それぞれの変数がどこで初期化されるのかが自明になるのでこちらの方がバグが発生しにくい。

  // Lionの引数にspeedを入れる
  //   run(): string {
  //     return 'I can run 80km';
  //   }
  //これをもっとドライな書き方にする。親クラスでもI can runを使用しているから。superをrun()メソッドでも使用できる。
  //親クラスのメソッドを呼び出すには,super.run()で親クラスのメソッドを呼び出せる。
  run(): string{
    // const parentMessage = super.run();// 親クラスのメッセージを返してくるのでまずは変数に格納しておく。
    //consoleでparentMessageを出力すると'I can run'が表示される。それを生かしてドライな書き方にする。
    return `${super.run()} ${this.speed}km.`; //こう書く事でI can run (speedの数値)kmと表示される。
  }


}


// let animal2 = new Animal2();
// console.log(animal2.run());

// const lion2 = new Lion2();
// console.log(lion2.run());
console.log(new Animal2('Mickey').run());
console.log(new Lion2('Simba', 90).run()); //引き数が２つ必要になる。初期化時の引数を合わせないといけない。
//それぞれのrunメソッドを使用できているのがわかる。

// Lionの初期化処理にスピードを受け取れるようにしていく。
//methodのオーバーライドをしていく。
