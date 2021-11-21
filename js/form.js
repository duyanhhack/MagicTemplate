const submitBtn = document.querySelector('.submit-btn');
const name = document.querySelector('#name') || null;
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const repassword = document.querySelector('#repassword') || null;
const number = document.querySelector('#number') || null;
const tac = document.querySelector('#terms-cond') || null;
const notification = document.querySelector('#notification') || null;

submitBtn.addEventListener('click', () => {
    if(number != null){ 
        // signup page
        if(name.value.length < 5){
            showAlert('Tên tối thiểu phải có 5 kí tự');
        } else if(!email.value.length) {
            showAlert('Bạn hãy nhập email')
        } else if(password.value.length < 8){
            showAlert('Mật khẩu cần ít nhất 8 kí tự')
        } else if(repassword.value != password.value){
            showAlert('Bạn cần nhập hai mật khẩu giống nhau')
        } else if(!number.value.length){
            showAlert('Bạn cần nhập số điện thoại')
        } else if(!Number(number.value) || number.value.length < 10){
            showAlert('Bạn cần nhập số điện thoại hợp lệ')
        } else if(!tac.checked){
            showAlert('Bạn cần đồng ý với điều khoản dịch vụ của chúng tôi')
        }
    } else { 
        // login page
        if(!email.value.length || !password.value.length){
            showAlert('Hãy điền thông tin đăng nhập')
        }
    }
})

const showAlert = (msg) => {
    let alertBox = document.querySelector('.alert-box');
    let alertMsg = document.querySelector('.alert-msg');
    alertMsg.innerHTML = msg;
    alertBox.classList.add('show');
    setTimeout(() => {
        alertBox.classList.remove('show');
    }, 3000)
}