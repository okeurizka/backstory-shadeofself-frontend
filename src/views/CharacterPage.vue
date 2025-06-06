<template>
  <div class="character-detail-page-wrapper">
    <div class="container" v-if="character">
      <h1 class="page-title">{{ character.name }}</h1>
      <div class="character-detail-content">
        <div class="detail-visual-placeholder">
          <p>Ilustrasi Lengkap {{ character.name }}</p>
          <img v-if="character.visual" :src="character.visual" :alt="character.name" />
        </div>
        <div class="detail-text">
          <p class="detail-profession">**Profesi:** {{ character.profession }}</p>
          <p class="detail-key-trait">**Sifat Kunci:** {{ character.keyTrait }}</p>
          <p class="detail-quote">"{{ character.quote }}"</p>

          <div class="detail-lists">
            <div class="likes-list">
              <h3>Likes:</h3>
              <ul>
                <li v-for="item in character.likes" :key="item">{{ item }}</li>
              </ul>
            </div>
            <div class="dislikes-list">
              <h3>Dislikes:</h3>
              <ul>
                <li v-for="item in character.dislikes" :key="item">{{ item }}</li>
              </ul>
            </div>
          </div>

          <p class="detail-full-bio">{{ character.fullBio }}</p>
        </div>
      </div>

      <div class="related-characters-section" v-if="relatedCharacters.length > 0">
        <h2 class="section-title">Karakter Terkait</h2>
        <p class="section-description">Sosok-sosok penting dalam kisah {{ character.name }}.</p>
        <div class="related-characters-grid">
          <router-link
            :to="`/karakter/${relatedChar.id}`"
            class="related-char-card"
            v-for="relatedChar in relatedCharacters"
            :key="relatedChar.id"
          >
            <div class="related-char-visual-placeholder">
              <p>Sketsa {{ relatedChar.name }}</p>
              <img v-if="relatedChar.visual" :src="relatedChar.visual" :alt="relatedChar.name" />
            </div>
            <h3>{{ relatedChar.name }}</h3>
            <p class="relationship">{{ relatedChar.relationshipToMain }}</p>
          </router-link>
        </div>
      </div>
      <router-link to="/#character-section" class="back-link">← Kembali ke Beranda</router-link>
    </div>
    <div v-else class="not-found">
      <h1 class="page-title">Karakter Tidak Ditemukan</h1>
      <p>Mungkin karakternya bersembunyi di bayangan.</p>
      <router-link to="/#character-section" class="back-link">Kembali ke Beranda</router-link>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { characters } from '../data/char.js' // Pastikan path benar!

const route = useRoute()
const characterId = route.params.id

const character = computed(() => {
  return characters.find((char) => char.id === characterId)
})

// Logic untuk menemukan karakter terkait
const relatedCharacters = computed(() => {
  if (!character.value || !character.value.relatedCharacters) {
    return []
  }
  return character.value.relatedCharacters
    .map((relChar) => {
      const foundChar = characters.find((c) => c.id === relChar.id)
      return foundChar ? { ...foundChar, relationshipToMain: relChar.relationship } : null
    })
    .filter(Boolean) // Filter out nulls if any related character not found
})
</script>

<style scoped>
/* (Styling yang sudah ada sebelumnya) */
/* ... */

/* Tambahan Styling untuk Bagian Karakter Terkait */
.related-characters-section {
  margin-top: 80px;
  padding-top: 50px;
  border-top: 1px solid rgba(200, 200, 200, 0.1);
  text-align: center;
}

.related-characters-section .section-title {
  font-size: 2.8em;
  margin-bottom: 15px;
}

.related-characters-section .section-description {
  font-family: 'Roboto Mono', monospace;
  font-size: 1em;
  color: #c0c0c0;
  margin-bottom: 40px;
}

.related-characters-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  justify-content: center;
}

.related-char-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(200, 200, 200, 0.1);
  padding: 25px;
  border-radius: 8px;
  text-decoration: none;
  color: #f0f0f0;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.related-char-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  background-color: rgba(255, 255, 255, 0.08);
}

.related-char-visual-placeholder {
  width: 100px;
  height: 100px;
  background-color: rgba(200, 200, 200, 0.07);
  border: 1px dashed rgba(200, 200, 200, 0.15);
  margin-bottom: 15px;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(200, 200, 200, 0.3);
  font-style: italic;
  font-size: 0.8em;
}
.related-char-visual-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.related-char-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5em;
  margin-bottom: 5px;
  text-align: center;
}

.related-char-card .relationship {
  font-family: 'Roboto Mono', monospace;
  font-size: 0.85em;
  color: #c0c0c0;
  text-align: center;
  font-style: italic;
}

/* Media Queries untuk responsive (sesuaikan jika perlu) */
@media (max-width: 768px) {
  .related-characters-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>
