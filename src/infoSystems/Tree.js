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
    class Tree extends Arminia.GameObject {

        constructor(game) {

            super("Tree", game);

            const _this = this;

            this.parent = game.infoSystem1;
            

            this.rotation.x = 70.6 * Math.PI/ 180;
            this.rotation.y = 0.6 * Math.PI/ 180;
            this.rotation.z = 0.14 * Math.PI/ 180;

            this.position = new BABYLON.Vector3(-0.017, 0, 0);

            this.scaling = new BABYLON.Vector3(1.003, 1.003, 1.003);

            const mat = game.scene.getMaterialByName("standardMatTree").clone("TreeMeshMat1");
            

            // Mesh 1
            this.mesh1 = game.assets.meshes["Tree"].clone("TreeMesh1");
            this.mesh1.parent = this;
            // this.mesh1.alphaIndex = super.getAlphaIndex(this.mesh1.name);
            this.mesh1.alphaIndex = 6.5;
            this.mesh1.material = mat;
            this.mesh1.layerMask = 1;
            this.mesh1.isPickable = false;
            this.mesh1.isVisible = true;
            this.mesh1.edgesColor = new BABYLON.Color4(1, 1, 1, 1);
            this.mesh1.edgesWidth = 3;
            // this.mesh1.rotation.x = 70.6 * Math.PI/ 180;
            this.mesh1.material.backFaceCulling = false;

            this.mesh1.material.alpha = 0.7;
            this.mesh1.material.alpha1 = 0.7;
            this.mesh1.material.transparencyMode = 3;
            // this.mesh1.material.alphaMode = BABYLON.Engine.ALPHA_COMBINE;
            // this.mesh1.material.alphaMode = BABYLON.Engine.ALPHA_ADD; 
            this.mesh1.material.alphaMode = BABYLON.Engine.ALPHA_MAXIMIZED; 
            this.mesh1.material.needDepthPrePass = false;
            // this.mesh1.material.depthFunction = 2;
            this.mesh1.material.depthFunction = BABYLON.Engine.ALWAYS;
            // this.mesh1.material.setDepthFunction(BABYLON.Engine.ALWAYS);
            

            // Mesh 2
            this.mesh2 = this.mesh1.clone("TreeMesh2");
            this.mesh2.parent = this;
            this.mesh2.layerMask = 1;
            // this.mesh2.alphaIndex = super.getAlphaIndex(this.mesh2.name);
            this.mesh2.alphaIndex = 6.1;
            this.mesh2.isPickable = false;
            this.mesh2.isVisible = false;

            // this.mesh2.rotation.x = 180 * Math.PI / 180;
            this.mesh2.rotation.x = Math.PI;

            const mesh2Mat = mat.clone("TreeMesh2Mat");
            this.mesh2.material = mesh2Mat;
            // this.mesh2.material.alpha = 0.0;
            // this.mesh2.material.alpha1 = 0.2;
            this.mesh2.material.alpha = 0.99;            
            this.mesh2.material.alpha1 = 0.99;

            this.mesh2.material.needDepthPrePass = false;
            this.mesh2.material.alphaMode = BABYLON.Engine.ALPHA_COMBINE;
            this.mesh2.material.transparencyMode = 3;
            this.mesh2.material.backFaceCulling = false;
            this.mesh2.material.separateCullingPass = true;
            this.mesh2.material.emissiveColor = new BABYLON.Color4.FromHexString("#685B3DFF");
            

            // WireMesh
            this.wireMesh = game.assets.meshes["Tree"].clone("TreeWireMesh");
            this.wireMesh.parent = this;
            this.wireMesh.layerMask = 1;
            this.wireMesh.alphaIndex = 6.5;
            this.wireMesh.isPickable = false;
            this.wireMesh.isVisible = true;
            // this.wireMesh.rotation.x = 70.6 * Math.PI/ 180;

            this.wireMesh.material = game.scene.getMaterialByName("standardMatTree").clone("TreeWireMeshMat");
            this.wireMesh.material.wireframe = true;
            this.wireMesh.material.alpha = 0.99;
            this.wireMesh.material.alpha1 = 0.07;
            this.wireMesh.material.emissiveColor = new BABYLON.Color3.White;
            this.wireMesh.material.needDepthPrePass = false;
            this.wireMesh.material.transparencyMode = 3;
            this.wireMesh.material.zOffset = 2.0;
            this.wireMesh.material.emissiveColor = new BABYLON.Color4.FromHexString("#00FFB5FF");
            
            
            
            // WireMesh
            this.mesh2.wireMesh = game.assets.meshes["Tree"].clone("TreeWireMesh2");
            this.mesh2.wireMesh.parent = this;
            this.mesh2.wireMesh.layerMask = 1;
            this.mesh2.wireMesh.alphaIndex = 6.6;
            this.mesh2.wireMesh.isPickable = false;
            this.mesh2.wireMesh.isVisible = false;
            // this.mesh2.wireMesh.rotation.x = 70.6 * Math.PI/ 180;

            this.mesh2.wireMesh.material = game.scene.getMaterialByName("standardMatTree").clone("TreeWireMeshMat2");
            this.mesh2.wireMesh.material.wireframe = true;
            this.mesh2.wireMesh.material.alpha = 0.99;
            this.mesh2.wireMesh.material.alpha1 = 0.07;
            this.mesh2.wireMesh.material.emissiveColor = new BABYLON.Color3.White;
            this.mesh2.wireMesh.material.needDepthPrePass = false;
            this.mesh2.wireMesh.material.transparencyMode = 3;
            this.mesh2.wireMesh.material.zOffset = 2.0;
            this.mesh2.wireMesh.material.emissiveColor = new BABYLON.Color4.FromHexString("#FFBC00FF"); //FFBC00FF

            this.mesh2.wireMesh.rotation.x = Math.PI;

            // resetTransform(this.wireMesh);

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

                _this.lineSystem = BABYLON.MeshBuilder.CreateLineSystem("TreeLinesMesh", { lines: path1 }, game.scene);
                _this.lineSystem.color = new BABYLON.Color3.White;
                _this.lineSystem.material.needDepthPrePass = false;
                _this.lineSystem.material.name = "TreeLinesMeshMat";
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
    Arminia.Tree = Tree;
})();