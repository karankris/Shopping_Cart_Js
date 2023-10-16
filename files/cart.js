function bill()
{
    document.addEventListener('DOMContentLoaded', function() {
        var selectedImageSrc = localStorage.getItem('select_image');
        if (selectedImageSrc) {
            var imgElement = document.getElementById('photo'); 
            imgElement.src = selectedImageSrc;  
        }
    });
    var title = localStorage.getItem('proname');
    var pname='';
    pname=title.charAt(0).toUpperCase()+title.slice(1).toLowerCase();
    document.getElementById('prod').innerHTML= pname;


    var icmoney = localStorage.getItem('icash');
    document.getElementById('Finalprice').innerHTML=icmoney;


    var piece = localStorage.getItem('cash');
    document.getElementById('Finalcost').innerHTML=piece;

    var fwrite = localStorage.getItem('notes');
    document.getElementById('Finalline').innerHTML=fwrite;
}
bill();

function placeorder()
{
    alert("Your order had been placed successfully")
}