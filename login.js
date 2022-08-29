var attempt = 3;
function validate() {
    var UserName = document.getElementById("usuar").value;
    var Password = document.getElementById("password").value;


    if (UserName == "michelromero" && Password == "1234") {
        alert("Ingreso exitoso");
        window.location = "login.html";
        return false;
    } if (UserName == "profeunemi" && Password == "2022") {
        alert("Ing. Norma Valencia ha ingresado con exito :)");
        window.location = "login.html";
        return false;
    }


    else {
        attempt--;

    }
    alert("Acceso denegado!!")
    if (attempt == 0) {
        document.getElementById("UserName").disable = true;
        document.getElementById("Password").disable = true;
        document.getElementById("submit").disable = true;
    }

} 