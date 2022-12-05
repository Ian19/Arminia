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

    function fresnelGUI(game) {

        const mat = game.scene.getMaterialByName("snowflakeMat");

        //////////////////////// emissiveFresnelParameters ///////////////////////////////

        Object.defineProperty(mat, "leftColorInspect", {
            get() {
                return this.emissiveFresnelParameters.leftColor;
            },
            set(newValue) {
                this.emissiveFresnelParameters.leftColor = newValue;
            },
        });

        Object.defineProperty(mat, "rightColorInspect", {
            get() {
                return this.emissiveFresnelParameters.rightColor;
            },
            set(newValue) {
                this.emissiveFresnelParameters.rightColor = newValue;
            },
        });

        Object.defineProperty(mat, "powerInspect", {
            get() {
                return this.emissiveFresnelParameters.power;
            },
            set(newValue) {
                this.emissiveFresnelParameters.power = newValue;
            },
        });

        Object.defineProperty(mat, "biasInspect", {
            get() {
                return this.emissiveFresnelParameters.bias;
            },
            set(newValue) {
                this.emissiveFresnelParameters.bias = newValue;
            },
        });

        //////////////////////// opacityFresnelParameters ///////////////////////////////

        Object.defineProperty(mat, "leftColorInspect2", {
            get() {
                return this.opacityFresnelParameters.leftColor;
            },
            set(newValue) {
                this.opacityFresnelParameters.leftColor = newValue;
            },
        });

        Object.defineProperty(mat, "rightColorInspect2", {
            get() {
                return this.opacityFresnelParameters.rightColor;
            },
            set(newValue) {
                this.opacityFresnelParameters.rightColor = newValue;
            },
        });

        Object.defineProperty(mat, "powerInspect2", {
            get() {
                return this.opacityFresnelParameters.power;
            },
            set(newValue) {
                this.opacityFresnelParameters.power = newValue;
            },
        });

        Object.defineProperty(mat, "biasInspect2", {
            get() {
                return this.opacityFresnelParameters.bias;
            },
            set(newValue) {
                this.opacityFresnelParameters.bias = newValue;
            },
        });

        mat.inspectableCustomProperties = [

            {
                label: "Emissive Color",
                propertyName: "emissiveColor",
                type: BABYLON.InspectableType.Color3
            },
            {
                label: "Emissive Edge Color",
                propertyName: "leftColorInspect",
                type: BABYLON.InspectableType.Color3
            },
            {
                label: "Emissive Center Color",
                propertyName: "rightColorInspect",
                type: BABYLON.InspectableType.Color3
            },
            {
                label: "Emissive Power",
                propertyName: "powerInspect",
                type: BABYLON.InspectableType.Slider,
                min: 1,
                max: 20
            },
            {
                label: "Emissive Bias",
                propertyName: "biasInspect",
                type: BABYLON.InspectableType.Slider,
                min: 0,
                max: 1,
                step: 0.01
            },
            {
                label: "Opacity Edge Color",
                propertyName: "leftColorInspect2",
                type: BABYLON.InspectableType.Color3
            },
            {
                label: "Opacity Center Color",
                propertyName: "rightColorInspect2",
                type: BABYLON.InspectableType.Color3
            },
            {
                label: "Opacity Power",
                propertyName: "powerInspect2",
                type: BABYLON.InspectableType.Slider,
                min: 1,
                max: 20
            },
            {
                label: "Opacity Bias",
                propertyName: "biasInspect2",
                type: BABYLON.InspectableType.Slider,
                min: 0,
                max: 1,
                step: 0.01
            }
        ]
    }

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.fresnelGUI = fresnelGUI;

})();