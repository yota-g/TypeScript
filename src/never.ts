export {};

// function error(message: string) {
//   throw new Error(message);
// }
  //必ずエラーを受ける。　戻り値を書いても戻ってこない。実行されないから。
//呼び関数に対しての戻り値に対応する型指定をどうゆう型で書くべきなのか。
//関数のリターンするデータの型は、関数の定義の中で設定する。
//リターン分の実行はない。例外が発生するので、それ専用の型がある。
//関数の中で例外を起こす時はneverという型を指定するといい。

function error(message: string): never {
  throw new Error(message);
}
//never型　disfunction will never returnから作られている。　呼び元に戻らないということ。
//これだけが呼び元に戻ってこない　エラーが起きるから。
//エラーハンドリングができないとエラーを拾うことができないので、ハンドリング込みの実装を行う。
//エラーハンドリングはtry catchで実行する。
//tryでキャッチさせて、testというメッセージを渡す。catchで例外を拾って表示させるというエラーハンドリングをする。
try {
  let result = error('test');
  console.log({result}); //返ってこないがあえて動作確認をするために導入
} catch(error){
  console.log({error});
}
//エラーが出ると関数を呼び戻せてない。　error;Error ~となる。
//console.logが出力されていない。　関数を呼び元に戻ってくるという動作をしないから。
//出力されているのはオブジェクトでerrorについて表示されている。 errorハンドリング側のconsolo.logを出力している。

//errorの関数の内部で例外が発生しているのでresultが得られない様になっている。
//例外が発生すると通常その例外の内容を画面に表示してプログラムが終わるが、
//エラーハンドリングでtry catchしてるので、例外処理をすることができる。
//例外をcatchで拾うことができてプログラムを実行することができる。
// catchでエラーを拾ってcatchのブロック節が実行されているということ。
//画面に全体的にerror（console.log(error)）のオブジェクトがダンプされて表示されていることからもわかる。

//今回の様に呼び元に戻ってこない様な関数の戻り値に対応するアノテーションやneverと書く。文法上のお約束。
//voidとneverの違い。voidがreturnされる値が、ないことを意味する。呼び元には必ず返ってくる。neverは戻ってこないことを意味するので値も何もない。
let foo: void = undefined;
let bar: never = undefined;
//voidにはundefinedは含まれるので代入できる。neverは値という概念がないのでundefinedを入れるとエラーになる。nullでも同じ。
//neverには値を代入できない。 
//唯一error('only me!');とerrorだけは代入できる。 error関数はnever型を返す関数なので、never型の変数に代入できる。
//使用用途は落ちがない。　例外を起こす関数にはneverを指定するだけ。




