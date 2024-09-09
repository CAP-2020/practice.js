// let test = 123;
// // let test = 'テスト';  //これはできない

// test += 123;

// // const //定数
// const test = 123;
// // test = 'テスト';  //const は書き換えができない。
// // test += 123; 　　//const は定義されたものの変更も出来ない。

//動的型付け言語 javascriptは     ... 文字化数字かを自動的に判定。
//静的型付け言語 java,visualBasic ...数字、文字の定義が必要。(int=数字、string=文字)
const test = 123;      //数字
const test2 = 'テスト'  //文字　
//文字か数字か判らない時は。type of...をつける。↓↓↓具体的には。
console.log(typeof test);  //number=数字と判定がconsole.logに出力される。
console.log(typeof test2); //string=文字と判定。 


// console.log(test);

