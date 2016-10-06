'use strict';
var slider = (function(){
  
  var img = $('#slider');
  var timer;
  var imgFolder;
  var lastIndex;
  var currentIndex = 0;

  function previous(){
    currentIndex--;
    if(currentIndex<0){
      currentIndex = lastIndex;
    }
    render();
  }

  function render(){
    img.attr('src',imgFolder+'/img-'+currentIndex+'.jpeg');
  }

  function next(){
    currentIndex++;
    if(currentIndex > lastIndex) {
      currentIndex = 1;
    }
    render();
  }

  function start(){
    if(timer != undefined){
      clearInterval(timer);  
    }
    timer = setInterval(next,2000);
  }

  function stop(){
    clearInterval(timer);
  }

  function init(folder, lastImage){
    imgFolder = folder;
    lastIndex = lastImage;
    start();
  }

  $(function(){
    $('#previous').click(previous);
    $('#next').click(next);
    $('#stop').click(stop);
    $('#restart').click(start);
  })

  return {
    init:init
  }
})();

slider.init('slide_img',13);








