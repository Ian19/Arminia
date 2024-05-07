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
                $('#A_infoSysMenuTitle').text("3D Viewer - The 13 Information Systems of The Fruit Of Life");
                $('#A_InfoSysHintBullets').html("<p>• click an Information System for more details<br></p><p>• click and hold to rotate the 3D menu</p>");
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

                $('#A_infoSysMenuTitle').text("3D Viewer - Metatron's Cube");
                $('#A_InfoSysHintBullets').html("<p>• click the Information System to go back to the Main Menu<br></p><p>• click and hold to rotate</p>");
                
                break;

            case "A_musicView":

                $('#A_infoSysMenuTitle').text("3D Viewer - Music - Star Tetrahedron inside a Sphere");
                $('#A_InfoSysHintBullets').html("<p>• click the Information System to go back to the Main Menu<br></p><p>• click and hold to rotate</p>");

                break;

            case "A_64TetraView":

                $("#A_homePage").hide();
                $("#A_overviewContainer").css("display", "none");
                $("#A_overviewBtn").text("OVERVIEW");
                $('#A_infoSysMenuTitle').text("3D Viewer - The 64 Tetrahedron Grid");
                $('#A_InfoSysHintBullets').html("<p>• click the Information System to go back to the Main Menu<br></p><p>• click and hold to rotate</p>");
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