export {}

type Pitcher1 =  {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};
// たとえば、Pitcher1を作って、throwingSpeed。これを示す属性と型を指定する。球速なのでnumber型
// Batter1の型は打率なので、同じく、number型。
//この型を使用してそれぞれにオブジェクト型を作成していく。
//それぞれの型にふさわしいobjectを作っていく。まずは、Pitcher。
const DaimajinSasaki: Pitcher1 = { 
  throwingSpeed:154
};

const OtiaiHiromi: Batter1 = { 
  battingAverage : 0.367
};

//OtiaiHiromiにthrowingを入れるとどうなるか。
// const OtiaiHiromi: Batter1 = { 
//   throwingSpeed: 154,
//   battingAverage : 0.367
// }
//throwingSpeedの部分にコンパイルエラーが出る。
//なぜエラーが出たのか。
//throwingSpeedという属性自体が、Batter1には存在しないのでthrowingSpeedを持たせることができない。
//ということは、　大谷選手みたいな打って投げる人を作成できない。そういったオブジェクトを持たせることができない。
//大谷選手のようなオブジェクトを作るにはどうするのか。
//一から型を作るしかにない!!
// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// }
//このように新たな型を作成して、愚直に属性と型を入力する。
//新たなものを使用することで大谷選手みたいな人のデータを登録できるようになる。
// 本当にこんなことをしないといけないのか？
//tsには、もっとスマートな型の定義の方法がある。
//intersection型　既存の型を再利用して、新たな型を定義するということ。
//実質同じ型をintersection型を使用して、スマートに作る。
type TwoWayPlayer = Pitcher1 & Batter1;
//この1行を書くことで、先ほどのTwoWayPlayerと同じ内容を作ることができる。
const OtaniShouhei: TwoWayPlayer = { 
  throwingSpeed: 165,
  battingAverage: 0.286
};
//OtaniShouheiのデータをこれで作ることができるようになった。
//TwoWayPlayerという型を持つ１つのオブジェクトを作ることができた。
//２つの属性を持つのを作ることができた。既存の型を合わせたもの。
//intersectionは既存の型を組み合わせて、新たな型を作れるようになる。
//intersectionと書く必要はなく、&で繋げば、型を合成できる。
//属性を足していくことで新たな型を作れる。
//既存の型を使用することで、メンテナンス性をあげることができる。
//型を作成するときはintersection型を使用できないかを一瞬検討するのが、tsコーダーの必須の習慣となる。


