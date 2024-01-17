var home = document.getElementById("home-btn")
var shop = document.getElementById("shop-btn")
var delivery = document.getElementById("delivery-btn")
var app = document.getElementById("app-btn")
var about = document.getElementById("about-btn")
var contact = document.getElementById("contact-btn")
var scrollFunct = (link,e)=>{
    link.onclick = ()=>{
            window.scrollTo(0,e)
    }
}
scrollFunct(home,0);
scrollFunct(shop,800);
scrollFunct(delivery,1400);
scrollFunct(app,2050);
scrollFunct(about,2800);
scrollFunct(contact,3000);

// shop.onclick = ()=>{
//     console.log("abc");
//         window.scrollTo(0,800)
// }