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

    const flyToPosition = function(position, target, scene) {

        let ghostCam = new BABYLON.ArcRotateCamera("ghostCam", 0, 0, 0, position, scene);
        ghostCam.setTarget(target);
        scene.cameras.pop();

        //let radiusAnimation = new BABYLON.Animation("camRadius", "radius", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        let alphaAnimation = new BABYLON.Animation("camAlpha", "alpha", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);
        let betaAnimation = new BABYLON.Animation("camBeta", "beta", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT);

        const ease = new BABYLON.CubicEase();
        ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);

        //radiusAnimation.setEasingFunction(ease);
        alphaAnimation.setEasingFunction(ease);
        betaAnimation.setEasingFunction(ease);

        // reseting the alpha and beta to a much simpler version
        this.alpha = this.alpha % (Math.PI * 2);
        this.beta = this.beta % (Math.PI * 2);
        if (this.alpha < 0) this.alpha += Math.PI * 2;
        if (this.beta < 0) this.beta += Math.PI * 2;

        // used to find the shortest curve IE. if angle == 3PI/2 => take the -1PI/2 instead
        let alpha = ghostCam.alpha;
        if (Math.abs(this.alpha - alpha) > Math.PI) alpha = ghostCam.alpha + (Math.PI * 2);

        let beta = ghostCam.beta;
        if (Math.abs(this.beta - beta) > Math.PI) beta = ghostCam.beta + (Math.PI * 2);

        //var keys1 = [{ frame: 0, value: this.radius }, { frame: 100, value: ghostCam.radius }];
        var keys2 = [{ frame: 0, value: this.alpha }, { frame: 100, value: alpha }];
        var keys3 = [{ frame: 0, value: this.beta }, { frame: 100, value: beta }];

        //radiusAnimation.setKeys(keys1);
        alphaAnimation.setKeys(keys2);
        betaAnimation.setKeys(keys3);

        //this.animations.push(radiusAnimation);
        this.animations.push(alphaAnimation);
        this.animations.push(betaAnimation);

        scene.beginAnimation(this, 0, 100, false, 2, () => {

            ghostCam.dispose();

        });        

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.flyToPosition = flyToPosition;

})();