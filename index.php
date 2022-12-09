<?php

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

    require "action.php";
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Arminia</title>

    <script src="src/utils/jquery-3.6.0.js"></script>
    <script src="https://code.jquery.com/pep/0.4.3/pep.min.js"></script>

    <script src="https://preview.babylonjs.com/babylon.js"></script>
    <!-- <script src="https://cdn.babylonjs.com/babylon.js"></script> -->
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babylonjs/5.14.0/babylon.js"></script>     -->

    <script src="https://preview.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
    <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/babylonjs/5.14.0/babylonjs.loaders.min.js"></script> -->
    <!-- <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.js"></script> -->

    <!--  //////////////////  KATEX   ////////////////// -->

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.css"
        integrity="sha384-Xi8rHCmBmhbuyyhbI88391ZKP2dmfnOl4rT9ZfRI7mLTdk1wblIUnrIq35nqwEvC" crossorigin="anonymous">

    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/katex.min.js"
        integrity="sha384-X/XCfMm41VSsqRNQgDerQczD69XqmjOOOwYQvr/uuC+j4OPoNhVgjdGFwhvN02Ja" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/katex@0.16.0/dist/contrib/auto-render.min.js"
        integrity="sha384-+XBljXPPiv+OzfbB3cVmLHf4hdUFHlWNZN5spNQ7rmHTXpd7WvJum6fIACpNNfIR" crossorigin="anonymous">
    </script>

    <script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            // customised options
            // • auto-render specific keys, e.g.:
            delimiters: [{
                    left: '$$',
                    right: '$$',
                    display: true
                },
                {
                    left: '$',
                    right: '$',
                    display: false
                },
                {
                    left: '\\(',
                    right: '\\)',
                    display: false
                },
                {
                    left: '\\[',
                    right: '\\]',
                    display: true
                }
            ],
            // • rendering keys, e.g.:
            throwOnError: false
        });
    });
    </script>

    <!-- //////////////////   END KATEX  ////////////////// -->

    <script
        src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.3/MathJax.js?config=TeX-AMS-MML_HTMLorMML&dummy=.js">
    </script>


    <!-- <script src="https://cdn.jsdelivr.net/npm/d3@7"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/7.6.1/d3.js"></script>
    <script src="https://www.geogebra.org/apps/deployggb.js"></script>
    <script src="https://unpkg.com/embla-carousel/embla-carousel.umd.js"></script>
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <script src="https://mozilla.github.io/pdf.js/build/pdf.js"></script>

    <link type="text/css" href="src/css/OverlayScrollbars.min.css" rel="stylesheet" />
    <link rel='stylesheet' href='src/css/geogebra.css'>
    <link rel='stylesheet' href='src/css/main.css'>
    <link rel='stylesheet' href='src/css/GUI.css'>
    <link rel='stylesheet' href='src/css/scrollBar.css'>
    <link rel='stylesheet' href='src/css/sidebar.css'>
    <link rel='stylesheet' href='src/css/checkbox.css'>
    <link rel='stylesheet' href='src/css/skills.css'>
    <link rel='stylesheet' href='src/css/geogebraButton.css'>
    <link rel='stylesheet' href='src/css/overview.css'>
    <link rel='stylesheet' href='src/css/shared.css'>
    <link rel='stylesheet' href='src/css/skills.css'>
    <link rel='stylesheet' href='src/css/skillsBar.css'>
    <link rel='stylesheet' href='src/css/steps.css'>
    <link rel='stylesheet' href='src/css/infoSysText.css'>
    <link rel='stylesheet' href='src/css/loginBox.css'>
    <link rel='stylesheet' href='src/css/profile.css'>
    <link rel="stylesheet" href="src/css/embla.css">
    <link rel="stylesheet" href="src/css/card.css" />
    <link rel="stylesheet" href="src/css/colors.css" />
    <link rel="stylesheet" href="src/css/musicPlayer.css" />
    <link rel="stylesheet" href="src/css/buttons.css" />
    <link rel="stylesheet" href="src/css/pdfViewer.css" />
    <link rel="stylesheet" href="src/css/pages.css" />
    <link rel="stylesheet" href="src/css/myKatexFont.css" />
    <link rel="stylesheet" href="src/css/64TetraPage.css" />

    <!-- GameObject.js needs to be first in order -->
    <script src="src/app/GameObject.js"></script>

    <script src="src/setup/Game.js"></script>
    <script src="src/setup/initMaterials.js"></script>
    <script src="src/setup/initAssets.js"></script>
    <script src="src/setup/initScene.js"></script>
    <script src="src/setup/initGame.js"></script>

    <script src="src/infoSystems/Sphere.js"></script>
    <script src="src/infoSystems/FruitOfLife.js"></script>
    <script src="src/infoSystems/MetatronsCube.js"></script>
    <script src="src/infoSystems/Tetra.js"></script>
    <script src="src/infoSystems/StarTetra.js"></script>
    <script src="src/infoSystems/TetrahedronGrid.js"></script>
    <script src="src/infoSystems/InfoSystem.js"></script>
    <script src="src/infoSystems/DoubleTorus.js"></script>
    <script src="src/infoSystems/Tree.js"></script>
    <script src="src/infoSystems/TreeConstants.js"></script>

    <script src="src/app/camZoom.js"></script>
    <script src="src/app/SnowFlake.js"></script>
    <script src="src/app/createSettingsPanel.js"></script>
    <script src="src/app/geogebra.js"></script>
    <script src="src/app/skills.js"></script>
    <script src="src/app/HitBox.js"></script>
    <script src="src/app/HitPlane.js"></script>
    <script src="src/app/geogebraBtnClick.js"></script>

    <script src="src/effects/fog.js"></script>
    <script src="src/effects/spotlight.js"></script>
    <script src="src/effects/dust.js"></script>
    <script src="src/effects/lightrays.js"></script>
    <script src="src/effects/orbs.js"></script>

    <script src="src/lines/line2D.js"></script>
    <script src="src/lines/multiLines2D.js"></script>
    <script src="src/lines/THGLines2D.js"></script>
    <script src="src/lines/MetaCubeLines2D.js"></script>
    <script src="src/lines/FlowerOfLife2DLines.js"></script>

    <script src="src/pages/loadHomePage.js"></script>
    <script src="src/pages/loadMetatronPage.js"></script>
    <script src="src/pages/loadMusicPage.js"></script>
    <script src="src/pages/load64TetraPage.js"></script>
    <script src="src/pages/setupPages.js"></script>
    <script src="src/pages/setGUI.js"></script>

    <script src="src/utils/OverlayScrollbars.min.js"></script>
    <script src="src/utils/flyToPosition.js"></script>
    <script src="src/utils/mathJaxConfig.js"></script>
    <script src="src/utils/modal.js"></script>
    <!-- <script src="src/utils/initEmbla.js"></script> -->

    <script src="src/debug/fresnelGUI.js"></script>
    <script src="src/debug/fresnelGUI2.js"></script>
    <script src="src/debug/visualAids.js"></script>

    <script src="src/model/skillData.js"></script>
    <script src="src/model/equationData.js"></script>
    <script src="src/model/infoSystemData.js"></script>
