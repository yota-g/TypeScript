export {}

//let value = 1 ;
//numberとstringを設定できるvalueにしていきたい。
//value = 'foo';
//型推論でvalueがnumber型であると行ってコンパイルエラーを出してくる。
//型推論が働くことでvalueがnumber型になってしまう。
//そうすることでコンパイルエラーが出る。
//やりたいことが実現できなくなる。numberとstringの格納をしたい時どうするか。
//こんな時に使用できるのは、union型。
//union型は欲張りの型で、あるデータの型を指定する時に、この型とこの型を使用したいなどと指定できる。
// number型のデータを持たせて、string型のデータも持たせたい時に使用できるようになる。
let value: number | string = 1;
//valueの型がnumberのこともあればstringの時もあるよという風に書いている
//それを | をorの意味として使用して、指定してあげている。　和集合の型を指定できる。
value = 'foo';
// そうすることでエラーが消える。
//これがunion型 tsではよく使うので覚えておくように。　








