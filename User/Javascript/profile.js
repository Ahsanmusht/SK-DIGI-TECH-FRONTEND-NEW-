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

axios.get('https://sk-digi-tech-backend-new-production-bdf3.up.railway.app/profile').then((result) => {
    console.log(result);
    console.log(result.data.user.image);
   document.getElementById('data').innerHTML = `
   
   <section class="userProfile card">
   <div class="profile">
       <figure><img src="../Uploads/${result.data.user.image}" alt="profile" width="300px" height="300px" style="
       object-fit:cover; border:2px solid #000"></figure>
   </div>
</section>

 `
 document.getElementById('result').innerHTML = `
 
 <li class="phone" >
 <h1 class="label">Name:</h1>
 <span class="info">${result.data.user.name}</span>
</li>

<li class="address">
 <h1 class="label">Email:</h1>
 <span class="info">${result.data.user.email}</span>
</li>

<li class="site">
 <h1 class="label">Mobile:</h1>
 <span class="info">${result.data.user.mobile}</span>
</li>

 `

 
}).catch((err) => {
    console.log(err);
});