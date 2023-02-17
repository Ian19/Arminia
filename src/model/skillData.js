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
                "material_id": "ybm744ww",

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
                "stepsImage": "src/assets/images/skills/details/vesicaPiscisDetail.svg",
                "stepsImage2": "src/assets/images/skills/details/circleLargeSVGGlow2.svg",
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
                "material_id": "ybm744ww",
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
                "url": "src/assets/images/skills/vesica_piscis.png",
                "url2": "src/assets/images/skills/vesicaPicsisLarge.svg",
                "stepsImage": "src/assets/images/skills/details/vesicaPiscisDetail.svg",
                "stepsImage2": "src/assets/images/skills/details/vesicaPicsisLargeSVGGlow.svg",
                // "stepsImage2": "src/assets/images/skills/details/test.svg",
                "name": "The Vesica Piscis",
                "difficulty": "EASY  |  12 STEPS",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [11],
                "requirement": "(REQUIRES THE CIRCLE)",
                "overview": "The Vesica Piscis is formed by the intersection of two circles with the same radius, intersecting in such a way that the centre of each circle lies on the circumference of the other.",
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
                "d3Data": ["hexStatus23Roots1", "Complete23Roots1"],
                "selected": false,
                "url": "src/assets/images/skills/3-roots.png",
                "name": "Three Sacred Roots 1",
                "difficulty": "EASY  |  7 STEPS",
                "requirement": "(REQUIRES VESICA PISCIS)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                // "overview": "The three sacred roots are \$ \\sqrt{2} \$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                "overview": "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ". They are irrational functions describing core concepts of geometry.",
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
                "url": "src/assets/images/skills/3_sacred_roots2.png",
                "name": "Three Sacred Roots 2",
                "difficulty": "EASY  |  17 STEPS",
                "requirement": "(REQUIRES Three Sacred Roots 1)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                // "overview": "The three sacred roots are \$ \\sqrt{2} \a$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                "overview": "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ". They are irrational functions describing core concepts of geometry.",
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
                "url": "src/assets/images/skills/3_sacred_roots2.png",
                "name": "Three Sacred Roots 3",
                "difficulty": "EASY  |  17 STEPS",
                "requirement": "(REQUIRES Three Sacred Roots 2)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                // "overview": "The three sacred roots are \$ \\sqrt{2} \a$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                "overview": "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ". They are irrational functions describing core concepts of geometry.",
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



                // "id": 5,
                // "selected": false,
                // "url": "src/assets/images/skills/triquetra.png",
                // "name": "The Triquetra",
                // "difficulty": "EASY  |  9 STEPS",
                // "requirement": "(REQUIRES VESICA PISCIS)",
                // "completed": false,
                // "unlocked": false,
                // "overview": "The Triquetra consists of three mutually intersecting vesica piscis. The central region common to all three is a Reuleaux triangle. It is the 2nd motion of the Genesis Pattern.",
                // "quote": '"...At that moment a huge amount of information was created."',
                // "quotee": "Drunvalo Melchizedek",
                // "geoDetailBody": `                
                // <span>
                //     Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nemo quod optio
                //     porro sed quibusdam ea minima, praesentium dolor error soluta ratione possimus omnis
                //     deleniti doloribus quas itaque voluptatem laboriosam eaque veritatis ducimus eveniet
                //     ullam nam! Animi aut officia libero temporibus dicta maiores eveniet, facere
                //     necessitatibus, nulla voluptas architecto? Harum maxime alias ipsa sapiente!
                //     Assumenda sint eum dolorem laborum dicta repellat omnis pariatur, facere officia,
                //     vitae facilis dolores, temporibus a doloribus voluptatibus soluta id! Quis atque
                //     provident magni, necessitatibus labore voluptatum esse commodi corporis harum
                //     excepturi nulla adipisci, et dolores doloribus tempore.
                // </span><br><br>
                // <span>
                //     Fuga distinctio architecto dolorem, harum at molestias cumque rerum optio amet? Quas
                //     consectetur rem explicabo iure dolorem labore dolores sit error neque vel cupiditate
                //     debitis aliquid eaque laborum similique id distinctio, libero eos dolore illo.
                //     Placeat mollitia quis nihil rem! Nulla quia quibusdam dicta explicabo illo dolore
                //     incidunt facilis earum deleniti iure, eos amet fugiat minus accusamus et molestias
                //     alias doloribus nobis ipsa sunt veniam voluptatem labore accusantium. Quam
                //     recusandae veniam quod asperiores odio? Sed, magni! Beatae exercitationem possimus
                //     praesentium consequatur consectetur eum expedita?
                // </span>`


            }, {
                "id": 5,
                "d3Data": ["hexStatus2Luc1", "Complete2Luc1"],
                "selected": false,
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
                "name": "4",
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
                    addNbsp("Select the Intersect tool and create Point C at the left-most intersection of the 2 circles."),
                    addNbsp("Select the Intersect tool and create Point D at the right-most intersection of the 2 circles."),

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
                "stepsImage": "src/assets/images/skills/details/vesicaPiscisDetail.svg",
                "stepsImage2": "src/assets/images/skills/details/triquetraLargeSVGGlow.svg",
                "d3Data": ["hexStatus3Triquetra", "Complete3Triquetra"],
                "url": "src/assets/images/skills/triquetra.png",
                "url2": "src/assets/images/skills/triquetra.png",
                "name": "The Triquetra",
                "difficulty": "EASY  |  13 STEPS",
                "requirement": "(REQUIRES VESICA PISCIS)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "The Triquetra consists of three mutually intersecting vesica piscis. The central region common to all three is a Reuleaux triangle. It is the 2nd motion of the Genesis Pattern.",
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
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "8",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
                "unlocksSkills": [],
                "overview": "A circle is a set of points on a plane that are equidistant from it's central point.",
                "quote": '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                "quotee": "Proclus"
            },
            {
                "id": 13,
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "9",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "REQUIRES VESICA PISCIS",
                "completed": false,
                "unlocked": false,
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
                "selected": false,
                "url": "src/assets/images/skills/circle.svg",
                "name": "12",
                "difficulty": "EASY  |  1 STEP",
                "requirement": "(NO REQUIREMENT)",
                "completed": false,
                "unlocked": false,
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