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

    function skillData(game) {

        // const path = "../src/src/assets/images/skills/";

        function addNbsp(step) {
            const str = "<p>&nbsp;</p><p>&nbsp;</p>";
            step = str + step + str;
            return step;
        }

        game.skills.skillData = [
            {
                "id": 0,
                "elementID": "A_detailCircle",
                "zoomScale": 1,
                "material_id": "ybm744ww",
                "elements": [],

                // "steps": [["circle c, Circle(A, 1)"]],

                "steps": [
                    ["point A, ", "circle c, Circle(A, 1)"],
                    ["point B, Point(c)", "segment f, Segment(A, B)"],
                    ['text text1, AB=1']
                ],

                // "stepsText": [addNbsp("Draw Circle <b>c</b> with radius equal to <b>1</b> and with center at point <b>A</b>.")],

                "stepsText": [

                    addNbsp("Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1."),
                    addNbsp("Select the Segment tool and draw a Segment from point A to any point on the circumference of the circle, creating point B"),
                    addNbsp("Select the Text tool and enter 'AB=1'")

                ],

                "d3Data": ["hexStatus1Circle", "Complete1Circle"],
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "url2": "src/assets/images/skills/circleLarge.svg",
                "stepsImage": "src/assets/images/skills/details/detailCircle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  3 STEPS",
                "completed": false,
                "unlocked": true,
                "unlocksSkills": [1],
                "requirement": "(NO REQUIREMENT)",
                "overview": "A circle is a set of points on a plane that are equidistant from the circle's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus",
                // God is a circle whose centre is everywhere and whose circumference is nowhere' (Hermes Trismegistus)   
                "geoDetailBody": `                
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
                    </span><br><br>
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
                `
            }, {
                "id": 1,
                "elementID": "A_detailVesicaPiscis",
                "material_id": "ybm744ww",
                "elements": [],
                "zoomScale": 1.5,
                "steps": [
                    ["point A, ", "circle c, Circle(A, 1)"],
                    ["point B, Point(c)", "segment f, Segment(A, B)"],
                    ["circle d, Circle(B, A)"],
                    ["point C, Intersect(c, d, 1)"],
                    ["point D, Intersect(c, d, 2)"],
                    ["segment g, Segment(C, D)"],
                    ["point E, Intersect(f, g)"],
                    ["segment h, Segment(B, D)"],
                    ['text text1, AB=BD=1'],
                    ['text text2, BE=\\frac{1}{2}'],
                    ['text text3, ED=\\sqrt{BD^{2}-BE^{2}}=\\frac{\\sqrt{3}}{2}'],
                    ['text text4, CD=2×ED=\\sqrt{3}']
                ],

                "stepsText": [
                    addNbsp("Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1."),
                    addNbsp("Select the Segment tool and draw a Segment from point A to any point on the circumference of the circle, creating point B"),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center B and radius BA."),
                    addNbsp("Select the Intersect tool and create Point C at the left-most intersection of the 2 circles."),
                    addNbsp("Select the Intersect tool and create Point D at the right-most intersection of the 2 circles."),
                    addNbsp("Draw Segment CD."),
                    addNbsp("Select the Intersect tool and create Point E at the intersection of BA and CD."),
                    addNbsp("Draw Segment BD."),
                    addNbsp("AB=BD=1. Select the Text tool and enter 'AB=BD=1'"),
                    addNbsp(katex.renderToString("BE=\\frac{1}{2}") + ". Select the Text tool and enter 'BE=\\frac{1}{2}'"),
                    addNbsp("Using the Pythagorean Theorem we know that " + katex.renderToString("ED=\\sqrt{BD^{2}-BE^{2}} = \\frac{\\sqrt{3}}{2}.") +
                        " Select the Text tool and enter 'ED=\\sqrt{BD^{2}-BE^{2}}=\\frac{\\sqrt{3}}{2}'"),
                    addNbsp(katex.renderToString("CD=2 \\times ED = \\sqrt{3}") +
                        ". Select the Text tool and enter 'CD=2×ED=\\sqrt{3}'. (Don't forget to use the multiplication symbol in the Text Tool->Advanced->Special Characters.)")
                ],

                "d3Data": ["hexStatus2Vesica", "Complete2Vesica"],
                "selected": false,
                "url": "src/assets/images/skills/vesica_piscis.svg",
                "url2": "src/assets/images/skills/vesica_piscis.svg",
                "stepsImage": "src/assets/images/skills/details/detailVesicaPiscis.svg",
                "name": "The Vesica Piscis",
                "difficulty": "EASY  |  12 STEPS",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [11],
                "requirement": "(REQUIRES THE CIRCLE)",
                "overview": "The Vesica Piscis is formed by the intersection of two circles with the same radius where each circle's center lies on the circumference of the other.",
                "quote": '"...the geometric image through which light was created."',
                "quotee": "Drunvalo Melchizedek",
                "geoDetailBody": `                
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
                </span><br><br>
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
                </span><br><br>
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
                `
            },
            {
                "id": 2,
                "elements": [],
                "d3Data": ["hexStatus23Roots1", "Complete23Roots1"],
                "selected": false,
                "url": "src/assets/images/skills/3_roots.svg",
                "name": "Three Sacred Roots 1",
                "difficulty": "EASY  |  7 STEPS",
                "requirement": "(REQUIRES VESICA PISCIS)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                // "overview": "The three sacred roots are \$ \\sqrt{2} \$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                "overview": "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ".",
                "quote": "...the simple, incommensurable root powers as geometric metaphors for the supra-rational moment of transformation...",
                "quotee": "Robert Lawlor",
                "geoDetailBody": `                
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
                </span><br><br>
                <span>
                    Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                    consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                    debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                    Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                    incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                    alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                    recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                    praesentium consequatur consectetur eum expedita?
                </span>`
            },
            {
                "id": 3,
                "selected": false,
                "elements": [],
                "url": "src/assets/images/skills/3_roots2.svg",
                "name": "Three Sacred Roots 2",
                "difficulty": "EASY  |  17 STEPS",
                "requirement": "(REQUIRES Three Sacred Roots 1)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                // "overview": "The three sacred roots are \$ \\sqrt{2} \a$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                "overview": "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ".",
                "quote": '"...the simple, incommensurable root powers as geometric metaphors for the supra-rational moment of transformation..."',
                "quotee": "Robert Lawlor",
                "geoDetailBody": `                
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
                </span><br><br>
                <span>
                    Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                    consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                    debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                    Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                    incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                    alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                    recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                    praesentium consequatur consectetur eum expedita?
                </span>`
            },
            {
                "id": 4,
                "selected": false,
                "elements": [],
                "url": "src/assets/images/skills/3_roots2.svg",
                "name": "Three Sacred Roots 3",
                "difficulty": "EASY  |  17 STEPS",
                "requirement": "(REQUIRES Three Sacred Roots 2)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                // "overview": "The three sacred roots are \$ \\sqrt{2} \a$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                "overview": "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ".",
                "quote": '"...the simple, incommensurable root powers as geometric metaphors for the supra-rational moment of transformation..."',
                "quotee": "Robert Lawlor",
                "geoDetailBody": `                
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
                </span><br><br>
                <span>
                    Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                    consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                    debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                    Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                    incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                    alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                    recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                    praesentium consequatur consectetur eum expedita?
                </span>`
            }, {
                "id": 5,
                "d3Data": ["hexStatus2Luc1", "Complete2Luc1"],
                "selected": false,
                "elements": [],
                "url": "src/assets/images/skills/circle.svg",
                "name": "1",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus",
                "geoDetailBody": `                
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
                </span><br><br>
                <span>
                    Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                    consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                    debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                    Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                    incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                    alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                    recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                    praesentium consequatur consectetur eum expedita?
                </span>`
            }, {
                "id": 6,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "2",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 7,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "3",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 8,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Lucifer Pattern 4",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 9,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "5",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 10,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "6",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 11,
                "elementID": "A_detailTriquetra",
                "zoomScale": 1.25,
                "elements": [],
                "steps": [
                    ["point A, ", "circle c, Circle(A, 1)"],
                    ["point B, Point(c)", "segment f, Segment(A, B)"],
                    ["circle d, Circle(B, A)"],
                    ["point C, Intersect(c, d, 1)"],
                    ["point D, Intersect(c, d, 2)"],
                    ["segment g, Segment(C, B)"],
                    ["segment h, Segment(C, A)"],
                    ["circle e, Circle(C, B)"],
                    ["point E, Intersect(d, e, 2)"],
                    ["point F, Intersect(c, e, 2)"],
                    ["segment i, Segment(E, D)"],
                    ["segment j, Segment(D, F)"],
                    ["segment k, Segment(E, F)"]
                ],

                "stepsText": [
                    addNbsp("Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1."),
                    addNbsp("Select the Segment tool and draw a Segment from point A to any point on the circumference of the circle, creating point B"),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center B and radius BA."),
                    addNbsp("Select the Intersect tool and create Point C at the left intersection of the 2 circles."),
                    addNbsp("Select the Intersect tool and create Point D at the right intersection of the 2 circles."),
                    addNbsp("Select the Segment tool and draw a Segment CB"),
                    addNbsp("Select the Segment tool and draw a Segment CA"),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center C and radius CB."),
                    addNbsp("Select the Intersect tool and create Point E at the intersection of Circle with Center B and with Circle with Center C."),
                    addNbsp("Select the Intersect tool and create Point F at the intersection of Circle with Center C and with Circle with Center A."),
                    addNbsp("Select the Segment tool and draw Segment ED."),
                    addNbsp("Select the Segment tool and draw Segment DF."),
                    addNbsp("Select the Segment tool and draw Segment EF.")
                ],

                "selected": false,
                "stepsImage": "src/assets/images/skills/details/detailTriquetra.svg",
                "d3Data": ["hexStatus3Triquetra", "Complete3Triquetra"],
                "url": "src/assets/images/skills/triqetra.svg",
                "url2": "src/assets/images/skills/triqetra.svg",
                "name": "The Triquetra",
                "difficulty": "EASY  |  13 STEPS",
                "requirement": "(REQUIRES VESICA PISCIS)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [12],
                "overview": "The Triquetra consists of three mutually intersecting vesica piscis.",
                // "overview": "The Triquetra consists of three mutually intersecting vesica piscis. The central region common to all three is a Reuleaux triangle.",
                "quote": '"...At that moment a huge amount of information was created."',
                "quotee": "Drunvalo Melchizedek",
                "geoDetailBody": `                
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
                </span><br><br>
                <span>
                    Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                    consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                    debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                    Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                    incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                    alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                    recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                    praesentium consequatur consectetur eum expedita?
                </span>`
            }, {
                "id": 12,
                "elementID": "A_detailGenesis",
                "zoomScale": 1.5,
                "elements": [],
                "steps": [
                    ["point A, ", "circle c, Circle(A, 1)"],
                    ["point B, Point(c)", "circle d, Circle(B, A)"],

                    ["point C, Intersect(c, d, 1)"],
                    ["circle e, Circle(C, A)"],

                    ["point D, Intersect(c, e, 1)"],
                    ["circle f, Circle(D, A)"],

                    ["point E, Intersect(c, f, 1)"],
                    ["circle g, Circle(E, A)"],

                    ["point F, Intersect(c, g, 1)"],
                    ["circle h, Circle(F, A)"],

                    ["point G, Intersect(c, d, 2)"],
                    ["circle k, Circle(G, A)"]
                ],

                "stepsText": [
                    addNbsp("Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center B and radius BA."),

                    addNbsp("Select the Intersect tool and create Point C at the left intersection of Circles A and B."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center C and radius CA."),

                    addNbsp("Select the Intersect tool and create Point D at the lower intersection of Circles A and C."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center D and radius DA."),

                    addNbsp("Select the Intersect tool and create Point E at the lower intersection of Circles A and D."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center E and radius EA."),

                    addNbsp("Select the Intersect tool and create Point F at the lower intersection of Circles A and E."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center F and radius FA."),

                    addNbsp("Select the Intersect tool and create Point F at the intersection of Circles A, B and F."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center G and radius GA.")
                ],

                "selected": false,
                "url": "src/assets/images/skills/genesis.svg",
                "url2": "src/assets/images/skills/genesis.svg",
                "stepsImage": "src/assets/images/skills/details/detailGenesis4.svg",
                "d3Data": ["hexStatus4Genesis", "Complete4Genesis"],
                "name": "The Genesis Pattern",
                "difficulty": "EASY  |  7 STEP",
                "requirement": "The Triquetra",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [13],
                "overview": "Consisting of 6 equal circles intersecting the circumference of a similar central circle. This represents the first motions of creation.",
                "quote": '"...and He rested on the seventh day from all his work."',
                "quotee": "Genesis 2:2"
            },
            {
                "id": 13,
                "elementID": "A_detailEgg",
                "zoomScale": 1.5,
                "elements": [],
                "steps": [
                    ["point A, ", "circle c, Circle(A, 1)"],
                    ["point B, Point(c)", "circle d, Circle(B, A)"],                    
                    ["point C, Intersect(c, d, 1)"],
                    ["circle e, Circle(C, A)"],
                    ["point D, Intersect(c, e, 1)"],
                    ["circle f, Circle(D, A)"],
                    ["point E, Intersect(c, f, 1)"],
                    ["circle g, Circle(E, A)"],
                    ["point F, Intersect(c, g, 1)"],
                    ["circle h, Circle(F, A)"],
                    ["point G, Intersect(c, d, 2)"],
                    ["circle k, Circle(G, A)"],
                    ["point H, Intersect(d, e, 2)"],  
                    ["point I, Intersect(e, f, 2)"],
                    ["point J, Intersect(f, g, 2)"],
                    ["point K, Intersect(g, h, 2)"],
                    ["point L, Intersect(h, k, 2)"],
                    ["point M, Intersect(d, k, 2)"],                    
                    ["circle p, Circle(H, B)"],
                    ["circle q, Circle(I, C)"],                    
                    ["circle r, Circle(J, D)"],                    
                    ["circle s, Circle(K, E)"],                    
                    ["circle t, Circle(L, G)"],                    
                    ["circle c_1, Circle(M, B)"]
                ],

                "stepsText": [
                    addNbsp("Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center B and radius BA."),
                    addNbsp("Select the Intersect tool and create Point C at the left intersection of Circles A and B."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center C and radius CA."),
                    addNbsp("Select the Intersect tool and create Point D at the lower intersection of Circles A and C."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center D and radius DA."),
                    addNbsp("Select the Intersect tool and create Point E at the lower intersection of Circles A and D."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center E and radius EA."),
                    addNbsp("Select the Intersect tool and create Point F at the lower intersection of Circles A and E."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center F and radius FA."),
                    addNbsp("Select the Intersect tool and create Point G at the intersection of Circles A, B and F."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center G and radius GA."),
                    addNbsp("Select the Intersect tool and create Point H at the upper intersection of Circles B and C."),
                    addNbsp("Select the Intersect tool and create Point I at the left intersection of Circles C and D."),
                    addNbsp("Select the Intersect tool and create Point J at the lower intersection of Circles D and E."),
                    addNbsp("Select the Intersect tool and create Point K at the lower intersection of Circles E and F."),
                    addNbsp("Select the Intersect tool and create Point L at the right intersection of Circles G and F."),
                    addNbsp("Select the Intersect tool and create Point M at the UPPER intersection of Circles B and G."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center H and radius HB."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center I and radius IC."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center J and radius JD."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center K and radius KE."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center L and radius LG."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center M and radius MB.")
                ],

                "selected": false,
                "url": "src/assets/images/skills/eggOfLife.svg",
                "url2": "src/assets/images/skills/eggOfLife.svg",
                "stepsImage": "src/assets/images/skills/details/detailEgg3.svg",
                "d3Data": ["hexStatus5Egg", "Complete5Egg"],
                "name": "The Egg of Life",
                "difficulty": "EASY  |  13 STEPS",
                "requirement": "REQUIRES THE GENESIS PATTERN",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [17],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 14,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "10",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "REQUIRES THE TRIQUETRA",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 15,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "11",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 17,
                "elementID": "A_detailCompletedFOL",
                "zoomScale": 3,
                "elements": [],

                "steps": [
                    ["point A, ", "circle c, Circle(A, 1)"],
                    ["point B, Point(c)", "circle d, Circle(B, A)"],                    
                    ["point C, Intersect(c, d, 1)"],
                    ["circle e, Circle(C, A)"],
                    ["point D, Intersect(c, e, 1)"],
                    ["circle f, Circle(D, A)"],
                    ["point E, Intersect(c, f, 1)"],
                    ["circle g, Circle(E, A)"],
                    ["point F, Intersect(c, g, 1)"],
                    ["circle h, Circle(F, A)"],
                    ["point G, Intersect(c, d, 2)"],
                    ["circle k, Circle(G, A)"],

                    ["point H, Intersect(d, e, 2)"],  
                    ["point I, Intersect(e, f, 2)"],
                    ["point J, Intersect(f, g, 2)"],
                    ["point K, Intersect(g, h, 2)"],
                    ["point L, Intersect(h, k, 2)"],
                    ["point M, Intersect(d, k, 2)"],
                    
                    ["circle p, Circle(H, B)"],
                    ["circle q, Circle(I, C)"],                    
                    ["circle r, Circle(J, E)"],                    
                    ["circle s, Circle(K, E)"],                    
                    ["circle t, Circle(L, G)"],                    
                    ["circle c_1, Circle(M, B)"],
                    
                    ["point N, Intersect(d, p, 2)"],
                    ["point O, Intersect(e, p, 1)"],
                    ["point P, Intersect(f, q, 1)"],
                    ["point Q, Intersect(g, r, 1)"],
                    ["point R, Intersect(h, s, 1)"],
                    ["point S, Intersect(k, t, 1)"],

                    ["circle d_1, Circle(N, B)"],
                    ["circle e_1, Circle(O, C)"],
                    ["circle f_1, Circle(P, D)"],
                    ["circle g_1, Circle(Q, E)"],
                    ["circle h_1, Circle(R, F)"],
                    ["circle k_1, Circle(S, G)"],

                    ["point T, Intersect(p, d_1, 2)"],
                    ["point U, Intersect(p, e_1, 2)"],
                    ["point V, Intersect(q, e_1, 2)"],
                    ["point W, Intersect(q, f_1, 2)"],
                    ["point Z, Intersect(r, f_1, 1)"],
                    ["point A_1, Intersect(r, g_1, 2)"],
                    ["point B_1, Intersect(s, g_1, 2)"],
                    ["point C_1, Intersect(s, h_1, 2)"],
                    ["point D_1, Intersect(t, h_1, 1)"],
                    ["point E_1, Intersect(t, k_1, 2)"],
                    ["point F_1, Intersect(c_1, k_1, 1)"],
                    ["point G_1, Intersect(c_1, d_1, 2)"],

                    ["circle p_1, Circle(T, N)"],
                    ["circle q_1, Circle(U, H)"],
                    ["circle r_1, Circle(V, O)"],
                    ["circle s_1, Circle(W, I)"],
                    ["circle t_1, Circle(Z, J)"],
                    ["circle c_2, Circle(A_1, Q)"],
                    ["circle d_2, Circle(B_1, Q)"],
                    ["circle e_2, Circle(C_1, K)"],
                    ["circle f_2, Circle(D_1, L)"],
                    ["circle g_2, Circle(E_1, S)"],
                    ["circle h_2, Circle(F_1, M)"],
                    ["circle k_2, Circle(G_1, N)"],

                    ["point H_1, Intersect(d_1, p_1, 2)"],
                    ["point I_1, Intersect(p_1, q_1, 2)"],
                    ["point J_1, Intersect(e_1, q_1, 1)"],
                    ["point K_1, Intersect(r_1, s_1, 2)"],
                    ["point L_1, Intersect(f_1, s_1, 1)"],
                    ["point M_1, Intersect(t_1, c_2, 2)"],
                    ["point N_1, Intersect(g_1, c_2, 1)"],
                    ["point O_1, Intersect(d_2, e_2, 2)"],
                    ["point P_1, Intersect(h_1, e_2, 1)"],
                    ["point Q_1, Intersect(f_2, g_2, 2)"],
                    ["point R_1, Intersect(k_1, g_2, 1)"],
                    ["point S_1, Intersect(h_2, k_2, 2)"],

                    ["circle p_2, Circle(H_1, N)"],
                    ["circle q_2, Circle(I_1, T)"],
                    ["circle r_2, Circle(J_1, U)"],
                    ["circle s_2, Circle(K_1, V)"],
                    ["circle t_2, Circle(L_1, P)"],
                    ["circle c_3, Circle(M_1, A_1)"],
                    ["circle d_3, Circle(N_1, Q)"],
                    ["circle e_3, Circle(O_1, B_1)"],
                    ["circle f_3, Circle(P_1, R)"],
                    ["circle g_3, Circle(Q_1, E_1)"],
                    ["circle h_3, Circle(R_1, S)"],
                    ["circle k_3, Circle(S_1, G_1)"],

                    ["point T_1, Intersect(p_1, p_2, 2)"],
                    ["point U_1, Intersect(q_1, q_2, 1)"],
                    ["point V_1, Intersect(r_1, r_2, 1)"],
                    ["point W_1, Intersect(s_1, s_2, 1)"],
                    ["point Z_1, Intersect(t_1, t_2, 1)"],
                    ["point A_2, Intersect(c_2, c_3, 1)"],
                    ["point B_2, Intersect(d_2, d_3, 2)"],
                    ["point C_2, Intersect(e_2, e_3, 1)"],
                    ["point D_2, Intersect(f_2, f_3, 1)"],
                    ["point E_2, Intersect(g_2, g_3, 1)"],
                    ["point F_2, Intersect(h_2, h_3, 1)"],
                    ["point G_2, Intersect(k_2, p_2, 2)"],                    

                    ["circle p_3, Circle(T_1, H_1)"],
                    ["circle q_3, Circle(U_1, U)"],
                    ["circle r_3, Circle(V_1, V)"],
                    ["circle s_3, Circle(W_1, W)"],
                    ["circle t_3, Circle(Z_1, Z)"],
                    ["circle c_4, Circle(A_2, N_1)"],
                    ["circle d_4, Circle(B_2, N_1)"],
                    ["circle e_4, Circle(C_2, C_1)"],
                    ["circle f_4, Circle(D_2, D_1)"],
                    ["circle g_4, Circle(E_2, E_1)"],
                    ["circle h_4, Circle(F_2, F_1)"],
                    ["circle k_4, Circle(G_2, H_1)"],

                    ["point H_2, Intersect(p_2, p_3, 2)"],
                    ["point I_2, Intersect(r_2, q_3, 2)"],
                    ["point J_2, Intersect(t_2, s_3, 1)"],
                    ["point K_2, Intersect(d_3, c_4, 1)"],
                    ["point L_2, Intersect(f_3, e_4, 1)"],
                    ["point M_2, Intersect(h_3, g_4, 1)"],

                    ["circle p_4, Circle(H_2, H_1)"],
                    ["circle q_4, Circle(I_2, J_1)"],
                    ["circle r_4, Circle(J_2, L_1)"],
                    ["circle s_4, Circle(K_2, N_1)"],
                    ["circle t_4, Circle(L_2, P_1)"],
                    ["circle c_5, Circle(M_2, R_1)"]
                ],

                "stepsText": [
                    addNbsp("Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center B and radius BA."),
                    addNbsp("Select the Intersect tool and create Point C at the left intersection of Circles A and B."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center C and radius CA."),
                    addNbsp("Select the Intersect tool and create Point D at the lower intersection of Circles A and C."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center D and radius DA."),
                    addNbsp("Select the Intersect tool and create Point E at the lower intersection of Circles A and D."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center E and radius EA."),
                    addNbsp("Select the Intersect tool and create Point F at the lower intersection of Circles A and E."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center F and radius FA."),
                    addNbsp("Select the Intersect tool and create Point G at the intersection of Circles A, B and F."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center G and radius GA."),

                    addNbsp("Select the Intersect tool and create Point H at the upper intersection of Circles B and C."),
                    addNbsp("Select the Intersect tool and create Point I at the left intersection of Circles C and D."),
                    addNbsp("Select the Intersect tool and create Point J at the lower intersection of Circles D and E."),
                    addNbsp("Select the Intersect tool and create Point K at the lower intersection of Circles E and F."),
                    addNbsp("Select the Intersect tool and create Point L at the right intersection of Circles G and F."),
                    addNbsp("Select the Intersect tool and create Point M at the UPPER intersection of Circles B and G."),
                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center H and radius HB."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center I and radius IC."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center J and radius JE."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center K and radius KE."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center L and radius LG."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center M and radius MB."),  
                    
                    addNbsp("Select the Intersect tool and create Point N at the upper intersection of Circles H and M."),
                    addNbsp("Select the Intersect tool and create Point O at the left intersection of Circles C and H."),
                    addNbsp("Select the Intersect tool and create Point P at the left intersection of Circles D and j."),
                    addNbsp("Select the Intersect tool and create Point Q at the lower intersection of Circles J and K."),
                    addNbsp("Select the Intersect tool and create Point R at the right intersection of Circles F and K."),
                    addNbsp("Select the Intersect tool and create Point S at the left intersection of Circles M and G."),

                    addNbsp("Select the Circle with Center tool and draw a Circle with center N and radius NB."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center O and radius OC."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center P and radius PD."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center Q and radius QE."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center R and radius RF."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center S and radius SG."),

                    addNbsp("Select the Intersect tool and create Point T at the upper intersection of Circles H and N."),
                    addNbsp("Select the Intersect tool and create Point U at the upper intersection of Circles O and H."),
                    addNbsp("Select the Intersect tool and create Point V at the left intersection of Circles O and I."),
                    addNbsp("Select the Intersect tool and create Point W at the left intersection of Circles I and P."),
                    addNbsp("Select the Intersect tool and create Point Z at the lower intersection of Circles P and J."),
                    addNbsp("Select the Intersect tool and create Point A<sub>1</sub> at the lower intersection of Circles J and Q."),
                    addNbsp("Select the Intersect tool and create Point B<sub>1</sub> at the lower intersection of Circles Q and K."),
                    addNbsp("Select the Intersect tool and create Point C<sub>1</sub> at the lower intersection of Circles K and R."),
                    addNbsp("Select the Intersect tool and create Point D<sub>1</sub> at the right intersection of Circles L and R."),
                    addNbsp("Select the Intersect tool and create Point E<sub>1</sub> at the right intersection of Circles S and L."),
                    addNbsp("Select the Intersect tool and create Point F<sub>1</sub> at the upper intersection of Circles M and S."),
                    addNbsp("Select the Intersect tool and create Point G<sub>1</sub> at the upper intersection of Circles N and M."),

                    addNbsp("Select the Circle with Center tool and draw a Circle with center T and radius TN."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center U and radius UH."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center V and radius VO."),                    
                    addNbsp("Select the Circle with Center tool and draw a Circle with center W and radius WI."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center Z and radius ZJ."),
                    addNbsp("Select the Circle with Center tool and draw a Circle with center A<sub>1</sub> and radius A<sub>1</sub>Q."), 
                    addNbsp("Select the Circle with Center tool and draw a Circle with center B<sub>1</sub> and radius B<sub>1</sub>Q."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center C<sub>1</sub> and radius C<sub>1</sub>K."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center D<sub>1</sub> and radius D<sub>1</sub>L."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center E<sub>1</sub> and radius E<sub>1</sub>S."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center F<sub>1</sub> and radius F<sub>1</sub>M."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center G<sub>1</sub> and radius G<sub>1</sub>N."),

                    addNbsp("Select the Intersect tool and create Point H<sub>1</sub> at the upper intersection of Circles G<sub>1</sub> and T."),
                    addNbsp("Select the Intersect tool and create Point I<sub>1</sub> at the upper intersection of Circles U and T."),
                    addNbsp("Select the Intersect tool and create Point J<sub>1</sub> at the left intersection of Circles U and O."),
                    addNbsp("Select the Intersect tool and create Point K<sub>1</sub> at the left intersection of Circles V and W."),
                    addNbsp("Select the Intersect tool and create Point L<sub>1</sub> at the left intersection of Circles P and Z."),
                    addNbsp("Select the Intersect tool and create Point M<sub>1</sub> at the lower intersection of Circles Z and A<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point N<sub>1</sub> at the lower intersection of Circles A<sub>1</sub> and B<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point O<sub>1</sub> at the lower intersection of Circles B<sub>1</sub> and C<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point P<sub>1</sub> at the lower intersection of Circles C<sub>1</sub> and D<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point Q<sub>1</sub> at the right intersection of Circles D<sub>1</sub> and E<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point R<sub>1</sub> at the upper intersection of Circles E<sub>1</sub> and F<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point S<sub>1</sub> at the upper intersection of Circles F<sub>1</sub> and G<sub>1</sub>."),

                    addNbsp("Select the Circle with Center tool and draw a Circle with center H<sub>1</sub> and radius H<sub>1</sub>N."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center I<sub>1</sub> and radius I<sub>1</sub>T."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center J<sub>1</sub> and radius J<sub>1</sub>U."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center K<sub>1</sub> and radius K<sub>1</sub>V."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center L<sub>1</sub> and radius L<sub>1</sub>P."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center M<sub>1</sub> and radius M<sub>1</sub>A<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center N<sub>1</sub> and radius N<sub>1</sub>Q."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center O<sub>1</sub> and radius O<sub>1</sub>B<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center P<sub>1</sub> and radius P<sub>1</sub>R."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center Q<sub>1</sub> and radius Q<sub>1</sub>E<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center R<sub>1</sub> and radius R<sub>1</sub>S."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center S<sub>1</sub> and radius S<sub>1</sub>G<sub>1</sub>."),

                    addNbsp("Select the Intersect tool and create Point T<sub>1</sub> at the upper intersection of Circles I<sub>1</sub> and H<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point U<sub>1</sub> at the upper intersection of Circles I<sub>1</sub> and J<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point V<sub>1</sub> at the upper intersection of Circles K<sub>1</sub> and J<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point W<sub>1</sub> at the lower intersection of Circles K<sub>1</sub> and L<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point Z<sub>1</sub> at the lower intersection of Circles L<sub>1</sub> and M<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point A<sub>2</sub> at the lower intersection of Circles M<sub>1</sub> and N<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point B<sub>2</sub> at the lower intersection of Circles N<sub>1</sub> and O<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point C<sub>2</sub> at the lower intersection of Circles O<sub>1</sub> and P<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point D<sub>2</sub> at the lower intersection of Circles P<sub>1</sub> and Q<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point E<sub>2</sub> at the upper intersection of Circles R<sub>1</sub> and Q<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point F<sub>2</sub> at the upper intersection of Circles S<sub>1</sub> and R<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point G<sub>2</sub> at the upper intersection of Circles H<sub>1</sub> and S<sub>1</sub>."),

                    addNbsp("Select the Circle with Center tool and draw a Circle with center T<sub>1</sub> and radius T<sub>1</sub>H<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center U<sub>1</sub> and radius U<sub>1</sub>U."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center V<sub>1</sub> and radius V<sub>1</sub>V."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center W<sub>1</sub> and radius W<sub>1</sub>W."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center Z<sub>1</sub> and radius Z<sub>1</sub>Z."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center A<sub>2</sub> and radius A<sub>2</sub>N<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center B<sub>2</sub> and radius B<sub>2</sub>N<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center C<sub>2</sub> and radius C<sub>2</sub>C<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center D<sub>2</sub> and radius D<sub>2</sub>D<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center E<sub>2</sub> and radius E<sub>2</sub>E<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center F<sub>2</sub> and radius F<sub>2</sub>F<sub>1</sub>."),     
                    addNbsp("Select the Circle with Center tool and draw a Circle with center G<sub>2</sub> and radius G<sub>2</sub>H<sub>1</sub>."),

                    addNbsp("Select the Intersect tool and create Point H<sub>2</sub> at the upper intersection of Circles T<sub>1</sub> and G<sub>2</sub>."),
                    addNbsp("Select the Intersect tool and create Point I<sub>2</sub> at the upper intersection of Circles V<sub>1</sub> and U<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point J<sub>2</sub> at the lower intersection of Circles W<sub>1</sub> and Z<sub>1</sub>."),
                    addNbsp("Select the Intersect tool and create Point K<sub>2</sub> at the lower intersection of Circles A<sub>2</sub> and B<sub>2</sub>."),
                    addNbsp("Select the Intersect tool and create Point L<sub>2</sub> at the lower intersection of Circles C<sub>2</sub> and D<sub>2</sub>."),
                    addNbsp("Select the Intersect tool and create Point M<sub>2</sub> at the upper intersection of Circles F<sub>2</sub> and E<sub>2</sub>."),

                    addNbsp("Select the Circle with Center tool and draw a Circle with center H<sub>2</sub> and radius H<sub>2</sub>H<sub>1</sub>."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center I<sub>2</sub> and radius I<sub>2</sub>J<sub>1</sub>."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center J<sub>2</sub> and radius J<sub>2</sub>L<sub>1</sub>."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center K<sub>2</sub> and radius K<sub>2</sub>N<sub>1</sub>."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center L<sub>2</sub> and radius L<sub>2</sub>P<sub>1</sub>."),   
                    addNbsp("Select the Circle with Center tool and draw a Circle with center M<sub>2</sub> and radius M<sub>2</sub>R<sub>1</sub>.")

                ],

                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "stepsImage": "src/assets/images/skills/details/detailCompletedFOL3.svg",
                "d3Data": ["hexStatusCompleteFOL", "CompleteCompleteFOL"],
                "name": "Completed Flower of Life",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 18,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "13",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 19,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 20,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 21,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 22,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "REQUIRES THE TRIQUETRA",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 23,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 24,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 25,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 26,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 27,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 28,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            },
            {
                "id": 29,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 30,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 31,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 32,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 33,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 34,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 35,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            },
            {
                "id": 36,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            },
            {
                "id": 37,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 38,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            },
            {
                "id": 39,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 40,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 41,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 42,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 43,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 44,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 45,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 46,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 47,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 48,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 49,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 50,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 51,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 52,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 53,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 54,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 55,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 56,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 57,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 58,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 59,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 60,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 61,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 62,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 63,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 64,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 65,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 65,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 66,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 67,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 68,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 69,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 70,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 71,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 72,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 73,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 74,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 75,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 76,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 77,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 78,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 79,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 80,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 81,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 82,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 83,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }, {
                "id": 84,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "The Circle",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            }
        ]
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.skillData = skillData;
})();