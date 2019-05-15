fetch('https://msardic.github.io/jsondenemesi/multihover.json').then(function(res){

return res.json();

}).then(function(returnData){


 let text = "";
returnData.forEach(function(item,i){


// text += "<div>" +
// "<div class='birinci'>"+item.productName+"</div>" +
// "<div class='ikinci'>"+item.productPrice+" "+item.currency+"</div>" +
// "</div>"

text +=

'<div class="col-md-4">'+
'<div class="hoverEffectContainer my-2">'+
'<div class="upside transform"></div>'+
'<div class="downside transform"></div>'+
'<div class="imageContainer">'+
'<img class="resim" src="'+item.img+'" alt="">'+
'</div>'+
'<div class="topRightBar d-flex flex-column justify-content-center align-items-center">'+
'<a href="#"> <div class="upsideButton d-flex justify-content-center align-items-center"><i class="fa fa-search"></i></div></a>'+
'<a href="#"><div class="downsideButton d-flex justify-content-center align-items-center"><i class="fa fa-link"></i></div></a>'+
'</div>'+
'<div class="textAnimation">'+item.name+'</div>'+
'</div>'+
'</div>'



});
document.getElementsByClassName("row")[0].innerHTML = text;



//document.write(returnData.ecommerce[0].productName);

// let text = "";
//  for (let i = 0; i < returnData.ecommerce.length; i++) {

//    text += "<li>"+returnData.ecommerce[i].productName+"</li>";
// }
// document.getElementsByClassName("deneme")[0].innerHTML = text;



///////////////////////////////

// const deneme = returnData.ecommerce[1].productImg[0];

// const test = document.getElementsByClassName('test')[0];

// test.insertAdjacentHTML("afterbegin", `<img src="${deneme}" alt="">` );






















































//bu satırın altına inme parantez dışına çıkma.!!
})

