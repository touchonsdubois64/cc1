// ==================================================
// BIBLIOTHÈQUE DES POSITIONS
// ==================================================
//
// Pour ajouter une position, copiez simplement un bloc
// et modifiez :
//    title = nom affiché dans le menu
//    fen   = position FEN
//
// Vous pouvez ensuite créer autant de positions
// que vous le souhaitez.
//
// ==================================================


export const libraries = {

    


    // ==================================================
    // Cases conjuguées - cc1
    // ==================================================

   ebersz: {

        title: 'Positions à 2 pôles',

        positions: [

            {
                id: 'ebersz-01',

                title:
                    'Les Blancs jouent et font nulle (Ebersz, 1930)',

                fen:
                    '6k1/1p6/1P1p4/3p4/3Pp2p/4P2p/1K5P/8 w - - 0 1'
            },

            {
                id: 'ebersz-02',

                title:
                    'Les Noirs jouent et gagnent (Ebersz, 1930)',

                fen:
                    '7k/1p6/1P1p4/3p4/3Pp2p/4P2p/1K5P/8 b - - 0 1'
            },

           {
                id: 'reichhelm-01',

                title:
                    'Les Blancs jouent et gagnent (Lasker-Reichhelm, 1901)',

                fen:
                    '8/k7/3p4/p2P1p2/P2P1P2/8/8/K7 w - - 0 1'
            },

            {
                id: 'halberstadt-01',

                title:
                    'Les Blancs jouent et gagnent (Halberstadt, 1932)',

                fen:
                    '8/k6p/3p1p1P/3P2p1/3P2P1/8/6P1/K7 w - - 0 1'
            },

        ]

    },

    halberstadt: {

        title: 'Triangulation',

        positions: [

            {
                id: 'halberstadt-01',

                title:
                    'Les Blancs jouent et font nulle',

                fen:
                    '8/k6p/3p1p1P/3P2p1/3P2P1/8/6P1/K7 w - - 0 1'
            },

            {
                id: 'halberstadt-02',

                title:
                    'Les Noirs jouent et gagnent',

                fen:
                    '7k/1p6/1P1p4/3p4/3Pp2p/4P2p/1K5P/8 b - - 0 1'
            },

           {
                id: 'ebersz-03',

                title:
                    'Les Noirs jouent et gagnent',

                fen:
                    '7k/1p6/1P1p4/3p4/3Pp2p/4P2p/7P/1K6 b - - 0 1'
            },

            
        ]

    }
    
};



