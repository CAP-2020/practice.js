// for文は繰り返し文。　for ,for/in ,for of があるが for , for ofがより使われている。

const scores = [10,20,30];

//for of〜は（one of them）=> (単数　of 複数)の形式で表すと配列を取得できる。
// * for of〜は配列などのデータを取りたい時はコレを使う。


for (score of scores){
  console.log(score)
};


// for文  => for (初期値; 繰り返す条件式; 増減++;){}で表す。　　＊ 繰り返す回数を決めたい場合はこれを使う

for (let i = 0; i < 10; i++){  // 0~　10より少ない数をconsole.logに表示。
  console.log(i);
};

//switch  if文でも書ける。
//breakが無いと処理がスルーしてcase1で止めたくても止まらない。braek必須。

const data = 1;

switch(data){
  case 1:
    console.log('1です');
    break;
  case 2:
    console.log('2です');
    break;
  case 3:
    console.log('3です');
    break;
 default:
    console.log('1~3ではありません');
    break;
};

if(data === 1){
  console.log('1です');
};
if(data === 2){
  console.log('2です');
};
if(data === 3){
  console.log('3です！');
};
if(data > 3){
  console.log('1-3ではありません');
};