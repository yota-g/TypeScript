export {};

type Profile {
  name: string;
  age: number;
};

type PartialProfile = Partial<Profile>;
//Profileをオプショナルなプロパティにできた。
//これはPartialが型引数を引き取って新たな型を作っている。
// この新たな型を生成する部分は、一体どんなことをしているのか。
//そうゆう時はPartialにホバーするとどうされているかがわかる。
//Make all properties in T optionalという風に表示されている。
//PartialはTという型の中になる全てのプロパティをオプショナルにすると言う意味
//type Partial<T> = { [P in keyof T]?: T[P] | undefined; }　どのようにしているのかが記載されている。
//Partialを選択してgo to definitionを選択すると定義の実態を見る事ができる。
//[ P in keyof T]   Tというオブジェクトの型の全てのプロパティを文字列リテラル型のunion typesに合併型で引っ張ってこれるのがkeyof  T。
type PropatyTypes = keyof Profile;
//Profileオブジェクトのプロパティ名を文字列リテラル型のunion型で受け取る事ができる。　 "name" |"age"として受け取れる
//これがkeyof の正体
//type Partial<T> = { [P in keyof T]?: T[P] ; } に話を戻す
//keyofで算出されたunion型の各要素をinで1個ずつ取り出せる。取り出された文字列リテラルの型をPとして扱う事ができる。
//PropatyTypesだとnameとageを一個ずつ取り出して、Pとして扱う事ができる
//あるときはPはage出し、nameになる。 1個ずつ取り出してPとして扱う事　という事がinによってできる
//T[P]はTにPを代入している。 TはProfileにname,ageが渡ってくるので、string,numberがT[P]で得られる。
///それぞれが?付きの型として得られるということになる。それぞれの組み合わせを最終的に足しあわせて１つのオブジェクト型が完成するという事がPartial型で計算されている
//自分で作ろうと思えば作れる。

type Optional<T> = {
  [P in keyof T]?:  T[P] | null;
};
type OptionalProfile = Optional<Profile>;
//Partialはtsで提供されている言語なので名前を変更しないといけないが、Partialと同じ役割を持つ型を作ることもできる。
//Optionalを用いて全てがOptionalになるようにしたいならOptionalに型引数を代入してあげればPartialのように自分が作った型でプロパティを変更した型を得れるようになる。
//カスタマイズをすることも可能。 nullを共有するようにしたいなとなった時は| nullをつけてあげることでnullを許容できる。

//既存のオブジェクトの型を使用して新たに型を定義する事ができる。
//1個ずつプロパティを取り出して、評価して別のオブジェクトを生成する事ができる。
//このようなタイプをmapped typeと呼ぶ。
//重要なのは、ある型の定義を参照したものの定義を覗きに行った時にin keyofを見た時にあるオブジェクトのプロパティの名前から型を作ってそれを一個ずつ取り出していると理解できればいい。

