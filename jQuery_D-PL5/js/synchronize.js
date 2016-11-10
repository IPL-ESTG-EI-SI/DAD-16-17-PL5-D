'use strict';
(function(){
  $(function(){
    var nameInput = $('#name');
    var gradeInput = $('#grade');
    var periodInput = $('#period');

    var nameOutput = $('#nameOutput');
    var gradeOutput = $('#gradeOutput');
    var periodOutput = $('#periodOutput');

    var form = $($('form')[0]);

    nameInput.change(function(){
      nameOutput.text(nameInput.val());
    });

    gradeInput.on('keyup',function(){
      if(gradeInput.val() == undefined || gradeInput.val() == 0){
        gradeOutput.text('Empty');
      }
      gradeOutput.text(gradeInput.val());
    });

    periodInput.change(function(){
      var value = periodInput.val();
      var text = $('option:selected',periodInput).text();
      periodOutput.text(value+' ( '+text+' )');
    });

    form.on('reset',function(){
      nameOutput.text('Empty');
      gradeOutput.text('Empty');
      periodOutput.text('Empty');
    });
  });
})();