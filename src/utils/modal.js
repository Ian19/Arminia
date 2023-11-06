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

    var modal = function () {

        console.log("MODAL LOADED");

        $(".A_closeModal").click(function() {
            $("#A_simpleModal").hide();
        });

        // $("#A_userIcon").click(function() {   

        //     // $("#A_ProfileTitle").text("USERNAME");

        //     $("#A_info").hide();
        //     $("#A_profilePage").show();
        //     $("#A_simpleModal").show();
        // });


        $("#A_titleClick").click(function() {  
        // $("#A_mainSwish").click(function() {  
            
            console.log("A_title click");

            $("#A_profilePage").hide();
            $("#A_info").show();
            $("#A_simpleModal").show();

        });

        // If mouse is clicked and mouseup happens over a different element, then ignore click event
        let from = {};
        window.addEventListener("mousedown", mousedown1);
        window.addEventListener("mouseup", mouseup1);
        function mouseup1(e) {
            if (e.target === $("#A_simpleModal")[0]  &&  from === $("#A_simpleModal")[0]) {
                $("#A_simpleModal").hide();
            }            
        }
        function mousedown1(e) {
            from = e.target;
        }

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.modal = modal;
})();