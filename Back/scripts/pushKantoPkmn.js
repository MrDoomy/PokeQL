var kanto = [
  {
    nationalId: 1,
    name: 'Bulbizarre',
    label: 'Pokémon Graine',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 6.9,
    size: 0.7,    
    parents: [
      {
        nationalId: 2,
        name: 'Herbizarre'
      }
    ]
  },
  {
    nationalId: 2,
    name: 'Herbizarre',
    label: 'Pokémon Graine',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 13.0,
    size: 1.0,    
    parents: [
      {
        nationalId: 3,
        name: 'Florizarre'
      }
    ]
  },
  {
    nationalId: 3,
    name: 'Florizarre',
    label: 'Pokémon Graine',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 100.0,
    size: 2.0,
    parents: []
  },
  {
    nationalId: 4,
    name: 'Salamèche',
    label: 'Pokémon Lézard',
    shiny: false,
    types: ['Feu'],
    weight: 8.5,
    size: 0.6,    
    parents: [
      {
        nationalId: 5,
        name: 'Reptincel'
      }
    ]
  },
  {
    nationalId: 5,
    name: 'Reptincel',
    label: 'Pokémon Flamme',
    shiny: false,
    types: ['Feu'],
    weight: 19.0,
    size: 1.1,    
    parents: [
      {
        nationalId: 6,
        name: 'Dracaufeu'
      }
    ]
  },
  {
    nationalId: 6,
    name: 'Dracaufeu',
    label: 'Pokémon Flamme',
    shiny: false,
    types: ['Feu', 'Vol'],
    weight: 90.5,
    size: 1.7,
    parents: []
  },
  {
    nationalId: 7,
    name: 'Carapuce',
    label: 'Pokémon Mini-Tortue',
    shiny: true,
    types: ['Eau'],
    weight: 9.0,
    size: 0.5,    
    parents: [
      {
        nationalId: 8,
        name: 'Carabaffe'
      }
    ]
  },
  {
    nationalId: 8,
    name: 'Carabaffe',
    label: 'Pokémon Tortue',
    shiny: true,
    types: ['Eau'],
    weight: 22.5,
    size: 1.0,    
    parents: [
      {
        nationalId: 9,
        name: 'Tortank'
      }
    ]
  },
  {
    nationalId: 9,
    label: 'Pokémon Carapace',
    shiny: true,
    types: ['Eau'],
    name: 'Tortank',
    weight: 85.5,
    size: 1.6,
    parents: []
  },
  {
    nationalId: 10,
    name: 'Chenipan',
    label: 'Pokémon Ver',
    shiny: false,
    types: ['Insecte'],
    weight: 2.9,
    size: 3.3,    
    parents: [
      {
        nationalId: 11,
        name: 'Chrysacier'
      }
    ]
  },
  {
    nationalId: 11,
    name: 'Chrysacier',
    label: 'Pokémon Cocon',
    shiny: false,
    types: ['Insecte'],
    weight: 9.9,
    size: 0.7,    
    parents: [
      {
        nationalId: 12,
        name: 'Papilusion'
      }
    ]
  },
  {
    nationalId: 12,
    name: 'Papilusion',
    label: 'Pokémon Papillon',
    shiny: false,
    types: ['Insecte', 'Vol'],
    weight: 32.0,
    size: 1.1,
    parents: []
  },
  {
    nationalId: 13,
    name: 'Aspicot',
    label: 'Pokémon Insectopic',
    shiny: false,
    types: ['Insecte'],
    weight: 3.2,
    size: 0.3,    
    parents: [
      {
        nationalId: 14,
        name: 'Coconfort'
      }
    ]
  },
  {
    nationalId: 14,
    name: 'Coconfort',
    label: 'Pokémon Cocon',
    shiny: false,
    types: ['Insecte', 'Poison'],
    weight: 10.0,
    size: 0.6,    
    parents: [
      {
        nationalId: 15,
        name: 'Dardargnan'
      }
    ]
  },
  {
    nationalId: 15,
    name: 'Dardargnan',
    label: 'Pokémon Guépoison',
    shiny: false,
    types: ['Insecte', 'Poison'],
    weight: 29.5,
    size: 1.0,
    parents: [],
  },
  {
    nationalId: 16,
    name: 'Roucool',
    label: 'Pokémon Minoiseau',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 1.8,
    size: 0.3,    
    parents: [
      {
        nationalId: 17,
        name: 'Roucoups'
      }
    ]
  },
  {
    nationalId: 17,
    name: 'Roucoups',
    label: 'Pokémon Oiseau',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 30.0,
    size: 1.1,    
    parents: [
      {
        nationalId: 18,
        name: 'Roucarnage'
      }
    ]
  },
  {
    nationalId: 18,
    name: 'Roucarnage',
    label: 'Pokémon Oiseau',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 39.5,
    size: 1.5,
    parents: []
  },
  {
    nationalId: 19,
    name: 'Rattata',
    label: 'Pokémon Souris',
    shiny: false,
    types: ['Normal'],
    weight: 3.5,
    size: 0.3,    
    parents: [
      {
        nationalId: 20,
        name: 'Rattatac'
      }
    ]
  },
  {
    nationalId: 20,
    name: 'Rattatac',
    label: 'Pokémon Souris',
    shiny: false,
    types: ['Normal'],
    weight: 18.5,
    size: 0.7,
    parents: []
  },
  {
    nationalId: 21,
    name: 'Piafabec',
    label: 'Pokémon Minoiseau',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 2.0,
    size: 0.3,    
    parents: [
      {
        nationalId: 22,
        name: 'Rapasdepic'
      }
    ]
  },
  {
    nationalId: 22,
    name: 'Rapasdepic',
    label: 'Pokémon Bec-Oiseau',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 38.0,
    size: 1.2,
    parents: []
  },
  {
    nationalId: 23,
    name: 'Abo',
    label: 'Pokémon Serpent',
    shiny: false,
    types: ['Poison'],
    weight: 6.9,
    size: 2.0,    
    parents: [
      {
        nationalId: 24,
        name: 'Arbok'
      }
    ]
  },
  {
    nationalId: 24,
    name: 'Arbok',
    label: 'Pokémon Cobra',
    shiny: false,
    types: ['Poison'],
    weight: 65.0,
    size: 3.5,
    parents: []
  },
  {
    nationalId: 25,
    name: 'Pikachu',
    label: 'Pokémon Souris',
    shiny: true,
    types: ['Electrik'],
    weight: 6.0,
    size: 0.4,    
    parents: [
      {
        nationalId: 26,
        name: 'Raichu'
      }
    ]
  },
  {
    nationalId: 26,
    name: 'Raichu',
    label: 'Pokémon Souris',
    shiny: true,
    types: ['Electrik'],
    weight: 30.0,
    size: 0.8,
    parents: []
  },
  {
    nationalId: 27,
    name: 'Sabelette',
    label: 'Pokémon Souris',
    shiny: false,
    types: ['Sol'],
    weight: 12.0,
    size: 0.6,    
    parents: [
      {
        nationalId: 28,
        name: 'Sablaireau'
      }
    ]
  },
  {
    nationalId: 28,
    name: 'Sablaireau',
    label: 'Pokémon Souris',
    shiny: false,
    types: ['Sol'],
    weight: 29.5,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 29,
    name: 'Nidoran♀',
    label: 'Pokémon Vénépic',
    shiny: true,
    types: ['Poison'],
    weight: 7.0,
    size: 0.4,    
    parents: [
      {
        nationalId: 30,
        name: 'Nidorina'
      }
    ]
  },
  {
    nationalId: 30,
    name: 'Nidorina',
    label: 'Pokémon Vénépic',
    shiny: true,
    types: ['Poison'],
    weight: 20.0,
    size: 0.8,    
    parents: [
      {
        nationalId: 31,
        name: 'Nidoqueen'
      }
    ]
  },
  {
    nationalId: 31,
    name: 'Nidoqueen',
    label: 'Pokémon Perceur',
    shiny: false,
    types: ['Poison', 'Sol'],
    weight: 60.0,
    size: 1.3,
    parents: []
  },
  {
    nationalId: 32,
    name: 'Nidoran♂',
    label: 'Pokémon Vénépic',
    shiny: false,
    types: ['Poison'],
    weight: 9.0,
    size: 0.5,    
    parents: [
      {
        nationalId: 33,
        name: 'Nidorino'
      }
    ]
  },
  {
    nationalId: 33,
    name: 'Nidorino',
    label: 'Pokémon Vénépic',
    shiny: false,
    types: ['Poison'],
    weight: 19.5,
    size: 0.9,    
    parents: [
      {
        nationalId: 34,
        name: 'Nidoking'
      }
    ]
  },
  {
    nationalId: 34,
    name: 'Nidoking',
    label: 'Pokémon Perceur',
    shiny: false,
    types: ['Poison', 'Sol'],
    weight: 62.0,
    size: 1.4,
    parents: []
  },
  {
    nationalId: 35,
    name: 'Mélofée',
    label: 'Pokémon Fée',
    shiny: false,
    types: ['Fee'],
    weight: 7.5,
    size: 0.6,    
    parents: [
      {
        nationalId: 36,
        name: 'Mélodelfe'
      }
    ]
  },
  {
    nationalId: 36,
    name: 'Mélodelfe',
    label: 'Pokémon Fée',
    shiny: false,
    types: ['Fee'],
    weight: 40.0,
    size: 1.3,
    parents: []
  },
  {
    nationalId: 37,
    name: 'Goupix',
    label: 'Pokémon Renard',
    shiny: false,
    types: ['Feu'],
    weight: 9.9,
    size: 0.6,    
    parents: [
      {
        nationalId: 38,
        name: 'Feunard'
      }
    ]
  },
  {
    nationalId: 38,
    name: 'Feunard',
    label: 'Pokémon Renard',
    shiny: false,
    types: ['Feu'],
    weight: 19.9,
    size: 1.1,
    parents: []
  },
  {
    nationalId: 39,
    name: 'Rondoudou',
    label: 'Pokémon Bouboule',
    shiny: false,
    types: ['Normal', 'Fee'],
    weight: 5.5,
    size: 0.5,    
    parents: [
      {
        nationalId: 40,
        name: 'Grodoudou'
      }
    ]
  },
  {
    nationalId: 40,
    name: 'Grodoudou',
    label: 'Pokémon Bouboule',
    shiny: false,
    types: ['Normal', 'Fee'],
    weight: 12.0,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 41,
    name: 'Nosferati',
    label: 'Pokémon Chov-Souris',
    shiny: false,
    types: ['Poison', 'Vol'],
    weight: 7.5,
    size: 0.8,    
    parents: [
      {
        nationalId: 42,
        name: 'Nosferalto'
      }
    ]
  },
  {
    nationalId: 42,
    name: 'Nosferalto',
    label: 'Pokémon Chov-Souris',
    shiny: false,
    types: ['Poison', 'Vol'],
    weight: 55.0,
    size: 1.6,    
    parents: [
      {
        nationalId: 169,
        name: 'Nostenfer'
      }
    ]
  },
  {
    nationalId: 43,
    name: 'Mystherbe',
    label: 'Pokémon Racine',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 5.4,
    size: 0.5,    
    parents: [
      {
        nationalId: 44,
        name: 'Ortide'
      }
    ]
  },
  {
    nationalId: 44,
    name: 'Ortide',
    label: 'Pokémon Racine',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 8.6,
    size: 0.8,    
    parents: [
      {
        nationalId: 45,
        name: 'Rafflesia'
      }
    ]
  },
  {
    nationalId: 45,
    name: 'Rafflesia',
    label: 'Pokémon Fleur',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 18.6,
    size: 1.2,
    parents: []
  },
  {
    nationalId: 46,
    name: 'Paras',
    label: 'Pokémon Champignon',
    shiny: false,
    types: ['Insecte', 'Plante'],
    weight: 5.4,
    size: 0.3,    
    parents: [
      {
        nationalId: 47,
        name: 'Parasect'
      }
    ]
  },
  {
    nationalId: 47,
    name: 'Parasect',
    label: 'Pokémon Champignon',
    shiny: false,
    types: ['Insecte', 'Plante'],
    weight: 29.5,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 48,
    name: 'Mimitoss',
    label: 'Pokémon Vermine',
    shiny: false,
    types: ['Insecte', 'Poison'],
    weight: 30.0,
    size: 1.0,    
    parents: [
      {
        nationalId: 49,
        name: 'Aéromite'
      }
    ]
  },
  {
    nationalId: 49,
    name: 'Aéromite',
    label: 'Pokémon Papipoison',
    shiny: false,
    types: ['Insecte', 'Poison'],
    weight: 12.5,
    size: 1.5,
    parents: []
  },
  {
    nationalId: 50,
    name: 'Taupiqueur',
    label: 'Pokémon Taupe',
    shiny: false,
    types: ['Sol'],
    weight: 0.8,
    size: 0.2,    
    parents: [
      {
        nationalId: 51,
        name: 'Triopikeur'
      }
    ]
  },
  {
    nationalId: 51,
    name: 'Triopikeur',
    label: 'Pokémon Taupe',
    shiny: false,
    types: ['Sol'],
    weight: 33.3,
    size: 0.7,
    parents: []
  },
  {
    nationalId: 52,
    name: 'Miaouss',
    label: 'Pokémon Chadégout',
    shiny: false,
    types: ['Normal'],
    weight: 4.2,
    size: 0.4,    
    parents: [
      {
        nationalId: 53,
        name: 'Persian'
      }
    ]
  },
  {
    nationalId: 53,
    name: 'Persian',
    label: 'Pokémon Chadeville',
    shiny: false,
    types: ['Normal'],
    weight: 32.0,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 54,
    name: 'Psykokwak',
    label: 'Pokémon Canard',
    shiny: false,
    types: ['Eau'],
    weight: 19.6,
    size: 0.8,    
    parents: [
      {
        nationalId: 55,
        name: 'Akwakwak'
      }
    ]
  },
  {
    nationalId: 55,
    name: 'Akwakwak',
    label: 'Pokémon Canard',
    shiny: false,
    types: ['Eau'],
    weight: 76.6,
    size: 1.7,
    parents: []
  },
  {
    nationalId: 56,
    name: 'Férosinge',
    label: 'Pokémon Porsinge',
    shiny: false,
    types: ['Combat'],
    weight: 28.0,
    size: 0.5,    
    parents: [
      {
        nationalId: 57,
        name: 'Colossinge'
      }
    ]
  },
  {
    nationalId: 57,
    name: 'Colossinge',
    label: 'Pokémon Porsinge',
    shiny: false,
    types: ['Combat'],
    weight: 32.0,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 58,
    name: 'Caninos',
    label: 'Pokémon Chiot',
    shiny: false,
    types: ['Feu'],
    weight: 19.0,
    size: 0.7,    
    parents: [
      {
        nationalId: 59,
        name: 'Arcanin'
      }
    ]
  },
  {
    nationalId: 59,
    name: 'Arcanin',
    label: 'Pokémon Légendaire',
    shiny: false,
    types: ['Feu'],
    weight: 155.0,
    size: 1.9,
    parents: []
  },
  {
    nationalId: 60,
    name: 'Ptitard',
    label: 'Pokémon Têtard',
    shiny: false,
    types: ['Eau'],
    weight: 12.4,
    size: 0.6,    
    parents: [
      {
        nationalId: 61,
        name: 'Têtarte'
      }
    ]
  },
  {
    nationalId: 61,
    name: 'Têtarte',
    label: 'Pokémon Têtard',
    shiny: false,
    types: ['Eau'],
    weight: 20.0,
    size: 1.0,    
    parents: [
      {
        nationalId: 62,
        name: 'Tartard'
      }
    ]
  },
  {
    nationalId: 62,
    name: 'Tartard',
    label: 'Pokémon Têtard',
    shiny: false,
    types: ['Eau', 'Combat'],
    weight: 54.0,
    size: 1.3,
    parents: []
  },
  {
    nationalId: 63,
    name: 'Abra',
    label: 'Pokémon Psy',
    shiny: false,
    types: ['Psy'],
    weight: 19.5,
    size: 0.9,    
    parents: [
      {
        nationalId: 64,
        name: 'Kadabra'
      }
    ]
  },
  {
    nationalId: 64,
    name: 'Kadabra',
    label: 'Pokémon Psy',
    shiny: false,
    types: ['Psy'],
    weight: 56.5,
    size: 1.3,    
    parents: [
      {
        nationalId: 65,
        name: 'Alakazam'
      }
    ]
  },
  {
    nationalId: 65,
    name: 'Alakazam',
    label: 'Pokémon Psy',
    shiny: false,
    types: ['Psy'],
    weight: 48.0,
    size: 1.5,
    parents: []
  },
  {
    nationalId: 66,
    name: 'Machoc',
    label: 'Pokémon Colosse',
    shiny: false,
    types: ['Combat'],
    weight: 19.5,
    size: 0.8,    
    parents: [
      {
        nationalId: 67,
        name: 'Machopeur'
      }
    ]
  },
  {
    nationalId: 67,
    name: 'Machopeur',
    label: 'Pokémon Colosse',
    shiny: false,
    types: ['Combat'],
    weight: 70.5,
    size: 1.5,    
    parents: [
      {
        nationalId: 68,
        name: 'Mackogneur'
      }
    ]
  },
  {
    nationalId: 68,
    name: 'Mackogneur',
    label: 'Pokémon Colosse',
    shiny: false,
    types: ['Combat'],
    weight: 130.0,
    size: 1.6,
    parents: []
  },
  {
    nationalId: 69,
    name: 'Chétiflor',
    label: 'Pokémon Fleur',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 4.0,
    size: 0.7,    
    parents: [
      {
        nationalId: 70,
        name: 'Boustiflor'
      }
    ]
  },
  {
    nationalId: 70,
    name: 'Boustiflor',
    label: 'Pokémon Fleur',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 6.4,
    size: 1.0,    
    parents: [
      {
        nationalId: 71,
        name: 'Empiflor'
      }
    ]
  },
  {
    nationalId: 71,
    name: 'Empiflor',
    label: 'Pokémon Carnivore',
    shiny: false,
    types: ['Plante', 'Poison'],
    weight: 15.5,
    size: 1.7,
    parents: []
  },
  {
    nationalId: 72,
    name: 'Tentacool',
    label: 'Pokémon Mollusque',
    shiny: false,
    types: ['Eau', 'Poison'],
    weight: 45.5,
    size: 0.9,    
    parents: [
      {
        nationalId: 73,
        name: 'Tentacruel'
      }
    ]
  },
  {
    nationalId: 73,
    name: 'Tentacruel',
    label: 'Pokémon Mollusque',
    shiny: false,
    types: ['Eau', 'Poison'],
    weight: 55.0,
    size: 1.6,
    parents: []
  },
  {
    nationalId: 74,
    name: 'Racaillou',
    label: 'Pokémon Roche',
    shiny: false,
    types: ['Roche', 'Sol'],
    weight: 20.0,
    size: 0.4,    
    parents: [
      {
        nationalId: 75,
        name: 'Gravalanch'
      }
    ]
  },
  {
    nationalId: 75,
    name: 'Gravalanch',
    label: 'Pokémon Roche',
    shiny: false,
    types: ['Roche', 'Sol'],
    weight: 105.0,
    size: 1.0,    
    parents: [
      {
        nationalId: 76,
        name: 'Grolem'
      }
    ]
  },
  {
    nationalId: 76,
    name: 'Grolem',
    label: 'Pokémon Titanesque',
    shiny: false,
    types: ['Roche', 'Sol'],
    weight: 300.0,
    size: 1.4,
    parents: []
  },
  {
    nationalId: 77,
    name: 'Ponyta',
    label: 'Pokémon Cheval Feu',
    shiny: false,
    types: ['Feu'],
    weight: 30.0,
    size: 1.0,    
    parents: [
      {
        nationalId: 78,
        name: 'Galopa'
      }
    ]
  },
  {
    nationalId: 78,
    name: 'Galopa',
    label: 'Pokémon Cheval Feu',
    shiny: false,
    types: ['Feu'],
    weight: 95.0,
    size: 1.7,
    parents: []
  },
  {
    nationalId: 79,
    name: 'Ramoloss',
    label: 'Pokémon Crétin',
    shiny: false,
    types: ['Eau', 'Psy'],
    weight: 36.0,
    size: 1.2,    
    parents: [
      {
        nationalId: 80,
        name: 'Flagadoss'
      }
    ]
  },
  {
    nationalId: 80,
    name: 'Flagadoss',
    label: 'Pokémon Symbiose',
    shiny: false,
    types: ['Eau', 'Psy'],
    weight: 78.5,
    size: 1.6,    
    parents: [
      {
        nationalId: 199,
        name: 'Roigada'
      }
    ]
  },
  {
    nationalId: 81,
    name: 'Magnéti',
    label: 'Pokémon Magnétique',
    shiny: false,
    types: ['Electrik', 'Acier'],
    weight: 6.0,
    size: 0.3,    
    parents: [
      {
        nationalId: 82,
        name: 'Magnéton'
      }
    ]
  },
  {
    nationalId: 82,
    name: 'Magnéton',
    label: 'Pokémon Magnétique',
    shiny: false,
    types: ['Electrik', 'Acier'],
    weight: 60.0,
    size: 1.0,
    parents: []
  },
  /* {
    nationalId: 83,
    name: 'Canarticho',
    label: '',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 84,
    name: 'Doduo',
    label: 'Pokémon Duoiseau',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 39.2,
    size: 1.4,    
    parents: [
      {
        nationalId: 85,
        name: 'Dodrio'
      }
    ]
  },
  {
    nationalId: 85,
    name: 'Dodrio',
    label: 'Pokémon Trioiseau',
    shiny: false,
    types: ['Normal', 'Vol'],
    weight: 85.2,
    size: 1.8,
    parents: []
  },
  {
    nationalId: 86,
    name: 'Otaria',
    label: 'Pokémon Otarie',
    shiny: false,
    types: ['Eau'],
    weight: 90.0,
    size: 1.1,    
    parents: [
      {
        nationalId: 87,
        name: 'Lamantine'
      }
    ]
  },
  {
    nationalId: 87,
    name: 'Lamantine',
    label: 'Pokémon Otarie',
    shiny: false,
    types: ['Eau', 'Glace'],
    weight: 120.0,
    size: 1.7,
    parents: []
  },
  {
    nationalId: 88,
    name: 'Tadmorv',
    label: 'Pokémon Dégueu',
    shiny: false,
    types: ['Poison'],
    weight: 30.0,
    size: 0.9,    
    parents: [
      {
        nationalId: 89,
        name: 'Grotadmorv'
      }
    ]
  },
  {
    nationalId: 89,
    name: 'Grotadmorv',
    label: 'Pokémon Dégueu',
    shiny: false,
    types: ['Poison'],
    weight: 30.0,
    size: 1.2,
    parents: []
  },
  {
    nationalId: 90,
    name: 'Kokiyas',
    label: 'Pokémon Bivalve',
    shiny: false,
    types: ['Eau'],
    weight: 4.0,
    size: 0.3,    
    parents: [
      {
        nationalId: 91,
        name: 'Crustabri'
      }
    ]
  },
  {
    nationalId: 91,
    name: 'Crustabri',
    label: 'Pokémon Bivalve',
    shiny: false,
    types: ['Eau', 'Glace'],
    weight: 132.5,
    size: 1.5,
    parents: []
  },
  {
    nationalId: 92,
    name: 'Fantominus',
    label: 'Pokémon Gaz',
    shiny: false,
    types: ['Spectre', 'Poison'],
    weight: 0.1,
    size: 1.3,    
    parents: [
      {
        nationalId: 93,
        name: 'Spectrum'
      }
    ]
  },
  {
    nationalId: 93,
    name: 'Spectrum',
    label: 'Pokémon Gaz',
    shiny: false,
    types: ['Spectre', 'Poison'],
    weight: 0.1,
    size: 1.6,    
    parents: [
      {
        nationalId: 94,
        name: 'Ectoplasma'
      }
    ]
  },
  {
    nationalId: 94,
    name: 'Ectoplasma',
    label: 'Pokémon Ombre',
    shiny: false,
    types: ['Spectre', 'Poison'],
    weight: 40.5,
    size: 1.5,
    parents: []
  },
  {
    nationalId: 95,
    name: 'Onix',
    label: 'Pokémon Serpenroc',
    shiny: false,
    types: ['Roche', 'Sol'],
    weight: 210.0,
    size: 8.8,    
    parents: [
      {
        nationalId: 208,
        name: 'Steelix'
      }
    ]
  },
  {
    nationalId: 96,
    name: 'Soporifik',
    label: 'Pokémon Hypnose',
    shiny: false,
    types: ['Psy'],
    weight: 32.4,
    size: 1.0,    
    parents: [
      {
        nationalId: 97,
        name: 'Hypnomade'
      }
    ]
  },
  {
    nationalId: 97,
    name: 'Hypnomade',
    label: 'Pokémon Hypnose',
    shiny: false,
    types: ['Psy'],
    weight: 75.6,
    size: 1.6,
    parents: []
  },
  {
    nationalId: 98,
    name: 'Krabby',
    label: 'Pokémon Doux Crabe',
    shiny: false,
    types: ['Eau'],
    weight: 6.5,
    size: 0.4,    
    parents: [
      {
        nationalId: 99,
        name: 'Krabboss'
      }
    ]
  },
  {
    nationalId: 99,
    name: 'Krabboss',
    label: 'Pokémon Pince',
    shiny: false,
    types: ['Eau'],
    weight: 60.0,
    size: 1.3,
    parents: []
  },
  {
    nationalId: 100,
    name: 'Voltorbe',
    label: 'Pokémon Balle',
    shiny: false,
    types: ['Electrik'],
    weight: 10.4,
    size: 0.5,    
    parents: [
      {
        nationalId: 101,
        name: 'Electrode'
      }
    ]
  },
  {
    nationalId: 101,
    name: 'Electrode',
    label: 'Pokémon Balle',
    shiny: false,
    types: ['Electrik'],
    weight: 66.6,
    size: 1.2,
    parents: []
  },
  {
    nationalId: 102,
    name: 'Noeunoeuf',
    label: 'Pokémon Oeuf',
    shiny: false,
    types: ['Plante', 'Psy'],
    weight: 2.5,
    size: 0.5,    
    parents: [
      {
        nationalId: 103,
        name: 'Noadkoko'
      }
    ]
  },
  {
    nationalId: 103,
    name: 'Noadkoko',
    label: 'Pokémon Fruitpalme',
    shiny: false,
    types: ['Plante', 'Psy'],
    weight: 120.0,
    size: 2.0,
    parents: []
  },
  {
    nationalId: 104,
    name: 'Osselait',
    label: 'Pokémon Solitaire',
    shiny: true,
    types: ['Sol'],
    weight: 6.5,
    size: 0.4,
    parents: [
      {
        nationalId: 105,
        name: 'Ossatueur'
      }
    ]
  },
  {
    nationalId: 105,
    name: 'Ossatueur',
    label: 'Pokémon Gard\'Os',
    shiny: true,
    types: ['Sol'],
    weight: 45.0,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 106,
    name: 'Kicklee',
    label: 'Pokémon Latteur',
    shiny: false,
    types: ['Combat'],
    weight: 49.8,
    size: 1.5,
    parents: []
  },
  {
    nationalId: 107,
    name: 'Tygnon',
    label: 'Pokémon Puncheur',
    shiny: false,
    types: ['Combat'],
    weight: 50.2,
    size: 1.4,
    parents: []
  },
  {
    nationalId: 108,
    name: 'Excelangue',
    label: 'Pokémon Lécheur',
    shiny: false,
    types: ['Normal'],
    weight: 65.5,
    size: 1.2,
    parents: []
  },
  {
    nationalId: 109,
    name: 'Smogo',
    label: 'Pokémon Gaz Mortel',
    shiny: false,
    types: ['Poison'],
    weight: 1.0,
    size: 0.6,    
    parents: [
      {
        nationalId: 110,
        name: 'Smogogo'
      }
    ]
  },
  {
    nationalId: 110,
    name: 'Smogogo',
    label: 'Pokémon Gaz Mortel',
    shiny: false,
    types: ['Poison'],
    weight: 9.0,
    size: 0.6,
    parents: []
  },
  {
    nationalId: 111,
    name: 'Rhinocorne',
    label: 'Pokémon Piquant',
    shiny: false,
    types: ['Sol', 'Roche'],
    weight: 115.0,
    size: 1.0,    
    parents: [
      {
        nationalId: 112,
        name: 'Rhinoféros'
      }
    ]
  },
  {
    nationalId: 112,
    name: 'Rhinoféros',
    label: 'Pokémon Perceur',
    shiny: false,
    types: ['Sol', 'Roche'],
    weight: 120.0,
    size: 1.9,    
    parents: [
      {
        nationalId: 464,
        name: 'Rhinastoc'
      }
    ]
  },
  {
    nationalId: 113,
    name: 'Leveinard',
    label: 'Pokémon Oeuf',
    shiny: false,
    types: ['Normal'],
    weight: 34.6,
    size: 1.1,
    parents: []
  },
  {
    nationalId: 114,
    name: 'Saquedeneu',
    label: 'Pokémon Vigne',
    shiny: false,
    types: ['Plante'],
    weight: 35.0,
    size: 1.0,
    parents: []
  },
  /* {
    nationalId: 115,
    name: 'Kangourex',
    label: '',
    shiny: false,
    types: ['Normal'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 116,
    name: 'Hypotrempe',
    label: 'Pokémon Dragon',
    shiny: false,
    types: ['Eau'],
    weight: 8.0,
    size: 0.4,    
    parents: [
      {
        nationalId: 117,
        name: 'Hypocéan'
      }
    ]
  },
  {
    nationalId: 117,
    name: 'Hypocéan',
    label: 'Pokémon Dragon',
    shiny: false,
    types: ['Eau'],
    weight: 25.0,
    size: 1.2,    
    parents: [
      {
        nationalId: 230,
        name: 'Hyporoi'
      }
    ]
  },
  {
    nationalId: 118,
    name: 'Poissirène',
    label: 'Pokémon Poisson',
    shiny: false,
    types: ['Eau'],
    weight: 15.0,
    size: 0.6,    
    parents: [
      {
        nationalId: 119,
        name: 'Poissoroy'
      }
    ]
  },
  {
    nationalId: 119,
    name: 'Poissoroy',
    label: 'Pokémon Poisson',
    shiny: false,
    types: ['Eau'],
    weight: 39.0,
    size: 1.3,
    parents: []
  },
  {
    nationalId: 120,
    name: 'Stari',
    label: 'Pokémon Etoile',
    shiny: false,
    types: ['Eau'],
    weight: 34.5,
    size: 0.8,    
    parents: [
      {
        nationalId: 121,
        name: 'Staross'
      }
    ]
  },
  {
    nationalId: 121,
    name: 'Staross',
    label: 'Pokémon Mystérieux',
    shiny: false,
    types: ['Eau', 'Psy'],
    weight: 80.0,
    size: 1.1,
    parents: []
  },
  {
    nationalId: 122,
    name: 'Mr. Mime',
    label: 'Pokémon Bloqueur',
    shiny: false,
    types: ['Psy', 'Fee'],
    weight: 54.5,
    size: 1.3,
    parents: []
  },
  {
    nationalId: 123,
    name: 'Insécateur',
    label: 'Pokémon Mante',
    shiny: false,
    types: ['Insecte', 'Vol'],
    weight: 56.0,
    size: 1.5,    
    parents: [
      {
        nationalId: 212,
        name: 'Cizayox'
      }
    ]
  },
  {
    nationalId: 124,
    name: 'Lippoutou',
    label: 'Pokémon Humanoïde',
    shiny: false,
    types: ['Glace', 'Psy'],
    weight: 40.6,
    size: 1.4,
    parents: []
  },
  {
    nationalId: 125,
    name: 'Elektek',
    label: 'Pokémon Electrique',
    shiny: false,
    types: ['Electrik'],
    weight: 30.0,
    size: 1.1,    
    parents: [
      {
        nationalId: 466,
        name: 'Elekable'
      }
    ]
  },
  {
    nationalId: 126,
    name: 'Magmar',
    label: 'Pokémon Crache-Feu',
    shiny: false,
    types: ['Feu'],
    weight: 44.5,
    size: 1.3,    
    parents: [
      {
        nationalId: 467,
        name: 'Maganon'
      }
    ]
  },
  {
    nationalId: 127,
    name: 'Scarabrute',
    label: 'Pokémon Scarabée',
    shiny: true,
    types: ['Insecte'],
    weight: 55.0,
    size: 1.5,
    parents: []
  },
  /* {
    nationalId: 128,
    name: 'Tauros',
    label: '',
    shiny: false,
    types: ['Normal'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 129,
    name: 'Magicarpe',
    label: 'Pokémon Poisson',
    shiny: false,
    types: ['Eau'],
    weight: 10.0,
    size: 0.9,    
    parents: [
      {
        nationalId: 130,
        name: 'Léviator'
      }
    ]
  },
  {
    nationalId: 130,
    name: 'Léviator',
    label: 'Pokémon Terrifiant',
    shiny: false,
    types: ['Eau', 'Vol'],
    weight: 235.0,
    size: 6.5,
    parents: []
  },
  {
    nationalId: 131,
    name: 'Lokhlass',
    label: 'Pokémon Transport',
    shiny: false,
    types: ['Eau', 'Glace'],
    weight: 220.0,
    size: 2.5,
    parents: []
  },
  {
    nationalId: 132,
    name: 'Métamorph',
    label: 'Pokémon Morphing',
    shiny: false,
    types: ['Normal'],
    weight: 4.0,
    size: 0.3,
    parents: []
  },
  {
    nationalId: 133,
    name: 'Evoli',
    label: 'Pokémon Evolutif',
    shiny: true,
    types: ['Normal'],
    weight: 6.5,
    size: 0.3,    
    parents: [
      {
        nationalId: 134,
        name: 'Aquali'
      },
      {
        nationalId: 135,
        name: 'Voltali'
      },
      {
        nationalId: 136,
        name: 'Pyroli'
      },
      {
        nationalId: 196,
        name: 'Mentali'
      },
      {
        nationalId: 197,
        name: 'Noctali'
      }
    ]
  },
  {
    nationalId: 134,
    name: 'Aquali',
    label: 'Pokémon Bulleur',
    shiny: false,
    types: ['Eau'],
    weight: 29.0,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 135,
    name: 'Voltali',
    label: 'Pokémon Orage',
    shiny: false,
    types: ['Electrik'],
    weight: 24.5,
    size: 0.8,
    parents: []
  },
  {
    nationalId: 136,
    name: 'Pyroli',
    label: 'Pokémon Flamme',
    shiny: true,
    types: ['Feu'],
    weight: 25.0,
    size: 0.9,
    parents: []
  },
  {
    nationalId: 137,
    name: 'Porygon',
    label: 'Pokémon Virtuel',
    shiny: false,
    types: ['Normal'],
    weight: 36.5,
    size: 0.8,    
    parents: [
      {
        nationalId: 233,
        name: 'Porygon2'
      }
    ]
  },
  {
    nationalId: 138,
    name: 'Amonita',
    label: 'Pokémon Spirale',
    shiny: false,
    types: ['Roche', 'Eau'],
    weight: 7.5,
    size: 0.4,    
    parents: [
      {
        nationalId: 139,
        name: 'Amonistar'
      }
    ]
  },
  {
    nationalId: 139,
    name: 'Amonistar',
    label: 'Pokémon Spirale',
    shiny: false,
    types: ['Roche', 'Eau'],
    weight: 35.0,
    size: 1.0,
    parents: []
  },
  {
    nationalId: 140,
    name: 'Kabuto',
    label: 'Pokémon Carapace',
    shiny: false,
    types: ['Roche', 'Eau'],
    weight: 11.5,
    size: 0.5,    
    parents: [
      {
        nationalId: 141,
        name: 'Kabutops'
      }
    ]
  },
  {
    nationalId: 141,
    name: 'Kabutops',
    label: 'Pokémon Carapace',
    shiny: false,
    types: ['Roche', 'Eau'],
    weight: 40.5,
    size: 1.3,
    parents: []
  },
  {
    nationalId: 142,
    name: 'Ptéra',
    label: 'Pokémon Fossile',
    shiny: false,
    types: ['Roche', 'Vol'],
    weight: 59.0,
    size: 1.8,
    parents: []
  },
  /* {
    nationalId: 143,
    name: 'Ronflex',
    label: '',
    shiny: false,
    types: ['Normal'],
    weight: 0.0,
    size: 0.4,
    parents: []
  }, */
  {
    nationalId: 144,
    name: 'Artikodin',
    label: 'Pokémon Glaciaire',
    shiny: false,
    types: ['Glace', 'Vol'],
    weight: 55.4,
    size: 1.7,
    parents: []
  },
  {
    nationalId: 145,
    name: 'Electhor',
    label: 'Pokémon Electrique',
    shiny: false,
    types: ['Electrik', 'Vol'],
    weight: 52.6,
    size: 1.6,
    parents: []
  },
  {
    nationalId: 146,
    name: 'Sulfura',
    label: 'Pokémon Flamme',
    shiny: false,
    types: ['Feu', 'Vol'],
    weight: 60.0,
    size: 2.0,
    parents: []
  },
  {
    nationalId: 147,
    name: 'Minidraco',
    label: 'Pokémon Dragon',
    shiny: false,
    types: ['Dragon'],
    weight: 3.3,
    size: 1.8,    
    parents: [
      {
        nationalId: 148,
        name: 'Draco'
      }
    ]
  },
  {
    nationalId: 148,
    name: 'Draco',
    label: 'Pokémon Dragon',
    shiny: false,
    types: ['Dragon'],
    weight: 16.5,
    size: 4.0,    
    parents: [
      {
        nationalId: 149,
        name: 'Dracolosse'
      }
    ]
  },
  {
    nationalId: 149,
    name: 'Dracolosse',
    label: 'Pokémon Dragon',
    shiny: false,
    types: ['Dragon', 'Vol'],
    weight: 210.0,
    size: 2.2,
    parents: []
  },
  /* {
    nationalId: 150,
    name: 'Mewtwo',
    label: '',
    shiny: false,
    types: ['Psy'],
    weight: 0.0,
    size: 0.0,
    parents: []
  }, */
  {
    nationalId: 151,
    name: 'Mew',
    label: 'Pokémon Nouveau',
    shiny: false,
    types: ['Psy'],
    weight: 4.0,
    size: 0.4,
    parents: []
  }
];

kanto.forEach(function(pkmn) {
  pkmn.region = 'Kanto';

  try {
    db.pokemon.save(pkmn);
  } catch(e) {
    // console.log(e);
  }
});

module.exports = kanto;
