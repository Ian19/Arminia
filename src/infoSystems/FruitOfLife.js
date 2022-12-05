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

    class FruitOfLife extends Arminia.GameObject {

        constructor(game, meshName, parent1) {

            super(meshName, game);
            this.parent = parent1;
            var _this = this;
            this.fruitSpheres = [];

            Object.keys(game.assets.fruitOfLifeTN.fruitSpheres).forEach(function(key) {

                let s = this["sphere1"].createInstance(key);
                s.position = this[key].position;
                s.parent = _this;
                s.alphaIndex = 0;
                s.layerMask = 1;
                s.isVisible = true;
                s.isPickable = false;
                _this.fruitSpheres.push(s);

            }, game.assets.fruitOfLifeTN.fruitSpheres);

            this.setEnabled(false);

            //Arminia.showAxis(5, game.scene);
            //const CoTAxis = game._localAxis(1, .7, game.scene);
            //CoTAxis.parent = this; 
        }

        fruitSpheresGlow(g) {
            if (!g.camZoomManager.isZoomed && !g.camZoomManager.isZooming) {
                this.setEnabled(true);                
            }           
        }

        fruitSpheresFade(g) {
            if (!g.camZoomManager.isZoomed && !g.camZoomManager.isZooming) {
                this.setEnabled(false);
            }
        }

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.FruitOfLife = FruitOfLife;
})();