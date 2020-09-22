export {};

//string型のaliasesを作成する。
type Mojiretsu = string;
//これでstringに対しての別名を作ることができる。
//type ~ = 別名を作りたいもので作成できる。別名の頭文字は必ず大文字。
//これで別名を作ることができる。Mojiretsuはstringと同じということがホバーして確認しても確認できる。

//const fooString: string = 'Hello';
const fooMojretsu: Mojiretsu = 'Hello';
//aliasesでも型名を書く時と同じ位置に書いてあげて、アノテーションを行うことができる。
//Mojiretsuにホバーしても、: string型であると表示されている。
//複雑な型指定がある場合も aliasesは可能
const example1 = { 
  name: 'Ham', 
  age: 43
};
//このデータexample1の構造を指定したいとき　型推論を見るとわかる。
//型をコピーして、それをそのまま代入するのでもいいが、型に対して名前をつけるときも、aliasesを使用可能。
type Profile = {
  name: string,
  age: number
}
//アノテーションを行う時に、型推論をそのまま代入してもいいが、定義した型を流用して他でも使用できるので設定してしまうのが楽。
const example2: Profile = { 
  name: 'Ham', 
  age: 43
};

//他の型の作り方。
type Pofile2 = typeof example1;
//typeofでexample1の型を調べてあげて、Profile2に型として別名をつけてあげることができる。
//間違いが発生しにくい。　example1の構造に変化があったときでも追従することができる。
//自分で記入すると追従することができないのであまり合理的ではない。
//example1が変わったら連動するのが理想的。追従して変更してくれる。
//example1で型指定していても反映される





