async function fetching(){
       let data = await fetch('http://localhost:3000/data');
       let response =await data.json()
       console.log(response)
}
fetching();