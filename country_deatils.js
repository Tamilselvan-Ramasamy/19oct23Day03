const URL = "https://restcountries.com/v3.1/all"

const req = new  XMLHttpRequest();
req.addEventListener("load",function()
{ const obj = JSON.parse(this.response)
    
   for (let val of obj)
    {
       //console.log(val.population)
       
       console.log("Country: "+val.name.common+", Region: "+val.region+", Sub Region: "+val.subregion+", Population: "+val.population)
         
       }
});
req.open("GET",URL);
req.send() 