var port = "https://sk-digi-tech-backend-new-production.up.railway.app";

function register() {
  var obj = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    mobile: document.getElementById("mobile").value,
    image: document.getElementById("image").value,
    password: document.getElementById("password").value,
  };
  var Http = new XMLHttpRequest();
  Http.open("POST", port + "/register");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      let jsonRes = JSON.parse(Http.responseText);
      if (Http.status === 200) {
        console.log(jsonRes)
        swal("Good job!", jsonRes.data , "success");
        setInterval(function () {
          window.location.href = "https://ahsanmusht.github.io/SK-DIGI-TECH-FRONTEND-NEW-/Login.html";
        }, 100); 
         console.log(jsonRes);
        return;
      }
      else {
        swal("Opps!", jsonRes.message, "error");
        console.log(jsonRes.message);
      }
    }
  };

  return false;
}

