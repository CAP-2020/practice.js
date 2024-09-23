'use strict';

const tabLabels = document.querySelectorAll('.tab__label li a');
// console.log(tabLabels);

const tabContents = document.querySelectorAll('.tab__content')
// console.log(tabContents);

// tabLabels配列を取得し、クリックイベントを設定。activeクラスを調整する。
tabLabels.forEach((clickedLabel) => {
  clickedLabel.addEventListener('click',(e) => {
    e.preventDefault();

    
    tabLabels.forEach(label=> {
      label.classList.remove('active');
    });
    clickedLabel.classList.add('active');

    // tabContentsもクリックイベントを設定。activeクラスを一旦消して、つける。
  tabContents.forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(clickedLabel.dataset.id).classList.add('active');
  });

});