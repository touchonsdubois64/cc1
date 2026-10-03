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
        id: 'locock-01',
        title: 'Locock (British Chess Magazine, 1892)',
        fen: '6k1/3p4/3p4/3P4/4P1p1/6P1/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            auteur: 'C.D. Locock',
            annee: '1892',
            ref: 'British Chess Magazine',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+3',
            ilots: '2 ilôts',
            fronts: '3 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-01',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '7k/2p5/2p5/2P4p/3P1p1p/5P1P/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+5',
            ilots: '3 ilôts',
            fronts: '3 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bianchetti-01',
        title: 'Bianchetti (L\'Italia Scacchistica, 1925)',
        fen: '7k/1p6/1P2p3/1P2P3/4P1p1/6P1/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            auteur: 'R. Bianchetti',
            annee: '1925',
            ref: 'L\'Italia Scacchistica',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+3',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'sans contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'brogi-01',
        title: 'Brogi (L\'Italia Scacchistica, 1965)',
        fen: '8/4k3/2p5/2Pp4/3P2p1/3P1pP1/5P2/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            auteur: 'G. Brogi',
            annee: '1965',
            ref: 'L\'Italia Scacchistica',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-02',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/3k4/p4p2/1p3P2/PP3P2/1P6/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+3',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            'exces de conjugaison': 'sans excès de conjugaison',
            degenerescence: 'sans dégénérescence'
        }
    },

    {
        id: 'zinar-01',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/3k4/1p6/5p1p/1p3P2/1P3PP1/1K6/8 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système à 8 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-03',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/1p5k/1P2p3/1P2P3/4P1p1/5pP1/5P2/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '6+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'sans contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-02',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/1p5k/1P2p3/1P2P3/4P1p1/5pP1/K4P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '6+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'sans contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-04',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '3k4/8/5p2/1p3P2/1P3P2/1P6/3K1P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-03',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '2k5/8/5p2/1p3P2/1P3P2/1P6/5P2/4K3 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'lasker-01',
        title: 'Em. Lasker (Manchester Evening News, 1901)',
        fen: 'k7/8/3p1p2/p2P1P2/P2P4/K7/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'Em. Lasker',
            annee: '1901',
            ref: 'Manchester Evening News',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+3',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'reichhelm-01',
        title: 'Reichhelm (Chicago Tribune, 1901)',
        fen: '8/k7/3p1p2/p2P1P2/P2P4/8/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'G. Reichhelm',
            annee: '1901',
            ref: 'Chicago Tribune',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+3',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-04',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/2p1k3/5p1p/2p2P2/2P2PP1/8/8/2K5 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+4',
            ilots: '2 ilôts',
            fronts: '3 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-05',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/k7/1p1p1p2/p2P1P2/P2P4/3P4/P7/K7 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '6+4',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'halberstadt-01',
        title: 'Halberstadt (Ceskoslovensky Sach, 1930)',
        fen: '2k5/2p2p2/2p1p3/2P1PpP1/1p1P1p2/1P3P2/1K3P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'V. Halberstadt',
            annee: '1930',
            ref: 'Ceskoslovensky Sach',
            task: 'Les Blancs jouent et gagnent',
            complexite: '7+7',
            ilots: '1 ilôt',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-05',
        title: 'Bähr (Mainfrankische Zeitung, 1934)',
        fen: '7k/8/4p3/2p1P3/2p1P1p1/2P3P1/2P3K1/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'W. Bähr',
            annee: '1934',
            ref: 'Mainfrankische Zeitung',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-06',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '2k5/8/3p4/3P1p2/1p1P1p2/1P3P2/1K3P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '3',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-07',
        title: 'Zinar (L’Italia Scacchistica, 1976)',
        fen: '8/6k1/8/pp4Pp/7P/6p1/1P4P1/K7 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'M. Zinar',
            annee: '1976',
            ref: 'L’Italia Scacchistica',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions non bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-08',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/2p5/1pP3k1/1P3p2/8/5pP1/5P2/3K4 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'heinz-01',
        title: 'Heinz (Schach, 1966)',
        fen: '8/8/1k3p2/2p2P2/2P2P2/2P5/2K5/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            auteur: 'J. Heinz',
            annee: '1966',
            ref: 'Schach',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+2',
            ilots: '2 ilôts',
            fronts: '3 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique Dégénéré',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-09',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/8/2k2p2/2p2P2/2P2P2/2P5/2K5/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+2',
            ilots: '2 ilôts',
            fronts: '3 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique Dégénéré',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-10',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/8/p6p/P1p2k1P/2p5/2P5/P7/3K4 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et annulent',
            complexite: '4+4',
            ilots: '3 ilôts',
            fronts: '3 fronts',
            blocage: 'Pions bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Quadratique Dégénéré',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-11',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/1p6/pP2p3/Pp2P3/1P2P1p1/1K4P1/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '6+5',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'sans contre-attaque',
            geometrie: 'Système Quadratique Dégénéré',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-12',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/5p2/5P2/5p2/5P2/5K2/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Triangulaire (3C)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '2+2',
            ilots: '1 ilôt',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Triangulaire',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'dawson-01',
        title: 'Dawson (The Chess Amateur, 1922)',
        fen: '8/4p1p1/1k2p1p1/p3P1P1/P1p2P2/2P5/5P2/4K3 w - - 0 1',
        tags: {
            categorie: 'Système Triangulaire (3C)',
            auteur: 'T. Dawson',
            annee: '1922',
            ref: 'The Chess Amateur',
            task: 'Les Blancs jouent et gagnent',
            complexite: '6+6',
            ilots: '3 ilôts',
            fronts: '1 front',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Triangulaire',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'avec excès de conjugaison'
        }
    },

    {
        id: 'zinar-13',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/p3kp2/P2p4/P7/P2pPp1p/3P1P1P/P7/K7 w - - 0 1',
        tags: {
            categorie: 'Système Triangulaire (3C)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '8+6',
            ilots: '3 ilôts',
            fronts: '1 front',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Triangulaire',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'avec excès de conjugaison'
        }
    },

    {
        id: 'leick-01',
        title: 'Leick (1939)',
        fen: '8/2k5/4p3/1p2P3/1P2P3/4P3/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            auteur: 'W. Leick',
            annee: '1939',
            ref: '',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Double (Q+Q)',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-06',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/k6p/3p3P/3P4/3P3P/8/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Double (8C+Q)',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-14',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '6k1/7p/3p3P/3P4/3P3P/7K/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Double (8C+Q)',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'euwe-01',
        title: 'Euwe (Tijdschrift van den Nederlandschen Schaakbond, 1924)',
        fen: '8/5k2/p7/P3p1p1/3p2P1/3P1PP1/7K/8 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            auteur: 'M. Euwe',
            annee: '1924',
            ref: 'Tijdschrift van den Nederlandschen Schaakbond',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Double (Q+Qd)',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-15',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/3k4/8/1p5p/1P5P/P7/8/2K5 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Rectangulaire à 6 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-16',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '3k4/1p6/8/p1P1p1p1/P5P1/P4P2/K7/8 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Rectangulaire à 6 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-17',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/1k6/4p1p1/1p2P2p/1P2PP1P/8/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Rectangulaire à 6 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'evang-01',
        title: 'Evang (Arbeidermagasinet, 1938)',
        fen: '3k4/2p5/7p/1PK4P/8/8/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            auteur: 'A. Evang',
            annee: '1938',
            ref: 'Arbeidermagasinet',
            task: 'Les Blancs jouent et gagnent',
            complexite: '2+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Rectangulaire à 6 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-18',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/k4p2/p7/P5P1/8/8/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '2+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Rectangulaire à 6 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'afonin-01',
        title: 'Afonin (Shakhmaty v SSSR, 1972)',
        fen: '8/k7/3p4/7K/3p4/8/1PP5/8 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            auteur: 'S. Afonin',
            annee: '1972',
            ref: 'Shakhmaty v SSSR',
            task: 'Les Blancs jouent et gagnent',
            complexite: '2+2',
            ilots: '1 ilôt',
            fronts: '1 front',
            blocage: 'Pions non bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système Rectangulaire à 6 Cases',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'grigoriev-01',
        title: 'Grigoriev (Shakhmaty v SSSR, 1932)',
        fen: '5k2/6p1/2p5/2P5/6P1/5K2/8/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'N. Grigoriev',
            annee: '1932',
            ref: 'Shakhmaty v SSSR',
            task: 'Les Blancs jouent et gagnent',
            complexite: '2+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-07',
        title: 'Bähr (1934)',
        fen: '2k5/5p1p/1p5P/1P4P1/8/8/2K5/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'W. Bähr',
            annee: '1934',
            ref: '',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+3',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-08',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '3k4/5p1p/1p5P/1P4P1/8/8/3K4/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+3',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-09',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/3k4/6p1/2p5/2P4P/8/2P5/3K4 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'W. Bähr',
            annee: '1936',
            ref: 'Opposition und Kritische Felder im Bauernendspiel',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+2',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'avec tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'avec dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-19',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '6k1/2p5/1pPp4/p2P2p1/P2P2P1/P7/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '6+5',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'halberstadt-02',
        title: 'Halberstadt (L’Echiquier de Paris, 1954)',
        fen: '8/3k4/8/5Pp1/4p1P1/6P1/6K1/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'V. Halberstadt',
            annee: '1954',
            ref: 'L’Echiquier de Paris',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+2',
            ilots: '1 ilôt',
            fronts: '2 fronts',
            blocage: 'Pions non bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'halberstadt-03',
        title: 'Halberstadt (Schackvarlden, 1938)',
        fen: '6k1/3p4/6p1/3pP3/3P3P/1K6/8/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'V. Halberstadt',
            annee: '1938',
            ref: 'Schackvarlden',
            task: 'Les Blancs jouent et gagnent',
            complexite: '3+3',
            ilots: '2 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-20',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/p7/P7/3p4/6k1/3pP1p1/3P2P1/2K5 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '4+4',
            ilots: '3 ilôts',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-21',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '6k1/5p2/8/5pP1/4pP2/K2pP3/3P1P2/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            auteur: 'M. Zinar',
            annee: '1983',
            ref: 'Shakhmatnye Okonchaniya: Peshechnye',
            task: 'Les Blancs jouent et gagnent',
            complexite: '5+4',
            ilots: '1 ilôt',
            fronts: '2 fronts',
            blocage: 'Pions semi-bloqués',
            tempo: 'sans tempo de réserve',
            'contre-attaque': 'avec contre-attaque',
            geometrie: 'Système T',
            degenerescence: 'sans dégénérescence',
            'exces de conjugaison': 'sans excès de conjugaison'
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

export const tagOrder = ['geometrie'];
