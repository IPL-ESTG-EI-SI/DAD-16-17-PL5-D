'use strict';
(function(){

  $(function(){

    $('#actionBar button:first-child').click(function(){
      $('#secret').toggleClass('invisible');
    });

    $('#actionBar button:nth-child(2)').on('mouseenter',function(){
      $('#secret').removeClass('invisible');
    });

    $('#actionBar button:last-child').on('mouseenter',function(){
      $('#secret').addClass('invisible');
    });

    



  });

})();