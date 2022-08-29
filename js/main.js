'use strict';
function smooth() {
   //debugger
   let prevScrollpos = window.pageYOffset;
   console.log(prevScrollpos);

   const logoDesc = document.getElementById("logo__desc");
   const headerHeight = document.getElementById("header").offsetHeight
   const headerWidth = document.getElementById("header").offsetWidth

   const navbar = document.getElementById("navbar")
   const mobileNavInner = document.getElementById("mobile__nav-inner")
   const logoColor = document.getElementById("logo--color")


   if (prevScrollpos < 0) {
      mobileNavInner.style.display = 'none'
   }

   window.onscroll = () => {
      const currentScrollPos = window.pageYOffset;

      if (currentScrollPos === 0) {
      }
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
            mobileNavInner.style.visibility = 'visible'
            mobileNavInner.style.display = 'flex'
         } else {
            mobileNavInner.style.visibility = 'hidden'
            mobileNavInner.style.display = 'none'

         }
         prevScrollpos = currentScrollPos;
      }
   }

}

smooth()