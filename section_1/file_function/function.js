// 関数の形式
// function test (引数){  //
//   // 戻り値
//   return 戻り値
// };

// <①インプット引数なし・アウトプットなし>
function test(){         
  console.log('テ〜スト');
};

test();                 //①関数呼び出しtest();で関数内のconsole.logが実行されている！


// <②インプット引数あり・アウトプット戻り値なし>

// function getComment(string){
//   console.log(string);
// }
// getComment('コメント！');  //出力 => コメント

// もしくは定数と組み合わせる
const commet = 'コメント';
const commet_2 = 'コメント2'

function getComment(string){  //引数と処理は合わせないとエラー。
  console.log(string);
};

getComment(commet);    //コメント
getComment(commet_2);  //コメント2

// <③インプット引数なし・アウトプット戻り値あり>
function getNumberOfComment(){
  return 5;
}

console.log(getNumberOfComment());
const NumberOfComment = getNumberOfComment();
console.log(NumberOfComment);

// <④インプット引数2つあり・アウトプットあり>

function sumPrice(int1,int2){
  int3 = int1 + int2;
  return int3;
};

const total = sumPrice(3,5);  
console.log(total);  
//console.logでtotalを呼び出した時に。sumPriceの引数(3,5)が参照される。
// sumPrice(3,5)はfunction内のint1,int2に引き継がれ
// int3 = int1 + int2 =3 + 5 = 8 ;が導かれる。
// return int3 は「この関数の結果として int3 の値を返す」