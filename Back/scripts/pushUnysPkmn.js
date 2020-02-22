var unys = [
  /*
  {
    nationalId: 494,
    name: 'Victini',
    label: '',
    shiny: false,
    types: ['Psy', 'Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 495,
    name: 'Vipelierre',
    label: 'Pokémon Serpenterbe',
    shiny: false,
    types: ['Plante'],
    weight: 8.1,
    size: 0.6,
    parents: [
      {
        nationalId: 496,
        name: 'Lianaja'
      }
    ]
  },
  {
    nationalId: 496,
    name: 'Lianaja',
    label: 'Pokémon Serpenterbe',
    shiny: false,
    types: ['Plante'],
    weight: 16.0,
    size: 0.8,
    parents: []
  },
  /* {
    nationalId: 497,
    name: 'Majaspic',
    label: '',
    shiny: false,
    types: ['Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 498,
    name: 'Gruikui',
    label: 'Pokémon Cochon Feu',
    shiny: false,
    types: ['Feu'],
    weight: 9.9,
    size: 0.5,
    parents: [
      {
        nationalId: 499,
        name: 'Grotichon'
      }
    ]
  },
  {
    nationalId: 499,
    name: 'Grotichon',
    label: 'Pokémon Cochon Feu',
    shiny: false,
    types: ['Feu', 'Combat'],
    weight: 55.5,
    size: 1.0,
    parents: []
  },
  /* {
    nationalId: 500,
    name: 'Roitiflam',
    label: '',
    shiny: false,
    types: ['Feu', 'Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 501,
    name: 'Moustillon',
    label: 'Pokémon Loutre',
    shiny: false,
    types: ['Eau'],
    weight: 5.9,
    size: 0.5,
    parents: [
      {
        nationalId: 502,
        name: 'Mateloutre'
      }
    ]
  },
  {
    nationalId: 502,
    name: 'Mateloutre',
    label: 'Pokémon Entraînement',
    shiny: false,
    types: ['Eau'],
    weight: 24.5,
    size: 0.8,
    parents: []
  },
  /* {
    nationalId: 503,
    name: 'Clamiral',
    label: '',
    shiny: false,
    types: ['Eau'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 504,
    name: 'Ratentif',
    label: 'Pokémon Espion',
    shiny: true,
    types: ['Normal'],
    weight: 11.6,
    size: 0.5,
    parents: [
      {
        nationalId: 505,
        name: 'Miradar'
      }
    ]
  },
  {
    nationalId: 505,
    name: 'Miradar',
    label: 'Pokémon Vigilant',
    shiny: true,
    types: ['Normal'],
    weight: 27.0,
    size: 1.1,
    parents: []
  },
  {
    nationalId: 506,
    name: 'Ponchiot',
    label: 'Pokémon Chiot',
    shiny: false,
    types: ['Normal'],
    weight: 4.1,
    size: 0.4,
    parents: [
      {
        nationalId: 507,
        name: 'Ponchien'
      }
    ]
  },
  {
    nationalId: 507,
    name: 'Ponchien',
    label: 'Pokémon Chien Fidèle',
    shiny: false,
    types: ['Normal'],
    weight: 14.7,
    size: 0.9,
    parents: [
      {
        nationalId: 508,
        name: 'Mastouffe'
      }
    ]
  },
  {
    nationalId: 508,
    name: 'Mastouffe',
    label: 'Pokémon Magnanime',
    shiny: false,
    types: ['Normal'],
    weight: 61.0,
    size: 1.2,
    parents: []
  },
  {
    nationalId: 509,
    name: 'Chacripan',
    label: 'Pokémon Scélérat',
    shiny: false,
    types: ['Tenebres'],
    weight: 10.1,
    size: 0.4,
    parents: [
      {
        nationalId: 510,
        name: 'Léopardus'
      }
    ]
  },
  {
    nationalId: 510,
    name: 'Léopardus',
    label: 'Pokémon Implacable',
    shiny: false,
    types: ['Tenebres'],
    weight: 37.5,
    size: 1.1,
    parents: []
  },
  /* {
    nationalId: 511,
    name: 'Feuillajou',
    label: '',
    shiny: false,
    types: ['Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 512,
    name: 'Feuiloutan',
    label: '',
    shiny: false,
    types: ['Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 513,
    name: 'Flamajou',
    label: 'Pokémon Brûlant',
    shiny: false,
    types: ['Feu'],
    weight: 11.0,
    size: 0.6,
    parents: [
      {
        nationalId: 514,
        name: 'Flamoutan'
      }
    ]
  },
  {
    nationalId: 514,
    name: 'Flamoutan',
    label: 'Pokémon Braise',
    shiny: false,
    types: ['Feu'],
    weight: 28.0,
    size: 1.0,
    parents: []
  },
  /* {
    nationalId: 515,
    name: 'Flotajou',
    label: '',
    shiny: false,
    types: ['Eau'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 516,
    name: 'Flotoutan',
    label: '',
    shiny: false,
    types: ['Eau'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 517,
    name: 'Munna',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 518,
    name: 'Mushana',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 519,
    name: 'Poichigeon',
    label: 'Pokémon Tipigeon',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 2.1,
    size: 0.3,
    parents: [
      {
        nationalId: 520,
        name: 'Colombeau'
      }
    ]
  },
  {
    nationalId: 520,
    name: 'Colombeau',
    label: 'Pokémon Sauvapigeon',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 15.0,
    size: 0.6,
    parents: [
      {
        nationalId: 521,
        name: 'Colombeau'
      }
    ]
  },
  {
    nationalId: 521,
    name: 'Deflaisan',
    label: 'Pokémon Fier',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 29.0,
    size: 1.2,
    parents: []
  },
  {
    nationalId: 522,
    name: 'Zebibron',
    label: 'Pokémon Etincélec',
    shiny: false,
    types: ['Electrik'],
    weight: 29.8,
    size: 0.8,
    parents: []
  },
  /* {
    nationalId: 523,
    name: 'Zeblitz',
    label: '',
    shiny: false,
    types: ['Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 524,
    name: 'Nodulithe',
    label: 'Pokémon Manteau',
    shiny: false,
    types: ['Roche'],
    weight: 18.0,
    size: 0.4,
    parents: []
  },
  /* {
    nationalId: 525,
    name: 'Geolithe',
    label: '',
    shiny: false,
    types: ['Roche'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 526,
    name: 'Gigalithe',
    label: '',
    shiny: false,
    types: ['Roche'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 527,
    name: 'Chovsourir',
    label: 'Pokémon Chovsouris',
    shiny: false,
    types: ['Psy', 'Vol'],
    weight: 2.1,
    size: 0.4,
    parents: [
      {
        nationalId: 528,
        name: 'Rhinolove'
      }
    ]
  },
  {
    nationalId: 528,
    name: 'Rhinolove',
    label: 'Pokémon Cupidon',
    shiny: false,
    types: ['Psy', 'Vol'],
    weight: 10.5,
    size: 0.9,
    parents: []
  },
  {
    nationalId: 529,
    name: 'Rototaupe',
    label: 'Pokémon Taupe',
    shiny: false,
    types: ['Sol'],
    weight: 8.5,
    size: 0.3,
    parents: [
      {
        nationalId: 530,
        name: 'Minotaupe'
      }
    ]
  },
  {
    nationalId: 530,
    name: 'Minotaupe',
    label: 'Pokémon Souterrain',
    shiny: false,
    types: ['Sol', 'Acier'],
    weight: 40.4,
    size: 0.7,
    parents: []
  },
  {
    nationalId: 531,
    name: 'Nanméouïe',
    label: 'Pokémon Audition',
    shiny: false,
    types: ['Normal'],
    weight: 31.0,
    size: 1.1,
    parents: []
  },
  {
    nationalId: 532,
    name: 'Charpenti',
    label: 'Pokémon Costaud',
    shiny: false,
    types: ['Combat'],
    weight: 12.5,
    size: 0.6,
    parents: []
  },
  /* {
    nationalId: 533,
    name: 'Ouvrifier',
    label: '',
    shiny: false,
    types: ['Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 534,
    name: 'Betochef',
    label: '',
    shiny: false,
    types: ['Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 535,
    name: 'Tritonde',
    label: 'Pokémon Têtard',
    shiny: false,
    types: ['Eau'],
    weight: 4.5,
    size: 0.5,
    parents: [
      {
        nationalId: 536,
        name: 'Batracné'
      }
    ]
  },
  {
    nationalId: 536,
    name: 'Batracné',
    label: 'Pokémon Vibration',
    shiny: false,
    types: ['Eau', 'Sol'],
    weight: 17.0,
    size: 0.8,
    parents: []
  },
  /* {
    nationalId: 537,
    name: 'Crapustule',
    label: '',
    shiny: false,
    types: ['Eau', 'Sol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 538,
    name: 'Judokrak',
    label: '',
    shiny: false,
    types: ['Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 539,
    name: 'Karaclée',
    label: 'Pokémon Karaté',
    shiny: false,
    types: ['Combat'],
    weight: 51.0,
    size: 1.4,
    parents: []
  },
  /* {
    nationalId: 540,
    name: 'Larveyette',
    label: '',
    shiny: false,
    types: ['Insecte', 'Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 541,
    name: 'Couverdure',
    label: '',
    shiny: false,
    types: ['Insecte', 'Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 542,
    name: 'Manternel',
    label: '',
    shiny: false,
    types: ['Insecte', 'Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 543,
    name: 'Venipatte',
    label: 'Pokémon Chilopode',
    shiny: false,
    types: ['Insecte', 'Poison'],
    weight: 5.3,
    size: 0.4,
    parents: [
      {
        nationalId: 544,
        name: 'Scobolide'
      }
    ]
  },
  {
    nationalId: 544,
    name: 'Scobolide',
    label: 'Pokémon Coconplopode',
    shiny: false,
    types: ['Insecte', 'Poison'],
    weight: 58.5,
    size: 1.2,
    parents: []
  },
  /* {
    nationalId: 545,
    name: 'Brutapode',
    label: '',
    shiny: false,
    types: ['Insecte', 'Poison'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 546,
    name: 'Doudouvet',
    label: '',
    shiny: false,
    types: ['Plante', 'Fee'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 547,
    name: 'Farfaduvet',
    label: '',
    shiny: false,
    types: ['Plante', 'Fee'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 548,
    name: 'Chlorobule',
    label: '',
    shiny: false,
    types: ['Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 549,
    name: 'Fragilady',
    label: '',
    shiny: false,
    types: ['Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 550,
    name: 'Bargantua',
    label: 'Pokémon Violent',
    shiny: false,
    types: ['Eau'],
    weight: 18.0,
    size: 1.0,
    parents: []
  },
  /* {
    nationalId: 551,
    name: 'Mascaiman',
    label: '',
    shiny: false,
    types: ['Sol', 'Tenebres'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 552,
    name: 'Escroco',
    label: '',
    shiny: false,
    types: ['Sol', 'Tenebres'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 553,
    name: 'Crocorible',
    label: '',
    shiny: false,
    types: ['Sol', 'Tenebres'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 554,
    name: 'Darumarond',
    label: '',
    shiny: false,
    types: ['Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 555,
    name: 'Darumacho',
    label: '',
    shiny: false,
    types: ['Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 556,
    name: 'Maracachi',
    label: '',
    shiny: false,
    types: ['Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 557,
    name: 'Crabicoque',
    label: 'Pokémon Lithicole',
    shiny: false,
    types: ['Insecte', 'Roche'],
    weight: 14.5,
    size: 0.3,
    parents: []
  },
  /* {
    nationalId: 558,
    name: 'Crabaraque',
    label: '',
    shiny: false,
    types: ['Insecte', 'Roche'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 559,
    name: 'Baggiguane',
    label: 'Pokémon Mue',
    shiny: false,
    types: ['Tenebres', 'Combat'],
    weight: 11.8,
    size: 0.6,
    parents: []
  },
  /* {
    nationalId: 560,
    name: 'Baggaid',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 561,
    name: 'Cryptero',
    label: '',
    shiny: false,
    types: ['Psy', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 562,
    name: 'Tutafeh',
    label: 'Pokémon Âme',
    shiny: false,
    types: ['Tenebres'],
    weight: 1.5,
    size: 0.5,
    parents: [
      {
        nationalId: 563,
        name: 'Tutankafer'
      }
    ]
  },
  {
    nationalId: 563,
    name: 'Tutankafer',
    label: 'Pokémon Cercueil',
    shiny: false,
    types: ['Tenebres'],
    weight: 76.5,
    size: 1.7,
    parents: []
  },
  /* {
    nationalId: 564,
    name: 'Carapagos',
    label: '',
    shiny: false,
    types: ['Eau', 'Roche'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 565,
    name: 'Megapagos',
    label: '',
    shiny: false,
    types: ['Eau', 'Roche'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 566,
    name: 'Arkeapti',
    label: '',
    shiny: false,
    types: ['Roche', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 567,
    name: 'Aeroptezyx',
    label: '',
    shiny: false,
    types: ['Roche', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 568,
    name: 'Miamiasme',
    label: 'Pokémon Sac Poubelle',
    shiny: false,
    types: ['Poison'],
    weight: 31.0,
    size: 0.6,
    parents: []
  },
  /* {
    nationalId: 569,
    name: 'Miasmax',
    label: '',
    shiny: false,
    types: ['Poison'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 570,
    name: 'Zorua',
    label: '',
    shiny: false,
    types: ['Tenebres'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 571,
    name: 'Zoroark',
    label: '',
    shiny: false,
    types: ['Tenebres'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 572,
    name: 'Chinchidou',
    label: 'Pokémon Chinchilla',
    shiny: false,
    types: ['Normal'],
    weight: 5.8,
    size: 0.4,
    parents: []
  },
  /* {
    nationalId: 573,
    name: 'Pashmilla',
    label: '',
    shiny: false,
    types: ['Normal'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 574,
    name: 'Scrutella',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 575,
    name: 'Mesmerella',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 576,
    name: 'Siderella',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 577,
    name: 'Nucleos',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 578,
    name: 'Meios',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 579,
    name: 'Symbios',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 580,
    name: 'Couaneton',
    label: '',
    shiny: false,
    types: ['Eau', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 581,
    name: 'Lakmecygne',
    label: '',
    shiny: false,
    types: ['Eau', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 582,
    name: 'Sorbebe',
    label: '',
    shiny: false,
    types: ['Glace'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 583,
    name: 'Sorboul',
    label: '',
    shiny: false,
    types: ['Glace'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 584,
    name: 'Sorbouboul',
    label: '',
    shiny: false,
    types: ['Glace'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 585,
    name: 'Vivaldaim',
    label: '',
    shiny: false,
    types: ['Normal', 'Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 586,
    name: 'Haydaim',
    label: '',
    shiny: false,
    types: ['Normal', 'Plante'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 587,
    name: 'Emolga',
    label: '',
    shiny: false,
    types: ['Electrik', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 588,
    name: 'Carabing',
    label: 'Pokémon Carabe',
    shiny: false,
    types: ['Insecte'],
    weight: 5.9,
    size: 0.5,
    parents: []
  },
  /* {
    nationalId: 589,
    name: 'Lancargot',
    label: '',
    shiny: false,
    types: ['Insecte', 'Acier'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 590,
    name: 'Trompignon',
    label: 'Pokémon Champignon',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 1.0,
    size: 0.2,
    parents: [
      {
        nationalId: 591,
        name: 'Gaulet'
      }
    ]
  },
  {
    nationalId: 591,
    name: 'Gaulet',
    label: 'Pokémon Champignon',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 10.5,
    size: 0.6,
    parents: []
  },
  /* {
    nationalId: 592,
    name: 'Viskuse',
    label: '',
    shiny: false,
    types: ['Eau', 'Spectre'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 593,
    name: 'Moyade',
    label: '',
    shiny: false,
    types: ['Eau', 'Spectre'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 594,
    name: 'Mamanbo',
    label: '',
    shiny: false,
    types: ['Eau'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 595,
    name: 'Statitik',
    label: '',
    shiny: false,
    types: ['Insecte', 'Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 596,
    name: 'Mygavolt',
    label: '',
    shiny: false,
    types: ['Insecte', 'Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 597,
    name: 'Grindur',
    label: '',
    shiny: false,
    types: ['Plante', 'Acier'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 598,
    name: 'Noacier',
    label: '',
    shiny: false,
    types: ['Plante', 'Acier'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 599,
    name: 'Tic',
    label: 'Pokémon Engrenage',
    shiny: false,
    types: ['Acier'],
    weight: 21.0,
    size: 0.3,
    parents: [
      {
        nationalId: 600,
        name: 'Clic'
      }
    ]
  },
  {
    nationalId: 600,
    name: 'Clic',
    label: 'Pokémon Engrenage',
    shiny: false,
    types: ['Acier'],
    weight: 51.0,
    size: 0.6,
    parents: []
  },
  /* {
    nationalId: 601,
    name: 'Cliticlic',
    label: '',
    shiny: false,
    types: ['Acier'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 602,
    name: 'Anchwatt',
    label: '',
    shiny: false,
    types: ['Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 603,
    name: 'Lamperoie',
    label: '',
    shiny: false,
    types: ['Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 604,
    name: 'Ohmassacre',
    label: '',
    shiny: false,
    types: ['Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 605,
    name: 'Lewsor',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 606,
    name: 'Neitram',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 607,
    name: 'Funécire',
    label: 'Pokémon Chandelle',
    shiny: false,
    types: ['Spectre', 'Feu'],
    weight: 3.1,
    size: 0.3,
    parents: [
      {
        nationalId: 608,
        name: 'Mélancolux'
      }
    ]
  },
  {
    nationalId: 608,
    name: 'Mélancolux',
    label: 'Pokémon Lampe',
    shiny: false,
    types: ['Spectre', 'Feu'],
    weight: 13.0,
    size: 0.6,
    parents: []
  },
  /* {
    nationalId: 609,
    name: 'Lugulabre',
    label: '',
    shiny: false,
    types: ['Spectre', 'Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 610,
    name: 'Coupenotte',
    label: '',
    shiny: false,
    types: ['Dragon'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 611,
    name: 'Incisache',
    label: '',
    shiny: false,
    types: ['Dragon'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 612,
    name: 'Tranchodon',
    label: '',
    shiny: false,
    types: ['Dragon'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 613,
    name: 'Polarhume',
    label: 'Pokémon Gelé',
    shiny: false,
    types: ['Glace'],
    weight: 8.5,
    size: 0.5,
    parents: [
      {
        nationalId: 614,
        name: 'Polagriffe'
      }
    ]
  },
  {
    nationalId: 614,
    name: 'Polagriffe',
    label: 'Pokémon Congelé',
    shiny: false,
    types: ['Glace'],
    weight: 260.0,
    size: 2.6,
    parents: []
  },
  /* {
    nationalId: 615,
    name: 'Hexagel',
    label: '',
    shiny: false,
    types: ['Glace'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 616,
    name: 'Escargaume',
    label: 'Pokémon Escargot',
    shiny: false,
    types: ['Insecte'],
    weight: 7.7,
    size: 0.4,
    parents: []
  },
  /* {
    nationalId: 617,
    name: 'Limaspeed',
    label: '',
    shiny: false,
    types: ['Insecte'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 618,
    name: 'Limonde',
    label: '',
    shiny: false,
    types: ['Sol', 'Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 619,
    name: 'Kungfouine',
    label: '',
    shiny: false,
    types: ['Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 620,
    name: 'Shaofouine',
    label: '',
    shiny: false,
    types: ['Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 621,
    name: 'Drakkarmin',
    label: '',
    shiny: false,
    types: ['Dragon'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 622,
    name: 'Gringolem',
    label: 'Pokémon Golem Ancien',
    shiny: false,
    types: ['Sol', 'Spectre'],
    weight: 92.0,
    size: 1.0,
    parents: []
  },
  /* {
    nationalId: 623,
    name: 'Golemastoc',
    label: '',
    shiny: false,
    types: ['Sol', 'Spectre'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 624,
    name: 'Scalpion',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Acier'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 625,
    name: 'Scalproie',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Acier'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 626,
    name: 'Frison',
    label: '',
    shiny: false,
    types: ['Normal'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 627,
    name: 'Furaiglon',
    label: '',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 628,
    name: 'Gueriaigle',
    label: '',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 629,
    name: 'Vostourno',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 630,
    name: 'Vaututrice',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 631,
    name: 'Aflamanoir',
    label: '',
    shiny: false,
    types: ['Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 632,
    name: 'Fermite',
    label: 'Pokémon Fourmi Dure',
    shiny: false,
    types: ['Insecte', 'Acier'],
    weight: 33.0,
    size: 0.3,
    parents: []
  },
  /* {
    nationalId: 633,
    name: 'Solochi',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Dragon'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 634,
    name: 'Diamat',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Dragon'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 635,
    name: 'Trioxhydre',
    label: '',
    shiny: false,
    types: ['Tenebres', 'Dragon'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 636,
    name: 'Pyronille',
    label: '',
    shiny: false,
    types: ['Insecte', 'Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 637,
    name: 'Pyrax',
    label: '',
    shiny: false,
    types: ['Insecte', 'Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 638,
    name: 'Cobaltium',
    label: '',
    shiny: false,
    types: ['Acier', 'Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 639,
    name: 'Terrakium',
    label: '',
    shiny: false,
    types: ['Roche', 'Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 640,
    name: 'Viridium',
    label: '',
    shiny: false,
    types: ['Plante', 'Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 641,
    name: 'Boreas',
    label: '',
    shiny: false,
    types: ['Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 642,
    name: 'Fulguris',
    label: '',
    shiny: false,
    types: ['Electrik', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 643,
    name: 'Reshiram',
    label: '',
    shiny: false,
    types: ['Dragon', 'Feu'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 644,
    name: 'Zekrom',
    label: '',
    shiny: false,
    types: ['Dragon', 'Electrik'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 645,
    name: 'Demeteros',
    label: '',
    shiny: false,
    types: ['Sol', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 646,
    name: 'Kyurem',
    label: '',
    shiny: false,
    types: ['Dragon', 'Glace'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 647,
    name: 'Keldeo',
    label: '',
    shiny: false,
    types: ['Eau', 'Combat'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 648,
    name: 'Meloetta',
    label: '',
    shiny: false,
    types: ['Normal', 'Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  },
  {
    nationalId: 649,
    name: 'Genesect',
    label: '',
    shiny: false,
    types: ['Insecte', 'Acier'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }
  */
];

unys.forEach(function(pkmn) {
  pkmn.region = 'Unys';

  try {
    db.pokemon.save(pkmn);
  } catch(e) {
    // console.log(e);
  }
});

module.exports = unys;