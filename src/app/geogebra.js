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

    const geogebra = function (game) {

        let cheatNum = 0;

        let parameters = {
            "scaleContainerClass": "scaleContainerClass",
            "borderColor": "#FFFFFF"
        };

        parameters.appletOnLoad = function (api) {

            Arminia.setGUI(game);
            let svg;
            let zoom;
            let ready = false;
            let A_SVGSteps;

            $("#A_cheatBtnID").hide();

            $("#A_startGeogebraBtn").click(function () {

                $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[0]);

                ready = true;                

                let el1;

                if (parameters.appName == "classic") {

                    el1 = document.querySelector('#A_SVGStep1');

                } else {

                    el1 = document.querySelector('#step1White');
                    $("#A_cheatBtnID").show();

                }

                const bbox1 = el1.getBBox();

                let midX = bbox1.x + (bbox1.width / 2);
                let midY = bbox1.y + (bbox1.height / 2);

                svg.transition()
                    .duration(750)
                    .call(zoom.translateTo, midX, midY)
                    .on("end", myCallback);

                $("#A_startGeogebraBtn").hide();

            });

            function myCallback() {
                svg.transition()
                    .duration(750)
                    .call(zoom.scaleTo, game.skills.selectedSkill.zoomScale);
            }

            // settings for CAS or graphing 
            if (parameters.appName == "classic") {

                // ready = true;

                game.animatePageOut("A_homePage");
                $(".appletStyle").addClass("A_graphing");

                // $("#A_stepsBackgroundImage").css("display", "none");
                // $(".A_mouseIconPaper").hide();

                ////////////////////////////////////////////////////////////////////////////////////////////
                // The reason why object content doesn't refresh is that removing value from data attribute 
                // doesn't clear document created by object element in the window. If the origin is different 
                // (i.e. opening files in the window) you don't have access to contents of that window because 
                // of security reason. So removing entire tag makes sense and recreate again whenever needed.

                $("#A_stepsBackgroundImage").css("display", "inline-block");

                // var object = document.getElementById("A_stepsBackgroundImage");
                // object.setAttribute('data', game.skills.selectedSkill.stepsImage2);

                // var clone = object.cloneNode(true);
                // var parent = object.parentNode;

                // parent.removeChild(object);
                // parent.appendChild(clone);

                ////////////////////////////////////////////////////////////////////////////////////////////

                // $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[0]);   

                ////////////////////////////////////////////////////////////////////////////////////////////
                //////////////////////////////  END OLD CLASSIC CODE  ////////////////////////////////////////
                ////////////////////////////////////////////////////////////////////////////////////////////


                $("#A_stepsImage").css("display", "none");
                $("#A_StepsImageCenter").css("display", "none");

                // $("#A_stepsBackgroundImage").css("display", "inline-block");
                $("#A_startGeogebraBtn").show();

                $(".A_mouseIconPaper").show();






                d3.xml(game.skills.selectedSkill.stepsImage2).then(data => {

                    var svgNode = data.documentElement;
                    let obj = $('#A_stepsBackgroundImage')[0];
                    obj = $('#A_stepsBackgroundImage')[0];
                    obj.appendChild(svgNode);

                    svg = d3.select(game.skills.selectedSkill.elementID);
                    svg.style("width", "100%").style("height", "100%").style("display", "block");


                    /////////////////////   NEW CODE  //////////////////////

                    A_SVGSteps = svgNode.getElementById('A_SVGSteps');

                    // console.log("test property!!");
                    // console.log(A_SVGSteps.getBBox());
                    // console.log(A_SVGSteps.width.baseVal.value);

                    removeAllAnimateTags();
                    addAnimateTags(0, 1);

                    zoom = d3.zoom()
                        .scaleExtent([1, 10])
                        .on("zoom", zoomed);

                    var g = svg.select('g');

                    svg.call(zoom);

                    function zoomed({ transform }) {
                        g.attr("transform", transform);
                    }



                });

                function addNbsp(step) {
                    const str = "<p>&nbsp;</p><p>&nbsp;</p>";
                    step = str + step + str;
                    return step;
                }

                $("#A_stepsBody").html(addNbsp("Press Start to begin."));

            } else {

                // parameters.appName == "suite" 

                $("#A_stepsImage").css("display", "none");
                $("#A_StepsImageCenter").css("display", "none");

                $("#A_stepsBackgroundImage").css("display", "inline-block");
                $("#A_startGeogebraBtn").show();

                $(".A_mouseIconPaper").show();

                d3.xml("src/assets/images/papers/schwarzschildproton/The_Schwarzschild_Proton5.svg").then(data => {

                    var svgNode = data.documentElement;
                    const obj = $('#A_stepsBackgroundImage')[0];
                    obj.appendChild(svgNode);

                    svg = d3.select('#A_schwarzsPPaper');
                    svg.style("width", "100%").style("height", "100%").style("display", "block");

                    d3.select('#step1Black')
                        .style("display", "none");

                    d3.select('#step1White')
                        .style("display", "inline");

                    zoom = d3.zoom()
                        .scaleExtent([1, 10])
                        .on("zoom", zoomed);

                    var g = svg.select('g');

                    svg.call(zoom);

                    function zoomed({ transform }) {
                        g.attr("transform", transform);
                    }



                });

                $(".appletStyle").addClass("A_cas");
                game.animatePageOut("A_64TetraView");

                function addNbsp(step) {
                    const str = "<p>&nbsp;</p><p>&nbsp;</p>";
                    step = str + step + str;
                    return step;
                }

                $("#A_stepsBody").html(addNbsp("Press Start to begin."));

            }

            // Show and hide elements as Geogebra loads               
            game.animatePageIn("A_geobebraView");
            game.main.setEnabled(false);

            // Setup Steps System
            let steps = game.skills.selectedSkill.steps;
            let stepsLength = game.skills.selectedSkill.steps.length;

            // Init stepper values
            $("#A_stepsCount").html("Steps 1 of " + stepsLength.toString());
            $("#A_stepsValue").text("0%");

            $("#A_stepsProgress").css("width", "0%");

            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////// add and or remove blinking animation to svg file ////////////////////

            // if (parameters.appName == "classic") {

            //     document.getElementById('A_stepsBackgroundImage').onload = function () {

            //         svgObject = document.getElementById('A_stepsBackgroundImage').contentDocument;
            //         removeAllAnimateTags();
            //         addAnimateTags(0, 1);

            //     };

            // }

            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////////////////////////////////////////////////////////

            // Position and size Geogebra and flex steps image box 
            $(".scaleContainerClass").css("display", "inline-block");
            let rect = document.querySelector(".scaleContainerClass").getBoundingClientRect();
            let h = rect.bottom - rect.top;
            $("#A_stepsImageFlex").css("height", h + "px");

            // Steps Image title, difficulty and definition
            $("#A_stepsImageTitle").text(game.skills.selectedSkill.name);
            $("#A_stepsImageDifficulty").text(game.skills.selectedSkill.difficulty);
            $("#A_stepsImageDefinition").text(game.skills.selectedSkill.overview);

            // Updates html elements on Overview page with new skill data if the applet has been reinjected

            $("#A_geoDetailImage").attr("src", game.skills.selectedSkill.url2);
            $("#A_geoDetailTitle").text(game.skills.selectedSkill.name);
            $("#A_geoDifficulty").text(game.skills.selectedSkill.difficulty);
            $("#A_geoDetailRequirement").text(game.skills.selectedSkill.requirement);
            $("#A_geoDetailQuote").text(game.skills.selectedSkill.quote);
            $("#A_geoDetailQuotee").text(game.skills.selectedSkill.quotee);
            $("#A_geoDetailDefinition").text(game.skills.selectedSkill.overview);

            document.getElementById("A_geoDetailBody2").innerHTML = game.skills.selectedSkill.geoDetailBody;


            // temporary for schwarzschild paper demo
            if (parameters.appName == "suite") {

                $("#A_prevPage").click(function () {
                    showPrevPage();
                });

                $("#A_nextPage").click(function () {
                    showNextPage();
                });

                const url = "src/assets/docs/The_Schwarzschild_Proton.pdf";

                // Loaded via <script> tag, create shortcut to access PDF.js exports.
                var pdfjsLib = window['pdfjs-dist/build/pdf'];

                // The workerSrc property shall be specified.
                pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

                let pdfDoc = null,
                    pageNum = 1,
                    pageRendering = false,
                    pageNumPending = null

                const canvas = document.querySelector('#A_pdfRender'),
                    ctx = canvas.getContext('2d')

                const scale = 1.3;

                // Get page info from document, resize canvas accordingly, and render page.
                // param num Page number. 

                // let testRect = document.querySelector(".scaleContainerClass").getBoundingClientRect();
                // let w = testRect.right - testRect.left;

                // Render the page
                function renderPage(num) {

                    pageRendering = true;
                    // Using promise to fetch the page

                    // Get page
                    pdfDoc.getPage(num).then(function (page) {

                        // Scaled Viewport
                        // var desiredWidth = w - 20;

                        // var viewport = page.getViewport({ scale: 1, });
                        // var scale = w / viewport.width;
                        // var scaledViewport = page.getViewport({ scale: scale, });
                        // canvas.height = viewport.height;
                        // canvas.width = viewport.width;

                        const viewport = page.getViewport({ scale: scale });
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Render PDF page into canvas context
                        const renderContext = {
                            canvasContext: ctx,
                            viewport: viewport
                            // viewport: scaledViewport
                        }

                        let renderTask = page.render(renderContext);

                        // Wait for rendering to finish
                        renderTask.promise.then(function () {

                            pageRendering = false;

                            if (pageNumPending !== null) {
                                // New page rendering is pending
                                renderPage(pageNumPending);
                                pageNumPending = null;
                            }
                        });
                    });
                    // Output current page
                    document.querySelector('#A_pageNum').textContent = num;
                }

                // If another page rendering in progress, waits until the rendering is
                // finised. Otherwise, executes rendering immediately.

                function queueRenderPage(num) {
                    if (pageRendering) {
                        pageNumPending = num;
                    } else {
                        renderPage(num);
                    }
                }

                // Show previous page
                const showPrevPage = () => {
                    if (pageNum <= 1) {
                        return;
                    }
                    pageNum--;
                    queueRenderPage(pageNum);
                }

                // Show next page
                const showNextPage = () => {
                    if (pageNum >= pdfDoc.numPages) {
                        return;
                    }
                    pageNum++;
                    queueRenderPage(pageNum);
                }

                // Asynchronously downloads PDF
                pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {

                    pdfDoc = pdfDoc_;
                    document.querySelector('#A_pageCount').textContent = pdfDoc.numPages;

                    // Initial/first page rendering
                    renderPage(pageNum);
                });
            }

            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////////////////////////  STEPPER //////////////////////////////////////////

            let stepsArray = [];
            const stepsProgress = $("#A_stepsProgress")[0];

            function buildStepsView() {

                let gotK = false;

                let stepsPercentage = Math.round(100 / stepsLength); // i.e 33 or 66 or 99 

                for (let j = 0; j <= stepsArray.length - 1; j++) {

                    let n = stepsPercentage * (j);

                    // Is step incomplete?
                    if (stepsArray[j] == 0) {

                        if (parameters.appName == "classic") {

                            removeAllAnimateTags();
                            addAnimateTags(j, 1);

                        } else {

                            if (j == 0) {

                                let stepElement = document.getElementById("step1White");
                                const stepBox = stepElement.getBBox();

                                let midX = stepBox.x + (stepBox.width / 2);
                                let midY = stepBox.y + (stepBox.height / 2);

                                function myCallback4() {

                                    svg.transition()
                                        .duration(750)
                                        .call(zoom.scaleTo, game.skills.selectedSkill.zoomScale);
                                }

                                svg.transition()
                                    .duration(750)
                                    .call(zoom.translateTo, midX, midY)
                                    .on("end", myCallback4);
                            }
                        }

                        $("#A_stepsCount").html("Steps " + `${j + 1}` + " of " + stepsLength.toString());
                        $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[j]);
                        $("#A_stepsProgress").css("width", n.toString() + "%");
                        $("#A_stepsValue").text(stepsProgress.style.width);
                        break;

                    } else {
                        // Test if final step has been reached
                        if (j == stepsLength - 1) {

                            // final step has been reached
                            if (parameters.appName == "classic") {
                                removeAllAnimateTags();

                                ////////////////////  FINAL STEP HAS BEEN REACHED AND CENTER ZOOM OUT  ////////////////////

                                const bbox1 = A_SVGSteps.getBBox();

                                let midX = bbox1.x + (bbox1.width / 2);
                                let midY = bbox1.y + (bbox1.height / 2);

                                svg.transition()
                                    .duration(750)
                                    .call(zoom.translateTo, midX, midY)
                                    .on("end", myCallback5);


                                function myCallback5() {
                                    svg.transition()
                                        .duration(750)
                                        .call(zoom.scaleTo, 1);
                                }

                                /////////////////////////////////////////////////////////////////////////////////////////////

                            } else {

                                let el = document.getElementById("A_schwarzsPPaper");
                                let svgWidth = el.width.baseVal.value;
                                let svgHeight = el.height.baseVal.value;

                                function myCallback4() {

                                    svg.transition()
                                        .duration(750)
                                        .call(zoom.translateTo, 0.5 * svgWidth, 0.5 * svgHeight);
                                }

                                svg.transition()
                                    .duration(750)
                                    .call(zoom.scaleTo, 1)
                                    .on("end", myCallback4);
                            }

                            $("#A_stepsCount").html("Steps Complete (" + `${j + 1}` + " of " + stepsLength.toString() + ")");
                            $("#A_stepsBody").html("<p>&nbsp;</p><p>&nbsp;</p>" + "<i>" + game.skills.selectedSkill.name + " has been added to your achievements!</i>" + "<p>&nbsp;</p><p>&nbsp;</p>");
                            $("#A_stepsProgress").css("width", "100%");
                            $("#A_stepsValue").text(stepsProgress.style.width);

                            /////////////////////////////////////////////////////////////////////////////
                            //////////////////////  LOCAL STORAGE OPERATIONS ////////////////////////////
                            /////////////////////////////////////////////////////////////////////////////

                            game.skills.selectedSkill.completed = "true";

                            if (localStorage.getItem('ArminiaSkills') == '') {

                                localStorage.setItem('ArminiaSkills', parseInt(game.skills.selectedSkill.id));

                            } else {

                                let lsTest = localStorage.getItem('ArminiaSkills');
                                // [0,1,2,5,11]    

                                let duplicate = false;

                                for (let i = 0; i < lsTest.length; i++) {
                                    if (lsTest[i] == game.skills.selectedSkill.id) {
                                        duplicate = true;
                                        break;
                                    }
                                }

                                if (!duplicate) {

                                    lsTest = lsTest + "," + parseInt(game.skills.selectedSkill.id);
                                    localStorage.setItem('ArminiaSkills', lsTest);
                                }
                            }

                            game.setSkillComplete(game.skills.selectedSkill);
                            game.setSkillsUnlocked(game.skills.selectedSkill.unlocksSkills);

                            /////////////////////////////////////////////////////////////////////////////
                            /////////////////////////////////////////////////////////////////////////////
                            /////////////////////////////////////////////////////////////////////////////

                        } else {
                            // step complete, but final step NOT reached

                            if (parameters.appName == "classic") {
                                removeAllAnimateTags();
                                addAnimateTags(j, 2);

                                let s = j + 2;

                                const el1 = document.querySelector('#A_SVGStep' + s.toString());
                                const bbox1 = el1.getBBox();

                                let midX = bbox1.x + (bbox1.width / 2);
                                let midY = bbox1.y + (bbox1.height / 2);

                                // console.log("PANNING AND ZOOMING!");

                                svg.transition()
                                    .duration(750)
                                    .call(zoom.translateTo, midX, midY)
                                    .on("end", myCallback5);

                                function myCallback5() {
                                    svg.transition()
                                        .duration(750)
                                        .call(zoom.scaleTo, game.skills.selectedSkill.zoomScale);
                                }

                            }

                            if (parameters.appName == "suite") {

                                // commented as of paperZoom
                                // let s = j + 1;
                                let s = j + 2;

                                d3.select("#step" + s.toString() + "Black")
                                    .style("display", "none");

                                d3.select("#step" + s.toString() + "White")
                                    .style("display", "inline");


                                // divider and text handler for papers
                                game.skills.selectedSkill.elements.forEach(function (element) {

                                    if (element.num == s) {

                                        if (element.type == "divider") {

                                            d3.select("#divider" + s.toString() + "Black")
                                                .style("stroke", "white");

                                        } else {

                                            d3.select("#text" + s.toString() + "Black")
                                                .style("display", "none");

                                            d3.select("#text" + s.toString() + "White")
                                                .style("display", "inline");

                                        }
                                    }
                                });

                                let stepElement = document.getElementById("step" + s.toString() + "White");
                                const stepBox = stepElement.getBBox();

                                let midX = stepBox.x + (stepBox.width / 2);
                                let midY = stepBox.y + (stepBox.height / 2);

                                function myCallback3() {

                                    svg.transition()
                                        .duration(750)
                                        .call(zoom.scaleTo, game.skills.selectedSkill.zoomScale);
                                }

                                svg.transition()
                                    .duration(750)
                                    .call(zoom.translateTo, midX, midY)
                                    .on("end", myCallback3);


                                // console.log("BEGIN ZOOM AND TRANSLATE!");
                                // if (!gotK) {        

                                //     let k;

                                //     for (k = 1; k <= stepsArray.length - 1; k++) {
                                //         if (stepsArray[k] == 0) {

                                //             gotK = true;

                                //             svg.transition()
                                //                 .duration(750)
                                //                 .call(zoom.translateTo, midX, midY)
                                //                 .on("end", myCallback3);

                                //             break;
                                //         }
                                //     }
                                // }
                            }

                            $("#A_stepsCount").html("Steps " + `${j + 2}` + " of " + stepsLength.toString());
                            $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[j + 1]);
                            $("#A_stepsProgress").css("width", n.toString() + "%");
                            $("#A_stepsValue").text(stepsProgress.style.width);
                        }
                    }
                }
            }

            // blink checkbox
            checkbox7.onclick = function () {
                removeAllAnimateTags();
                updateWorkbook();
            }

            function updateWorkbook() {

                // stop CAS access until start button clicked

                if (ready) {

                    let objNumber = api.getObjectNumber();
                    let strName, strType, strState, strCommand;
                    stepsArray = [];

                    // Init stepsArray so that each element equals 1, which is the 'correct step' state
                    for (let j = 0; j <= stepsLength - 1; j++) {
                        stepsArray.push(1);
                    }

                    // Init multidimensional test array elements to the 0 'incorrect' state. This array has the same array structure as the steps skillData model
                    // Test array is multidimensional because a single step can need two or more geogebra objects to become completed
                    let test = [];
                    for (let n = 0; n < stepsLength; n++) {
                        test[n] = [];
                        for (let m = 0; m < steps[n].length; m++) {
                            test[n].push(0);
                        }
                    }

                    // Begin main construction steps testing by iterating through all the objects in Geogebra
                    for (let i = 0; i < objNumber; i++) {

                        // Get first object and put in String 'strState
                        strName = api.getObjectName(i);
                        strType = api.getObjectType(strName);
                        strCommand = api.getCommandString(strName);

                        if (strType == "text") {
                            strCommand = api.getValueString(strName);
                        } else {
                            strCommand = api.getCommandString(strName);
                        }

                        strState = strType + " " + strName + ", " + strCommand;
                        // console.log(strState);

                        // Check if geogebra object exists in model skillData steps by building multidimension test array
                        for (let j = 0; j < stepsLength; j++) {
                            for (let k = 0; k < steps[j].length; k++) {

                                if (strState == steps[j][k]) {
                                    // console.log("Correct Step!");
                                    test[j][k] = 1;
                                }
                            }
                        }
                    }

                    // Check if a step was completed and simplify down into the one dimensional array, 'stepsArray'
                    for (let i = 0; i < test.length; i++) {
                        for (let j = 0; j < test[i].length; j++) {
                            if (test[i][j] == 0) {
                                stepsArray[i] = 0;
                                break;
                            }
                        }
                    }

                    // reset all steps to black to allow steps to turn back to black for undo functionality

                    if (parameters.appName == "suite") {

                        for (let n = 2; n <= game.skills.selectedSkill.steps.length; n++) {

                            game.skills.selectedSkill.elements.forEach(function (element) {

                                if (element.num == n) {

                                    if (element.type == "divider") {

                                        d3.select("#divider" + n.toString() + "Black")
                                            .style("stroke", "black");

                                    } else {

                                        d3.select("#text" + n.toString() + "Black")
                                            .style("display", "inline");

                                        d3.select("#text" + n.toString() + "White")
                                            .style("display", "none");
                                    }
                                }
                            });

                            d3.select("#step" + n.toString() + "Black")
                                .style("display", "inline");

                            d3.select("#step" + n.toString() + "White")
                                .style("display", "none");

                        }
                    }

                    // update the stepper
                    buildStepsView();
                }
            }
            api.registerAddListener(updateWorkbook);
            // api.registerClientListener(updateWorkbook);
        }

        ///////////////////////////////////////////////////////////////////////////////////////////

        // let svgObject;
        function removeAllAnimateTags() {

            var element = A_SVGSteps.getElementsByTagName("animate");

            for (index = element.length - 1; index >= 0; index--) {
                element[index].parentNode.removeChild(element[index]);
            }

            // let A_SVGSteps = svgObject.getElementById('A_SVGSteps');
            // var element = A_SVGSteps.getElementsByTagName("animate"), index;

            // for (index = element.length - 1; index >= 0; index--) {
            //     element[index].parentNode.removeChild(element[index]);
            // }
        };

        function addAnimateTags(j, n) {

            if ($("#checkbox7").prop("checked") == true) {

                let A_SVGStep = A_SVGSteps.children[(j + n) - 1];

                let animationElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                let animationElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');

                animationElement1.setAttributeNS(null, 'attributeName', "stroke-opacity");
                animationElement1.setAttributeNS(null, 'values', "0;1;0");
                animationElement1.setAttributeNS(null, 'dur', "1.5s");
                animationElement1.setAttributeNS(null, 'repeatCount', "indefinite");

                animationElement2.setAttributeNS(null, 'attributeName', "fill-opacity");
                animationElement2.setAttributeNS(null, 'values', "0;1;0");
                animationElement2.setAttributeNS(null, 'dur', "1.5s");
                animationElement2.setAttributeNS(null, 'repeatCount', "indefinite");

                A_SVGStep.appendChild(animationElement1);
                A_SVGStep.appendChild(animationElement2);

                // let A_SVGStep = svgObject.getElementById('A_SVGStep' + `${j + n}`);
                // let animationElement1 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');
                // let animationElement2 = document.createElementNS('http://www.w3.org/2000/svg', 'animate');

                // animationElement1.setAttributeNS(null, 'attributeName', "stroke-opacity");
                // animationElement1.setAttributeNS(null, 'values', "0;1;0");
                // animationElement1.setAttributeNS(null, 'dur', "1.5s");
                // animationElement1.setAttributeNS(null, 'repeatCount', "indefinite");

                // animationElement2.setAttributeNS(null, 'attributeName', "fill-opacity");
                // animationElement2.setAttributeNS(null, 'values', "0;1;0");
                // animationElement2.setAttributeNS(null, 'dur', "1.5s");
                // animationElement2.setAttributeNS(null, 'repeatCount', "indefinite");

                // A_SVGStep.appendChild(animationElement1);
                // A_SVGStep.appendChild(animationElement2);
            }
        };

        // verbose checkbox
        checkbox8.onclick = function () {

            if (checkbox8.checked == true) {

                var el = A_SVGSteps.getElementsByClassName("A_verbose");

                for (var i = 0; i < el.length; i++) {
                    var currentEl = el[i];
                    currentEl.setAttributeNS(null, 'visibility', "visible");
                }

            } else {
                var el = A_SVGSteps.getElementsByClassName("A_verbose");

                for (var i = 0; i < el.length; i++) {
                    var currentEl = el[i];
                    currentEl.setAttributeNS(null, 'visibility', "hidden");
                }
            }
        }

        game.geogebra = {};
        game.geogebra.parameters = {};
        game.geogebra.parameters = parameters;

        $("#A_constructionBtn").css("color", "white");
        $("#A_constructionBtn").css("border", "1px solid #8064cc");

        $("#A_constructionBtn").click(function () {
            // game.nav = "skill";
            this.style.color = "white";
            this.style.border = "1px solid #8064cc";
            $("#A_overviewBtn").css("color", "#acb0dee3");
            $("#A_overviewBtn").css("border", "1px solid #473380");
            $("#A_overviewContainer").css("display", "none");
            $(".scaleContainerClass").css("display", "inline-block");
            $("#A_geogebraIntroText").css("display", "block");
        });

        $("#A_overviewBtn").click(function () {
            // game.nav = "overview";
            this.style.color = "white";
            this.style.border = "1px solid #8064cc";
            $("#A_constructionBtn").css("color", "#acb0dee3");
            $("#A_constructionBtn").css("border", "1px solid #473380");
            $("#A_overviewContainer").css("display", "inline-block");
            $(".scaleContainerClass").css("display", "none");
            $("#A_geogebraIntroText").css("display", "none");

            OverlayScrollbars(document.querySelector('.A_overviewScroll'), {
                className: "os-theme-dark custom-class",
                scrollbars: {
                    clickScrolling: true,
                    dragScrolling: true,
                    autoHide: "move"
                }
            });
        });

        $("#A_backToSkillsBtn").click(function () {

            // svg = d3.select(game.skills.selectedSkill.elementID);

            ready = false;
            // Arminia.skills.cheatNum = 0;
            cheatNum = 0;
            // console.log("A_backToSkillsBtn cheatNum: " + cheatNum);
            // console.log("A_backToSkillsBtn cheatNum: " + Arminia.skills.cheatNum);

            // $("#A_overviewContainer").css("display", "none");
            // $(".scaleContainerClass").css("display", "inline-block");
            $("#A_constructionBtn").css("color", "white");
            $("#A_constructionBtn").css("border", "1px solid #8064cc");
            $("#A_overviewBtn").css("color", "#acb0dee3");
            $("#A_overviewBtn").css("border", "1px solid #473380");
            // $("#A_stepsBackgroundImage").css("display", "none");

            if (parameters.appName == "classic") {
                game.nav = "home";
                // Arminia.setGUI(game);

                removeAllAnimateTags();

                d3.select(game.skills.selectedSkill.elementID).remove();

                game.animatePageOut("A_geobebraView");
                game.animatePageIn("A_homePage");

            } else {

                $("#A_stepsImage").css("display", "block");
                $("#A_StepsImageCenter").css("display", "flex");
                $("#A_startGeogebraBtn").hide();

                $(".A_mouseIconPaper").hide();

                // tmp fix because only 1 paper available
                d3.select("#A_schwarzsPPaper").remove();

                game.nav = "A_64TetraView";
                // Arminia.setGUI(game);                  
                game.animatePageOut("A_geobebraView");
                // game.animatePageIn("A_proxyView"); 
                game.animatePageIn("A_64TetraView");

            }
            game.main.setEnabled(true);
        });

        const cheatSteps = [

            ["p_{v} = 5.1660 * 10.000^93.000"],
            ["r_{p} = 1.3210 * 10.000^-13.000"],
            ["V_{p} = 4.0000 / 3.0000 r_{p}^3.0000 π"],
            ["R_{p} = p_{v} V_{p}"],
            ["l = 1.6200 * 10.000^-33.000"],
            ["v_{pl} = l^3.0000"],
            ["n = V_{p} / v_{pl}"],
            ["m_{p} = 2.1800 * 10.000^-5.0000"],
            ["R_{p2} = m_{p} n"],
            ["R_{s} = r_{p}"],
            ["G = 6.6700 * 10.000^-8.0000"],
            ["c = 2.9900 * 10.000^10.000"],
            ["M = (R_{s} * c^2.0000) / (2.0000G)"],
            ["R_{m} = (M / R_{p}) * 100.00"],
            ["F = (G M^2.0000) / (2.0000r_{p})^2.0000"],
            ["a = F / M"],
            ["v = 2.0000sqrt(2.0000a r_{p})"],
            ["r = 2.0000 * r_{p}"],
            ["t = (2.0000π * 2.0000 * r_{p}) / v"],
            ["f = 1.0000 / t"],
            ["m = (M * M) / (M + M)"],
            ["V_{r} = (m * c^2.0000) / 2.0000"],
            ["V_{c} = V_{r} / r"],
            ["r_{m} = r / 100.000"],
            ["Kc = 8.9880 * 10.000^9.0000"],
            ["q_{1} = 1.602 * 10.000^-19.0000"],
            ["q_{2} = 1.602 * 10.000^-19.0000"],
            ["F_{c} = (Kc q_{1} q_{2}) / r_{m}^2.0000"],
            ["F_{d} = F_{c} * 10.000^5.0000"],
            ["F_{t} = V_{c} + F_{d}"]

        ];

        $("#A_cheatBtnID").click(function () {

            if (cheatNum < cheatSteps.length) {
                ggbApplet.evalCommand(cheatSteps[cheatNum]);
                cheatNum++;
            }

        });

    };
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.geogebra = geogebra;
})();