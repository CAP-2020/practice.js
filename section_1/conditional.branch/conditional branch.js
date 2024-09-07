//conditional branch = 条件分岐;


// if文

// if(条件){
// 　条件がtrueなら実行
// }else{
// 条件がfalseなら実行
//}

const height = 91;

//height=90cmを判定。
// if (height === 90){
//   console.log('身長は' + height + 'cmです');
// }else{
//   console.log('身長は' + height + 'cmです！')
// };

// リファクタリング
// 90cm以上はこちら
if (height >= 91){   //const height=91なので。height=91のこちらが合致。
  console.log('身長は' + height + 'cmです');
};
// 90cm以下はこちら
if (height <= 90){   //const height = 91なので。これは合致しない。
  console.log('身長は' + height + 'cmになります');
};
// 90ではない時に判定。
if (height !==90){  //!==　！は否定。==で型も判定。
  console.log('身長は' + height + 'cmになっております')
};



//信号機の色で進行可能かを判定
const signal = 'blue';

if(signal === 'red'){
  console.log('止まれ')
}else if(signal === 'yellow'){
  console.log('一旦停止');
}else{
  console.log('進んでも良い');
}

// 信号機が青で、スピード60キロ以上ならスピード違反と表示。
const speed = 61;

if (signal === 'blue'){
  if(speed >= 60){
    console.log('スピード違反！');
  }
};



// 論理演算子  and,or

const signal_1 = 'red';
const signal_2 = 'blue';

// andの場合！
if(signal_1 === 'red' && signal_2 === 'blue'){  //両方の条件を満たす場合に出力。
  console.log('赤と青');
};

if(signal_1 === 'red' || signal_2 === 'blue'){  //片方の条件を満たす場合に出力。
  console.log('赤');
};

// 三項演算子   < 条件　? true:false >  ...if/elseと似た使い方をする。
// <使い方> constで判定値を定義。三項演算子で条件をかけて真偽を判定する。

const score = 80;

const comment = score >= 80 ? 'good' : 'not good';  //scoreが80
console.log(comment);