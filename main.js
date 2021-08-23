var loginBtn = document.querySelector('.js-log-in');
var signInBtn = document.querySelector('.js-sign-in');
var modal = document.querySelector('.modal');
var bodyModal = document.querySelector('.modal__body');

loginBtn.onclick = function(){
    modal.setAttribute('style', 'display:flex');
    bodyModal.innerHTML = `<div class="auth-form">
                                <div class="auth-form__container">
                                    <div class="auth-form__header">
                                        <div class="auth-form__heading">Đăng ký</div>
                                        <span class="auth-form__switch-btn">Đăng nhập</span>
                                    </div>

                                    <div class="auth-form__form">
                                        <div class="auth-form__group">
                                            <input type="text" class="auth-form__input" placeholder="Email của bạn">
                                        </div>
                                        <div class="auth-form__group">
                                            <input type="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
                                        </div>
                                        <div class="auth-form__group">
                                            <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                                        </div>
                                    </div>

                                    <div class="auth-form__aside">
                                        <p class="auth-form__policy-text-link">
                                            Bằng việc đăng ký, bạn đã đồng ý với Shopee về
                                            <a href="" class="auth-form__policy-link">Điều khoản dịch vụ</a> & 
                                            <a href="" class="auth-form__policy-link">Chính sách bảo mật</a>
                                        </p>
                                    </div>

                                    <div class="auth-form__controls">
                                        <button onclick="backForm()" class="btn auth-form__controls-back">TRỞ LẠI</button>
                                        <button onclick="loginToSignin()" class="btn btn--primary ">ĐĂNG KÝ</button>
                                    </div>
                                </div>
                                
                                    
                                <div class="auth-form__socials">
                                    <a href="" class="auth-form__socials--facebook btn--socials btn--size-s btn--with-icon">
                                        <i class="auth-form__socials-icon fab fa-facebook-square"></i>
                                        <span class="auth-form__socials-title">Kết nối với Facebook</span>
                                    </a>
                                    <a href="" class="auth-form__socials--google btn--socials btn--size-s btn--with-icon">
                                        <i class="auth-form__socials-icon fab fa-google-plus-square"></i>
                                        <span class="auth-form__socials-title">Kết nối với Google</span>
                                    </a>
                                </div>
                            </div>`;

}

signInBtn.onclick = function(){
    modal.setAttribute('style', 'display:flex');
    bodyModal.innerHTML = `<div class="auth-form">
                            <div class="auth-form__container">
                                <div class="auth-form__header">
                                    <div class="auth-form__heading">Đăng nhập</div>
                                    <span class="auth-form__switch-btn">Đăng ký</span>
                                </div>

                                <div class="auth-form__form">
                                    <div class="auth-form__group">
                                        <input type="text" class="auth-form__input" placeholder="Email của bạn">
                                    </div>
                                    <div class="auth-form__group">
                                        <input type="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
                                    </div>
                                </div>

                                <div class="auth-form__aside">
                                    <div class="auth-form__help">
                                        <a href="" class="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                                        <span class="auth-form__help-separate"></span>
                                        <a href="" class="auth-form__help-link">Cần trợ giúp?</a>
                                    </div>
                                </div>

                                <div class="auth-form__controls">
                                    <button onclick="backForm()" class="btn auth-form__controls-back">TRỞ LẠI</button>
                                    <button onclick="signinToLogIn()" class="btn btn--primary ">ĐĂNG NHẬP</button>
                                </div>
                            </div>
                            
                                
                            <div class="auth-form__socials">
                                <a href="" class="auth-form__socials--facebook btn--socials btn--size-s btn--with-icon">
                                    <i class="auth-form__socials-icon fab fa-facebook-square"></i>
                                    <span class="auth-form__socials-title">Kết nối với Facebook</span>
                                </a>
                                <a href="" class="auth-form__socials--google btn--socials btn--size-s btn--with-icon">
                                    <i class="auth-form__socials-icon fab fa-google-plus-square"></i>
                                    <span class="auth-form__socials-title">Kết nối với Google</span>
                                </a>
                            </div>
                        </div>`;
}

var Overlay = document.querySelector('.modal__overlay');


Overlay.addEventListener('click',function(){
    modal.setAttribute('style', 'display: none');
})


