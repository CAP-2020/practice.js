// 配列

const array = [1,2,3];

// console.log(array);     //1,2,3が取得できる。
// console.log(array[1]);  //arrayの2番目が取得できる。→2

const array_2 = [
  ["赤","青","黄"],
  ["緑","紫","黒"]
];

console.log(array_2);        //全ての要素を取得。
console.log(array_2[1][2]);  //1列目→2番目、2列目→3番目を取るから。→黒を取る事になる。




// オブジェクト

const member = {
//'キー' :バリュー
  'name':'本田',
  'height':170,
  'hobby':'サッカー'
};
// => console.log(定数名['key']);  で配列の中のvalueが取得できる。または、
// => console.log(定数名.key);

console.log(member['name']);  //本田
console.log(member.name);     //本田
console.log(member['height']);//170
console.log(member.height);   //170
console.log(member['hobby']); //サッカー
console.log(member.hobby);    //サッカー



// 連想配列（associative array）

const member_2 = {
    '本田':{
      'height':170,
      'hobby' :'soccer',
    },
    '香川':{
      'height':165,
      'hobby' :'soccer'
    }
  };

  console.log(member_2['香川']['height']);
  console.log(member_2.香川.height);

  const member_3 = {
    '1kumi':{
      '本田':{
        'height':170,
        'hobby':'soccer'
      }
    },
    '2kumi':{
      '香川':{
        'heigth':165,
        'hobby':'soccer'
      }
    }
  };

  console.log(member_3['1kumi']['本田']['hobby']);
  console.log(member_3);