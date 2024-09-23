'use strict';

//＊フォルダ名がimagesなので。imageではなく。→images/image000.jpgとなってる。
const images = [
  'images/image000.jpg',
  'images/image001.jpg',
  'images/image002.jpg',
  'images/image003.jpg',
  'images/image004.jpg',
  'images/image005.jpg',
  'images/image006.jpg',
];

let currentIndex = 0;

// メインのidタグを取得。→imgタグで構成。carousel__mainを取得。
const mainImage = document.getElementById('carousel__main');
mainImage.src=images[currentIndex];

for (let [index,image] of images.entries()){
  // console.log(index,image)
  //サムネを作ってmainImageに反映させる！
  // ulタグにli,imgを作って配下に置く。→imgにはメイン画像と一緒な画像を配置。
  const img = document.createElement('img');
  img.src = image;  //for ofで取得したimgタグがimageに当たる。

  const li = document.createElement('li');
  //liにcurrentクラスを付けてcurrent = imageなら画像を表示する。
  if(index === currentIndex){  //for文で取得したimageタグとcurrentIndexが一致したらliにクラスを追加。
    li.classList.add('current');
  }

 //for文の中でクリックイベントを設定。
 //サムネをクリックしたらメイン画像に反映。
 //for文で画像の配列が取得出来てるので。各liタグにイベントが発生。mainImage.src = 
  li.addEventListener('click',() => {
    mainImage.src = image;
    mainImage.classList.remove('active');

    setTimeout(() => {
      mainImage.classList.remove('active');
    },800);

    const thumbnails = document.querySelectorAll('.carousel__thumbnails > li');
    thumbnails[currentIndex].classList.remove('current');  //サムネで今classがついてるなら一旦削除。
    currentIndex = index;
    thumbnails[currentIndex].classList.add('current');   //サムネのcurrentIndexに'current'classをつける。
  });

  //li>imgをappendChildでくっつけて。ulをqueryselectorで取得。ul>li>imgを作る。
    li.appendChild(img);
    document.querySelector('.carousel__thumbnails').appendChild(li);
    }

  const next = document.getElementById('carousel__next');
  next.addEventListener('click',() => {
    let target = currentIndex +1;  
    //currentIndex =配列番号(index) クリックイベントの中で設定されてるので矢印を押すとindex1=2番目の写真が表示される。
    console.log(target);
    if(target === images.length){
      target = 0;  // "target"="images.length"="0" "images.length"は配列番号なので”配列番号が0”となる。
    }
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();  //.clickでサムネをクリックした時の動作
  });

  const prev = document.getElementById('carousel__prev');
  console.log(prev)
  prev.addEventListener('click', () => {
    let target = currentIndex - 1;
    if (target < 0) {
      target = images.length - 1;
    }
    document.querySelectorAll('.carousel__thumbnails > li')[target].click();
  });