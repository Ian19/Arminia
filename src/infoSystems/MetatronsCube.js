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
    class MetatronsCube extends Arminia.GameObject {

        constructor(game) {

            super("MetatronsCube", game);

            this.parent = game.infoSystem2;

            this.metaCube = new BABYLON.TransformNode("metaCube");
            this.metaCube.parent = this;

            this.metaCube.mesh1 = game.scene.getMeshByName("Cube2").clone("metaCubeMesh1");
            this.metaCube.mesh1.parent = this.metaCube;
            this.metaCube.mesh1.material = game.scene.getMaterialByName("standardMatTHG").clone("metaCubeMesh1Mat");
            this.metaCube.mesh1.material.needDepthPrePass = false;
            this.metaCube.mesh1.isPickable = false;
            this.metaCube.mesh1.alphaIndex = 9;
            this.metaCube.mesh1.edgesWidth = 0.0;
            this.metaCube.mesh1.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
            this.metaCube.mesh1.layerMask = 1;
            this.metaCube.mesh1.isVisible = true;
            this.metaCube.mesh1.material.alpha = 0.7;
            this.metaCube.mesh1.material.alpha1 = 0.7;
            this.metaCube.mesh1.material.lightmapTexture.level = 1;

            this.metaCube.wireMesh = game.scene.getMeshByName("Cube2").clone("metaCubeWire");
            this.metaCube.wireMesh.material = game.scene.getMaterialByName("standardMatTHG").clone("MetaCubeWireMat");
            this.metaCube.wireMesh.alphaIndex = 8;
            this.metaCube.wireMesh.isPickable = false;
            this.metaCube.wireMesh.material.wireframe = true;
            this.metaCube.wireMesh.material.needDepthPrePass = false;
            this.metaCube.wireMesh.material.lightmapTexture = null;
            this.metaCube.wireMesh.isVisible = true;
            this.metaCube.wireMesh.parent = this.metaCube;
            this.metaCube.wireMesh.layerMask = 1;
            this.metaCube.wireMesh.material.alpha = 0.0;
            this.metaCube.wireMesh.material.alpha1 = 0.4;
            this.metaCube.wireMesh.material.emissiveColor = new BABYLON.Color3.White;
            this.metaCube.wireMesh.isVisible = false;

            this.metaCube.wireMesh.material.zOffset = 2.0;

            /////////////////

            /* this.wireMesh.material.wireframe = true;
             this.wireMesh.material.alpha = 0.0;
             this.wireMesh.material.alpha1 = 0.1;
             this.wireMesh.material.emissiveColor = new BABYLON.Color3.White;
             this.wireMesh.material.needDepthPrePass = false;
             this.wireMesh.material.zOffset = 2.0;
             this.wireMesh.isPickable = false;
             this.wireMesh.isVisible = false;*/

            resetTransform(this.metaCube.wireMesh);

            this.metaStar = new Arminia.StarTetra(game, "MetaStar", this);

            function resetTransform(mesh) {
                mesh.position = BABYLON.Vector3.Zero();
                mesh.scaling = new BABYLON.Vector3(1, 1, 1);
                mesh.rotation = BABYLON.Vector3.Zero();
                mesh.rotationQuaternion = null;
            }



            //////////////////////////////////////  DRAW MESH WIREFRAME //////////////////////////////////////

            /*const _this = this;
            drawMeshWireframe();
            _this.lineSystem.alphaIndex = 8;

            function drawMeshWireframe() {

                let positions = _this.metaCube.getVerticesData(BABYLON.VertexBuffer.PositionKind);
                let indices = _this.metaCube.getIndices();
                let path1 = [];
                let y = 0;

                for (let i = 0; i <= indices.length - 3; i += 3) {

                    path1[y] = [];

                    let a = indices[i];
                    let b = indices[i + 1];
                    let c = indices[i + 2];

                    let d = 3 * a;
                    let e = 3 * a + 1;
                    let f = 3 * a + 2;

                    let g = positions[d];
                    let h = positions[e];
                    let k = positions[f];

                    let l = 3 * b;
                    let m = 3 * b + 1;
                    let n = 3 * b + 2;

                    let o = positions[l];
                    let p = positions[m];
                    let q = positions[n];

                    let r = 3 * c;
                    let s = 3 * c + 1;
                    let t = 3 * c + 2;

                    let u = positions[r];
                    let v = positions[s];
                    let w = positions[t];

                    path1[y][0] = new BABYLON.Vector3(g, h, k);
                    path1[y][1] = new BABYLON.Vector3(o, p, q);
                    path1[y][2] = new BABYLON.Vector3(u, v, w);
                    path1[y][3] = new BABYLON.Vector3(g, h, k);

                    y++;
                }

                _this.lineSystem = BABYLON.MeshBuilder.CreateLineSystem("MetaCubeWireMesh2", { lines: path1 }, game.scene);
                _this.lineSystem.color = new BABYLON.Color3.White;
                _this.lineSystem.material.needDepthPrePass = true;
                _this.lineSystem.material.name = "metaCubeWireMat2";
                _this.lineSystem.parent = _this.metaCube;
                _this.lineSystem.layerMask = 1;
                _this.lineSystem.isPickable = false;
            }*/

        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.MetatronsCube = MetatronsCube;
})();