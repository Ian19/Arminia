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

    function equationData(game) {

        game.skills.equationData = [

            // The Schwarzschild Proton

            {

                name: "The Schwarzschild Proton",
                // "filename": "src/assets/images/papers/TheSchwarzschildProton",
                // "name": "",
                formattedName: `                    
                <span class="A_decor">T</span>
                <span class="A_reg">he </span>
                <span class="A_decor">S</span>
                <span class="A_reg">chwarzschild </span>
                <span class="A_decor">P</span>
                <span class="A_reg">roton</span>`,
                id: 85,
                type: "paper",
                // elementID: "A-schwarzsPPaper",
                status: "unlocked",
                zoomScale: 6,
                selected: false,
                thumbnailURL: "src/assets/images/papers/thumbnails/thumbSchwarzschildProton2.svg",
                geogebraFile: "src/assets/geogebra/testCAS3.ggb",
                paperPDFFile: "src/assets/docs/The_Schwarzschild_Proton.pdf",
                // stepsImage: "src/assets/images/papers/TheSchwarzschildProton2.svg",
                difficulty: "HARD  |  31 STEPS",
                unlocksSkills: [2],
                requirement: "(REQUIRES THE 64 TETRAHEDRON GRID)",
                overview: "Nassim Haramein's paper 'The Schwarzschild Proton' presents a new solution for the mass of the proton. It shows that the proton obeys the Schwarzschild condition and has enough mass to be considered a miniature black hole.",
                quote: '"Everything emerges and returns to a fundamental field of information that connects us all."',
                quotee: "Nassim Harramein",
                geoDetailBody: `
                
                <div>
                    Nassim Haramein's paper "The Schwarzschild Proton" presents a new solution for the mass of the proton that is much heavier than that which the standard model predicts. 
                    While the standard proton has a mass of ` + katex.renderToString("10^{-24} gm") + `, the proton that Nassim Haramein's equations describe have a mass of ` + katex.renderToString("10^{14} gm") + ` - a difference of 38 orders of magnitude.
                </div>
                <br>
                <div>
                    The different measurements occur due to two different ways of measuring the mass of the proton. 
                    The standard model ignores the energy-density of the space itself inside the atom through a mathematical trick called "renormalization", 
                    whereas Nassim Haramein appropriately accounts for the density of the space itself inside the atom, giving it a much larger value. 
                    The resulting mass shows that the proton itself obeys the Schwarzschild condition and has enough mass to actually be considered a miniature black hole. 
                    The standard model is only accounting for the mass as observed from OUTSIDE the proton, 
                    whereas Nassim is accounting for the mass inside the proton including the mass dilation that occurs INSIDE the event horizon of the mini black hole. 
                    Mass increases exponentially as it's spin approaches the speed of light inside the event horizon of any black hole.
                </div>
                <br>
                <div>
                    When you place both proton measurements into a graph comparing their mass vs. the radius along with many other known objects in the universe, 
                    a linear relationship of mass vs. radius arises. The Schwarzschild proton fits in perfect alignment with all other objects on all scales, 
                    whereas the standard model proton falls way off the graph.
                </div>
                <br>

                <div id="A_overviewPaperTitle" >The Schwarzschild Proton Paper</div>
                <br>
                
                <div class="A_geoMenu2">
                
                    <div class="A_btnContainer">
                        <span class="A_geogebraButton" id="A_prevPage">PREVIOUS PAGE</span>
                    </div>

                    <span class="A_pageInfo">Page <span id="A_pageNum"></span> of <span id="A_pageCount"></span></span>  

                    <div class="A_btnContainer">
                        <span class="A_geogebraButton" id="A_nextPage">NEXT PAGE</span>
                    </div>
  
                </div>  
                
                <div class="A_pdfFlexContainer">
                    <canvas id="A_pdfRender"></canvas>
                </div>
                `,

                page1Filename: "src/assets/images/papers/TheSchwarzschildProton1.svg",
                page1ID: "#TheSchwarzschildProton1",
                page2Filename: "src/assets/images/papers/TheSchwarzschildProton2.svg",
                page2ID: "#TheSchwarzschildProton2",
                page3Filename: "src/assets/images/papers/TheSchwarzschildProton3.svg",
                page3ID: "#TheSchwarzschildProton3",

                cheatSteps: [

                    // page 1
                    ["p_{v} = 5.1660 * 10.000^93.000"],
                    ["r_{p} = 1.3210 * 10.000^-13.000"],
                    ["V_{p} = 4.0000 / 3.0000 r_{p}^3.0000 π"],
                    ["R_{p} = p_{v} V_{p}"],

                    // page 2
                    ["l = 1.6200 * 10.000^-33.000"],
                    ["v_{pl} = l^3.0000"],
                    ["n = V_{p} / v_{pl}"],
                    ["m_{p} = 2.1800 * 10.000^-5.0000"],
                    ["R_{p2} = m_{p} n"],
                    ["R_{s} = r_{p}"],
                    ["G = 6.6700 * 10.000^-8.0000"],
                    ["c = 2.9900 * 10.000^10.000"],
                    ["M = (R_{s} * c^2.0000) / (2.0000G)"],
                    ["R_{m} = (M / R_{p})"],
                    ["R_{m2} = M / R_{p} * 100.00"],
                    ["F = (G M^2.0000) / (2.0000r_{p})^2.0000"],
                    ["a = F / M"],
                    ["v = 2.0000sqrt(2.0000a r_{p})"],

                    // page 3
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

                ],

                steps: [{
                    type: "paper",
                    zoomScale: 6,
                    page: 1,
                    elementID: function () { return game.skills.equationData[0].page1ID },
                    stepFilename: function () { return game.skills.equationData[0].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic p_{v}, 5.1660 * 10.000^93.000"],
                    stepsText: "Enter  " + katex.renderToString("p_v = 5.166 \\times 10^{93}") + " (Hint: Enter 'p_v = 5.166 * 10^93'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page1ID },
                    stepFilename: function () { return game.skills.equationData[0].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic r_{p}, 1.3210 * 10.000^-13.000"],
                    stepsText: "Enter " + katex.renderToString("r_p = 1.321 \\times 10^{-13}") + " (hint: Enter 'r_p = 1.321 * 10^-13')",
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page1ID },
                    stepFilename: function () { return game.skills.equationData[0].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic V_{p}, 4.0000 / 3.0000 r_{p}^3.0000 π"],
                    stepsText: "Enter " + katex.renderToString("V_p = \\frac 4 3 \\pi r_p^{3}") + " (hint: Enter 'V_p = 4 / 3 * r_p^3 * pi')",
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page1ID },
                    stepFilename: function () { return game.skills.equationData[0].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{p}, p_{v} V_{p}"],
                    stepsText: "Enter " + katex.renderToString("R_p = p_v V_p"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic l, 1.6200 * 10.000^-33.000"],
                    stepsText: "Enter " + katex.renderToString("l = 1.62 \\times 10^{-33}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic v_{pl}, l^3.0000"],
                    stepsText: "Enter " + katex.renderToString("v_{pl} = l^{3}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic n, V_{p} / v_{pl}"],
                    stepsText: "Enter " + katex.renderToString("n = \\frac {V_p} {v_{pl}}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{p}, 2.1800 * 10.000^-5.0000"],
                    stepsText: "Enter " + katex.renderToString("m_p = 2.18 \\times 10^{-5}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{p2}, m_{p} n"],
                    stepsText: "Enter " + katex.renderToString("R_{p2} = m_p n"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{s}, r_{p}"],
                    stepsText: "Enter " + katex.renderToString("R_s = r_p"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic G, 6.6700 * 10.000^-8.0000"],
                    stepsText: "Enter " + katex.renderToString("G = 6.67 \\times 10^{-8}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic c, 2.9900 * 10.000^10.000"],
                    stepsText: "Enter " + katex.renderToString("c = 2.99 \\times 10^{10}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic M, (R_{s} c^2.0000) / (2.0000G)"],
                    stepsText: "Enter " + katex.renderToString("M = \\frac{R_s c^{2}}{2G}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{m}, M / R_{p}"],
                    stepsText: "Enter " + katex.renderToString("R_m = \\frac {M} {R_{p}}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{m2}, M / R_{p} * 100.00"],
                    stepsText: "Enter " + katex.renderToString("R_m = \\frac {M} {R_{p}} \\times 100"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic F, (G M^2.0000) / (2.0000r_{p})^2.0000"],
                    stepsText: "Enter " + katex.renderToString("F = \\frac {G M^{2}} {{2 r_p}^{2}}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic a, F / M"],
                    stepsText: "Enter " + katex.renderToString("a = \\frac F M"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page2ID },
                    stepFilename: function () { return game.skills.equationData[0].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic v, 2.0000sqrt(2.0000a r_{p})"],
                    stepsText: "Enter " + katex.renderToString("v = 2 \\sqrt{2 a r_{p}}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic r, 2.0000r_{p}"],
                    stepsText: "Enter " + katex.renderToString("r = 2r_p"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: ["19"],
                    correctStep: ["symbolic t, (2.0000π * 2.0000r_{p}) / v"],
                    stepsText: "Enter " + katex.renderToString("t = \\frac {2 \\pi 2 r_{p}}{v}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic f, 1.0000 / t"],
                    stepsText: "Enter " + katex.renderToString("f = \\frac 1 t"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m, (M M) / (M + M)"],
                    stepsText: "Enter " + katex.renderToString("m = \\frac {M M} {M + M}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic V_{r}, (m c^2.0000) / 2.0000"],
                    stepsText: "Enter " + katex.renderToString("V_r = \\frac {m s c^{2}} {2}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic V_{c}, V_{r} / r"],
                    stepsText: "Enter " + katex.renderToString("V_c = \\frac V r"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic r_{m}, r / 100.00"],
                    stepsText: "Enter " + katex.renderToString("r_{m} = \\frac {r} {100}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic Kc, 8.9880 * 10.000^9.0000"],
                    stepsText: "Enter " + katex.renderToString("K_c = 8.988 \\times 10^{9}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic q_{1}, 1.6020 * 10.000^-19.000"],
                    stepsText: "Enter " + katex.renderToString("q_1 = 1.602 \\times 10^{-19}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic q_{2}, 1.6020 * 10.000^-19.000"],
                    stepsText: "Enter " + katex.renderToString("q_2 = 1.602 \\times 10^{-19}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: ["25"],
                    correctStep: ["symbolic F_{c}, (Kc q_{1} q_{2}) / r_{m}^2.0000"],
                    stepsText: "Enter " + katex.renderToString("F_c = \\frac {Kc q_1 q_2} {r_m^{2}}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic F_{d}, F_{c} * 10.000^5.0000"],
                    stepsText: "Enter " + katex.renderToString("F_d = F_c \\times 10^{5}"),
                }, {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[0].page3ID },
                    stepFilename: function () { return game.skills.equationData[0].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic F_{t}, V_{c} + F_{d}"],
                    stepsText: "Enter " + katex.renderToString("F_t = V_c + F_d")
                }
                ]

            },

            
            // Quantum Gravity and the Holographic Mass
            {

                name: "Quantum Gravity and the Holographic Mass",
                formattedName: `                    
                    <span class="A_decor">Q</span>
                    <span class="A_reg">uantum </span>
                    <span class="A_decor">G</span>
                    <span class="A_reg">ravity and the </span>
                    <span class="A_decor">H</span>
                    <span class="A_reg">olographic </span>
                    <span class="A_decor">M</span>
                    <span class="A_reg">ass </span>
                `,
                id: 86,
                type: "paper",
                elementID: "A-holographicMass",
                status: "unlocked",
                zoomScale: 6,
                selected: false,
                thumbnailURL: "src/assets/images/papers/thumbnails/thumbSchwarzschildProton2.svg",
                geogebraFile: "src/assets/geogebra/testCASRounding10.ggb",
                paperPDFFile: "src/assets/docs/Quantum_Gravity_and_the_Holographic_Mass.pdf",
                difficulty: "HARD  |  31 STEPS",
                unlocksSkills: [2],
                requirement: "(REQUIRES THE 64 TETRAHEDRON GRID)",
                overview: "Haramein’s generalized holographic approach gives a quantized solution to mass and gravity in terms of the quanta of space.",
                quote: '"Everything emerges and returns to a fundamental field of information that connects us all."',
                quotee: "Nassim Harramein",
                geoDetailBody: `
                
                <div>
                    Nassim Haramein's paper "The Schwarzschild Proton" presents a new solution for the mass of the proton that is much heavier than that which the standard model predicts. 
                    While the standard proton has a mass of ` + katex.renderToString("10^{-24} gm") + `, the proton that Nassim Haramein's equations describe have a mass of ` + katex.renderToString("10^{14} gm") + ` - a difference of 38 orders of magnitude.
                </div>
                <br>
                <div>
                    The different measurements occur due to two different ways of measuring the mass of the proton. 
                    The standard model ignores the energy-density of the space itself inside the atom through a mathematical trick called "renormalization", 
                    whereas Nassim Haramein appropriately accounts for the density of the space itself inside the atom, giving it a much larger value. 
                    The resulting mass shows that the proton itself obeys the Schwarzschild condition and has enough mass to actually be considered a miniature black hole. 
                    The standard model is only accounting for the mass as observed from OUTSIDE the proton, 
                    whereas Nassim is accounting for the mass inside the proton including the mass dilation that occurs INSIDE the event horizon of the mini black hole. 
                    Mass increases exponentially as it's spin approaches the speed of light inside the event horizon of any black hole.
                </div>
                <br>
                <div>
                    When you place both proton measurements into a graph comparing their mass vs. the radius along with many other known objects in the universe, 
                    a linear relationship of mass vs. radius arises. The Schwarzschild proton fits in perfect alignment with all other objects on all scales, 
                    whereas the standard model proton falls way off the graph.
                </div>
                <br>

                <div id="A_overviewPaperTitle" >The Schwarzschild Proton Paper</div>
                <br>
                
                <div class="A_geoMenu2">
                
                    <div class="A_btnContainer">
                        <span class="A_geogebraButton" id="A_prevPage">PREVIOUS PAGE</span>
                    </div>

                    <span class="A_pageInfo">Page <span id="A_pageNum"></span> of <span id="A_pageCount"></span></span>  

                    <div class="A_btnContainer">
                        <span class="A_geogebraButton" id="A_nextPage">NEXT PAGE</span>
                    </div>
  
                </div>  
                
                <div class="A_pdfFlexContainer">
                    <canvas id="A_pdfRender"></canvas>
                </div>
                `,

                page1Filename: "src/assets/images/papers/HolographicMass1.svg",
                page1ID: "#HolographicMass1",
                page2Filename: "src/assets/images/papers/HolographicMass2.svg",
                page2ID: "#HolographicMass2",
                page3Filename: "src/assets/images/papers/HolographicMass3.svg",
                page3ID: "#HolographicMass3",
                page4Filename: "src/assets/images/papers/HolographicMass4.svg",
                page4ID: "#HolographicMass4",
                page5Filename: "src/assets/images/papers/HolographicMass5.svg",
                page5ID: "#HolographicMass5",
                page6Filename: "src/assets/images/papers/HolographicMass6.svg",
                page6ID: "#HolographicMass6",
                page7Filename: "src/assets/images/papers/HolographicMass7.svg",
                page7ID: "#HolographicMass7",

                cheatSteps: [

                    // page 1
                    ["l = 1.616199000 * 10.00000000^-33.00000000"],
                    ["l_{r} = l / 2.000000000"],
                    ["V_{ls} = 4.000000000 / 3.000000000 π l_{r}^3.000000000"],
                    ["A_{lc} = π l_{r}^2.000000000"],
                    ["r = 2.500000000 * 10.00000000^6.000000000"],
                    ["A = 4.000000000π r^2.000000000"],
                    ["η = A / A_{lc}"],
                    ["V = 4.000000000 / 3.000000000 π r^3.000000000"],
                    ["R = V / V_{ls}"],
                    ["m_{l} = 2.176508000 * 10.00000000^-5.000000000"],
                    ["m_{h1} = R / η m_{l}"],

                    // page 2
                    ["m_{h2} = (R m_{l}) / (η m_{l}) m_{l}"],
                    ["R_{p} = R m_{l}"],
                    ["η_{p} = η m_{l}"],
                    ["m_{h3} = R_{p} / η_{p} m_{l}"],
                    ["m_{h4} = R_{p} / η"],
                    ["c = 2.997924580 * 10.00000000^10.00000000"],
                    ["G = 6.674300000 * 10.00000000^-8.000000000"],
                    ["m_{s} = (r c^2.000000000) / (2.000000000G)"],

                    // page 3
                    ["m_{h5} = r m_{l} / (2.000000000l)"],

                    // page 4
                    ["r_{p} = 0.8775000000 * 10.00000000^-13.00000000"],
                    ["A_{p} = 4.000000000π r_{p}^2.000000000"],
                    ["η_{2} = A_{p} / A_{lc}"],

                    // page 5
                    ["η_{p2} = η_{2} m_{l}"],
                    ["V_{p} = 4.000000000 / 3.000000000 π r_{p}^3.000000000"],
                    ["R_{2} = V_{p} / V_{ls}"],
                    ["m_{p1} = 2.000000000 η_{p2} / R_{2}"],

                    // page 6
                    ["r_{p2} = 0.8418400000 * 10.00000000^-13.00000000"],
                    ["η_{3} = (4.000000000π r_{p2}^2.000000000) / A_{lc}"],
                    ["η_{p3} = η_{3} m_{l}"],
                    ["R_{3} = (4.000000000 / 3.000000000 π r_{p2}^3.000000000) / V_{ls}"],
                    ["m_{p2} = 2.000000000 η_{p3} / R_{3}"],
                    ["m_{p3} = 4.000000000l m_{l} / r_{p2}"],
                    ["m_{p4} = 1.672622000 * 10.00000000^-24.00000000"],
                    ["r_{p3} = 4.000000000l m_{l} / m_{p4}"],
                    // ["m_{p5} = 2 * ((m_{l}^(2)) / (((r_{p3} m_{l}) / (2 l))))"],
                    ["PLACEHOLDER"]
                    ["PLACEHOLDER"]

                ],

                steps: [{
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic l, 1.616199000 * 10.00000000^-33.00000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33}") + ". (Hint: Enter 'l = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic l_{r}, l / 2.000000000"], // V_p = \\frac 4 3 \\pi r_p^{3}
                    stepsText: "Enter  " + katex.renderToString("l_r = \\frac l 2") + " . (Hint: Enter 'l_r = l / 2'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic V_{ls}, 4.000000000 / 3.000000000 π l_{r}^3.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic A_{lc}, π l_{r}^2.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic r, 2.500000000 * 10.00000000^6.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic A, 4.000000000π r^2.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic η, A / A_{lc}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic V, 4.000000000 / 3.000000000 π r^3.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R, V / V_{ls}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{l}, 2.176508000 * 10.00000000^-5.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page1ID },
                    stepFilename: function () { return game.skills.equationData[1].page1Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{h1}, R / η m_{l}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{h2}, (R m_{l}) / (η m_{l}) m_{l}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{p}, R m_{l}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic η_{p}, η m_{l}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: ["13", "14"],
                    correctStep: ["symbolic m_{h3}, R_{p} / η_{p} m_{l}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{h4}, R_{p} / η"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic c, 2.997924580 * 10.00000000^10.00000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic G, 6.674300000 * 10.00000000^-8.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page2ID },
                    stepFilename: function () { return game.skills.equationData[1].page2Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{s}, (r c^2.000000000) / (2.000000000G)"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page3ID },
                    stepFilename: function () { return game.skills.equationData[1].page3Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{h5}, r m_{l} / (2.000000000l)"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page4ID },
                    stepFilename: function () { return game.skills.equationData[1].page4Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic r_{p}, 0.8775000000 * 10.00000000^-13.00000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page4ID },
                    stepFilename: function () { return game.skills.equationData[1].page4Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic A_{p}, 4.000000000π r_{p}^2.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page4ID },
                    stepFilename: function () { return game.skills.equationData[1].page4Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic η_{2}, A_{p} / A_{lc}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page5ID },
                    stepFilename: function () { return game.skills.equationData[1].page5Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic η_{p2}, η_{2} m_{l}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page5ID },
                    stepFilename: function () { return game.skills.equationData[1].page5Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic V_{p}, 4.000000000 / 3.000000000 π r_{p}^3.000000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page5ID },
                    stepFilename: function () { return game.skills.equationData[1].page5Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{2}, V_{p} / V_{ls}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page5ID },
                    stepFilename: function () { return game.skills.equationData[1].page5Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{p1}, 2.000000000η_{p2} / R_{2}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page6ID },
                    stepFilename: function () { return game.skills.equationData[1].page6Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic r_{p2}, 0.8418400000 * 10.00000000^-13.00000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page6ID },
                    stepFilename: function () { return game.skills.equationData[1].page6Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic η_{3}, (4.000000000π r_{p2}^2.000000000) / A_{lc}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page6ID },
                    stepFilename: function () { return game.skills.equationData[1].page6Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic η_{p3}, η_{3} m_{l}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page6ID },
                    stepFilename: function () { return game.skills.equationData[1].page6Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic R_{3}, (4.000000000 / 3.000000000 π r_{p2}^3.000000000) / V_{ls}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page6ID },
                    stepFilename: function () { return game.skills.equationData[1].page6Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{p2}, 2.000000000η_{p3} / R_{3}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page6ID },
                    stepFilename: function () { return game.skills.equationData[1].page6Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{p3}, 4.000000000l m_{l} / r_{p2}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page6ID },
                    stepFilename: function () { return game.skills.equationData[1].page6Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic m_{p4}, 1.672622000 * 10.00000000^-24.00000000"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page7ID },
                    stepFilename: function () { return game.skills.equationData[1].page7Filename },
                    multiPartEquation: null,
                    correctStep: ["symbolic r_{p3}, 4.000000000l m_{l} / m_{p4}"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page7ID },
                    stepFilename: function () { return game.skills.equationData[1].page7Filename },
                    multiPartEquation: null,
                    correctStep: ["PLACEHOLDER"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                },
                {
                    type: "paper",
                    zoomScale: 6,
                    elementID: function () { return game.skills.equationData[1].page7ID },
                    stepFilename: function () { return game.skills.equationData[1].page7Filename },
                    multiPartEquation: null,
                    correctStep: ["PLACEHOLDER"],
                    stepsText: "Enter  " + katex.renderToString("l = 1.616199 \\times 10^{-33} gm/cm^{3}.") + " (Hint: Enter 'p_v = 1.616199 * 10^-33'. Press the " + katex.renderToString("\\approx") + " button after each step.)",
                }
                ],



            }
        ]
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.equationData = equationData;
})();