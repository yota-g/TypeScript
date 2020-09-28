export {};

type DebugType = () => void;
//DebugTypeを含むUnion型を作る。　
type SomeTypes = string | number | DebugType;
//このようなunion型を用意した
//SomeTypesからある型を除外したい時にExcludeを使用する。
//Excludeは２つの型引数を受け取る。
//１つ目は全体のunion型、2番目には不要なものだけで構成されるunion型で構成される。
type FunctionType = Exclude<SomeTypes, string | number>;
//FunctionTypeにDebugTypeだけが設定される。
//SomeTypesからDebugTypesを作る。
type NunFunctionType = Exclude<SomeTypes, DebugType>;
//string | numberの型を作る事ができる。
// 関数の型を除くタイプを作ったが、関数を除く方法は別の方法がある。
type TypeExcludeFunction = Exclude<SomeTypes, Function>;
//Functionを除く事ができる。Functionは関数の型の総称のこと。
//関数が複数あるときの除外忘れや、追加してそれを覗かないといけない時のメンテナンス性を向上できる。
//効率よく関数のみを除外する事ができる。様々な関数を引っくるめて除外したい時に使用するととっても便利。

//Extractは抽出する
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
//こうする事でDebugTypeだけが取り出せる
//２つ目の引数に抽出したいものを指定する。union型で指定することもできる。
type FunctionTypeByExtract1 = Extract<SomeTypes, number | string>;
//含まれている関数全体を抽出する方法もある。
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;
//これで関数が追加されても追加された関数も抽出する事ができるようになる。

//NonNullableはunion型からnull,undefinedを排除してくれるもの。
type NullableTypes = string | number | undefined | null;
type NonNullableTypes = NonNullable<NullableTypes>;
//こうする事でundefinedとnullを排除する事ができる。


// いずれも既存の型を利用しつつ新たな型をスピーディーに作成できるUtility型である。
　