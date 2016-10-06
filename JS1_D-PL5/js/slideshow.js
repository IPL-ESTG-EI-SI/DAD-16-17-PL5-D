'use strict';
var slider = (function (){
  var maxIndex;
  var imgFolder;
  var currentImg = 1;
  var img = document.getElementById('slider');
  var timer;


  function render(){
    img.src=imgFolder+'/img-'+currentImg+'.jpeg';
  }

  function previous(){
    currentImg--;
    if(currentImg < 1) {
      currentImg = maxIndex;
    }
    render();
  }
  document.getElementById('previous').addEventListener('click',previous);

  function next(){
    currentImg++;
    if(currentImg > maxIndex) {
      currentImg = 1;
    }
    render();
  }
  document.getElementById('next').addEventListener('click',next);

  function start(){
    timer = setInterval(next,2000);
  }
  document.getElementById('restart').addEventListener('click',start);

  function stop(){
    clearInterval(timer);
  }
  document.getElementById('stop').addEventListener('click',stop);

  function init(folder, lastIndex){
    imgFolder = folder;
    maxIndex = lastIndex;
    start();
  }

  return {
    init: init
  };

}());

slider.init('slide_img',13);