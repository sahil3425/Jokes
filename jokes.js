/* <div id="joke" class="joke">Awesome joke is loading...</div>
<button id="jokeBtn" class="btn">Next JOKE</button> */
//ASYNC 
const  jokes = document.querySelector('#jokess');
const  jokeBtn = document.querySelector('#jokeBtn');
// async function generateJokes(){}

const generateJokes = async()=>{
    try{
    const setHeader={  headers:{
        Accept:"application/json"
    }
}
  const res= await fetch('https://icanhazdadjoke.com',setHeader) ;
    const data  = await res.json();
    jokes.innerHTML = data.joke;}
    catch(err){
        console.log(err);
    }


  
}
jokeBtn.addEventListener('click',generateJokes);
generateJokes();
