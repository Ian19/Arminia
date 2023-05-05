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

    const geogebraBtnClick = function (game, outPage, btn) {

        $(btn).text("LOADING");
        game.nav = "skill";

        // Check if this is the first time applet has been loaded
        if (typeof ggbApplet === "undefined") {

            // console.log("NEW APPLET LOADING. game.applet == undefined");

            // console.log(game.geogebra.parameters);

            game.applet = {};
            game.applet = new GGBApplet('6.0', game.geogebra.parameters);

            // This needs to be before injection
            $("#A_geobebraView").show();

            game.applet.inject('applet_container');

        } else {

            // console.log("REMOVING OLD APPLET. game.applet != undefined");

            ggbApplet.remove();

            document.getElementById('applet_container').innerHTML = "";

            // console.log(game.geogebra.parameters);

            game.applet = {};
            game.applet = new GGBApplet('6.0', game.geogebra.parameters);
            game.applet.inject('applet_container');
        }


    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.geogebraBtnClick = geogebraBtnClick;
})();