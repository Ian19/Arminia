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

    class THGLines2D extends Arminia.GameObject {

        constructor(game, meshName) {

            super(meshName, game);

            this.parent = game.infoSystem1;

            function sqrt(n) { return Math.sqrt(n) };

            this.fruitSpheres = game.assets.fruitOfLifeTN.fruitSpheres;

            const path1 = [
                [
                    new BABYLON.Vector3(sqrt(3), -2, 0), // diag forward slash lines
                    new BABYLON.Vector3(-sqrt(3) / 2, 2.5, 0)
                ],
                [
                    new BABYLON.Vector3(sqrt(3), -3, 0), // horizontal lines
                    new BABYLON.Vector3(-sqrt(3), 3, 0)
                ],
                [
                    this.fruitSpheres["sphere6"].position, // diag forward slash lines
                    this.fruitSpheres["sphere2"].position
                ],
                [
                    new BABYLON.Vector3((3 * sqrt(3)) / 2, -1.5, 0), // diag forward slash lines
                    new BABYLON.Vector3(0, 3, 0)
                ],
                [
                    new BABYLON.Vector3((3 * sqrt(3)) / 2, .5, 0), // diag forward slash lines
                    new BABYLON.Vector3(sqrt(3), 2, 0)
                ],
                [
                    new BABYLON.Vector3(sqrt(3) / 2, -2.5, 0), // diag forward slash lines
                    new BABYLON.Vector3(-sqrt(3), 2, 0)
                ],
                [
                    this.fruitSpheres["sphere5"].position, // diag forward slash lines
                    this.fruitSpheres["sphere3"].position
                ],
                [
                    new BABYLON.Vector3(0, -3, 0), // diag forward slash lines
                    new BABYLON.Vector3(-(3 * sqrt(3)) / 2, 1.5, 0)
                ],
                [
                    new BABYLON.Vector3(-sqrt(3), -2, 0), // diag back slash lines
                    new BABYLON.Vector3(-(3 * sqrt(3)) / 2, -.5, 0)
                ],

                ////////////////////////////////////////////////////////

                [
                    new BABYLON.Vector3(sqrt(3), -2, 0), // diag forward slash lines
                    new BABYLON.Vector3((3 * sqrt(3)) / 2, -.5, 0)
                ],
                [
                    new BABYLON.Vector3(0, -3, 0), // diag forward slash lines
                    new BABYLON.Vector3((3 * sqrt(3)) / 2, 1.5, 0)
                ],
                [
                    this.fruitSpheres["sphere5"].position, // diag forward slash lines
                    this.fruitSpheres["sphere7"].position
                ],
                [
                    new BABYLON.Vector3(-sqrt(3) / 2, -2.5, 0), // diag forward slash lines
                    new BABYLON.Vector3(sqrt(3), 2, 0)
                ],
                [
                    new BABYLON.Vector3(-(3 * sqrt(3)) / 2, .5, 0), // diag forward slash lines
                    new BABYLON.Vector3(-sqrt(3), 2, 0)
                ],
                [
                    new BABYLON.Vector3(-(3 * sqrt(3)) / 2, -1.5, 0), // diag forward slash lines
                    new BABYLON.Vector3(0, 3, 0)
                ],
                [
                    this.fruitSpheres["sphere4"].position, // diag forward slash lines
                    this.fruitSpheres["sphere2"].position
                ],
                [
                    new BABYLON.Vector3(-sqrt(3), -2, 0), // diag forward slash lines
                    new BABYLON.Vector3(sqrt(3) / 2, 2.5, 0)
                ],
                [
                    new BABYLON.Vector3(-sqrt(3), -3, 0), // diag forward slash lines
                    new BABYLON.Vector3(sqrt(3), 3, 0)
                ],
                [
                    new BABYLON.Vector3(-sqrt(3) / 2, -2.5, 0), // horizontal lines
                    new BABYLON.Vector3(sqrt(3) / 2, -2.5, 0)
                ],
                [
                    new BABYLON.Vector3(-sqrt(27) / 2, -1.5, 0), // horizontal lines
                    new BABYLON.Vector3(sqrt(27) / 2, -1.5, 0)
                ],
                [
                    this.fruitSpheres["sphere4"].position, // horizontal lines
                    this.fruitSpheres["sphere6"].position
                ],
                [
                    new BABYLON.Vector3(-sqrt(27) / 2, -.5, 0), // horizontal lines
                    new BABYLON.Vector3(sqrt(27) / 2, -.5, 0)
                ],
                [
                    new BABYLON.Vector3(-sqrt(3) / 2, 2.5, 0), // horizontal lines
                    new BABYLON.Vector3(sqrt(3) / 2, 2.5, 0)
                ],
                [
                    new BABYLON.Vector3(-sqrt(27) / 2, 1.5, 0), // horizontal lines
                    new BABYLON.Vector3(sqrt(27) / 2, 1.5, 0)
                ],
                [
                    this.fruitSpheres["sphere3"].position, // horizontal lines
                    this.fruitSpheres["sphere7"].position
                ],
                [
                    new BABYLON.Vector3(-sqrt(27) / 2, .5, 0), // horizontal lines
                    new BABYLON.Vector3(sqrt(27) / 2, .5, 0)

                ],
                [
                    new BABYLON.Vector3(-sqrt(3) * 2, 0, 0), // 2nd outer hex
                    new BABYLON.Vector3(sqrt(3) * 2, 0, 0),
                ],
                [
                    new BABYLON.Vector3(0, 3, 0), // 2nd outer hex
                    new BABYLON.Vector3(-sqrt(27) / 2, 1.5, 0),
                    new BABYLON.Vector3(-sqrt(27) / 2, -1.5, 0),
                    new BABYLON.Vector3(0, -3, 0),
                    new BABYLON.Vector3(sqrt(27) / 2, -1.5, 0),
                    new BABYLON.Vector3(sqrt(27) / 2, 1.5, 0),
                    new BABYLON.Vector3(0, 3, 0)
                ],
                [
                    new BABYLON.Vector3(-sqrt(3), 3, 0), // right pointing big tri
                    new BABYLON.Vector3(sqrt(3) * 2, 0, 0),
                    new BABYLON.Vector3(-sqrt(3), -3, 0),
                    new BABYLON.Vector3(-sqrt(3), 3, 0)
                ],
                [
                    new BABYLON.Vector3(sqrt(3), 3, 0), // left pointing big tri
                    new BABYLON.Vector3(-sqrt(3) * 2, 0, 0),
                    new BABYLON.Vector3(sqrt(3), -3, 0),
                    new BABYLON.Vector3(sqrt(3), 3, 0)
                ],
                [
                    new BABYLON.Vector3(sqrt(3), 3, 0), // outer hex
                    new BABYLON.Vector3(-sqrt(3), 3, 0),
                    new BABYLON.Vector3(-sqrt(3) * 2, 0, 0),
                    new BABYLON.Vector3(-sqrt(3), -3, 0),
                    new BABYLON.Vector3(sqrt(3), -3, 0),
                    new BABYLON.Vector3(sqrt(3) * 2, 0, 0),
                    new BABYLON.Vector3(sqrt(3), 3, 0)
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
                ]
            ];

            this.line1 = Arminia.multiLines2D("THGLines2D", { paths: path1, width: 0.002 }, game.scene);
            const mat1 = new BABYLON.StandardMaterial("THGLines2DMat", game.scene);
            mat1.emissiveColor = new BABYLON.Color3(1, 1, 1);
            this.line1.material = mat1;
            this.line1.material.alpha = .3;
            this.line1.material.alpha1 = .3;
            this.line1.material.alphaMode = BABYLON.Engine.ALPHA_ADD;

            this.line1.material.wireframe = true;

            this.line1.name = "THGLines2DMesh";
            this.line1.alphaIndex = super.getAlphaIndex(this.line1.name);
            this.line1.parent = this;
            this.line1.layerMask = 1;
            this.line1.isPickable = true;

            // let treeActionManager = new BABYLON.ActionManager(game.scene);
            // this.line1.actionManager = treeActionManager;

            // treeActionManager.registerAction(

            //     new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {

            //         console.log("OnPointerOverTrigger");

            //         // switch (ev.meshUnderPointer.id) {
            //         //     case "planeA":
            //         //         console.log("OnPointerOverTrigger");
            //         //         planeA.showBoundingBox = true;

            //         //         $("#A_sysHintContainer").show();
            //         //         $("#A_InfoSysHintText").hide();
            //         //         $("#A_infoSysInfo").show();                          
                            
            //         //         $("#A_infoSysTitle").text("fruit.parent.infoSystemData.name");
            //         //         $("#A_infoSysDifficulty").text("fruit.parent.infoSystemData.difficulty");
            //         //         $("#A_infoSysOverview").text("fruit.parent.infoSystemData.overview");
            //         //         break;
            //         //     case "Cube":
            //         //         // scene.beginAnimation(rect2, 0, 10, false);
            //         //         break;
            //         // }

            //     }));        
                
            //     //if hover is over remove highlight of the mesh
            //     treeActionManager.registerAction(
            //     new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (ev) {

            //         console.log("OnPointerOutTrigger");

            //         // switch (ev.meshUnderPointer.id) {
            //         //     case "planeA":
            //         //         planeA.showBoundingBox = false;
                            

            //         //         $("#A_sysHintContainer").hide();
            //         //         break;
            //         //     case "Cube":
            //         //         // scene.beginAnimation(rect2, 10, 0, false);
            //         //         break;
            //         // }


            //     })
            // );

            this.line1.actionManager = new BABYLON.ActionManager(game.scene);

            this.line1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                function () {
                    // game.FruitOfLife1.fruitSpheresGlow();
                    // console.log("OnPointerOverTrigger");
                })
            );

            this.line1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                function () {
                    // game.FruitOfLife1.fruitSpheresFade();
                    // console.log("OnPointerOutTrigger");
                })
            );

        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.THGLines2D = THGLines2D;
})();