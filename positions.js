// ==================================================
// BIBLIOTHÈQUE DES POSITIONS
// ==================================================
//
// Chaque position est un objet avec :
//
//    id    = identifiant unique (texte libre, sans espace,
//            utilisé aussi pour l'image d'indice éventuelle
//            dans images/hints/<id>.png)
//
//    title = titre affiché dans le menu final et dans
//            l'export PGN
//
//    fen   = position de départ (notation FEN)
//
//    tags  = objet libre { cle: valeur, ... } servant à
//            classer et retrouver la position. Ajoutez les
//            clés que vous voulez (categorie, auteur, annee,
//            niveau, source, thème...), et laissez une clé
//            de côté si elle ne s'applique pas à une position
//            (elle apparaîtra alors sous "Non renseigné").
//
// Pour ajouter une position : copiez un bloc, changez id,
// title, fen et tags. L'ordre des positions dans ce fichier
// n'a plus d'importance pour l'affichage : le dernier menu
// est trié automatiquement par complexité croissante
// (nombre de pions dans le FEN).
// ==================================================

export const positions = [

    {
        id: 'ebersz-01',
        title: 'Ebersz (Magyar Sakkvilag, 1930)',
        fen: '6k1/1p6/1P1p4/3p4/3Pp2p/4P2p/1K5P/8 w - - 0 1',
        tags: {
            categorie: 'Positions à 2 pôles',
            auteur: 'Ebersz',
            annee: '1930',
            task: 'Les Blancs jouent et font nulle'
        }
    },

    {
        id: 'ebersz-02',
        title: 'Ebersz (Magyar Sakkvilag, 1930)',
        fen: '7k/1p6/1P1p4/3p4/3Pp2p/4P2p/1K5P/8 b - - 0 1',
        tags: {
            fronts: 'Positions à 2 pôles',
            auteur: 'Ebersz',
            annee: '1930',
            task: 'Les Noirs jouent et gagnent'
        }
    },

    {
        id: 'reichhelm-01',
        title: 'Lasker-Reichhelm (Chicago Tribune, 1901)',
        fen: '8/k7/3p4/p2P1p2/P2P1P2/8/8/K7 w - - 0 1',
        tags: {
            fronts: 'Positions à 2 pôles',
            auteur: 'Lasker-Reichhelm',
            annee: '1901',
            task: 'Les Blancs jouent et gagnent'
        }
    },

    {
        id: 'halberstadt-01',
        title: 'Halberstadt (Opposition et Conjugaison, 1932)',
        fen: '8/k6p/3p1p1P/3P2p1/3P2P1/8/6P1/K7 w - - 0 1',
        tags: {
            fronts: 'Positions à 2 pôles',
            auteur: 'Halberstadt',
            annee: '1932',
            task: 'Les Blancs jouent et gagnent'
        }
    },

   
    {
        id: 'blathy-01',
        title: 'Blathy (Vielzügige Schachaufgaben, 1890)',
        fen: 'N3k1nR/p1p1Pp2/2P1pPr1/b2pP3/P1pP1K2/2P3p1/6P1/8 w - - 0 1',
        tags: {
            degenerescence: 'Triangulation',
            auteur: 'Blathy',
            annee: '1890',
            task: 'Les Blancs jouent et gagnent'
        }
    },

    {
        id: 'grigoriev-01',
        title: 'Grigoriev (K Novoi Armii, 1920)',
        fen: '8/8/8/1p6/1P6/3P1k2/3K4/8 w - - 0 1',
        tags: {
            degenerescence: 'Triangulation',
            auteur: 'Grigoriev',
            annee: '1920',
            task: 'Les Blancs jouent et gagnent'
        }
    },


     {
        id: 'locock-01',
        title: 'Locock (British Chess Magazine, 1892)',
        fen: '6k1/3p4/3p4/3P4/4P1p1/6P1/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases',
            auteur: 'C.D. Locock',
            annee: '1892',
            ref: 'British Chess Magazine',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+3',
            ilots: '2',
            fronts: '3 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence'
        }
    },

    {
        id: 'bähr-01',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '7k/2p5/2p5/2P4p/3P1p1p/5P1P/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+5',
            ilots: '3',
            fronts: '3 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence'
        }
    },

    {
        id: 'bianchetti-01',
        title: 'Bianchetti (L\'Italia Scacchistica, 1925)',
        fen: '7k/1p6/1P2p3/1P2P3/4P1p1/6P1/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases',
            auteur: 'R. Bianchetti',
            annee: '1925',
            ref: 'L\'Italia Scacchistica',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+3',
            ilots: '3',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'sans contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence'
        }
    },

    {
        id: 'brogi-01',
        title: 'Brogi (L\'Italia Scacchistica, 1965)',
        fen: '8/4k3/2p5/2Pp4/3P2p1/3P1pP1/5P2/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases',
            auteur: 'G. Brogi',
            annee: '1965',
            ref: 'L\'Italia Scacchistica',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '2',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence'
        }
    },

    {
        id: 'bähr-02',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/3k4/p4p2/1p3P2/PP3P2/1P6/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+3',
            ilots: '2',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence'
        }
    },

    {
        id: 'zinar-01',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/3k4/1p6/5p1p/1p3P2/1P3PP1/1K6/8 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+4',
            ilots: '2',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence'
        }
    }

];


// ==================================================
// ORDRE DES TAGS = ORDRE DES MENUS DÉROULANTS
// ==================================================
//
// Cette liste pilote entièrement l'interface :
//
//   - le nombre de valeurs dans ce tableau détermine le
//     nombre de menus déroulants successifs affichés ;
//
//   - l'ordre des valeurs détermine l'ordre d'apparition
//     des menus, du premier affiché d'emblée jusqu'au
//     dernier ;
//
//   - le DERNIER tag de la liste est particulier : il ne
//     crée pas un menu de valeurs, mais donne directement
//     le menu final listant les positions correspondantes,
//     triées par complexité croissante (nombre de pions).
//
// Exemples :
//
//   ['categorie']
//       -> un seul menu, qui liste directement toutes les
//          positions triées par nombre de pions.
//
//   ['categorie', 'auteur']
//       -> 1er menu : catégorie de conjugaison
//          2e menu (final) : positions de cette catégorie,
//          triées par complexité (le tag "auteur" ne sert
//          donc plus ici qu'à activer ce 2e niveau).
//
//   ['categorie', 'auteur', 'annee']
//       -> 1er menu : catégorie
//          2e menu : auteur (parmi les positions de la
//          catégorie choisie)
//          3e menu (final) : positions correspondant à la
//          catégorie et à l'auteur choisis, triées par
//          complexité.
//
// Pour changer la hiérarchie, changez simplement l'ordre
// ou le contenu de ce tableau — aucune autre modification
// n'est nécessaire ailleurs dans le code.
// ==================================================

export const tagOrder = [''];
