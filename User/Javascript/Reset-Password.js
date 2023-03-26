axios.get('https://sk-digi-tech-backend-new-production-bdf3.up.railway.app/profile').then((result) => {
  console.log(result.data.user._id);
    document.getElementById('data').innerHTML = `
    
    <input type="hidden" id="hidden_id" value="${result.data.user._id}" />

    `
})
   



var port = "https://sk-digi-tech-backend-new-production-bdf3.up.railway.app";

function resetPassword() {
  var obj = {
    password: document.getElementById("password").value,
  };
  hidden_id = document.getElementById("hidden_id").value;
  var Http = new XMLHttpRequest();
  Http.open("POST", port + `/reset-password/${hidden_id}`);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      let jsonRes = JSON.parse(Http.responseText);
      if (Http.status === 200) {
        console.log(jsonRes)
        swal("Good job!", jsonRes.data , "success");
        setInterval(function () {
          window.location.href = "/Login.html";
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

