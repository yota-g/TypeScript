export {}

let name = 'Atsushi';
//このコードの代入によって、nameがstring型と推論される。
name = 'Ham';
//再代入する事で書き換える事が可能。\
//constアサーションをas-coonstを使って変数を初期化する。
let nickname = 'Ham' as const;
//文字列の後ろにas constを追加する。nicknameの型推論が'Ham'型になっている。
// nickname = 'HAMさん';
//nicknameの変数にHam以外を再代入するとコンパイルエラーが出る。すでにHam型という文字列リテラルで初期化されているのでそれを破壊できない。
//Hamで再代入できても別の文字列で再代入できない。
//letなので再代入は可能だが決められた文字列しか再代入できない。
//実質この変数を定数であると言える。
//オブジェクトの場合でも使用可能。

let profile = {
  name: 'Atsushi',
  height: 178
};
//この状態だと書き換え可能。

profile.name = "Ham";
profile.height = 180;
//このような再代入を許したくない場合もconst assertionは大切。
//どのように書くのか。一番後ろにas const

let profile1 = {
  name: 'Atsushi',
  height: 178
} as const;
//}の後ろにas constを書く事で再代入する式にコンパイルエラーが出る。
// profile1.name = "Ham";
// profile1.height = 180;
//as const を書く事でnameとheightがreadonlyな属性に変わった。
//今回みたいに値を変えたくない場合、それぞれの属性にreadonly と書くのではなく、as constを書くだけでreadonlyなものになる。
//as constはどれだけオブジェクトの中がnestしていても全ての要素をreadonlyにしてくれる。
//readonlyにしたいならas constを使用する。

