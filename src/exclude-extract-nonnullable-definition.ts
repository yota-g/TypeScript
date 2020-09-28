export {};

type DebugType = () => void;　
type SomeTypes = string | number | DebugType;
type FunctionType = Exclude<SomeTypes, string | number>;
//Excludeの定義を確認する。
//type Exclude<T, U> = T extends U ? never : T;
//このコードの　:　は参考演算子のような形式。型を評価できる仕組み。
//tsでConditional Typesというもの。これがどのように評価され、最終的にどのような型が得られるのか。
//型の定義を確認する。 Excludeはtsに準備されたものなので使用してはいけないので名前は変えて確認する。　
type myExclude<T, U> = T extends U ? never : T;
//使用して具体的な処理をしていく。 excludeしていく。
type myFunctionType = myExclude<SomeTypes, string | number>;//DebugTypeが得られる。
//TにはSomeTypesが渡って、Uにはstringとnumberがわかる。
//Uから見ていくと、
type myExclude1<T> = T extends string | number ? never : T; //となる。
//Uは代入したのでmyExcludeの型のU(左辺にあった)を取ってあげる。こうすると型引数が１つになるのでコードも型引数を１つにする必要が出る。
type myFunctionType1 = myExclude1<SomeTypes>;
//Uを取っても変わらずDebugTypeの型のみが表示される事になる。
//ここまでは何も破壊していない。
//ここから先は新しいルールを学ぶ必要がある。
//Distributive Conditional Types  
//For example, an instantiation of T extends U ? X : Y with the type argument A | B | C for T is resolved as (A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y).
//A| B | C がTとして定義された場合１つずつtsの型として展開される。これがDistributible Conditional Typesのルール。
// 今回のTはSomeTypesが渡ってくるので、string | number | DebugTypeがTに渡される。Distributible Conditional Typesのルールに従うと下記のようになる。
//Tに3つの型を渡すので3つ()を書いてあげないといけない。ルールに乗っ取って。union typesの各様を展開してあげる必要がある。
type myExclude2 =
  (string extends string | number ? never : string) 
    //stringがextendsより右側にある型string | numberのunion型と互換性があるかを評価している。互換性があるとtrueになる。ということは?の右側は　true | falseというように採用されるので、neverが採用される。この()の評価はneverになる。
  | (number extends string | number ? never : number ) 
    //trueになるのでここもneverになる。　
  | (DebugType extends string | number ? never : DebugType );
    //ここは互換性がないのでDebugTypeが採用される。
//というような形になる。
//ここまで展開するとTも使用しなくなるので<T>を消せる。myFunctionType2の<T>も消せる。
type myFunctionType2 = myExclude2;
//()の中を１つずつ評価していく。
//結果がこうなる
type MyExclude3 = never | never | DebugType;
//というような型になる。　MyExcludeの型推論(DebugType)と同じようになる。　
//だから、MyExclude3とmyFunctionType3は同じ型になるということ。
//型に対する疑問は定義を辿って見てみるといい。
//tsをやっていると定義がわからない事があるので除く事が大切。
//extends ? :を使ったconditional types 
//union型が絡んできているDistributibe　conditional types この辺りのテクニックを使っている型は非常に多い。


type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;

type NullableTypes = string | number | undefined | null;
type NonNullableTypes = NonNullable<NullableTypes>;


