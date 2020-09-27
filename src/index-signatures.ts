export {}

// let profile : {} = {};
//初期化ではからのオブジェクトを設定。
// 動的で様々なオブジェクトを代入するとする。
// profile.name = 'Ham';
//こうするとnameでコンパイルエラーがでる
//nameというプロパティはないよというものが表示される。　
//プロパティが追加されるには最初の型アノテーション側で宣言しとかないといけない？
//let profile: {name?: string} = {};としとかないといけない？
// profile.age = 43;
//というように存在していないものがまたでてきたらどうする？ってなる。
//さっきと同じエラーが出る。　オプショナルなパラメータを追加してあげる？？それがベストアンサー？
//型アノテーションで虱潰しにしていくのはメンテナンスしてられない。
//うまい方法はないか。
//こんな時に使うのがindex-signature.オブジェクトのインデックス　キーに該当する箇所をアノテーションするための署名。
//それを実行していく。
//index signatureの書き方
//How to write signatures
// { [index: typeForIndex ] : typeForValue}という風に書く　 

// let profile :{ [index: string ]: string} = {};

// profile.name = 'Ham';
// profile.age = 43;
// この状態だとprofile.ageがコンパイルエラーが出るvalueがnumber型が想定できていないから。
// let profile :{ [index: string ]: string | number } = {};

// profile.name = 'Ham';
// profile.age = 43;
// profile.nationality = 'Japan';
//未知のプロパティを追加してもエラーにならない汎用性が確保されている。
//型の設定が長いので外に出す interfaceで設定する。

// interface Profile {
//   [index: string ]: string | number ; 
// }
// let profile :Profile= {};

//こうすることでProfileという型が１つできた。
//見た目がすっきりする。

// profile.name = 'Ham';
// profile.age = 43;
// profile.nationality = 'Japan';

//Profileに20歳未満かどうかを識別するプロパティを入れてみる。　

interface Profile {
  name: string;
  underTwenty: boolean; //trueなら未成年、falseなら大人
  [index: string ]: string | number | boolean;  //[index:string]: string ] numberにbooleanが設定ないとコンパイルエラーになる。互換性がないから。
  //typeForValueにbooleanを追加する事でエラーがなくなる。
  //またunderTwentyは必須のパラメーター（プロパティー）になるので、初期化時に指定してあげないといけない。
}

let profile :Profile= {
  name  : 'Ham',
  underTwenty : false
  //underTwentyだけ初期化するのは不自然。だからnameも初期化しておく。nameがあって年齢があるから。nameも必須パラメータにしておく。
};

//こうすることでProfileという型が１つできた。
//見た目がすっきりする。

profile.name = 'Ham';
profile.age = 43;
profile.nationality = 'Japan';
//objectの添え字に対する型注釈の方法をindex signatureを学んだ。
