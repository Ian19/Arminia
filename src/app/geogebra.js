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

        let parameters = {
            "scaleContainerClass": "scaleContainerClass",
            "borderColor": "#FFFFFF"
        };

        parameters.appletOnLoad = function (api) {

            Arminia.setGUI(game);

            // settings for CAS or graphing 
            if (parameters.appName == "classic") {
            // if (parameters.appName == "geometry") {

                game.animatePageOut("A_homePage");
                $(".appletStyle").addClass("A_graphing");
                $("#A_stepsImage").attr("data", game.skills.selectedSkill.stepsImage2);

                $("#A_cheatBtnID").hide();

            } else {                

                // console.log(game.skills.selectedSkill.stepsImage2);

                $("#A_stepsImage").css("width", "70%");
                $("#A_stepsImage").attr("data", game.skills.selectedSkill.stepsImage2 + "1.svg");
                $("#A_stepsBackgroundImage").css("display", "inline-block");

                $("#A_stepsBackgroundImage").attr("data", game.skills.selectedSkill.stepsBackgroundImage);
                $(".appletStyle").addClass("A_cas");
                game.animatePageOut("A_64TetraView");

                $("#A_cheatBtnID").show();

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
            $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[0]);
            $("#A_stepsProgress").css("width", "0%");

            // blink checkbox
            checkbox7.onclick = function () {
                removeAllAnimateTags();
                updateWorkbook();
            }

            // verbose checkbox
            checkbox8.onclick = function () {

                if (checkbox8.checked == true) {

                    svgObject = document.getElementById('A_stepsImage').contentDocument;
                    var el = svgObject.getElementsByClassName("A_verbose");
                    for (var i = 0; i < el.length; i++) {
                        var currentEl = el[i];
                        currentEl.setAttributeNS(null, 'visibility', "visible");
                    }

                } else {

                    svgObject = document.getElementById('A_stepsImage').contentDocument;
                    var el = svgObject.getElementsByClassName("A_verbose");

                    for (var i = 0; i < el.length; i++) {
                        var currentEl = el[i];
                        currentEl.setAttributeNS(null, 'visibility', "hidden");
                    }
                }
            }

            ///////////////////////////////////////////////////////////////////////////////////////////
            ///////////////////// add and or remove blinking animation to svg file ////////////////////

            let svgObject;
            function removeAllAnimateTags() {
                let A_SVGSteps = svgObject.getElementById('A_SVGSteps');
                var element = A_SVGSteps.getElementsByTagName("animate"), index;

                for (index = element.length - 1; index >= 0; index--) {
                    element[index].parentNode.removeChild(element[index]);
                }
            };

            function addAnimateTags(j, n) {

                if ($("#checkbox7").prop("checked") == true) {

                    let A_SVGStep = svgObject.getElementById('A_SVGStep' + `${j + n}`);
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
                }
            };

            // let svgObject2;
            document.getElementById('A_stepsImage').onload = function () {
                svgObject = document.getElementById('A_stepsImage').contentDocument;

                if (parameters.appName == "classic") {
                // if (parameters.appName == "geometry") {
                    addAnimateTags(0, 1);
                } else {

                    // svgObject2 = document.getElementById('A_stepsBackgroundImage').contentDocument;
                    // // var el = svgObject2.getElementById("step1Black");
                    // // el.setAttributeNS(null, 'visibility', "hidden");

                    // var el2 = svgObject2.getElementById("step1White");
                    // el2.setAttributeNS(null, 'display', "inline");

                }
            };

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
                    // console.log("prev btn clicked!");
                    showPrevPage();
                });

                $("#A_nextPage").click(function () {
                    // console.log("next btn clicked!");
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
                        // console.log(w);
                        // console.log(desiredWidth);

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

            let svgObject2;
            let stepsArray = [];
            const stepsProgress = $("#A_stepsProgress")[0];

            function buildStepsView() {

                svgObject2 = document.getElementById('A_stepsBackgroundImage').contentDocument;

                let stepsPercentage = Math.round(100 / stepsLength); // i.e 33 or 66 or 99 

                for (let j = 0; j <= stepsArray.length - 1; j++) {

                    let n = stepsPercentage * (j);

                    // Is step incomplete?
                    if (stepsArray[j] == 0) {

                        if (parameters.appName == "classic") {
                        // if (parameters.appName == "geometry") {
                            removeAllAnimateTags();
                            addAnimateTags(j, 1);
                        } else {

                            // console.log("1");
                            // console.log(j);

                            if (j == 0) {
                                game.skills.selectedSkill.stepsImage2 = game.skills.selectedSkill.stepsImageBackup;
                                $("#A_stepsImage").attr("data", game.skills.selectedSkill.stepsImage2 + "1.svg");
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

                            // console.log("2");

                            // final step has been reached
                            if (parameters.appName == "classic") {
                            // if (parameters.appName == "geometry") {
                                removeAllAnimateTags();
                            } else {

                                var el = svgObject2.getElementById("step1Black");
                                el.setAttributeNS(null, 'display', "none");

                                var el2 = svgObject2.getElementById("step1White");
                                el2.setAttributeNS(null, 'display', "inline");
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

                                for (let i = 0; i <  lsTest.length; i++) {
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
                            // if (parameters.appName == "geometry") {
                                removeAllAnimateTags();
                                addAnimateTags(j, 2);
                            }

                            if (parameters.appName == "suite") {

                                // console.clear();
                                // console.log("3");                                

                                let s = j + 1;
                                var el = svgObject2.getElementById("step" + s.toString() + "Black");

                                el.setAttributeNS(null, 'display', "none");

                                // console.log("step" + s.toString() + "Black");
                                // console.log(el);

                                var el2 = svgObject2.getElementById("step" + s.toString() + "White");

                                el2.setAttributeNS(null, 'display', "inline");
                                // console.log(el2);

                                let t = j + 2;

                                // console.log(game.skills.selectedSkill.stepsImage2 + t.toString() + ".svg");

                                $("#A_stepsImage").attr("data", game.skills.selectedSkill.stepsImage2 + t.toString() + ".svg");

                            }

                            $("#A_stepsCount").html("Steps " + `${j + 2}` + " of " + stepsLength.toString());
                            $("#A_stepsBody").html(game.skills.selectedSkill.stepsText[j + 1]);
                            $("#A_stepsProgress").css("width", n.toString() + "%");
                            $("#A_stepsValue").text(stepsProgress.style.width);
                        }
                    }
                }
            }

            function updateWorkbook() {

                // console.log("Entered updateWorkbook");
                // console.clear();

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

                    staticTextValue = api.getValueString(strName);

                    // console.log(staticTextValue);

                    if (strType == "text") {
                        strCommand = api.getValueString(strName);
                    } else {
                        strCommand = api.getCommandString(strName);
                    }

                    strState = strType + " " + strName + ", " + strCommand;

                    console.log("Geogebra Output: " + strState);

                    // console.log(stepsArray); 
                    // console.log(test); 
                    // console.log(stepsLength); 
                    // console.log(steps); 

                    // Check if geogebra object exists in model skillData steps by building multidimension test array
                    for (let j = 0; j < stepsLength; j++) {
                        for (let k = 0; k < steps[j].length; k++) {

                            // console.log(j);
                            // console.log(k);


                            // console.log("Geogebra Input: " + steps[j][k]);

                            if (strState == steps[j][k]) {
                                // Correct Step!  
                                // console.log(strState);                              
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

                // console.log(test);
                // update the stepper
                buildStepsView();
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


            // $("#A_overviewContainer").css("display", "none");
            // $(".scaleContainerClass").css("display", "inline-block");
            $("#A_constructionBtn").css("color", "white");
            $("#A_constructionBtn").css("border", "1px solid #8064cc");
            $("#A_overviewBtn").css("color", "#acb0dee3");
            $("#A_overviewBtn").css("border", "1px solid #473380");
            // $("#A_stepsBackgroundImage").css("display", "none");

            if (parameters.appName == "classic") {
            // if (parameters.appName == "geometry") {
                game.nav = "home";
                // Arminia.setGUI(game);                  
                game.animatePageOut("A_geobebraView");
                game.animatePageIn("A_homePage");

            } else {
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
            ["Kc = 8.9880 * 10.000^9.0000"],
            ["Kc = 8.9880 * 10.000^9.0000"] 
        ];

        let cheatNum = 0;

        $("#A_cheatBtnID").click(function () {
            ggbApplet.evalCommand(cheatSteps[cheatNum]);
            cheatNum++;
        });

    };
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.geogebra = geogebra;
})();