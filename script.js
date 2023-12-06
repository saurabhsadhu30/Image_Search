const search = document.querySelector("#Search");
const search_btn = document.querySelector("#search-btn");
const img_container = document.querySelector(".img-container");

search_btn.addEventListener('click' ,async()=>{
  const search_value=search.value 
  console.log(search_value,"search_value");
  if(search_value===''){
    alert("please enter a search term")
    return
  }else{
    const key = `aANYoqwV6JutRpS0D7kVf-jVc_HRBOmC8NfN2V-zzoc`
    const url=`https://api.unsplash.com/search/photos?page=1&query=${search_value}&client_id=${key}`
    let data=await fetch(url)
    data=await data.json()
    console.log(data,"data")
    displayImages(data)
  }
});

function displayImages(data){
  img_container.innerHTML=''
  data.results.forEach(element => {
    console.log(element.urls.regular,"element.urls.regular");
    const img = document.createElement('img')
    img.src = element.urls.regular 
    // img.addClass = 'img-class'
    img_container.appendChild(img)
  });
}