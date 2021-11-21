const createFooter = () => {
    let footer = document.querySelector('footer');
    footer.innerHTML = `
    <div class="upper">
            <div class="footer-logo">
                <img src="./images/logo-big-black.png" alt="">
            </div>
            <div class="footer-menu">
                <ul>
                    <li><a href="#">nam</a></li>
                    <li><a href="#">áo nam</a></li>
                    <li><a href="#">quần nam</a></li>
                    <li><a href="#">giày nam</a></li>
                    <li><a href="#">phụ kiện nam</a></li>
                </ul>
                <ul>
                    <li><a href="#">nữ</a></li>
                    <li><a href="#">áo nữ</a></li>
                    <li><a href="#">quần nữ</a></li>
                    <li><a href="#">váy / đầm</a></li>
                    <li><a href="#">giày nữ</a></li>
                </ul>
                <ul>
                    <li><a href="#">giày</a></li>
                    <li><a href="#">giày thể thao nam</a></li>
                    <li><a href="#">giày thể thao nữ</a></li>
                    <li><a href="#">giày da</a></li>
                    <li><a href="#">boots</a></li>
                </ul>
                <ul>
                    <li><a href="#">phụ kiện</a></li>
                    <li><a href="#">đồng hồ nam/nữ</a></li>
                    <li><a href="#">túi xách</a></li>
                    <li><a href="#">ví da</a></li>
                </ul>
            </div>
            <div class="form">
                <p>Nhận thông báo từ chúng tôi qua email khi có chương trình sale và thông tin về các mẫu mới mới nhất!</p>
                <input type="email" class="email" placeholder="Nhập email của bạn">
                <button><i class="far fa-envelope"></i></i></button>
            </div>
        </div>
        <div class="lower">
            <div class="about">
                <p>về chúng tôi</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse obcaecati similique 
                    dolores nesciunt eius amet corporis quos excepturi ducimus ipsa placeat a error 
                    maiores laboriosam repellendus porro tenetur ut, repudiandae praesentium, ipsam 
                    quam provident beatae repellat? Totam dignissimos voluptatibus dolorem facilis 
                    consequatur sed nobis, doloribus fugiat hic qui veniam quos cum sequi! Tenetur 
                    minima voluptatum, laborum atque totam quidem reiciendis eveniet, incidunt ea 
                    architecto commodi obcaecati suscipit sapiente modi? Asperiores odit nihil dolores 
                    dolorum quod explicabo autem pariatur nemo voluptatem necessitatibus ullam quasi 
                    non nulla doloribus voluptate quam, eaque nesciunt fuga expedita debitis assumenda 
                    ipsum minima facilis? Expedita, ipsa nihil.
                </p>
            </div>
            <div class="social">
                <a href="http://www.facebook.com">facebook</a>
                <a href="">instagram</a>
            </div>
        </div>
        <div class="deepdown">
            made by magic mind
        </div>`
}
createFooter();