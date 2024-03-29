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

    var setGUI = function (game) {


        switch (game.nav) {
            case "home":

                $("#A_overviewContainer").css("display", "none");
                $("#A_overviewBtn").text("OVERVIEW");
                
                $("#A_stepsBackgroundImage").css("display", "none");
                $("#A_sysHintContainer").show();
                $("#A_sidebarGroupHologram").hide();
                $("#checkbox9").prop("checked", true);
                $("#checkbox0").prop("checked", true);
                $("#checkbox2").prop("checked", true);
                $("#checkbox1").prop("checked", true);
                $("#checkbox3").prop("checked", false);
                $("#checkbox11").prop("checked", false);
                $("#checkbox12").prop("checked", false);

                $("#A_metatronView").hide();
                $("#A_musicView").hide();
                $("#A_64TetraView").hide();

                break;
            case "A_metatronView":
            case "A_musicView":
            case "A_64TetraView":

                $("#A_homePage").hide();

                $("#A_overviewContainer").css("display", "none");
                $("#A_overviewBtn").text("OVERVIEW");

                $("#A_sysHintContainer").hide();
                $("#A_sidebarGroupHologram").show();
                $('#A_protonBtnID').text("The Schwarzschild Proton");
                $('#A_holographicMassBtnID').text("Quantum Gravity and the Hologarphic Mass");
                break;
            case "skill":

                $("#A_metatronView").hide();
                $("#A_musicView").hide();
                $("#A_64TetraView").hide();

                $("#A_sysHintContainer").hide();
                $("#A_sidebarGroupHologram").hide();
                $("#A_detailButton").text("START");
                break;
        }


    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.setGUI = setGUI;
})();