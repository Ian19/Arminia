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

    var load64TetraPage = function (game) {

        Arminia.equationData(game);

        function load() {

            document.getElementById("A_64TetraView").innerHTML =
                `
        
        
        <div class="A_header1">The 64 Tertrahedron Grid</div>
        <br>
        <div id="A_pageBody">
            <p style="text-indent: 25px;">

                Developed by Nassim Harramein, the 64 Tetrahedron Grid is theorised to describe the structure of
                space.

                It consists of 64 tetrahedrons organised in a tetrahedral symmetry.

                It has an equal amount of upward and downward pointing tetrahedrons producing a balance in polarity.

                This balance is also demonstrated by it's 8 star tetrahedrons and 1 prime star tetrahedron.

                So the 64 Tetrahedron Grid is a polarised version of the Vector Equilibrium - Isotropic Vector
                Matrix developed by Buckminster Fuller.

            </p><br>

            <div id="A_64Tetra3DContainer">

                <object class="A_64Tetra3D" id="A_64TetraView1" type="image/svg+xml"
                    data="src/assets/images/skills/64-tetra-grid3DView1.svg"></object>

                <object class="A_64Tetra3D" id="A_64TetraView2" type="image/svg+xml"
                    data="src/assets/images/skills/64-tetra-grid3DView2.svg"></object>

                <object class="A_64Tetra3D" id="A_64TetraView3" type="image/svg+xml"
                    data="src/assets/images/skills/64-tetra-grid3DView3.svg"></object>
            </div>
            <br><br>
            <p style="text-indent: 25px;">

                The 64 Tetrahedron Grid is a 3D fractal strutcure that grows or divides by octaves, meaning doubling
                or halving its volume respectively.

                These are the divisions of space which define the boundaries of all structures from infinetly large
                to infinetly small.

                In other words, it is the negative space that defines boundaries, not the positive space, as is
                commonly believed.

            </p><br><br>
            <p style="text-indent: 25px;">

                If space is shaped like a vector equilibrium fractal that is capable of dividing ad infinitum to the
                planck scale,

                this would suggest the infinite density of a singularity at it's center.

                The source of all gravity would be the gravity of these mini-black holes exisitng at the quantum
                level.

                This idea is further supportted by the balance of inward (gravitational) and outward (radiational)
                pointing tetrahedral dynamics,

                forming the boundary of the event horizon.

                With the vector equilibrium structure, all forces are cancelled out, producing what appears as
                "empty" space.

            </p><br><br>
            <p style="text-indent: 25px;">

                When the gyroscopic effect (torque and the coriolis effect) is added to General Relativity, the
                black whole is no longer shaped like a sphere, but like a double torus.

                At the center of the torus is space or singularity, which is required for this theory to work.

                Each tetrahedron of the prime star tetrahedron represents a polarity of the coriolis effect.

                When they come together to form the vector equilibrium, the double torus is produced.

                The singularity is created when all these elements are generated in equilibrium at the centre.

                All of Creation emerges from within this singularity, which is connected to the infinite density of
                space.

            </p>
            <br><br>
            <div class="A_header1">The Schwarzschild Proton</div>
            <br>
            <p style="text-indent: 25px;">

                Nassim Haramein's paper "The Schwarzschild Proton" presents a new solution for the mass of the
                proton that is much heavier than that which the standard model predicts. While the standard proton
                has a mass

                <span id="tex64Tetra1">
                    <script>
                    katex.render(" 10^{-24}", $("#tex64Tetra1")[0])
                    </script>
                </span>

                grams the proton that Nassim Haramein's equations describe have a mass of

                <span id="tex64Tetra2">
                    <script>
                    katex.render(" 10^{14}", $("#tex64Tetra2")[0]);
                    </script>
                </span>

                grams - a difference of 38 orders of magnitude.
            </p>
            <br><br>
            <div class="protonflex-container">
                <span class="A_protonButton A_protonButtonText" id="A_protonBtnID">THE SCHWARZSCHILD PROTON</span>
            </div>
        </div>        
        `;} 

        // load();

        $(document).on('click', '#A_protonBtnID', function () {

            // temporary until more papers are added
            game.skills.selectedSkill = game.skills.equationData[0];

            console.log("A_protonBtnID click");

            game.geogebra.parameters.appName = "suite";
            game.geogebra.parameters.filename = "src/assets/geogebra/testCAS3.ggb";
            game.geogebra.parameters.showAlgebraInput = true;
            game.geogebra.parameters.showToolBar = false;

            Arminia.geogebraBtnClick(game, "A_64TetraView", "#A_protonBtnID");

        });

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.load64TetraPage = load64TetraPage;
})();