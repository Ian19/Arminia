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

        game.skills.skillData = [
            {
                name: "The Circle",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">C</span>
                    <span class="A_reg">ircle</span>`,
                id: 0,
                d3Data: "#hexHoverCircle",
                selected: false,
                status: "unlocked",
                type: "construction",
                elementID: "#A-detailCircle",
                tools: "0 | 34 | 15 | 17", // MOVE, CIRCLE_POINT_RADIUS, SEGMENT, TEXT 
                startingZoomScale: "ZoomOut(1)",
                elements: [],

                steps: [{

                    type: "construction",
                    zoomScale: 1,
                    styleObjects: [],
                    correctStep: ["point A, ", "circle c, Circle(A, 1)"],
                    stepsText: "Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1.",

                }, {

                    type: "construction",
                    zoomScale: 1,
                    styleObjects: [],
                    correctStep: ["point B, Point(c)", "segment f, Segment(A, B)"],
                    stepsText: "Select the Segment tool and draw a Segment from point A to any point on the circumference of the circle, creating point B",

                }, {

                    type: "construction",
                    zoomScale: 1,
                    styleObjects: [],
                    correctStep: ['text text1, AB=1'],
                    stepsText: "Select the Text tool and enter 'AB=1'",

                }],

                thumbnailURL: "src/assets/images/skills/thumbnails/circle2.svg",
                stepsImage: "src/assets/images/skills/details/detailCircle3.svg",
                geogebraFile: "/src/assets/geogebra/file_900x1000.ggb",
                difficulty: "EASY  |  3 STEPS",
                unlocksSkills: ["The Vesica Piscis"],
                requirement: "(NO REQUIREMENT)",
                overview: "A circle is a set of points on a plane that are equidistant from the circle's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                // God is a circle whose centre is everywhere and whose circumference is nowhere' (Hermes Trismegistus)   
                geoDetailBody: `<div>
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
                    </div>`
            }, {
                name: "The Vesica Piscis",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">V</span>
                    <span class="A_reg">esica </span>
                    <span class="A_decor">P</span>
                    <span class="A_reg">iscis</span>`,
                id: 1,
                d3Data: "#hexHoverVesica",
                selected: false,
                status: "locked",
                type: "construction",
                elementID: "#A-detailVesicaPiscis",
                elements: [],
                tools: "0 | 34 | 10 | 15 | 17 | 5 | 38", // MOVE, CIRCLE_POINT_RADIUS, CIRCLE_TWO_POINTS, SEGMENT, TEXT, INTERSECT 
                startingZoomScale: "ZoomOut(1)",

                steps: [{

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point A, ", "circle c, Circle(A, 1)"],
                    stepsText: "Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point B, Point(c)", "segment f, Segment(A, B)"],
                    stepsText: "Select the Segment tool. Hint: holding down the ALT key while drawing a segment, makes the segment snap vertically. Draw a Segment from point A to any point on the circumference of the circle, creating point B",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle d, Circle(B, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center B and radius BA.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point C, Intersect(c, d, 1)"],
                    stepsText: "Select the Intersect tool and create Point C at the left-most intersection of the 2 circles.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point D, Intersect(c, d, 2)"],
                    stepsText: "Select the Intersect tool and create Point D at the right-most intersection of the 2 circles.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["segment g, Segment(C, D)"],
                    stepsText: "Draw Segment CD.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point E, Intersect(f, g)"],
                    stepsText: "Select the Intersect tool and create Point E at the intersection of BA and CD.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["segment h, Segment(B, D)"],
                    stepsText: "Draw Segment BD.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["numeric distanceBD, Distance(B, D)", "text TextBD, BD = 1"],
                    stepsText: "Select the Distance Tool and Click point B and point D. Optional: Select the Move Tool and the Pin button in the Style Menu to change the position of the text. To change its background color to black, select the color button in the Style Menu. Do this for all the following text labels.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["numeric distanceBE, Distance(B, E)", "text TextBE, BE = 0.5"],
                    stepsText: "Select the Distance Tool and Click point B and point E.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["numeric distanceED, Distance(E, D)", "text TextED, ED = 0.866"],
                    stepsText: "Select the Distance Tool and Click point E and point D. Using the Pythagorean Theorem we know that " + katex.renderToString("ED=\\sqrt{BD^{2}-BE^{2}} = \\frac{\\sqrt{3}}{2} = 0.866."),

                },  {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5, 
                    correctStep: ["text text1, =\\frac{\\sqrt{3}}{2}"],
                    stepsText: "Select the Text Tool and enter <i>=\\frac{\\sqrt{3}}{2}</i>. Select the Move tool and position the text to the right of ED."

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5, 
                    correctStep: ["numeric distanceCD, Distance(C, D)", "text TextCD, CD = 1.732"],
                    stepsText: "Select the Distance Tool and Click point C and point D. " + katex.renderToString("CD=2 \\times ED = \\sqrt{3} = 1.732."),

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5, 
                    correctStep: ["text text2, =\\sqrt{3}"],
                    stepsText: "Select the Text Tool and enter <i>=\\sqrt{3}</i>. Select the Move tool and position the text to the right of CD."

                }],

                thumbnailURL: "src/assets/images/skills/thumbnails/vesica_piscis.svg",
                stepsImage: "src/assets/images/skills/details/detailVesicaPiscis6.svg",
                geogebraFile: "/src/assets/geogebra/file_900x1000.ggb",
                difficulty: "EASY  |  12 STEPS",
                unlocksSkills: ["The Triquetra"],
                requirement: "(REQUIRES THE CIRCLE)",
                overview: "The Vesica Piscis is formed by the intersection of two circles with the same radius where each circle's center lies on the circumference of the other.",
                quote: '"...the geometric image through which light was created."',
                quotee: "Drunvalo Melchizedek",
                geoDetailBody: `<div>
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
                    </div>`
            },
            {
                name: "Three Universal Roots 1",
                id: 2,
                d3Data: "#hexHoverRootsA",
                selected: false,
                status: "locked",
                type: "construction",
                elements: [],
                thumbnailURL: "src/assets/images/skills/thumbnails/3_roots.svg",
                difficulty: "EASY  |  7 STEPS",
                requirement: "(REQUIRES VESICA PISCIS)",
                unlocksSkills: [],
                // overview: "The three sacred roots are \$ \\sqrt{2} \$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                overview: "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ".",
                quote: "...the simple, incommensurable root powers as geometric metaphors for the supra-rational moment of transformation...",
                quotee: "Robert Lawlor",
                geoDetailBody: `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>`
            },
            {
                name: "Three Universal Roots 2",
                id: 3,
                d3Data: "#hexHoveRootsB",
                selected: false,
                status: "locked",
                type: "construction",
                elements: [],
                thumbnailURL: "src/assets/images/skills/thumbnails/3_roots2.svg",
                difficulty: "EASY  |  17 STEPS",
                requirement: "(REQUIRES Three Sacred Roots 1)",
                unlocksSkills: [],
                // overview: "The three sacred roots are \$ \\sqrt{2} \a$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                overview: "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ".",
                quote: '"...the simple, incommensurable root powers as geometric metaphors for the supra-rational moment of transformation..."',
                quotee: "Robert Lawlor",
                geoDetailBody: `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>`
            },
            {
                name: "Three Universal Roots 3",
                id: 4,
                d3Data: "#hexHoverRootsC",
                type: "construction",
                status: "locked",
                selected: false,
                elements: [],
                thumbnailURL: "src/assets/images/skills/thumbnails/3_roots2.svg",
                difficulty: "EASY  |  17 STEPS",
                requirement: "(REQUIRES Three Sacred Roots 2)",
                unlocksSkills: [],
                // overview: "The three sacred roots are \$ \\sqrt{2} \a$, \$ \\sqrt{3} \$ and \$ \\sqrt{5} \$. They are irrational functions describing core concepts of geometry.",
                overview: "The three sacred roots are " + katex.renderToString("\\sqrt{2}, \\sqrt{3} \\thickspace and \\thickspace \\sqrt{5}") + ".",
                quote: '"...the simple, incommensurable root powers as geometric metaphors for the supra-rational moment of transformation..."',
                quotee: "Robert Lawlor",
                geoDetailBody: `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>`
            }, {
                name: "Duality Pattern 1",
                id: 5,
                d3Data: "#hexHoverDualityA",
                status: "locked",
                selected: false,
                elements: [],
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                unlocksSkills: [],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>`
            }, {
                name: "Duality Pattern 2",
                id: 6,
                d3Data: "#hexHoverDualityB",
                status: "locked",
                selected: false,
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                unlocksSkills: [],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>`
            }, {
                name: "The Tetractys",
                id: 7,
                status: "locked",
                selected: false,
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                d3Data: "#hexHoverTetractys",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                unlocksSkills: [],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>`
            }, {
                name: "Da Vinci's Key",
                id: 8,
                d3Data: "#hexHoverLeo",
                status: "locked",
                selected: false,
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                unlocksSkills: [],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>`
            }, {
                name: "The Triquetra",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">T</span>
                    <span class="A_reg">riquetra</span>`,
                id: 9,
                d3Data: "#hexHoverTriquetra",
                status: "locked",
                selected: false,
                type: "construction",
                elementID: "#A-detailTriquetra",
                // MOVE, CIRCLE_POINT_RADIUS, CIRCLE_TWO_POINTS, SEGMENT, TEXT, INTERSECT 
                tools: "0 | 34 | 10 | 15 | 17 | 5",
                startingZoomScale: "ZoomOut(1)",
                elements: [],

                steps: [{

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point A, ", "circle c, Circle(A, 1)"],
                    stepsText: "Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point B, Point(c)", "segment f, Segment(A, B)"],
                    stepsText: "Select the Segment tool and draw a Segment from point A to any point on the circumference of the circle, creating point B",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle d, Circle(B, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center B and radius BA.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point C, Intersect(c, d, 1)"],
                    stepsText: "Select the Intersect tool and create Point C at the left intersection of the 2 circles.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point D, Intersect(c, d, 2)"],
                    stepsText: "Select the Intersect tool and create Point D at the right intersection of the 2 circles.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["segment g, Segment(C, B)"],
                    stepsText: "Select the Segment tool and draw a Segment CB",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["segment h, Segment(C, A)"],
                    stepsText: "Select the Segment tool and draw a Segment CA",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle e, Circle(C, B)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center C and radius CB.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point E, Intersect(d, e, 2)"],
                    stepsText: "Select the Intersect tool and create Point E at the intersection of Circle with Center B and with Circle with Center C.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point F, Intersect(c, e, 2)"],
                    stepsText: "Select the Intersect tool and create Point F at the intersection of Circle with Center C and with Circle with Center A.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["segment i, Segment(E, D)"],
                    stepsText: "Select the Segment tool and draw Segment ED.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["segment j, Segment(D, F)"],
                    stepsText: "Select the Segment tool and draw Segment DF.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["segment k, Segment(E, F)"],
                    stepsText: "Select the Segment tool and draw Segment EF."

                }],

                stepsImage: "src/assets/images/skills/details/detailTriquetra2.svg",
                geogebraFile: "/src/assets/geogebra/file_900x1000.ggb",
                thumbnailURL: "src/assets/images/skills/thumbnails/triqetra.svg",
                difficulty: "EASY  |  13 STEPS",
                requirement: "(REQUIRES VESICA PISCIS)",
                unlocksSkills: ["The Genesis Pattern"],
                overview: "The Triquetra consists of three mutually intersecting vesica piscis.",
                // overview: "The Triquetra consists of three mutually intersecting vesica piscis. The central region common to all three is a Reuleaux triangle.",
                quote: '"At that moment a huge amount of information was created."',
                quotee: "Drunvalo Melchizedek",
                geoDetailBody: `
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
                    </div>`
            }, {
                name: "The Genesis Pattern",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">G</span>
                    <span class="A_reg">enesis </span>
                    <span class="A_decor">P</span>
                    <span class="A_reg">attern</span>`,
                id: 10,
                d3Data: "#hexHoverGenesis",
                status: "locked",
                selected: false,
                type: "construction",
                elementID: "#A-detailGenesis",
                // MOVE, CIRCLE_POINT_RADIUS, CIRCLE_TWO_POINTS, INTERSECT
                tools: "0 | 34 | 10 | 5",
                zoomScale: 2.4,
                startingZoomScale: "ZoomOut(1)",
                elements: [],

                steps: [{

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point A, ", "circle c, Circle(A, 1)"],
                    stepsText: "Select the Circle:Center & Radius tool and draw a Circle with center A radius equal to 1.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point B, Point(c)", "circle d, Circle(B, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center B and radius BA.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point C, Intersect(c, d, 1)"],
                    stepsText: "Select the Intersect tool and create Point C at the left intersection of Circles A and B.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle e, Circle(C, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center C and radius CA.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point D, Intersect(c, e, 1)"],
                    stepsText: "Select the Intersect tool and create Point D at the lower intersection of Circles A and C.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle f, Circle(D, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center D and radius DA.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point E, Intersect(c, f, 1)"],
                    stepsText: "Select the Intersect tool and create Point E at the lower intersection of Circles A and D.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle g, Circle(E, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center E and radius EA.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point F, Intersect(c, g, 1)"],
                    stepsText: "Select the Intersect tool and create Point F at the lower intersection of Circles A and E.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle h, Circle(F, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center F and radius FA.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["point G, Intersect(c, d, 2)"],
                    stepsText: "Select the Intersect tool and create Point G at the intersection of Circles A, B and F.",

                }, {

                    type: "construction",
                    styleObjects: [],
                    zoomScale: 1.5,
                    correctStep: ["circle k, Circle(G, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center G and radius GA."

                }],

                thumbnailURL: "src/assets/images/skills/thumbnails/genesis.svg",
                stepsImage: "src/assets/images/skills/details/detailGenesis6.svg",
                geogebraFile: "/src/assets/geogebra/file_900x1000.ggb",
                difficulty: "EASY  |  7 STEP",
                requirement: "The Triquetra",
                unlocksSkills: ["The Egg of Life"],
                overview: "Consisting of 6 equal circles intersecting the circumference of a similar central circle. This represents the first motions of creation.",
                quote: '"...and He rested on the seventh day from all his work."',
                quotee: "Genesis 2:2",
                geoDetailBody: `<div>
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
            </div>`
            }, {
                name: "The Egg of Life",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">E</span>
                    <span class="A_reg">gg </span>
                    <span class="A_decor">O</span>
                    <span class="A_reg">f </span>
                    <span class="A_decor">L</span>
                    <span class="A_reg">ife</span>`,
                id: 11,
                d3Data: "#hexHoverEgg",
                status: "locked",
                selected: false,
                type: "construction",
                elementID: "#A-detailEgg",
                // MOVE, CIRCLE_POINT_RADIUS, CIRCLE_TWO_POINTS, INTERSECT
                tools: "0 | 34 | 10 | 5",
                zoomScale: 2.4,
                startingZoomScale: "ZoomOut(2)",
                elements: [],

                steps: [

                    {
                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["point H, Intersect(d, e, 2)"],
                        stepsText: "Select the Intersect tool and create Point H at the upper intersection of Circles B and C.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["point I, Intersect(e, f, 2)"],
                        stepsText: "Select the Intersect tool and create Point I at the left intersection of Circles C and D.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["point J, Intersect(f, g, 2)"],
                        stepsText: "Select the Intersect tool and create Point J at the lower intersection of Circles D and E.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["point K, Intersect(g, h, 2)"],
                        stepsText: "Select the Intersect tool and create Point K at the lower intersection of Circles E and F.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["point L, Intersect(h, k, 2)"],
                        stepsText: "Select the Intersect tool and create Point L at the right intersection of Circles G and F.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["point M, Intersect(d, k, 2)"],
                        stepsText: "Select the Intersect tool and create Point M at the UPPER intersection of Circles B and G.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["circle p, Circle(H, B)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center H and radius HB.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["circle q, Circle(I, C)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center I and radius IC.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["circle r, Circle(J, D)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center J and radius JD.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["circle s, Circle(K, E)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center K and radius KE.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["circle t, Circle(L, G)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center L and radius LG.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 2.4,
                        correctStep: ["circle c_1, Circle(M, B)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center M and radius MB."

                    }],

                thumbnailURL: "src/assets/images/skills/thumbnails/eggOfLife.svg",
                stepsImage: "src/assets/images/skills/details/detailEgg6.svg",
                geogebraFile: "/src/assets/geogebra/genesisPattern.ggb",
                difficulty: "EASY  |  13 STEPS",
                requirement: "REQUIRES THE GENESIS PATTERN",
                unlocksSkills: ["Completed Flower of Life"],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<div>
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
            </div>`
            }, {
                name: "Unsealed Flower Of Life",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">U</span>
                    <span class="A_reg">nsealed </span>
                    <span class="A_decor">F</span>
                    <span class="A_reg">lower </span>
                    <span class="A_decor">O</span>
                    <span class="A_reg">f </span>
                    <span class="A_decor">L</span>
                    <span class="A_reg">ife</span>`,
                id: 12,
                d3Data: "#hexHoverFOLUnseal",
                status: "locked",
                selected: false,
                type: "construction",
                elementID: "#A-detailUnsealedFOL",
                tools: "0 | 10 | 20", // MOVE, CIRCLE_TWO_POINTS, CIRCLE_ARC_THREE_POINTS
                zoomScale: 2.4,
                startingZoomScale: "ZoomOut(1.55)",
                elements: [],

                steps: [{

                    type: "combo",
                    zoomScale: 1.5,
                    styleObjects: ["d_5"],
                    correctStep: ["circle d_5, Circle(A, H_1)"],
                    stepsText: "Select the Circle:Center & Radius tool and draw a Circle with center A and radius AH<sub>1</sub>. Make sure the line thickness is set to 3.",

                }, {

                    type: "style",
                    zoomScale: 1.7,
                    styleObjects: ["k_1", "t", "h_1", "c_1", "k", "h", "s", "d_1", "d", "c", "g", "g_1", "p", "e", "f", "r", "e_1", "q", "f_1"],
                    correctStep: ["dummy container"],
                    stepsText: "Select the Move Tool and Ctrl-Click Circles with centre A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S. Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["e_5"],
                    correctStep: ["arc e_5, CircularArc(H_1, T, G_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center H<sub>1</sub> from point T to G<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["f_5"],
                    correctStep: ["arc f_5, CircularArc(T, U, H_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center T from point U to H<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["g_5"],
                    correctStep: ["arc g_5, CircularArc(U, J_1, T)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center U from point J<sub>1</sub> to T. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["h_5"],
                    correctStep: ["arc h_5, CircularArc(J_1, V, U)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center J<sub>1</sub> from point V to U. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["k_5"],
                    correctStep: ["arc k_5, CircularArc(V, W, J_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center V from point W to J<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["p_5"],
                    correctStep: ["arc p_5, CircularArc(W, L_1, V)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center W from point L<sub>1</sub> to V. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["q_5"],
                    correctStep: ["arc q_5, CircularArc(L_1, Z, W)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center L<sub>1</sub> from point Z to W. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["r_5"],
                    correctStep: ["arc r_5, CircularArc(Z, A_1, L_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center Z from point A<sub>1</sub> to L<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["s_5"],
                    correctStep: ["arc s_5, CircularArc(A_1, N_1, Z)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center A<sub>1</sub> from point N<sub>1</sub> to Z. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["t_5"],
                    correctStep: ["arc t_5, CircularArc(N_1, B_1, A_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center N<sub>1</sub> from point B<sub>1</sub> to A<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["c_6"],
                    correctStep: ["arc c_6, CircularArc(B_1, C_1, N_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center B<sub>1</sub> from point C<sub>1</sub> to N<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["d_6"],
                    correctStep: ["arc d_6, CircularArc(C_1, P_1, B_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center C<sub>1</sub> from point P<sub>1</sub> to B<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["e_6"],
                    correctStep: ["arc e_6, CircularArc(P_1, D_1, C_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center P<sub>1</sub> from point D<sub>1</sub> to C<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["f_6"],
                    correctStep: ["arc f_6, CircularArc(D_1, E_1, P_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center D<sub>1</sub> from point E<sub>1</sub> to P<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["g_6"],
                    correctStep: ["arc g_6, CircularArc(E_1, R_1, D_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center E<sub>1</sub> from point R<sub>1</sub> to D<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["h_6"],
                    correctStep: ["arc h_6, CircularArc(R_1, F_1, E_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center R<sub>1</sub> from point F<sub>1</sub> to E<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["k_6"],
                    correctStep: ["arc k_6, CircularArc(F_1, G_1, R_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center F<sub>1</sub> from point G<sub>1</sub> to R<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["p_6"],
                    correctStep: ["arc p_6, CircularArc(G_1, H_1, F_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center G<sub>1</sub> from point H<sub>1</sub> to F<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["q_6"],
                    correctStep: ["arc q_6, CircularArc(T_1, T, H_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center T<sub>1</sub> from point T to H<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["r_6"],
                    correctStep: ["arc r_6, CircularArc(I_1, U, T)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center I<sub>1</sub> from point U to T. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["s_6"],
                    correctStep: ["arc s_6, CircularArc(U_1, J_1, U)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center U<sub>1</sub> from point J<sub>1</sub> to U. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["t_6"],
                    correctStep: ["arc t_6, CircularArc(V_1, V, J_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center V<sub>1</sub> from point V to J<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["c_7"],
                    correctStep: ["arc c_7, CircularArc(K_1, W, V)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center K<sub>1</sub> from point W to V. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["d_7"],
                    correctStep: ["arc d_7, CircularArc(W_1, L_1, W)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center W<sub>1</sub> from point L<sub>1</sub> to W. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["e_7"],
                    correctStep: ["arc e_7, CircularArc(Z_1, Z, L_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center Z<sub>1</sub> from point Z to L<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["f_7"],
                    correctStep: ["arc f_7, CircularArc(M_1, A_1, Z)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center M<sub>1</sub> from point A<sub>1</sub> to Z. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["g_7"],
                    correctStep: ["arc g_7, CircularArc(A_2, N_1, A_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center A<sub>2</sub> from point N<sub>1</sub> to A<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["h_7"],
                    correctStep: ["arc h_7, CircularArc(B_2, B_1, N_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center B<sub>2</sub> from point B<sub>1</sub> to N<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["k_7"],
                    correctStep: ["arc k_7, CircularArc(O_1, C_1, B_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center O<sub>1</sub> from point C<sub>1</sub> to B<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["p_7"],
                    correctStep: ["arc p_7, CircularArc(C_2, P_1, C_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center C<sub>2</sub> from point P<sub>1</sub> to C<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["q_7"],
                    correctStep: ["arc q_7, CircularArc(D_2, D_1, P_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center D<sub>2</sub> from point D<sub>1</sub> to P<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["r_7"],
                    correctStep: ["arc r_7, CircularArc(Q_1, E_1, D_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center Q<sub>1</sub> from point E<sub>1</sub> to D<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["s_7"],
                    correctStep: ["arc s_7, CircularArc(E_2, R_1, E_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center E<sub>2</sub> from point R<sub>1</sub> to E<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["t_7"],
                    correctStep: ["arc t_7, CircularArc(F_2, F_1, R_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center F<sub>2</sub> from point F<sub>1</sub> to R<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["c_8"],
                    correctStep: ["arc c_8, CircularArc(S_1, G_1, F_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center S<sub>1</sub> from point G<sub>1</sub> to F<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }, {

                    type: "combo",
                    zoomScale: 4.5,
                    styleObjects: ["d_8"],
                    correctStep: ["arc d_8, CircularArc(G_2, H_1, G_1)"],
                    stepsText: "Select the Circular Arc tool and draw an arc with Center G<sub>2</sub> from point H<sub>1</sub> to G<sub>1</sub>. Then Make sure the line thickness is set to 3.",

                }
                ],

                thumbnailURL: "src/assets/images/skills/thumbnails/thumbUnsealedFOL.svg",
                stepsImage: "src/assets/images/skills/details/detailUnsealedFOL7.svg",
                geogebraFile: "/src/assets/geogebra/completedFOL.ggb",
                difficulty: "EASY  |  1 STEP",
                requirement: "COMPLETED FLOWER OF LIFE",
                unlocksSkills: ["Sealed Flower Of Life"],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<div>
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
                </div>`
            }, {
                name: "Sealed Flower Of Life",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">S</span>
                    <span class="A_reg">ealed </span>
                    <span class="A_decor">F</span>
                    <span class="A_reg">lower </span>
                    <span class="A_decor">O</span>
                    <span class="A_reg">f </span>
                    <span class="A_decor">L</span>
                    <span class="A_reg">ife</span>`,
                id: 13,
                d3Data: "#hexHoverFOLSeal",
                status: "locked",
                selected: false,
                type: "construction",
                elementID: "#A-detailSealedFOL",

                // tools: "0 | 34 | 15 | 17", // MOVE, CIRCLE_POINT_RADIUS, SEGMENT, TEXT 

                tools: "0 | 10 | 5 | 15 | 18 | 2",   // MOVE, CIRCLE_POINT_RADIUS, CIRCLE_TWO_POINTS, INTERSECT
                startingZoomScale: "ZoomOut(1.2)",
                elements: [],

                steps: [{

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["line i, Line(H_1, N_1)"],
                    stepsText: "To find the width of the seal, we need to draw four equal circles within the Flower of Life circle. This will create the 4 by 4 grid that we need. Select the Line tool and select points H<sub>1</sub> and N<sub>1</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["line j, Line(L, I)"],
                    stepsText: "Select the Line tool and select points L and I.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point N_2, Intersect(d_5, j, 2)"],
                    stepsText: "Select the Intersect tool and select the left intersection of line IL and Circle AH<sub>1</sub>. This will create point N<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point O_2, Intersect(d_5, j, 1)"],
                    stepsText: "Select the Intersect tool and select the right intersection of line IL and Circle AH<sub>1</sub>. This will create point O<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["circle d_8, Circle(N_2, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center N<sub>2</sub> and radius N<sub>2</sub>A.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["circle e_8, Circle(O_2, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center O<sub>2</sub> and radius O<sub>2</sub>A.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["circle f_8, Circle(H_1, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center H<sub>1</sub> and radius H<sub>1</sub>A.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["circle g_8, Circle(N_1, A)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center N<sub>1</sub> and radius N<sub>1</sub>A.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point P_2, Intersect(d_8, f_8, 2)"],
                    stepsText: "Select the Intersect tool and select the top intersection of Circle N<sub>2</sub>A and Circle H<sub>1</sub>A. This will create point P<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point Q_2, Intersect(f_8, i, 1)"],
                    stepsText: "Select the Intersect tool and select the top intersection of line H<sub>1</sub>N<sub>1</sub> and circle H<sub>1</sub>A. This will create point Q<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point R_2, Intersect(e_8, f_8, 2)"],
                    stepsText: "Select the Intersect tool and select the right intersection of circle O<sub>2</sub>A and circle H<sub>1</sub>A. This will create point R<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point S_2, Intersect(e_8, g_8, 2)"],
                    stepsText: "Select the Intersect tool and select the bottom intersection of circle O<sub>2</sub>A and circle N<sub>1</sub>A. This will create point S<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point T_2, Intersect(g_8, i, 2)"],
                    stepsText: "Select the Intersect tool and select the bottom intersection of circle N<sub>1</sub>A and line H<sub>1</sub>N<sub>1</sub>. This will create point T<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point U_2, Intersect(d_8, g_8, 2)"],
                    stepsText: "Select the Intersect tool and select the bottom intersection of circle N<sub>2</sub>A and circle N<sub>1</sub>A. This will create point U<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 1.5,
                    styleObjects: [],
                    correctStep: ["circle h_8, Circle(A, P_2)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center A and radius P<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point V_2, Intersect(h_8, j, 2)"],
                    stepsText: "Select the Intersect tool and select the left intersection of circle P<sub>2</sub>A and line IL. This will create point V<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point W_2, Intersect(h_8, i, 1)"],
                    stepsText: "Select the Intersect tool and select the top intersection of circle P<sub>2</sub>A and line H<sub>1</sub>N<sub>1</sub>. This will create point W<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point Z_2, Intersect(h_8, j, 1)"],
                    stepsText: "Select the Intersect tool and select the right intersection of circle P<sub>2</sub>A and line H<sub>1</sub>N<sub>1</sub>. This will create point Z<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point A_3, Intersect(h_8, i, 2)"],
                    stepsText: "Select the Intersect tool and select the bottom intersection of circle P<sub>2</sub>A and line H<sub>1</sub>N<sub>1</sub>. This will create point A<sub>3</sub>.",

                } , {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment l, Segment(P_2, S_2)"],
                    stepsText: "Select the Segment tool and create a segment from point P<sub>2</sub> to point S<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment m, Segment(R_2, U_2)"],
                    stepsText: "Select the Segment tool and create a segment from point R<sub>2</sub> to point U<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point B_3, Intersect(d_5, l, 1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line P<sub>2</sub>A and circle H<sub>1</sub>A. This will create pointB<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point C_3, Intersect(d_5, m, 1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line R<sub>2</sub>A and circle H<sub>1</sub>A. This will create point C<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point D_3, Intersect(d_5, l, 2)"],
                    stepsText: "Select the Intersect tool and select the intersection of line S<sub>2</sub>A and circle H<sub>1</sub>A. This will create point D<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point E_3, Intersect(d_5, m, 2)"],
                    stepsText: "Select the Intersect tool and select the intersection of line U<sub>2</sub>A and circle H<sub>1</sub>A. This will create point E<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment n, Segment(V_2, R_2)"],
                    stepsText: "Select the Segment tool and create a segment from point V<sub>2</sub> to point R<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment a, Segment(Z_2, P_2)"],
                    stepsText: "Select the Segment tool and create a segment from point Z<sub>2</sub> to point P<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment b, Segment(V_2, S_2)"],
                    stepsText: "Select the Segment tool and create a segment from point V<sub>2</sub> to point S<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment i_1, Segment(Z_2, U_2)"],
                    stepsText: "Select the Segment tool and create a segment from point Z<sub>2</sub> to point U<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point F_3, Intersect(l, n)"],
                    stepsText: "Select the Intersect tool and select the intersection of line V<sub>2</sub>R<sub>2</sub> and line P<sub>2</sub>S<sub>2</sub>. This will create point F<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point G_3, Intersect(m, a)"],
                    stepsText: "Select the Intersect tool and select the intersection of line R<sub>2</sub>U<sub>2</sub> and line P<sub>2</sub>Z<sub>2</sub>. This will create point G<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point H_3, Intersect(l, i_1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line P<sub>2</sub>S<sub>2</sub> and line Z<sub>2</sub>T<sub>2</sub>. This will create point H<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point I_3, Intersect(m, b)"],
                    stepsText: "Select the Intersect tool and select the intersection of line R<sub>2</sub>U<sub>2</sub> and line V<sub>2</sub>S<sub>2</sub>. This will create point I<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["circle k_8, Circle(F_3, B_3)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center F<sub>3</sub> and radius B<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["circle p_8, Circle(G_3, C_3)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center G<sub>3</sub> and radius C<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["circle q_8, Circle(H_3, D_3)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center H<sub>3</sub> and radius D<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["circle r_8, Circle(I_3, E_3)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center I<sub>3</sub> and radius E<sub>3</sub>.",

                }, {

                    type: "style",
                    zoomScale: 2,
                    styleObjects: ["k_8", "p_8", "q_8", "r_8"],
                    "color" : "#F40099",
                    "requiredLineThickness" : 5,
                    correctStep: ["dummy container"],
                    stepsText: "Select the Move Tool and Ctrl-Click Circles with centre F<sub>3</sub>, G<sub>3</sub>, H<sub>3</sub>, I<sub>3</sub>. In the Style Menu, set the line thickness to 5 and color to pink.",

                }, {

                    type: "style",
                    zoomScale: 2,
                    styleObjects: ["d_5"],
                    "color" : "#F40099",
                    "requiredLineThickness" : 5,
                    correctStep: ["dummy container"],
                    stepsText: "Select the Move Tool and Ctrl-Click Circle AH<sub>1</sub>. In the Style Menu, set the line thickness to 5 and color to pink.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment j_1, Segment(V_2, Q_2)"],
                    stepsText: "The following steps will find the corner points of a square. This square will 'square the circle'. Select the Segment tool and create a segment from point V<sub>2</sub> to point Q<sub>2</sub>. Set the color back to purple.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment l_1, Segment(Q_2, Z_2)"],
                    stepsText: "Select the Segment tool and create a segment from point Q<sub>2</sub> to point Z<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment m_1, Segment(Z_2, T_2)"],
                    stepsText: "Select the Segment tool and create a segment from point Z<sub>2</sub> to point T<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment n_1, Segment(T_2, V_2)"],
                    stepsText: "Select the Segment tool and create a segment from point T<sub>2</sub> to point V<sub>2</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point J_3, Intersect(l, j_1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line V<sub>2</sub>Q<sub>2</sub> and line P<sub>2</sub>B<sub>3</sub>. This will create point J<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point K_3, Intersect(m, l_1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line Q<sub>2</sub>Z<sub>2</sub> and line R<sub>2</sub>C<sub>3</sub>. This will create point K<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point L_3, Intersect(l, m_1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line Z<sub>2</sub>T<sub>2</sub> and line S<sub>2</sub>D<sub>3</sub>. This will create point L<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point M_3, Intersect(m, n_1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line T<sub>2</sub>V<sub>2</sub> and line U<sub>2</sub>E<sub>3</sub>. This will create point M<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment a_1, Segment(J_3, K_3)"],
                    stepsText: "The following steps will draw the square. Select the Segment tool and create a segment from point J<sub>3</sub> to point K<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment b_1, Segment(K_3, L_3)"],
                    stepsText: "Select the Segment tool and create a segment from point K<sub>3</sub> to point L<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment i_2, Segment(L_3, M_3)"],
                    stepsText: "Select the Segment tool and create a segment from point L<sub>3</sub> to point M<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["segment j_2, Segment(M_3, J_3)"],
                    stepsText: "Select the Segment tool and create a segment from point M<sub>3</sub> to point J<sub>3</sub>.",

                }, {

                    type: "style",
                    zoomScale: 2,
                    styleObjects: ["a_1", "b_1", "i_2", "j_2"],
                    "color" : "#F40099",
                    "requiredLineThickness" : 5,
                    correctStep: ["dummy container"],
                    stepsText: "Select the Move Tool and Ctrl-Click line J<sub>3</sub>K<sub>3</sub>, K<sub>3</sub>L<sub>3</sub>, L<sub>3</sub>M<sub>3</sub> and M<sub>3</sub>J<sub>3</sub>. In the Style Menu, set the line thickness to 5 and color to pink.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["segment l_2, Segment(G_3, F_3)"],
                    stepsText: "The following steps will find the point on the grid that will be the center of a circle. This circle will give the width of the seal. Select the Segment tool and create a segment from point G<sub>3</sub> to point F<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["segment m_2, Segment(F_3, N_3)"],
                    stepsText: "Zoom in to circle with centre F<sub>3</sub>. Select the Segment tool and select point F<sub>3</sub>. While holding down the ALT key, extend the line so that it intersects line J<sub>3</sub>M<sub>3</sub>. This will create a segment and point N<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["segment n_2, Segment(G_3, O_3)"],
                    stepsText: "Zoom in to circle with centre G<sub>3</sub>. Select the Segment tool and select point G<sub>3</sub>. While holding down the ALT key, extend the line so that it intersects line K<sub>3</sub>L<sub>3</sub>. This will create a segment and point O<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 3,
                    styleObjects: [],
                    correctStep: ["segment a_2, Segment(N_3, K_3)"],
                    stepsText: "Select the Segment tool and create a segment from N<sub>3</sub> to K<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point P_3, Intersect(i, a_2)"],
                    stepsText: "Select the Intersect tool and select the intersection of line N<sub>3</sub>K<sub>3</sub> and line O<sub>3</sub>J<sub>3</sub>. This will create point P<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point Q_3, Intersect(i, a_1)"],
                    stepsText: "Select the Intersect tool and select the intersection of line J<sub>3</sub>K<sub>3</sub> and line H<sub>1</sub>A. This will create point Q<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["circle s_8, Circle(Q_3, P_3)"],
                    stepsText: "Select the Circle with Center tool and draw a Circle with center I<sub>3</sub> and radius E<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 4,
                    styleObjects: [],
                    correctStep: ["point R_3, Intersect(s_8, i, 2)"],
                    stepsText: "Select the Intersect tool and select the intersection of line W<sub>2</sub>H<sub>1</sub> and circle with center Q<sub>3</sub>. This will create point R<sub>3</sub>.",

                }, {

                    type: "construction",
                    zoomScale: 2,
                    styleObjects: [],
                    correctStep: ["circle t_8, Circle(A, R_3)"],
                    stepsText: "Select the Circle with Center tool and draw a circle with center A and radius R<sub>3</sub>.",

                }, {

                    type: "style",
                    zoomScale: 1.7,
                    styleObjects: ["t_8"],
                    "color" : "#F40099",
                    "requiredLineThickness" : 5,
                    correctStep: ["dummy container"],
                    stepsText: "Select the Move Tool and Click the circle with center A and radius R<sub>3</sub>. In the Style Menu, set the line thickness to 5 and color to pink.",

                }, {

                    type: "style",
                    zoomScale: 3,
                    styleObjects: ["s_8", "a_2", "l_2", "m_2", "n_2"],
                    "color" : "#F40099",
                    "requiredLineThickness" : 5,
                    correctStep: ["dummy container"],
                    stepsText: "Select the Move Tool and Click segments F<sub>3</sub>G<sub>3</sub>, N<sub>3</sub>F<sub>3</sub>, G<sub>3</sub>O<sub>3</sub>, N<sub>3</sub>K<sub>3</sub> and the circle with center Q<sub>3</sub>. In the Style Menu, set the line thickness to 5 and color to pink.",

                }




                
                


                ],


                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                stepsImage: "src/assets/images/skills/details/detailSealedFOL5.svg",
                geogebraFile: "/src/assets/geogebra/unsealedFOL2.ggb",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                unlocksSkills: [],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<div>
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
                </div>`
            }, {
                name: "Completed Flower of Life",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">C</span>
                    <span class="A_reg">ompleted </span>
                    <span class="A_decor">F</span>
                    <span class="A_reg">lower </span>
                    <span class="A_decor">O</span>
                    <span class="A_reg">f </span>
                    <span class="A_decor">L</span>
                    <span class="A_reg">ife</span>`,
                id: 14,
                d3Data: "#hexHoverFullFOL",
                status: "locked",
                selected: false,
                type: "construction",
                elementID: "#A-detailCompletedFOL",
                tools: "0 | 34 | 10 | 5", // MOVE, CIRCLE_POINT_RADIUS, CIRCLE_TWO_POINTS, INTERSECT
                startingZoomScale: "ZoomOut(2)",
                elements: [],

                steps: [

                    {
                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point N, Intersect(d, p, 2)"],
                        stepsText: "Select the Intersect tool and create Point N at the upper intersection of Circles H and M.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point O, Intersect(e, p, 1)"],
                        stepsText: "Select the Intersect tool and create Point O at the left intersection of Circles C and H.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point P, Intersect(f, q, 1)"],
                        stepsText: "Select the Intersect tool and create Point P at the left intersection of Circles D and j.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point Q, Intersect(g, r, 1)"],
                        stepsText: "Select the Intersect tool and create Point Q at the lower intersection of Circles J and K.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point R, Intersect(h, s, 1)"],
                        stepsText: "Select the Intersect tool and create Point R at the right intersection of Circles F and K.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point S, Intersect(k, t, 1)"],
                        stepsText: "Select the Intersect tool and create Point S at the left intersection of Circles M and G.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle d_1, Circle(N, B)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center N and radius NB.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle e_1, Circle(O, C)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center O and radius OC.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle f_1, Circle(P, D)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center P and radius PD.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle g_1, Circle(Q, E)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center Q and radius QE.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle h_1, Circle(R, F)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center R and radius RF.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle k_1, Circle(S, G)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center S and radius SG.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point T, Intersect(p, d_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point T at the upper intersection of Circles H and N.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point U, Intersect(p, e_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point U at the upper intersection of Circles O and H.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point V, Intersect(q, e_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point V at the left intersection of Circles O and I.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point W, Intersect(q, f_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point W at the left intersection of Circles I and P.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point Z, Intersect(r, f_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point Z at the lower intersection of Circles P and J.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point A_1, Intersect(r, g_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point A<sub>1</sub> at the lower intersection of Circles J and Q.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point B_1, Intersect(s, g_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point B<sub>1</sub> at the lower intersection of Circles Q and K.",

                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point C_1, Intersect(s, h_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point C<sub>1</sub> at the lower intersection of Circles K and R.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point D_1, Intersect(t, h_1, 1)"],
                        stepsText: "Select the Intersect tool and create Point D<sub>1</sub> at the right intersection of Circles L and R.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point E_1, Intersect(t, k_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point E<sub>1</sub> at the right intersection of Circles S and L.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point F_1, Intersect(c_1, k_1, 1)"],
                        stepsText: "Select the Intersect tool and create Point F<sub>1</sub> at the upper intersection of Circles M and S.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point G_1, Intersect(c_1, d_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point G<sub>1</sub> at the upper intersection of Circles N and M.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle p_1, Circle(T, N)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center T and radius TN.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle q_1, Circle(U, H)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center U and radius UH.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle r_1, Circle(V, O)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center V and radius VO.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle s_1, Circle(W, I)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center W and radius WI.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle t_1, Circle(Z, J)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center Z and radius ZJ.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle c_2, Circle(A_1, Q)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center A<sub>1</sub> and radius A<sub>1</sub>Q.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle d_2, Circle(B_1, Q)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center B<sub>1</sub> and radius B<sub>1</sub>Q.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle e_2, Circle(C_1, K)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center C<sub>1</sub> and radius C<sub>1</sub>K.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle f_2, Circle(D_1, L)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center D<sub>1</sub> and radius D<sub>1</sub>L.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle g_2, Circle(E_1, S)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center E<sub>1</sub> and radius E<sub>1</sub>S.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle h_2, Circle(F_1, M)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center F<sub>1</sub> and radius F<sub>1</sub>M.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle k_2, Circle(G_1, N)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center G<sub>1</sub> and radius G<sub>1</sub>N.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point H_1, Intersect(d_1, p_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point H<sub>1</sub> at the upper intersection of Circles G<sub>1</sub> and T.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point I_1, Intersect(p_1, q_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point I<sub>1</sub> at the upper intersection of Circles U and T.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point J_1, Intersect(e_1, q_1, 1)"],
                        stepsText: "Select the Intersect tool and create Point J<sub>1</sub> at the left intersection of Circles U and O.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point K_1, Intersect(r_1, s_1, 2)"],
                        stepsText: "Select the Intersect tool and create Point K<sub>1</sub> at the left intersection of Circles V and W.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point L_1, Intersect(f_1, s_1, 1)"],
                        stepsText: "Select the Intersect tool and create Point L<sub>1</sub> at the left intersection of Circles P and Z.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point M_1, Intersect(t_1, c_2, 2)"],
                        stepsText: "Select the Intersect tool and create Point M<sub>1</sub> at the lower intersection of Circles Z and A<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point N_1, Intersect(g_1, c_2, 1)"],
                        stepsText: "Select the Intersect tool and create Point N<sub>1</sub> at the lower intersection of Circles A<sub>1</sub> and B<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point O_1, Intersect(d_2, e_2, 2)"],
                        stepsText: "Select the Intersect tool and create Point O<sub>1</sub> at the lower intersection of Circles B<sub>1</sub> and C<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point P_1, Intersect(h_1, e_2, 1)"],
                        stepsText: "Select the Intersect tool and create Point P<sub>1</sub> at the lower intersection of Circles C<sub>1</sub> and D<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point Q_1, Intersect(f_2, g_2, 2)"],
                        stepsText: "Select the Intersect tool and create Point Q<sub>1</sub> at the right intersection of Circles D<sub>1</sub> and E<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point R_1, Intersect(k_1, g_2, 1)"],
                        stepsText: "Select the Intersect tool and create Point R<sub>1</sub> at the upper intersection of Circles E<sub>1</sub> and F<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point S_1, Intersect(h_2, k_2, 2)"],
                        stepsText: "Select the Intersect tool and create Point S<sub>1</sub> at the upper intersection of Circles F<sub>1</sub> and G<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle p_2, Circle(H_1, N)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center H<sub>1</sub> and radius H<sub>1</sub>N.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle q_2, Circle(I_1, T)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center I<sub>1</sub> and radius I<sub>1</sub>T.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle r_2, Circle(J_1, U)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center J<sub>1</sub> and radius J<sub>1</sub>U.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle s_2, Circle(K_1, V)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center K<sub>1</sub> and radius K<sub>1</sub>V.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle t_2, Circle(L_1, P)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center L<sub>1</sub> and radius L<sub>1</sub>P.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle c_3, Circle(M_1, A_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center M<sub>1</sub> and radius M<sub>1</sub>A<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle d_3, Circle(N_1, Q)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center N<sub>1</sub> and radius N<sub>1</sub>Q.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle e_3, Circle(O_1, B_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center O<sub>1</sub> and radius O<sub>1</sub>B<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle f_3, Circle(P_1, R)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center P<sub>1</sub> and radius P<sub>1</sub>R.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle g_3, Circle(Q_1, E_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center Q<sub>1</sub> and radius Q<sub>1</sub>E<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle h_3, Circle(R_1, S)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center R<sub>1</sub> and radius R<sub>1</sub>S.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle k_3, Circle(S_1, G_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center S<sub>1</sub> and radius S<sub>1</sub>G<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point T_1, Intersect(p_1, p_2, 2)"],
                        stepsText: "Select the Intersect tool and create Point T<sub>1</sub> at the upper intersection of Circles I<sub>1</sub> and H<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point U_1, Intersect(q_1, q_2, 1)"],
                        stepsText: "Select the Intersect tool and create Point U<sub>1</sub> at the upper intersection of Circles I<sub>1</sub> and J<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point V_1, Intersect(r_1, r_2, 1)"],
                        stepsText: "Select the Intersect tool and create Point V<sub>1</sub> at the upper intersection of Circles K<sub>1</sub> and J<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point W_1, Intersect(s_1, s_2, 1)"],
                        stepsText: "Select the Intersect tool and create Point W<sub>1</sub> at the lower intersection of Circles K<sub>1</sub> and L<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point Z_1, Intersect(t_1, t_2, 1)"],
                        stepsText: "Select the Intersect tool and create Point Z<sub>1</sub> at the lower intersection of Circles L<sub>1</sub> and M<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point A_2, Intersect(c_2, c_3, 1)"],
                        stepsText: "Select the Intersect tool and create Point A<sub>2</sub> at the lower intersection of Circles M<sub>1</sub> and N<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point B_2, Intersect(d_2, d_3, 2)"],
                        stepsText: "Select the Intersect tool and create Point B<sub>2</sub> at the lower intersection of Circles N<sub>1</sub> and O<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point C_2, Intersect(e_2, e_3, 1)"],
                        stepsText: "Select the Intersect tool and create Point C<sub>2</sub> at the lower intersection of Circles O<sub>1</sub> and P<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point D_2, Intersect(f_2, f_3, 1)"],
                        stepsText: "Select the Intersect tool and create Point D<sub>2</sub> at the lower intersection of Circles P<sub>1</sub> and Q<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point E_2, Intersect(g_2, g_3, 1)"],
                        stepsText: "Select the Intersect tool and create Point E<sub>2</sub> at the upper intersection of Circles R<sub>1</sub> and Q<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point F_2, Intersect(h_2, h_3, 1)"],
                        stepsText: "Select the Intersect tool and create Point F<sub>2</sub> at the upper intersection of Circles S<sub>1</sub> and R<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point G_2, Intersect(k_2, p_2, 2)"],
                        stepsText: "Select the Intersect tool and create Point G<sub>2</sub> at the upper intersection of Circles H<sub>1</sub> and S<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle p_3, Circle(T_1, H_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center T<sub>1</sub> and radius T<sub>1</sub>H<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle q_3, Circle(U_1, U)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center U<sub>1</sub> and radius U<sub>1</sub>U.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle r_3, Circle(V_1, V)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center V<sub>1</sub> and radius V<sub>1</sub>V.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle s_3, Circle(W_1, W)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center W<sub>1</sub> and radius W<sub>1</sub>W.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle t_3, Circle(Z_1, Z)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center Z<sub>1</sub> and radius Z<sub>1</sub>Z.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle c_4, Circle(A_2, N_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center A<sub>2</sub> and radius A<sub>2</sub>N<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle d_4, Circle(B_2, N_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center B<sub>2</sub> and radius B<sub>2</sub>N<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle e_4, Circle(C_2, C_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center C<sub>2</sub> and radius C<sub>2</sub>C<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle f_4, Circle(D_2, D_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center D<sub>2</sub> and radius D<sub>2</sub>D<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle g_4, Circle(E_2, E_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center E<sub>2</sub> and radius E<sub>2</sub>E<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle h_4, Circle(F_2, F_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center F<sub>2</sub> and radius F<sub>2</sub>F<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle k_4, Circle(G_2, H_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center G<sub>2</sub> and radius G<sub>2</sub>H<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point H_2, Intersect(p_2, p_3, 2)"],
                        stepsText: "Select the Intersect tool and create Point H<sub>2</sub> at the upper intersection of Circles T<sub>1</sub> and G<sub>2</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point I_2, Intersect(r_2, q_3, 2)"],
                        stepsText: "Select the Intersect tool and create Point I<sub>2</sub> at the upper intersection of Circles V<sub>1</sub> and U<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point J_2, Intersect(t_2, s_3, 1)"],
                        stepsText: "Select the Intersect tool and create Point J<sub>2</sub> at the lower intersection of Circles W<sub>1</sub> and Z<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point K_2, Intersect(d_3, c_4, 1)"],
                        stepsText: "Select the Intersect tool and create Point K<sub>2</sub> at the lower intersection of Circles A<sub>2</sub> and B<sub>2</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point L_2, Intersect(f_3, e_4, 1)"],
                        stepsText: "Select the Intersect tool and create Point L<sub>2</sub> at the lower intersection of Circles C<sub>2</sub> and D<sub>2</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["point M_2, Intersect(h_3, g_4, 1)"],
                        stepsText: "Select the Intersect tool and create Point M<sub>2</sub> at the upper intersection of Circles F<sub>2</sub> and E<sub>2</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle p_4, Circle(H_2, H_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center H<sub>2</sub> and radius H<sub>2</sub>H<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle q_4, Circle(I_2, J_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center I<sub>2</sub> and radius I<sub>2</sub>J<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle r_4, Circle(J_2, L_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center J<sub>2</sub> and radius J<sub>2</sub>L<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle s_4, Circle(K_2, N_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center K<sub>2</sub> and radius K<sub>2</sub>N<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle t_4, Circle(L_2, P_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center L<sub>2</sub> and radius L<sub>2</sub>P<sub>1</sub>.",
                    }, {

                        type: "construction",
                        styleObjects: [],
                        zoomScale: 4.8,
                        correctStep: ["circle c_5, Circle(M_2, R_1)"],
                        stepsText: "Select the Circle with Center tool and draw a Circle with center M<sub>2</sub> and radius M<sub>2</sub>R<sub>1</sub>."
                    }],

                thumbnailURL: "src/assets/images/skills/thumbnails/thumbCompletedFOL.svg",
                stepsImage: "src/assets/images/skills/details/detailCompletedFOL5.svg",
                geogebraFile: "/src/assets/geogebra/egg.ggb",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                unlocksSkills: ["Unsealed Flower Of Life", "Fruit of Life"],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<div>
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
                </div>`
            }, {
                name: "Fruit of Life",
                formattedName: `                    
                    <span class="A_decor">T</span>
                    <span class="A_reg">he </span>
                    <span class="A_decor">F</span>
                    <span class="A_reg">ruit </span>
                    <span class="A_decor">O</span>
                    <span class="A_reg">f </span>
                    <span class="A_decor">L</span>
                    <span class="A_reg">ife</span>`,
                id: 15,
                d3Data: "#hexHoverFruitA",
                status: "locked",
                selected: false,
                type: "construction",
                elements: [],
                "objects": ["c", "d_1", "e_1", "f_1", "g_1", "h_1", "k_1", "p_4", "q_4", "r_4", "s_4", "t_4", "c_5"],                
                elementID: "#A-detailFruitOfLife",
                tools: "0", // MOVE
                zoomScale: 1,
                startingZoomScale: "ZoomOut(1.6)",

                steps: [{

                    type: "style",
                    zoomScale: 1,
                    // "color" : "#F40099",
                    "requiredLineThickness" : 3,
                    styleObjects: ["c", "d_1", "e_1", "f_1", "g_1", "h_1", "k_1", "p_4", "q_4", "r_4", "s_4", "t_4", "c_5"],
                    correctStep: [["dummy container"]],
                    stepsText: "Select the Move Tool and Ctrl-Click Circles A, N, O, P, Q, R, S, H<sub>2</sub>, I<sub>2</sub>, J<sub>2</sub>, K<sub>2</sub>, L<sub>2</sub>, M<sub>2</sub>. Click the Style Menu and select the Set line style button. Drag the slider to 3.",

                }],

                thumbnailURL: "src/assets/images/skills/thumbnails/thumbFruit.svg",
                stepsImage: "src/assets/images/skills/details/detailFruitOfLife2.svg",
                geogebraFile: "/src/assets/geogebra/completedFOL.ggb",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                unlocksSkills: ["Fruit of Life 2"],
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus",
                geoDetailBody: `<div>
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
                </div>`
            }, {
                name: "Fruit of Life 2",
                id: 16,
                d3Data: "#hexHoverFruitB",
                status: "locked",
                selected: false,
                type: "construction",
                elements: [],
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                name: "Flower Of Life Information System",
                id: 17,
                d3Data: "#hexHoverISOne",
                status: "locked",
                selected: false,
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 18,
                d3Data: ["temp", "temp"],
                status: "locked",
                selected: false,
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "20",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 19,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 20,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "REQUIRES THE TRIQUETRA",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 23,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 24,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 25,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 26,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 27,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 28,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            },
            {
                id: 29,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 30,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 31,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 32,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 33,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 34,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 35,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            },
            {
                id: 36,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            },
            {
                id: 37,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 38,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            },
            {
                id: 39,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 40,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 41,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 42,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 43,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 44,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 45,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 46,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 47,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 48,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 49,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 50,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 51,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 52,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 53,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 54,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 55,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 56,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 57,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 58,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 59,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 60,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 61,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 62,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 63,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 64,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 65,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 65,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 66,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 67,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 68,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 69,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 70,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 71,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 72,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 73,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 74,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 75,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 76,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 77,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 78,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 79,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 80,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 81,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 82,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 83,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }, {
                id: 84,
                selected: false,
                d3Data: "#temp",
                status: "locked",
                thumbnailURL: "src/assets/images/skills/thumbnails/circle.svg",
                name: "The Circle",
                difficulty: "EASY  |  1 STEP",
                requirement: "(NO REQUIREMENT)",
                completed: false,
                unlocked: false,
                overview: "A circle is a set of points on a plane that are equidistant from it's central point.",
                quote: '"...[a circle] regulates all things for us down to the humblest bounty, as it dispenses beauty, homogeneity, shapeliness and perfection."',
                quotee: "Proclus"
            }
        ]
    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }
    Arminia.skillData = skillData;
})();