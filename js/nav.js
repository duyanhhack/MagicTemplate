//----------------Tạo menu
const createMenu = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="navbar-left">
        <p class="menu-toggle">
            <i id="bars" class="fas fa-bars"></i>
        </p>
        <div class="over-nav">
        <i id="times" class="fas fa-times"></i>
            <ul class="main-nav">
                <li class="item side-search">
                    <input type="text" class="search-box" placeholder="Tìm kiếm....">
                    <button class="btn-search"><i class="fas fa-search"></i></button>
                </li>
                <li class="item">
                    <a href="./male.html" class="menu-title">nam</a>
                </li>
                <li class="item">
                    <a href="./female.html" class="menu-title">nữ</a>
                </li>
                <li class="item">
                    <a href="./accessory.html" class="menu-title">phụ kiện</a>
                </li>
                <li class="item">
                    <a href="./saleoff.html" class="menu-title">sale off</a>
                </li>
            </ul>
        </div>
        </div>
        <div class="logo">
            <a href="./index.html"><span>Magic</span><span class="image-logo"></span><span>Store</span></a>
        </div>
        <div class="navbar-right">
            <div class="search">
                <input type="text" class="search-box" placeholder="Tìm kiếm....">
                <button class="btn-search">search</button>
            </div>
            <a class="cart__icon">
                <p>giỏ hàng</p>
                <span>0</span>
                <i class="fas fa-shopping-cart"></i>
            </a>
            <span class="user-image">
                <img src="./images/user.png" alt="">

                <div class="user">
                    <p class="text">Đăng nhập để đặt hàng</p>
                    <span class="account-name"></span>
                    <a href="../signup.html" class="btn-inout">đăng nhập/xuất</a>
                </div>
            </span>
        </div>
        
        `
}
createMenu();

//------------Tạo giỏ hàng
const cartOverlay = document.querySelector('.cart__overlay')
const createCart = () => {
    cartOverlay.innerHTML = `
    <div class="cart">
        <i class="fas fa-times close__cart"></i>
        <h2>Giỏ hàng của bạn</h2>
        <div class="cart__content">
        
        </div>

        <div class="cart__footer">
            <h3>Tổng: <span class="cart__total">0</span> VNĐ</h3>
            <button class="pay__cart">Thanh Toán</button>
        </div>
    </div>
    `
}
createCart();

showMenu = () => {
    menuSide = document.querySelector('.over-nav');
    bars = document.querySelector('#bars');
    times = document.querySelector('#times')
    bars.addEventListener('click', () => {
        menuSide.classList.add('show');
    })
    times.addEventListener('click', () => {
        menuSide.classList.remove('show');
    })
}
showMenu();

showLoginLogout = () => {
    userBtn = document.querySelector('.user-image');
    table = document.querySelector('.user');
    userBtn.addEventListener('click', () => {
        table.classList.toggle('show');
    })
}
showLoginLogout();