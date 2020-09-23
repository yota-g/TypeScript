export {}

let bmi: (height: number, weight: number) => number = (
  height: number, 
  weight: number
  ): number => weight / (height * height);

  bmi(1.78, 86);
//これ通常の1lineの関数を定義したもの。
//optional引数は引数として存在していなくても、存在していてもいい引数のこと。
//tsではどのように表現するのか。
//上記では、必須の引数となっているのでbmiを実行する側のコードを１つしか与えていなかったりした場合、コンパイルエラー出る。
//bmi(1.78,); //第二引数ないですよというエラーが発生する
//なぜエラーが出るのか現状の引数はオプショナルな引数ではなく必須な引数に設定しているから。 今までの引数は必須の引数だった。
//引数が与えられない場合がある場合にどのように表現するのか。

//具体的にオプショナルな引数の要件を定義する。
//要件を書いておかないと今からどういったものを実装するのかというゴールを書いておく事。

//bmi(身長,体重,console.logで出力するかどうか？);
//console.logで出力するかどうか？が第3の引数でオプショナルな引数にする。
// bmi(1.78, 86,true);　trueを与えた場合はconsole.logで表示。falseは表示しない。
//bmi(1.78,86,false); 
//bmi(1.78,86);　第３の引数がない場合。　期待はconsole.logが表示されない。

let bmi1: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number, 
  printable?: boolean
  ): number => weight / (height * height);
//この状態だとprintableに対応する引数が足りないよということをエラーで教えてくれる。 下記の部分にエラーば出る
bmi1(1.78, 86)
//第３引数はオプショナルにしたいのでどうすればいいのか。
//引数名の後ろに?をかくとオプショナルになるのでエラーがなくなる。
//printableがあってもなくてもいいものになった。

//printableの状況に応じて分岐をさせるようにしていく。
let bmi2: (height: number, weight: number, printable?: boolean) => number = (
  height: number, 
  weight: number, 
  printable?: boolean
  ): number => {
    const bmi: number = weight / (height * height);
    if (printable){
      console.log({ bmi });
    }
    return   bmi;
  };
//trueを第３引数に入れることでbmiが表示されるようになる。
//falseやなかった場合には、bmiが表示されない。
//変数てbmiを格納しているのでreturnで返すものもbmiでいい。
//戻り値を入れないと表示されない。
bmi2(1.78,86,true);
//trueだと表示されて、faliseと何もなしは表示されない。


