// bind querySelector
const $ = document.querySelector.bind(document)
const $$ =document.querySelectorAll.bind(document)
const player =$('.player')
const audio= document.querySelector('#audio');
const heading = document.querySelector('.playing-song-name');
const cdThumb = document.querySelector('.cd-thumbnail');
const playBtn = $('.btn-toggle-play')
const playIcon = playBtn.querySelector('.icon-play');
const pauseIcon = playBtn.querySelector('.icon-pause');
const cd =$('.cd')
const progress =$('#progress')
const app = {
    currentIndex: 0,
    isPlaying:false,
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
    },
    defineProperties: function() {
        Object.defineProperty(this, 'currentSong', {
            get: function() {
                return this.songs[this.currentIndex];
            }, configurable: true,
            enumerable: true
            
        });
    },
    handleEvents : function(){
         const _this =this
         const cdWidth =cd.offsetWidth
         //Xử lí CD quay / dừng
         const cdThumbAnimate=cdThumb.animate([
            {transform:'rotate(360deg)'}

         ],{
            duration : 10000 ,//10second
            iterations:Infinity
         }
        )
        cdThumbAnimate.pause()
         //Xu li khi click play
         playBtn.onclick =function (){
           if(_this.isPlaying){
            audio.pause()
            playIcon.style.display = 'none';
            pauseIcon.style.display = 'inline';
          
            
           }
           else{
            audio.play()
            playIcon.style.display = 'inline';
            pauseIcon.style.display = 'none';
            
            
           }

         }
         //Xử lsi khi tua song
         progress.onchange =function (e){
            const seekTime =audio.duration/100 *e.target.value
            audio.currentTime=seekTime
         }
         //Khi tiến độ bài hát thay đổi
         audio.ontimeupdate =function(){
            if(audio.duration){
                const progressPercent =Math.floor(audio.currentTime *100/audio.duration)
                progress.value =progressPercent
         }
            
         }
         //khi song bi páue
         audio.onpause =function (){
            _this.isPlaying=false
            cdThumbAnimate.pause()
            player.clasList.remove("song-playing")
         }
         //khi song duoc play
         audio.onplay =function (){
            _this.isPlaying =true 
            cdThumbAnimate.play()
            player.clasList.add('song-playing')
         }
         //phong /to thu nho cd
         document.onscroll =function(){
            const scrollTop =window.scrollY || document.documentElement.scrollTop
            const newCdWidth =cdWidth-scrollTop
            cd.style.width =newCdWidth >0 ? newCdWidth + 'px':0;
             cd.style.opacity =newCdWidth/cdWidth
        }

        
    },
    loadCurentSong : function (){
       
      heading.textContent =this.currentSong.name
      audio.src =this.currentSong.path
      cdThumb.style.backgroundImage =`url(${this.currentSong.image})`
      console.log(heading,cdThumb,audio)
    }
    
    ,
    start : function(){
        // Định nghĩa các thuộc tính cho ibject
        this.defineProperties(); // Định nghĩa thuộc tính currentSong
        //Lắng  nghe / xử lý sự kiện (Dom event)
        this.handleEvents();
        //Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
        this.loadCurentSong()
        //render playlist
        this.render();
    }
     
   
}

// starto
app.start()

