export const characters = [
  {
    id: 'galib',
    name: 'Galib',
    profession: 'Bos Publishing House',
    keyTrait: 'Logis, Dingin, Setia',
    quote: '"Nih, kalo butuh, masalah kepake atau enggak itu urusanmu."',
    likes: ['Kopi Hitam', 'Buku-buku langka', 'Ketertiban', 'Diam-diam mengamati Edelia'],
    dislikes: ['Drama berlebihan', 'Ketidakpastian', 'Orang yang tidak mandiri'],
    fullBio:
      'Galib adalah sosok yang dingin dan logis, namun memiliki kesetiaan yang mendalam. Ia tumbuh bersama Edelia dan menjadi penyeimbang baginya. Setelah perpisahan yang menyakitkan, Galib membangun kerajaan publishing house-nya sendiri, tetapi tidak pernah berhenti memantau Edelia dari kejauhan. Ambisi dan pengkhianatan di masa lalu membentuknya menjadi individu yang pragmatis namun tetap menyimpan luka.',
    visual: 'path/to/galib_sketch_full.png',
    relatedCharacters: [
      // Tambahkan ini
      { id: 'edelia', relationship: 'Masa Kecil, Partner Menulis, Cinta Tak Terucap' },
      { id: 'ayah-galib', relationship: 'Ayah, Mentor Bisnis' },
      { id: 'ibu-galib', relationship: 'Ibu, Sumber Ketenangan' },
    ],
  },
  {
    id: 'edelia',
    name: 'Edelia',
    profession: 'Penulis (Awal), CEO',
    keyTrait: 'Ambisius, Imajinatif, Keras Kepala',
    quote: '"Aku harus membuktikan diriku sendiri."',
    likes: ['Kebebasan berekspresi', 'Tantangan baru', 'Karya sastra mendalam', 'Musik indie'],
    dislikes: ['Batasan', 'Kegagalan', 'Terlalu bergantung pada orang lain'],
    fullBio:
      'Edelia adalah penulis berbakat dengan imajinasi liar dan ambisi yang membara. Sejak kecil, ia selalu ingin membuktikan dirinya, terutama setelah insiden keluarga. Keras kepalanya membawanya menjauh dari Galib dan masuk ke dunia Velure yang penuh intrik. Perjalanannya dipenuhi pilihan sulit dan pengorbanan yang mengubahnya secara drastis, menjadikannya tokoh kunci dalam konflik besar.',
    visual: 'path/to/edelia_sketch_full.png',
    relatedCharacters: [
      // Tambahkan ini
      { id: 'galib', relationship: 'Sahabat Masa Kecil, Partner Menulis, Penyeimbang' },
      { id: 'ayah-edelia', relationship: 'Ayah, Pemicu Trauma Masa Lalu' },
      { id: 'teman-edelia', relationship: 'Sahabat Dekat di Velure' },
    ],
  },
  // Tambahkan karakter pendukung di sini:
  {
    id: 'ayah-galib',
    name: 'Ayah Galib',
    profession: 'Pengusaha Sukses',
    keyTrait: 'Tegas, Visioner, Protektif',
    quote: '"Hanya yang kuat yang akan bertahan."',
    likes: ['Disiplin', 'Kesuksesan', 'Keluarga'],
    dislikes: ['Kegagalan', 'Kemalasan', 'Drama'],
    fullBio:
      'Ayah Galib adalah seorang pengusaha sukses yang mengajarkan Galib nilai-nilai ketegasan dan kemandirian sejak dini. Hubungan mereka kompleks, penuh ekspektasi tinggi namun juga dukungan yang tak tergoyahkan. Ia adalah mentor pertama Galib di dunia bisnis.',
    visual: 'path/to/ayah_galib_sketch.png',
    relatedCharacters: [
      { id: 'galib', relationship: 'Anak' },
      { id: 'ibu-galib', relationship: 'Istri' },
    ],
  },
  {
    id: 'ibu-galib',
    name: 'Ibu Galib',
    profession: 'Ibu Rumah Tangga',
    keyTrait: 'Hangat, Penyayang, Bijaksana',
    quote: '"Cinta adalah pondasi terkuat."',
    likes: ['Keharmonisan keluarga', 'Membaca', 'Berkebun'],
    dislikes: ['Konflik', 'Ketidakadilan'],
    fullBio:
      'Ibu Galib adalah sosok yang hangat dan penyayang, menjadi penyeimbang bagi ketegasan Ayah Galib. Ia adalah tempat Galib mencari ketenangan dan dukungan emosional, mengajarkannya pentingnya empati dan kasih sayang.',
    visual: 'path/to/ibu_galib_sketch.png',
    relatedCharacters: [
      { id: 'galib', relationship: 'Anak' },
      { id: 'ayah-galib', relationship: 'Suami' },
    ],
  },
  {
    id: 'ayah-edelia',
    name: 'Ayah Edelia',
    profession: 'Mantan Penulis',
    keyTrait: 'Tertekan, Menyendiri, Rapuh',
    quote: '"Dunia ini tak selalu adil, Edelia."',
    likes: ['Kesunyian', 'Masa lalu', 'Alkohol (sebelumnya)'],
    dislikes: ['Konfrontasi', 'Tuntutan', 'Kegagalan'],
    fullBio:
      'Ayah Edelia adalah seorang mantan penulis yang bakatnya meredup dan tertekan oleh tragedi masa lalu. Kehidupannya setelah insiden keluarga membentuk trauma mendalam pada Edelia dan menjadi salah satu pemicu ambisinya untuk membuktikan diri. Hubungan mereka penuh luka dan kesalahpahaman.',
    visual: 'path/to/ayah_edelia_sketch.png',
    relatedCharacters: [{ id: 'edelia', relationship: 'Anak' }],
  },
  {
    id: 'teman-edelia', // Contoh teman, bisa diganti namanya
    name: 'Sarah', // Contoh nama
    profession: 'Editor (Velure)',
    keyTrait: 'Pragmatis, Loyalis, Cerdas',
    quote: '"Kenyataan kadang lebih pahit dari fiksi."',
    likes: ['Kopi', 'Buku-buku modern', 'Efisiensi', 'Mendukung Edelia'],
    dislikes: ['Basa-basi', 'Ketidakprofesionalan', 'Orang yang tidak tahu diri'],
    fullBio:
      'Sarah adalah teman dekat Edelia saat Edelia mulai memasuki dunia Velure. Ia adalah seorang editor yang cerdas dan pragmatis, sering memberikan pandangan realistis kepada Edelia yang terkadang terlalu idealis. Sarah menjadi salah satu dukungan utama Edelia di tengah intrik dunia penerbitan.',
    visual: 'path/to/sarah_sketch.png',
    relatedCharacters: [{ id: 'edelia', relationship: 'Sahabat & Rekan Kerja' }],
  },
]
