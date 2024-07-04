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
        const fadeNum = 0.2;
        // const fadeColor = "#544783";
        // const fadeColor = "#FFFFFF40";
        const fadeColor = "#FFFFFF1C";
        const currentStepColor = "#ffe86d"; // yellow
        let ready = false;
        let svg;
        let svgNode;
        let currentPage = 0;
        let currentID;
        let skillType;
        let obj;
        let zoom;
        let globalG;
        let newStart = true;

        let parameters = {
            "scaleContainerClass": "scaleContainerClass",
            "borderColor": "#FFFFFF"
        };

        game.geogebra = {};
        game.geogebra.parameters = {};
        game.geogebra.parameters = parameters;

        $("#A_constructionBtn").css("color", "white");
        $("#A_constructionBtn").css("border", "1px solid #8064cc");

        $("#A_cheatBtnID").hide();

        parameters.appletOnLoad = function (api) {

            Arminia.setGUI(game);

            let newStart = true;
            const requiredLineThickness = 3;
            const requiredColor = "#F40099";
            let filename;

            ready = false;
            skillType = game.skills.selectedSkill.type;

            $("#A_cheatBtnID").text("CHEAT STEP 1");
            // $("#A_cheatBtnID").hide();
            $("#A_stepsBackgroundImage").css("display", "inline-block");
            $("#A_StepsImageCenter").css("display", "none");


            $("#A_startGeogebraBtnID").show();

            // settings for CAS or graphing             
            if (skillType == "construction") {

                ggbApplet.evalCommand("CenterView((0, 0))");
                ggbApplet.evalCommand(game.skills.selectedSkill.startingZoomScale);

                game.animatePageOut("A_homePage");
                $(".appletStyle").addClass("A_graphing");

                filename = game.skills.selectedSkill.stepsImage;
                currentID = game.skills.selectedSkill.elementID;

            } else {

                game.animatePageOut("A_64TetraView");
                $(".appletStyle").addClass("A_cas");

                currentID = game.skills.selectedSkill.steps[0].elementID();
                filename = game.skills.selectedSkill.steps[0].stepFilename();

            }

            // load stepsImage svg file with d3.xml() and setup
            d3.xml(filename).then(data => {

                currentPage = 1;
                svgNode = data.documentElement;
                obj = $('#A_stepsBackgroundImage')[0];

                let imageElement = document.getElementById("A_stepsBackgroundImage");

                if (!imageElement.hasChildNodes()) {

                    obj.appendChild(svgNode);

                    svg = d3.select(currentID);
                    svg.style("width", "100%").style("height", "100%").style("display", "block");

                    zoom = d3.zoom()
                        // .scaleExtent([1, 10])
                        .on("zoom", zoomed);

                    globalG = svg.select('g');

                    function zoomed({ transform }) {
                        globalG.attr("transform", transform);
                    }

                    svg.call(zoom);
                }

            });

            const osInstance2 = OverlayScrollbars(document.querySelector('.A_scroll2'), {
                className: "os-theme-dark custom-class",
                scrollbars: {
                    clickScrolling: true,
                    dragScrolling: true
                }
            });

            osInstance2.getElements().host.classList.add('os-host-flexbox');

            $("#A_stepsBody").html("The diagram above shows the  " + skillType + " in its completed state. Use the Geogebra panel on the left to complete the steps. Press Start to begin.");

            // Show and hide elements as Geogebra loads               
            game.animatePageIn("A_geobebraView");
            game.main.setEnabled(false);

            // Setup Steps System
            let steps = game.skills.selectedSkill.steps;
            let stepsLength = game.skills.selectedSkill.steps.length;

            // ISSUE: The pre-built Beginning geo can be deleted, which breaks geogebra editor
            // listeners to prevent deletion of beginning geo - unfinished code
            // document.addEventListener('keyup', function(event) {

            //     if (event.key === 'Delete') {

            //         // Your code here (e.g., alert or perform an action)
            //         console.log('Delete key released');

            //     }

            // });

            // api.registerRemoveListener(myRemoveListenerFunction);

            // function myRemoveListenerFunction(n) {

            //     console.log("entered myRemoveListenerFunction");
            //     console.log(n);

            // }

            // Init stepper values
            $("#A_stepsCount").html("Introduction");
            $("#A_stepsValue").text("0%");
            $("#A_stepsProgress").css("width", "0%");

            // Position and size Geogebra and flex steps image box 
            $(".scaleContainerClass").css("display", "inline-block");

            // Steps Image title, difficulty and definition
            $("#A_stepsImageTitle").html(game.skills.selectedSkill.formattedName);
            $("#A_stepsImageDifficulty").text(game.skills.selectedSkill.difficulty);
            $("#A_stepsImageDefinition").text(game.skills.selectedSkill.overview);
            $("#A_geogebraDetailTitle").html(game.skills.selectedSkill.formattedName);
            $("#A_geogebraDetailQuote").text(game.skills.selectedSkill.quote);
            $("#A_geogebraDetailQuotee").text(game.skills.selectedSkill.quotee);

            // Updates html elements on Overview page with new skill data if the applet has been reinjected
            // $("#A_geogebraDetailImage").attr("src", game.skills.selectedSkill.thumbnailURL);

            ////////////////////////////////////////////////////////////////////////////////////////////
            // The reason why object content doesn't refresh is that removing value from data attribute 
            // doesn't clear document created by object element in the window. If the origin is different 
            // (i.e. opening files in the window) you don't have access to contents of that window because 
            // of security reason. So removing entire tag makes sense and recreate again whenever needed.

            var object = document.getElementById("A_geogebraDetailImage");
            object.setAttribute('data', game.skills.selectedSkill.thumbnailURL);

            var clone = object.cloneNode(true);
            var parent = object.parentNode;

            parent.removeChild(object);
            parent.appendChild(clone);

            ////////////////////////////////////////////////////////////////////////////////////////////
            //////////////////////////////  END OLD CLASSIC CODE  ////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////////////////////////

            $("#A_geogebraThumbName").text(game.skills.selectedSkill.name);
            $("#A_geogebraDifficulty").text(game.skills.selectedSkill.difficulty);
            $("#A_geogebraDetailRequirement").text(game.skills.selectedSkill.requirement);
            $("#A_geogebraDetailDefinition").text(game.skills.selectedSkill.overview);

            document.getElementById("A_geoDetailBody2").innerHTML = game.skills.selectedSkill.geoDetailBody;

            let rect2 = document.getElementById("A_stepsContainer").getBoundingClientRect();
            let mybottom = window.innerHeight - rect2.y;

            $("#A_mouseIconBorder").css("bottom", mybottom.toString() + "px");

            // PDF.js temporary for schwarzschild paper demo
            if (skillType == "paper") {

                $("#A_prevPage").click(function () {
                    showPrevPage();
                });

                $("#A_nextPage").click(function () {
                    showNextPage();
                });

                // const url = "src/assets/docs/The_Schwarzschild_Proton.pdf";
                const url = game.skills.selectedSkill.paperPDFFile;

                // Loaded via <script> tag, create shortcut to access PDF.js exports.
                var pdfjsLib = window['pdfjs-dist/build/pdf'];

                // The workerSrc property shall be specified.
                // pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';
                pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

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

                        const viewport = page.getViewport({ scale: scale });
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        // Render PDF page into canvas context
                        const renderContext = {
                            canvasContext: ctx,
                            viewport: viewport
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
            let oldStepsArray = [];

            function updateStepsContainer(j) {

                const stepsProgress = $("#A_stepsProgress")[0];

                $("#A_stepsCount").html("Steps " + (j + 1).toString() + " of " + stepsLength.toString());

                if (j === stepsLength) {

                    $("#A_stepsCount").html("Steps " + stepsLength.toString() + " of " + stepsLength.toString() + " complete");
                    $("#A_stepsBody").html("<i>" + game.skills.selectedSkill.name + " has been completed!</i>");
                    $("#A_stepsProgress").css("width", "100%");

                } else {

                    $("#A_stepsCount").html("Steps " + (j + 1).toString() + " of " + stepsLength.toString());
                    $("#A_stepsBody").html(game.skills.selectedSkill.steps[j].stepsText);
                    let stepsPercentage = Math.round(100 / stepsLength);
                    let stepsProgressNum = stepsPercentage * (j);
                    $("#A_stepsProgress").css("width", stepsProgressNum.toString() + "%");

                }

                $("#A_stepsValue").text(stepsProgress.style.width);

            }

            function setLocalStorage() {

                game.skills.selectedSkill.status = "completed";

                if (localStorage.getItem('ArminiaSkills') == '') {

                    localStorage.setItem('ArminiaSkills', parseInt(game.skills.selectedSkill.id));

                } else {

                    let lsTest = localStorage.getItem('ArminiaSkills').split(","); // [0,1,2,5,11]   

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

            }


            function buildStepsView() {

                let j;

                removeAllAnimateTags();
                clearAndSetupConstructionSteps();

                // count how many steps are complete, j is non zero based
                for (j = 0; j < stepsArray.length; j++) {

                    if (stepsArray[j] === 0) {

                        break;

                    } else {

                        if (skillType === "construction") {

                            // j starts at 1 (not zero) and the next incompleted step is 1 more again, making + 2
                            let s = j + 2;

                            d3.select("#A-SVGStep" + s.toString())
                                .attr("visibility", "visible");

                        }
                    }

                }

                cheatNum = j + 1;
                $("#A_cheatBtnID").text("CHEAT STEP " + cheatNum.toString());

                // page control, step animations and pan and zoom
                if (j >= 0 && j < stepsArray.length) {
                    // steps complete, but not all.

                    updateStepsContainer(j);

                    // next step to pan and zoom to
                    let elementStr = "A-SVGStep" + (j + 1).toString();

                    // if page is different, load correct page
                    if (skillType === "paper" && currentID !== game.skills.selectedSkill.steps[j].elementID()) {

                        d3.select(currentID).remove();
                        currentID = game.skills.selectedSkill.steps[j].elementID();

                        // load correct page
                        d3.xml(game.skills.selectedSkill.steps[j].stepFilename()).then(data => {

                            svgNode = data.documentElement;
                            obj = $('#A_stepsBackgroundImage')[0];

                            let imageElement2 = document.getElementById("A_stepsBackgroundImage");

                            if (!imageElement2.hasChildNodes()) {

                                obj.appendChild(svgNode);

                                let testMidX = svgNode.x + (svgNode.width / 2);
                                let testMidY = svgNode.y + (svgNode.height / 2);

                                console.log("buildStepsView");
                                console.log(testMidX);
                                console.log(testMidY);

                                svg = d3.select(currentID);
                                svg.style("width", "100%").style("height", "100%").style("display", "block");
                                svg.call(zoom);

                                globalG = svg.select('g');

                                // panAndZoomAndAnimate(j, elementStr, game.skills.selectedSkill.steps[j].zoomScale, false);
                                panAndZoomAndAnimate(j, elementStr, game.skills.selectedSkill.equationScale, false);

                            }

                        });

                    } else {
                        // page is not different, stay on page

                        if (skillType === "paper") {

                            console.log("1");

                            panAndZoomAndAnimate(j, elementStr, game.skills.selectedSkill.equationScale, false);

                        } else {

                            console.log("2");

                            panAndZoomAndAnimate(j, elementStr, game.skills.selectedSkill.steps[j].zoomScale, false);
                        }
                        
 
                    }

                } else {
                    // all steps correct

                    updateStepsContainer(j);
                    panAndZoomAndAnimate(j, "A-SVGGroupSteps", 1, true);
                    setLocalStorage();

                }
            }

            function updateWorkbook() {

                // Future code which enables the drawing of objects that are colored white
                // unfortunately, the mouse driven scaling circle and movable segments of the tools are always default palette colors
                // api.getAllObjectNames().forEach(function (element) {
                //     if (api.getColor(element) !== "#FFFFFF") {
                //         api.unregisterClientListener(updateWorkbook);
                //         ggbApplet.evalCommand("SetColor(" + element + ", White)");
                //         api.registerClientListener(updateWorkbook);
                //     }
                // });

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

                        for (let m = 0; m < steps[n].correctStep.length; m++) {

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
                        // console.log("strState:", strState);

                        // Check if geogebra object exists in model skillData steps by building multidimension test array
                        for (let j = 0; j < stepsLength; j++) {

                            if (steps[j].type == "style") {

                                test[j][0] = 1;

                            } else {

                                for (let k = 0; k < steps[j].correctStep.length; k++) {

                                    // console.log("correctStep:", steps[j].correctStep[k]);

                                    if (strState == steps[j].correctStep[k]) {

                                        // console.log("Correct Step!");

                                        if (steps[j].type == "construction" || steps[j].type == "paper") test[j][k] = 1;

                                        if (steps[j].type == "combo" && api.getLineThickness(strName) == requiredLineThickness) {

                                            test[j][k] = 1;

                                        }

                                    }
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

                    for (let i = 0; i < stepsArray.length; i++) {

                        if (stepsArray[i] == 1 && steps[i].type == "style") {

                            let objStrName;

                            for (let j = 0; j < steps[i].styleObjects.length; j++) {

                                objStrName = steps[i].styleObjects[j];

                                // check if object has a color key
                                if (steps[i].color !== undefined) {

                                    if (api.getColor(objStrName) !== steps[i].color) {

                                        stepsArray[i] = 0;
                                        break;

                                    }
                                }

                                // check if object has a requiredLineThickness key
                                if (steps[i].requiredLineThickness !== undefined) {

                                    if (api.getLineThickness(objStrName) !== steps[i].requiredLineThickness) {

                                        stepsArray[i] = 0;
                                        break;

                                    }
                                }
                            }
                        }
                    }

                    // assume sameResultState, check it later
                    let sameResultState = true;

                    // Beginning of sameResultState check, to prevent looping unnecessarily through machine intensive buildStepsView function
                    // if new start, make oldStepsArray a duplicate of stepsArray

                    if (newStart) {

                        // give access to buildStepsView if newStart
                        sameResultState = false;

                        // now that we have determined newStart, set it to false here
                        // it will never be set true again, unless geogebra page is reloaded
                        newStart = false;

                        for (let i = 0; i < stepsArray.length; i++) {
                            oldStepsArray[i] = stepsArray[i];
                        }

                    } else sameResultState = true;

                    // check if same Result State and set accordingly
                    for (let i = 0; i < stepsArray.length; i++) {

                        if (stepsArray[i] !== oldStepsArray[i]) {

                            // console.log("different results!");

                            sameResultState = false;
                            break;

                        }
                    }

                    // prevent access to buildStepsView if same result state or if blink checkbox checked 
                    if (!sameResultState) {

                        // console.log("DIFFERENT RESULTS");

                        // result state has changed! Set oldStepsArray to stepsArray
                        for (let i = 0; i < stepsArray.length; i++) {
                            oldStepsArray[i] = stepsArray[i];
                        }

                        // update the stepper and stepsImage
                        buildStepsView();

                    } else {

                        // console.log("SAME RESULTS");

                    }
                }
            }

            api.registerAddListener(updateWorkbook);
            api.registerClientListener(updateWorkbook);

        } // End of parameters.appletOnLoad

        function panAndZoomAndAnimate(j, s, z, complete) {

            let stepBox = document.getElementById(s).getBBox();
            let midX;
            let midY;

            if (skillType === "paper") {

                let testBox = document.getElementById("A-SVGGroupSteps").getBBox();

                midX = testBox.x + (testBox.width / 2);
                midY = stepBox.y + (stepBox.height / 2);


            } else {

                midX = stepBox.x + (stepBox.width / 2);
                midY = stepBox.y + (stepBox.height / 2);

                // console.log("midX: ", midX);
                // console.log("midY: ", midY);

            }



            // Zoom and pan to the next incomplete step
            svg.transition()
                .duration(750)
                .call(zoom.translateTo, midX, midY)
                .on("end", function () {

                    // some steps/equations have multiple variables that need to be assigned in geogebra first
                    // the individual variables will animate and then the whole equation will animate

                    if (!complete) {

                        if (skillType === "paper" && game.skills.selectedSkill.steps[j].multiPartEquation !== null) {

                            for (let i = 0; i < game.skills.selectedSkill.steps[j].multiPartEquation.length; i++) {

                                d3.select("#A-SVGStep" + game.skills.selectedSkill.steps[j].multiPartEquation[i])
                                    .style("animation", "transcolor 0.75s infinite alternate");

                            }

                            d3.select("#" + s)
                                .style("animation", "transcolor 0.75s infinite alternate");

                        } else {

                            d3.select("#" + s)
                                .style("animation", "transcolor 0.75s infinite alternate");
                        }
                    }

                    svg.transition()
                        .duration(750)
                        .call(zoom.scaleTo, z);

                });

        }

        function clearAndSetupConstructionSteps() {

            if (skillType === "construction") {

                d3.selectAll("[id *= 'A-SVGStep']")
                    .attr("visibility", "hidden");

                d3.select("#A-SVGStep1")
                    .attr("visibility", "visible");

            }
        }

        function removeAllAnimateTags() {

            // temporary not efficient
            d3.selectAll("[id *= 'A-SVGStep']")
                .style("animation", "inherit");

        };

        $("#A_startGeogebraBtnID").click(function () {

            cheatNum = 0;

            if (this.innerText == "START") this.innerText = "RESET";

            if (skillType == "paper") $("#A_cheatBtnID").show();
            else $("#A_cheatBtnID").hide();

            if (ready) {

                ggbApplet.reset();

                if (skillType !== "paper") {

                    ggbApplet.evalCommand("CenterView((0, 0))");
                    ggbApplet.evalCommand(game.skills.selectedSkill.startingZoomScale);

                    currentID = game.skills.selectedSkill.elementID;

                } else {

                    $("#A_cheatBtnID").text("CHEAT STEP 1");

                    currentID = game.skills.selectedSkill.steps[0].elementID();
                    filename = game.skills.selectedSkill.steps[0].stepFilename();

                }
            }

            $("#A_startGeogebraBtnID").removeClass('A_startGeogebraBtn');
            $("#A_startGeogebraBtnID").addClass('A_geogebraButton');

            // Init stepper values
            $("#A_stepsBody").html(game.skills.selectedSkill.steps[0].stepsText);
            $("#A_stepsCount").html("Steps 1 of " + game.skills.selectedSkill.steps.length.toString());
            $("#A_stepsValue").text("0%");
            $("#A_stepsProgress").css("width", "0%");

            clearAndSetupConstructionSteps();
            removeAllAnimateTags();

            if (skillType !== "paper")

                panAndZoomAndAnimate(0, "A-SVGStep1", game.skills.selectedSkill.steps[0].zoomScale, false);

            else if (newStart) {

                panAndZoomAndAnimate(0, "A-SVGStep1", game.skills.selectedSkill.equationScale, false);
                newStart = false;

            }

            ready = true;

        });

        $("#A_overviewBtn").click(function () {

            if (this.innerText == "OVERVIEW") {

                this.innerText = "CONSTRUCTION";

                $("#A_overviewContainer").css("display", "inline-block");
                $(".scaleContainerClass").css("display", "none");

                OverlayScrollbars(document.querySelector('.A_overviewScroll'), {
                    className: "os-theme-dark custom-class",
                    scrollbars: {
                        clickScrolling: true,
                        dragScrolling: true,
                        autoHide: "move"
                    }
                });

            } else {

                $("#A_overviewContainer").css("display", "none");
                $(".scaleContainerClass").css("display", "inline-block");
                this.innerText = "OVERVIEW";

            }

        });

        $("#A_backToSkillsBtn").click(function () {

            ready = false;
            newStart = true;

            $("#A_startGeogebraBtnID").text("START");
            $("#A_startGeogebraBtnID").removeClass('A_geogebraButton');
            $("#A_startGeogebraBtnID").addClass('A_startGeogebraBtn');
            $("#A_cheatBtnID").hide();

            removeAllAnimateTags();

            d3.select(currentID).remove();

            if (parameters.appName == "classic") {

                game.nav = "home";

                game.animatePageOut("A_geobebraView");
                game.animatePageIn("A_homePage");

            } else {

                $("#A_startGeogebraBtnID").hide();
                $(".A_mouseIconPaper").hide();

                game.nav = "A_64TetraView";
                game.animatePageOut("A_geobebraView");
                game.animatePageIn("A_64TetraView");

            }

            Arminia.setGUI(game);

            game.main.setEnabled(true);

        });

        $("#A_cheatBtnID").click(function () {

            if (cheatNum == 0) {

                ggbApplet.evalCommand(game.skills.selectedSkill.cheatSteps[0]);
                $("#A_cheatBtnID").text("CHEAT STEP 2");

            } else {

                if (cheatNum < game.skills.selectedSkill.cheatSteps.length) {

                    ggbApplet.evalCommand(game.skills.selectedSkill.cheatSteps[cheatNum - 1]);
                    let i = cheatNum;
                    $("#A_cheatBtnID").text("CHEAT STEP " + i.toString());

                }

            }

        });

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.geogebra = geogebra;

})();