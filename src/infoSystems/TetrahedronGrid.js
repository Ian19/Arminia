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
    class TetrahedronGrid extends Arminia.GameObject {

        constructor(game) {

            super("64THG", game);

            const _this = this;

            this.parent = game.infoSystem1;

            this.mesh1 = game.assets.meshes["THG641"].clone("THGMesh1");
            this.mesh1.parent = this;
            this.mesh1.alphaIndex = super.getAlphaIndex(this.mesh1.name);            
            this.mesh1.layerMask = 1;
            this.mesh1.isPickable = false;
            this.mesh1.isVisible = true;
            this.mesh1.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
            this.mesh1.edgesWidth = 6;

            const mat = new BABYLON.StandardMaterial("THGMat1", game.scene);
            this.mesh1.material = mat;
            this.mesh1.material.emissiveColor = new BABYLON.Color3(0.271, 0.129, 0.694);
            this.mesh1.material.needDepthPrePass = true;
            this.mesh1.material.lightmapTexture = new BABYLON.Texture("src/assets/textures/64Tetra9.jpg", game.scene);
            this.mesh1.material.lightmapTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.mesh1.material.lightmapTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.mesh1.material.alpha = 0.6;
            this.mesh1.material.alpha1 = 0.6;
            this.mesh1.material.alphaMode = BABYLON.Constants.ALPHA_COMBINE;

            this.mesh2 = this.mesh1.clone("THGMesh2");
            this.mesh2.parent = this;
            this.mesh2.layerMask = 1;
            this.mesh2.alphaIndex = super.getAlphaIndex(this.mesh2.name);
            this.mesh2.isPickable = false;
            this.mesh2.isVisible = false;

            const mesh2Mat = mat.clone("THGMat2");  
            this.mesh2.material = mesh2Mat;
            this.mesh2.material.alpha = 0.1;
            this.mesh2.material.alpha1 = 0.1;
            this.mesh2.material.needDepthPrePass = false;
            this.mesh2.material.alphaMode = 2;
            this.mesh2.material.backFaceCulling = false;
            this.mesh2.material.separateCullingPass = true;

            this.wireMesh = game.scene.getMeshByName("THG641").clone("THGWireMesh");
            this.wireMesh.parent = this;
            this.wireMesh.layerMask = 1;
            this.wireMesh.alphaIndex = 6;
            this.wireMesh.isPickable = false;
            this.wireMesh.isVisible = false;

            this.wireMesh.material  = new BABYLON.StandardMaterial("THGWireMeshMat", game.scene);
            this.wireMesh.material.lightmapTexture = new BABYLON.Texture("src/assets/textures/64Tetra9.jpg", game.scene);
            this.wireMesh.material.lightmapTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.wireMesh.material.lightmapTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
            this.wireMesh.material.wireframe = true;
            this.wireMesh.material.alpha = 0.1;
            this.wireMesh.material.alpha1 = 0.1;
            this.wireMesh.emissiveColor = new BABYLON.Color4.FromHexString("#10F0EAFF");
            this.wireMesh.material.needDepthPrePass = false;
            this.wireMesh.material.zOffset = 2.0;


            resetTransform(this.wireMesh);

            //var CoTAxis = game._localAxis(1, .7, game.scene);
            //CoTAxis.parent = this; 

            //////////////////////////////////////  DRAW MESH WIREFRAME //////////////////////////////////////


            //drawMeshWireframe();
            //_this.lineSystem.alphaIndex = super.getAlphaIndex(_this.lineSystem.name);

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

                _this.lineSystem = BABYLON.MeshBuilder.CreateLineSystem("THGLinesMesh", { lines: path1 }, game.scene);
                _this.lineSystem.color = new BABYLON.Color3.White;
                _this.lineSystem.material.needDepthPrePass = false;
                _this.lineSystem.material.name = "THGLinesMeshMat";
                _this.lineSystem.parent = _this.mesh1;
                _this.lineSystem.layerMask = 1;
                _this.lineSystem.isPickable = false;
                _this.lineSystem.material.alpha = 0.5;
                _this.lineSystem.isVisible = true;
            }

            function resetTransform(mesh) {
                mesh.position = BABYLON.Vector3.Zero();
                mesh.scaling = new BABYLON.Vector3(1, 1, 1);
                mesh.rotation = BABYLON.Vector3.Zero();
                mesh.rotationQuaternion = null;
            }
        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.TetrahedronGrid = TetrahedronGrid;
})();