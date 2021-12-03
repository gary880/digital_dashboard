       //get elements
       const player = document.querySelector('.player');
       const video = player.querySelector('.viewer');
       const progress = player.querySelector('.progress');
       const progressBar = player.querySelector('.progress__filled');
       const toggle = player.querySelector('.toggle');
       const skipbutton = player.querySelectorAll('[data-skip]');
       const ranges = player.querySelectorAll('.player__slider');
       
       
       //build function
       function togglePlay() {
           const toggleplay = video.paused ? 'play' : 'pause';
           video[toggleplay]();
       }
       
       function updateBtn() {
           const Btn = video.paused ? toggle.textContent = '►' : toggle.textContent = '❚ ❚';
           // if(this.paused){ 
           //     toggle.textContent = '►';
           // }else{
           //     toggle.textContent = '❚ ❚';
           // }
       }
       
       function skipBtn() {
       
           // console.log(this.dataset.skip);
           let skiptime = parseFloat(this.dataset.skip);
           video.currentTime += skiptime;
       
       }
       function updateRange() {
           //    if(this.name == 'volume'){
           //        video.volume = this.value;
           //    }else if(this.name == 'playbackRate'){
           //        video.playbackRate = this.value;
           //    }
           video[this.name] = this.value;
       
       }
       function updateProgressbar() {
           let Percentage = (video.currentTime / video.duration) * 100;
           progressBar.style['flex-basis'] = Percentage + '%';
       
       }
       
       function VideoProgress(e) {
       
           let Percentage = (e.offsetX / progress.offsetWidth);
           video.currentTime = video.duration * Percentage;
       
       }
       //hook up the event listeners
       
       video.addEventListener('click', togglePlay);
       video.addEventListener('play', updateBtn);
       video.addEventListener('pause', updateBtn);
       toggle.addEventListener('click', togglePlay);
       ranges.forEach(range => range.addEventListener('change', updateRange));
       ranges.forEach(range => range.addEventListener('mousemove', updateRange));
       skipbutton.forEach(Btn => Btn.addEventListener('click', skipBtn));
       video.addEventListener('timeupdate', updateProgressbar);
       let mousedown = false;
       progress.addEventListener('click', VideoProgress);
       
       progress.addEventListener('mousedown', () => mousedown = true);
       
       
       progress.addEventListener('mouseup', () => mousedown = false);
       
       // progress.addEventListener('mousemove', function(e){
       //     if (mousedown) {
       //         VideoProgress(e);
       //     } else {
       //         return;
       //     }
       // });
       progress.addEventListener('mousemove',(e)=> mousedown && VideoProgress(e));
       
       
       