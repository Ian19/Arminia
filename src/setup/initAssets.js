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

    var initAssets = function(game) {

        game.assets = new BABYLON.TransformNode("assets", this.scene);
        game.assets.meshes = [];

        game.assets.fruitOfLifeTN = new BABYLON.TransformNode("fruitOfLife");
        game.assets.fruitOfLifeTN.parent = game.assets;
        game.assets.fruitOfLifeTN.fruitSpheres = [];
        game.assets.fruitOfLifeTN.fruitSpheres2 = [];
        game.assets.fruitOfLifeTN.fruitSpheres3 = [];
        game.assets.fruitOfLifeTN.fruitSpheres4 = [];

        game.assets.meshes["icoHoloSphere"] = BABYLON.Mesh.CreateIcoSphere("icoHoloSphere", { radius: 1, subdivisions: 9 }, game.scene);
        game.assets.meshes["icoHoloSphere"].parent = game.assets;
        game.assets.meshes["icoHoloSphere"].material = game.scene.getMaterialByName("holoSphereMat");
        game.assets.meshes["icoHoloSphere"].isVisible = false;

        const sphere1 = game.assets.meshes["icoHoloSphere"].clone("sphere1");
        sphere1.parent = game.assets.fruitOfLifeTN;
        sphere1.alphaIndex = 0;
        sphere1.layerMask = 1;
        sphere1.isVisible = false;
        game.assets.fruitOfLifeTN.fruitSpheres["sphere1"] = sphere1;

        for (let i = 2; i <= 13; i++) {

            let s = sphere1.clone("sphere" + i);
            s.isVisible = false;
            s.parent = game.assets.fruitOfLifeTN;
            s.layerMask = 1;
            s.alphaIndex = 0;
            game.assets.fruitOfLifeTN.fruitSpheres[s.name] = s;
        }

        function sqrt(n) { return Math.sqrt(n) }

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

        const toLoad = [
            {
                name: "THG641",
                folder: "src/assets/meshes/",
                filename: "64TetraMap2.babylon"
            },
            {
                name: "Cube2",
                folder: "src/assets/meshes/",
                filename: "cubeMap.babylon"
            },
            {
                name: "starTetra2",
                folder: "src/assets/meshes/",
                filename: "StarTetrahedronUnwrap.babylon"
            },
            {
                name: "Torus",
                folder: "src/assets/meshes/",
                filename: "torus3.obj"
            },
            {
                name: "Tree",
                folder: "src/assets/meshes/",
                filename: "tree6.obj"
            },
            {
                name: "Hexagon",
                folder: "src/assets/meshes/",
                filename: "hexagon.obj"
            }
        ];
       
        game.loader = new BABYLON.AssetsManager(game.scene);
    
        toLoad.forEach(function(tl) {
    
            const task = game.loader.addMeshTask(tl.name, "", tl.folder, tl.filename);
            task.onSuccess = function(t) {
                t.loadedMeshes.forEach(function(mesh) {
                    mesh.isVisible = false;
                    if (mesh.material != null) {
                        mesh.material.dispose();
                    }
                });
                game.assets.meshes[t.name] = t.loadedMeshes[0];
                game.assets.meshes[t.name].parent = game.assets;
            };
            task.onError = function(t, message, exception) {
                console.log(message, exception);
            }
        });
        game.loader.load();

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.initAssets = initAssets;

})();