function backForm(){
    modal.setAttribute('style', 'display: none');
}

function signinToLogIn(){
    bodyModal.innerHTML = `<div class="auth-form">
                            <div class="auth-form__container">
                                <div class="auth-form__header">
                                    <div class="auth-form__heading">Đăng ký</div>
                                    <span class="auth-form__switch-btn">Đăng nhập</span>
                                </div>

                                <div class="auth-form__form">
                                    <div class="auth-form__group">
                                        <input type="text" class="auth-form__input" placeholder="Email của bạn">
                                    </div>
                                    <div class="auth-form__group">
                                        <input type="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
                                    </div>
                                    <div class="auth-form__group">
                                        <input type="password" class="auth-form__input" placeholder="Nhập lại mật khẩu">
                                    </div>
                                </div>

                                <div class="auth-form__aside">
                                    <p class="auth-form__policy-text-link">
                                        Bằng việc đăng ký, bạn đã đồng ý với Shopee về
                                        <a href="" class="auth-form__policy-link">Điều khoản dịch vụ</a> & 
                                        <a href="" class="auth-form__policy-link">Chính sách bảo mật</a>
                                    </p>
                                </div>

                                <div class="auth-form__controls">
                                    <button onclick="backForm()" class="btn auth-form__controls-back">TRỞ LẠI</button>
                                    <button onclick="loginToSignin()" class="btn btn--primary ">ĐĂNG KÝ</button>
                                </div>
                            </div>
                            
                                
                            <div class="auth-form__socials">
                                <a href="" class="auth-form__socials--facebook btn--socials btn--size-s btn--with-icon">
                                    <i class="auth-form__socials-icon fab fa-facebook-square"></i>
                                    <span class="auth-form__socials-title">Kết nối với Facebook</span>
                                </a>
                                <a href="" class="auth-form__socials--google btn--socials btn--size-s btn--with-icon">
                                    <i class="auth-form__socials-icon fab fa-google-plus-square"></i>
                                    <span class="auth-form__socials-title">Kết nối với Google</span>
                                </a>
                            </div>
                        </div>`;
}

function loginToSignin(){
    bodyModal.innerHTML = `<div class="auth-form">
                            <div class="auth-form__container">
                                <div class="auth-form__header">
                                    <div class="auth-form__heading">Đăng nhập</div>
                                    <span class="auth-form__switch-btn">Đăng ký</span>
                                </div>

                                <div class="auth-form__form">
                                    <div class="auth-form__group">
                                        <input type="text" class="auth-form__input" placeholder="Email của bạn">
                                    </div>
                                    <div class="auth-form__group">
                                        <input type="password" class="auth-form__input" placeholder="Mật khẩu của bạn">
                                    </div>
                                </div>

                                <div class="auth-form__aside">
                                    <div class="auth-form__help">
                                        <a href="" class="auth-form__help-link auth-form__help-forgot">Quên mật khẩu</a>
                                        <span class="auth-form__help-separate"></span>
                                        <a href="" class="auth-form__help-link">Cần trợ giúp?</a>
                                    </div>
                                </div>

                                <div class="auth-form__controls">
                                    <button onclick="backForm()" class="btn auth-form__controls-back">TRỞ LẠI</button>
                                    <button onclick="signinToLogIn()" class="btn btn--primary ">ĐĂNG NHẬP</button>
                                </div>
                            </div>
                            
                                
                            <div class="auth-form__socials">
                                <a href="" class="auth-form__socials--facebook btn--socials btn--size-s btn--with-icon">
                                    <i class="auth-form__socials-icon fab fa-facebook-square"></i>
                                    <span class="auth-form__socials-title">Kết nối với Facebook</span>
                                </a>
                                <a href="" class="auth-form__socials--google btn--socials btn--size-s btn--with-icon">
                                    <i class="auth-form__socials-icon fab fa-google-plus-square"></i>
                                    <span class="auth-form__socials-title">Kết nối với Google</span>
                                </a>
                            </div>
                        </div>`;
}


document.onkeydown = function(e) {
    switch(e.which) {
        case 27  : 
            
                modal.setAttribute('style', 'display: none');
            
            breakl;
        case 13 : 
            console.log('ơ lại');
            break;
    }
}
