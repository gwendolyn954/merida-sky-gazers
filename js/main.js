document.querySelector('button').addEventListener('click', viewAPOD)

document.querySelector('button').addEventListener('click', displayImage)

document.querySelector('button').addEventListener('click', displayOverview)

function viewAPOD(){
    const choice = document.querySelector('input').value
    console.log(choice)
    const url = `https://api.nasa.gov/planetary/apod?api_key=Avn0dhFfUv4hPGRJ9Fal8vFTxsMzcbKxHbQDu9Jx&date=${choice}`

    fetch(url)
      .then(res => res.json()) 
      .then(data => {
        console.log(data)
        if(data.media_type === "image"){
          document.querySelector('img').src = data.hdurl
        }else{
          alert('APOD not availablle for this date..')
        }
       
        document.querySelector('h3').innerText = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

function displayOverview(){
    let overview = document.getElementById('overview')
    overview.style.display = "block";
}

function displayImage(){
    let overview = document.getElementById('img')
    overview.style.display = "block";
}

