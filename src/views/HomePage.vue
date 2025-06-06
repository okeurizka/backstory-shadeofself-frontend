<template>
  <div class="homepage-wrapper">
    <section id="hero-section" class="hero-section">
      <div class="hero-content">
        <h1 class="main-title">
          <span class="game-title">[JUDUL GAME LO]</span>
          <br />
          <span class="subtitle">- AWAL KISAH -</span>
        </h1>
        <div class="hero-visual-placeholder">
          <p>Gambar Simbolis: Siluet Edelia & Galib atau Elemen Distorsi</p>
        </div>
        <button class="cta-button" @click="scrollToSection('hook-section')">
          Jelajahi Kisah Mereka
        </button>
      </div>
    </section>

    <section id="hook-section" class="hook-section">
      <div class="section-content">
        <h2 class="section-title">Sebelum Segalanya Berubah...</h2>
        <div class="hook-visual-placeholder">
          <p>Gambar Pengantar: Sudut Pandang Dekat Taman Gelap / Objek Terdistorsi</p>
        </div>
        <p class="intro-text">
          Di balik setiap perjalanan ada masa lalu yang membentuk. Ikuti jejak Edelia dan Galib, dua
          jiwa yang terikat takdir dan perpisahan, melalui kenangan dari bangku sekolah hingga
          persimpangan jalan ambisi.
        </p>
        <button class="cta-button" @click="scrollToSection('timeline-section')">
          Lanjutkan ke Jejak Mereka
        </button>
      </div>
    </section>

    <section id="timeline-section" class="timeline-section">
      <div class="section-content">
        <h2 class="section-title">JEJAK TAKDIR</h2>
        <div class="timeline-grid">
          <div class="timeline-box" v-for="event in timelineEvents.slice(0, 2)" :key="event.id">
            <h3>{{ event.title }}</h3>
            <div class="timeline-visual-placeholder">
              <p>Sketsa: {{ event.visual ? '' : event.shortDesc }}</p>
              <img v-if="event.visual" :src="event.visual" :alt="event.title" />
            </div>
            <p>{{ event.shortDesc }}</p>
          </div>
        </div>
        <router-link to="/jejak-mereka" class="cta-button link-button"
          >Lihat Seluruh Jejak Mereka</router-link
        >
      </div>
    </section>

    <section id="character-section" class="character-section">
      <div class="section-content">
        <h2 class="section-title">PARA KARAKTER</h2>
        <div class="character-grid">
          <div class="character-card" v-for="char in characters" :key="char.id">
            <div class="character-visual-placeholder">
              <p>Sketsa Ilustrasi {{ char.name }}</p>
              <img v-if="char.visual" :src="char.visual" :alt="char.name" />
            </div>
            <h3>{{ char.name }}</h3>
            <p class="char-bio">
              **Profesi:** {{ char.profession }}<br />
              **Sifat Kunci:** {{ char.keyTrait }}
            </p>
            <p class="char-quote">{{ char.quote }}</p>
            <router-link :to="`/karakter/${char.id}`" class="read-more-link"
              >Detail Lengkap</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { characters } from '../data/char.js' // Import data karakter
import { timelineEvents } from '../data/timeline.js' // Import data timeline

const route = useRoute()

const scrollToSection = (id) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  if (route.hash) {
    scrollToSection(route.hash.substring(1))
  }
})
</script>

<style scoped>
/* Styling Umum dan Hero/Hook Section TETAP SAMA DENGAN SEBELUMNYA */
/* ... */

/* REVISI Timeline Section Styling */
.timeline-section {
  background-color: #0f0f0f;
}

.timeline-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); /* Dua kartu jadi lebih lebar */
  gap: 50px; /* Jarak antar kartu */
  margin-top: 50px;
  justify-content: center; /* Tengahin kalo cuman ada 2 */
}

.timeline-box {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(200, 200, 200, 0.1);
  padding: 30px;
  border-radius: 8px;
  text-align: left;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.timeline-box:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
}

.timeline-box h3 {
  font-family: 'Playfair Display', serif;
  color: #f0f0f0;
  font-size: 1.8em; /* Lebih besar dari sebelumnya */
  margin-top: 0;
  margin-bottom: 20px;
}

.timeline-visual-placeholder {
  width: 100%;
  height: 200px; /* Lebih tinggi */
  background-color: rgba(200, 200, 200, 0.07);
  border: 1px dashed rgba(200, 200, 200, 0.15);
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(200, 200, 200, 0.3);
  font-style: italic;
  font-size: 0.9em;
  overflow: hidden; /* Pastiin gambar gak keluar */
}
.timeline-visual-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Biar gambar pas di dalam kotak */
}

.timeline-box p {
  font-family: 'Roboto Mono', monospace;
  font-size: 1em;
  color: #c0c0c0;
}

/* REVISI Character Section Styling */
.character-section {
  background-color: #121212;
  border-top: 1px solid rgba(200, 200, 200, 0.05);
}

.character-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  margin-top: 50px;
  justify-content: center;
}

.character-card {
  background-color: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(200, 200, 200, 0.12);
  padding: 35px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
  display: flex; /* Untuk flexbox di dalam kartu */
  flex-direction: column;
  align-items: center; /* Tengahkan konten kartu */
}

.character-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.character-visual-placeholder {
  width: 150px; /* Ukuran gambar karakter lebih kecil di homepage */
  height: 150px;
  background-color: rgba(200, 200, 200, 0.1);
  border: 1px dashed rgba(200, 200, 200, 0.25);
  margin-bottom: 20px;
  border-radius: 50%; /* Bikin bulat jika mau */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(200, 200, 200, 0.4);
  font-style: italic;
  font-size: 0.9em;
}
.character-visual-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.character-card h3 {
  font-family: 'Playfair Display', serif;
  color: #f0f0f0;
  font-size: 1.8em; /* Ukuran lebih kecil dari sebelumnya */
  margin-top: 0;
  margin-bottom: 10px;
  text-align: center;
}

.char-bio {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9em;
  color: #d0d0d0;
  margin-bottom: 15px;
  text-align: center;
}

.char-quote {
  font-family: 'Playfair Display', serif;
  font-style: italic;
  font-size: 1em;
  color: #e0e0e0;
  border-left: 3px solid #7a5e80;
  padding-left: 10px;
  margin-top: 15px;
  margin-bottom: 20px;
  text-align: left;
  width: 100%; /* Biar quote nya gak ketengah */
}

.read-more-link,
.link-button {
  display: inline-block;
  background-color: transparent;
  color: #7a5e80; /* Warna aksen untuk link */
  border: 1px solid #7a5e80;
  padding: 8px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.9em;
  transition: all 0.3s ease;
  margin-top: 20px;
}

.read-more-link:hover,
.link-button:hover {
  background-color: #7a5e80;
  color: #ffffff;
}

/* Responsive */
@media (max-width: 768px) {
  /* ... (Styling Responsive sebelumnya tetap sama) ... */
  .timeline-grid,
  .character-grid {
    grid-template-columns: 1fr;
  }
}
</style>
