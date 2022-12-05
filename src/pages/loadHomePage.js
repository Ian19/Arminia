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

    var loadHomePage = function () {

        function load() {

            var str1 = katex.renderToString("c = \\pm\\sqrt{a^2 + b^2}", {
                throwOnError: false
            });


            document.getElementById("A_homePage").innerHTML = `
        
                <div id="skillIntroText">
                    Explore Reality using the sacred geometry of the Information Systems of the Fruit of Life.<br>
                    Track your progress with the Skill Tree and unlock more complex geometric constructions and scientific
                    papers.<br>
                </div>
    
                <div id="A_skillsContainer">
    
                    <div id="A_svgContainer"></div>
        
                    <div id="A_SkillTextTitle">
                        SKILL TREE
                        <div id="A_SkillTextTitleSub">
                            LEVEL: 2 <br>
                            COMPLETED: 2 <br>
                            INCOMPLETE: 216
                        </div>
                    </div>
        
                    <div id="A_mouseMovementIcon">
                        <img src="src/assets/images/mouse_movement.png" id="A_mouse_movement"></img>
                    </div>
        
                    <div class="A_mouseZoomIcon">
                        <img src="src/assets/images/mouse_zoom.png" id="A_mouse_zoom"></img>
                    </div>
    
                </div>
    
                <div id="A_skillSelectText">No Skill Selected. Select a Skill and press Start to begin.</div>
    
                <div class="A_detailGrid" id="A_detailGridID">
    
                    <div class="A_column1">
                        <div class="A_item">
                            <img id="A_detailImage" src="" alt=""></img>
                        </div>
                    </div>
    
                    <div class="A_column2">
                        <div class="A_item">
                            <div id="A_detailTitle"></div>
                            <div class="A_Difficulty" id="A_skillDifficulty"></div>
                            <div id="A_detailRequirement"></div>
        
                            <div class="flex-container">
                                <span class="A_detailsButton A_detailsButtonText" id="A_detailBtn">START</span>
                            </div>
        
                        </div>
                    </div>
    
                    <div class="A_column3" id="A_col3"></div>
                    <div class="A_column4" id="A_col4"></div>
    
                    <div class="A_column5">
                        <div class="A_item">
                            <div display="inline" class="A_detailOverview" id="katexTest1"></div>
                            <div id="A_detailQuote"></div>
                            <div id="A_detailQuotee"></div>
                        </div>
                    </div>    
                </div>
            `;
        }

        // load();
        // document.getElementById("A_mouse_movement").src = mouse_movement;
        // document.getElementById("A_mouse_zoom").src = mouse_zoom;

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.loadHomePage = loadHomePage;
})();