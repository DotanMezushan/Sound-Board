const sounds =['applause','boo','gasp','tada','victory','wrong','cat']
sounds.forEach(sound =>{
if(sound!='cat'){
    const btn = document.createElement('button')
   btn.classList.add('btn')

   btn.innerText = sound
   btn.addEventListener('click',()=>{
       stopSongs()
       document.getElementById(sound).play()
   })
   document.getElementById('buttons').appendChild(btn)
}
if(sound ==='cat'){
    const img =  document.createElement('img')
    img.src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg'
    img.alt='cat'
    img.classList.add('cat')
    img.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sound).play()
    })
    document.getElementById('buttons').appendChild(img)

}
   

  
})
function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime = 0;

    })
}