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

    const fog = function(game) {

        //////////////////////////////////////////////   FOG   ///////////////////////////////////////////////////

        // var particleSystem;
        var fogTexture = new BABYLON.Texture("src/assets/textures/smoke_15.png", game.scene);

        /////////////////////////////////////////   PERSPECTIVE CAMERA SETTINGS   //////////////////////////////////////////////

        var alpha1 = 0.0;
        var alpha2 = 0.02;
        var c1 = new BABYLON.Color3(0.6, 0.27, 0.9);
        var c2 = new BABYLON.Color3(1, 1, 1);
        var y = -25;
        var minSize = 7;
        var maxSize = 20;
        var updateSpeed = 0.004;
        var particleCount = 600;
        var emitRate = 6000;
        var particleCapacity = 600;

        // particleSystem = new BABYLON.GPUParticleSystem("particles", { capacity: particleCapacity }, game.scene);
        // particleSystem.activeParticleCount = particleCount;

        game.particleSystem = new BABYLON.ParticleSystem("particles", particleCapacity, game.scene);

        game.particleSystem.manualEmitCount = game.particleSystem.activeParticleCount;
        game.particleSystem.particleTexture = fogTexture.clone();
        game.particleSystem.emitter = new BABYLON.Vector3(0, y, 0);
        game.particleSystem.color1 = new BABYLON.Color4.FromColor3(c1, alpha1);
        game.particleSystem.color2 = new BABYLON.Color4.FromColor3(c2, alpha2);
        game.particleSystem.minSize = minSize;
        game.particleSystem.maxSize = maxSize;
        game.particleSystem.minLifeTime = Number.MAX_SAFE_INTEGER;
        game.particleSystem.emitRate = emitRate;
        // game.particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_STANDARD;
        game.particleSystem.blendMode = 2;
        game.particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);
        game.particleSystem.direction1 = new BABYLON.Vector3(0, 0, 0);
        game.particleSystem.direction2 = new BABYLON.Vector3(0, 0, 0);
        game.particleSystem.minAngularSpeed = -2;
        game.particleSystem.maxAngularSpeed = 2;
        game.particleSystem.minEmitPower = 0;
        game.particleSystem.maxEmitPower = 0;
        game.particleSystem.updateSpeed = updateSpeed;
        game.particleSystem.layerMask = 2;
        game.particleSystem.minEmitBox = new BABYLON.Vector3(-23, -5, 0); // Starting all from
        game.particleSystem.maxEmitBox = new BABYLON.Vector3(23, 4, 0); // To..
        game.particleSystem.start();
    }

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.fog = fog;

})();