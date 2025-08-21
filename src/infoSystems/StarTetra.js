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
    class StarTetra extends Arminia.GameObject {

        constructor(game, name1, parent1) {

            super(name1, game);

            this.parent = parent1;

            this.mesh1 = game.scene.getMeshByName("starTetra2").clone(name1 + "Mesh1");
            this.mesh1.layerMask = 1;
            this.mesh1.isVisible = true;
            this.mesh1.parent = this;
            this.mesh1.checkCollisions = false;
            this.mesh1.alphaIndex = 9;
            this.mesh1.isPickable = false;
            this.mesh1.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
            this.mesh1.edgesWidth = 0;
            this.mesh1.material = new BABYLON.StandardMaterial("starTetra2Mat", game.scene);
            this.mesh1.material.emissiveColor = new BABYLON.Color3(0.271, 0.129, 0.694);
            this.mesh1.material.needDepthPrePass = true;
            this.mesh1.material.lightmapTexture = new BABYLON.Texture("src/assets/textures/64Tetra9.jpg", game.scene);
            this.mesh1.material.lightmapTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.mesh1.material.lightmapTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.mesh1.material.alpha = 0.7;
            this.mesh1.material.alpha1 = 0.7;
            this.mesh1.material.lightmapTexture.level = 1;
            this.mesh1.material.alphaMode = BABYLON.Constants.ALPHA_COMBINE;

            this.mesh2 = this.mesh1.clone(name1 + "Mesh2");
            this.mesh2.parent = this;
            this.mesh2.layerMask = 1;
            this.mesh2.alphaIndex = 6;
            this.mesh2.isPickable = false;
            this.mesh2.isVisible = false;
            this.mesh2.material = this.mesh1.material.clone("StarTetra2Mat");
            this.mesh2.material.needDepthPrePass = false;
            this.mesh2.material.zOffset = 2.0;
            this.mesh2.material.alpha = 0.0;
            this.mesh2.material.alpha1 = 0.5;
            this.mesh2.material.lightmapTexture.level = 0.27;
            this.mesh2.material.alphaMode = BABYLON.Constants.ALPHA_COMBINE;

            this.wireMesh = game.scene.getMeshByName("starTetra2").clone(name1 + "Wire");
            this.wireMesh.parent = this;
            this.wireMesh.layerMask = 1;
            this.wireMesh.alphaIndex = 6;
            this.wireMesh.isPickable = false;
            this.wireMesh.isVisible = false;

            this.wireMesh.material = new BABYLON.StandardMaterial(name1 + "WireMat", game.scene);
            this.wireMesh.material.lightmapTexture = new BABYLON.Texture("src/assets/textures/64Tetra9.jpg", game.scene);
            this.wireMesh.material.lightmapTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.wireMesh.material.lightmapTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.wireMesh.material.wireframe = true;
            this.wireMesh.material.alpha = 0.0;
            this.wireMesh.material.alpha1 = 0.4;
            this.wireMesh.material.emissiveColor = new BABYLON.Color3.White;
            this.wireMesh.material.needDepthPrePass = false;
            this.wireMesh.material.zOffset = 2.0;

            //var CoTAxis = game._localAxis(1, .7, game.scene);
            //CoTAxis.parent = this; 

            //const _this = this;
            //drawMeshWireframe();
            //_this.lineSystem.alphaIndex = 8;

            function drawMeshWireframe() {

                let positions = _this.mesh1.getVerticesData(BABYLON.VertexBuffer.PositionKind);
                let indices = _this.mesh1.getIndices();
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

                _this.lineSystem = BABYLON.MeshBuilder.CreateLineSystem(name1 + "Wire2", { lines: path1 }, game.scene); // MetaStarTetraWire2 
                _this.lineSystem.color = new BABYLON.Color3.White;
                _this.lineSystem.material.needDepthPrePass = true;
                _this.lineSystem.material.name = name1 + "WireMat2";
                _this.lineSystem.material.alphaMode = BABYLON.Engine.ALPHA_ADD;
                _this.lineSystem.parent = _this.mesh1;
                _this.lineSystem.layerMask = 1;
                _this.lineSystem.isPickable = false;

                _this.lineSystem.isVisible = false;
            }
        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.StarTetra = StarTetra;

})();