var port = "https://sk-digi-tech-backend-new-production.up.railway.app";

function Forgot() {
  var obj = {
    email: document.getElementById("email").value
  };
  var Http = new XMLHttpRequest();
  Http.open("POST", port + "/forgot");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      let jsonRes = JSON.parse(Http.responseText);
      if (Http.status === 200) {
        console.log(jsonRes)
        swal("Good job!", jsonRes.data , "success");
        setInterval(function () {
          window.location.href = "/Reset-Password.html";
        }, 3000); 
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

