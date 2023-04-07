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

    const createSettingsPanel = function (game) {

        var checkbox1 = document.getElementById('checkbox1');
        var checkbox2 = document.getElementById('checkbox2');
        var checkbox3 = document.getElementById('checkbox3');
        var checkbox4 = document.getElementById('checkbox4');
        var checkbox5 = document.getElementById('checkbox5');
        var checkbox6 = document.getElementById('checkbox6');


        // 2D geometry
        $("#checkbox10").click(function () {

            // console.log("CHECK");

            game.camera.useAutoRotationBehavior ^= true;

        });
        
        // 2D geometry
        $("#checkbox0").click(function () {

            game.infoSystem1.THGLines2D.line1.isVisible ^= true;
            game.infoSystem2.metaCubeLines2D.line1.isVisible ^= true;

        });

        // 3D geometry
        let mesh1Alpha = 0.99;
        let mesh2Alpha = 0.02;

        $("#checkbox9").click(function () {

            if ($("#checkbox9").prop("checked") == true) {

                mesh2Alpha = 0.02;

                if ($("#checkbox3").prop("checked") == true) mesh1Alpha = 0.99;
                else mesh1Alpha = 0.75;

            } else {
                mesh1Alpha = mesh2Alpha = 0;
            }

            game.infoSystem1.tetrahedronGrid1.mesh1.material.alpha = mesh1Alpha;
            game.infoSystem1.tetrahedronGrid1.mesh2.isVisible ^= true;
            game.infoSystem1.tetrahedronGrid1.mesh2.material.alpha = mesh2Alpha;

            game.infoSystem2.metatronsCube.metaCube.mesh1.material.alpha = mesh1Alpha;
            game.infoSystem2.metatronsCube.metaStar.mesh1.material.alpha = mesh1Alpha;
            game.infoSystem2.metatronsCube.metaStar.mesh2.isVisible ^= true;

            game.infoSystem3.starTetra.mesh1.material.alpha = mesh1Alpha;
            game.infoSystem3.starTetra.mesh2.isVisible ^= true;

        });

        // outlines
        $("#checkbox1").click(function () {

            if ($("#checkbox1").prop("checked") == true) {

                game.selectedInfoSystem.edgesRenderingMeshes.forEach(function (element) {
                    element.enableEdgesRendering();
                    // element.edgesWidth = 3.0;
                });

                game.selectedInfoSystem.wireMeshes.forEach(function (element) {
                    element.isVisible = true;
                });

            } else {

                game.selectedInfoSystem.edgesRenderingMeshes.forEach(function (element) {
                    element.disableEdgesRendering();
                });

                game.selectedInfoSystem.wireMeshes.forEach(function (element) {
                    element.isVisible = false;
                });
            }

        });

        let showFruitOfLife = false;
        // fruit of life        
        $("#checkbox2").click(function () {
            // game.infoSystem1.FruitOfLife.setEnabled(showFruitOfLife);

            game.selectedInfoSystem.FruitOfLife.setEnabled(showFruitOfLife);
            showFruitOfLife ^= true;
        });

        // opaque 3D geometry
        checkbox3.onclick = function () {

            if (checkbox3.checked == true) {

                if ($("#checkbox9").prop("checked") == true) {

                    game.selectedInfoSystem.edgesRenderingMeshes.forEach(function (element) {
                        element.material.alpha = 0.99;
                    });
                }

            } else {

                if ($("#checkbox9").prop("checked") == true) {

                    game.selectedInfoSystem.edgesRenderingMeshes.forEach(function (element) {
                        element.material.alpha = element.material.alpha1;
                    });
                }
            }
        };

        checkbox4.onclick = function () {
            if (checkbox4.checked == true) {
                game.particleSystem.start();
            } else {
                game.particleSystem.stop();
                game.particleSystem.reset();
            }
        };

        checkbox5.onclick = function () {
            if (checkbox5.checked == true) {
                game.dustPlane.setEnabled(true);
            } else {
                game.dustPlane.setEnabled(false);
            }
        }

        checkbox6.onclick = function () {
            if (checkbox6.checked == true) {
                game.spotLightplane.setEnabled(true);
            } else {
                game.spotLightplane.setEnabled(false);
            }
        }
        
        checkbox11.onclick = function () {
            if (checkbox11.checked == true) {
                game.infoSystem1.tree1.setEnabled(true);

                game.infoSystem1.tetrahedronGrid1.mesh1.material.alpha = 0.2;

            } else {
                game.infoSystem1.tree1.setEnabled(false);
                game.infoSystem1.tetrahedronGrid1.mesh1.material.alpha = 0.6;
            }
        }
        
        checkbox12.onclick = function () {
            if (checkbox12.checked == true) {
                game.infoSystem1.doubleTorus.setEnabled(true);

            } else {
                game.infoSystem1.doubleTorus.setEnabled(false);
            }
        }
        
        checkbox13.onclick = function () {
            if (checkbox13.checked == true) {
                // show and play orb animations
                game.spriteManagerFlare.children.forEach((mySprite) => {
                    mySprite.isVisible = true;
                });

                game.animationGroupArray.forEach((ag) => {
                    ag.play(true);
                });

            } else {
                // hide and stop orb animations
                game.animationGroupArray.forEach((ag) => {
                    ag.stop();
                });

                game.spriteManagerFlare.children.forEach((mySprite) => {
                    mySprite.isVisible = false;
                });
            }
        }

        checkbox14.onclick = function () {
            if (checkbox14.checked == true) {
                game.lightRayPlane.setEnabled(true);
            } else {
                game.lightRayPlane.setEnabled(false);
            }
        }

        const labels = document.getElementsByClassName('A_lbl');
        const cbs = document.getElementsByClassName('A_cb');
        const iconBoxes = document.getElementsByClassName('icon-box');
        const ticks = document.getElementsByClassName('A_tick');
        var elements = Array.from(document.getElementsByClassName('A_tick'));

        // cache bust to ensure onload event fires for svg ticks
        $("#A_sidebar").find('object').each(function () {
            $(this).attr('data', $(this).attr('data') + '?' + new Date().getTime());
        });

        // add event listeners to svg ticks
        for (let i = 0; i < elements.length; i++) {
            elements[i].onload = function () {
                // console.log(i + " loaded");
                var svgDoc = elements[i].contentDocument;
                var delta = svgDoc.getElementById("A_svgID");
                delta.addEventListener("click", function () {
                    cbs[i].click();
                }, false);
            };
        }

        // add event listeners
        for (let i = 0; i < labels.length; i++) {

            document.addEventListener('click', function (e) {
                if (e.target && e.target.id == labels[i].id) {
                    cbs[i].click();
                }
            });

            document.addEventListener('mouseover', function (e) {
                if (e.target && e.target.id == labels[i].id) {
                    iconBoxes[i].style.color = "white";

                    let tickCD = ticks[i].contentDocument;
                    let tick = tickCD.getElementById("svgInternalID");
                    tick.setAttribute("fill", "white");

                    labels[i].style.color = "white";

                    // labels[i].style.cursor = "pointer"; 
                }
            });

            document.addEventListener('mouseout', function (e) {
                if (e.target && e.target.id == labels[i].id) {
                    iconBoxes[i].style.color = "#ACB0DE";

                    let tickCD = ticks[i].contentDocument;
                    let tick = tickCD.getElementById("svgInternalID");
                    tick.setAttribute("fill", "#ACB0DE");

                    labels[i].style.color = "#ACB0DE";
                    // labels[i].style.cursor = "pointer"; 
                }
            });

            document.addEventListener('mouseover', function (e) {
                if (e.target && e.target.id == ticks[i].id) {
                    iconBoxes[i].style.color = "white";

                    let tickCD = ticks[i].contentDocument;
                    let tick = tickCD.getElementById("svgInternalID");
                    tick.setAttribute("fill", "white");

                    labels[i].style.color = "white";

                    // ticks[i].style.cursor = "pointer"; 
                }
            });

            document.addEventListener('mouseout', function (e) {
                if (e.target && e.target.id == ticks[i].id) {
                    iconBoxes[i].style.color = "#ACB0DE";

                    let tickCD = ticks[i].contentDocument;
                    let tick = tickCD.getElementById("svgInternalID");
                    tick.setAttribute("fill", "#ACB0DE");

                    labels[i].style.color = "#ACB0DE";
                    // ticks[i].style.cursor = "pointer"; 
                }
            });
        }
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.createSettingsPanel = createSettingsPanel;

})();