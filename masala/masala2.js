function userid(use) {

  if (use.length > 2) {
    return true;
  }
  else {
    return false;
  }

}
function login(user, pass) {
  user = user.trim();
  pass = pass.trim();
  if (user.length > 3 || pass.length > 7) {
    if (userid(user)) {
      if (pass.length > 7) {
        let obj = {
          Login: user,
          Password: pass,
        }
        console.log('Siz mofaqiyatli ro\'yhatdan o\'tingiz');
        console.log(obj);
      }
      else {
        console.log("Parol 8 ta belgidan iborat bolishi kerak");
      }
    }
    else {
      console.log('Login 3 tadan katta bo\' lishi kerak');
    }
  }
  else{
    console.log('Login 3 tadan katta bo\' lishi kerak');
    console.log("Parol 8 ta belgidan iborat bolishi kerak");

  }

}
login(' fowewfewfewfwe ', '1234we');