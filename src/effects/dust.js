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

    var dust = function (game) {

        const dustMat = new BABYLON.StandardMaterial("dustMat", game.scene);
        dustMat.emissiveTexture = new BABYLON.Texture("src/assets/textures/dust.png", game.scene);
        dustMat.opacityTexture = new BABYLON.Texture("src/assets/textures/dust.png", game.scene);
        dustMat.alpha = 0.4;

        game.dustPlane = BABYLON.MeshBuilder.CreatePlane("dustPlane", { width: 50, size: 50, tileSize: 1 }, game.scene);
        game.dustPlane.rotation.y = 180 * Math.PI / 180;
        game.dustPlane.layerMask = 2;
        game.dustPlane.material = dustMat;

        game.scene.registerBeforeRender(function () {
            if (game.dustPlane) {
                game.dustPlane.material.emissiveTexture.vOffset -= 0.00008;
                game.dustPlane.material.opacityTexture.vOffset -= 0.00008;
            } 
        });
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.dust = dust;
})();