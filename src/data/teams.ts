export interface Player {
  name: string;
  ignOrId: string;
  role?: string;
  phone?: string;
  isLeader?: boolean;
  isBackup?: boolean;
}

export interface Team {
  id: string;
  schoolName: string;
  educationLevel: 'SMP' | 'SMA/SMK';
  email: string;
  instagram: string;
  game: 'Mobile Legends' | 'Free Fire' | 'Valorant';
  teamNameOrTag?: string;
  logoUrl?: string;
  roster: Player[];
}

export const TEAMS: Team[] = [
  {
    "id": "t-mlbb-001",
    "schoolName": "SMA KARTIKA XX-1 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@kitcom_official",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "Muhammad Sharifal Afiq",
        "ignOrId": "691759405",
        "role": "Leader",
        "phone": "082395411721",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-002",
    "schoolName": "SMA NEGERI 1 SINJAI",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@sman1.esport",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "RIFKI SAIFUL SAIFUDDIN",
        "ignOrId": "60898011",
        "role": "Leader",
        "phone": "085147109581",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-003",
    "schoolName": "SMAN 17 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@humasjubel",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "Muhammad Al Ghany Rasyha",
        "ignOrId": "922310623",
        "role": "Leader",
        "phone": "085796506253",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-004",
    "schoolName": "SMA NEGERI 5 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Aunur Rifqi Heriyadi",
        "ignOrId": "189192834",
        "role": "Leader",
        "phone": "085696287391",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-005",
    "schoolName": "SMK Telkom Makassar",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@stelk.esports",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Cahya Sakti Samudra",
        "ignOrId": "982847868",
        "role": "Leader",
        "phone": "088973304637",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-006",
    "schoolName": "SMA NEGERI 8 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@s8m.esport",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "Irmansyah Putra",
        "ignOrId": "472996045",
        "role": "Leader",
        "phone": "082187427621",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-007",
    "schoolName": "SMPN 27 Makassar",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpn27makassar.humas",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Muh. Khidir",
        "ignOrId": "462994309",
        "role": "Leader",
        "phone": "083898066037",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-008",
    "schoolName": "SMP HANG TUAH MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smphangtuahmks",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Erlangga Trisan Suprianto",
        "ignOrId": "1789074662",
        "role": "Leader",
        "phone": "082298481190",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-009",
    "schoolName": "SMP ISLAM ATHIRAH BUKIT BARUGA",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smp.athirah.baruga",
    "game": "Mobile Legends",
    "teamNameOrTag": "TIM A",
    "roster": [
      {
        "name": "andi muhammad rafi",
        "ignOrId": "1774504643",
        "role": "Leader",
        "phone": "085343829442",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-010",
    "schoolName": "SMP ISLAM ATHIRAH 2 BUKIT BARUGA",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smp.athirah.baruga",
    "game": "Mobile Legends",
    "teamNameOrTag": "TIM B",
    "roster": [
      {
        "name": "Muhammad Iyad Zuhair",
        "ignOrId": "598402533",
        "role": "Leader",
        "phone": "085242222252",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-011",
    "schoolName": "SMAN 21 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@officialsman21mks",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Rezky Ramadhansyah",
        "ignOrId": "676670661",
        "role": "Leader",
        "phone": "088242938930",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-012",
    "schoolName": "SMP NEGERI 20 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpn20makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "Muhammad Asyraf Fauzi",
        "ignOrId": "1408018072",
        "role": "Leader",
        "phone": "081242248638",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-013",
    "schoolName": "SMKN 5 GOWA",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@SMKN5GOWA",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "SAHRIL HALIK",
        "ignOrId": "1499566132",
        "role": "Leader",
        "phone": "0882021610721",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-014",
    "schoolName": "SMA KARTIKA XX-1 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@smakartika_xx1",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "A.Daifi Safaraz cakra",
        "ignOrId": "180685517",
        "role": "Leader",
        "phone": "0895326362302",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-015",
    "schoolName": "SMPN 4 SUNGGUMINASA",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpn4sungguminasa",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Andi muh.tsabith qeis a",
        "ignOrId": "1617708793",
        "role": "Leader",
        "phone": "088875017962",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-016",
    "schoolName": "SMK SMTI Makassar",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@smksmti.makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "Lingga bayu aji",
        "ignOrId": "1112428806",
        "role": "Leader",
        "phone": "085821277384",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-017",
    "schoolName": "SMA 17 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@humasjubel",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "A.Daifi Zahran Cakra",
        "ignOrId": "234512024",
        "role": "Leader",
        "phone": "085191551517",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-018",
    "schoolName": "SMP Katolik Rajawali Makassar",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpkatolikrajawali",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "Avniel Aron Junsaputra",
        "ignOrId": "1518352711",
        "role": "Leader",
        "phone": "085298400218",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-019",
    "schoolName": "SMP ISLAM ATHIRAH 1 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@sekolahathirah.Kajaolalido",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "Muh. Zafran aqila gani",
        "ignOrId": "190744601",
        "role": "Leader",
        "phone": "082156556844",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-020",
    "schoolName": "SMP Telkom Makassar",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smp.telkom.makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "M FIKRI AR RAYYAN",
        "ignOrId": "741151441",
        "role": "Leader",
        "phone": "089602221285",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-021",
    "schoolName": "SMP NEGERI 20 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpn20makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "Gabriel Pratama Putra",
        "ignOrId": "1504335990",
        "role": "Leader",
        "phone": "085705799593",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-022",
    "schoolName": "SMP Telkom Makassar",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smp.telkom.mks",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "Muh. Daffa Alfatih",
        "ignOrId": "134418297",
        "role": "Leader",
        "phone": "082194551089",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-023",
    "schoolName": "SMA NEGERI 8 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@s8m.esport",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "Affandi Bayu Nugraha",
        "ignOrId": "1190555771",
        "role": "Leader",
        "phone": "0895321958354",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-024",
    "schoolName": "SMP ISLAM ATHIRAH MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@lifeatsmpislamathirah",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "MUHAMMAD RAZIQ PUTRA RIANSYAH",
        "ignOrId": "1126317567",
        "role": "Leader",
        "phone": "081524745244",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-025",
    "schoolName": "SMPN 7 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@Spensev_Esport_2026",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "FAHRIANSYAH",
        "ignOrId": "174246550",
        "role": "Leader",
        "phone": "083843681863",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-026",
    "schoolName": "SMPN 7 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@Spensev_Esport_2026",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "Khaerul Anam",
        "ignOrId": "946344353",
        "role": "Leader",
        "phone": "082358465878",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-027",
    "schoolName": "SMP NEGERI 23 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@SMPN 23 Makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "MUH ADRIAN ALFARABI",
        "ignOrId": "974178965",
        "role": "Leader",
        "phone": "087860057866",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-028",
    "schoolName": "SMPN 23 Makassar",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@SMPN 23 Makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "Fritsler rield wekal mt",
        "ignOrId": "882558999",
        "role": "Leader",
        "phone": "081356306823",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-029",
    "schoolName": "SMK NEGERI 3 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@smknegeri3makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Muh Dafa Redhana Darwis",
        "ignOrId": "1497531566",
        "role": "Leader",
        "phone": "089691444290",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-030",
    "schoolName": "SMP Katolik Rajawali Makassar",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpkatolikrajawali",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim B",
    "roster": [
      {
        "name": "Richard Sanghyeok Park",
        "ignOrId": "1116202367",
        "role": "Leader",
        "phone": "081524791883",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-031",
    "schoolName": "SMK SMTI MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@smksmti.makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "Tim A",
    "roster": [
      {
        "name": "Muh Afif zahran",
        "ignOrId": "734480617",
        "role": "Leader",
        "phone": "08979622426",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-032",
    "schoolName": "SMA NEGERI 1 GOWA SUNGGUMINASA",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@salis.id",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Muh fiqhi putra S.",
        "ignOrId": "1242273782",
        "role": "Leader",
        "phone": "081995617219",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-033",
    "schoolName": "SMPN 33 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpn33makassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "muh naufal al ghaniyyu dodi",
        "ignOrId": "435328171",
        "role": "Leader",
        "phone": "089541527312",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-034",
    "schoolName": "SMAN 11 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@sman11mks_ofc",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "MUH DWI RESKY ADITYA",
        "ignOrId": "116062278",
        "role": "Leader",
        "phone": "089672708556",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-mlbb-035",
    "schoolName": "SMP ZION MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpzionmakassar",
    "game": "Mobile Legends",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Monan Kenzie Seran",
        "ignOrId": "529566094",
        "role": "Leader",
        "phone": "085298340750",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 6 (Cadangan)",
        "ignOrId": "-",
        "role": "Backup",
        "phone": "-",
        "isLeader": false,
        "isBackup": true
      }
    ]
  },
  {
    "id": "t-ff-001",
    "schoolName": "SMAN 15 MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@libels_esportofc",
    "game": "Free Fire",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "Muh Farel Farih",
        "ignOrId": "5511710299",
        "role": "Leader",
        "phone": "083843616262",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      }
    ]
  },
  {
    "id": "t-ff-002",
    "schoolName": "SMAN 1 SOPPENG",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@smanegeri1soppeng",
    "game": "Free Fire",
    "teamNameOrTag": "",
    "roster": [
      {
        "name": "ANDI MUH FAKHRI RAMADHAN",
        "ignOrId": "2070491100",
        "role": "Leader",
        "phone": "082191459072",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      }
    ]
  },
  {
    "id": "t-ff-003",
    "schoolName": "SMPN 7 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@Spensev_Esport_2026",
    "game": "Free Fire",
    "teamNameOrTag": "Free Fire - Tim A",
    "roster": [
      {
        "name": "Muh Iksan",
        "ignOrId": "1730066846",
        "role": "Leader",
        "phone": "0812448808602",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      }
    ]
  },
  {
    "id": "t-ff-004",
    "schoolName": "SMPN 7 MAKASSAR",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@Spensev_esport_2026",
    "game": "Free Fire",
    "teamNameOrTag": "Free Fire - Tim B",
    "roster": [
      {
        "name": "Fatur Adyaksa",
        "ignOrId": "328795952637",
        "role": "Leader",
        "phone": "083822385873",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      }
    ]
  },
  {
    "id": "t-ff-005",
    "schoolName": "SMP Katolik Rajawali Makassar",
    "educationLevel": "SMP",
    "email": "-",
    "instagram": "@smpkatolikrajawali",
    "game": "Free Fire",
    "teamNameOrTag": "Free Fire",
    "roster": [
      {
        "name": "Michael Timothy Christian Rumbu",
        "ignOrId": "1781210371",
        "role": "Leader",
        "phone": "085183120789",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      }
    ]
  },
  {
    "id": "t-ff-006",
    "schoolName": "SMK SMTI MAKASSAR",
    "educationLevel": "SMA/SMK",
    "email": "-",
    "instagram": "@SMK SMTI MAKASSAR",
    "game": "Free Fire",
    "teamNameOrTag": "Free Fire",
    "roster": [
      {
        "name": "Kevin Lorenzo",
        "ignOrId": "9169547469",
        "role": "Leader",
        "phone": "082192713501",
        "isLeader": true,
        "isBackup": false
      },
      {
        "name": "Player 2",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 3",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 4",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      },
      {
        "name": "Player 5",
        "ignOrId": "-",
        "role": "Player",
        "phone": "-",
        "isLeader": false,
        "isBackup": false
      }
    ]
  }
];

export function getTeamsByGame(game: Team["game"]) {
  return TEAMS.filter((t) => t.game === game);
}

export function getTeamById(id: string) {
  return TEAMS.find((t) => t.id === id);
}

export function getPlayerById(ignOrId: string) {
  for (const team of TEAMS) {
    const player = team.roster.find((p) => p.ignOrId === ignOrId);
    if (player) return { ...player, team };
  }
  return null;
}
