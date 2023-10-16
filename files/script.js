function ProductDis(){
  document.addEventListener('DOMContentLoaded', function() {
    var selectedImageSrc = localStorage.getItem('select_image');
    if (selectedImageSrc) {
        var imgElement = document.getElementById('im'); 
        imgElement.src = selectedImageSrc;  
    }
});
  var title = localStorage.getItem('proname');
  var pname='';
  pname=title.charAt(0).toUpperCase()+title.slice(1).toLowerCase();
  document.getElementById('view').innerHTML= pname;
  var note = localStorage.getItem('cash');
  document.getElementById('cost').innerHTML=note;
  var write = localStorage.getItem('notes');
  var max_letter =20;
  if(write.length>max_letter) {
    write = write.substring(0,max_letter)+'....';
    document.getElementById('line').innerHTML=write;
  }
  else{
    document.getElementById('line').innerHTML=write;
  }
  
  }
  ProductDis()

 function ProductCalculatePlus(){
  var actualcost = localStorage.getItem('cash');
   var lim = localStorage.getItem('lim');
   var productcount = document.getElementById('count').value;
   var limitcount=parseInt(lim);
  
  if( productcount<limitcount)
  {
  var inc = parseInt(productcount)+1;
  var money = actualcost*inc;
  localStorage.setItem('icash',money);
  document.getElementById('cash').innerHTML = money;
  document.getElementById('count').value = inc; 
  document.getElementById("Max").style="display:none"
  document.getElementById("Max1").style="display:none"
  }
  else{ 
      document.getElementById("Max").style="display:block;color:red"
      document.getElementById("Max1").style="display:none"
    }
 }
 function ProductCalculateMinus(){ 
  var actualcost = localStorage.getItem('cash');
    var productcount = document.getElementById('count').value;
    if(productcount>1)
    {
  var dec = parseInt(productcount)-1;
  var money = actualcost*dec;
  localStorage.setItem('icash',money);
  document.getElementById('cash').innerHTML = money;
  document.getElementById('count').value = dec; 
  document.getElementById("Max").style="display:none"
  document.getElementById("Max1").style="display:none"
    }
    else{
      document.getElementById("Max1").style="display:block;color:red"
      document.getElementById("Max").style="display:none"
    }
  }

 