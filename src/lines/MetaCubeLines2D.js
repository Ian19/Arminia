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

    class MetaCubeLines2D extends Arminia.GameObject {

        constructor(game) {

            super("MetaCubeLines2D", game);

            this.parent = game.infoSystem2;

            this.fruitSpheres = game.assets.fruitOfLifeTN.fruitSpheres;

            function sqrt(n) { return Math.sqrt(n) };

            //const CoTAxis = game._localAxis(1, .7, game.scene);
            //CoTAxis.parent = this; 

            var path1 = [
                [
                    this.fruitSpheres["sphere8"].position, // outer hex
                    this.fruitSpheres["sphere9"].position,
                    this.fruitSpheres["sphere10"].position,
                    this.fruitSpheres["sphere11"].position,
                    this.fruitSpheres["sphere12"].position,
                    this.fruitSpheres["sphere13"].position,
                    this.fruitSpheres["sphere8"].position
                ],
                [
                    this.fruitSpheres["sphere8"].position, //xyz
                    this.fruitSpheres["sphere11"].position
                ],
                [
                    this.fruitSpheres["sphere9"].position, //xyz
                    this.fruitSpheres["sphere12"].position
                ],
                [
                    this.fruitSpheres["sphere10"].position, //xyz
                    this.fruitSpheres["sphere13"].position
                ],
                [
                    this.fruitSpheres["sphere8"].position, //outer up tri
                    this.fruitSpheres["sphere10"].position,
                    this.fruitSpheres["sphere12"].position,
                    this.fruitSpheres["sphere8"].position
                ],
                [
                    this.fruitSpheres["sphere11"].position, // outer down tri
                    this.fruitSpheres["sphere13"].position,
                    this.fruitSpheres["sphere9"].position,
                    this.fruitSpheres["sphere11"].position
                ],
                [
                    this.fruitSpheres["sphere5"].position, //inner down tri
                    this.fruitSpheres["sphere7"].position,
                    this.fruitSpheres["sphere3"].position,
                    this.fruitSpheres["sphere5"].position
                ],
                [
                    this.fruitSpheres["sphere2"].position, //inner up tri
                    this.fruitSpheres["sphere4"].position,
                    this.fruitSpheres["sphere6"].position,
                    this.fruitSpheres["sphere2"].position
                ],
                [
                    this.fruitSpheres["sphere2"].position, // inner hex
                    this.fruitSpheres["sphere3"].position,
                    this.fruitSpheres["sphere4"].position,
                    this.fruitSpheres["sphere5"].position,
                    this.fruitSpheres["sphere6"].position,
                    this.fruitSpheres["sphere7"].position,
                    this.fruitSpheres["sphere2"].position
                ],
                [
                    this.fruitSpheres["sphere9"].position, // extras
                    this.fruitSpheres["sphere7"].position,
                    this.fruitSpheres["sphere11"].position
                ],
                [
                    this.fruitSpheres["sphere8"].position, // extras
                    this.fruitSpheres["sphere6"].position,
                    this.fruitSpheres["sphere10"].position
                ],
                [
                    this.fruitSpheres["sphere12"].position, // extras
                    this.fruitSpheres["sphere4"].position,
                    this.fruitSpheres["sphere8"].position
                ],
                [
                    this.fruitSpheres["sphere11"].position, // extras
                    this.fruitSpheres["sphere3"].position,
                    this.fruitSpheres["sphere13"].position
                ],
                [
                    this.fruitSpheres["sphere9"].position, // extras
                    this.fruitSpheres["sphere5"].position,
                    this.fruitSpheres["sphere13"].position
                ],
                [
                    this.fruitSpheres["sphere10"].position, // extras
                    this.fruitSpheres["sphere2"].position,
                    this.fruitSpheres["sphere12"].position
                ]
            ];

            this.line1 = Arminia.multiLines2D("MetatronLine2D", { paths: path1, width: /*0.05*/ 0.002 }, game.scene);
            const mat = new BABYLON.StandardMaterial("metatronLinesMat", game.scene);
            mat.emissiveColor = new BABYLON.Color3(1, 1, 1);
            this.line1.material = mat;
            this.line1.material.alpha = 0.3;
            this.line1.material.alpha1 = 0.3;
            this.line1.material.alphaMode = BABYLON.Engine.ALPHA_ADD;
            this.line1.material.wireframe = true;
            this.line1.material.needDepthPrePass = false;
            this.line1.name = "Metatron2DMesh";
            //this.line1.alphaIndex = super.getAlphaIndex(this.line1.name); 
            this.line1.alphaIndex = 8;
            this.line1.parent = this;
            this.line1.layerMask = 1;
            this.line1.isPickable = false;

            this.line1.isVisible = true;

        }
    }
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.MetaCubeLines2D = MetaCubeLines2D;
})();