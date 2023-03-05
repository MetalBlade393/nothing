function login() {
    var user, password

    user = document.getElementById("usuario").value;
    password = document.getElementById("contraseña").value;

    if (user == "prueba" && password == "2468") {
        window.location = "home.html";
    } else if (user == "JoseL" && password == "elrey1") {
        window.location = "home.html";
    } else if (user == "Francisco Torres" && password == "12abril2000") {
        window.location = "home.html";
    } else if (user == "Alberto Nuñez" && password == "2468nUSA") {
        window.location = "home.html";
    } else if (user == "AlvaroL23" && password == "julio12madrid") {
        window.location = "home.html";
    } else if (user == "WH40K" && password == "3mp3r4d0r") {
        window.location = "home.html";
    } else {
        alert("Datos incorrectos");
    }
}