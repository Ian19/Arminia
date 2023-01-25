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

    var lightrays = function (game) {

        // var lightRayPlane = BABYLON.MeshBuilder.CreatePlane("lightRayPlane", { width: 36.6, size: 50, tileSize: 1 }, game.scene);
        game.lightRayPlane = BABYLON.MeshBuilder.CreatePlane("lightRayPlane", { width: 36.6, size: 50, tileSize: 1 }, game.scene);

        game.lightRayPlane.rotation.y = 180 * Math.PI / 180;
        game.lightRayPlane.rotation.z = 180 * Math.PI / 180;
        game.lightRayPlane.layerMask = 2;
        game.lightRayPlane.visibility = 0.15;
    
        var shaderMaterial = game.scene.getMaterialByName("lightRayMat");
        game.lightRayPlane.material = shaderMaterial;
        var time = 0;
    
        game.scene.registerBeforeRender(function () {    
            shaderMaterial.setFloat("time", time);
            time += 0.02;    
        });
    };
    
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.lightrays = lightrays;
})();