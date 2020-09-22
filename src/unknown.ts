export {}

const kansu = (): number => 43;
//実行結果を格納する関数を定義する。
let numberAny: any = kansu();
//あえてany型にする。
let numberUnknown: unknown = kansu();
//unknown型にする。

//numberAnyに10を足してみる。　
let sumAny = numberAny + 10 ;
//エラーが出ない。any型なので。
//let sumUnknown = numberUnknown + 10;
//numberUnknownはコンパイルエラーが出る。object型がunknown（不明）なので足し算はできないかもしれないよというもの。
//もし、コードがjsのコードならnumberUnknownを実行して、numberUnknownが数値じゃなかった場合、runtime中にエラーになる。発見は早くてもプログラムを実行させた時になる。コードを書いている時には発見できない。jsの早期発見ができない。
//それがjsやany型のリスクになる。
//tsのany型でないものだとどうなるか。unknown型がある。
//unknown型をアノテーションしてあげればコーディング中に今みたいに教えてくれる。
//この変数は数字じゃないかもしれないからこの演算をするのは少し乱暴じゃないの？と教えてくれる。
//変数numberUnknownに10を足そうと思ったらどうすべきなのか。
//人間としては数字がnumberUnknownに入っているのがわかっているが、コンパイラーはそこまでポシティブに空気読んでくれない。
//型がunknownだから数値じゃないかもしれないと思うだけの作業になる。
//だが数値の計算自体は実行したいので、そうすべきなのか。
//方法としては、計算する変数の上に、console.log(typeof　変数);を記入してあげる。
//typeofは型を取得することができる。型を取得できるキーワード。
//console.log(typeof numberUnknown);
//npm run dev src/unknown.tsを実行すると　numberと表示される。
//typeof を使用することでnumberUnknownの型がわからないものがわかるようになる。
//今回だとnumber型だということがわかるようになる。

//実際どうするか。 下記のように実行する。
//typeofで型を取得して、それが成立するかどうかをif文で確認を入れる。
if (typeof numberUnknown === 'number'){
  let sumUnknown = numberUnknown + 10;
}
//真になるとif節が必ず実行される。そうすると34行目コードは必ず実行されることになる。
//なぜならこの型はnumber型であることが保証されていることになる。
//numberUnknown + 10が実行される。それはif節があるから。
//実行に関しては、コンパイルエラーにはならない。number型だとifに判断されているから。
//今回だと演算された結果がsumUnknownへ代入されるようになる。

//typeofを使って、ある特定の型であることを確認して、コードを安全に実行させることをtypeガードという。
//主役はunknownだが、型ガードの方が重要。理解しておくこと。
//any型を使用しているとコンパイルエラーにはならないものの、実行時にエラーになるので、
//なるべく限定的に具体的な型を指定することが理想的だが、numberかstringかobject かわからずに一旦フワッと型をつけておきたい時には、すぐにanyではなくunknownをつけておいて、typeofを使って型ガードを使って、型を絞っていきながら、
//型安全なコードを書いておくことが大切。typeofを使ってその型にふさわしい処理を実装することが大切。
//実行時エラーをより多く防ぐことができる。
//あまりunknown型は使用頻度多くないが、覚えておくこと。
