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
        const fillColor = "#ffe86d";
        let ready = false;
        let svg;

        let parameters = {
            "scaleContainerClass": "scaleContainerClass",
            "borderColor": "#FFFFFF"
        };

        parameters.appletOnLoad = function (api) {

            Arminia.setGUI(game);

            let zoom;
            ready = false;
            let newStart = true;
            cheatNum = 0;

            $("#A_cheatBtnID").hide();

            if (game.skills.selectedSkill.type == "style") {

                $("#A_submitBtn").show();

            } else $("#A_submitBtn").hide();

            if (game.skills.selectedSkill.type !== "paper") {

                ggbApplet.evalCommand("CenterView((0, 0))");
                ggbApplet.evalCommand(game.skills.selectedSkill.startingZoomScale);

            }

            $("#A_stepsBackgroundImage").css("display", "inline-block");
            $("#A_StepsImageCenter").css("display", "none");
            $("#A_startGeogebraBtnID").show();

            // settings for CAS or graphing             
            if (parameters.appName == "classic") {

                game.animatePageOut("A_homePage");
                $(".appletStyle").addClass("A_graphing");

            } else if (parameters.appName == "suite") {

                game.animatePageOut("A_64TetraView");
                $(".appletStyle").addClass("A_cas");

            }

            // load stepsImage svg file with d3.xml() and setup
            d3.xml(game.skills.selectedSkill.stepsImage).then(data => {

                ready = false;

                const svgNode = data.documentElement;
                const obj = $('#A_stepsBackgroundImage')[0];
                obj.appendChild(svgNode);

                svg = d3.select("#" + game.skills.selectedSkill.elementID);
                svg.style("width", "100%").style("height", "100%").style("display", "block");

                d3.selectAll("[id *= 'A_SVGStep'], [id *= 'divider'], [id *= 'paperText']")
                    .style("fill", "white");

                zoom = d3.zoom()
                    .scaleExtent([1, 10])
                    .on("zoom", zoomed);

                var g = svg.select('g');
                svg.call(zoom);

                function zoomed({ transform }) {
                    g.attr("transform", transform);
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

            $("#A_stepsBody").html("Press Start to begin.");

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

            // PDF.js temporary for schwarzschild paper demo
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
            let oldStepsArray = [];
            const stepsProgress = $("#A_stepsProgress")[0];
            let correctStyle;

            function updateStepsContainer(stepsArrayNum, stepsCountNum, stepsBodyNum, stepsProgressNum, complete) {

                $("#A_stepsCount").html("Steps " + `${stepsArrayNum + stepsCountNum}` + " of " + stepsLength.toString());
                $("#A_stepsValue").text(stepsProgress.style.width);

                if (complete) {

                    $("#A_stepsBody").html("<i>" + game.skills.selectedSkill.name + " has been completed!</i>");
                    $("#A_stepsProgress").css("width", "100%");

                } else {

                    $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[stepsArrayNum + stepsBodyNum]);
                    $("#A_stepsProgress").css("width", stepsProgressNum.toString() + "%");

                }

            }

            function setLocalStorage() {

                game.skills.selectedSkill.completed = "true";

                if (localStorage.getItem('ArminiaSkills') == '') {

                    localStorage.setItem('ArminiaSkills', parseInt(game.skills.selectedSkill.id));

                } else {

                    let lsTest = localStorage.getItem('ArminiaSkills');  // [0,1,2,5,11]    

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

                let stepsPercentage = Math.round(100 / stepsLength); // i.e 33 or 66 or 99 

                for (let j = 0; j < stepsArray.length; j++) {

                    let n = stepsPercentage * (j);

                    // Is step incomplete?
                    if (stepsArray[j] == 0) {

                        // console.log("ENTERED INCOMPLETE STEP");

                        // Step is incomplete
                        removeAllAnimateTags();

                        // second parameter is 1 because the step is incomplete and still needs to blink
                        addAnimateTags(j, 1);

                        // set current step to yellow for undo functionality
                        let s = j + 1;
                        d3.select("#A_SVGStep" + s.toString())
                            .style("fill", fillColor);

                        // if step1, zooms and pans to step1. Needed for undo functionality
                        if (j == 0) {

                            // get location and size data for pand and zoom
                            panAndZoom("A_SVGStep1", game.skills.selectedSkill.zoomScale);

                        }

                        // update the steps container text and progress bar
                        updateStepsContainer(j, 1, 0, n, false);
                        break;

                    } else {

                        // Test if final step has been reached
                        if (j == stepsLength - 1) {

                            // final step has been reached

                            removeAllAnimateTags();

                            // get total dimensions and pan and zoom out
                            panAndZoom("A_SVGGroupSteps", 1);

                            let t = j + 1;
                            d3.select("#A_SVGStep" + t.toString())
                                .style("fill", "white");

                            // update the steps container text and progress bar
                            updateStepsContainer(j, 1, 0, n, true);

                            //skill complete and set local storage
                            setLocalStorage();

                        } else {

                            // step complete, but final step NOT reached                            

                            removeAllAnimateTags();
                            addAnimateTags(j, 2);

                            let t = j + 1;
                            let s = j + 2;

                            // set previous step to white
                            d3.select("#A_SVGStep" + t.toString())
                                .style("fill", "white");

                            // set current step to yellow and opacity to 1
                            d3.select("#A_SVGStep" + s.toString())
                                .style("fill", fillColor)
                                .style("fill-opacity", 1);

                            // divider and text handler for papers
                            game.skills.selectedSkill.elements.forEach(function (element) {

                                if (element.num == s) {

                                    if (element.type == "divider") {

                                        d3.select("#divider" + s.toString())
                                            .style("fill-opacity", 1);

                                    } else {

                                        d3.select("#paperText" + s.toString())
                                            .style("fill-opacity", 1);

                                    }
                                }
                            });

                            // get element dimensions and then pan and zoom
                            let elementStr = "A_SVGStep" + s.toString();
                            panAndZoom(elementStr, game.skills.selectedSkill.zoomScale);

                            // update the steps container text and progress bar
                            updateStepsContainer(j, 2, 1, n, false);

                        }
                    }
                }
            }

            $("#A_submitBtn").click(function () {

                if (correctStyle) {

                    console.log("styles complete!");

                    stepsArray.push(1);

                    // update the stepper and stepsImage
                    buildStepsView();

                } else {

                    console.log("styles NOT complete!");

                }

            });

            function updateWorkbook(type, target, arg) {

                // Future code to change objects to white
                // api.getAllObjectNames().forEach(function (element) {
                //     if (api.getColor(element) !== "#FFFFFF") {
                //         api.unregisterClientListener(updateWorkbook);
                //         ggbApplet.evalCommand("SetColor(" + element + ", White)");
                //         api.registerClientListener(updateWorkbook);
                //     }
                // });

                // stop CAS access until start button clicked

                if (ready) {

                    if (game.skills.selectedSkill.type == "style") {

                        let objectsArray = game.skills.selectedSkill.objects;
                        correctStyle = true;

                        for (let i = 0; i < objectsArray.length; i++) {

                            if (api.getLineThickness(objectsArray[i]) !== 7) {

                                correctStyle = false;
                                break;
                            }
                        }

                    } else {

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
                            console.log(strState);

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

                            // result state has changed! Set oldStepsArray to stepsArray
                            for (let i = 0; i < stepsArray.length; i++) {
                                oldStepsArray[i] = stepsArray[i];
                            }

                            d3.selectAll("[id *= 'divider'], [id *= 'paperText'], [id *= 'A_SVGStep']")
                                .style("fill", "white")
                                .style("fill-opacity", fadeNum);

                            d3.select("#A_SVGStep1")
                                .style("fill-opacity", 1);

                            // update the stepper and stepsImage
                            buildStepsView();

                        } else {

                            // console.log("SAME RESULTS");

                        }
                    }
                }
            }

            api.registerAddListener(updateWorkbook);
            api.registerClientListener(updateWorkbook);

        }

        ///////////////////////////////////////////////////////////////////////////////////////////

        game.geogebra = {};
        game.geogebra.parameters = {};
        game.geogebra.parameters = parameters;

        $("#A_constructionBtn").css("color", "white");
        $("#A_constructionBtn").css("border", "1px solid #8064cc");

        function removeAllAnimateTags() {

            d3.selectAll("[id *= 'A_SVGStep']")
                .style("animation", "inherit");

        };

        function addAnimateTags(j, n) {

            let s = j + n;

            d3.select("#A_SVGStep" + s.toString())
                .style("animation", "transcolor 0.75s infinite alternate");

        };

        let zoom2;

        function myZoomCallback2(scale) {

            svg.transition()
                .duration(750)
                .call(zoom2.scaleTo, scale);

        }

        function panAndZoom(element, scale) {

            zoom2 = d3.zoom()
                .scaleExtent([1, 10])
                .on("zoom", zoomed2);

            var g = svg.select('g');
            svg.call(zoom2);

            function zoomed2({ transform }) {
                g.attr("transform", transform);
            }

            let stepBox = document.getElementById(element).getBBox();
            let midX = stepBox.x + (stepBox.width / 2);
            let midY = stepBox.y + (stepBox.height / 2);

            svg.transition()
                .duration(750)
                .call(zoom2.translateTo, midX, midY)
                .on("end", () => myZoomCallback2(scale));

        }

        $("#A_startGeogebraBtnID").click(function () {

            if (parameters.appName == "suite") $("#A_cheatBtnID").show();

            if (ready) {

                ggbApplet.reset();

                if (game.skills.selectedSkill.type !== "paper") {

                    ggbApplet.evalCommand("CenterView((0, 0))");
                    ggbApplet.evalCommand(game.skills.selectedSkill.startingZoomScale);

                } else $("#A_cheatBtnID").text("DEBUG STEP 1");

            } 

            cheatNum = 0;
            
            ready = true;

            $("#A_startGeogebraBtnID").removeClass('A_startGeogebraBtn');
            $("#A_startGeogebraBtnID").addClass('A_geogebraButton');

            $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[0]);

            d3.selectAll("[id *= 'divider'], [id *= 'paperText'], [id *= 'A_SVGStep']")
                .style("fill-opacity", fadeNum);

            d3.select("#A_SVGStep1")
                .style("fill-opacity", 1)
                .style("fill", fillColor);

            removeAllAnimateTags();
            addAnimateTags(0, 1);

            panAndZoom("A_SVGStep1", game.skills.selectedSkill.zoomScale);

        });

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

            ready = false;
            cheatNum = 0;

            $("#A_constructionBtn").css("color", "white");
            $("#A_constructionBtn").css("border", "1px solid #8064cc");
            $("#A_overviewBtn").css("color", "#acb0dee3");
            $("#A_overviewBtn").css("border", "1px solid #473380");

            $("#A_startGeogebraBtnID").removeClass('A_geogebraButton');
            $("#A_startGeogebraBtnID").addClass('A_startGeogebraBtn');

            if (parameters.appName == "classic") {
                game.nav = "home";
                // Arminia.setGUI(game);

                removeAllAnimateTags();

                d3.select("#" + game.skills.selectedSkill.elementID).remove();

                game.animatePageOut("A_geobebraView");
                game.animatePageIn("A_homePage");

            } else {

                removeAllAnimateTags();

                d3.select("#" + game.skills.selectedSkill.elementID).remove();

                // $("#A_stepsImage").css("display", "block");
                $("#A_StepsImageCenter").css("display", "flex");
                $("#A_startGeogebraBtnID").hide();

                $(".A_mouseIconPaper").hide();

                // tmp fix because only 1 paper available
                d3.select("#A_schwarzsPPaper").remove();

                game.nav = "A_64TetraView";
                game.animatePageOut("A_geobebraView");
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

            // ggbApplet.evalCommand("CenterView((0, 0))");
            // ggbApplet.evalCommand("A = Intersect(xAxis,yAxis)");
            // ggbApplet.evalCommand("c: Circle(A, 1)");
            // ggbApplet.evalCommand("B = Intersect(c, yAxis, 2)");
            // ggbApplet.evalCommand("d: Circle(B, A)");
            // ggbApplet.evalCommand("C = Intersect(c, d, 1)");
            // ggbApplet.evalCommand("e: Circle(C, A)");
            // ggbApplet.evalCommand("D = Intersect(c, e, 1)");
            // ggbApplet.evalCommand("f: Circle(D, A)");
            // ggbApplet.evalCommand("E: Intersect(c, f, 1)");



            // ["point E, Intersect(c, f, 1)"],
            // ["circle g, Circle(E, A)"],
            // ["point F, Intersect(c, g, 1)"],
            // ["circle h, Circle(F, A)"],
            // ["point G, Intersect(c, d, 2)"],
            // ["circle k, Circle(G, A)"],

            if (cheatNum < cheatSteps.length) {

                ggbApplet.evalCommand(cheatSteps[cheatNum]);

                let i = cheatNum + 2;

                $("#A_cheatBtnID").text("DEBUG STEP " + i.toString());

                cheatNum++;

            }

        });

    };
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.geogebra = geogebra;
})();