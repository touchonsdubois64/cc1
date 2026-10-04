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
            Auteur: 'C.D. Locock',
            'Année': '1892',
            'Référence': 'British Chess Magazine',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+3',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-01',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '7k/2p5/2p5/2P4p/3P1p1p/5P1P/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+5',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bianchetti-01',
        title: 'Bianchetti (L\'Italia Scacchistica, 1925)',
        fen: '7k/1p6/1P2p3/1P2P3/4P1p1/6P1/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            Auteur: 'R. Bianchetti',
            'Année': '1925',
            'Référence': 'L\'Italia Scacchistica',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+3',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : sans contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'brogi-01',
        title: 'Brogi (L\'Italia Scacchistica, 1965)',
        fen: '8/4k3/2p5/2Pp4/3P2p1/3P1pP1/5P2/K7 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            Auteur: 'G. Brogi',
            'Année': '1965',
            'Référence': 'L\'Italia Scacchistica',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-02',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/3k4/p4p2/1p3P2/PP3P2/1P6/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+3',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison',
            '‘Dégénérescence': '’ : sans dégénérescence'
        }
    },

    {
        id: 'zinar-01',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/3k4/1p6/5p1p/1p3P2/1P3PP1/1K6/8 w - - 0 1',
        tags: {
            categorie: 'Système à 8 Cases (8C)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-03',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/1p5k/1P2p3/1P2P3/4P1p1/5pP1/5P2/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : sans contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-02',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/1p5k/1P2p3/1P2P3/4P1p1/5pP1/K4P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : sans contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-04',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '3k4/8/5p2/1p3P2/1P3P2/1P6/3K1P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-03',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '2k5/8/5p2/1p3P2/1P3P2/1P6/5P2/4K3 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'lasker-01',
        title: 'Em. Lasker (Manchester Evening News, 1901)',
        fen: 'k7/8/3p1p2/p2P1P2/P2P4/K7/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'Em. Lasker',
            'Année': '1901',
            'Référence': 'Manchester Evening News',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+3',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'reichhelm-01',
        title: 'Reichhelm (Chicago Tribune, 1901)',
        fen: '8/k7/3p1p2/p2P1P2/P2P4/8/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'G. Reichhelm',
            'Année': '1901',
            'Référence': 'Chicago Tribune',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+3',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-04',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/2p1k3/5p1p/2p2P2/2P2PP1/8/8/2K5 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-05',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/k7/1p1p1p2/p2P1P2/P2P4/3P4/P7/K7 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'halberstadt-01',
        title: 'Halberstadt (Ceskoslovensky Sach, 1930)',
        fen: '2k5/2p2p2/2p1p3/2P1PpP1/1p1P1p2/1P3P2/1K3P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'V. Halberstadt',
            'Année': '1930',
            'Référence': 'Ceskoslovensky Sach',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 7+7',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-05',
        title: 'Bähr (Mainfrankische Zeitung, 1934)',
        fen: '7k/8/4p3/2p1P3/2p1P1p1/2P3P1/2P3K1/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'W. Bähr',
            'Année': '1934',
            'Référence': 'Mainfrankische Zeitung',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-06',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '2k5/8/3p4/3P1p2/1p1P1p2/1P3P2/1K3P2/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 3',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-07',
        title: 'Zinar (L’Italia Scacchistica, 1976)',
        fen: '8/6k1/8/pp4Pp/7P/6p1/1P4P1/K7 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'M. Zinar',
            'Année': '1976',
            'Référence': 'L’Italia Scacchistica',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-08',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/2p5/1pP3k1/1P3p2/8/5pP1/5P2/3K4 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique (Q)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'heinz-01',
        title: 'Heinz (Schach, 1966)',
        fen: '8/8/1k3p2/2p2P2/2P2P2/2P5/2K5/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            Auteur: 'J. Heinz',
            'Année': '1966',
            'Référence': 'Schach',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Dégénéré (Qd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-09',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/8/2k2p2/2p2P2/2P2P2/2P5/2K5/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Dégénéré (Qd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-10',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/8/p6p/P1p2k1P/2p5/2P5/P7/3K4 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et annulent',
            '‘Complexité': '’ : 4+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Dégénéré (Qd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-11',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/1p6/pP2p3/Pp2P3/1P2P1p1/1K4P1/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Quadratique Dégénéré (Qd)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+5',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : sans contre-attaque',
            'Type géométrique': 'Système Quadratique Dégénéré (Qd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-12',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/5p2/5P2/5p2/5P2/5K2/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Triangulaire (T3)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+2',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Triangulaire (T3)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'dawson-01',
        title: 'Dawson (The Chess Amateur, 1922)',
        fen: '8/4p1p1/1k2p1p1/p3P1P1/P1p2P2/2P5/5P2/4K3 w - - 0 1',
        tags: {
            categorie: 'Système Triangulaire (T3)',
            Auteur: 'T. Dawson',
            'Année': '1922',
            'Référence': 'The Chess Amateur',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+6',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Triangulaire (T3)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'zinar-13',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/p3kp2/P2p4/P7/P2pPp1p/3P1P1P/P7/K7 w - - 0 1',
        tags: {
            categorie: 'Système Triangulaire (T3)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 8+6',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Triangulaire (T3)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'leick-01',
        title: 'Leick (1939)',
        fen: '8/2k5/4p3/1p2P3/1P2P3/4P3/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            Auteur: 'W. Leick',
            'Année': '1939',
            'Référence': '',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Double (Q+Q)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-06',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/k6p/3p3P/3P4/3P3P/8/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Double (8C+Q)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-14',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '6k1/7p/3p3P/3P4/3P3P/7K/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Double (8C+Q)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'euwe-01',
        title: 'Euwe (Tijdschrift van den Nederlandschen Schaakbond, 1924)',
        fen: '8/5k2/p7/P3p1p1/3p2P1/3P1PP1/7K/8 w - - 0 1',
        tags: {
            categorie: 'Système Double (D)',
            Auteur: 'M. Euwe',
            'Année': '1924',
            'Référence': 'Tijdschrift van den Nederlandschen Schaakbond',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Double (Q+Qd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-15',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/3k4/8/1p5p/1P5P/P7/8/2K5 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire à 6 Cases (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-16',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '3k4/1p6/8/p1P1p1p1/P5P1/P4P2/K7/8 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire à 6 Cases (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-17',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/1k6/4p1p1/1p2P2p/1P2PP1P/8/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire à 6 Cases (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'evang-01',
        title: 'Evang (Arbeidermagasinet, 1938)',
        fen: '3k4/2p5/7p/1PK4P/8/8/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            Auteur: 'A. Evang',
            'Année': '1938',
            'Référence': 'Arbeidermagasinet',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire à 6 Cases (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-18',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/k4p2/p7/P5P1/8/8/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire à 6 Cases (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'afonin-01',
        title: 'Afonin (Shakhmaty v SSSR, 1972)',
        fen: '8/k7/3p4/7K/3p4/8/1PP5/8 w - - 0 1',
        tags: {
            categorie: 'Système Rectangulaire à 6 Cases (R6)',
            Auteur: 'S. Afonin',
            'Année': '1972',
            'Référence': 'Shakhmaty v SSSR',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+2',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire à 6 Cases (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'grigoriev-01',
        title: 'Grigoriev (Shakhmaty v SSSR, 1932)',
        fen: '5k2/6p1/2p5/2P5/6P1/5K2/8/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'N. Grigoriev',
            'Année': '1932',
            'Référence': 'Shakhmaty v SSSR',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-07',
        title: 'Bähr (1934)',
        fen: '2k5/5p1p/1p5P/1P4P1/8/8/2K5/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'W. Bähr',
            'Année': '1934',
            'Référence': '',
            task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+3',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-08',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '3k4/5p1p/1p5P/1P4P1/8/8/3K4/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+3',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-09',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/3k4/6p1/2p5/2P4P/8/2P5/3K4 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'foltys-01',
        title: 'Foltys (Ceskoslovensky Sach, 1931)',
        fen: '6k1/2p5/1pPp4/p2P2p1/P2P2P1/P7/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'J. Foltys',
            'Année': '1931',
            'Référence': 'Ceskoslovensky Sach',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+5',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-19',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '6k1/2p5/1pPp4/p2P2p1/P2P2P1/P7/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+5',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'halberstadt-02',
        title: 'Halberstadt (L’Echiquier de Paris, 1954)',
        fen: '8/3k4/8/5Pp1/4p1P1/6P1/6K1/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'V. Halberstadt',
            'Année': '1954',
            'Référence': 'L’Echiquier de Paris',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'halberstadt-03',
        title: 'Halberstadt (Schackvarlden, 1938)',
        fen: '6k1/3p4/6p1/3pP3/3P3P/1K6/8/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'V. Halberstadt',
            'Année': '1938',
            'Référence': 'Schackvarlden',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+3',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-20',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/p7/P7/3p4/6k1/3pP1p1/3P2P1/2K5 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-21',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '6k1/5p2/8/5pP1/4pP2/K2pP3/3P1P2/8 w - - 0 1',
        tags: {
            categorie: 'Système T',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-10',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '4k3/8/8/p6p/P6P/6P1/5K2/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Multiquadratique (R8)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-22',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/5k2/8/p6p/P6P/1P6/8/6K1 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Multiquadratique (R8)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'mattison-01',
        title: 'Mattison (Jaunakas Zinas, 1927)',
        fen: '8/8/1p1k4/1P5K/P1p5/2P5/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'H. Mattison',
            'Année': '1927',
            'Référence': 'Jaunakas Zinas',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Multiquadratique (R8)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'grigoriev-02',
        title: 'Grigoriev (1934)',
        fen: '8/8/1p1k4/1P6/P1p5/2P4K/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'N. Grigoriev',
            'Année': '1934',
            'Référence': '',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Multiquadratique (R8)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'grigoriev-03',
        title: 'Grigoriev (1925)',
        fen: '7k/1p1p4/3p4/P2P4/3P2p1/6P1/6P1/K7 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'N. Grigoriev',
            'Année': '1925',
            'Référence': '',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Multiquadratique (10C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-23',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '6k1/K2p4/8/3pP3/3P4/3P1p1p/5P1P/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Multiquadratique (10C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-24',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/k7/4p1p1/p3P2p/P3PP1P/8/8/K7 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Multiquadratique (10C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'ebersz-01',
        title: 'Ebersz (Magyar Sakkvilag, 1930)',
        fen: '8/1p5k/1P1p4/3p4/3Pp2p/2K1P2p/7P/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'K. Ebersz',
            'Année': '1930',
            'Référence': 'Magyar Sakkvilag',
            Task: 'Les Blancs jouent et annulent',
            '‘Complexité': '’ : 6+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : sans contre-attaque',
            'Type géométrique': 'Système Multiquadratique (13C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'ebersz-02',
        title: 'Ebersz (Magyar Sakkvilag, 1930)',
        fen: '7k/p7/P2p4/P2Pp3/4P3/4P1p1/6P1/K7 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'K. Ebersz',
            'Année': '1930',
            'Référence': 'Magyar Sakkvilag',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : sans contre-attaque',
            'Type géométrique': 'Système Multiquadratique (13C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-11',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/3k4/5p2/4pP2/1p2P3/1P2P3/5K2/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+3',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'zinar-25',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/5k2/2p5/2Pp4/3P2p1/3P2P1/8/5K2 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+3',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système à 8 Cases (8C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'ebersz-03',
        title: 'Ebersz (Magyar Sakkvilag, 1941)',
        fen: '8/8/1p4p1/1P1k4/7P/1P1K4/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'K. Ebersz',
            'Année': '1941',
            'Référence': 'Magyar Sakkvilag',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'grigoriev-04',
        title: 'Grigoriev (1920)',
        fen: 'k7/6p1/1p6/1P6/6P1/8/K7/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'N. Grigoriev',
            'Année': '1920',
            'Référence': '',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'robaszek-01',
        title: 'Robaszek (Schakend Nederland, 1991)',
        fen: '8/3k2p1/1p6/1P1K4/6P1/8/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'J. Robaszek',
            'Année': '1991',
            'Référence': 'Schakend Nederland',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'sobzcak-01',
        title: 'Sobzcak (Shakhmatnoye Obozreniye, 1981)',
        fen: '8/3k2p1/1p6/1P1K4/6P1/8/8/8 w - - 0 1',
        tags: {
            categorie: 'Système Multiquadratique',
            Auteur: 'P. Sobzcak',
            'Année': '1981',
            'Référence': 'Shakhmatnoye Obozreniye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+5',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Triangulaire (T3)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'zinar-26',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/p1p5/P4k2/1P1p3p/3P4/5p1p/3P1P1P/K7 w - - 0 1',
        tags: {
            categorie: 'Systèmes Irréguliers',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+6',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (R6vs6C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-27',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/8/1k1p3p/3P2pP/3pP2p/3P3P/3P3P/K7 w - - 0 1',
        tags: {
            categorie: 'Systèmes Irréguliers',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 7+5',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (R6vs 6C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'ebersz-04',
        title: 'Ebersz (1931)',
        fen: '8/8/2p5/2P1k3/2P2p2/2P2P2/5P2/4K3 w - - 0 1',
        tags: {
            categorie: 'Systèmes Irréguliers',
            Auteur: 'K. Ebersz',
            'Année': '1931',
            'Référence': '',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (10Cvs10C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-28',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/1p1p4/1P6/K1P1p3/4P3/4P1p1/6P1/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes Irréguliers',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (10Cvs10C)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'chapais-01',
        title: 'Chapais (1780)',
        fen: '8/8/8/5kp1/7p/5K1P/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'Chapais',
            'Année': '1780',
            'Référence': 'Manuscrit Chapais',
            Task: 'Les Blancs jouent et annulent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Dégénéré (Qd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-29',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/8/7p/7P/5KP1/8/8/8 b - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Noirs jouent et annulent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Dégénéré (Qd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-12',
        title: 'Bähr (Opposition und Kritische Felder im Bauernendspiel, 1936)',
        fen: '8/3k4/p7/8/PP6/8/8/4K3 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'W. Bähr',
            'Année': '1936',
            'Référence': 'Opposition und Kritische Felder im Bauernendspiel',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-30',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/3k4/7p/8/6PP/8/8/2K5 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-13',
        title: 'Bähr (Münchner Illustrierte, 1934)',
        fen: '4k3/8/7p/8/6P1/7P/8/4K3 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'W. Bähr',
            'Année': '1934',
            'Référence': 'Münchner Illustrierte',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (Qd+1Z)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'dunbar-01',
        title: 'Dunbar (British Chess Magazine, 1916)',
        fen: '8/8/7p/7k/5K1P/6P1/8/8 b - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'A. Dunbar',
            'Année': '1916',
            'Référence': 'British Chess Magazine',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (T3vs3C)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'mandler-01',
        title: 'Réti & A. Mandler (Tijdschrift van den Nederlandschen Schaakbond, 1921)',
        fen: '2k5/1p6/p7/8/P7/K7/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'R. Réti & A. Mandler',
            'Année': '1921',
            'Référence': 'Tijdschrift van den Nederlandschen Schaakbond',
            Task: 'Les Blancs jouent et annulent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (T3vs3C)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'mandler-02',
        title: 'Réti & Mandler (1929)',
        fen: '8/7k/7p/8/7P/6P1/5K2/8 b - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'R. Réti & A. Mandler',
            'Année': '1921',
            'Référence': 'Tijdschrift van den Nederlandschen Schaakbond',
            Task: 'Les Noirs jouent et annulent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (T3vs3C)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'grigoriev-05',
        title: 'Grigoriev (64, 1930)',
        fen: '8/7k/7p/8/7K/6PP/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'N. Grigoriev',
            'Année': '1930',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Etendu (Qe)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-31',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: 'k7/8/7p/8/8/6PP/8/K7 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Etendu (Qe)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'bähr-14',
        title: 'Bähr (La Stratégie, 1936)',
        fen: '8/8/k6p/8/8/7P/6P1/K7 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: '’ : W. Bähr',
            'Année': '1983',
            'Référence': 'La Stratégie',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Etendu (Qe)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-32',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '1k6/7p/8/7P/5P2/1K6/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Double (Qe+T3vsQd)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-33',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/7p/8/8/3K1P1P/8/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (T3+Z2)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-34',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '1k6/7p/8/8/5P2/1K5P/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique Etendu (Qe)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-35',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '7k/7p/8/8/5P1K/7P/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (T3vs3C+Z1)',
            '‘Dégénérescence': '’ : avec dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-36',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/7p/8/7P/k7/5P2/8/1K6 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-37',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '5k2/7p/8/7P/8/5PK1/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 1 front',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (Q)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-38',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/6kp/8/6K1/7P/5P2/8/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 2+1',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions non bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Quadratique (R6+Z2)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : avec excès de conjugaison'
        }
    },

    {
        id: 'zinar-39',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/1k6/1p6/5p1p/1p3P2/1P4P1/KP3P2/8 w - - 0 1',
        tags: {
            categorie: 'Systèmes de Second Ordre',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'réti-01',
        title: 'Réti (1929)',
        fen: '8/8/8/7p/1p5P/3k2P1/P7/6K1 b - - 0 1',
        tags: {
            categorie: 'Cas Complexes',
            Auteur: 'R. Réti',
            'Année': '1929',
            'Référence': '',
            Task: 'Les Noirs jouent et annulent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'réti-02',
        title: 'Réti (Sammtliche Studien, 1931)',
        fen: '6k1/p7/3K2p1/1P5p/7P/8/8/8 w - - 0 1',
        tags: {
            categorie: 'Cas Complexes',
            Auteur: 'R. Réti',
            'Année': '1929',
            'Référence': '',
            Task: 'Les Blancs jouent et annulent',
            '‘Complexité': '’ : 3+2',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Rectangulaire (R6)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-40',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '7k/1p1p4/2pP4/2P2p2/2P5/5pPp/5P1P/K7 w - - 0 1',
        tags: {
            categorie: 'Cas Complexes',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+6',
            '‘Ilôts': '’ : 2 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (Q+Z2)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-41',
        title: 'Zinar (Bulletin Problemistic, 1978)',
        fen: '8/4p1k1/7p/4pPpP/3pP1P1/3P3p/7P/K7 w - - 0 1',
        tags: {
            categorie: 'Cas Complexes',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 6+6',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 2 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : sans tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système T (T4)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-42',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/k7/1p1p1p2/5P2/1PP1P3/8/8/K7 w - - 0 1',
        tags: {
            categorie: 'Cas Complexes',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 4+3',
            '‘Ilôts': '’ : 1 ilôt',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions semi-bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (Qe+Z2)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-43',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/1k6/p4p2/2p2P2/p1P2P2/2P5/P1K5/8 w - - 0 1',
        tags: {
            categorie: 'Cas Complexes',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (R6+Z1)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },

    {
        id: 'zinar-44',
        title: 'Zinar (Shakhmatnye Okonchaniya: Peshechnye, 1983)',
        fen: '8/3k4/5p2/p1p2P2/2P2P2/p1P5/P7/2K5 w - - 0 1',
        tags: {
            categorie: 'Cas Complexes',
            Auteur: 'M. Zinar',
            'Année': '1983',
            'Référence': 'Shakhmatnye Okonchaniya: Peshechnye',
            Task: 'Les Blancs jouent et gagnent',
            '‘Complexité': '’ : 5+4',
            '‘Ilôts': '’ : 3 ilôts',
            '‘Fronts': '’ : 3 fronts',
            '‘Blocage': '’ : Pions bloqués',
            '‘Tempo': '’ : avec tempo de réserve',
            '‘Contre-Attaque': '’ : avec contre-attaque',
            'Type géométrique': 'Système Irrégulier (Qd+Z1)',
            '‘Dégénérescence': '’ : sans dégénérescence',
            '‘Excès de Conjugaison': '’ : sans excès de conjugaison'
        }
    },



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

export const tagOrder = ['Type géométrique'];
