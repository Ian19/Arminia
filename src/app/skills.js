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

    const skills = function (game) {

        Arminia.skillData(game);
        const app = $('#A_skillsContainer')[0];
        app.style.display = "inline-block";

        let selectedConstruction = {};

        $("#A_detailGridID").css("opacity", "0");

        d3.xml("src/assets/images/misc/hexNodes17g.svg").then(data => {

            const selectedStrokeColor = "#ECDB7A";
            const lockedStrokeColor = "#4e4b8d";
            const completedStrokeColor = "#cc66ff";
            const unlockedStrokeColor = "#acb0de";

            let svgNode = data.documentElement;
            const obj = $('#A_svgContainer')[0];
            obj.appendChild(svgNode);
            app.appendChild(obj);
            let svg = d3.select('#Layer_1');

            const skillsBox = svg.node().getBBox();
            const margin = -150;

            const worldTopLeft = [
                skillsBox.x - margin,
                skillsBox.y - margin
            ];

            const worldBottomRight = [
                skillsBox.x + skillsBox.width + margin,
                skillsBox.y + skillsBox.height + margin
            ];

            let zoom = d3.zoom()
                .scaleExtent([0.19, 10])
                .translateExtent([worldTopLeft, worldBottomRight])
                .on("zoom", zoomed);

            let g = svg.select('g');

            let oldSelectedSkillSVG = null;
            let oldSelectedSkillData = null;
            let skillSelected = false;

            g.select("[id = 'backgroundGrid']")
                .attr("opacity", 0.7);

            g.selectAll("[id *= 'Complete']")
                .attr("pointer-events", "none");

            g.selectAll("[id *= 'hexHover']")
            
                .data(game.skills.skillData)

                .on(
                    "click wheel " +
                    "mouseenter mouseout mousedown mouseup mousemove mouseover mouseleave " +
                    "drag dragend dragenter dragleave dragover dragstart drop " +
                    "touchstart touchend touchmove " +
                    "lostpointercapture pointerup pointerover",
                    function (event) {
                        event.preventDefault();
                    }
                )

                .on("pointerenter", function (d, i) {
                    mouseover1(this, d, i);
                })

                .on("pointerout", function (d, i) {

                    mouseout1(this, d, i);

                })

                .on("pointerdown", function (event, d) {

                    mousedown1(event, d);

                });

            svg.call(zoom);

            function zoomed({ transform }) {
                g.attr("transform", transform);
            }

            function mouseover1(t, d, i) {

                // console.log("mouseover1: " + t, d, i);

                d3.select(t).attr("stroke", "white");
                updateSkillsDetail(i);
            }

            function mouseout1(t, d, i) {

                // console.log("mouseout1: " + d, i);

                if (!skillSelected) {

                    // console.log("skill unselected mouseout1: " + i.status, d, this);

                    setStrokeColor(i, t);

                    $("#A_skillSelectText").css("display", "block");
                    $("#A_detailGridID").css("opacity", "0");

                } else {

                    updateSkillsDetail(oldSelectedSkillData);

                    // console.log("skill selected mouseout1: " + i.status, d, this);

                    if (!i.selected) {

                        setStrokeColor(i, t);

                    } else {

                        d3.select(t).attr("stroke", selectedStrokeColor);

                    }
                }
            }

            function mousedown1(t, newSkillData) {


                // console.log("mousedown1 0", t, newSkillData);

                // check if a skill is already selected
                if (skillSelected) {

                    // check if the new skill is the same as the last selected skill
                    if (oldSelectedSkillData == newSkillData) {

                        // console.log("mousedown1 1", t);

                        // on Click flash animation
                        // d3.select(this)
                        //     .style("fill", "#7465d1")
                        //     .transition()
                        //     .style("fill", "#382d70");

                        // d3.select(this)
                        //     .attr("fill", "#7465d1")
                        //     .transition()
                        //     .attr("fill", "#382d70");

                        // d3.select(t.target)
                        //     .attr("fill", "#7465d1")
                        //     .transition()
                        //     .attr("fill", "#382d70");

                        // toggle selected state and related graphics 
                        if (newSkillData.selected == true) {

                            // console.log("mousedown1 4", t);

                            // deselect skill  
                            // setStrokeColor(newSkillData, this);
                            setStrokeColor(newSkillData, t.target);

                            newSkillData.selected = false;
                            oldSelectedSkillSVG = null;
                            oldSelectedSkillData = null;
                            skillSelected = false;
                            selectedConstruction = null;

                        }

                    } else {

                        // console.log("mousedown1 3", t, oldSelectedSkillData);

                        // setStrokeColor(oldSelectedSkillData, oldSelectedSkillData.d3Data);
                        // temp fix until skilldata.d3Data has been completed for all skills
                        setStrokeColor(oldSelectedSkillData, oldSelectedSkillSVG);

                        oldSelectedSkillData.selected = false;

                        // select new skill
                        updateSkills(t.target, newSkillData);
                        // updateSkills(this, newSkillData);

                        // show detail
                        updateSkillsDetail(newSkillData);

                        selectedConstruction = newSkillData;

                    }
                } else {
                    // no skill selected, select new skill
                    // updateSkills(this, newSkillData);
                    updateSkills(t.target, newSkillData);
                    selectedConstruction = newSkillData;
                }
            }

            function setStrokeColor(skill, element) {

                // console.log("setStrokeColor");
                // console.log(skill);

                switch (skill.status) {

                    case "locked":

                        if (skill.d3Data.includes("hexHoverIS")) {

                            // d3.select(element).style("stroke", "cyan");
                            d3.select(element).attr("stroke", "cyan");

                        } else {

                            // d3.select(element).style("stroke", lockedStrokeColor); 
                            d3.select(element).attr("stroke", lockedStrokeColor);
                        }

                        break;

                    case "unlocked":

                        // d3.select(element).style("stroke", unlockedStrokeColor);
                        d3.select(element).attr("stroke", unlockedStrokeColor);
                        break;

                    case "completed":

                        // d3.select(element).style("stroke", completedStrokeColor);
                        d3.select(element).attr("stroke", completedStrokeColor);
                        break;

                }
            }

            function updateSkillsDetail(skill) {

                $("#A_skillSelectText").css("display", "none");
                $("#A_detailGridID").css("opacity", "1");
                $("#A_detailImage").attr("src", skill.thumbnailURL);
                $("#A_detailTitle").text(skill.name);
                $("#A_skillDifficulty").text(skill.difficulty);
                $("#A_detailRequirement").text(skill.requirement);

                // KATEX
                $(".A_detailOverview").html(skill.overview);

                $("#A_detailQuote").text(skill.quote);
                $("#A_detailQuotee").text(skill.quotee);
            }

            function updateSkills(t, n) {

                // console.log("updateSkills 0");
                // console.log(t);
                // console.log(n);

                oldSelectedSkillSVG = t;
                oldSelectedSkillData = n;
                n.selected = true;
                skillSelected = true;

                d3.select(t)
                    .attr("stroke", selectedStrokeColor);
                // .style("stroke", selectedStrokeColor);

                // d3.select(t)
                //     .style("fill", "#7465d1")
                //     .transition()
                //     .style("fill", "#382d70");


                // d3.select(t)
                //     .attr("fill", "#7465d1")
                //     .transition()
                //     .attr("fill", "#382d70");
            }

            function setSkillComplete(detailsData) {

                // g.select(detailsData.d3Data).style("stroke", completedStrokeColor);
                g.select(detailsData.d3Data).attr("stroke", completedStrokeColor);

            }

            function setSkillsUnlocked(unlockedSkills) {

                // iterate through all unlocked skills and set unlocked and apply skill tree changes                
                unlockedSkills.forEach(function (element) {

                    // i.e. element = ["The Vesuica Piscis", "The Genesis Pattern"]
                    game.skills.skillData.forEach(function (skill) {

                        if (element == skill.name) {

                            // check if skill is completed
                            // if (skill.completed != true) {
                            if (skill.status != "completed") {

                                skill.status = "unlocked";

                                // g.select(skill.d3Data).style("stroke", unlockedStrokeColor);
                                g.select(skill.d3Data).attr("stroke", unlockedStrokeColor);

                            }
                        }
                    });
                });
            }

            game.setSkillComplete = setSkillComplete;
            game.setSkillsUnlocked = setSkillsUnlocked;

            // init stroke colors 
            // g.selectAll("[id *= 'hexHover']").style("stroke", lockedStrokeColor);
            g.selectAll("[id *= 'hexHover']").attr("stroke", lockedStrokeColor);

            // g.selectAll("[id *= 'hexHoverIS']").style("stroke", "cyan");
            g.selectAll("[id *= 'hexHoverIS']").attr("stroke", "cyan");

            // g.select("#hexHoverCircle").style("stroke", unlockedStrokeColor);
            g.select("#hexHoverCircle").attr("stroke", unlockedStrokeColor);

            /////////////////////////////////////////////////////////////////////////////////////
            ////////////////////////////// LOCAL STORAGE INIT ////////////////////////////////////
            ///////// RETREIVE LOCAL STORAGE DATA AND APPLY TO SKILLDATA AND SKILL TREE /////////
            /////////////////////////////////////////////////////////////////////////////////////

            /////////////////////////////////////////
            /////////// TEMPORARY DEBUG PURPOSES ONLY
            ////////////////////////////////////////

            // for (let i = 0; i < game.skills.skillData.length; i++) {
            //     game.skills.skillData[i].id = i;
            // }
            // // console.log(game.skills.skillData);

            // localStorage.setItem('ArminiaSkills', "0, 1, 9, 10, 11, 12, 14, 15");
            // // localStorage.setItem('ArminiaSkills', "0");

            // // assign local storage as a comma separated array
            // let localStorageArray = localStorage.getItem('ArminiaSkills').split(",");

            // // iterate through local storage data and apply to skillData and skill tree
            // localStorageArray.forEach(function (element) {

            //     game.skills.skillData.forEach(function (skill) {

            //         if (element == skill.id) {

            //             skill.status = "completed";

            //             game.setSkillComplete(skill);
            //             game.setSkillsUnlocked(skill.unlocksSkills);

            //         }
            //     });
            // });

            /////////////////////////////////////////
            /////////// END DEBUG
            ////////////////////////////////////////

            // initialise the game.skills.skillData.id as its index in the skillData array
            for (let i = 0; i < game.skills.skillData.length; i++) {
                game.skills.skillData[i].id = i;
            }

            if (localStorage.getItem('ArminiaSkills') != '') {

                if (localStorage.getItem('ArminiaSkills') == null) {

                    localStorage.setItem('ArminiaSkills', '');

                } else {

                    // assign local storage as a comma separated array
                    let localStorageArray = localStorage.getItem('ArminiaSkills').split(",");

                    // iterate through local storage data and apply to skillData and skill tree
                    localStorageArray.forEach(function (element) {

                        game.skills.skillData.forEach(function (skill) {

                            if (element == skill.id) {

                                skill.status = "completed";
                                game.setSkillComplete(skill);
                                game.setSkillsUnlocked(skill.unlocksSkills);

                            }
                        });
                    });
                }
            }

        }); // END OF d3.xml()

        $(document).on('click', '#A_detailBtn', function () {

            if (selectedConstruction.status == "unlocked" || selectedConstruction.status == "completed") {

                game.skills.selectedSkill = selectedConstruction;

                game.geogebra.parameters.appName = "classic";
                game.geogebra.parameters.filename = game.skills.selectedSkill.geogebraFile;
                // game.geogebra.parameters.showAlgebraInput = true;
                game.geogebra.parameters.showToolBar = true;
                game.geogebra.parameters.showToolBarHelp = true;
                game.geogebra.parameters.allowStyleBar = true;
                game.geogebra.parameters.customToolBar = game.skills.selectedSkill.tools;

                Arminia.geogebraBtnClick(game, "A_homePage", "#A_detailBtn");

            }

        });

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.skills = skills;

})();