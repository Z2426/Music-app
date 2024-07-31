// bind querySelector
const $ = document.querySelector.bind(document)
const $$ =document.querySelectorAll.bind(document)

const app = {
   
    songs: [
        {
            name: "TruE",
            singer: "HOYO-MiX · 黄龄 · 文驰 · TetraCalyx",
            path: "./assets/songs/TruE.mp3",
            image: "./assets/img/TruE.jpg",
            isFavorite: false
        },
        {
            name: "Regression",
            singer: "Ayanga",
            path: "./assets/songs/Regression - Honkai Impact 3rd Theme Song Performed by- Ayanga - Honkai Impact 3rd.mp3",
            image: "./assets/img/Regression.jpg",
            isFavorite: false
        },
        {
            name: "Rubia",
            singer: "Zhou Shen",
            path: "./assets/songs/Rubia (Performed by Zhou Shen) - Honkai Impact 3rd.mp3",
            image: "./assets/img/Rubia.jpg",
            isFavorite: false
        },
        {
            name: "Starfall",
            singer: "TIA RAY",
            path: "./assets/songs/[Starfall] (Performed by TIA RAY) - Honkai Impact 3rd OST.mp3",
            image: "./assets/img/Starfall.jpg",
            isFavorite: false
        },
        {
            name: "Moon Halo",
            singer: "茶理理 x TetraCalyx x Hanser",
            path: "./assets/songs/Moon Halo - Honkai Impact 3rd Valkyrie Theme.mp3",
            image: "./assets/img/Moon Halo.jpg",
            isFavorite: false
        },
        {
            name: "Houkai Sekai no Utahime (Honkai World Diva)",
            singer: "Mika Kobayashi",
            path: "./assets/songs/Houkai Sekai no Utahime (Honkai World Diva, movie ver.)-- Honkai Impact 3rd.mp3",
            image: "./assets/img/Houkai Sekai no Utahime.jpg",
            isFavorite: false
        },
        {
            name: "Dual-Ego",
            singer: "Sa Dingding",
            path: "./assets/songs/Dual-Ego Honkai Impact 3rd OSTBy Sa Dingding.mp3",
            image: "./assets/img/Dual-Ego.jpg",
            isFavorite: false
        },
        {
            name: "Da Capo",
            singer: "车子玉Ziyu Che",
            path: "./assets/songs/Da Capo  Honkai Impact 3rd Theme Song.mp3",
            image: "./assets/img/Da Capo.jpg",
            isFavorite: false
        },
        {
            name: "Cyberangel",
            singer: "Hanser",
            path: "./assets/songs/Cyberangel Honkai Impact 3rd OSTBy Hanser.mp3",
            image: "./assets/img/Cyberangel.webp",
            isFavorite: false
        }
    ],
    render:function(){
    const htmls =this.songs.map(song =>{
        
        return `
  <div class="song-img" style="background-image: url('${song.image}')" alt="" class="song-image"></div>
    <div class="body">
        <h3 class="title">${song.name}</h3>
        <p class="author">${song.singer}</p>
    </div>
    <div class="option">
        <i class="fas fa-ellipsis-h"></i>
    </div>
</div>

 `
    })
     $('.playlist').innerHTML = htmls.join ('')
    }
    ,
    start : function(){
        this.render()
    }
     
   
}

// starto
app.start()
