##考え方
・filterで条件として与えられたテスト関数に通った値のみを返すようにする。
・Booleanオブジェクトを使うと、偽とみなされる値（ 0, -0, null, false, NaN, undefined ,空文字列 ("") ）に対してfalseを返すことができる。
・filterとBooleanを組み合わせることで正の値のみが返ってくるようにする。



