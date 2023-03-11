const LoadingNavbar = () => {
  fetch('https://openapi.programming-hero.com/api/news/categories')
  .then(res => res.json())
  .then(data => DisplayNavbar(data.data.news_category))
}

const DisplayNavbar = (newsbars) =>{
  
  for(const newsbar of newsbars){
    console.log(newsbar)
    const ContainerNavbar = document.getElementById('navbarBrand')
    const ContainerNavbarDiv = document.createElement('div')
    ContainerNavbarDiv.classList.add('col')
    ContainerNavbarDiv.innerHTML = `
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav "> 
        <a class="nav-link active text-muted fw-semibold" href="#" onclick="loading('${newsbar.category_id}')" >${newsbar.category_name}</a>
    </div> 
  </div>
    `
    ContainerNavbar.appendChild(ContainerNavbarDiv)
  }
}
LoadingNavbar()

// display newspapers

const loading = (id) =>{
   const url = `https://openapi.programming-hero.com/api/news/category/${id}`
     fetch(url)
    .then(res => res.json())
    .then(data => displayContainer(data.data))
}
const displayContainer = randomsNews =>{
for(var newportal of randomsNews){
  console.log(newportal)

    const ContainerDiv = document.getElementById('Newsportal-Div')
   
    const DiplayDiv = document.createElement('div')
    DiplayDiv.classList.add('col')
    DiplayDiv.innerHTML = `
    <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src="${newportal.image_url}" class="img-fluid rounded-start p-3" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title"> ${newportal.author.name} </h5>
          <p class="card-text">${newportal.details.slice(0,300)} </p>
          <p class="card-text d-flex justify-content-evenly"><small class="text-muted"><img src="${newportal.thumbnail_url}" class="img-fluid rounded-circle w-25 h-50 p-1" alt="..."> ${newportal.author.published_date} </small> 
          <span><span><i class="fa-sharp fa-solid fa-eye"></i></span> &nbsp; <span class=" fw-bolder">${newportal.total_view}M </span> </span> 
           <span></span> <span><i class="fa-regular fa-star px-1"></i><i class="fa-regular fa-star px-1"></i><i class="fa-regular fa-star px-1"></i><i class="fa-regular fa-star px-1"></i><i class="fa-regular fa-star px-1"></i> 
           </span> <span><i class="fa-solid fa-arrow-right text-primary fs-3"></i></span> </span> </p>
        </div>
      </div>
    </div>
  </div>        
    `
    ContainerDiv.appendChild(DiplayDiv)
    
}
}

 
  
 