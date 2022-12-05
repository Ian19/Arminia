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
    class HitBox extends Arminia.GameObject {

        constructor(game, parent1, fruit, meshName) {

            super("HitBox", game);

            this.parent = parent1;

            this.rotation.z = 30 * Math.PI / 180;

            this.box1 = BABYLON.MeshBuilder.CreateBox(meshName, { height: 5, width: 5, depth: 5 }, game.scene);
            this.box1.visibility = 0.0;
            this.box1.parent = this;
            this.box1.layerMask = 1;
            this.box1.alphaIndex = 0;
            this.box1.rotation.x = 45 * Math.PI / 180;
            this.box1.rotation.y = 35.34 * Math.PI / 180;
            this.box1.scaling = new BABYLON.Vector3(0.98, 0.98, 0.98);

            this.box1.actionManager = new BABYLON.ActionManager(game.scene);

            this.box1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                function() {
                    fruit.fruitSpheresGlow(game);

                    $("#A_InfoSysHintText").hide();
                    $("#A_infoSysInfo").show();
                    $("#A_infoSysTitle").text(fruit.parent.infoSystemData.name);
                    $("#A_infoSysDifficulty").text(fruit.parent.infoSystemData.difficulty);
                    $("#A_infoSysOverview").text(fruit.parent.infoSystemData.overview);
                }));

            this.box1.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                function() {
                    fruit.fruitSpheresFade(game);

                    $("#A_infoSysInfo").hide();
                    $("#A_InfoSysHintText").show();
                }));

            game.camZoomManager.registerMesh(this.box1);
        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.HitBox = HitBox;
})();