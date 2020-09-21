import axios from 'axios';
export {};

let url: string = 'udemy-utils.herokuapp.com/api/v1/articles?token=token123';

//githubからコピーしてきた。
//axios.get('/user?ID=12345').then(function (response) {
//    console.log(response);
//  });
  //axiosのgetメソッドを渡して、その()の引数に、urlを渡すとhttpのgetメソッドを呼ぶことができるというもの。
  //hostはこの例では指定されてない。こうゆう場合はこのアプリケーションをデプロイしたサーバーのホストになる。
  //getでリクエストを投げるとレスポンスが帰ってくる。そのレスポンスをコールバック関数thenの中でレスポンスを受け取れるというのがaxios

  axios.get('udemy-utils.herokuapp.com/api/v1/articles?token=token123').then(function (response) {
      console.log(response);
  })
