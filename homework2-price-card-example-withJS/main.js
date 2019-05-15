fetch('https://msardic.github.io/jsondenemesi/pricecard.json').then(function(res){

return res.json();

}).then(function(returnData){


 let text = "";
returnData.forEach(function(item,i){


// text += "<div>" +
// "<div class='birinci'>"+item.productName+"</div>" +
// "<div class='ikinci'>"+item.productPrice+" "+item.currency+"</div>" +
// "</div>"

text +=

"<div class='col my-5'>"+
"<div class='card colorRed cardContainer shadow-lg'>"+
"<div"+
"class='card-header  text-white cardHeaderSize  d-flex flex-column justify-content-center align-items-center '"+
">"+
"<div"+
"class='col d-flex flex-column justify-content-center align-items-center'"+
">"+
"<span class='h3 font-weight-bold'>"+item.cardName+"</span>"+
"</div>"+
"<div"+
"class='col d-flex justify-content-center align-items-baseline mb-5'"+
">"+
"<span class='mx-2 h4'>"+currency+"</span>"+
"<span class='h1 '>"+item.price+"</span>"+
"<span class='mx-2 h4'> /mo</span>"+
"</div>"+
"</div>"+
"<div class='card-body'>"+
"<ul class='list-group m-3'>"+
"<li class='list-group-item border-0 text-center '>"+
"    <span class='font-weight-bold spanColor'>"+item.userLimit+"</span> users"+
"    included"+
"</li>"+
"<li class='list-group-item border-0 text-center '>"+
"    <span class='font-weight-bold spanColor'>"+item.storageLimit+item.storageLength+"</span> of storage"+
"</li>"+
"<li class='list-group-item border-0 text-center'>"+
"    <span class='font-weight-bold spanColor'>Free</span> Email"+
"    support"+
"</li>"+
"<li class='list-group-item border-0 text-center'>"+
"    <span class='font-weight-bold spanColor'"+
"    >Help center access</span"+
"    >"+
"</li>"+
"</ul>"+
""+
"<div class='d-flex justify-content-center'>"+
"<a href='#' class='btn text-white px-5  border-0'"+
"    ><span class='h5'>Sign up for free</span></a"+
">"+
"</div>"+
"</div>"+
"</div>"+
"</div>"




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

