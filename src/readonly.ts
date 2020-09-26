export {}

class VisaCard {
  readonly  owner: string;
  //readonly修飾子を設定する publicなどと同じでメンバー変数の前におく。
  constructor (owner: string) {
    this.owner = owner;
  }
}

//ownerは読み取り専用なので値を入れて本当に変更等できないかを確認する。
let myVisaCard = new VisaCard('はむさん');

//owner情報をconsoleで確認。
console.log(myVisaCard.owner);
//npm run dev src/readonly.tsで実行する
//はむさんと出力される。初期化できている。
//ownerを変更していく。
// myVisaCard.owner = 'ベーコン';
//readonlyプロパティにassignはできないよというコンパイルエラーが出る。　変更できないよということ。
//読み取り専用になっていることを確認できる。　

//tsのコンストラクターでは初期化処理をもう少しだけ簡潔にかけるというものを学習済み
//これを利用して、簡略化をしていく。

class VisaCard1 {
  constructor (public readonly owner: string) {
  }
}
//メンバー変数とコンストラクターの初期値を消す。　
//publicときちんと書いて上がる必要がある。初期化処理の確認ができる。
//ownerがreadonlyにはなっていないので指定をしてあげる必要がある。
//publicの後につけてあげる。

let myVisaCard1= new VisaCard('はむさん');

console.log(myVisaCard.owner);
// myVisaCard.owner = 'ベーコン';
//ownerがreadonlyのため変更できないよというコンパイルエラーが出る。

//現時点のreadonlyの変則ルールはreadonlyはアクセス可能というものなのでprotectedでもprivateでもないというpublicであるという意味をreadonlyは持っているのでpublicを省略する事ができるが、tsをあまり知らない人はpublicがないとpublicかどうかわからないので省略しない方がいい。
//publicを書かなくていいのはreadonlyの時のみで、取り除きたくなった時取り除くだけだと初期化処理が上手くされなくなる。
//publicを省略してしまっていたから。だから、省略できるけどreadonlyの前にpublicをつけておいた方がいい。



