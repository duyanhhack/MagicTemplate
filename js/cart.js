const btn = document.querySelectorAll('.card-btn')
const openCart = document.querySelector('.cart__icon')
const closeCart = document.querySelector('.close__cart')
const cartContent = document.querySelector('.cart__content')
const priceTotal = document.querySelector('.cart__total')
const numberProducts =document.querySelector('.cart__icon span')
const notification = document.querySelector('.alert')

btn.forEach((button) => {
    button.addEventListener('click', (event) =>{
        let btnItem = event.target
        let product = btnItem.parentElement.parentElement.parentElement
        let productImage = product.querySelector('img').src
        let productName = product.querySelector('.product-brand').innerText
        let productP = product.querySelector('.price span').innerText
        let productPrice = parseInt(productP)*1000
        addCart(productImage, productName, productPrice)
    })
})

//------------thêm sản phẩm vào giỏ hàng
addCart = (productImage, productName, productPrice) => {
    var div = document.createElement('div')
    div.classList.add('cart__item')

    div.innerHTML = `
    <img src="${productImage}" alt="">
    <div>
        <h3 class="product-name">${productName}</h3>
        <h3 class="price"><span>${productPrice.toLocaleString('de-DE')}</span> VNĐ</h3>
    </div>
    <div>
        <input type="number" class="quantity" value="1" min="1">
    </div>

    <div>
        <i class="fas fa-trash-alt remove__item"></i>
    </div>
    `

    //-----------Kiểm tra trong giỏ hàng
    var cartItem = document.querySelectorAll('.cart__item')
    for(i=0; i<cartItem.length; i++) {
        var productN = document.querySelectorAll('.product-name')
        if(productN[i].innerText == productName) {
            notification.classList.add('show')
            setTimeout(function(){
                notification.classList.remove('show')
            }, 1500)
            return
        }
    }
    cartContent.appendChild(div)

    cartTotal()
    deleteCart()
    totalQuantityCart()
}

//------------tính tổng giá tiền
cartTotal = () => {
    var cartItem = document.querySelectorAll('.cart__item')
    var totalPrice = 0
    for(i=0; i<cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('.quantity').value
        var productPrice = cartItem[i].querySelector('.price span').innerText
        SinglePrice = inputValue * productPrice
        totalPrice = totalPrice + SinglePrice
    }
    priceTotal.innerHTML = (totalPrice * 1000).toLocaleString('de-DE')
    inputChange()
}

//------------Xóa mặt hàng trong giỏ
deleteCart = () => {
    var cartItem = document.querySelectorAll('.cart__item')
    for(i=0; i<cartItem.length; i++) {
        var remove = document.querySelectorAll('.remove__item')
        remove[i].addEventListener('click', (event) => {
            var cartDelete = event.target
            var cartItemR = cartDelete.parentElement.parentElement
            cartItemR.remove()
            cartTotal()
            totalQuantityCart()
        })
    }
}

//------------Thay đổi số lượng
inputChange = () => {
    var cartItem = document.querySelectorAll('.cart__item')
    for(i=0; i<cartItem.length; i++) {
        var quantity = cartItem[i].querySelector('input')
        quantity.addEventListener('change', () => {
            cartTotal()
            totalQuantityCart()
        })
    }
}

//------------Số lượng hàng trong giỏ
totalQuantityCart = () => {
    var cartItem = document.querySelectorAll('.cart__item')
    var totalNumber = 0
    for(i=0; i<cartItem.length; i++) {
        var inputValue = cartItem[i].querySelector('.quantity').value
        totalNumber = totalNumber + parseInt(inputValue)
    }
    numberProducts.innerHTML = totalNumber
}

//------------Bật tắt giỏ hàng
openCart.addEventListener('click', () => {
    cartOverlay.classList.add('show')
})
closeCart.addEventListener('click', () => {
    cartOverlay.classList.remove('show')
})