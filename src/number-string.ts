export {};

//let year = 1976;   //js用
let year: number = 1976;  //型を指定する。
// year = false; 数値型にboolean型を入れるとエラーが出る。　想定外の型が入力された時に早急に判別できる。
console.log(year);

//let age = 0x2b;
let age: number = 0x2b;
// １６進数も使用できる。 43
console.log(age);
// これらを実行する。 npm run dev src/number-string.ts 上から順に出力される。

// let name = 'Ham'; //単なるjs
let name: string = 'Ham';
//アノテーションが設定された後に、name=10;とかになると当然エラーになる。
console.log(name);


