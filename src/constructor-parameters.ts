export {};

class Person {
  name: string;
  age: number;

  constructor(name: string,age: number){
    this.name = name ;
    this.age = age;
  };
}

// 初期化をする。
let taro = new Person('Taro', 30);
console.log(taro);
//npx ts-node-dev --respawn src/construtctor-parameters.ts で実行する。　

//クラスの型をタイプに代入する。
type PersonType = typeof Person;
//このクラスの型をconstructorparametersの型引数にくわせるとどうなるのか。
type Profile = ConstructorParameters<PersonType>;
//タプルでコンストラクターメソッドの引数の構造がProfileという型として受け取る事ができた。
const profile: Profile = ['Ham', 43];
const ham = new Person(...profile);
console.log(ham);
//動作を確認すると{name: 'Ham', age: 43} と表示され実行できているのが確認できる。

//constructroparametersの型定義を見ておく。
type MyConstructorParameters<
T extends new (...args: any) => any
> = T extends new (...args: infer P) => any ? P : never;
//まず型引数はextendsがあるので何か制限がある。
//newをしたりnewをする事で何かを返すもの。
//クラスの型でないといけない事がわかる。
//型を見ると?があるのでconditional types
//条件部分はクラスの型になっているのでクラスのしかこないような型引数を持っているので必ず真になる。　
//型のみをinferで抽出している。Pは引数の型
// インスタンスを作る引数の型が返ってくる事がわかる。


