'use strict';
(function(){
	var name = document.getElementById('name');
  var grade = document.getElementById('grade');
  var period = document.getElementById('period');
  var nameOutput = document.getElementById('nameOutput');
  var gradeOutput = document.getElementById('gradeOutput');
  var periodOutput = document.getElementById('periodOutput');
  var form = document.getElementsByTagName('form')[0];

  name.addEventListener('change',function(){
    nameOutput.textContent = name.value;
  });

  grade.addEventListener('keyup',function(){
    if(grade.value == undefined || grade.value == ''){
      gradeOutput.textContent = 'Empty'
    }else {
      gradeOutput.textContent = grade.value;  
    }
    
  });

  period.addEventListener('change',function(){
    var selectedValue = period.value;
    var selectedText = period.options[period.selectedIndex].textContent;
    periodOutput.textContent = selectedValue + " (" + selectedText + ")";
  });

  form.addEventListener('reset',function(){
    nameOutput.textContent = 'Empty';
    gradeOutput.textContent = 'Empty';
    periodOutput.textContent = 'Empty';
  });
	

})();
