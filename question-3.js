// Question #3
let userPassword = "";
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(){
    if(userPassword.length < 6) {
        return "Weak"
    }else if (userPassword.length >= 6 && userPassword.length <= 10) {
        return "Medium"
    }else{
        return "Strong"
    }
}
userPassword = "TechUp"
console.log(checkPasswordStrength(userPassword)); 
