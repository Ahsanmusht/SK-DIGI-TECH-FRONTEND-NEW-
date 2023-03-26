axios.get("https://sk-digi-tech-backend-new-production.up.railway.app/profile").then((result) => {
  console.log(result.data.user._id);
  document.getElementById("data").innerHTML = `

  <form style="box-shadow: 12px 12px 22px gray; border-radius:1rem;" class="p-5 mt-3" action="/edit" enctype="multipart/form-data">
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Name</label>
  <input type="text" name="name" value="${result.data.user.name}" id="${result.data.user._id}-name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" name="email" value="${result.data.user.email}" id="${result.data.user._id}-email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Email address</label>
  <input type="text" name="mobile" value="${result.data.user.mobile}" id="${result.data.user._id}-mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
</div>
 
  <button type="submit" onclick="return EditData('${result.data.user._id}',
  '${result.data.user.name}',
  '${result.data.user.email}',
  '${result.data.user.mobile}',)" class="btn btn-primary">Submit</button>
</form>

    `;
});

// const EditData = (id, image, name, email, mobile) => {
//   console.log(id);
//   axios
//     .post("http://localhost:5000/edit", {
//       name: document.getElementById(`${id}-name`).value,
//       email: document.getElementById(`${id}-email`).value,
//       mobile: document.getElementById(`${id}-mobile`).value,
//       _id: id,
//       image: document.getElementById(`${id}-image`).value,
//     })
//     .then((result) => {
//       console.log(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

//   return false;
// };

var port = "https://sk-digi-tech-backend-new-production.up.railway.app";

function EditData(id) {
  var obj = {
    name: document.getElementById(`${id}-name`).value,
    email: document.getElementById(`${id}-email`).value,
    _id:id,
    mobile: document.getElementById(`${id}-mobile`).value,
  };
  var Http = new XMLHttpRequest();
  Http.open("POST", port + `/edit`);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      let jsonRes = JSON.parse(Http.responseText);
      if (Http.status === 200) {
        console.log(jsonRes);
        alert(jsonRes.message);
        setInterval(function () {
          window.location.href = "/profile.html";
        }, 100);
        console.log(jsonRes);
        return;
      } else {
        swal("Opps!", jsonRes.message, "error");
        console.log(jsonRes.message);
      }
    }
  };

  return false;
}
