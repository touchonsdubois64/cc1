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
    // Cases conjuguées - Ebersz
    // ==================================================

    ebersz: {

        title: 'K. Ebersz (Magyar Sakkvilag, 1930)',

        positions: [

            {
                id: 'ebersz-01',

                title:
                    'Les Blancs jouent et font nulle',

                fen:
                    '6k1/1p6/1P1p4/3p4/3Pp2p/4P2p/1K5P/8 w - - 0 1'
            },

            {
                id: 'ebersz-02',

                title:
                    'Les Noirs jouent et gagnent',

                fen:
                    '7k/1p6/1P1p4/3p4/3Pp2p/4P2p/1K5P/8 b - - 0 1'
            },

          
            
        ]

    }

};

