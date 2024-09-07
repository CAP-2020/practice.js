// オブジェクトを新しく作る時はnew object名();と。newをつけるとobjectを作る事が出来る。
//Mapオブジェクトは連想配列形式で表示。 ・'map.set'で値を追加。  ・'map.get'で中身を表示！


const myMap = new Map();

myMap.set('id' ,3);
myMap.set('name','本田');

console.log(myMap);

//map.getで値を見れるので。
console.log(myMap.get('name'));  //myMapのkey(name)を参照するしてvalue(本田)を表示する事が出来る。

// mapは・key→keys,・value→valuesでそれぞれkeyとvalueを取得できる。

const valueList = myMap.values();
for (value of valueList){   //for of文で配列のvalueを1個づつ取り出す。
  console.log(value);       //valueの => 3,本田 が出力される。
}
