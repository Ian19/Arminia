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

    class FlowerOfLife2DLines extends Arminia.GameObject {

        constructor(game, parent1) {

            super("FlowerOfLife2DLines", game);

            this.parent = parent1;

            this.fruitSpheres = game.assets.fruitOfLifeTN.fruitSpheres;

            function sqrt(n) { return Math.sqrt(n) };

            var detail = 64;
            var pieDiv = 2 / detail;
            var divArray = [];
            var radius = 1;

            for (let i = 0; i < detail; i++) {

                divArray.push(Math.PI * (pieDiv * i));

            }

            var newPath = [];
            for (let i = 0; i < divArray.length; i++) {

                newPath.push(new BABYLON.Vector3(

                    radius * Math.cos(divArray[i]),

                    radius * Math.sin(divArray[i]),

                    0

                ));

            }

            let circleArray = [];
            for (let i = 0; i <= 6; i++) {

                circleArray[i] = Arminia.line2D("line1", { path: newPath, width: 0.002, closed: true }, game.scene);

            }

            circleArray[1].position = new BABYLON.Vector3(0, 1, 0);
            circleArray[2].position = new BABYLON.Vector3(sqrt(3) / 2, 0.5, 0);
            circleArray[3].position = new BABYLON.Vector3(sqrt(3) / 2, -0.5, 0);
            circleArray[4].position = new BABYLON.Vector3(0, -1, 0);
            circleArray[5].position = new BABYLON.Vector3(-sqrt(3) / 2, -0.5, 0);
            circleArray[6].position = new BABYLON.Vector3(-sqrt(3) / 2, 0.5, 0);

            var system = [];
            for (let i = 0; i <= 6; i++) {

                system.push(circleArray[i]);

            }


            var lines = BABYLON.Mesh.MergeMeshes(system, true);
            lines.name = "folMesh1";
            const mat = new BABYLON.StandardMaterial("folMat", game.scene);
            mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
            lines.material = mat;
            lines.layerMask = 1;
            lines.material.wireframe = true;
            lines.material.alpha = 0.3;
            lines.material.alphaMode = BABYLON.Engine.ALPHA_ADD;

            /*

            game.assets.fruitOfLifeTN.fruitSpheres["sphere2"].position = new BABYLON.Vector3(0, 2, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere3"].position = new BABYLON.Vector3(-sqrt(3), 1, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere4"].position = new BABYLON.Vector3(-sqrt(3), -1, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere5"].position = new BABYLON.Vector3(0, -2, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere6"].position = new BABYLON.Vector3(sqrt(3), -1, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere7"].position = new BABYLON.Vector3(sqrt(3), 1, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere8"].position = new BABYLON.Vector3(0, 4, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere9"].position = new BABYLON.Vector3(-sqrt(3) * 2, 2, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere10"].position = new BABYLON.Vector3(-sqrt(3) * 2, -2, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere11"].position = new BABYLON.Vector3(0, -4, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere12"].position = new BABYLON.Vector3(sqrt(3) * 2, -2, 0);
            game.assets.fruitOfLifeTN.fruitSpheres["sphere13"].position = new BABYLON.Vector3(sqrt(3) * 2, 2, 0);

            */

            /*
            this.line1 = Arminia.multiLines2D("FlowerOfLife2DLines", { paths: path1, width: 0.002 }, this.scene);
            const mat = new BABYLON.StandardMaterial("FlowerOfLife2DLinesMat", this.scene);
            mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
            this.line1.material = mat;
            this.line1.material.alpha = 0.3;
            this.line1.material.alpha1 = 0.3;
            this.line1.material.alphaMode = BABYLON.Engine.ALPHA_ADD;
            this.line1.material.wireframe = true;
            this.line1.material.needDepthPrePass = false;
            this.line1.name = "FlowerOfLife2DLinesMesh";
            //this.line1.alphaIndex = super.getAlphaIndex(this.line1.name); 
            this.line1.alphaIndex = 8;
            this.line1.parent = this;
            this.line1.layerMask = 1;
            this.line1.isPickable = false;

            this.line1.isVisible = true;

            */

        }
    }
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.FlowerOfLife2DLines = FlowerOfLife2DLines;
})();