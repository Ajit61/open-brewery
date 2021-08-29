

async function getdata(){
const  data=await fetch("https://api.openbrewerydb.org/breweries");
const responses= await data.json();
  responses.forEach((response) =>display(response))
}
getdata()
function display({name,city,brewery_type,website_url,phone}){
    const info=document.createElement("div");
    // info.setAttribute("class","container")
    info.innerHTML=
    `
   <div class="container">
    
     <div class="name"><h4>NAME:${name}</div>
    <div class="city">CITY:${city}</div>
    <div class="website"><a href="${website_url}" target="_blank">WEBSITE:${website_url}<a></div>
 <div class="phone">CONTACT:${phone}</div>
 <div class="type">TYPE:${brewery_type}</div>
   </div> `;
    document.body.append(info)

}
 