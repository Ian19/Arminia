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

    var initScene = function (game) {

        game.canvas = $("#A_gameCanvas")[0];
        game.engine = new BABYLON.Engine(game.canvas, true);

        game.scene = new BABYLON.Scene(game.engine);
        game.scene.clearColor = new BABYLON.Color3.Black;

        game.camera = new BABYLON.ArcRotateCamera("Camera", 0, 0, 0, BABYLON.Vector3.Zero(), game.scene);
        game.camera.setTarget(BABYLON.Vector3.Zero());
        game.camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;

        // custom properties
        game.camera.initialTargetScreenOffset = 17.6;
        game.camera.zoomedTargetScreenOffset = 4.0;
        game.camera.zoomInScale = 10.8;
        game.camera.zoomOutScale = 45;

        game.camera.targetScreenOffset = new BABYLON.Vector2(game.camera.initialTargetScreenOffset, 0);
        game.camera.checkCollisions = false;
        game.camera.panningSensibility = 100;
        game.camera.alpha = 90 * Math.PI / 180;
        game.camera.beta = 90 * Math.PI / 180;
        game.camera.radius = 1000;
        game.camera.panningInertia = 0.1;
        game.camera.inertia = 0.9;
        game.camera.upperBetaLimit = null;
        game.camera.lowerBetaLimit = null;
        game.camera.angularSensibilityX = 2500;
        game.camera.angularSensibilityY = 2500;
        game.camera.wheelPrecision = 1000000;
        game.camera.attachControl(game.engine.getRenderingCanvas(), true);
        game.camera.layerMask = 1;
        game.camera2 = game.camera.clone("camera2");
        game.camera2.layerMask = 2;
        game.camera.inputs.attached.pointers.buttons = [0];
        game.camera.inputs.attached.pointers.multiTouchPanAndZoom = false;
        game.camera.inputs.attached.pointers.multiTouchPanning = false;
        game.camera.fovMode = BABYLON.Camera.FOVMODE_HORIZONTAL_FIXED;

        game.scene.activeCameras = [game.camera, game.camera2];
        game.scene.cameraToUseForPointers = game.camera;

        // var defaultPipeline = new BABYLON.DefaultRenderingPipeline("default1", true, game.scene, [game.camera]);
        // defaultPipeline.imageProcessingEnabled = false;
        // defaultPipeline.samples = 5;

        // game.scene.onPointerObservable.add((pointerInfo) => {
        //     switch (pointerInfo.type) {

        //         case BABYLON.PointerEventTypes.POINTERMOVE:

        //             if (pointerInfo.event.clientX > (window.innerWidth / 2.5)) {

        //                 game.scene.cameraToUseForPointers = game.camera;

        //             } else {

        //                 game.scene.cameraToUseForPointers = game.camera2;
        //             }

        //             break;

        //         case BABYLON.PointerEventTypes.POINTERUP:
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERDOWN:
        //             break;
        //         case BABYLON.PointerEventTypes.POINTERWHEEL:
        //             break;
        //     }
        // });

        game.camera.orthoRight = game.camera.zoomOutScale;
        game.camera2.orthoRight = game.camera.zoomOutScale;

        resetWindow(game.camera);
        resetWindow(game.camera2);

        function resetWindow(cam) {

            let ratio = (window.innerWidth) / window.innerHeight;
            let zoom = cam.orthoRight;
            cam.orthoLeft = -cam.orthoRight;
            let newWidth = zoom / ratio;
            cam.orthoTop = Math.abs(newWidth);
            cam.orthoBottom = -newWidth;

        }

        window.addEventListener("resize", function () {
            game.engine.resize();
            resetWindow(game.camera);
            resetWindow(game.camera2);
        });

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.initScene = initScene;

})();