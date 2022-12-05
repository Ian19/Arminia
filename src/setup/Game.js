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

window.addEventListener("DOMContentLoaded", function () {
    new Arminia.Game();
}, false);

(function () {
    class Game {
        constructor() {

            console.log("d3.js v" + d3.version);

            Arminia.initScene(this);
            Arminia.initMaterials(this);
            Arminia.initAssets(this);

            const _this = this;
            this.loader.onFinish = function () {
                Arminia.initGame(_this);
                _this.engine.runRenderLoop(function () {
                    _this.scene.render();
                });
            };
        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.Game = Game;
})();