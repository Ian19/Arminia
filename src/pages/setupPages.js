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

(function () {

    var setupPages = function (game) {


        ////////////////////  64Tetraview Schwarzschild Proton Button setup  /////////////////////////

        Arminia.equationData(game);

        $(document).on('click', '#A_protonBtnID', function () {

            // temporary until more papers are added
            game.skills.selectedSkill = game.skills.equationData[0];

            console.log("A_protonBtnID click");

            game.geogebra.parameters.appName = "suite";
            game.geogebra.parameters.filename = "src/assets/geogebra/testCAS3.ggb";
            game.geogebra.parameters.showAlgebraInput = true;
            game.geogebra.parameters.showToolBar = false;

            Arminia.geogebraBtnClick(game, "A_64TetraView", "#A_protonBtnID");

        });

        //////////////////////////////////////////////////////////////////////////////////////////////

        function animationEnd(evt) {

            // console.log("myfunc1 END");
            // console.log(game.nav);
            // console.log(evt);
            // console.log(evt.target);
            // console.log(evt.target.style);
            // console.log(evt.target.style.display);
            // console.log(evt.animationName);

            // let element = document.getElementById(id),
            //     style = window.getComputedStyle(element),
            //     display = style.getPropertyValue('display');
            //     opacity = style.getPropertyValue('opacity');

            // console.log(display);
            // console.log(opacity);


            if (evt.animationName == "transitionOut") {

                evt.target.style.display = "none";

                // call setGUI at end A_geobebraView transitionOut as opposed to camera zoom out ending
                if (evt.target.id == "A_geobebraView") {
                    Arminia.setGUI(game);
                }

            } else {
                // Stops the viewer from seeing the start button text change from "start" to "loading"
                if (evt.target.id == "A_geobebraView") {
                    $("#A_detailBtn").text("START");  
                }
                
            }
        }

        let element = document.getElementById('A_geobebraView');
        element.addEventListener("webkitAnimationEnd", animationEnd, false);
        element.addEventListener("animationend", animationEnd, false);
        element.addEventListener("oanimationend", animationEnd, false);
        element.addEventListener("MSAnimationEnd", animationEnd, false);

        // element.addEventListener("webkitAnimationEnd", animationEnd, false);
        // element.addEventListener("animationend", animationEnd, false);
        // element.addEventListener("oanimationend", animationEnd, false);
        // element.addEventListener("MSAnimationEnd", animationEnd, false);
        
        element = document.getElementById('A_64TetraView');
        element.addEventListener("webkitAnimationEnd", animationEnd, false);
        element.addEventListener("animationend", animationEnd, false);
        element.addEventListener("oanimationend", animationEnd, false);
        element.addEventListener("MSAnimationEnd", animationEnd, false);

        element = document.getElementById('A_homePage');
        element.addEventListener("webkitAnimationEnd", animationEnd, false);
        element.addEventListener("animationend", animationEnd, false);
        element.addEventListener("oanimationend", animationEnd, false);
        element.addEventListener("MSAnimationEnd", animationEnd, false);

        function animatePageOut(id) {

            document.getElementById(id).classList.remove("A_pageIn");
            document.getElementById(id).style.display = "block";
            document.getElementById(id).classList.add("A_pageOut");
        }

        function animatePageIn(id) {

            document.getElementById(id).classList.remove("A_pageOut");
            document.getElementById(id).style.display = "block";
            document.getElementById(id).classList.add("A_pageIn");
        }


        game.animatePageOut = animatePageOut;
        game.animatePageIn = animatePageIn;

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.setupPages = setupPages;
})();