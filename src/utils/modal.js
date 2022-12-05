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

        $(".A_closeModal").click(function() {
            $("#A_simpleModal").hide();
        });

        $("#A_loginIcon").click(function() {
            if ($("#A_loginIcon").text() === "LOG IN") {
                $("#A_profilePage").hide();
                $("#A_loginMsgBox").hide();
                $("#A_registerBox").hide();
                $("#A_resetBox").hide();
                $("#A_info").hide();
                $("#A_loginBox").css("display", "flex");
                $("#A_simpleModal").show();
            } else {                
                var action = "log out";  
                $.ajax({  
                    url:"action.php",  
                    method:"POST",  
                    data:{action: action},  
                    success:function() { 
                        $("#A_loginIcon").text("LOG IN");
                    } 
                });
            }
        });

        $("#A_userIcon, #A_notification").click(function() {   
            
            if ($("#A_loginIcon").text() === "LOG IN") {
                $("#A_ProfileTitle").text("USERNAME");
            } else {
                var action = "get name";  
                $.ajax({  
                    url:"action.php",  
                    method:"POST",  
                    data:{action: action},  
                    success:function(response) { 
                        $("#A_ProfileTitle").text(response);
                    } 
                });
            }

            $("#A_loginMsgBox").hide();
            $("#A_registerBox").hide();
            $("#A_resetBox").hide();
            $("#A_loginBox").hide();
            $("#A_info").hide();
            $("#A_profilePage").show();
            $("#A_simpleModal").show();
        });


        $("#A_title").click(function() {   

            console.log("clicked title!!");
            
            $("#A_loginMsgBox").hide();
            $("#A_registerBox").hide();
            $("#A_resetBox").hide();
            $("#A_loginBox").hide();
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