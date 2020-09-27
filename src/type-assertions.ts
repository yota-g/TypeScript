export {}

// let name: any = 'Ham';
// let length = name.length;
//nameの文;字の長さを求めてlenghtに代入する
//length は型推論でanyになっているので、再代入する事ができる。
// length = 'foo';
//文字列を代入することも打倒。anyにstringを入れると
//しかし、変数lengthにはname.lengthの結果が代入されるので、number型の値が代入される。型推論がanyと言ってはいるけど、
//そのlengthに対して、文字列を代入するのは望ましくない。そんな時にいい感じに制約を加えるいい方法。
//あまり役に立たない　型推論に頼らずに、自分で積極的に型をアノテーションして制約を加えてあげることが１つの手
//型推論は完璧ではないので、僕らの方が正しければ手を動かして型制約を加えてあげる。

// let name: any = 'Ham';
// let length: number = name.length;
//lengthにnumberを加えてあげる。number型というのを手動で設定してあげる。3という値がlengthに代入できるから。
//このようなアノテーションで制約を与える事ができるが、lengthに直接アノテーションするのではなくて、
//右辺からやってくる式によって、賢くより早く型が断定できればスマート。
//型は自明であればなるべく早く型が決定している方が型システムとしては健全。そんな時に使用するのが型アサーション。
//この型はこうであると示す事。name.lengthはコンパイラーだけだと特定できない。だから、コンパイラーにこの型だよと教えてあげる必要がある。　
let name: any = 'Ham';
let length: number = name.length as number;
// length1 = 'foo'; 
//右辺の後ろに as 型名を入れる事ができる。 これでコンパイラーが認知できる。
//早い段階で正確な型をつけるという意味だともっといい方法がある。
//もっと早い方法。
let name1: any = 'Ham';
let length1: number = (name as string).length; 
//これでnumber型にアノテーションできる。
// length1 = 'foo'; //コンパイルエラーが出る。想定外のデータの混入を防ぐ事ができる。これが型アサーション。

//もう一つのアサーションをする。
// let name: any = 'Ham';
// let length: number = (<string>name).length;
// length = 'foo'; 
//これは推奨されていない。　jsxというreactの方法と似ているのでasの方のアサーションを書くようにする。
//asを使用したアサーションを使用する事。
