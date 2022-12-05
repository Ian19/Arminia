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

    class InfoSystem extends Arminia.GameObject {

        constructor(game, name, pos, data) {            
            super(name, game);
            this.parent = game.main;
            this.position = pos;
            this.infoSystemData = data;
        }

    };

    if (window.Arminia === undefined) {
        window.Arminia = {};
    }

    Arminia.InfoSystem = InfoSystem;

})();