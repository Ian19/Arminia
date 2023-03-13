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

    const spotlight = function (game) {

        const spotLightMat = new BABYLON.StandardMaterial("spotLightMat", game.scene);
        spotLightMat.alphaMode = BABYLON.Engine.ALPHA_ADD;
        spotLightMat.emissiveTexture = new BABYLON.Texture("src/assets/textures/glow.png", game.scene);
        spotLightMat.opacityTexture = new BABYLON.Texture("src/assets/textures/glow.png", game.scene);
        spotLightMat.alpha = 0.25;

        // game.spotLightplane = BABYLON.MeshBuilder.CreatePlane("spotLightplane", { width: 55, height: 60 }, game.scene);
        game.spotLightplane = BABYLON.MeshBuilder.CreatePlane("spotLightplane", { width: 55, height: 150 }, game.scene);
        game.spotLightplane.rotation.y = 180 * Math.PI / 180;
        game.spotLightplane.layerMask = 2;
        game.spotLightplane.material = spotLightMat;

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.spotlight = spotlight;

})();