</head>

<body>

    <!-- login -->
    <div id="A_simpleModal" class="A_modal">

        <div id="A_profilePage" style="color: white;">

            <span class="A_closeModal">&times;</span>

            <span id="A_ProfileTitle"></span>

            <div class="A_profileScroll">
                <div class="embla">
                    <div class="embla__viewport">
                        <div class="embla__container">
                            <div class="embla__slide">
                                <div class="embla__slide__inner">
                                    <div class="card">
                                        <div class="card__inner">
                                            <div class="card__face card__face--front">
                                                <span class="A_firstLetter">A</span>
                                                rMiNiA
                                            </div>
                                            <div class="card__face card__face--back">
                                                <img class="embla__slide__img"
                                                    src="src/assets/images/cards/card2.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide">
                                <div class="embla__slide__inner">
                                    <div class="card">
                                        <div class="card__inner">
                                            <div class="card__face card__face--front">
                                                <span class="A_firstLetter">A</span>
                                                    rMiNiA
                                            </div>
                                            <div class="card__face card__face--back">
                                                <img class="embla__slide__img"
                                                    src="src/assets/images/cards/card2.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide">
                                <div class="embla__slide__inner">
                                    <div class="card">
                                        <div class="card__inner">
                                            <div class="card__face card__face--front">
                                                <span class="A_firstLetter">A</span>
                                                    rMiNiA
                                            </div>
                                            <div class="card__face card__face--back">
                                                <img class="embla__slide__img"
                                                    src="src/assets/images/cards/card2.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide">
                                <div class="embla__slide__inner">
                                    <div class="card">
                                        <div class="card__inner">
                                            <div class="card__face card__face--front">
                                                <span class="A_firstLetter">A</span>
                                                    rMiNiA
                                            </div>
                                            <div class="card__face card__face--back">
                                                <img class="embla__slide__img"
                                                    src="src/assets/images/cards/card2.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide">
                                <div class="embla__slide__inner">
                                    <div class="card">
                                        <div class="card__inner">
                                            <div class="card__face card__face--front">
                                                <span class="A_firstLetter">A</span>
                                                    rMiNiA
                                            </div>
                                            <div class="card__face card__face--back">
                                                <img class="embla__slide__img"
                                                    src="src/assets/images/cards/card2.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="embla__slide">
                                <div class="embla__slide__inner">
                                    <div class="card">
                                        <div class="card__inner">
                                            <div class="card__face card__face--front">
                                                <span class="A_firstLetter">A</span>
                                                    rMiNiA
                                            </div>
                                            <div class="card__face card__face--back">
                                                <img class="embla__slide__img"
                                                    src="src/assets/images/cards/card2.svg" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button class="embla__button embla__button--prev" type="button">
                        <svg class="embla__button__svg" viewBox="137.718 -1.001 366.563 643.999">
                            <path
                                d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z">
                            </path>
                        </svg>
                    </button>

                    <button class="embla__button embla__button--next" type="button">
                        <svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
                            <path
                                d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z">
                            </path>
                        </svg>
                    </button>

                    <div class="embla__dots"></div>

                    <script type="text/template" id="embla-dot-template">
                        <button class="embla__dot" type="button"></button>
                    </script>

                </div> 

                <div class="A_profileBody">
                    <div>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ipsum blanditiis incidunt, odit
                        quia beatae facilis assumenda ea voluptate quasi at recusandae quas rerum doloribus harum
                        necessitatibus vel! Porro accusantium rerum sed quaerat numquam sapiente molestias? Nam pariatur
                        expedita molestias officia sed ipsum animi. Ad saepe alias reiciendis ducimus quo perferendis
                        fugiat vel vero sunt laborum molestias rem reprehenderit suscipit quibusdam dicta voluptatibus
                        distinctio quia, recusandae amet velit, consectetur omnis iure aliquid! Deleniti doloremque
                        fugit nisi, minus iste dicta, ut totam mollitia tempora eius soluta voluptatem accusantium
                        veniam ullam facilis enim molestias in, voluptate officia aliquid consequatur facere?<br><br>Est
                        dicta placeat cum consequuntur cupiditate dolores, sapiente minima voluptates exercitationem et
                        nulla odio magni in sit aliquam nihil! Vero perspiciatis eos dolore ullam necessitatibus
                        pariatur quaerat facere obcaecati. Eum dicta corporis voluptas quia harum in facere tenetur
                        explicabo fuga eaque, rerum magnam omnis vitae tempore? Animi inventore aspernatur voluptas?
                        Tenetur exercitationem, velit hic eos obcaecati quidem, repudiandae nulla corporis nesciunt
                        porro ipsam? <br><br>Ab cum reprehenderit, ipsum pariatur illum officiis doloribus cumque
                        excepturi consequatur sunt maxime veniam deleniti totam earum quisquam ipsa voluptatibus culpa
                        vitae! Incidunt debitis suscipit quos impedit doloremque odit! Explicabo voluptas, ipsa numquam
                        illum voluptatem quam necessitatibus amet deleniti ratione quos recusandae iure quasi doloremque
                        impedit dolor id odit obcaecati nostrum vero pariatur tempora dignissimos eligendi! Id
                        laudantium recusandae neque quasi vitae! Magni possimus doloremque deleniti, quis, itaque
                        tempora optio placeat, repellat vero eligendi modi soluta nobis iusto voluptatibus excepturi non
                        aliquam pariatur! <br><br>Alias dolores hic, tempore, facilis nobis dolorum optio a pariatur
                        laboriosam ratione dignissimos voluptates rerum neque debitis fugit corporis doloremque vel eius
                        voluptatem veniam minus veritatis delectus iste molestias? Vero, assumenda. Necessitatibus
                        delectus sequi autem similique sint ipsam deleniti fugit ex repellendus explicabo consequatur,
                        suscipit quod possimus nulla quam veniam incidunt perspiciatis. Laboriosam nisi eius, asperiores
                        consectetur, reiciendis sunt a cum autem sapiente doloribus quos laudantium quaerat neque
                        aspernatur earum velit expedita tempore beatae quam ullam animi cumque? <br><br>Porro, aperiam
                        officiis ullam similique repudiandae exercitationem quis, suscipit quam laborum, tempore sunt
                        corrupti itaque facere hic sequi! Libero placeat sequi reprehenderit, provident veritatis
                        repellendus dolorum eaque neque quidem nemo est quaerat voluptatum numquam perferendis dolorem
                        ea distinctio earum ipsa voluptates itaque assumenda quia deleniti rem temporibus. Quo
                        repellendus veritatis voluptas amet, dicta quae quis facere corrupti ipsam accusamus reiciendis
                        natus, cumque quia eos, distinctio quas esse autem maxime? Voluptas quaerat animi eius similique
                        ea ad illo tenetur maxime sequi rem adipisci soluta obcaecati excepturi voluptates quos dolores
                        sit, labore, deserunt error! Eos ullam nemo aliquid est, impedit voluptatem harum vitae eaque
                        nesciunt iure facere perferendis maiores, quasi error nam incidunt corrupti neque enim
                        consequatur eius amet, deserunt nostrum ipsum id? Maiores, neque. <br><br>Nam aliquid quaerat
                        modi ducimus ad. Impedit ea, sit sunt debitis atque sapiente. Inventore ut tempora illum at
                        alias similique voluptatibus sint ad delectus amet, optio dolores, eaque tenetur dignissimos
                        voluptatum dolore accusamus animi unde praesentium aspernatur? Quasi numquam, cumque obcaecati
                        saepe dignissimos quis voluptas atque aliquam porro temporibus id est quisquam vero et officia
                        ad a voluptate aut. Delectus, harum maiores alias ipsum est placeat veniam distinctio aliquid
                        culpa. Dolorum laudantium fugit ea qui quidem magnam aperiam est hic vero, autem incidunt
                        voluptates modi totam et tempore sapiente blanditiis praesentium laborum nobis fuga numquam ad.
                        Soluta expedita nesciunt sed porro alias nobis, commodi a. Sapiente ea nulla inventore vel
                        officiis odit saepe dignissimos rem ipsum minima possimus voluptatem provident, est deleniti?
                        <br><br>Aliquid dolores ea dolor consequuntur hic, debitis dignissimos distinctio nam tempora
                        laborum, tempore, non quae et voluptas natus id dicta corrupti. Unde blanditiis quibusdam quasi
                        doloremque dignissimos corporis, ut nobis veritatis sapiente, nemo hic? Perferendis optio
                        consectetur modi, eveniet placeat magni provident, nam in id odit nihil dolorum cum iusto
                        quaerat dolore molestias non, ratione expedita libero. Perspiciatis quos mollitia vel
                        dignissimos, exercitationem, animi necessitatibus temporibus omnis consequuntur distinctio,
                        repudiandae itaque dolorem aut asperiores at. Beatae, cumque? Odio nam laboriosam iure natus
                        consequatur. Incidunt quaerat doloribus illum repudiandae veniam suscipit cumque alias
                        laudantium animi quia! Nam explicabo nostrum dignissimos amet libero. Provident dolor
                        praesentium perspiciatis nihil voluptatem error deserunt blanditiis saepe, expedita quibusdam
                        possimus omnis dolorum, illo at eius dignissimos reiciendis hic aperiam cumque ut dolore odit
                        molestias numquam. Ipsam soluta explicabo alias molestias repellendus quo odit modi esse
                        voluptatibus tempora consequatur ipsa temporibus ipsum sit eligendi assumenda et, ex commodi
                        voluptate incidunt facilis veritatis magni delectus veniam. <br><br>Eligendi rerum quasi eum
                        laudantium, a fugit minima nemo unde mollitia voluptate tenetur! Fugit neque, explicabo nemo,
                        sed, minus totam odit earum rem natus quo facilis. Minima magnam nostrum asperiores debitis
                        culpa commodi voluptas perspiciatis minus! Non dicta cum dolore praesentium esse excepturi nulla
                        suscipit quo temporibus vel nisi, tempora aliquid iste? Veritatis ab asperiores perferendis sed
                        omnis voluptate, neque minus maxime numquam praesentium iusto eum tenetur architecto similique
                        tempora labore soluta. Aut commodi, voluptates itaque tempore cupiditate suscipit odio eveniet
                        fugit. Unde totam suscipit dolor perspiciatis ab! Assumenda quae tempore voluptatibus deserunt
                        maxime debitis non repellat nemo reiciendis at? Minus tempore animi pariatur molestiae
                        consequatur culpa ipsum. Commodi possimus iste saepe veritatis dolorem itaque, deleniti
                        quibusdam eos impedit omnis veniam tenetur. Saepe eos ullam totam, corporis nostrum voluptatum
                        doloremque nihil iure ea aut, excepturi sapiente neque debitis error repellat, enim culpa
                        dolorum sint ipsum esse? Corrupti impedit necessitatibus aperiam maxime provident dolore ab
                        deleniti nostrum blanditiis quo ratione in illum commodi incidunt dicta nobis similique hic
                        assumenda, officiis quibusdam expedita? <br><br>Voluptatum, delectus quam accusamus similique in
                        qui. Ipsam vero, a maiores fugit fugiat aspernatur, vitae necessitatibus unde maxime laborum in
                        iusto quos cum numquam, illum repudiandae omnis. Rem in sequi delectus officiis temporibus
                        tenetur quas dicta repudiandae aperiam quis neque sed deserunt, nesciunt, cum quos commodi
                        aliquid illum non repellendus voluptatum quae, debitis expedita distinctio. Quibusdam, dolore.
                        Dolor, neque incidunt officia amet nisi velit necessitatibus provident rem expedita ipsum vero
                        assumenda debitis consequatur aliquid fugiat asperiores sapiente explicabo! Repellendus ullam
                        beatae illo ipsum quia cumque voluptatem exercitationem mollitia libero, minus omnis unde
                        temporibus odio nostrum, incidunt, tenetur illum vero ad quibusdam deserunt. Illo, sed.
                    </div>
                </div>                

            </div>

        </div>

        <div id="A_loginBox">

            <span class="A_closeModal">&times;</span>
            <span id="A_loginBoxTitle">Log In</span>
            <form action="" method="post" role="form" id="A_loginForm">
                <div class="A_textbox">
                    <input type="text" id="usernameBox" name="username" placeholder="Username" required minlength="2">
                </div>
                <div class="A_textbox">
                    <input type="password" id="passBox" name="password" placeholder="Password" required minlength="6">
                </div>
                <div id="A_forgotAndRegister">
                    <p id="A_newUser">New User?
                        <a href="#" id="A_registerLink">Register</a>
                    </p>
                    <p>
                        <a href="#" id="A_resetLink">Forgot Password</a>
                    </p>
                </div>
                <input id="A_loginBtn" type="submit" name="login" value="Log In">
            </form>

            <div id="A_loginMsgBox">
                <p class="A_loginRsultMsg"></p>
            </div>

        </div>

        <div id="A_registerBox">

            <span class="A_closeModal">&times;</span>
            <span id="A_loginBoxTitle">Register</span>
            <form action="" method="post" role="form" id="A_registerForm">

                <div class="A_textbox">
                    <input type="text" name="uname" placeholder="Username" required minlength="4">
                </div>

                <div class="A_textbox">
                    <input type="email" name="email" placeholder="E-mail" required>
                </div>

                <div class="A_textbox">
                    <input type="password" name="pass" id="pass" placeholder="Password" required minlength="6">
                </div>

                <div class="A_textbox">
                    <input type="password" name="cpass" id="cpass" placeholder="Confirm Password" required
                        minlength="6">
                </div>

                <div class="g-recaptcha" data-sitekey="6Le0n4sdAAAAAH653fWnJaWmpvvglaPInq25H6uL"></div>

                <input id="A_registerBtn" type="submit" name="register" value="Register">

                <p id="A_register">Already registered?
                    <a href="#" id="A_loginLink">Sign In here</a>
                </p>

            </form>
            <div id="A_registerMsgBox">
                <p class="A_loginRsultMsg"></p>
            </div>

        </div>

        <div id="A_resetBox">
            <span class="A_closeModal">&times;</span>
            <span id="A_loginBoxTitle">Reset Password</span>
            <form action="" method="post" role="form" id="A_resetForm">
                <div id="A_resetMsg">
                    Enter your email address. A link to reset your password will be emailed to you shortly.
                </div>
                <div class="A_textbox">
                    <input type="email" name="femail" placeholder="E-mail" required>
                </div>

                <div class="g-recaptcha" data-sitekey="6Le0n4sdAAAAAH653fWnJaWmpvvglaPInq25H6uL"></div>

                <input id="A_resetBtn" type="submit" name="reset" value="Reset Password">
                <p id="A_back">
                    <a href="#" id="A_backLink">Back</a>
                </p>
            </form>
            <div id="A_resetMsgBox">
                <p class="A_loginRsultMsg"></p>
            </div>
        </div>

        <div id="A_info">

            <span class="A_closeModal" style="position: relative;">&times;</span>
            
            <div class="A_titleContainer" style="margin-top: 1vw;">
                <img src="src/assets/images/final4.svg" alt="" id="A_titleModal">
                <img src="src/assets/images/swish1.svg" alt="" id="A_swish2">
            </div>

            <div id="A_titleText">
                Arminia is best viewed in Firefox<br>for its clear SVG rendering
            </div>
            
            
            <div id="A_licenseText">
                Copyright 2022, Ian Hicks
                <br>                
                <a href="url">http://www.gnu.org/licenses/</a>
                <br><br>
                Contact
                <br>
                admin@arminia.com.au
                <br><br>
                GitHub Repository
                <br>
                <a href="url">https://github.com/Ian19/Arminia</a>
            </div>

        </div>

        <script>
        $(document).ready(function() {

            var password = $("#pass")[0];
            var confirm_password = $("#cpass")[0];

            function validatePassword() {
                if (password.value != confirm_password.value) {
                    confirm_password.setCustomValidity("Passwords Don't Match");
                } else {
                    confirm_password.setCustomValidity('');
                }
            }

            password.onchange = validatePassword;
            confirm_password.onkeyup = validatePassword;

            $("#A_registerLink").click(function() {
                $("#A_loginBox").hide();
                $("#A_registerBox").css("display", "flex");
            });

            $("#A_loginLink").click(function() {
                $("#A_registerBox").hide();
                $("#A_loginBox").css("display", "flex");
            });

            $("#A_resetLink").click(function() {
                $("#A_loginBox").hide();
                $("#A_resetBox").css("display", "flex");
            });

            $("#A_backLink").click(function() {
                $("#A_resetBox").hide();
                $("#A_loginBox").css("display", "flex");
            });

            $("#A_registerBtn").click(function(e) {

                if (document.getElementById("A_registerForm").checkValidity()) {
                    e.preventDefault();
                    // $("#loader").show();

                    $.ajax({
                        url: "action.php",
                        method: "post",
                        data: $("#A_registerForm").serialize() + "&action=register",
                        success: function(response) {
                            $("#A_registerMsgBox").show();
                            $(".A_loginRsultMsg").text(response);
                            // $("#loader").hide();
                        }
                    });
                }
                return true;
            });

            $("#A_loginBtn").click(function(e) {

                if (document.getElementById("A_loginForm").checkValidity()) {
                    e.preventDefault();
                    // $("#loader").show();

                    $.ajax({
                        url: "action.php",
                        method: "post",
                        data: $("#A_loginForm").serialize() + "&action=login",
                        success: function(response) {

                            if (response === "ok") {

                                // console.log("ok");
                                document.activeElement.blur();
                                $("#usernameBox").val("");
                                $("#passBox").val("");

                                $("#A_simpleModal").css("display", "none");
                                $("#A_loginIcon").text("LOG OUT");

                            } else {

                                // console.log("BAD");
                                // console.log(response);
                                $("#A_loginMsgBox").show();
                                $(".A_loginRsultMsg").text(response);

                                // $("#loader").hide();

                            }
                        }
                    });
                }
                return true;
            });

            $("#A_resetBtn").click(function(e) {

                if (document.getElementById("A_resetForm").checkValidity()) {
                    e.preventDefault();
                    // $("#loader").show();

                    $.ajax({
                        url: "action.php",
                        method: "post",
                        data: $("#A_resetForm").serialize() + "&action=forgot",
                        success: function(response) {
                            // console.log(response);
                            $("#A_resetMsgBox").show();
                            $(".A_loginRsultMsg").text(response);
                            // $("#loader").hide();
                        }
                    });
                }
                return true;
            });

        });
        </script>

    </div>

    <canvas id="A_gameCanvas"></canvas>

    <!-- GUI -->
    <div class="A_GUIContainer">

        <div class="A_titleContainer">
            <!-- <span id="spanClick"> -->
                <img src="src/assets/images/final4.svg" alt="" id="A_title">
            <!-- </span> -->

            <img src="src/assets/images/swish1.svg" alt="" id="A_swish">
        </div>


        <div id="A_homePage">

            <!-- <div id="skillIntroText">
                Explore Reality using the sacred geometry of the Information Systems of the Fruit of Life.<br>
                Track your progress with the Skill Tree and unlock more complex geometric constructions and scientific
                papers.<br>
            </div> -->
            
            <div id="skillIntroText">
                Track your progress with the Skill Tree and unlock more complex geometric constructions and scientific
                papers.<br>
            </div>

            <div id="A_skillsContainer">

                <div id="A_svgContainer"></div>

                <div id="A_SkillTextTitle">
                    SKILL TREE
                    <div id="A_SkillTextTitleSub">
                        LEVEL: 0 <br>
                        COMPLETED: 0 <br>
                        INCOMPLETE: 216
                    </div>
                </div>

                <div id="A_mouseMovementIcon">
                    <img src="src/assets/images/mouse_movement.png" id="A_mouse_movement"></img>
                </div>

                <div class="A_mouseZoomIcon">
                    <img src="src/assets/images/mouse_zoom.png" id="A_mouse_zoom"></img>
                </div>

            </div>

            <div id="A_skillSelectText">No Skill Selected. Select a Skill and press Start to begin.</div>

            <div class="A_detailGrid" id="A_detailGridID">

                <div class="A_column1">
                    <div class="A_item">
                        <img id="A_detailImage" src="" alt=""></img>
                    </div>
                </div>

                <div class="A_column2">
                    <div class="A_item">
                        <div id="A_detailTitle"></div>
                        <div class="A_Difficulty" id="A_skillDifficulty"></div>
                        <div id="A_detailRequirement"></div>

                        <div class="flex-container">
                            <span class="A_detailsButton A_detailsButtonText" id="A_detailBtn">START</span>
                        </div>

                    </div>
                </div>

                <div class="A_column3" id="A_col3"></div>
                <div class="A_column4" id="A_col4"></div>

                <div class="A_column5">
                    <div class="A_item">
                        <div display="inline" class="A_detailOverview" id="katexTest1"></div>
                        <div id="A_detailQuote"></div>
                        <div id="A_detailQuotee"></div>
                    </div>
                </div>
            </div>


        </div>

        <div id="A_proxyView"></div>
