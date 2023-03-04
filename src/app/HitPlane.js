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
    class HitPlane extends Arminia.GameObject {

        constructor(game, parent1, fruit, meshName) {

            super("HitPlane", game);
            
            this.parent = parent1;

            this.plane1 = game.assets.meshes["Hexagon"].clone("planeMesh1");
            this.plane1.parent = this;
            this.plane1.rotation.x = 90 * Math.PI / 180;
            this.plane1.scaling = new BABYLON.Vector3(4, 4, 4);
            this.plane1.isVisible = true;
            this.plane1.visibility = 0.0;
            this.plane1.layerMask = 1;
            this.plane1.alphaIndex = 0;

            let treeActionManager = new BABYLON.ActionManager(game.scene);
            this.plane1.actionManager = treeActionManager;

            treeActionManager.registerAction(

                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {

                    // console.log("OnPointerOverTrigger");

                    fruit.fruitSpheresGlow(game);

                }));


            treeActionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (ev) {

                    // console.log("OnPointerOutTrigger");

                    fruit.fruitSpheresFade(game);

                })
            );
            
            treeActionManager.registerAction(
                new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger, function (ev) {

                    // console.log("OnPickTrigger");

                    console.log(ev.meshUnderPointer.id);


                    // fruit.fruitSpheresFade(game);

                })
            );


        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.HitPlane = HitPlane;
})();