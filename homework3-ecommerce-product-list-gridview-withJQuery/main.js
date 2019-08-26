$(function () {
    $.getJSON("https://msardic.github.io/jsondenemesi/ecommerce.json",
        
    function (result) {
            
        
        // $( "<p>"+result[0].productName+"</p>" ).appendTo( ".row" );
      
        $.each( result, function( i, item ) {
            $( ".row").append('<div class="col d-flex flex-column"> <a href="#"> <div class="slideContainer"> <img class="imageSize imagePosition1" src="'+item.productImg[0]+'" alt="image first"/> <img class="imageSize imagePosition2" src="'+item.productImg[1]+'" alt="image second"/> <a href="#" ><div class="slide d-flex align-items-center justify-content-center" > <div class="mb-1">add to cart</div></div></a > <div class="btnYPosition1 d-flex flex-column justify-content-center align-items-center" > <button type="button" data-toggle="tooltip" data-placement="top" title="Quick View" class="border-0 roundedItem d-flex flex-column justify-content-center align-items-center" > <i class="far fa-eye"></i> </button> </div><div class="btnYPosition2 d-flex flex-column justify-content-center align-items-center" > <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Wishlist" class="border-0 roundedItem d-flex flex-column justify-content-center align-items-center" > <i class="fas fa-shopping-bag "></i> </button> </div><div class="btnYPosition3 d-flex flex-column justify-content-center align-items-center" > <button type="button" data-toggle="tooltip" data-placement="top" title="Add to Basket" class="border-0 roundedItem d-flex flex-column justify-content-center align-items-center" > <i class="fas fa-shopping-cart"></i> </button> </div></div></a> <div class="itemSpec d-flex flex-column justify-content-center align-items-center" > <div class="itemName">'+item.productName+'</div><div class="itemPrice">'+item.currency+' '+item.productPrice+'</div></div></div>');
            
    
        });
    
            }
      
    )
        
    });




















































