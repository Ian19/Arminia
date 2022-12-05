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

    var loadMetatronPage = function () {

        function load() {

            // document.getElementById("A_proxyView").innerHTML = `
        
            //     <div class="A_header1">Metatron's Cube</div>
            //     <br>
            //     <div id="A_pageBody">Sacred geometry involves sacred universal patterns used in the design of everything in our
            //         reality, most often seen in sacred architecture and sacred art. The basic belief is that
            //         geometry and mathematical ratios, harmonics and
            //         proportion are also found in music, light, cosmology.
            //     </div>
            // `;
        }

        load();
        // document.getElementById('A_proxyView').style.display = "block";

    }

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.loadMetatronPage = loadMetatronPage;

})();