<!-- 
        <div id="A_64TetraView" class="A_scroll2">

            <div class="A_header1">The 64 Tertrahedron Grid</div>

                <br>

                <div id="A_pageBody">
                    <p style="text-indent: 25px;">
                        Developed by Nassim Harramein, the 64 Tetrahedron Grid is theorised to describe the structure of
                        space or the vacuum.

                        It is the core concept of a Grand Unified Theory between quantum theory and with Einstein's general
                        theory of relativity.

                        The 64 Tetrahedron Grid is an evolution of the Vector Equilibrium - Isotropic Vector Matrix system
                        brought forward by Buckminster Fuller.

                        However if differs to this system in that a dual IVM is added so that a balance in polarity is
                        produced.
                    </p>
                </div>


            <div class="embla">
                <div class="embla__viewport">
                    <div class="embla__container">
                        <div class="embla__slide">
                            <div class="embla__slide__inner">
                                <div class="card">
                                    <div class="card__inner">
                                        <div class="card__face card__face--front">


                                            <h2>ARMINIA</h2>

                                            <div class="card__header">
                                                <img src="src/assets/images/cards/genesisMini.svg" alt="" class="pp" />

                                            </div>
                                            
                                            
                                        </div>
                                        <div class="card__face card__face--back">
                                            <div class="card__content">
                                                <div class="card__header">
                                                    <img src="src/assets/images/skills/64-tetra-grid3DViewIVM.svg" alt="" class="pp" />
                                                    <h2>ARMINIA</h2>
                                                </div>
                                                <div class="card__body">
                                                    <h3>The Genesis Pattern</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="embla__slide__inner">
                                <div class="card">
                                    <div class="card__inner">
                                        <div class="card__face card__face--front">
                                            <h2>ARMINIA</h2>
                                        </div>
                                        <div class="card__face card__face--back">
                                            <div class="card__content">
                                                <div class="card__header">
                                                    <img src="src/assets/images/cards/genesisMini.svg" alt="" class="pp" />
                                                    <h2>ARMINIA</h2>
                                                </div>
                                                <div class="card__body">
                                                    <h3>The Genesis Pattern</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="embla__slide__inner">
                                <div class="card">
                                    <div class="card__inner">
                                        <div class="card__face card__face--front">
                                            <h2>ARMINIA</h2>
                                        </div>
                                        <div class="card__face card__face--back">
                                            <div class="card__content">
                                                <div class="card__header">
                                                    <img src="src/assets/images/cards/genesisMini.svg" alt="" class="pp" />
                                                    <h2>ARMINIA</h2>
                                                </div>
                                                <div class="card__body">
                                                    <h3>The Genesis Pattern</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="embla__slide__inner">
                                <div class="card">
                                    <div class="card__inner">
                                        <div class="card__face card__face--front">
                                            <h2>ARMINIA</h2>
                                        </div>
                                        <div class="card__face card__face--back">
                                            <div class="card__content">
                                                <div class="card__header">
                                                    <img src="src/assets/images/cards/genesisMini.svg" alt="" class="pp" />
                                                    <h2>ARMINIA</h2>
                                                </div>
                                                <div class="card__body">
                                                    <h3>The Genesis Pattern</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="embla__slide">
                            <div class="embla__slide__inner">
                                <div class="card">
                                    <div class="card__inner">
                                        <div class="card__face card__face--front">
                                            <h2>ARMINIA</h2>
                                        </div>
                                        <div class="card__face card__face--back">
                                            <div class="card__content">
                                                <div class="card__header">
                                                    <img src="src/assets/images/cards/genesisMini.svg" alt="" class="pp" />
                                                    <h2>ARMINIA</h2>
                                                </div>
                                                <div class="card__body">
                                                    <h3>The Genesis Pattern</h3>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                <button class="embla__button embla__button--prev" type="button">
                    <svg class="embla__button__svg" viewBox="137.718 -1.001 366.563 643.999">
                        <path
                            d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z">
                        </path>
                    </svg>
                </button>

                <button class="embla__button embla__button--next" type="button">
                    <svg class="embla__button__svg" viewBox="0 0 238.003 238.003">
                        <path
                            d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z">
                        </path>
                    </svg>
                </button>

                
                <div class="embla__dots"></div>

                <script type="text/template" id="embla-dot-template">
                    <button class="embla__dot" type="button"></button>
                </script>

            </div>


            <div class="A_64Tetra3DContainer3">

                <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                    data="src/assets/images/skills/64-tetra-grid3DViewIVM.svg"></object>


                <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                    data="src/assets/images/skills/64-tetra-grid3DViewIVMDual.svg"></object>

                <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                    data="src/assets/images/skills/64-tetra-grid3DViewVE.svg"></object>


                <div>
                    <div class="A_64TetraNodeTitle">
                        The Isotropic Vector Matrix
                    </div>
                    <div class="A_64TetraNodeSteps">
                        MEDIUM | 31 STEPS
                    </div>
                </div>

                <div>
                    <div class="A_64TetraNodeTitle">
                        The IVM and it's dual IVM
                    </div>
                    <div class="A_64TetraNodeSteps">
                        MEDIUM | 31 STEPS
                    </div>
                </div>

                <div>
                    <div class="A_64TetraNodeTitle">
                        The Vector Equilibrium
                    </div>
                    <div class="A_64TetraNodeSteps">
                        HARD | 55 STEPS
                    </div>
                </div>


            </div>


        </div>

 -->


        <div id="A_64TetraView" class="A_scroll2">

            <div class="A_header1">The 64 Tertrahedron Grid</div>
            <br>
            <div id="A_pageBody">
                <p style="text-indent: 25px;">

                    Developed by Nassim Harramein, the 64 Tetrahedron Grid is theorised to describe the structure of
                    space or the vacuum.

                    It is the core concept of a Grand Unified Theory between quantum theory and with Einstein's general
                    theory of relativity.

                    The 64 Tetrahedron Grid is an evolution of the Vector Equilibrium - Isotropic Vector Matrix system
                    brought forward by Buckminster Fuller.

                    However if differs to this system in that a dual IVM is added so that a balance in polarity is
                    produced.

                </p>

                <div class="A_64Tetra3DContainer3">

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DViewIVM.svg"></object>


                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DViewIVMDual.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DViewVE.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            The Isotropic Vector Matrix
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            The IVM and it's dual IVM
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            The Vector Equilibrium
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>


                </div>

                <br><br>

                <p style="text-indent: 25px;">
                    We begin with Buckminster Fuller's synergistic geometry and his Vector Equilibrium (VE),
                    representing the Universe and consisting of 8 inward pointing tetrahedrons.

                    This is a non-polarised state of equilibrium representing the dynamic of energy going towards the
                    singularity at the center.

                    By adding a dual outward pointing tetrahedron, we begin the process of polarising the VE.

                    Doing this for all eight tetrahedrons results in the 64 Tetrahedron Grid.

                </p><br>


                <div class="A_64Tetra3DContainer3">

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraInwardVE.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraPolarisedVE.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3D8StarFill2.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            Inward Pointing Non-polarised VE
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            VE with 1 outward pointing dual Tetrahedron
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Polarised VE with 8 dual Tetrahedrons
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>
                </div>

                <br><br>

                <div class="A_64Tetra3DContainer">

                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DView1.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DView2.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DView3.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DView4.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 1 3D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 66 STEPS
                        </div><br><br>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 2 3D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 62 STEPS
                        </div><br><br>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 3 3D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div><br><br>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 4 3D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 35 STEPS
                        </div><br><br>
                    </div>


                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DFull.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DView2Full.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DView3Full.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize1" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DView4.svg"></object>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 1 2D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 51 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 2 2D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 3 2D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            View 4 2D
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>
                </div>

                <br><br>

                <p style="text-indent: 25px;">
                    The 64 Tetrahedron Grid now has a balance of polarity in the following ways:

                    The first way is that there are 32 upward pointing and 32 downward pointing terahedrons.

                    The second way is that we have 8 outward pointing and 8 inward pointing tetrahedrons

                    representing the contracting (gravitational) and expanding (radiational) dynamics.

                    These 16 tetrahedrons are twice the size of the other 64 tetrahedra and form 8 Star tetrahedrons and
                    1 prime star tetrahedron.

                </p>

                <div class="A_64Tetra3DContainer2">

                    <object class="A_64Tetra3D A_64Tetra3DSize3" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3D8StarFill2.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize3" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3D8Stars.svg"></object>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            The Prime Star Tetrahedron
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            8 Star Tetrahedrons
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>
                </div>

                <br><br>

                <p style="text-indent: 25px;">

                    The 64 Tetrahedron Grid is a 3D fractal strutcure that grows or divides by octaves, meaning it
                    doubles or halves its volume.

                    It defines the divisions of space which form the boundaries of all structures from infinetly large
                    to infinetly small.

                    This would suggest that it is negative space which defines boundaries, rather than the positive
                    space.

                </p>

                <div class="A_64Tetra3DContainer2">

                    <object class="A_64Tetra3D A_64Tetra3DSize3" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-gridUniverse3.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize3" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-gridOctaveVE.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            The Fruit of Life<br>Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            The Vector Equilibrium<br>Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>
                </div>
                <br><br>

                <div class="A_64Tetra3DContainer3">


                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraSphere.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraTetra.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraCube.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            Sphere Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div><br><br>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tetrahedron Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div><br><br>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Cube Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div><br><br>
                    </div>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraOcta.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraIco.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraDodec.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            Octahedron<br>Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Icosahedron<br>Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Dodecahedron<br>Octave Division
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>

                </div>

                <br><br>

                <p style="text-indent: 25px;">

                    If space is shaped like a vector equilibrium which is capable of dividing to the
                    planck scale,

                    then this would suggest the infinite density of a singularity at it's center.

                    These mini-black holes exisitng at the quantum level would then be the source of all gravity.

                    This idea is further supportted by the balance of inward (gravitational) and outward (radiational)
                    pointing tetrahedral dynamics,

                    forming the boundary of the event horizon.

                    With the vector equilibrium structure, all forces are cancelled out, producing what appears as
                    "empty" space.

                </p><br>

                <div class="A_64Tetra3DContainer3">

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraTree1.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraTreeExpanded.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraTreeContracted.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            8 Star Tetrahedrons<br>
                            radiating Outwards
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            8 Star Tetrahedrons<br>
                            Compressed Inwards
                        </div>
                        <div class="A_64TetraNodeSteps">
                            HARD | 55 STEPS
                        </div>
                    </div>
                </div>
                <br><br>


                <p style="text-indent: 25px;">

                    When the gyroscopic effect (torque and the coriolis effect) is added to General Relativity, the
                    black whole is no longer shaped like a sphere, but like a double torus.

                    At the center of the torus is space or singularity.

                    Each tetrahedron of the prime star tetrahedron represents a polarity of the coriolis effect.

                    When they come together to form the vector equilibrium, the double torus and the singularity are
                    produced.

                    All of Creation then emerges from within this singularity.

                </p>

                <div class="A_64Tetra3DContainer3">

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraVETorus.svg "></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DViewIVMSphere.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64-tetra-grid3DViewIVMDualSpheres.svg"></object>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            VE Torus
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>
                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                </div><br>


                <div class="A_64Tetra3DContainer3">

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraView2DoubleTorus.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64Tetra3DView1DoubleTorus.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraView2DoubleTorus2.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>


                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraView2DoubleTorusCircles.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64Tetra3DView1DoubleTorusCircles.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64TetraView2DoubleTorusCircles.svg"></object>


                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64Tetra3DView27Nest.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64Tetra3DView27NestCircles.svg"></object>

                    <object class="A_64Tetra3D A_64Tetra3DSize2" type="image/svg+xml"
                        data="src/assets/images/skills/64Tetra3DView2FullTorus2.svg"></object>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                </div>

                <div class="A_64Tetra3DContainer2">

                    <object style="width: 50%;" class="A_64Tetra3D" type="image/svg+xml"
                        data="src/assets/images/skills/64Tetra3DView2FullTorus3.svg"></object>

                    <object style="width: 50%;" class="A_64Tetra3D" type="image/svg+xml"
                        data="src/assets/images/skills/64Tetra3DView2FullTorus.svg"></object>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                    <div>
                        <div class="A_64TetraNodeTitle">
                            Tree of Life
                        </div>
                        <div class="A_64TetraNodeSteps">
                            MEDIUM | 31 STEPS
                        </div>
                    </div>

                </div><br>


                <div class="A_header1">The Schwarzschild Proton</div>
                <br>
                <p style="text-indent: 25px;">

                    Nassim Haramein's paper "The Schwarzschild Proton" presents a new solution for the mass of the
                    proton that is much heavier than that which the standard model predicts. While the standard proton
                    has a mass

                    <span id="tex64Tetra1">
                        <script>
                        katex.render(" 10^{-24}", $("#tex64Tetra1")[0])
                        </script>
                    </span>

                    grams the proton that Nassim Haramein's equations describe have a mass of

                    <span id="tex64Tetra2">
                        <script>
                        katex.render(" 10^{14}", $("#tex64Tetra2")[0]);
                        </script>
                    </span>

                    grams - a difference of 38 orders of magnitude.
                </p>
                <br><br>
                <div class="protonflex-container">
                    <span class="A_protonButton A_protonButtonText" id="A_protonBtnID">THE SCHWARZSCHILD PROTON</span>
                </div>
            </div>
        </div>
        <div id="A_metatronView">
            <div class="A_header1">Metatron's Cube</div>
            <br>
            <div id="A_pageBody">Sacred geometry involves sacred universal patterns used in the design of everything in
                our
                reality, most often seen in sacred architecture and sacred art. The basic belief is that
                geometry and mathematical ratios, harmonics and
                proportion are also found in music, light, cosmology.
            </div>

        </div>
        <div id="A_musicView">
            <div class="A_header1">Music</div>
            <br>
            <div id="A_pageBody">Sacred geometry involves sacred universal patterns used in the design of everything in
                our
                reality, most often seen in sacred architecture and sacred art. The basic belief is that
                geometry and mathematical ratios, harmonics and
                proportion are also found in music, light, cosmology.
            </div>
        </div>

        <div id="A_geobebraView">

            <div id="A_subHeaderFlex">

                <div id="A_subHeader">

                    <div class="A_geoMenu">
                        <div class="A_btnContainer">
                            <span class="A_geogebraButton" id="A_constructionBtn">CONSTRUCTION</span>
                        </div>
                        <div class="A_btnContainer">
                            <span class="A_geogebraButton" id="A_overviewBtn">OVERVIEW</span>
                        </div>
                    </div>

                    <div id="A_geogebraIntroText">
                        Complete the Construction Steps to move on to the next challenge.<br>
                    </div>

                </div>

                <div id="A_stepsHeaderFlex">

                    <div id="A_stepsImageTitle"></div>
                    <div id="A_stepsImageDifficulty"></div>
                    <div id="A_stepsImageDefinition"></div>
                    <img src="src/assets/images/swish1.svg" alt="" id="A_stepsHeaderSwish">
                </div>
            </div>

            <div id="A_sharedContainer">

                <div id="applet_container" class="scaleContainerClass"></div>

                <div id="A_overviewContainer" class="A_overviewScroll">

                    <div>
                        <img id="A_geoDetailImage" src="" alt=""></img>
                        <div id="A_geoDetailTitle"></div>
                        <p id="test1">THE FLOWER OF LIFE SERIES</p>
                        <br>
                        <span id="A_geoDifficulty"></span>
                        <img src="src/assets/images/skills/minis/genesisMini.svg" id="A_geoMmini1" alt=""></img>
                        <img src="src/assets/images/skills/minis/sacredRootsMini.svg" id="A_geoMini2" alt=""></img>
                        <div id="A_geoDetailRequirement"></div>
                        <br>
                        <div id="A_geoDetailQuote"></div><br>
                        <div id="A_geoDetailQuotee"></div>
                        <br><br>
                        <div id="A_geoDetailDefinition"></div>
                        <br>
                    </div>

                    <div class="A_geoDetailBody" id="A_geoDetailBody2">
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo quod optio
                            porro sed quibusdam ea minima, praesentium dolor error soluta ratione possimus omnis
                            deleniti doloribus quas itaque voluptatem laboriosam eaque veritatis ducimus eveniet
                            ullam nam! Animi aut officia libero temporibus dicta maiores eveniet, facere
                            necessitatibus, nulla voluptas architecto? Harum maxime alias ipsa sapiente!
                            Assumenda sint eum dolorem laborum dicta repellat omnis pariatur, facere officia,
                            vitae facilis dolores, temporibus a doloribus voluptatibus soluta id! Quis atque
                            provident magni, necessitatibus labore voluptatum esse commodi corporis harum
                            excepturi nulla adipisci, et dolores doloribus tempore.
                        </span>
                        <br>
                        <br>
                        <span>
                            Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                            consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                            debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                            Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                            incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                            alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                            recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                            praesentium consequatur consectetur eum expedita?
                        </span>
                        <br>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo quod optio
                            porro sed quibusdam ea minima, praesentium dolor error soluta ratione possimus omnis
                            deleniti doloribus quas itaque voluptatem laboriosam eaque veritatis ducimus eveniet
                            ullam nam! Animi aut officia libero temporibus dicta maiores eveniet, facere
                            necessitatibus, nulla voluptas architecto? Harum maxime alias ipsa sapiente!
                            Assumenda sint eum dolorem laborum dicta repellat omnis pariatur, facere officia,
                            vitae facilis dolores, temporibus a doloribus voluptatibus soluta id! Quis atque
                            provident magni, necessitatibus labore voluptatum esse commodi corporis harum
                            excepturi nulla adipisci, et dolores doloribus tempore.
                        </span>
                        <br>
                        <br>
                        <span>
                            Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                            consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                            debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                            Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                            incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                            alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                            recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                            praesentium consequatur consectetur eum expedita?
                        </span>
                        <br>
                        <span>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo quod optio
                            porro sed quibusdam ea minima, praesentium dolor error soluta ratione possimus omnis
                            deleniti doloribus quas itaque voluptatem laboriosam eaque veritatis ducimus eveniet
                            ullam nam! Animi aut officia libero temporibus dicta maiores eveniet, facere
                            necessitatibus, nulla voluptas architecto? Harum maxime alias ipsa sapiente!
                            Assumenda sint eum dolorem laborum dicta repellat omnis pariatur, facere officia,
                            vitae facilis dolores, temporibus a doloribus voluptatibus soluta id! Quis atque
                            provident magni, necessitatibus labore voluptatum esse commodi corporis harum
                            excepturi nulla adipisci, et dolores doloribus tempore.
                        </span>
                        <br>
                        <br>
                        <span>
                            Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                            consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                            debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                            Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                            incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                            alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                            recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                            praesentium consequatur consectetur eum expedita?
                        </span>
                        <br>
                    </div>
                </div>

                <div id="A_stepsImageFlex">

                    <object id="A_stepsBackgroundImage" type="image/svg+xml"> </object>

                    <object id="A_stepsImage" type="image/svg+xml"> </object>

                    <div id="A_stepsDivider"></div>

                    <div id="A_stepsContainer">

                        <div id="A_stepsCount"></div>
                        <div id="A_stepsBodyContainer">
                            <div id="A_stepsBody"></div>
                        </div>

                        <div id="A_stepsBarContainer">
                            <div id="A_steps">
                                <div id="A_stepsPercent">
                                    <div id="A_stepsProgress"></div>
                                </div>
                                <span id="A_stepsValue"></span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div class="A_btnContainer2">
                <span class="A_geogebraButton" id="A_backToSkillsBtn">BACK</span>
                <span class="A_geogebraButton" id="A_cheatBtnID">TEST CAS</span>
            </div>
        </div>
    </div>

    <!-- InfoSysHintText -->
    <div id="A_sysHintContainer">
        <div id="A_InfoSysHintText">
            <p id="A_infoSysMenuTitle">3D Viewer - The 13 Information Systems of The Fruit Of Life<br></p>
            <div id="A_InfoSysHintBullets">
                <p>• select an Information System<br></p>
                <p>• rotate and zoom the menu</p>
            </div>
        </div>
        <div id="A_infoSysInfo">
            <p id="A_infoSysTitle"></p>
            <div id="A_infoSysDifficulty"></div>
            <div id="A_infoSysOverview"></div>
        </div>
    </div>

    <!-- Sidebar -->
    <div>
        <input type="checkbox" id="A_sideBarBtn" checked="checked">
        <span class="A_sideBarBtnSpan">

            <?php
