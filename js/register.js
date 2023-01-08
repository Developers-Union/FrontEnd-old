const serverPath = 'https://localhost:9091/'

const passwordStrength = document.getElementById("strength")
const strengthColor = document.getElementById('strength-color')

const username = document.getElementById('username')
const email = document.getElementById('email')
let password = document.getElementById('password')
const passwordAgain = document.getElementById('password-again')

const usernameBar = document.getElementById('username-bar')
const emailBar = document.getElementById('email-bar')
const passwordBar = document.getElementById('password-bar')
const passwordAgainBar = document.getElementById('password-again-bar')


function strength(str) {
    let a = str.length
    let strength
    if (a > 11) strength = 7
    else if (a > 9) strength = 6
    else if (a > 7) strength = 5
    else strength = 4
    if (/\d/.test(str)) strength++;	//数字
    if (/[a-z]/.test(str)) strength++; //小写
    if (/[A-Z]/.test(str)) strength++;
    return strength
    // TODO alert(str.value.length)
    // return 9.5
}

function checkUsername() {
    console.log(username)
    let str = username.value
    let strLength = str.length
    usernameBar.classList.remove('none-input')
    usernameBar.classList.remove('short-input')
    usernameBar.classList.remove('long-input')
    if (strLength === 0) {
        usernameBar.classList.add('none-input')
        return false
    } else {
        usernameBar.classList.remove('none-input')
    }
    if (strLength < 5) {
        usernameBar.classList.add('short-input')
        return false
    } else {
        usernameBar.classList.remove('short-input')
    }
    if (strLength > 10) {
        usernameBar.classList.add('long-input')
    } else {
        usernameBar.classList.remove('long-input')
    }
    return true
}

function checkEmail() {
    let str = email.value
    let strLength = str.length
    emailBar.classList.remove('invalid-email')
    emailBar.classList.remove('none-input')
    if (strLength === 0) {
        emailBar.classList.add('none-input')
        return false
    }
    const reg = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    if (reg.test(str)) {
        emailBar.classList.remove('invalid-email')
        return true
    } else {
        emailBar.classList.add('invalid-email')
    }
}

function checkPassword() {
    let str = password.value
    let strLength = str.length
    passwordBar.classList.remove('none-input')
    passwordBar.classList.remove('short-input')
    passwordBar.classList.remove('long-input')
    if (strLength === 0) {
        passwordStrength.style.display = 'none'
        passwordBar.classList.add('none-input')
        return false
    } else {
        passwordBar.classList.remove('none-input')
    }
    if (strLength < 6) {
        passwordBar.classList.add('short-input')
        passwordStrength.style.display = 'none'
        return false
    } else {
        passwordBar.classList.remove('short-input')
    }
    if (strLength > 16) {
        passwordBar.classList.add('long-input')
        passwordStrength.style.display = 'none'
        return false
    } else {
        passwordBar.classList.remove('long-input')
    }

    passwordStrength.style.display = 'flex'
    let a = strength(str)
    strengthColor.style.width = (a).toString() + 'vw'
    strengthColor.style.backgroundColor = 'hsl(' + (280 - a * 28).toString() + 'deg,100%,50%)'
    return true
}

function checkPasswordAgain() {
    if (password.value !== passwordAgain.value) {
        passwordAgainBar.classList.add('wrong-input')
        return false
    } else {
        passwordAgainBar.classList.remove('wrong-input')
        return true
    }

}

// import CryptoJS from 'crypto-js/crypto-js'

function register() {
    let check01 = checkUsername()
    let check02 = checkPassword()
    let check04 = checkPasswordAgain()
    let check05 = checkEmail()
    if (check01 && check02 && check04 && check05) {
        const http = new XMLHttpRequest()
        http.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                alert(this.response)
            }
        }
        http.onerror = function () {
            alert('Network Error');
        };
        http.open('GET', serverPath + 'register?', true);
        // password = CryptoJS.HmacSHA256(password, "DEV_UNION_SALT");
        let formData = new FormData();
        formData.append('username', username.value);
        formData.append('email', email.value);
        formData.append('password', password.value);
        http.send(formData);
    }
}