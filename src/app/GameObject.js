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

(function() {

    class GameObject extends BABYLON.TransformNode {        

        constructor(name, game) {
            super(name, game.scene);
            this.game = game;            
        }

        getAlphaIndex(name) {
            
            switch (name) {
                case "FruitOfLife1":
                    return 0;
                case "FruitOfLife2":
                    return 0;
                case "FruitOfLife3":
                    return 0;
                case "FruitOfLife4":
                    return 0;
                case "THGMesh1":
                    return 9;
                case "THGMesh2":
                    return 6;
                case "THGWireMesh1":
                    return 8;
                case "THGLines2DMesh":
                    return 8;
                case "SnowFlake":
                    return 1;
                default:
            }
        }
    };
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.GameObject = GameObject;
})();