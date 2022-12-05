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

        // $('#A_detailGridID').css("display", "none");
        $("#A_detailGridID").css("opacity", "0");

        // DEMO ONLY
        /*
        for (let i = 0; i < game.skillData.length; i++) {
            if (i < 9) {
                game.skillData[i].completed = true;
                game.skillData[i].requirement = "COMPLETED";
            }
        }
        */

        // width="100%" height="100%"
        d3.xml("src/assets/images/hexNodes17d.svg").then(data => {

            var svgNode = data.documentElement;
            const obj = $('#A_svgContainer')[0];
            obj.appendChild(svgNode);
            app.appendChild(obj);
            var svg = d3.select('#Layer_1');

            // svg.attr("height", "100%");

            const skillsBox = svg.node().getBBox();
            const margin = -150;
            const worldTopLeft = [skillsBox.x - margin, skillsBox.y - margin];
            const worldBottomRight = [
                skillsBox.x + skillsBox.width + margin,
                skillsBox.y + skillsBox.height + margin
            ];

            var zoom = d3.zoom()
                .scaleExtent([0.19, 10])
                .translateExtent([worldTopLeft, worldBottomRight])
                .on("zoom", zoomed);

            var g = svg.select('g');

            var oldSelectedSkillSVG = null;
            var oldSelectedSkillData = null;
            var skillSelected = false;

            g.selectAll("[id *= 'hexHover']")
                .data(game.skills.skillData)
                .classed('hexHover', true)
                .style("stroke-opacity", 0)
                .on("mousedown", mousedown1)
                .on("mouseover", function (d, i) {
                    mouseover1(this, d, i);
                })
                .on("mouseout", mouseout1);

            svg.call(zoom);

            function mouseover1(t, d, i) {
                // console.log(t, d, i);
                d3.select(t).style("stroke-opacity", 1);
                updateSkillsDetail(i);
            }

            function mouseout1(d, i) {

                // console.log(d, i);

                if (!skillSelected) {

                    d3.select(this).style("stroke-opacity", 0);
                    $("#A_skillSelectText").css("display", "block");
                    // $("#A_detailGridID").css("display", "none");
                    $("#A_detailGridID").css("opacity", "0");

                } else {

                    updateSkillsDetail(oldSelectedSkillData);

                    if (!i.selected) {
                        d3.select(this).style("stroke-opacity", 0);
                    }
                }
            }

            function mousedown1(t, newSkillData, i) {

                // console.log(t, newSkillData, i);

                // check if a skill is already selected
                if (skillSelected) {

                    // check if the new skill is the same as the last selected skill
                    if (oldSelectedSkillData == newSkillData) {

                        d3.select(this)
                            .style("fill-opacity", 0.5)
                            .transition()
                            .style("fill-opacity", 0.01);

                        // toggle selected state and related graphics 
                        if (newSkillData.selected == true) {

                            // deselect skill    
                            d3.select(this)
                                .style("stroke-opacity", 0)
                                .style("stroke", "#acb0de");

                            newSkillData.selected = false;
                            oldSelectedSkillSVG = null;
                            oldSelectedSkillData = null;
                            skillSelected = false;
                            game.skills.selectedSkill = null;

                        } else {

                            // select skill    
                            d3.select(this)
                                .style("stroke-opacity", 1)
                                .style("stroke", "#BC67FF");

                            newSkillData.selected = true;
                            skillSelected = true;
                            game.skills.selectedSkill = newSkillData;

                        }
                    } else {

                        // selected skill is a different, clear previous skill                        
                        oldSelectedSkillSVG
                            .style("stroke-opacity", 0)
                            .style("stroke", "#acb0de");

                        oldSelectedSkillData.selected = false;
                        // select new skill
                        updateSkills(this, newSkillData);
                        // show detail
                        updateSkillsDetail(newSkillData);
                        game.skills.selectedSkill = newSkillData;

                    }
                } else {
                    // no skill selected, select new skill
                    updateSkills(this, newSkillData);
                    game.skills.selectedSkill = newSkillData;
                }
            }

            function updateSkillsDetail(skill) {
                $("#A_skillSelectText").css("display", "none");

                // $("#A_detailGridID").css("display", "grid");
                $("#A_detailGridID").css("opacity", "1");
                
                $("#A_detailImage").attr("src", skill.url);
                $("#A_detailTitle").text(skill.name);
                $("#A_skillDifficulty").text(skill.difficulty);
                $("#A_detailRequirement").text(skill.requirement);


                // KATEX
                $(".A_detailOverview").html(skill.overview);

                // MATHJAX
                // $(".A_detailOverview").text(skill.overview);
                // MathJax.Hub.Queue(["Typeset", MathJax.Hub, ".A_detailOverview"]);


                $("#A_detailQuote").text(skill.quote);
                $("#A_detailQuotee").text(skill.quotee);
            }

            function updateSkills(t, n) {

                oldSelectedSkillSVG = d3.select(t);
                oldSelectedSkillData = n;
                n.selected = true;
                skillSelected = true;

                d3.select(t)
                    .style("stroke-opacity", 1)
                    .style("stroke", "#ECDB7A");

                d3.select(t)
                    .style("fill-opacity", 0.5)
                    .transition()
                    .style("fill-opacity", 0.01);
            }

            function zoomed({ transform }) {
                g.attr("transform", transform);
            }

            function setAllSkillsIncomplete() {
                g.selectAll("[id *= 'hexStatus']")
                    .style("stroke-opacity", 0.3)
                    .style("fill-opacity", 0.5)
                    .selectAll("image")
                    .style("visibility", "hidden");

                g.selectAll("[id *= 'hexHover']")
                    .style("stroke", "#acb0de");


                g.selectAll("[id *= 'test1']")
                    .style("stroke", "#BC67FF")
                    .style("stroke-opacity", 0.7);


                // console.log(g);

                g.selectAll("[id *= 'Complete']")
                    .selectAll("image")
                    .style("visibility", "hidden");
            }

            function setSkillComplete(detailsData) {

                g.select("#" + detailsData.d3Data[0])
                    .style("stroke-opacity", 1)
                    .style("fill-opacity", 1);

                g.select("#" + detailsData.d3Data[1])
                    .selectAll("image")
                    .style("visibility", "visible");
            }

            setAllSkillsIncomplete();

            game.setSkillComplete = setSkillComplete;

            // start with circle selected            
            let newSkillData = game.skills.skillData[0];
            oldSelectedSkillData = newSkillData;
            newSkillData.selected = true;
            skillSelected = true;
            game.skills.selectedSkill = newSkillData;
            oldSelectedSkillData = newSkillData;

            var oldSelectedSkillSVG = g.select("[id *= 'hexHover1']")
                .style("stroke-opacity", 1)
                .style("stroke", "#ECDB7A");

            // show detail
            updateSkillsDetail(game.skills.selectedSkill);

            /*            
            function setSkillToIncomplete(hexID, skillID) {
    
                g.select("#" + hexID)
                    .style("stroke-opacity", 0.3)
                    .style("fill-opacity", 0.5);
    
                g.select("#" + skillID)
                    .selectAll("image")
                        .style("visibility", "hidden");       
                
            }  */

            // DEMO ONLY
            // setSkillToIncomplete("hexStatus3Triquetra", "Complete3Triquetra");     

            // d3.select(this).selectAll("polygon, path") 
            // g.selectAll("[id *= 'available']")

        });
        
        // let skillCheck = game.skills.selectedSkill;

        $(document).on('click', '#A_detailBtn', function () {

            // console.log("A_detailBtn click");

            // game.geogebra.parameters.appName = "graphing";
            game.geogebra.parameters.appName = "classic";
            // game.geogebra.parameters.appName = "suite";
            game.geogebra.parameters.filename = "/arminia/src/assets/geogebra/file_900x1000.ggb";
            // game.geogebra.parameters.filename = "/src/assets/geogebra/file_900x1000.ggb";
            game.geogebra.parameters.showAlgebraInput = false;
            game.geogebra.parameters.showToolBar = true;
            // game.geogebra.parameters.showMenuBar = true;


            Arminia.geogebraBtnClick(game, "A_homePage","#A_detailBtn");

        });

        //         // fade snowflake main out
        //         // fadeMain(game, "out");

        //         // var skill = "`" + game.skills.selectedSkill.name + "`";

        //         // $("#A_noSkillSelectedText").hide();
        //         // document.getElementById("A_geogebraPage").style.display = "block";

        //         // $.ajax({
        //         //     url: "action.php",
        //         //     method: "post",
        //         //     data: {
        //         //         action: "setSkill",
        //         //         skill: skill
        //         //     },
        //         //     success: function (response) {
        //         //         // console.log("success");
        //         //         // console.log(response);
        //         //     }
        //         // });
        //     }
        // }
    };
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.skills = skills;
})();