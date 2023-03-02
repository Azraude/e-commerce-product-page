let carts = document.querySelectorAll('.cart');
let cart_container= document.querySelector('.cart-preview');
let preview_thumbnails = document.querySelector('.preview-item');
let thumbnail_item=document.querySelectorAll('.thumbnail-item');
let cart_body = document.querySelector('.cart-body');
let amount_number = document.querySelector('.amount-number');
let minus= document.querySelector('.minus');
let plus = document.querySelector('.plus');
let main_pic = document.querySelector('.main-pic');
let picture = document.querySelectorAll('.main-pic');
let add_to_cart = document.querySelector('.add-to-cart');
let count_article= document.querySelector('.count_article');
let count_article_mb= document.getElementById('count_article_mb');
let delete_cart=document.querySelector('.delete');
let prev = document.querySelector('.prev-wrapper');
let next = document.querySelector('.next-wrapper');
const lightbox = document.querySelector('.lightbox-container');
const menuBtn = document.querySelector('.menu-icon');
const navItems = document.querySelector('.nav-items');
const close_btn = document.querySelector('.close-menu-icon');
const close_lightbox = document.querySelector('.close');

menuBtn.addEventListener('click', function () {
  navItems.classList.toggle('open');
});
close_btn.addEventListener('click', function () {
    navItems.classList.toggle('open');
});

main_pic.addEventListener('click', function () {
    if (window.innerWidth > 700) {
    lightbox.classList.toggle('active');
    }

});
close_lightbox.addEventListener('click', function () {
    lightbox.classList.toggle('active');
  });
carts.forEach(function(cart) {
    cart.addEventListener('click', function() {
      let cart_container = document.querySelector('.cart-preview');
      cart_container.classList.toggle('active');
      cart_container.classList.toggle('hidden');
    });
  });

  const styles = window.getComputedStyle(main_pic);
  const image = styles.backgroundImage;
  const url = image.slice(140, -7);
  let currentIndex =image.slice(161, -6);
  
  prev.addEventListener('click',function(){
      if(currentIndex == 1){
          currentIndex = 4;
      } else {
          currentIndex--;
      }
      const newUrl= url + currentIndex + '.jpg';
      main_pic.style.backgroundImage = `url(${newUrl})`;
  });
  next.addEventListener('click',function(){
      if(currentIndex == 4){
          currentIndex = 1;
      } else {
          currentIndex++;
      }
      const newUrl= url + currentIndex + '.jpg';
      main_pic.style.backgroundImage = `url(${newUrl})`;
  });
  

thumbnail_item.forEach(item => {
    item.addEventListener('click',function(e){
    let getItemBgImg = './' + e.target.style.backgroundImage.slice(5, -16) + '.jpg';
    picture.forEach(pic => {
        pic.style.backgroundImage = `url(${getItemBgImg})`;
      });
    })
})

minus.addEventListener('click',function(){
    let amount = amount_number.innerHTML;
    amount_number.innerHTML = parseInt(amount) - 1;
    if(amount_number.innerHTML <= 0){
        amount_number.innerHTML = 0;
        add_to_cart.classList.add('disabled')
    }
})

plus.addEventListener('click',function(){
    let amount = amount_number.innerHTML;
    amount_number.innerHTML = parseInt(amount) + 1;
    add_to_cart.classList.remove('disabled')
})

add_to_cart.addEventListener('click',function(){
    if(amount_number.innerHTML >= 1){
        cart_body.innerHTML = `
        <div class="cart-group">
        <div class="img-cart"><img src="images/image-product-1-thumbnail.jpg" alt=""></div>
        <div class="description-cart">Fall Limited Edition Sneakers $125 x ${amount_number.innerHTML}<span>$${125*amount_number.innerHTML}</span></div>
        <div class="delete"><img src="images/icon-delete.svg" alt="" onClick="Delete()"></div>
      </div>
      <button class="btn-checkout">Checkout</button>
        `
        count_article.innerHTML=amount_number.innerHTML;
        count_article_mb.innerHTML=amount_number.innerHTML;
        count_article.style.display='block';
        count_article_mb.style.display='block'; 
    }
    else{
        cart_body.innerHTML = `<p>Your cart is empty.</p>`
        count_article.style.display='none';
        count_article_mb.style.display='none';    }
})


function Delete(){
    cart_body.innerHTML = `<p>Your cart is empty.</p>`
    count_article.style.display='none';

}


