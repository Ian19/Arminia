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

    class Tetra extends BABYLON.TransformNode {

        constructor(game) {

            super("goTetra", game.scene);

            const mat = game.materials["standardMat"];

            //this.tetra1 = BABYLON.Mesh.CreatePolyhedron("tetra1", { type: 0, size: 1, updatable: true }, game.scene, ds);
            this.tetra1 = BABYLON.Mesh.CreatePolyhedron("tetra1", { type: 0, size: 1 }, game.scene);
            this.tetra1.parent = this;
            //this.tetra1.position = new BABYLON.Vector3(4, 0, 0);

            this.tetra1.enableEdgesRendering();
            this.tetra1.edgesColor.copyFromFloats(1, 1, 1, 0.1);
            this.tetra1.edgesWidth = 3;
            this.tetra1.material = mat;
        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.Tetra = Tetra;

})();