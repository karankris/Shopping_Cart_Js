function validateLoginForm(){
    var ph = document.getElementById("ph").value;
    var user = document.getElementById('uname').value.trim();
    var lim = document.getElementById("limit").value;
    var discription = document.getElementById("dis").value;
    var file_name = document.getElementById("op")
    var phformat =/\d+/g;
    var lformat =/\d+/g;
    var titleFlag =0;
    var descFlag = 0;
    var ProdCount =0;
    var costFlag = 0;
    var uploadFlag = 0;
     
    if(discription)
    {
    if(discription.length>=10)
    {
      localStorage.setItem('notes', discription );
      document.getElementById("dis").style="border:3px solid green;"
      document.getElementById("derror").style="display:none;"
      document.getElementById("dvalid").style="display:none;"
      document.getElementById("lgod").style="display: inline-block;"
      descFlag = 1;

    }
    else{
      document.getElementById("dis").style="border:3px solid red;"
      document.getElementById("dvalid").style="display:block; color:red"
      document.getElementById("derror").style="display:none;"
      document.getElementById("lgod").style="display: none;"
      descFlag =0;
    }
    }
    else{
    document.getElementById("dis").style="border:3px solid red;"
    document.getElementById("derror").style="display:block; color:red"
    document.getElementById("dvalid").style="display:none;"
    document.getElementById("lgod").style="display: none;"
    descFlag=0;
    }
     
if(lim)
{
  if(lformat.test(lim)==true && lim>0)
  {
    localStorage.setItem('lim',lim);
  document.getElementById("limit").style="border:3px solid green;"
  document.getElementById("lerror").style="display:none;"
  document.getElementById("lvalid").style="display:none;"
  document.getElementById("lgol").style="display: inline-block;"
  ProdCount =1;
  }
  else{
document.getElementById("limit").style="border:3px solid red;"
document.getElementById("lerror").style="display:none;"
document.getElementById("lvalid").style="display:block;color:red;"
document.getElementById("lgol").style="display: none;"
ProdCount =0;
  }
}
else{
  document.getElementById("limit").style="border:3px solid red;"
  document.getElementById("lerror").style="display:block; color:red"
  document.getElementById("lvalid").style="display:none;"
  document.getElementById("lgol").style="display: none;"
  ProdCount =0;
}

 if(ph){
 if(phformat.test(ph)==true && ph>0)
 {
  localStorage.setItem('cash',ph);
  document.getElementById("ph").style="border:3px solid green;"
  document.getElementById("pherror").style="display:none;"
  document.getElementById("phvalid").style="display:none;"
  document.getElementById("lgo2").style="display: inline-block;"
  costFlag = 1;
 }
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("phvalid").style="display:block;color:red"
document.getElementById("pherror").style="display:none;"
document.getElementById("lgo2").style="display: none;"
costFlag = 0;
}
}
else{
document.getElementById("ph").style="border:3px solid red;"
document.getElementById("pherror").style="display:block;color:red"
document.getElementById("phvalid").style="display:none;"
document.getElementById("lgo2").style="display: none;"
costFlag = 0;
}
if(user)
{
if(user.length>=3)
{
  localStorage.setItem('proname',user);
  document.getElementById("uname").style="border:3px solid green;"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("uvalid").style="display:none;"
  document.getElementById("lgo3").style="display: inline-block;"
  titleFlag = 1;
}
else{
  document.getElementById("uname").style="border:3px solid red;"
  document.getElementById("uvalid").style="display:block; color:red"
  document.getElementById("uerror").style="display:none;"
  document.getElementById("lgo3").style="display: none;"
  titleFlag=0;
}
}
else{
document.getElementById("uname").style="border:3px solid red;"
document.getElementById("uerror").style="display:block; color:red"
document.getElementById("uvalid").style="display:none;"
document.getElementById("lgo3").style="display: none;"
titleFlag=0;
}

const redirectvalue = document.getElementById('redirect');
redirectvalue.addEventListener('click', function () {
                      if(titleFlag==1 && descFlag==1 && costFlag == 1 && ProdCount==1 ) {            
                window.location.href = "./files/Proview.html"; 
            }        
        });
}
// if(titleFlag==1 && descFlag==1 && costFlag == 1 && ProdCount==1 ){
//   window.location.href = "./files/Proview.html";
// }
// }

function ValidImage(event)
{
  console.log('------event------',event);
  let extension=event.target.files[0].type.split('/');
  var exten=extension[1];
 if(extension)
 {
  if(exten=='jpg' || exten=='png' ||exten=='jpeg'){   
  var output1 = document.getElementById('output');
  file_name = event.target.files[0];
  var reader= new FileReader();
  reader.onload = function() {
    var dataURL = reader.result;
    output1.src = dataURL;
    output1.onload = function() {
      URL.revokeObjectURL(output1.src) 
      localStorage.setItem('select_image', dataURL);
    }
  };
  reader.readAsDataURL(file_name);
  document.getElementById("op").style="border:3px solid green;"
  document.getElementById("imgvalid").style="display:none;"
  document.getElementById("imgerror").style="display:none;"
  document.getElementById("lgoim").style="display: inline-block;"
  }
  else{
    document.getElementById("op").style="border:3px solid red;"
    document.getElementById("imgvalid").style="display:block; color:red"
    document.getElementById("imgerror").style="display:none;"
    document.getElementById("lgoim").style="display: none;"
  }
 }
  else{
    document.getElementById("op").style="border:3px solid red;"
    document.getElementById("imgerror").style="display:block; color:red"
    document.getElementById("imgvalid").style="display:none;"
    document.getElementById("lgoim").style="display: none;"
  }


}
  



