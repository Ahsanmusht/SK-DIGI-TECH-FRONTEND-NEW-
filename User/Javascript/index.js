var port = "https://sk-digi-tech-backend-new-production.up.railway.app";

function login() {
  var obj = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  var Http = new XMLHttpRequest();
  Http.open("POST", port + "/login");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      let jsonRes = JSON.parse(Http.responseText);
      if (Http.status === 200) {
        console.log(jsonRes)
        swal("Good job!", jsonRes.data , "success");
        setInterval(function () {
          window.location.href = "/profile.html";
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

