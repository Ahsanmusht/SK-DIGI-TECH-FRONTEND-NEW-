// fetch('http://localhost:5000/profile')
// .then(res => {
//     return res.json()
// })
// .then(data => {
//     data.forEach(user => {
//        const markup = `<li>${user.name}</li>`
//        document.querySelector('ul').insertAdjacentHTML('beforeend', markup) 
//     });
// })
// .catch(err => console.log(err))

axios.get('https://sk-digi-tech-backend-new-production.up.railway.app/admin-profile').then((result) => {
    console.log(result);
   document.getElementById('data').innerHTML = `
   
   <section class="userProfile card">
   <div class="profile">
       <figure><img src="../Uploads/${result.data.admin.image}" alt="profile" width="300px" height="300px" style="
       object-fit:cover; border:2px solid #000"></figure>
   </div>
</section>

 `

}).catch((err) => {
    console.log(err);
});


axios.get('https://sk-digi-tech-backend-new-production.up.railway.app/admin-profile').then((result) => {

    document.getElementById('lists').innerHTML = `
 
    <li class="phone" >
    <h1 class="label">Name:</h1>
    <span class="info">${result.data.admin.name}</span>
   </li>
   
   <li class="address">
    <h1 class="label">Email:</h1>
    <span class="info">${result.data.admin.email}</span>
   </li>
   
   <li class="site">
    <h1 class="label">Mobile:</h1>
    <span class="info">${result.data.admin.mobile}</span>
   </li>
   
    `
}).catch((err) => {
    console.log(err);
});




 



axios.get('https://sk-digi-tech-backend-new-production.up.railway.app/admin-profile').then((result) => {
    document.getElementById('adminName').innerHTML = `
    
    <p>${result.data.admin.name}</p>

    `
}).catch((err) => {
    console.log(err);

});