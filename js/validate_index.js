function validate() {
    var x = document.getElementById("username").value;
    var w = document.getElementById("password").value;

    if (x.includes("john.doe@sainsburys.co.uk") && w == "12345678") {
                window.location = "file:///C:/Users/sumuk/Desktop/client-visit-final/html/home_page.html"

    }
    else {
        alert("incorrect email or password");
    }
}