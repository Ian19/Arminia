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

    function infoSystemData(game) {

        // game.infoSystemData = {};
        game.infoSystemData  = [
            {
                "infoSystemInfo": 1,
                "name": "The 64 Tetrahedron Grid",
                "difficulty": "HARD  |  32 STEPS",
                "overview": "The structure of space, holofractalgrahic universe, geometry of equillibrium"        
            }, 
            {
                "infoSystemInfo": 2,
                "name": "Metatron's Cube",
                "difficulty": "HARD  |  46 STEPS",
                "overview": "The 5 Platonic Solids, Creation"    
            },
            {
                "infoSystemInfo": 3,
                "name": "The Star Tetrahedron Inside The Sphere",
                "difficulty": "MEDIUM  |  18 STEPS",
                "overview": "Physics, music, the polar graph"   
            },
            {
                "infoSystemInfo": 4,
                "name": "The Tree of Life",
                "difficulty": "MEDIUM  |  18 STEPS",
                "overview": "Physics"   
            }
        ]

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.infoSystemData = infoSystemData;
})();