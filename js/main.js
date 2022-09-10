'use strict';
function smooth() {
   let prevScrollpos = window.pageYOffset;
   const logoDesc = document.getElementById("logo__desc");
   const headerHeight = document.getElementById("header").offsetHeight
   const headerWidth = document.getElementById("header").offsetWidth
   const navbar = document.getElementById("navbar")
   const mobileNavInner = document.getElementById("mobile__nav-inner")
   if (prevScrollpos < 0) {
      mobileNavInner.style.display = 'none'
   }
   return window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (headerWidth > 800) {
         if (prevScrollpos > currentScrollPos) {
            navbar.style.top = "0";
         } else {
            navbar.style.top = "-50%";
         }
         prevScrollpos = currentScrollPos;
         if (currentScrollPos > headerHeight) {
            logoDesc.style.color = "transparent"
         } else {
            logoDesc.style.color = "#E4E5EA"
         }
      } else if (headerWidth <= 800) {
         if (prevScrollpos > currentScrollPos) {
            mobileNavInner.style.display = 'flex'
         } else {
            mobileNavInner.style.display = 'none'
         }
         prevScrollpos = currentScrollPos;
      }
   }
}

smooth()


function playVideo() {
   const videoP = document.querySelector('#video__founder')
   const btn = document.querySelector('#playBtnVideo')
   const both = [videoP, btn]
   return both.forEach(videoOrBtn => {
      return videoOrBtn.addEventListener('click', () => {
         const startVid = btn.getAttribute('data-video')

         if (!(videoP.src).includes('founder')) {
            videoP.src = startVid
            videoP.play()
            videoP.style.transform = 'scale(1.1)'
            videoP.style.opacity = '1'
            videoP.setAttribute('controls', "")
         } else {
            videoP.pause()
            videoP.style.transform = 'scale(1)'
            videoP.removeAttribute('controls')
            videoP.src = ''
         }
      })
   })

}
playVideo()
function playMobVideo() {
   const btn = document.getElementById('playBtnVideoMob')
   const video = document.getElementById('video__mobile')

   const playBoth = [btn, video]
   return playBoth.forEach(elementToPlay => {
      return elementToPlay.addEventListener("click", () => {
         const attributeVideo = btn.getAttribute("data-video")

         if (!video.src.includes("founder")) {
            video.src = attributeVideo
            video.play()
            video.setAttribute("controls", "")
            btn.style.opacity = "0"
         } else {
            video.src = ''
            video.removeAttribute('controls')
            btn.style.opacity = "1"
         }
      })
   })
}
playMobVideo()

function hideText() {
   const container = document.querySelector('.solving__inner-items')
   const btn1Text = document.querySelector('.solving__inner-mobile-content-btn1')
   const btn2Text = document.querySelector('.solving__inner-mobile-content-btn2')

   container.addEventListener('click', current => {
      const items = document.querySelectorAll('.solving__inner-mobile-btn')
      const cur = current.target

      items.forEach(item => {
         item.classList.remove('solving__inner-mobile-btn--active')
      })
      cur.classList.add('solving__inner-mobile-btn--active')
      if (cur.id === 'solving__mob-btn2') {
         btn1Text.style.display = 'none'
         btn2Text.style.display = 'block'
      } else {
         btn1Text.style.display = 'block'
         btn2Text.style.display = 'none'
      }

   })
}
hideText()
function checkNumberValidate() {
   const form = document.querySelector('.form')
   const formTextInvalid = document.querySelector('.form__text-hide')
   const formNumber = document.querySelector('.form__number')

   formNumber.placeholder = '+38 068 733-61-68'

   formNumber.onkeyup = (a) => {
      const ignore = [
         'Backspace', ')', '(', 'Escape', '-', '+', 'Shift', 'Alt',
         'CapsLock', 'Control', 'Meta', 'Enter', 'ArrowRight', 'ArrowLeft', undefined
      ];
      const currentLetter = a.key

      if (!isFinite(currentLetter) && !ignore.includes(currentLetter)) {
         formNumber.value = ''
         formNumber.classList.add('placeholder')
         formNumber.placeholder = 'Используйте только цифры'
      }
   }
   form.onsubmit = () => {
      if (formNumber.value.length < 10) {
         formNumber.classList.add('invalid')
         formTextInvalid.classList.add('form__invalid-text')
         formNumber.classList.remove('placeholder')
         formNumber.placeholder = '+38 068 733-61-68'
         return false
      } else {
         formNumber.classList.remove('invalid')
         formTextInvalid.classList.remove('form__invalid-text')
      }
   }

}
checkNumberValidate()
