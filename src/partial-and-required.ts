export {}

//Utility Typesはtsが標準で準備してくれているもの。

type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};
//大量にプロパティがあることを想像してやっていく。
//型の全てのプロパティがオプショナルな型となるように別途セットしたくなった時どうする？
//１つの方法として複製して全てのプロパティに?をつけてあげる方法がある。
type Profile2 = {
  name?: string;
  age?: number;
  //ここには手動でzipCodeの追加があった場合は記入しないといけないが、PartialTypeは自動でメンテナンスしてくれて便利
};
//型を複製してあげて、 ?をつけてあげることでプロパティがオプショナルなプロパティにできる。
//オリジナルのプロパティに新たなものが追加されてり、削除されたり、変更されたというものに追従する方法はあまりよくない。
//それに対応するのがPartial である。　
//Profileを使用したOptionalなタイプを作成していく
type PartialType = Partial<Profile>; 
//Partialに型引数を渡せるのでProfileを渡す
//そうすると、先ほどコピーして作成したものと同じ？をつけたプロパティになる。
//自動的に生成される。　Profile自体に追加、変更、削除があっても追加した瞬間にPartialTypeに追加される。
//めちゃくちゃ便利。新しいプロパティに対してもオプショナルなプロパティとして追加されることになり、メンテナンスコストがかからない。
//オプショナルな型と必須の型が混在していても使用可能。


//Partialとは逆の全てのプロパティを必須なものに自動変換してくれるもののある。
//required型
type Profile3 = {
  name: string;
  age?: number; //ageだけがOptionalなものにしておく。
  zipCode: number;
};
//必須とオプショナルが混在している。
//全てのプロパティが必須な型が必要で、既存の型は破壊したくない時はどうするか。
type RequiredType = Required<Profile3>;
// RequiredというUtilityを使用することで全てが必須のプロパティの型を瞬時に作成できる。
//新たな型を手に入れる事ができる。
