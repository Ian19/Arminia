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

    var initGame = function (game) {

        // const background1 = new BABYLON.Layer("background1", "src/assets/images/background6i.png", game.scene, true);
        // const background1 = new BABYLON.Layer("background1", "src/assets/images/background7.png", game.scene, true);
        const background1 = new BABYLON.Layer("background1", "src/assets/images/background8.png", game.scene, true);
        background1.layerMask = 1;

        // Main Parents
        game.main = new BABYLON.TransformNode("Main", game.scene);
        game.main.layerMask = 1;
        game.snowFlake = new Arminia.SnowFlake(game);

        game.selectedInfoSystem = {};
        game.selectedInfoSystem.edgesRenderingMeshes = [];
        game.selectedInfoSystem.wireMeshes = [];

        game.skills = {};
        game.skills.lastSkill = {};
        game.nav = "home";

        // game.camera2.useAutoRotationBehavior = true;
        // game.camera.useAutoRotationBehavior = true;

        //////////////////////////////////////  INIT BACKGROUND  //////////////////////////////////////////// 

        game.background = new BABYLON.TransformNode("Background", game.scene);
        game.background.isPickable = false;

        /////////////////////////////////////////  INIT INFOSYSTEMS  ////////////////////////////////////////////

        //const t = new Arminia.Tetra(game);
        //const s = new Arminia.Sphere(game, "goSphere1", "sphere1");

        //game.main.general = new BABYLON.TransformNode("General");
        //game.main.general.parent = game.main;
        //game.main.general.flowerOfLife = new Arminia.FlowerOfLife2DLines(game, game.main.general);

        // console.log(game.scene);

        Arminia.infoSystemData(game);

        game.infoSystem1 = new Arminia.InfoSystem(game, "InfoSys1", new BABYLON.Vector3(0, 0, 0), game.infoSystemData[0]);
        game.infoSystem1.tetrahedronGrid1 = new Arminia.TetrahedronGrid(game);
        game.infoSystem1.FruitOfLife = new Arminia.FruitOfLife(game, "FruitOfLife1", game.infoSystem1);
        game.infoSystem1.THGLines2D = new Arminia.THGLines2D(game, "THG2DLines");
        
        game.infoSystem1.doubleTorus = new Arminia.DoubleTorus(game, "torusMesh1");
        game.infoSystem1.doubleTorus.setEnabled(false);

        game.infoSystem1.tree1 = new Arminia.Tree(game);
        game.infoSystem1.tree1.treeConstants = new Arminia.TreeConstants(game);



        game.infoSystem2 = new Arminia.InfoSystem(game, "InfoSys2", new BABYLON.Vector3(0, 8, 0), game.infoSystemData[1]);
        game.infoSystem2.FruitOfLife = new Arminia.FruitOfLife(game, "FruitOfLife2", game.infoSystem2);
        game.infoSystem2.metaCubeLines2D = new Arminia.MetaCubeLines2D(game);
        game.infoSystem2.metatronsCube = new Arminia.MetatronsCube(game);

        game.infoSystem3 = new Arminia.InfoSystem(game, "InfoSys3", new BABYLON.Vector3(Math.sqrt(3) * 4, 4, 0), game.infoSystemData[2]);
        game.infoSystem3.FruitOfLife = new Arminia.FruitOfLife(game, "FruitOfLife3", game.infoSystem3);
        game.infoSystem3.starTetra = new Arminia.StarTetra(game, "StarTetra", game.infoSystem3);

        //////////////////////////////////////  INIT ANIMATIONS  ////////////////////////////////////////////

        game.camera.flyToPosition = Arminia.flyToPosition;

        // must be after FruitOfLife init and before hitbox init
        game.camZoomManager = new Arminia.CamZoom(game);
        game.camZoomManager.isZoomed = false;
        game.camZoomManager.isZooming = false;

        // HitPlanes
        // const hitPlane1 = new Arminia.HitPlane(game, game.infoSystem1, game.infoSystem1.FruitOfLife, "hitPlane1");


        // Hitboxes
        const hitBox1 = new Arminia.HitBox(game, game.infoSystem1, game.infoSystem1.FruitOfLife, "hitBox1");
        const hitBox2 = new Arminia.HitBox(game, game.infoSystem2, game.infoSystem2.FruitOfLife, "hitBox2");
        const hitBox3 = new Arminia.HitBox(game, game.infoSystem3, game.infoSystem3.FruitOfLife, "hitBox3");

        ////////////////////////////////////////////  EFFECTS  ////////////////////////////////////////////

        Arminia.spotlight(game);
        Arminia.fog(game);
        Arminia.dust(game);
        Arminia.lightrays(game);
        Arminia.orbs(10);

        ///////////////////////////////////////////  GENERAL  ////////////////////////////////////////////// 

        Arminia.mathJaxConfig();
        Arminia.loadHomePage();
        Arminia.createSettingsPanel(game);
        Arminia.geogebra(game);
        Arminia.skills(game);
        Arminia.modal();
        Arminia.setupPages(game);
        Arminia.load64TetraPage(game);
        // Arminia.initEmbla();

        ///////////////////////////////////////////////  INIT SFX  //////////////////////////////////////////// 

        var volume = 0.7;
        var playbackRate = 0.5;

        var slideSoft = new BABYLON.Sound("gunshot", "src/assets/audio/Slide_Soft_00.wav", game.scene, null, {
            playbackRate: playbackRate,
            volume: volume
        });

        game.audio = {};
        game.audio.slideSoft = slideSoft;

        //////////////////////////////////////////  INIT SCROLLBARS  ///////////////////////////////////////          

        const osInstance = OverlayScrollbars(document.querySelector('.A_profileScroll'), {
            className: "os-theme-dark custom-class",
            scrollbars: {
                clickScrolling: true,
                dragScrolling: true,
                autoHide: "move"
            }
        });

        OverlayScrollbars(document.querySelector('.A_scroll2, A_scroll3'), {
            className: "os-theme-dark custom-class",
            scrollbars: {
                clickScrolling: true,
                dragScrolling: true,
                autoHide: "move"
            }
        });

        osInstance.getElements().host.classList.add('os-host-flexbox');

        //////////////////////////////////////////////////////////////////////////////////////////////////
        //////////////////////////////////////////  NEW CODE HERE  /////////////////////////////////////// 
        //////////////////////////////////////////////////////////////////////////////////////////////////

        const minorStrokeOut = "2";
        const majorStrokeOut = "8";


        const majorStrokeOver = "10";
        const minorStrokeOver = "4";


        Array.from(document.getElementsByClassName("A_64Tetra3D")).forEach(
            function (element, index) {

                // console.log("onmouseover");
                // console.log(index);

                element.onload = function () {

                    let t = this.contentDocument;

                    t.getElementById("fruit").setAttributeNS(null, "stroke-width", minorStrokeOut);
                    t.getElementById("sixtyFour").setAttributeNS(null, "stroke-width", majorStrokeOut);

                    this.contentDocument.getElementById("hexagon").onmouseover = function () {

                        // console.log("onmouseover");

                        t.getElementById("fruit").setAttributeNS(null, "stroke-width", minorStrokeOver);
                        t.getElementById("sixtyFour").setAttributeNS(null, "stroke-width", majorStrokeOver);
                        this.setAttributeNS(null, "stroke-width", majorStrokeOver);
                    };

                    this.contentDocument.getElementById("hexagon").onmouseout = function () {

                        t.getElementById("fruit").setAttributeNS(null, "stroke-width", minorStrokeOut);
                        t.getElementById("sixtyFour").setAttributeNS(null, "stroke-width", majorStrokeOut);
                        this.setAttributeNS(null, "stroke-width", majorStrokeOut);
                    };
                }
            }
        );

        // var defaultSVG = 'src/assets/images/constants/treeVariableG.svg';
        // $.get(defaultSVG, function (data) {

        //     var svg = data.documentElement;
        //     var s = new XMLSerializer().serializeToString(svg);
        //     var encodedData = 'data: image/svg+xml;base64,' + window.btoa(s);

        //     var meshPBR = new BABYLON.StandardMaterial('meshPBR', game.scene);
        //     meshPBR.emissiveTexture = BABYLON.Texture.LoadFromDataString('data', encodedData, game.scene);
        //     meshPBR.emissiveTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
        //     meshPBR.emissiveTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
        //     meshPBR.emissiveTexture.hasAlpha = true;
        //     meshPBR.alphaMode = BABYLON.Engine.ALPHA_ONEONE;
        //     meshPBR.alpha = 0.99;

        //     var plane = BABYLON.MeshBuilder.CreatePlane("plane", { width: 3, height: 3 }, game.scene);
        //     plane.layerMask = 1;
        //     plane.position = new BABYLON.Vector3(-3, 3.5, 0);
        //     plane.rotation.y = 180 * Math.PI / 180;
        //     plane.material = meshPBR;
        // });




        // localStorage.setItem('name', 'bob');




        // game.scene.registerBeforeRender(function () {
        //     game.infoSystem1.doubleTorus.rotation.y += 0.005;
        // });



        ///////////////////////////////////////////  DEBUG  //////////////////////////////////////////////

        //Arminia.fresnelGUI(game);
        //Arminia.fresnelGUI2(game);

        // console.log(game.scene.debugLayer);

        // game.scene.debugLayer.show({
        //     overlay: true,
        //     handleResize: true,
        //     embedMode: true
        // });

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.initGame = initGame;

})();