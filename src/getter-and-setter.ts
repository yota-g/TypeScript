export {};

// class MyNumberCard {
//   owner: string;
//   secretNumber: number;

//   constructor(owner: string, secretNumber: number) {
//     this.owner = owner;
//     this.secretNumber = secretNumber;
//   }
// }
//これでownerとsecretNumberを管理するクラスができた
//クラスをベースにアクセサーの話をしていく。
//初期化をしてインスタンスを作っていく。

// let card = new MyNumberCard('Ham', 1234567890);
//シークレットナンバーとオーナーを入れてあげる。
//これから作る機能の用件について、整理していく。

//*owner
  //  *所有者　　を管理するもの。
  // *初期化時に設定できるもの。
  //*途中で変更できないもの。 現時点ではpublic
  //*参照できる。

  //*secretNumber
    //*個人番号
    //*初期化時に設定できるもの
    //*途中で変更できる。　
    //*参照できない。
//これらの要件を踏まえてclassをみる。


class MyNumberCard {
  private  _owner: string; //privateにした事で参照できなくなった。
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  get owner() {
    return this._owner;
  }
//参照できるもののメソッドにするにはメソッド前にgetをつける。
//ownerが参照するためのメソッドとなる。参照するメソッドをgetterと呼ぶ。
//getterとprivateのownerがかぶっているのでエラーになるのでprivate（メンバー変数を）の方を名前がかぶらないように変更する。_ownerに変更する。そこを参照していたものの名前も変更する。　
//this.ownerをthis._ownerに変更する。
//_をつけてリネイムするのは慣習的にする。

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }
//setterは値を返せないのでreturnは使用できない。
//値を設定するときのみ使用されるもの。受け付けるのはsecretNumberのみなので引数を設定して、型設定をしてあげる。
//これで完了。private メンバー変数はgetter同様に_をつけて名前を変更する。それを参照しているthis部分の名前にも_をつけてリネイムする。
  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }

}

let card = new MyNumberCard('Ham', 1234567890);
console.log(card.owner);  
//コンパイルエラーが出る。privateなので参照できない。
//こうゆう時に対応し利用できるのがアクセサーを使用する。
//参照できるようにするメソッドであるgetter
//変更・設定できるようにするメソッドであるsetterの２つがアクセサーにある。
//Hamと表示できなかったものが表示されるようになる。
//途中で変更できないという項目を確認できていないので確認する。
//変更を試みてみる
//card.owner = ' ハムさん'; 
//読み込み専用なので変更できないよというエラーが表示されるので用件に合致する。

//secretNumberの変数を変更していく。現状はpublicなので用件に合うように変更していく。
//card.secretNumber;
//privateに変えたのでアクセスできないというコンパイルエラーが出る。
//逆に途中で変更できるというものが満たせなくなったので、設定が必要になる。
//ここで登場するのがsetter。setというキーワードが伴うメソッド。構造はgetterと同じ。
//このメソッドは値を設定するときのみ実行されるメソッド。
//設定を完了したら動作確認。
//card._secretNumber; //これだとprivateなので参照できないようになっている。
//変更ができている事を確認する。どんな値が入っているのかを確認する。
//debugのメソッドを確認する。
console.log(card.debugPrint());
//これだとprivateを直接ではなく、新たなメソッド経由で参照しているので表示する事ができる。
//_secretNumberを変更する事ができるかを確認する。
card.secretNumber = 1111111111;
console.log(card.debugPrint());
// console.log(card.secretNumber); //_secretNumber同様参照はできない。 //他のメソッドで使用しない限り
//secureにsecretNumberを覗かれずに済み管理されている。
console.log(card.owner);
//参照や更新の細かい単位で管理するのをgetter.setter と呼ぶ。
//tsではget.setというキーワードで簡単にセットすることができる。



