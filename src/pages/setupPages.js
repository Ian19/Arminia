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

        ////////////////////  64Tetra Page SVG MouseOver effects  /////////////////////////

        const minorStrokeOut = "2";
        const majorStrokeOut = "8";

        const majorStrokeOver = "10";
        const minorStrokeOver = "4";


        Array.from(document.getElementsByClassName("A_64Tetra3D")).forEach(
            function (element, index) {

                // console.log("onmouseover");
                // console.log(index);

                element.onload = function () {

                    let t = this.contentDocument;

                    t.getElementById("fruit").setAttributeNS(null, "stroke-width", minorStrokeOut);
                    t.getElementById("sixtyFour").setAttributeNS(null, "stroke-width", majorStrokeOut);

                    this.contentDocument.getElementById("hexagon").onmouseover = function () {

                        // console.log("onmouseover");

                        t.getElementById("fruit").setAttributeNS(null, "stroke-width", minorStrokeOver);
                        t.getElementById("sixtyFour").setAttributeNS(null, "stroke-width", majorStrokeOver);
                        this.setAttributeNS(null, "stroke-width", majorStrokeOver);
                    };

                    this.contentDocument.getElementById("hexagon").onmouseout = function () {

                        t.getElementById("fruit").setAttributeNS(null, "stroke-width", minorStrokeOut);
                        t.getElementById("sixtyFour").setAttributeNS(null, "stroke-width", majorStrokeOut);
                        this.setAttributeNS(null, "stroke-width", majorStrokeOut);
                    };
                }
            }
        );

        ////////////////////  64Tetra Page Schwarzschild Proton Button setup  /////////////////////////

        Arminia.equationData(game);

        $(document).on('click', '#A_protonBtnID', function () {

            // temporary until more papers are added
            // game.skills.lastSkill = game.skills.selectedSkill;
            game.skills.selectedSkill = game.skills.equationData[0];

            // game.skills.lastSkill = game.skills.selectedSkill;

            // console.log("A_protonBtnID click");

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

            // console.log("animationEnd");
            // console.log(game.skills.selectedSkill);


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

            if (id == "A_homePage") {

                document.getElementById(id).style.display = "flex";

            } else {

                document.getElementById(id).style.display = "block";

            }

            document.getElementById(id).classList.remove("A_pageIn"); 
            document.getElementById(id).style.display = "flex";           
            document.getElementById(id).classList.add("A_pageOut");
        }

        function animatePageIn(id) {

            if (id == "A_homePage") {

                document.getElementById(id).style.display = "flex";

            } else {

                document.getElementById(id).style.display = "block";

            }

            document.getElementById(id).classList.remove("A_pageOut");
            // document.getElementById(id).style.display = "block";
            // document.getElementById(id).style.display = "flex";
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