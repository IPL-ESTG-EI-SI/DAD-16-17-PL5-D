'use strict';
(function(){

  $(function(){
    // DOM READY
    var options = {
      minDate: new Date(),
      maxDate: '+1M',
      dateFormat: 'dd-mm-yy'
    };

    $('#date1').datepicker($.datepicker.regional[ "en" ]);
    $('#date3').datepicker();
    $('#date2').datepicker($.extend({},$.datepicker.regional[ "en" ],options));
    $('#date4').datepicker(options);
  });

})();