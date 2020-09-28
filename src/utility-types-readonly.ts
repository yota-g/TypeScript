export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: 'Ham',
  age: 43
}
//meにインクリメントをしてみる。
me.age++;
//meの年齢が44になる。　こちらはインクリメントできる
console.log(me);
//{ name: 'Ham', age: 44 }と表示される +1された状態になる。

//readonlyで構成されるプロパティで型を構成する。
type PersonalDataType = Readonly<Profile>;
//全てプロパティにreadonlyがついた型が求まった。
//PesonalDataTypeでアノテーションした定数を使用する
const friend: PersonalDataType = {
  name: 'Shigeru',
  age: 40
};
//friendはPersonalDataTypeでreadonlyな型で制約されている
//friendのageにはインクリメントできない。
//friend.age++;
//こうするとインクリメントができないのでコンパイルエラーが出る。
//readonlyはどうやって型が作られているのか。　

//Tは型引数
type YomitoriSenyou <T>= {
  readonly [P in keyof T] : T[P] ;
};
//メンバー変数の前にreadonlyをつけてあげる事でReadonlyと同じ型を作る事ができる。
//カスタムしたければカスタムできる。
 type YomitoriSenyouProfile = YomitoriSenyou<Profile>;
//Profileの全てのファイルにreadonlyを自作でも付与する事ができる
//ReadonlyとYomotoriSenyouが同じ型で作成する事ができた。



