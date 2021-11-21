const productContainer = document.querySelector('.product-container');

Products.forEach(product => {
    var realPrice = product.price * 2
    productContainer.innerHTML += `
    <div class="product-card" data-tags="${product.tags}">
        <div class="product-image">
            <span class="offer">50% Off</span>
            <img src="./images/${product.image}" class="product-thumb" alt="">
            <div class="btn-container">
                <a class="card-btn btn">add to cart</a>
                <a href="./product-detail.html" class="view-btn btn">view</a>
            </div>
        </div>
        <div class="product-info">
            <h2 class="product-brand">${product.name}</h2>
            <p class="product-short-des">${product.des}</p>
            <span class="price"><span>${product.price.toLocaleString('de-DE')}</span> VNĐ</span><span class="real-price">${realPrice.toLocaleString('de-DE')} VNĐ</span>
        </div>
    </div>`
});
const filters = document.querySelectorAll('.filter-btn');

filters.forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        let id = filterBtn.getAttribute('id');
        let productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            if(card.getAttribute('data-tags').includes(id)){
                card.classList.remove('hide');
            }else{
                card.classList.add('hide');
            }
        })
        filters.forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
    })
})