if (isset($_SESSION['id'])) {
    ?>

            <span data-target="#myModal" role="button" data-toggle="modal" id="A_loginIcon">LOG OUT</span>

            <?php } else {?>

            <span data-target="#myModal" role="button" data-toggle="modal" id="A_loginIcon">LOG IN</span>

            <?php }?>

            <div id="A_userContainer">
                <img id="A_userIcon" src="src/assets/images/user.svg" alt="">
                <span id="A_notification">•</span>
            </div>

            <label for="A_sideBarBtn" class="A_sideBarBtnLabel">
                <img id="A_menuIcon" src="src/assets/images/menu1.svg" alt="">
            </label>
        </span>

        <div id="A_sidebar" class="A_sidebar">

            <div id="A_sidebarGroupEnvironment">
                <div class="A_sidebarGrid">
                    <!-- <div class="A_sidebarSubTitle">ENVIRONMENT</div> -->
                    <div class="A_sidebarTitle">PERFORMANCE</div>
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox4" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox4">
                                    <object id="tick4" class="fa fa-check A_tick" data="src/assets/images/tick3.svg?"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label4">FOG</span>
                    </div>
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel" id="lblTest">
                                <input type="checkbox" id="checkbox5" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox5">
                                    <object id="tick5" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label5">DUST</span>
                    </div>
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel" id="lblTest">
                                <input type="checkbox" id="checkbox6" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox6">
                                    <object id="tick6" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label6">SPOTLIGHT</span>
                    </div>

                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel" id="lblTest">
                                <input type="checkbox" id="checkbox10" class="A_cb">
                                <span class="icon-box" id="iconBox10">
                                    <object id="tick10" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label8">AUTO-ROTATE</span>
                    </div>

                </div>
            </div>

            <div id="A_sidebarGroupHologram">
                <div class="A_sidebarGrid">
                    <div class="A_sidebarTitle">HOLOGRAM</div>

                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox0" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox0">
                                    <object id="tick0" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label0">2D GEOMETRY</span>
                    </div>

                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox9" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox9">
                                    <object id="tick9" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label9">3D GEOMETRY</span>
                    </div>


                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox1" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox1">
                                    <object id="tick1" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label1"> 3D OUTLINE</span>
                    </div>
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox2" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox2">
                                    <object id="tick2" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label2">FRUIT OF LIFE</span>
                    </div>
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox3" class="A_cb">
                                <span class="icon-box" id="iconBox3">
                                    <object id="tick3" style="cursor: pointer;" class="fa fa-check A_tick"
                                        data="src/assets/images/tick3.svg" type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label3">OPAQUE</span>
                    </div>

                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox11" class="A_cb">
                                <span class="icon-box" id="iconBox11">
                                    <object id="tick11" style="cursor: pointer;" class="fa fa-check A_tick"
                                        data="src/assets/images/tick3.svg" type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label11">TREES OF LIFE</span>
                    </div>
                    
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox12" class="A_cb">
                                <span class="icon-box" id="iconBox12">
                                    <object id="tick12" style="cursor: pointer;" class="fa fa-check A_tick"
                                        data="src/assets/images/tick3.svg" type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label12">DOUBLE TORUS</span>
                    </div>


                </div>
            </div>

            <div id="A_sidebarConstruction">
                <div class="A_sidebarGrid">
                    <div class="A_sidebarTitle">CONSTRUCTION</div>
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox7" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox7">
                                    <object id="tick7" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label7">BLINKING</span>
                    </div>
                    <div class="A_sidebarRow">
                        <div class="A_cbContainer">
                            <label class="A_cbLabel">
                                <input type="checkbox" id="checkbox8" class="A_cb" checked="checked">
                                <span class="icon-box" id="iconBox8">
                                    <object id="tick8" class="fa fa-check A_tick" data="src/assets/images/tick3.svg"
                                        type="image/svg+xml"></object>
                                </span>
                            </label>
                        </div>
                        <span class="A_labelText A_lbl" id="A_Label18">VERBOSE</span>
                    </div>
                </div>
            </div>

        </div>
    </div>
</body>
<script src="src/utils/initEmbla.js"></script>

</html>