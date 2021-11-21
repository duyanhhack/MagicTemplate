// slider
$('#more-like-this').owlCarousel({
    loop:true,
    margin:30,
    autoplay:true,
    dots: false,
    autoplayHoverPause:true,
    autoplayTimeout: 2500,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        510: {
            items: 2,
            nav: false,
            margin: 30,
        },
        630: {
            items: 3,
            nav: false,
            margin: 10
        },
        992: {
            items: 4,
            nav: false
        }
    }
})

const productImages = document.querySelectorAll('.product-images img')
const productImageSlide = document.querySelector('.image-slider')

let activeImageSlide = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlide].classList.remove('active');
        item.classList.add('active');
        productImageSlide.style.backgroundImage = `url('${item.src}')`;
        activeImageSlide = i;
    })
})

// toggle size buttons
const sizeBtns =document.querySelectorAll('.size-radio-btn')
let checkedBtn = 0;

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
        sizeBtns[checkedBtn].classList.remove('check');
        item.classList.add('check');
        checkedBtn = i;
    })
})