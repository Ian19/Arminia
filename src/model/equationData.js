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

        // const path = "../src/src/assets/images/skills/";

        function addNbsp(step) {
            const str = "<p>&nbsp;</p><p>&nbsp;</p>";
            step = str + step + str;
            return step;
        }

        game.skills.equationData = [
            {
                "id": 1,
                "material_id": "ybm744ww",

                "steps": [

                     ["symbolic p_{v}, 5.1660 * 10.000^93.000"],
                     ["symbolic r_{p}, 1.3210 * 10.000^-13.000"], 
                     ["symbolic V_{p}, 4.0000 / 3.0000 r_{p}^3.0000 π"],                     
                     ["symbolic R_{p}, p_{v} V_{p}"],
                     ["symbolic l, 1.6200 * 10.000^-33.000"],
                     ["symbolic v_{pl}, l^3.0000"],
                     ["symbolic n, V_{p} / v_{pl}"],
                     ["symbolic m_{p}, 2.1800 * 10.000^-5.0000"],
                     ["symbolic R_{p2}, m_{p} n"],
                     ["circle d, Circle(B, A)"]

                ],

                "stepsText": [                    
                    
                    addNbsp("To find the quantity of the density of the vacuum available in the volume of a proton with radius " 
                    + katex.renderToString("r_p = 1.321 \\times 10^{-13}") 
                    + " Fm, we begin with the Planck density given as " 
                    + katex.renderToString("p_v = 5.166 \\times 10^{93} gm/cm^{3}.")
                    + " Type p_v = 5.166 * 10^93 into the Algebra Input Bar and press Enter. Press the " + katex.renderToString("\\approx") 
                    + " button after each step."), 

                    addNbsp("We use the radius of the proton to calculate its volume. Enter " + katex.renderToString("r_p = 1.321 \\times 10^{-13}") + " (hint: type r_p = 1.321 * 10^-13)"), 

                    addNbsp("We now have everything we need to calculate the vacuum density of the proton. Enter " + katex.renderToString("V_p = \\frac 4 3 \\times r_p^{3} \\times \\pi") + " (hint: type V_p = 4 / 3 * r_p^3 * pi)"),

                    addNbsp("Enter " + katex.renderToString("R_p = p_v \\times V_p") ),

                    addNbsp("Enter " + katex.renderToString("l = 1.62 \\times 10^{-33}") ),

                    addNbsp("Enter " + katex.renderToString("v_pl = l^{3}") ),
                    addNbsp("Enter " + katex.renderToString("n = V_p / v_{pl}") ),
                    addNbsp("Enter " + katex.renderToString("m_p = 2.18 \\times 10^{-5}") ),
                    addNbsp("Enter " + katex.renderToString("R_p2 = m_p \\times n") ),

                    addNbsp(" Draw Circle <b>d</b> through point A with center at point B")

                ],

                "d3Data": ["hexStatus2Vesica", "Complete2Vesica"],
                "selected": false,
                "url": "src/assets/images/skills/vesica_piscis.png",
                "url2": "src/assets/images/skills/vesicaPicsisLarge.svg",
                "stepsImage": "src/assets/images/skills/details/vesicaPiscisDetail.svg",
                "stepsImage2": "src/assets/images/papers/schwarzschildproton/step",
                "stepsImageBackup": "src/assets/images/papers/schwarzschildproton/step",
                "stepsBackgroundImage": "src/assets/images/papers/schwarzschildproton/The_Schwarzschild_Proton3.svg",
                "name": "The Schwarzschild Proton",
                "difficulty": "HARD  |  29 STEPS",
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