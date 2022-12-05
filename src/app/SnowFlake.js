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

    class SnowFlake extends Arminia.GameObject {

        constructor(game) {

            super("SnowFlake", game);

            this.parent = game.main;
            
            const fruitSpheres = [];

            let s2 = BABYLON.Mesh.CreateIcoSphere("sphere1", { radius: 1, subdivisions: 9 }, game.scene);
            s2.parent = this;
            s2.material = game.scene.getMaterialByName("holoSphereMat").clone("snowflakeMat");
            s2.alphaIndex = 0;
            s2.isPickable = false;
            s2.layerMask = 1;

            fruitSpheres[s2.name] = s2;

            function sqrt(n) { return Math.sqrt(n) }

            for (let i = 2; i <= 151; i++) {

                let s = s2.createInstance("sphere" + i);
                s.parent = this;
                s.isPickable = false;
                s.layerMask = 1;
                s.alphaIndex = 0;
                fruitSpheres[s.name] = s;
                // if (labels) showLabels(i, s);
            }

            // function showLabels(num, mesh) {
            //     var rect1 = new BABYLON.GUI.Rectangle();
            //     rect1.width = 0.07;
            //     rect1.height = "35px";
            //     rect1.cornerRadius = 10;
            //     rect1.color = "White";
            //     rect1.thickness = 2;
            //     rect1.background = "green";
            //     game.advancedTexture.addControl(rect1);
            //     var label = new BABYLON.GUI.TextBlock();
            //     label.text = "Sphere" + num;
            //     rect1.addControl(label);
            //     rect1.linkWithMesh(mesh);
            // }

            // Spheres and Fruits counted clockwise in a spiral direction
            // FRUIT1 
            // sphere1 @ origin 0,0,0 of parent
            fruitSpheres["sphere2"].position = new BABYLON.Vector3(0, 2, 0);
            fruitSpheres["sphere3"].position = new BABYLON.Vector3(-sqrt(3), 1, 0);
            fruitSpheres["sphere4"].position = new BABYLON.Vector3(-sqrt(3), -1, 0);
            fruitSpheres["sphere5"].position = new BABYLON.Vector3(0, -2, 0);
            fruitSpheres["sphere6"].position = new BABYLON.Vector3(sqrt(3), -1, 0);
            fruitSpheres["sphere7"].position = new BABYLON.Vector3(sqrt(3), 1, 0);

            // sphere8 the top sphere shared with fruit2
            fruitSpheres["sphere8"].position = new BABYLON.Vector3(0, 4, 0);
            // sphere9 the top left sphere shared with fruit3
            fruitSpheres["sphere9"].position = new BABYLON.Vector3(-sqrt(3) * 2, 2, 0);
            // sphere10 the bottom left sphere shared with fruit4
            fruitSpheres["sphere10"].position = new BABYLON.Vector3(-sqrt(3) * 2, -2, 0);
            // sphere11 the bottom sphere shared with fruit5
            fruitSpheres["sphere11"].position = new BABYLON.Vector3(0, -4, 0);
            // sphere12 the bottom right sphere shared with fruit6
            fruitSpheres["sphere12"].position = new BABYLON.Vector3(sqrt(3) * 2, -2, 0);
            // sphere13 the top right sphere shared with fruit7
            fruitSpheres["sphere13"].position = new BABYLON.Vector3(sqrt(3) * 2, 2, 0);

            // FRUIT2 
            // origin  
            fruitSpheres["sphere14"].position = new BABYLON.Vector3(0, 8, 0);
            fruitSpheres["sphere15"].position = new BABYLON.Vector3(0, 10, 0);
            fruitSpheres["sphere16"].position = new BABYLON.Vector3(-sqrt(3), 9, 0);
            fruitSpheres["sphere17"].position = new BABYLON.Vector3(-sqrt(3), 7, 0);
            fruitSpheres["sphere18"].position = new BABYLON.Vector3(0, 6, 0);
            fruitSpheres["sphere19"].position = new BABYLON.Vector3(sqrt(3), 7, 0);
            fruitSpheres["sphere20"].position = new BABYLON.Vector3(sqrt(3), 9, 0);
            // sphere21 the top sphere shared with fruit8
            fruitSpheres["sphere21"].position = new BABYLON.Vector3(0, 12, 0);
            // sphere22 the top  left sphere shared with fruit8
            fruitSpheres["sphere22"].position = new BABYLON.Vector3(-sqrt(3) * 2, 10, 0);
            // sphere23 the bottom left sphere shared with fruit3
            fruitSpheres["sphere23"].position = new BABYLON.Vector3(-sqrt(3) * 2, 6, 0);
            // sphere24 the bottom right sphere shared with fruit7
            fruitSpheres["sphere24"].position = new BABYLON.Vector3(sqrt(3) * 2, 6, 0);
            fruitSpheres["sphere25"].position = new BABYLON.Vector3(sqrt(3) * 2, 10, 0);

            // FRUIT3 
            // origin
            fruitSpheres["sphere26"].position = new BABYLON.Vector3(-sqrt(3) * 4, 4, 0);
            fruitSpheres["sphere27"].position = new BABYLON.Vector3(-sqrt(3) * 4, 6, 0);
            fruitSpheres["sphere28"].position = new BABYLON.Vector3(-sqrt(3) * 5, 5, 0);
            fruitSpheres["sphere29"].position = new BABYLON.Vector3(-sqrt(3) * 5, 3, 0);
            fruitSpheres["sphere30"].position = new BABYLON.Vector3(-sqrt(3) * 4, 2, 0);
            fruitSpheres["sphere31"].position = new BABYLON.Vector3(-sqrt(3) * 3, 3, 0);
            fruitSpheres["sphere32"].position = new BABYLON.Vector3(-sqrt(3) * 3, 5, 0);
            fruitSpheres["sphere33"].position = new BABYLON.Vector3(-sqrt(3) * 4, 8, 0);
            // sphere34 the top left sphere shared with fruit9 
            fruitSpheres["sphere34"].position = new BABYLON.Vector3(-sqrt(3) * 6, 6, 0);
            fruitSpheres["sphere35"].position = new BABYLON.Vector3(-sqrt(3) * 6, 2, 0);
            // sphere36 the top left sphere shared with fruit4
            fruitSpheres["sphere36"].position = new BABYLON.Vector3(-sqrt(3) * 4, 0, 0);

            // FRUIT4
            // origin
            fruitSpheres["sphere37"].position = new BABYLON.Vector3(-sqrt(3) * 4, -4, 0);
            fruitSpheres["sphere38"].position = new BABYLON.Vector3(-sqrt(3) * 4, -2, 0);
            fruitSpheres["sphere39"].position = new BABYLON.Vector3(-sqrt(3) * 5, -3, 0);
            fruitSpheres["sphere40"].position = new BABYLON.Vector3(-sqrt(3) * 5, -5, 0);
            fruitSpheres["sphere41"].position = new BABYLON.Vector3(-sqrt(3) * 4, -6, 0);
            fruitSpheres["sphere42"].position = new BABYLON.Vector3(-sqrt(3) * 3, -5, 0);
            fruitSpheres["sphere43"].position = new BABYLON.Vector3(-sqrt(3) * 3, -3, 0);
            fruitSpheres["sphere44"].position = new BABYLON.Vector3(-sqrt(3) * 6, -2, 0);
            // sphere45 the bottom left sphere shared with fruit10
            fruitSpheres["sphere45"].position = new BABYLON.Vector3(-sqrt(3) * 6, -6, 0);
            fruitSpheres["sphere46"].position = new BABYLON.Vector3(-sqrt(3) * 4, -8, 0);
            // sphere47 the bottom right sphere shared with fruit5
            fruitSpheres["sphere47"].position = new BABYLON.Vector3(-sqrt(3) * 2, -6, 0);

            // FRUIT5
            // origin
            fruitSpheres["sphere48"].position = new BABYLON.Vector3(0, -8, 0);
            fruitSpheres["sphere49"].position = new BABYLON.Vector3(0, -6, 0);
            fruitSpheres["sphere50"].position = new BABYLON.Vector3(-sqrt(3), -7, 0);
            fruitSpheres["sphere51"].position = new BABYLON.Vector3(-sqrt(3), -9, 0);
            fruitSpheres["sphere52"].position = new BABYLON.Vector3(0, -10, 0);
            fruitSpheres["sphere53"].position = new BABYLON.Vector3(sqrt(3), -9, 0);
            fruitSpheres["sphere54"].position = new BABYLON.Vector3(sqrt(3), -7, 0);
            fruitSpheres["sphere55"].position = new BABYLON.Vector3(-sqrt(3) * 2, -10, 0);
            // sphere56 the bottom sphere shared with fruit11
            fruitSpheres["sphere56"].position = new BABYLON.Vector3(0, -12, 0);
            fruitSpheres["sphere57"].position = new BABYLON.Vector3(sqrt(3) * 2, -10, 0);
            // sphere58 the bottom sphere shared with fruit6
            fruitSpheres["sphere58"].position = new BABYLON.Vector3(sqrt(3) * 2, -6, 0);

            // FRUIT6
            // origin
            fruitSpheres["sphere59"].position = new BABYLON.Vector3(sqrt(3) * 4, -4, 0);
            fruitSpheres["sphere60"].position = new BABYLON.Vector3(sqrt(3) * 4, -2, 0);
            fruitSpheres["sphere61"].position = new BABYLON.Vector3(sqrt(3) * 3, -3, 0);
            fruitSpheres["sphere62"].position = new BABYLON.Vector3(sqrt(3) * 3, -5, 0);
            fruitSpheres["sphere63"].position = new BABYLON.Vector3(sqrt(3) * 4, -6, 0);
            fruitSpheres["sphere64"].position = new BABYLON.Vector3(sqrt(3) * 5, -5, 0);
            fruitSpheres["sphere65"].position = new BABYLON.Vector3(sqrt(3) * 5, -3, 0);
            fruitSpheres["sphere66"].position = new BABYLON.Vector3(sqrt(3) * 4, 0, 0);
            fruitSpheres["sphere67"].position = new BABYLON.Vector3(sqrt(3) * 4, -8, 0);
            // sphere68 the bottom left sphere shared with fruit12
            fruitSpheres["sphere68"].position = new BABYLON.Vector3(sqrt(3) * 6, -6, 0);
            fruitSpheres["sphere69"].position = new BABYLON.Vector3(sqrt(3) * 6, -2, 0);

            // FRUIT7
            // origin
            fruitSpheres["sphere70"].position = new BABYLON.Vector3(sqrt(3) * 4, 4, 0);
            fruitSpheres["sphere71"].position = new BABYLON.Vector3(sqrt(3) * 4, 6, 0);
            fruitSpheres["sphere72"].position = new BABYLON.Vector3(sqrt(3) * 3, 5, 0);
            fruitSpheres["sphere73"].position = new BABYLON.Vector3(sqrt(3) * 3, 3, 0);
            fruitSpheres["sphere74"].position = new BABYLON.Vector3(sqrt(3) * 4, 2, 0);
            fruitSpheres["sphere75"].position = new BABYLON.Vector3(sqrt(3) * 5, 3, 0);
            fruitSpheres["sphere76"].position = new BABYLON.Vector3(sqrt(3) * 5, 5, 0);
            fruitSpheres["sphere77"].position = new BABYLON.Vector3(sqrt(3) * 4, 8, 0);
            fruitSpheres["sphere78"].position = new BABYLON.Vector3(sqrt(3) * 6, 2, 0);
            // sphere79 the top right sphere shared with fruit13
            fruitSpheres["sphere79"].position = new BABYLON.Vector3(sqrt(3) * 6, 6, 0);

            // FRUIT8
            // origin
            fruitSpheres["sphere80"].position = new BABYLON.Vector3(0, 16, 0);
            fruitSpheres["sphere81"].position = new BABYLON.Vector3(0, 18, 0);
            fruitSpheres["sphere82"].position = new BABYLON.Vector3(-sqrt(3), 17, 0);
            fruitSpheres["sphere83"].position = new BABYLON.Vector3(-sqrt(3), 15, 0);
            fruitSpheres["sphere84"].position = new BABYLON.Vector3(0, 14, 0);
            fruitSpheres["sphere85"].position = new BABYLON.Vector3(sqrt(3), 15, 0);
            fruitSpheres["sphere86"].position = new BABYLON.Vector3(sqrt(3), 17, 0);
            fruitSpheres["sphere87"].position = new BABYLON.Vector3(0, 20, 0);
            fruitSpheres["sphere88"].position = new BABYLON.Vector3(-sqrt(3) * 2, 18, 0);
            fruitSpheres["sphere89"].position = new BABYLON.Vector3(-sqrt(3) * 2, 14, 0);
            fruitSpheres["sphere90"].position = new BABYLON.Vector3(sqrt(3) * 2, 14, 0);
            fruitSpheres["sphere91"].position = new BABYLON.Vector3(sqrt(3) * 2, 18, 0);

            // FRUIT9
            // origin
            fruitSpheres["sphere92"].position = new BABYLON.Vector3(-sqrt(3) * 8, 8, 0);
            fruitSpheres["sphere93"].position = new BABYLON.Vector3(-sqrt(3) * 8, 10, 0);
            fruitSpheres["sphere94"].position = new BABYLON.Vector3(-sqrt(3) * 9, 9, 0);
            fruitSpheres["sphere95"].position = new BABYLON.Vector3(-sqrt(3) * 9, 7, 0);
            fruitSpheres["sphere96"].position = new BABYLON.Vector3(-sqrt(3) * 8, 6, 0);
            fruitSpheres["sphere97"].position = new BABYLON.Vector3(-sqrt(3) * 7, 7, 0);
            fruitSpheres["sphere98"].position = new BABYLON.Vector3(-sqrt(3) * 7, 9, 0);
            fruitSpheres["sphere99"].position = new BABYLON.Vector3(-sqrt(3) * 8, 12, 0);
            fruitSpheres["sphere100"].position = new BABYLON.Vector3(-sqrt(3) * 10, 10, 0);
            fruitSpheres["sphere101"].position = new BABYLON.Vector3(-sqrt(3) * 10, 6, 0);
            fruitSpheres["sphere102"].position = new BABYLON.Vector3(-sqrt(3) * 8, 4, 0);
            fruitSpheres["sphere103"].position = new BABYLON.Vector3(-sqrt(3) * 6, 10, 0);

            // FRUIT10
            // origin
            fruitSpheres["sphere104"].position = new BABYLON.Vector3(-sqrt(3) * 8, -8, 0);
            fruitSpheres["sphere105"].position = new BABYLON.Vector3(-sqrt(3) * 8, -6, 0);
            fruitSpheres["sphere106"].position = new BABYLON.Vector3(-sqrt(3) * 9, -7, 0);
            fruitSpheres["sphere107"].position = new BABYLON.Vector3(-sqrt(3) * 9, -9, 0);
            fruitSpheres["sphere108"].position = new BABYLON.Vector3(-sqrt(3) * 8, -10, 0);
            fruitSpheres["sphere109"].position = new BABYLON.Vector3(-sqrt(3) * 7, -9, 0);
            fruitSpheres["sphere110"].position = new BABYLON.Vector3(-sqrt(3) * 7, -7, 0);
            fruitSpheres["sphere111"].position = new BABYLON.Vector3(-sqrt(3) * 8, -4, 0);
            fruitSpheres["sphere112"].position = new BABYLON.Vector3(-sqrt(3) * 10, -6, 0);
            fruitSpheres["sphere113"].position = new BABYLON.Vector3(-sqrt(3) * 10, -10, 0);
            fruitSpheres["sphere114"].position = new BABYLON.Vector3(-sqrt(3) * 8, -12, 0);
            fruitSpheres["sphere115"].position = new BABYLON.Vector3(-sqrt(3) * 6, -10, 0);

            // FRUIT11
            // origin
            fruitSpheres["sphere116"].position = new BABYLON.Vector3(0, -16, 0);
            fruitSpheres["sphere117"].position = new BABYLON.Vector3(0, -14, 0);
            fruitSpheres["sphere118"].position = new BABYLON.Vector3(-sqrt(3), -15, 0);
            fruitSpheres["sphere119"].position = new BABYLON.Vector3(-sqrt(3), -17, 0);
            fruitSpheres["sphere120"].position = new BABYLON.Vector3(0, -18, 0);
            fruitSpheres["sphere121"].position = new BABYLON.Vector3(sqrt(3), -17, 0);
            fruitSpheres["sphere122"].position = new BABYLON.Vector3(sqrt(3), -15, 0);
            fruitSpheres["sphere123"].position = new BABYLON.Vector3(-sqrt(3) * 2, -14, 0);
            fruitSpheres["sphere124"].position = new BABYLON.Vector3(-sqrt(3) * 2, -18, 0);
            fruitSpheres["sphere125"].position = new BABYLON.Vector3(0, -20, 0);
            fruitSpheres["sphere126"].position = new BABYLON.Vector3(sqrt(3) * 2, -18, 0);
            fruitSpheres["sphere127"].position = new BABYLON.Vector3(sqrt(3) * 2, -14, 0);

            // FRUIT12
            // origin
            fruitSpheres["sphere128"].position = new BABYLON.Vector3(sqrt(3) * 7, -7, 0);
            fruitSpheres["sphere129"].position = new BABYLON.Vector3(sqrt(3) * 8, -8, 0);
            fruitSpheres["sphere130"].position = new BABYLON.Vector3(sqrt(3) * 8, -6, 0);
            fruitSpheres["sphere131"].position = new BABYLON.Vector3(sqrt(3) * 7, -9, 0);
            fruitSpheres["sphere132"].position = new BABYLON.Vector3(sqrt(3) * 8, -10, 0);
            fruitSpheres["sphere133"].position = new BABYLON.Vector3(sqrt(3) * 9, -9, 0);
            fruitSpheres["sphere134"].position = new BABYLON.Vector3(sqrt(3) * 9, -7, 0);
            fruitSpheres["sphere135"].position = new BABYLON.Vector3(sqrt(3) * 8, -4, 0);
            fruitSpheres["sphere136"].position = new BABYLON.Vector3(sqrt(3) * 6, -10, 0);
            fruitSpheres["sphere137"].position = new BABYLON.Vector3(sqrt(3) * 8, -12, 0);
            fruitSpheres["sphere138"].position = new BABYLON.Vector3(sqrt(3) * 10, -10, 0);
            fruitSpheres["sphere139"].position = new BABYLON.Vector3(sqrt(3) * 10, -6, 0);

            // FRUIT13
            // origin
            fruitSpheres["sphere140"].position = new BABYLON.Vector3(sqrt(3) * 8, 8, 0);
            fruitSpheres["sphere141"].position = new BABYLON.Vector3(sqrt(3) * 8, 10, 0);
            fruitSpheres["sphere142"].position = new BABYLON.Vector3(sqrt(3) * 7, 9, 0);
            fruitSpheres["sphere143"].position = new BABYLON.Vector3(sqrt(3) * 7, 7, 0);
            fruitSpheres["sphere144"].position = new BABYLON.Vector3(sqrt(3) * 8, 6, 0);
            fruitSpheres["sphere145"].position = new BABYLON.Vector3(sqrt(3) * 9, 7, 0);
            fruitSpheres["sphere146"].position = new BABYLON.Vector3(sqrt(3) * 9, 9, 0);
            fruitSpheres["sphere147"].position = new BABYLON.Vector3(sqrt(3) * 8, 12, 0);
            fruitSpheres["sphere148"].position = new BABYLON.Vector3(sqrt(3) * 6, 10, 0);
            fruitSpheres["sphere149"].position = new BABYLON.Vector3(sqrt(3) * 8, 4, 0);
            fruitSpheres["sphere150"].position = new BABYLON.Vector3(sqrt(3) * 10, 6, 0);
            fruitSpheres["sphere151"].position = new BABYLON.Vector3(sqrt(3) * 10, 10, 0);
        }
    }

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.SnowFlake = SnowFlake;

})();