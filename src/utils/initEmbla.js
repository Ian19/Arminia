// Copyright 2022 Ian Hicks

// This file is part of Arminia.

// Arminia is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Arminia is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Arminia.  If not, see <http://www.gnu.org/licenses/>.


const wrap = document.querySelector(".embla");
const viewPort = wrap.querySelector(".embla__viewport");
const prevBtn = wrap.querySelector(".embla__button--prev");
const nextBtn = wrap.querySelector(".embla__button--next");
const dots = document.querySelector(".embla__dots");

const embla = EmblaCarousel(viewPort, {
     loop: true,
     dragFree: true,
     skipSnaps: true,
     containScroll: "keepSnaps"
});

const onSlideClick = (slideNode) => {
     if (embla.clickAllowed()) {
          var card = slideNode.getElementsByClassName("card__inner")[0];
          card.classList.toggle("is-flipped");
     }
}

embla.slideNodes().forEach((slideNode) => {
     slideNode.addEventListener('click', () => onSlideClick(slideNode), false)
})

const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
     prevBtn.addEventListener('click', embla.scrollPrev, false);
     nextBtn.addEventListener('click', embla.scrollNext, false);
};

const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
     return () => {
          if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
          else prevBtn.setAttribute('disabled', 'disabled');

          if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
          else nextBtn.setAttribute('disabled', 'disabled');
     };
};

const setupDotBtns = (dotsArray, embla) => {
     dotsArray.forEach((dotNode, i) => {
          dotNode.addEventListener("click", () => embla.scrollTo(i), false);
     });
};

const generateDotBtns = (dots, embla) => {
     const template = document.getElementById("embla-dot-template").innerHTML;
     dots.innerHTML = embla.scrollSnapList().reduce(acc => acc + template, "");
     return [].slice.call(dots.querySelectorAll(".embla__dot"));
};

const selectDotBtn = (dotsArray, embla) => () => {
     const previous = embla.previousScrollSnap();
     const selected = embla.selectedScrollSnap();
     dotsArray[previous].classList.remove("is-selected");
     dotsArray[selected].classList.add("is-selected");
};

const dotsArray = generateDotBtns(dots, embla);
const setSelectedDotBtn = selectDotBtn(dotsArray, embla);

const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

setupPrevNextBtns(prevBtn, nextBtn, embla);
setupDotBtns(dotsArray, embla);

embla.on("select", setSelectedDotBtn);
embla.on("select", disablePrevAndNextBtns);
embla.on("init", setSelectedDotBtn);
embla.on("init", disablePrevAndNextBtns);


// console.log("hello world");

$("#A_64TetraView").hide();




// (function () {

//      const initEmbla = function () {

//           console.log("hello world");

          

//           const wrap = document.querySelector(".embla");
//           const viewPort = wrap.querySelector(".embla__viewport");
//           const prevBtn = wrap.querySelector(".embla__button--prev");
//           const nextBtn = wrap.querySelector(".embla__button--next");
//           const dots = document.querySelector(".embla__dots");

//           const embla = EmblaCarousel(viewPort, {
//                loop: true,
//                dragFree: true,
//                skipSnaps: true,
//                containScroll: "keepSnaps"
//           });

//           const onSlideClick = (slideNode) => {
//                if (embla.clickAllowed()) {
//                     var card = slideNode.getElementsByClassName("card__inner")[0];
//                     card.classList.toggle("is-flipped");
//                }
//           }

//           embla.slideNodes().forEach((slideNode) => {
//                slideNode.addEventListener('click', () => onSlideClick(slideNode), false)
//           })

//           const setupPrevNextBtns = (prevBtn, nextBtn, embla) => {
//                prevBtn.addEventListener('click', embla.scrollPrev, false);
//                nextBtn.addEventListener('click', embla.scrollNext, false);
//           };

//           const disablePrevNextBtns = (prevBtn, nextBtn, embla) => {
//                return () => {
//                     if (embla.canScrollPrev()) prevBtn.removeAttribute('disabled');
//                     else prevBtn.setAttribute('disabled', 'disabled');

//                     if (embla.canScrollNext()) nextBtn.removeAttribute('disabled');
//                     else nextBtn.setAttribute('disabled', 'disabled');
//                };
//           };

//           const setupDotBtns = (dotsArray, embla) => {
//                dotsArray.forEach((dotNode, i) => {
//                     dotNode.addEventListener("click", () => embla.scrollTo(i), false);
//                });
//           };

//           const generateDotBtns = (dots, embla) => {
//                const template = document.getElementById("embla-dot-template").innerHTML;
//                dots.innerHTML = embla.scrollSnapList().reduce(acc => acc + template, "");
//                return [].slice.call(dots.querySelectorAll(".embla__dot"));
//           };

//           const selectDotBtn = (dotsArray, embla) => () => {
//                const previous = embla.previousScrollSnap();
//                const selected = embla.selectedScrollSnap();
//                dotsArray[previous].classList.remove("is-selected");
//                dotsArray[selected].classList.add("is-selected");
//           };

//           const dotsArray = generateDotBtns(dots, embla);
//           const setSelectedDotBtn = selectDotBtn(dotsArray, embla);

//           const disablePrevAndNextBtns = disablePrevNextBtns(prevBtn, nextBtn, embla);

//           setupPrevNextBtns(prevBtn, nextBtn, embla);
//           setupDotBtns(dotsArray, embla);

//           embla.on("select", setSelectedDotBtn);
//           embla.on("select", disablePrevAndNextBtns);
//           embla.on("init", setSelectedDotBtn);
//           embla.on("init", disablePrevAndNextBtns);

//           $("#A_64TetraView").hide();

//      };

//      if (window.Arminia === undefined) {
//           window.Arminia = {};
//      }

//      Arminia.initEmbla = initEmbla;

// })();