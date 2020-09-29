export {};

type DetailedProfile = {
  name: string;
  hight: number;
  weight: number;
};
//この型を使用したときの必要なメンバーがnameとweightだった場合
//必要なものだけと取り出して新たに型を作りたい時はpickというUtility型を使用する

type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>;
//pick upしたい必要なunion型を指定してあげる。
//pickが自動的に選択してくれて新たな型に対してnameとpickだけ採用されてものが作られる。
//新しい型がどうやってできているかを定義にいくと確認できる。
//pickには２つの型を指定できる。
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};
//1番目の型はTはただのオブジェクト。Tのなかのプロパティにアクセスしている。オブジェクトである事が条件。
//2番目の引数はextendsは型制約がある。なんでも指定できる訳ではなくて、keyof Tで作成されたunion型に含まれたものであるKを指定する必要がある。
//keyof Tと互換性のあるものでないといけない。今回はTのunion型に含まれたものと互換性のある | のunion型で指定されたものを設定した
//別のやり方もある。
//type SimpleProfile = Pick<DetailedProfile, K extends keyof T>;
//Kの部分に''を作成するとTに含まれた要素を補完してくれる。''に選択できるものはこれだけですよと選択できるものを表示してくれるので選択できる。
//editorにコードを書かされているような状態になる。補完などをしてくれるから。
//old schoolのeditorやモダンなeditorを使うのはMTの車を運転しているみたいなもの。
//なんでeditorが補完してくるのか型に制約を持たせているから。
//DetailedProfileに含まれない'age'をunion型に追加したらどうか。
// type SimpleProfile1 = Pick<DetailedProfile, 'name'  | 'weight' | 'hight' | 'age'>;
//ageを割り当てる事ができませんとちゃんとコンパイルエラーが出る。
//これがpickの昨日

//Omit　いらないものを選択してある特定の型を除外して、新たな型を作成する事ができるUtility型を作る。
//Omit除外する
type SmallProfile = Omit<DetailedProfile, 'height'>;
//これでSimpleProfileと同じ型を得る事ができた。
//Omitの型定義をみる
//まずは定義　定義元の方が正しい。　定義元は一時情報。定義として正しいのは定義に行ったところだが、定義を解釈したVS codeは実質こうだよねというもの。
//type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; } //実質を表している。\
//tsのオブジェクトに使用できるkey（プロパティ名）として指定できるものがstring,number,symbolと具体的に決められている。

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
//keyof anyはキーとしてあり得る全ての型を示している。事実上string,number,symbolの共用型になる。
//最初からanyじゃなくてstring,number,symbolって書いておいてくれと思うかもしれないが、
//訳があってanyなのは、今後別の新たな型がキーになる可能性を考えてkeyof anyとして記入している。
//今回のオブジェクトは全てstringなのでstring形式でKを指定できる。今回の指定する型はKをして扱われる。

type MyOmit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
//定義を確認していく。Omitがどんな風に計算をしているのかを確認する。
type MySmallProfile = MyOmit<DetailedProfile, 'height'>;
//MyOmit(Omit)により計算されるもの。MyOmitで演出されている。Omitの名前にすると標準であると使用できないので名前を変更している。　
//分解をしていく。
//Kに'height'を入れていく。 そうするとKには'height'しか入らないとすると第二引数を消す事ができる。　
type MyOmit1<T,> = Pick<T, Exclude<keyof T, 'height'>>;
type MySmallProfile1 = MyOmit1<DetailedProfile>; //こちらも第二引数が必要なくなる。
//keyof Tを見ていく。keyof Tとして得られる計算式は'name' | 'height' | 'weight'になる。またTは具体的にはDetailedProfileがくるのでそこを代入する。
type MyOmit2  = Pick<DetailedProfile, Exclude<'name' | 'height' | 'weight', 'height'>>;
//MyOmit2の引数としてはDetailedProfileは必要なくなるので削除する。外からやってくるのではなくPickの中で示しているので。
//Excludeを見ていく。第一引数union型から第二引数を除外するという事。今回はheightを削除する。
type MyOmit3  = Pick<DetailedProfile, 'name' | 'weight'>;
//そうするとMyOmitはPickをしてやられる。SimpleProfle = MySmallProfileということになって型が同じということになる。
//パズルを解く感覚。


