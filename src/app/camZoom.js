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
    class CamZoom {
        constructor(game) {

            this.game = game;
            this.camera = game.camera;
            // this.bgCamera = game.bgCamera;

            ////////////////////////////////////////////  CAMERA ANIMATIONS  //////////////////////////////////////////////////

            this.orthoTopAnimation = new BABYLON.Animation("", "orthoTop", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.orthoBottomAnimation = new BABYLON.Animation("", "orthoBottom", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.orthoRightAnimation = new BABYLON.Animation("anm3", "orthoRight", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.orthoLeftAnimation = new BABYLON.Animation("", "orthoLeft", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.targetAnimation = new BABYLON.Animation("", "target", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.alphaAnimation = new BABYLON.Animation("", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.radiusAnimation = new BABYLON.Animation("", "radius", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.betaAnimation = new BABYLON.Animation("", "beta", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
            this.offsetAnimation = new BABYLON.Animation("", "targetScreenOffset", 30, BABYLON.Animation.ANIMATIONTYPE_VECTOR2, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

            ////////////////////////////////////////////  MATERIAL ANIMATIONS  //////////////////////////////////////////////////

            this.leftColorAnimation = new BABYLON.Animation("", "emissiveFresnelParameters.leftColor", 30, BABYLON.Animation.ANIMATIONTYPE_COLOR3, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

            this.ease = new BABYLON.CubicEase();
            this.ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

            this.orthoTopAnimation.setEasingFunction(this.ease);
            this.orthoBottomAnimation.setEasingFunction(this.ease);
            this.orthoRightAnimation.setEasingFunction(this.ease);
            this.orthoLeftAnimation.setEasingFunction(this.ease);
            this.targetAnimation.setEasingFunction(this.ease);
            this.alphaAnimation.setEasingFunction(this.ease);
            this.radiusAnimation.setEasingFunction(this.ease);
            this.leftColorAnimation.setEasingFunction(this.ease);
            this.betaAnimation.setEasingFunction(this.ease);
            this.offsetAnimation.setEasingFunction(this.ease);

            this.snowFlakeMat = game.scene.getMaterialByName("snowflakeMat");

            // let keys1 = [{ frame: 0, value: 1.0 }, { frame: 100, value: 0.0 }];
        }

        registerMesh(mesh) {

            const _this = this;

            const initCamZoom = function (zoomTo, targetFrom1, targetTo1, targetFrom2, targetTo2) {

                // function getOrtho(top, value) {
                function getOrtho(right, value) {

                    let ratio = window.innerWidth / window.innerHeight;
                    let pos2 = -Math.abs(right / ratio);
                    let pos3 = right / ratio;

                    switch (value) {
                        case "orthoTop":
                            return pos3;
                        case "orthoBottom":
                            return pos2;
                        default:
                            break;
                    }
                }
                // Zoom                
                let keys1 = [{ frame: 0, value: _this.camera.orthoRight }, { frame: 100, value: zoomTo }];
                let keys2 = [{ frame: 0, value: -_this.camera.orthoRight }, { frame: 100, value: -zoomTo }];                
                let keys3 = [{ frame: 0, value: getOrtho(_this.camera.orthoRight, "orthoTop") }, { frame: 100, value: getOrtho(zoomTo,"orthoTop") }];
                let keys4 = [{ frame: 0, value: getOrtho(_this.camera.orthoRight, "orthoBottom") }, { frame: 100, value: getOrtho(zoomTo,"orthoBottom")}];

                // realign camera
                let keys5 = [{ frame: 0, value: targetFrom2 }, { frame: 100, value: targetTo2 }];
                let keys6 = [{ frame: 0, value: Math.PI / 2 }, { frame: 100, value: Math.PI / 2 }];
                let keys7 = [{ frame: 0, value: 1000 }, { frame: 100, value: 1000 }];
                let keys8 = [{ frame: 0, value: targetFrom1 }, { frame: 100, value: targetTo1 }];

                // realign bgCamera
                //let keys8 = [{ frame: 0, value: _this.bgCamera.alpha }, { frame: 100, value: Math.PI / 2 }];
                //let keys9 = [{ frame: 0, value: _this.bgCamera.beta }, { frame: 100, value: Math.PI / 2 }];

                _this.orthoRightAnimation.setKeys(keys1);
                _this.orthoLeftAnimation.setKeys(keys2);
                _this.orthoTopAnimation.setKeys(keys3);
                _this.orthoBottomAnimation.setKeys(keys4);
                _this.targetAnimation.setKeys(keys5);
                _this.alphaAnimation.setKeys(keys6);
                _this.betaAnimation.setKeys(keys6);
                _this.radiusAnimation.setKeys(keys7);
                _this.offsetAnimation.setKeys(keys8);

                //_this.bgAlphaAnimation.setKeys(keys8);
                //_this.bgBetaAnimation.setKeys(keys9); 

                _this.camera.animations = [
                    _this.orthoTopAnimation, 
                    _this.orthoBottomAnimation, 
                    _this.orthoRightAnimation, 
                    _this.orthoLeftAnimation,
                    _this.targetAnimation, 
                    _this.alphaAnimation, _this.radiusAnimation, _this.betaAnimation, _this.offsetAnimation
                ];
            };

            mesh.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,
                function (value) {

                    if (!_this.game.camZoomManager.isZooming) {

                        _this.game.camZoomManager.isZooming = true;

                        // let x1 = 0.0;
                        let fruitFadeObj = {};
                        let disabledInfoSystems, meshArrayFaders, meshArrayDetails = [];
                        let selectedInfoSystem = {};
                        let edgesRenderingMeshes = [];

                        // _this.game.animatePageIn("A_64TetraView");
                        // _this.game.animatePageOut("A_homePage");

                        switch (value.source.name) {

                            case "hitBox1":

                                // x1 = 0.0;
                                fruitFadeObj = _this.game.infoSystem1.FruitOfLife;
                                disabledInfoSystems = [_this.game.infoSystem2, _this.game.infoSystem3];
                                _this.game.selectedInfoSystem = _this.game.infoSystem1;

                                /////////////////////////////////  PAGE MANAGEMENT  /////////////////////////////////

                                _this.game.nav = "A_64TetraView";
                                _this.game.animatePageIn(_this.game.nav);
                                _this.game.animatePageOut("A_homePage");

                                /////////////////////////////////  MATERIALS FADE OUT INIT /////////////////////////////////

                                meshArrayFaders = [
                                    //  2D LINES FADE OUT INIT
                                    _this.game.infoSystem2.metaCubeLines2D.line1,
                                    //  MATERIALS FADE OUT INIT
                                    _this.game.infoSystem2.metatronsCube.metaCube.mesh1,
                                    _this.game.infoSystem2.metatronsCube.metaStar.mesh1,
                                    _this.game.infoSystem2.metatronsCube.metaStar.mesh2,
                                    _this.game.infoSystem3.starTetra.mesh1,
                                    _this.game.infoSystem3.starTetra.mesh2,
                                    //  WIREFRAME MATERIALS FADE OUT INIT   
                                    _this.game.infoSystem2.metatronsCube.metaCube.wireMesh,
                                    _this.game.infoSystem2.metatronsCube.metaStar.wireMesh,
                                    _this.game.infoSystem3.starTetra.wireMesh
                                ];

                                /////////////////////////////////  MATERIALS FADE IN INIT /////////////////////////////////

                                meshArrayDetails = [
                                    _this.game.infoSystem1.tetrahedronGrid1.mesh2,
                                    _this.game.infoSystem1.tetrahedronGrid1.wireMesh
                                ];

                                //////////////////////////////  EDGES RENDERING FADE  IN  //////////////////////////////

                                _this.game.selectedInfoSystem.edgesRenderingMeshes = [_this.game.infoSystem1.tetrahedronGrid1.mesh1];
                                _this.game.selectedInfoSystem.wireMeshes = [_this.game.infoSystem1.tetrahedronGrid1.wireMesh];
                                break;

                            case "hitBox2":

                                // x1 = -8.0;
                                fruitFadeObj = _this.game.infoSystem2.FruitOfLife;
                                disabledInfoSystems = [_this.game.infoSystem1, _this.game.infoSystem3];
                                _this.game.selectedInfoSystem = _this.game.infoSystem2;

                                /////////////////////////////////  PAGE MANAGEMENT  /////////////////////////////////

                                _this.game.nav = "A_metatronView";
                                _this.game.animatePageIn(_this.game.nav);
                                _this.game.animatePageOut("A_homePage");
                                // Arminia.loadMetatronPage();

                                /////////////////////////////////  MATERIALS FADE OUT INIT /////////////////////////////////

                                meshArrayFaders = [
                                    //  2D LINES FADE OUT INIT
                                    _this.game.infoSystem1.THGLines2D.line1,
                                    //  MATERIALS FADE OUT INIT
                                    _this.game.infoSystem1.tetrahedronGrid1.mesh1,
                                    _this.game.infoSystem1.tetrahedronGrid1.mesh2,
                                    _this.game.infoSystem3.starTetra.mesh1,
                                    _this.game.infoSystem3.starTetra.mesh2,
                                    //  WIREFRAME MATERIALS FADE OUT INIT   
                                    _this.game.infoSystem1.tetrahedronGrid1.wireMesh,
                                    _this.game.infoSystem3.starTetra.wireMesh
                                ];

                                /////////////////////////////////  MATERIALS FADE IN INIT /////////////////////////////////

                                meshArrayDetails = [
                                    _this.game.infoSystem2.metatronsCube.metaCube.wireMesh,
                                    _this.game.infoSystem2.metatronsCube.metaStar.mesh2,
                                    _this.game.infoSystem2.metatronsCube.metaStar.wireMesh
                                ];

                                //////////////////////////////  EDGES RENDERING FADE IN INIT  //////////////////////////////

                                _this.game.selectedInfoSystem.edgesRenderingMeshes = [_this.game.infoSystem2.metatronsCube.metaCube.mesh1, _this.game.infoSystem2.metatronsCube.metaStar.mesh1];
                                _this.game.selectedInfoSystem.wireMeshes = [_this.game.infoSystem2.metatronsCube.metaCube.wireMesh, _this.game.infoSystem2.metatronsCube.metaStar.wireMesh];
                                break;

                            case "hitBox3":

                                // x1 = -8.0;
                                fruitFadeObj = _this.game.infoSystem3.FruitOfLife;
                                disabledInfoSystems = [_this.game.infoSystem2, _this.game.infoSystem1];
                                _this.game.selectedInfoSystem = _this.game.infoSystem3;

                                /////////////////////////////////  PAGE MANAGEMENT  /////////////////////////////////

                                _this.game.nav = "A_musicView";
                                _this.game.animatePageIn(_this.game.nav);
                                _this.game.animatePageOut("A_homePage");
                                // Arminia.loadMusicPage();

                                ////////////////////////////////  MATERIALS FADE OUT INIT  /////////////////////////////////

                                meshArrayFaders = [
                                    //  2D LINES FADE OUT INIT
                                    _this.game.infoSystem1.THGLines2D.line1,
                                    _this.game.infoSystem2.metaCubeLines2D.line1,
                                    //  MATERIALS FADE OUT INIT
                                    _this.game.infoSystem1.tetrahedronGrid1.mesh1,
                                    _this.game.infoSystem1.tetrahedronGrid1.mesh2,
                                    _this.game.infoSystem2.metatronsCube.metaCube.mesh1,
                                    _this.game.infoSystem2.metatronsCube.metaStar.mesh1,
                                    _this.game.infoSystem2.metatronsCube.metaStar.mesh2,

                                    //  WIREFRAME MATERIALS FADE OUT INIT   
                                    _this.game.infoSystem1.tetrahedronGrid1.wireMesh,
                                    _this.game.infoSystem2.metatronsCube.metaCube.wireMesh,
                                    _this.game.infoSystem2.metatronsCube.metaStar.wireMesh
                                ];

                                /////////////////////////////////  MATERIALS FADE IN INIT /////////////////////////////////

                                meshArrayDetails = [
                                    _this.game.infoSystem3.starTetra.mesh2,
                                    _this.game.infoSystem3.starTetra.wireMesh
                                ];

                                //////////////////////////////  EDGES RENDERING FADE IN INIT  //////////////////////////////

                                _this.game.selectedInfoSystem.edgesRenderingMeshes = [_this.game.infoSystem3.starTetra.mesh1];
                                _this.game.selectedInfoSystem.wireMeshes = [_this.game.infoSystem3.starTetra.wireMesh];
                                break;

                        }

                        if (!_this.game.camZoomManager.isZoomed) {

                            ///////////////////////////////////////////////////////////////////////////////////////////////
                            /////////////////////////////////////////   ZOOM IN  /////////////////////////////////////////
                            ///////////////////////////////////////////////////////////////////////////////////////////////

                            initCamZoom(10.3, new BABYLON.Vector2(_this.game.camera.initialTargetScreenOffset, 0), new BABYLON.Vector2(_this.game.camera.zoomedTargetScreenOffset, 0), BABYLON.Vector3.Zero(), _this.game.selectedInfoSystem.position);

                            // camera animations
                            _this.camera.flyToPosition(new BABYLON.Vector3(0, 0, 12.9), new BABYLON.Vector3(0, 0, 0), _this.game.scene);
                            _this.game.scene.beginAnimation(_this.camera, 0, 100, false, 2, () => {

                                _this.game.camZoomManager.isZoomed = true;
                                _this.game.camZoomManager.isZooming = false;
                                _this.game.snowFlake.setEnabled(false);
                                Arminia.setGUI(_this.game);

                                disabledInfoSystems.forEach(function (element) {
                                    element.setEnabled(false);
                                });

                                // Arminia.initEmbla();

                                //////////////////////////////////  FASTER NO ANIMATION EDGES RENDERING ENABLING
                                _this.game.selectedInfoSystem.edgesRenderingMeshes.forEach(function (element) {
                                    element.enableEdgesRendering();
                                    element.edgesWidth = 6.0;
                                });

                            });

                            /////////////////////////////////////////   AUDIO SLIDE SOFT
                            // _this.game.audio.slideSoft.play();

                            //////////////////////////////////  INFORMATION SYSTEMS ANIMATIONS //////////////////////////////////

                            //////////////////////////////////  MATERIALS FADE OUT                           

                            BABYLON.Animation.CreateAndStartAnimation('', _this.snowFlakeMat, 'emissiveFresnelParameters.leftColor', 30, 50,
                                new BABYLON.Color3(0.451, 0.333, 0.8), new BABYLON.Color3(0, 0, 0), 0, _this.ease);

                            meshArrayFaders.forEach(function (element) {
                                BABYLON.Animation.CreateAndStartAnimation('', element.material, 'alpha', 30, 50, element.material.alpha1, 0.0, 0, _this.ease);
                            });

                            meshArrayDetails.forEach(function (element) {
                                element.isVisible = true;
                                BABYLON.Animation.CreateAndStartAnimation('', element.material, 'alpha', 30, 50, 0.0, element.material.alpha1, 0, _this.ease);
                            });

                        } else {
                            ///////////////////////////////////////////////////////////////////////////////////////////////
                            /////////////////////////////////////////   ZOOM OUT  /////////////////////////////////////////
                            ///////////////////////////////////////////////////////////////////////////////////////////////

                            //////////////////////////////////  PAGE MANAGEMENT


                            _this.game.animatePageIn("A_homePage");
                            _this.game.animatePageOut(_this.game.nav);

                            _this.game.nav = "home";                         

                            // document.getElementById('A_homePage').style.opacity = "0";
                            // document.getElementById('A_homePage').style.display = "block";
                            // document.getElementById('A_homePage').classList.remove("A_pageOut");
                            // document.getElementById('A_homePage').classList.add("A_pageIn");


                            //////////////////////////////  FASTER NO ANIMATION DISABLE EDGES RENDERING                            

                            _this.game.selectedInfoSystem.edgesRenderingMeshes.forEach(function (element) {
                                element.disableEdgesRendering();
                            });

                            //////////////////////////// reset selected infosystem to zoomed out state

                            _this.game.infoSystem1.THGLines2D.line1.isVisible = true;
                            _this.game.infoSystem2.metaCubeLines2D.line1.isVisible = true;
                            _this.game.selectedInfoSystem.FruitOfLife.setEnabled(true);

                            _this.game.selectedInfoSystem.edgesRenderingMeshes.forEach(function (element) {
                                element.isVisible = true;
                                element.material.alpha = element.material.alpha1;
                            });

                            _this.game.snowFlake.setEnabled(true);

                            disabledInfoSystems.forEach(function (element) {
                                element.setEnabled(true);
                            });

                            ////////////////////////////

                            initCamZoom(45, new BABYLON.Vector2(_this.game.camera.zoomedTargetScreenOffset, 0), new BABYLON.Vector2(_this.game.camera.initialTargetScreenOffset, 0), _this.camera.target, BABYLON.Vector3.Zero());

                            //////////////////////////////////  CAMERA ANIMATIONS

                            _this.camera.flyToPosition(new BABYLON.Vector3(0, 0, 30), new BABYLON.Vector3(0, 0, 0), _this.game.scene);
                            _this.game.scene.beginAnimation(_this.camera, 0, 100, false, 2, () => {

                                _this.game.camZoomManager.isZoomed = false;
                                _this.game.camZoomManager.isZooming = false;
                                _this.game.infoSystem1.FruitOfLife.fruitSpheresFade(_this.game);
                                _this.game.infoSystem2.FruitOfLife.fruitSpheresFade(_this.game);
                                _this.game.infoSystem3.FruitOfLife.fruitSpheresFade(_this.game);
                                Arminia.setGUI(_this.game);

                                _this.game.infoSystem1.tree1.setEnabled(false);
                                _this.game.infoSystem1.doubleTorus.setEnabled(false);

                                if (_this.game.scene.meshUnderPointer != null) {

                                    switch (_this.game.scene.meshUnderPointer.name) {

                                        case "hitBox1":
                                            _this.game.infoSystem1.FruitOfLife.fruitSpheresGlow(_this.game);
                                            break;

                                        case "hitBox2":
                                            _this.game.infoSystem2.FruitOfLife.fruitSpheresGlow(_this.game);
                                            break;

                                        case "hitBox3":
                                            _this.game.infoSystem3.FruitOfLife.fruitSpheresGlow(_this.game);
                                            break;
                                        default: break
                                    }

                                } else fruitFadeObj.fruitSpheresFade(_this.game);
                            });

                            // _this.game.audio.slideSoft.play();

                            //////////////////////////////////  INFORMATION SYSTEMS ANIMATIONS //////////////////////////////////

                            /////////////////////////////////  MATERIALS FADE IN

                            BABYLON.Animation.CreateAndStartAnimation('', _this.snowFlakeMat, 'emissiveFresnelParameters.leftColor', 30, 50,
                                new BABYLON.Color3(0, 0, 0), new BABYLON.Color3(0.451, 0.333, 0.8), 0, _this.ease);

                            meshArrayFaders.forEach(function (element) {
                                BABYLON.Animation.CreateAndStartAnimation('', element.material, 'alpha', 30, 50, 0.0, element.material.alpha1, 0, _this.ease);
                            });

                            meshArrayDetails.forEach(function (element) {
                                BABYLON.Animation.CreateAndStartAnimation('', element.material, 'alpha', 30, 50, element.material.alpha1, 0.0, 0, _this.ease, () => {
                                    element.isVisible = false;
                                });
                            });
                        }
                    }
                }));
        }
    };
    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.CamZoom = CamZoom;
})();