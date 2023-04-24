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
            {
                "id": 85,
                "type": "paper",
                "elementID": "A_schwarzsPPaper",
                "material_id": "ybm744ww",
                "zoomScale": 3,

                "steps": [{

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic p_{v}, 5.1660 * 10.000^93.000"],
                    "stepsText": "Enter  " + katex.renderToString("p_v = 5.166 \\times 10^{93} gm/cm^{3}.") + " (Hint: Enter 'p_v = 5.166 * 10^93'. Press the " + katex.renderToString("\\approx") + " button after each step.)",

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic r_{p}, 1.3210 * 10.000^-13.000"],
                    "stepsText": "Enter " + katex.renderToString("r_p = 1.321 \\times 10^{-13}") + " (hint: Enter 'r_p = 1.321 * 10^-13')",

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic V_{p}, 4.0000 / 3.0000 r_{p}^3.0000 π"],
                    "stepsText": "Enter " + katex.renderToString("V_p = \\frac 4 3 \\pi r_p^{3}") + " (hint: Enter 'V_p = 4 / 3 * r_p^3 * pi')",

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic R_{p}, p_{v} V_{p}"],
                    "stepsText": "Enter " + katex.renderToString("R_p = p_v V_p"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic l, 1.6200 * 10.000^-33.000"],
                    "stepsText": "Enter " + katex.renderToString("l = 1.62 \\times 10^{-33}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic v_{pl}, l^3.0000"],
                    "stepsText": "Enter " + katex.renderToString("v_{pl} = l^{3}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic n, V_{p} / v_{pl}"],
                    "stepsText": "Enter " + katex.renderToString("n = \\frac {V_p} {v_{pl}}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic m_{p}, 2.1800 * 10.000^-5.0000"],
                    "stepsText": "Enter " + katex.renderToString("m_p = 2.18 \\times 10^{-5}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic R_{p2}, m_{p} n"],
                    "stepsText": "Enter " + katex.renderToString("R_{p2} = m_p n"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic R_{s}, r_{p}"],
                    "stepsText": "Enter " + katex.renderToString("R_s = r_p"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic G, 6.6700 * 10.000^-8.0000"],
                    "stepsText": "Enter " + katex.renderToString("G = 6.67 \\times 10^{-8}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic c, 2.9900 * 10.000^10.000"],
                    "stepsText": "Enter " + katex.renderToString("c = 2.99 \\times 10^{10}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic M, (R_{s} c^2.0000) / (2.0000G)"],
                    "stepsText": "Enter " + katex.renderToString("M = \\frac{R_s c^{2}}{2G}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic R_{m}, M / R_{p} * 100.00"],
                    "stepsText": "Enter " + katex.renderToString("R_m = \\frac {M} {R_{p}} \\times 100"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic F, (G M^2.0000) / (2.0000r_{p})^2.0000"],
                    "stepsText": "Enter " + katex.renderToString("F = \\frac {G M^{2}} {{2 r_p}^{2}}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic a, F / M"],
                    "stepsText": "Enter " + katex.renderToString("a = \\frac F M"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic v, 2.0000sqrt(2.0000a r_{p})"],
                    "stepsText": "Enter " + katex.renderToString("v = 2 \\sqrt{2 a r_{p}}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic r, 2.0000r_{p}"],
                    "stepsText": "Enter " + katex.renderToString("r = 2r_p"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic t, (2.0000π * 2.0000r_{p}) / v"],
                    "stepsText": "Enter " + katex.renderToString("t = \\frac {2 \\pi 2 r_{p}}{v}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic f, 1.0000 / t"],
                    "stepsText": "Enter " + katex.renderToString("f = \\frac 1 t"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic m, (M M) / (M + M)"],
                    "stepsText": "Enter " + katex.renderToString("m = \\frac {M M} {M + M}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic V_{r}, (m c^2.0000) / 2.0000"],
                    "stepsText": "Enter " + katex.renderToString("V_r = \\frac {m s c^{2}} {2}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic V_{c}, V_{r} / r"],
                    "stepsText": "Enter " + katex.renderToString("V_c = \\frac V r"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic r_{m}, r / 100.00"],
                    "stepsText": "Enter " + katex.renderToString("r_{m} = \\frac {r} {100}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic Kc, 8.9880 * 10.000^9.0000"],
                    "stepsText": "Enter " + katex.renderToString("K_c = 8.988 \\times 10^{9}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic q_{1}, 1.6020 * 10.000^-19.000"],
                    "stepsText": "Enter " + katex.renderToString("q_1 = 1.602 \\times 10^{-19}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic q_{2}, 1.6020 * 10.000^-19.000"],
                    "stepsText": "Enter " + katex.renderToString("q_2 = 1.602 \\times 10^{-19}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic F_{c}, (Kc q_{1} q_{2}) / r_{m}^2.0000"],
                    "stepsText": "Enter " + katex.renderToString("F_c = \\frac {Kc q_1 q_2} {r_m^{2}}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic F_{d}, F_{c} * 10.000^5.0000"],
                    "stepsText": "Enter " + katex.renderToString("F_d = F_c \\times 10^{5}"),

                }, {

                    "type": "construction",
                    "zoomScale": 3,
                    "styleObjects": [],
                    "correctStep": ["symbolic F_{t}, V_{c} + F_{d}"],
                    "stepsText": "Enter " + katex.renderToString("F_t = V_c + F_d")

                }
                ],

                // "steps": [

                //     ["symbolic p_{v}, 5.1660 * 10.000^93.000"],
                //     ["symbolic r_{p}, 1.3210 * 10.000^-13.000"],
                //     ["symbolic V_{p}, 4.0000 / 3.0000 r_{p}^3.0000 π"],
                //     ["symbolic R_{p}, p_{v} V_{p}"],
                //     ["symbolic l, 1.6200 * 10.000^-33.000"],
                //     ["symbolic v_{pl}, l^3.0000"],
                //     ["symbolic n, V_{p} / v_{pl}"],
                //     ["symbolic m_{p}, 2.1800 * 10.000^-5.0000"],
                //     ["symbolic R_{p2}, m_{p} n"],
                //     ["symbolic R_{s}, r_{p}"],
                //     ["symbolic G, 6.6700 * 10.000^-8.0000"],
                //     ["symbolic c, 2.9900 * 10.000^10.000"],
                //     ["symbolic M, (R_{s} c^2.0000) / (2.0000G)"],
                //     ["symbolic R_{m}, M / R_{p} * 100.00"],
                //     ["symbolic F, (G M^2.0000) / (2.0000r_{p})^2.0000"],
                //     ["symbolic a, F / M"],
                //     ["symbolic v, 2.0000sqrt(2.0000a r_{p})"],
                //     ["symbolic r, 2.0000r_{p}"],
                //     ["symbolic t, (2.0000π * 2.0000r_{p}) / v"],
                //     ["symbolic f, 1.0000 / t"],
                //     ["symbolic m, (M M) / (M + M)"],
                //     ["symbolic V_{r}, (m c^2.0000) / 2.0000"],
                //     ["symbolic V_{c}, V_{r} / r"],
                //     ["symbolic r_{m}, r / 100.00"],
                //     ["symbolic Kc, 8.9880 * 10.000^9.0000"],
                //     ["symbolic q_{1}, 1.6020 * 10.000^-19.000"],
                //     ["symbolic q_{2}, 1.6020 * 10.000^-19.000"],
                //     ["symbolic F_{c}, (Kc q_{1} q_{2}) / r_{m}^2.0000"],
                //     ["symbolic F_{d}, F_{c} * 10.000^5.0000"],
                //     ["symbolic F_{t}, V_{c} + F_{d}"]

                // ],

                // "stepsText": [

                //     "Enter  " + katex.renderToString("p_v = 5.166 \\times 10^{93} gm/cm^{3}.")
                //         + " (Hint: Enter 'p_v = 5.166 * 10^93'. Press the "
                //         + katex.renderToString("\\approx") + " button after each step.)",

                //     "Enter " + katex.renderToString("r_p = 1.321 \\times 10^{-13}")
                //         + " (hint: Enter 'r_p = 1.321 * 10^-13')",

                //     "Enter " + katex.renderToString("V_p = \\frac 4 3 \\pi r_p^{3}")
                //         + " (hint: Enter 'V_p = 4 / 3 * r_p^3 * pi')",

                //     "Enter " + katex.renderToString("R_p = p_v V_p"),
                //     "Enter " + katex.renderToString("l = 1.62 \\times 10^{-33}"),
                //     "Enter " + katex.renderToString("v_{pl} = l^{3}"),
                //     "Enter " + katex.renderToString("n = \\frac {V_p} {v_{pl}}"),
                //     "Enter " + katex.renderToString("m_p = 2.18 \\times 10^{-5}"),
                //     "Enter " + katex.renderToString("R_{p2} = m_p n"),
                //     "Enter " + katex.renderToString("R_s = r_p"),
                //     "Enter " + katex.renderToString("G = 6.67 \\times 10^{-8}"),
                //     "Enter " + katex.renderToString("c = 2.99 \\times 10^{10}"),
                //     "Enter " + katex.renderToString("M = \\frac{R_s c^{2}}{2G}"),
                //     "Enter " + katex.renderToString("R_m = \\frac {M} {R_{p}} \\times 100"),
                //     "Enter " + katex.renderToString("F = \\frac {G M^{2}} {{2 r_p}^{2}}"),
                //     "Enter " + katex.renderToString("a = \\frac F M"),
                //     "Enter " + katex.renderToString("v = 2 \\sqrt{2 a r_{p}}"),
                //     "Enter " + katex.renderToString("r = 2r_p"),
                //     "Enter " + katex.renderToString("t = \\frac {2 \\pi 2 r_{p}}{v}"),
                //     "Enter " + katex.renderToString("f = \\frac 1 t"),
                //     "Enter " + katex.renderToString("m = \\frac {M M} {M + M}"),
                //     "Enter " + katex.renderToString("V_r = \\frac {m s c^{2}} {2}"),
                //     "Enter " + katex.renderToString("V_c = \\frac V r"),
                //     "Enter " + katex.renderToString("r_{m} = \\frac {r} {100}"),
                //     "Enter " + katex.renderToString("K_c = 8.988 \\times 10^{9}"),
                //     "Enter " + katex.renderToString("q_1 = 1.602 \\times 10^{-19}"),
                //     "Enter " + katex.renderToString("q_2 = 1.602 \\times 10^{-19}"),
                //     "Enter " + katex.renderToString("F_c = \\frac {Kc q_1 q_2} {r_m^{2}}"),
                //     "Enter " + katex.renderToString("F_d = F_c \\times 10^{5}"),
                //     "Enter " + katex.renderToString("F_t = V_c + F_d")

                // ],

                "d3Data": ["hexStatus2Vesica", "Complete2Vesica"],
                "elements": [
                    {
                        "num": 9,
                        "type": "divider"
                    },
                    {
                        "num": 14,
                        "type": "divider"
                    },
                    {
                        "num": 20,
                        "type": "divider"
                    },
                    {
                        "num": 21,
                        "type": "text"
                    }
                ],

                "selected": false,
                "url": "src/assets/images/skills/vesica_piscis.png",
                "url2": "src/assets/images/skills/vesicaPicsisLarge.svg",
                "stepsImage": "src/assets/images/papers/schwarzschildproton/The_Schwarzschild_Proton9.svg",
                "name": "The Schwarzschild Proton",
                "difficulty": "HARD  |  31 STEPS",
                "completed": false,
                "unlocked": true,
                "unlocksSkills": [2],
                "requirement": "(REQUIRES THE 64 TETRAHEDRON GRID)",
                "overview": "Nassim Haramein's paper 'The Schwarzschild Proton' presents a new solution for the mass of the proton. It shows that the proton obeys the Schwarzschild condition and has enough mass to be considered a miniature black hole.",
                "quote": '"Everything emerges and returns to a fundamental field of information that connects us all."',
                "quotee": "Nassim Harramein",
                "geoDetailBody": `
                
                <div>
                    Nassim Haramein's paper "The Schwarzschild Proton" presents a new solution for the mass of the proton that is much heavier than that which the standard model predicts. 
                    While the standard proton has a mass 10 to the -24g, the proton that Nassim Haramein's equations describe have a mass of 10 to the 14g - a difference of 38 orders of magnitude.
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

                <div style="text-align: center; color: var(--yellow1)">
                    The Schwarzschild Proton Paper
                </div>
                <br>
                
                <div class="A_geoMenu2">
                
                    <div class="A_btnContainer">
                        <span class="A_geogebraButton" id="A_prevPage">PREVIOUS PAGE</span>
                    </div>

                    <span class="A_pageInfo">
                        Page <span id="A_pageNum"></span> of <span id="A_pageCount"></span>
                    </span>  

                    <div class="A_btnContainer">
                        <span class="A_geogebraButton" id="A_nextPage">NEXT PAGE</span>
                    </div>
  
                </div>  
                
                <div class="A_pdfFlexContainer">
                    <canvas id="A_pdfRender"></canvas>
                </div>
                `
            }
        ]
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.equationData = equationData;
})();