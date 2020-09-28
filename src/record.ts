export {};
 
//record型は２つのgenerics型の型引数を持つ特殊な型。
//Record<K, T> と２つの型引数を受け取る。
//Recordを使用する時に重宝する
//Kにはunion型の型を指定することになる。
type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori';
//unionk型で型３つ連結されているのがあるとする。
//これは都道府県を管理している型だとする。今回は３つにしてる。
//それぞれの都道府県に再起的に共通のデータ型を持たせたい時にRecord型を持たせるのがいい。
//新型コロナウイルスの感染者数を管理するための型を指定したいときその型のプロパティとして、県名（漢字）、感染者数と項目を整理したい時必要になるのは型。
type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
}
//それぞれの型を作ったとする。
//それぞれの県に対して、漢字表記の名前、感染者数を管理するを一括で管理したい時にRecord型を使える。
//データが存在しているとする。　
const covid19Japan = {
  Tokyo: {kanji_name: '東京', confirmed_cases: 1960},
  Chiba: {kanji_name: '千葉',confirmed_cases: 249},
  Tottori: {kanji_name: '鳥取',confirmed_cases: 2},
  Shiga: {kanji_name: '滋賀',confirmed_cases: true}
};
//アノテーションない場合にデータの設定をやってみるとこういう漢字になる。
//このデータはある日のデータになる。適当な数。
//ここでは各県に共通の方のデータを持っている事がわかる。
//そこで、アノテーションを行っていないと、間違って、booleanなどの異なる型を入れてしまった時にコンパイルエラーが出ない。
//きちんとアノテーションをする事がある。どのようにアノテーションをするのが効率がいいのかを考える必要がある。
//愚直にいくと
// const covid19Japan1 :{
//   Tokyo: Covid19InfectionInfo;
//   Chiba: Covid19InfectionInfo;
//   Tottori: Covid19InfectionInfo;
//   Shiga: Covid19InfectionInfo;
// }= {
//   Tokyo: {kanji_name: '東京', confirmed_cases: 1960},
//   Chiba: {kanji_name: '千葉',confirmed_cases: 249},
//   Tottori: {kanji_name: '鳥取',confirmed_cases: 2},
//   Shiga: {kanji_name: '滋賀',confirmed_cases: true}
// };
//というような書き方になる。
//県の数だけアノテーションする事でエラーが出るように型制約を持たせる事ができる。
//ただし同じコードを繰り返し書く負担を軽減したい。
//そこで登場するのがRecordが使用できる。繰り返しの負担が減る。
const covid19Japan2: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: {kanji_name: '東京', confirmed_cases: 1960},
  Chiba: {kanji_name: '千葉',confirmed_cases: 249},
  Tottori: {kanji_name: '鳥取',confirmed_cases: 2},
  // Shiga: {kanji_name: '滋賀',confirmed_cases: true} //PrefecturesにShigaが入っていないと表示され、また、boolean型は入れれないとコンパイルエラーが出る。
  //コンパイルエラーが出るよう制約の設定ができる。
};
//Union型のデータを渡した後、第二引数にこういった構造のデータの型を持たせたい型を一回だけ指定すればいい。
//Record型を入れる事で最低限の導入コストで済んでメンテナンス性の高い書き方ができる。
//同じような構造のデータを複数のメンバーに設定する場合、Record型が大活躍する。


