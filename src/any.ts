import axios from 'axios';
export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

//githubからコピーしてきた。
//axios.get('/user?ID=12345').then(function (response) {
//    console.log(response);
//  });
  //axiosのgetメソッドを渡して、その()の引数に、urlを渡すとhttpのgetメソッドを呼ぶことができるというもの。
  //hostはこの例では指定されてない。こうゆう場合はこのアプリケーションをデプロイしたサーバーのホストになる。
  //getでリクエストを投げるとレスポンスが帰ってくる。そのレスポンスをコールバック関数thenの中でレスポンスを受け取れるというのがaxios

//axios.get('https://udemy-utils.herokuapp.com/api/v1/articles?token=token123').then(function (response) {
//      console.log(response);
//  })

//urlをしっかり書かないとエラーになるので気をつける。
//npm run dev src/any.tsで実行する。　Using ts-node version.... で始まるレスポンスが返ってくる。レスポンスに含まれるもの全てが記載されている。
//オブジェクト形式で返ってくる。　responce（変数）が返ってきているのでドキュメントで構造を確認する。
//response schemaをaxiosのgithubの部分で確認できる。
// urlに接続し際に表示で見たarticleのオブジェクトの配列を取得しようと思ったらどう言った属性のデータからレスポンスで取得すればいいのか。
//dataで取得する。data is the response that was provided by the serverと記載されている。
//dataはサーバーによって提供されるものがデータですよというもの。レスポンスの中のデータがidとか書かれたオブジェクトになる。
//responseからデータだけ吸い上げれば良さそう dataだけを吸い上げるようにコマンドを変更する。

//axios.get('https://udemy-utils.herokuapp.com/api/v1/articles?token=token123').then(function (response) {
//  console.log(response.data);
//});

//arickleのオブジェクトが連なっているデータが正常に出力することができる。
//dataを変数データに変えてconsole.logに代入していくようにする。

//axios.get(url).then(function (response) {
//  let data: any;
//  data = response.data;
//  console.log(data);
//});

//これでも実行結果は変わらない。この時dataには: anyとして表示されている。　型がわからないと伝えるためにanyと表示している。
// 実質的に型としてtsにとってそのデータの型が得体の知れないものである時にanyが表示される。推論ができていない。
// tsはあるapi serverから返ってくるレスポンスまで予測できるわけがないから。　any型　型推論のギブアップ宣言。
//anyで型付けをしているが、型がわからないからチェックしないでねと命令しているだけ。tsの世界では望ましくない状態。適切な型をアノテーションしてあげる必要がある。
//そのために人がやるしかない。実際にconsole.logで表示されているデータの構造を分析する。
//このデータは配列である。各要素には,オブジェクトが格納されている。配列型のアノテーションの書き方を指定いるのでかく

// axios.get(url).then(function (response) {
//   let data: object[];
//   data = response.data;
//   console.log(data);
// });

//objectを表現する方法が: object[]
//object[] の中身がなくてもエラーにならないが、中身が決まっているなら型として指定してあげる方がいい。(今回はid title description)
//interfaceを使用する。オブジェクトの各要素を書いて、 それぞれの要素にアノテーションを書いてあげること。

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }//こうすることで具体的なオブジェクトに対する型をオリジナルで独自の構造の型を作成することができる。Articleという独自の型が今回できた。
let data: Article[];//漠然とした中身のわからないオブジェクト型ではなくて、オブジェクトであるその構造が持つ要素まで指定してそう言ったオブジェクトを要素とするデータだといってアノテーションすることができる。
  data = response.data;
  data = [
    {
      id: 1,
      title: "title",
      description:  'description'
    }//今回は自前でオブジェクトを作成してあげる。エラーも出ずに通常通り表示される。
    // どこかが欠けたり、間違えていると波線が出て間違えていることを教えてくれる。 何が間違っているかを教えてくれる。型を宣言しているから教えてくれる。非常に便利。
  ] 
  console.log(data);
});

//Article[]で設定してあげることで、期待に沿った反応が出る。
//any型に戻すとエラーだったものがエラーでなくなる。適切なアノテーションがないとそれに気づかずに開発が進んでしまう。エラーが内容に見えてしまう。
//痛みを感じないからいいように思うが大変なことになるようなことにならないようにanyを使うのは一時的に使うまたは、難しくて今すぐに指定できない場合以外は使用しないこと。
//やむを得ない時以外はanyには依存しないようにすること。しっかりと定義をすること。




