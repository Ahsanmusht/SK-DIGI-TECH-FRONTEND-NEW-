


axios.get('https://sk-digi-tech-backend-new-production.up.railway.app/admin-profile').then((result) => {
    document.getElementById('Admin').innerHTML = `
  
    <img src="../Uploads/${result.data.admin.image}" width="40px" height="40px" alt="">

    <div>
    <h4>${result.data.admin.name}</h4>
    <small>Super Admin</small>
</div>

    `
})


const url = "https://sk-digi-tech-backend-new-production.up.railway.app";

function getData() {
  var showdata = document.getElementById("UserData");
  const Http = new XMLHttpRequest();
  Http.open("GET", url + "/dashboard");
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(null);
  Http.onreadystatechange = (e) => {
    if (Http.readyState === 4) {
      let jsonRes = JSON.parse(Http.responseText);
      let out;
      var i = 1;
console.log(jsonRes)
var arr =[]
console.log(arr.length)
      jsonRes.map((data) => {
        console.log(data);
        out = `

        <tr id="${data._id}">
            
            <td><img src="../Uploads/${data.image}"  width="40px" height="40px" style="
             object-fit:cover; border-radius:50%;"/></td>
             <td>${data.name}</td>
             <td>${data.email}</td>
             <td>${data.mobile}</td>
             <td>${data.is_verified}</td>
             <td><button class="btn btn-success" onclick="update_data('${data.image}','${data.name}','${data.email}','${data.mobile}','${data.is_verified}','${data._id}')">Edit</button>
             &nbsp;
             <button class="btn btn-danger"  onclick="delete_data('${data._id}')" />Delete</button></td>
         </tr>

    
        `;
        showdata.innerHTML += out;
      });
    }
  };
}
getData();

function delete_data(id) {
  const url = "https://sk-digi-tech-backend-new-production.up.railway.app";
  const Http = new XMLHttpRequest();
  Http.open("DELETE", url + `/delete/${id}`);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(null);
  Http.onreadystatechange = (e) => {
    console.log(e);
    if (Http.readyState === 4) {
      if (Http.status === 200) {
        let jsonRes = JSON.parse(Http.responseText);
        alert(jsonRes.message);
        window.location.reload();
      } else {
        let jsonRes = JSON.parse(Http.responseText);
        alert(jsonRes.message);
      }
    }
  };

  return false;
}

function update_data(image, name, email, mobile, is_verified, id){
  const showdata = document.getElementById(`${id}`)
  console.log(id);
  out = `

  <tr id="${id}">
      
      <td><img src="../Uploads/${image}"  width="40px" height="40px" style="
       object-fit:cover; border-radius:50%;"/></td>
       <td><input id="${id}-name" type="text" value="${name}" /></td>
       <td><input id="${id}-email" type="email" value="${email}" /></td>
       <td><input id="${id}-mobile" type="text" value="${mobile}" /></td>
       <td><input id="${id}-is_verified" type="text" value="${is_verified}" /></td>
       <td><button class="btn btn-success" onclick="update_user('${id}')">Edit</button>
       &nbsp;
       <button class="btn btn-danger"  onclick="delete_data('${id}')" />Delete</button></td>
   </tr>


  `;
  showdata.innerHTML = out;
} 

function update_user(id) {

  const url = "https://sk-digi-tech-backend-new-production.up.railway.app";
  let obj = {
      name:document.getElementById(`${id}-name`).value,
      email:document.getElementById(`${id}-email`).value,
      mobile:document.getElementById(`${id}-mobile`).value,
      is_verified:document.getElementById(`${id}-is_verified`).value,
  }
  const Http = new XMLHttpRequest();
  Http.open("POST", url + `/edit-user/${id}`);
  Http.setRequestHeader("Content-Type", "application/json");
  Http.send(JSON.stringify(obj));
  Http.onreadystatechange = (e) => {
    console.log(e);
    if (Http.readyState === 4) {
      if (Http.status === 200) {
        let jsonRes = JSON.parse(Http.responseText);
        alert(jsonRes.message);
        window.location.reload();
        // console.log(jsonRes);
      } else {
        let jsonRes = JSON.parse(Http.responseText);
        alert(jsonRes.message);
      }
    }
  };

  return false;

}