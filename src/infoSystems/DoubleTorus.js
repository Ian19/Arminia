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
    class DoubleTorus extends Arminia.GameObject {

        constructor(game) {

            super("Torus", game);

            const _this = this;

            this.parent = game.infoSystem1;

            this.topTorus = game.scene.getMeshByName("Torus").clone("topTorus");
            this.topTorus.parent = this;
            this.topTorus.isVisible = true;
            this.topTorus.layerMask = 1;
            this.topTorus.visibility = 1;
            this.topTorus.alphaIndex = 7;

            this.topTorus.material = new BABYLON.StandardMaterial("torusMat", game.scene);
            this.topTorus.material.emissiveColor = new BABYLON.Color4.FromHexString("#675797FF");
            this.topTorus.material.wireframe = false;
            this.topTorus.material.alpha = 0.43;
            this.topTorus.material.alpha1 = 0.1;
            this.topTorus.material.lightmapTexture = null;
            this.topTorus.material.alphaMode = BABYLON.Engine.ALPHA_ADD;
            this.topTorus.material.needDepthPrePass = false;
            this.topTorus.material.zOffset = 2.0;
            this.topTorus.isPickable = false;
            this.topTorus.material.backFaceCulling = true;

            this.topTorus.scaling = new BABYLON.Vector3(4, 4.4, 4.31);
            this.topTorus.rotation = new BABYLON.Vector3(340 * Math.PI / 180, 0, 0);
            this.topTorus.position = new BABYLON.Vector3(0, 2, -0.7);

            this.bottomTorus = game.scene.getMeshByName("topTorus").clone("bottomTorus");
            this.bottomTorus.rotation = new BABYLON.Vector3(340 * Math.PI / 180, 0, Math.PI);
            this.bottomTorus.position = new BABYLON.Vector3(0, -2, 0.7);

        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.DoubleTorus = DoubleTorus;
})();