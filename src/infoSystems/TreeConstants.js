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
    class TreeConstants extends Arminia.GameObject {

        constructor(game) {

            // 3 elements: Constants, forces, Scales

            super("TreeConstants", game);

            const _this = this;

            this.parent = game.infoSystem1.tree1;

            //Set font
            var font_size = 48;
            // var font_size = 72;
            // var font = "regular " + font_size + "px Arial";

            var font = `48px Verdana regular`;

            //Set height for plane
            // var planeHeight = 3;
            // var planeHeight = 1.5;
            var planeHeight = .3;

            //Set height for dynamic texture
            // var DTHeight = 1.5 * font_size; //or set as wished
            var DTHeight = 1.2 * font_size; //or set as wished

            //Calcultae ratio
            var ratio = planeHeight / DTHeight;

            //Set text
            var text = "A";

            // var sF = 0.1;
            var sF = 1;

            // var color = "#ffff00";
            var color = "#ffffff";


            var layerMask = 1;

            //Use a temporay dynamic texture to calculate the length of the text on the dynamic texture canvas
            var temp = new BABYLON.DynamicTexture("DynamicTextureTemp", 64, game.scene);
            var tmpctx = temp.getContext();
            tmpctx.font = font;
            var DTWidth = tmpctx.measureText(text).width + 8;

            //Calculate width the plane has to be 
            var planeWidth = DTWidth * ratio;

            var dynamicTextureA = new BABYLON.DynamicTexture("DynamicTextureA", { width: DTWidth, height: DTHeight }, game.scene, false);
            var matA = new BABYLON.StandardMaterial("mat", game.scene);
            matA.alphaMode = BABYLON.Engine.ALPHA_ONEONE;

            matA.emissiveTexture = dynamicTextureA;
            dynamicTextureA.drawText(text, null, null, font, color, "#000000", true);

            // var planeA = BABYLON.MeshBuilder.CreatePlane("planeA", { width: planeWidth, height: planeHeight }, game.scene);
            // planeA.visibility = 0.99;
            // planeA.position = new BABYLON.Vector3(0, 0, 0);
            // // planeA.scaling = new BABYLON.Vector3(sF, sF, sF);
            // planeA.layerMask = layerMask;
            // planeA.material = matA;
            // planeA.billboardMode = 7;
            // planeA.alphaIndex = 8;
            // planeA.parent = this;    
            
            this.planeA = BABYLON.MeshBuilder.CreatePlane("planeA", { width: planeWidth, height: planeHeight }, game.scene);
            this.planeA.visibility = 0.99;
            this.planeA.position = new BABYLON.Vector3(0, 0, 0);
            this.planeA.layerMask = layerMask;
            this.planeA.material = matA;
            this.planeA.billboardMode = 7;
            this.planeA.alphaIndex = 8;
            this.planeA.parent = this;

            // green
            game.scene.getBoundingBoxRenderer().frontColor.set(0, 1, 0);
            game.scene.getBoundingBoxRenderer().backColor.set(0, 1, 0);

            // let treeActionManager = new BABYLON.ActionManager(game.scene);
            // planeA.actionManager = treeActionManager;

            this.planeA.actionManager = new BABYLON.ActionManager(game.scene);

            this.planeA.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger,
                    function () {

                        console.log("planeA OnPointerOverTrigger");


                    }
                )
            );
            
            this.planeA.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger,
                    function () {

                        console.log("planeA OnPointerOutTrigger");


                    }
                )
            );

            // treeActionManager.registerAction(

            // new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOverTrigger, function (ev) {

            //     console.log("OnPointerOverTrigger");

            //     switch (ev.meshUnderPointer.id) {
            //         case "planeA":
            //             // game.scene.beginAnimation(rect1, 0, 10, false)
            //             // frontWheel.renderOutline = true;
            //             console.log("OnPointerOverTrigger");
            //             planeA.showBoundingBox = true;

            //             $("#A_sysHintContainer").show();
            //             $("#A_InfoSysHintText").hide();
            //             $("#A_infoSysInfo").show();

            //             // $("#A_infoSysTitle").text(fruit.parent.infoSystemData.name);
            //             // $("#A_infoSysDifficulty").text(fruit.parent.infoSystemData.difficulty);
            //             // $("#A_infoSysOverview").text(fruit.parent.infoSystemData.overview);                            

            //             $("#A_infoSysTitle").text("fruit.parent.infoSystemData.name");
            //             $("#A_infoSysDifficulty").text("fruit.parent.infoSystemData.difficulty");
            //             $("#A_infoSysOverview").text("fruit.parent.infoSystemData.overview");

            //             // frontWheel.outlineColor = new BABYLON.Color3.FromHexString("#2ecc71");
            //             break;
            //         case "Cube":
            //             // scene.beginAnimation(rect2, 0, 10, false);
            //             // block.renderOutline = true;
            //             // block.outlineColor = new BABYLON.Color3.FromHexString("#2ecc71");
            //             break
            //     }

            // }));        

            //if hover is over remove highlight of the mesh

            // treeActionManager.registerAction(
            //     new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPointerOutTrigger, function (ev) {

            //         console.log("OnPointerOutTrigger");

            //         switch (ev.meshUnderPointer.id) {
            //             case "planeA":
            //                 planeA.showBoundingBox = false;


            //                 $("#A_sysHintContainer").hide();
            //                 // $("#A_InfoSysHintText").show();

            //                 // scene.beginAnimation(rect1, 10, 0, false)
            //                 // frontWheel.renderOutline = false
            //                 break
            //             case "Cube":
            //                 // scene.beginAnimation(rect2, 10, 0, false)
            //                 // block.renderOutline = false
            //                 break
            //         }

            //     })
            // );


            //cyan 
            // game.scene.getBoundingBoxRenderer().frontColor.set(0, 1, 0.71);
            // game.scene.getBoundingBoxRenderer().backColor.set(0, 1, 0.71);

            //red 
            // game.scene.getBoundingBoxRenderer().frontColor.set(1, 0, 0.);
            // game.scene.getBoundingBoxRenderer().backColor.set(1, 0, 0);

            // new BABYLON.Color4.FromHexString("#00FFB5FF");

            // planeA.showBoundingBox = true;

            /////////////////////////////////////////////   CONSTANT B   //////////////////////////////////////////////////////  

            // const matB = matA.clone("constantMatB");
            // matB.alphaMode = BABYLON.Engine.ALPHA_ONEONE;

            // var dynamicTextureB = new BABYLON.DynamicTexture("DynamicTextureB", { width: DTWidth, height: DTHeight }, game.scene, false);
            // dynamicTextureB.drawText("B", null, null, font, color, "#000000", true);
            // matB.emissiveTexture = dynamicTextureB;

            // var planeB = planeA.clone("planeB");
            // planeB.visibility = 0.99;

            // // plane2.scaling = new BABYLON.Vector3(sF, sF, sF);
            // // planeB.position = new BABYLON.Vector3(Math.sqrt(-3), 1.5, 0);
            // planeB.position = new BABYLON.Vector3(0.866, 1.5, 0);
            // planeB.layerMask = layerMask;
            // planeB.billboardMode = 7;
            // planeB.alphaIndex = 8;
            // planeB.material = matB;
            // planeB.parent = this;

            // /////////////////////////////////////////////   CONSTANT C   //////////////////////////////////////////////////////  

            // const matC = matA.clone("constantMatC");
            // matC.alphaMode = BABYLON.Engine.ALPHA_ONEONE;

            // var dynamicTextureC = new BABYLON.DynamicTexture("dynamicTextureC", { width: DTWidth, height: DTHeight }, game.scene, false);
            // dynamicTextureC.drawText("C", null, null, font, color, "#000000", true);
            // matC.emissiveTexture = dynamicTextureC;

            // var planeC = planeA.clone("planeC");
            // planeC.visibility = 0.99;
            // planeC.position = new BABYLON.Vector3(-0.866, 1.5, 0);
            // // planeC.scaling = new BABYLON.Vector3(sF, sF, sF);
            // planeC.layerMask = layerMask;
            // planeC.billboardMode = 7;
            // planeC.alphaIndex = 8;
            // planeC.material = matC;
            // planeC.parent = this;


            // /////////////////////////////////////////////   CONSTANT D   //////////////////////////////////////////////////////  

            // const matD = matA.clone("constantMatD");
            // matD.alphaMode = BABYLON.Engine.ALPHA_ONEONE;

            // var dynamicTextureD = new BABYLON.DynamicTexture("dynamicTextureD", { width: DTWidth, height: DTHeight }, game.scene, false);
            // dynamicTextureD.drawText("D", null, null, font, color, "#000000", true);
            // matD.emissiveTexture = dynamicTextureD;

            // var planeD = planeA.clone("planeD");
            // planeD.visibility = 0.99;
            // planeD.position = new BABYLON.Vector3(0, 1, -1.4);
            // // planeC.scaling = new BABYLON.Vector3(sF, sF, sF);
            // planeD.layerMask = layerMask;
            // planeD.billboardMode = 7;
            // planeD.alphaIndex = 8;
            // planeD.material = matD;
            // planeD.parent = this;

            game.infoSystem1.tree1.setEnabled(false);

        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.TreeConstants = TreeConstants;
})();