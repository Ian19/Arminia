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

    var orbs = function (num) {

        var splinePoints = 4;
        var betweenPoints = 10;
        const frameRate = 10;
        var animationGroupArray = [];

        var slowest = 0.0007;
        var slower = 0.007;
        var slow = 0.007;
        var fast = 0.01;


        // var slowest = 0.0000007;
        // var slower = 0.000007;
        // var slow = 0.000007;
        // var fast = 0.00003;

        function rand() {
            var plusOrMinus = Math.random() < 0.5 ? -1 : 1;
            var r = (Math.floor((Math.random() * 17) + 1)) * plusOrMinus;
            return r;
        }

        function randP() {
            return Math.floor((Math.random() * 6) + 1);
        }

        function randRange(min, max) {
            //  The maximum is inclusive and the minimum is inclusive
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min);
        }

        function getSlowSpeed() {
            var x = Math.random();
            if (x < 0.33) {
                return slowest;
            } else if (x > 0.33 && x < 0.66) {
                return slower;
            } else if (x > 0.66) {
                return slow;
            }
        }

        const spriteManagerFlare = new BABYLON.SpriteManager("flareManager", "src/assets/textures/spark.png", num, { width: 256, height: 256 });
        spriteManagerFlare.layerMask = 2;

        for (var n = 1; n <= num; n++) {

            var xSlide = new BABYLON.Animation("xSlide", "position.x", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            var ySlide = new BABYLON.Animation("ySlide", "position.y", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
            var zSlide = new BABYLON.Animation("ySlide", "position.z", frameRate, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

            const spark = new BABYLON.Sprite("spark", spriteManagerFlare);
            // spark.width = randRange(1, 9) / 3;
            spark.width = randRange(2, 3);
            spark.height = spark.width;

            // spark.color = new BABYLON.Color4(151 / 255, 119 / 255, 255 / 255, 115 / 255);  // VIOLET
            spark.color = new BABYLON.Color4(randRange(100, 200) / 255, randRange(50, 200) / 255, randRange(150, 255) / 255, 85 / 255);
            // spark.color = new BABYLON.Color4(randRange(200, 255) / 255, randRange(200, 220) / 255, randRange(0, 127) / 255, 85 / 255);
            // spark.color = new BABYLON.Color4(randRange(0, 255) / 255, randRange(0, 255) / 255, randRange(0, 255) / 255, 85 / 255);

            var pointsArray = [];
            var p;

            for (var k = 0; k < splinePoints; k++) {
                p = new BABYLON.Vector3(rand(), rand(), rand());
                pointsArray.push(p);
            }

            var Spline = BABYLON.Curve3.CreateCatmullRomSpline(pointsArray, betweenPoints, true);
            var pathPoints = Spline.getPoints();
            var numberOfPoints = pathPoints.length;

            //////////////////   VIEW SPLINES   //////////////////
            // var SplineMesh = BABYLON.Mesh.CreateLines("Spline", Spline.getPoints(), game.scene);
            // SplineMesh.layerMask = 2;
            // SplineMesh.visibility = 0;

            const keyFramesX = [];
            const keyFramesY = [];
            const keyFramesZ = [];

            pathPoints.forEach((point, index) => {

                keyFramesX[index] = {};
                keyFramesX[index].frame = index;
                keyFramesX[index].value = point.x;

                keyFramesY[index] = {};
                keyFramesY[index].frame = index;
                keyFramesY[index].value = point.y;

                keyFramesZ[index] = {};
                keyFramesZ[index].frame = index;
                keyFramesZ[index].value = point.z;

            });

            var animationGroup = new BABYLON.AnimationGroup("AnimationGroup" + `${n}`);

            for (var i = 0; i < numberOfPoints - 5; i++) {

                if (i % 5 == 0) {

                    var slowEvent = new BABYLON.AnimationEvent(
                        randRange(i, i + 2),
                        function (x) {
                            animationGroup.speedRatio = getSlowSpeed();
                        },
                        false,
                    );

                    var fastEvent = new BABYLON.AnimationEvent(
                        randRange(i + 3, i + 4),
                        function (x) {
                            animationGroup.speedRatio = fast;
                        },
                        false,
                    );

                    xSlide.addEvent(slowEvent);
                    xSlide.addEvent(fastEvent);
                }
            }

            xSlide.setKeys(keyFramesX);
            ySlide.setKeys(keyFramesY);
            zSlide.setKeys(keyFramesZ);

            animationGroup.addTargetedAnimation(xSlide, spark);
            animationGroup.addTargetedAnimation(ySlide, spark);
            animationGroup.addTargetedAnimation(zSlide, spark);
            // animationGroup.speedRatio = 0.02;
            animationGroup.speedRatio = 0.009;
            // animationGroup.speedRatio = 2;
            // animationGroup.speedRatio = 0.007;

            animationGroupArray.push(animationGroup);
        }

        animationGroupArray.forEach((ag) => {
            ag.play(true);
        });

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.orbs = orbs;

})();