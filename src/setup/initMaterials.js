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

    var initMaterials = function (game) {

        function getlightRayMat() {

            BABYLON.Effect.ShadersStore["customVertexShader"] = `
    
            attribute vec3 position;
            attribute vec2 uv;
            uniform mat4 worldViewProjection;
            varying vec2 vUV;
    
            void main(void) {
                gl_Position = worldViewProjection * vec4(position, 1.0);
                vUV = uv;
            }`

            BABYLON.Effect.ShadersStore["customFragmentShader"] = `
    
            varying vec2 vUV;
            uniform float time;
    
            float rayValue(in vec2 coord, in float frequency, in float travelRate, in float maxStrength) {
                float nx = 2.0f * (coord.x - 0.5f);
                float nx2 = min(1.0f, 3.5f - 3.5f * nx * nx);
                float ny = 2.0f * (coord.y - 0.5f);
                float ny2 = min(1.0f, 3.5f - 3.5f * ny * ny);            
                float xModifier = 0.5f * (cos(time * travelRate + coord.x * frequency) + 1.0f);
                float yModifier = sin(coord.y);
                return maxStrength * xModifier * yModifier * nx2 * ny2;
            }
    
            void main(void) {

                float ray1 = rayValue(vUV, 28.0f, -0.7f, 0.1);
                float ray2 = rayValue(vUV, 34.0f, 0.1f, 0.12);
                float ray3 = rayValue(vUV, 16.0f, -0.05f, 0.13);
                float ray4 = rayValue(vUV, 72.0f, 0.9f, 0.01);

    
                float total = ray1 + ray2 + ray3 + ray4;            
                gl_FragColor = vec4(total, total, total, total);
            }`

            var shaderMaterial = new BABYLON.ShaderMaterial("lightRayMat", game.scene, {
                vertex: "custom",
                fragment: "custom",
            },
                {
                    attributes: ["position", "normal", "uv"],
                    uniforms: ["world", "worldView", "worldViewProjection", "view", "projection"]
                });

            shaderMaterial.setFloat("time", 0);
            shaderMaterial.alphaMode = BABYLON.Engine.ALPHA_ADD;
            shaderMaterial.emissiveColor = new BABYLON.Color3.FromHexString("#DDC4FF");
            shaderMaterial.alpha = 0.99;
        }

        function getholoSphereMat() {

            const sphereMat1 = new BABYLON.StandardMaterial("holoSphereMat", game.scene);
            sphereMat1.emissiveColor = new BABYLON.Color3(1, 1, 1);
            sphereMat1.alpha = 0.0;
            sphereMat1.backFaceCulling = false;
            sphereMat1.alphaMode = BABYLON.Engine.ALPHA_ADD;

            const f_params1 = new BABYLON.FresnelParameters();
            f_params1.isEnabled = true;
            f_params1.leftColor = new BABYLON.Color3(0.529, 0.424, 0.835); // edge
            f_params1.rightColor = new BABYLON.Color3(0, 0, 0); // center
            f_params1.power = 1;
            f_params1.bias = 0.0;

            const f_params2 = new BABYLON.FresnelParameters();
            f_params2.isEnabled = true;
            f_params2.leftColor = new BABYLON.Color3(1, 1, 1); // edge
            f_params2.rightColor = new BABYLON.Color3(0.0, 0.0, 0.0); // center
            f_params2.power = 1;
            f_params2.bias = 0.0;

            sphereMat1.emissiveFresnelParameters = f_params1;
            sphereMat1.opacityFresnelParameters = f_params2;
        }

        function getStandardMatTHG() {

            const standardMat = new BABYLON.StandardMaterial("standardMatTHG", game.scene);
            standardMat.emissiveColor = new BABYLON.Color3(0.271, 0.129, 0.694);
            // standardMat.alpha = 0.94;
            // standardMat.backFaceCulling = true;
            standardMat.needDepthPrePass = true;
            standardMat.lightmapTexture = new BABYLON.Texture("src/assets/textures/64Tetra9.jpg", game.scene);
            // standardMat.lightmapTexture.level = 0.9;
            standardMat.lightmapTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            standardMat.lightmapTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
        }
        
        function getTreeMat() {

            const standardMat = new BABYLON.StandardMaterial("standardMatTree", game.scene);
            // standardMat.emissiveColor = new BABYLON.Color3(0.271, 0.129, 0.694);
            standardMat.emissiveColor = new BABYLON.Color4.FromHexString("#6425FFFF");
            // standardMat.alpha = 0.94;
            // standardMat.backFaceCulling = true;
            standardMat.needDepthPrePass = true;
            // standardMat.lightmapTexture = new BABYLON.Texture("src/assets/textures/64Tetra9.jpg", game.scene);
            // standardMat.lightmapTexture.level = 0.9;
            // standardMat.lightmapTexture.wrapU = BABYLON.Texture.CLAMP_ADDRESSMODE;
            // standardMat.lightmapTexture.wrapV = BABYLON.Texture.CLAMP_ADDRESSMODE;
        }

        getholoSphereMat();
        getStandardMatTHG();
        getlightRayMat();
        getTreeMat();
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.initMaterials = initMaterials;

})();