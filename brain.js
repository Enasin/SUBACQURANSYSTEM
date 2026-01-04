



fetch('data/quran.json')
   .then(Response => Response.json())
   .then( quran => displaySurahs(quran))
   .catch(err => console.error("error loading json"));

   function displaySurahs(quran) {
    const  ol = document.getElementById("surahlist");
     ol.textContent = " ";
    quran.forEach(surah => {
        const li = document.createElement("li");
        li.textContent = ` ${surah.name}`;
        ol.appendChild(li);
        
    });
}

const ol = document.getElementById("surahlist");
    ol.innerHTML = " ";
   for (let i = 1; i <= 114; i++ ) {
    const li = document.createElement("li");
    li.textContent = i;
    ol.appendChild(li);
   }
