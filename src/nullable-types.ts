export {}

// let profile: {name: string; age: number;} = {
//   name: 'Ham';
//   age: null;
// }
//ageが今の時点ではよくわからないのでnullにセットする
// {name: string; age: number;}で型指定するとコンパイルエラーが発生する。ageの型がnumberなのに対して、値がnulllだから。
//tsにはコンパイルオプションがあって、tsconfig.jsonの設定にstrictNullChecksがtrueになっているとnumber型にnullを代入する事ができない。
//ファイルを開いて確認する。コメントアウトされているものがデフォルトで設定されているという事。trueが設定されている。
//コメントアウトを外して、falseに設定し直すと、コンパイルエラーがなくなる。
//どんなものにもnullが設定できるようになってしまった。いろんなデータにnullを混入できる。
//どんなものにもnullが入ってしまうのはあまりよくない。どんな状況でもnullを入れれるようになっている。
//アノテーションでnumber型などを指定していてもnullが設定できるようになってしまう。
//その状態をnullable　nullを許容できることをいう。
//objectを宣言しているprofileにnullで上書きできるが、nullを許容するとあるデータに着目した時に、そのデータがどんな値を持っているかが非常にわかりづらくなる。
//秩序がなくなる。 だから、一般的にはstrictNullChecksはtrueにしておいた方がいいし、健全。

//元に戻す。それでもageに具体的な数値がどうしても設定できない場合。strictNullChecksを使用しないでもnullを使用できるようにできないのか。
//union型を使用する事でできる。
//number | nullとする事でエラーがでなくなる。
let profile: {name: string; age: number | null;} = {
  name: 'Ham',
  age: null
}
//nullableな型はunionを使う事で簡単にできるのでnullを許容する型にしたいときは、グローバルな設定のstrictNullChecksでやるのではなくunionで局所的にできないのかを確認すべき。


