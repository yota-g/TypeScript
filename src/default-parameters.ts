export {}
　
//デフォルトパラメーターはjsでは普通に使用する機能。
//関数に値が持たされない場合、undefinedが持たされる場合はあらかじめ設定されたデフォルト値で初期化される。
//形式上の初期化のこと。

const nextYearSalary = (currentSalary: number, rate: number = 1.1) => {
  return currentSalary * rate;
} ;

// console.log(nextYearSalary(1000,1.05));
//npm runで実行すると1050と表示される。
//default引数をrateに設定してあげる。
console.log(nextYearSalary(1000));
//第2引数がないのでデフォルト引数の1.1を使用して、1100が表示される。

