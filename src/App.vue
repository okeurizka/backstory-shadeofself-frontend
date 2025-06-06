<script setup>
import NavBar from './components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'
</script>

<template>
  <div id="app">
    <NavBar />
    <main class="content">
      <router-view />
    </main>
    <FooterBar />
  </div>
</template>

<style>
/* Import font yang lebih gloomy atau klasik */
/* @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300;400;700&family=Playfair+Display:wght@400;700&display=swap'); */
/* Playfair Display untuk judul, Roboto Mono untuk body text */
/* Atau cari font sketchy dari Google Fonts */

body {
  margin: 0;
  font-family: 'Roboto Mono', monospace; /* Contoh font monospace untuk kesan dingin */
  background-color: #1a1a1a; /* Background sangat gelap */
  color: #b0b0b0; /* Teks abu-abu terang */
  line-height: 1.6;
  overflow-x: hidden; /* Hindari scroll horizontal */
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  /* Tambahkan efek background halus kalau mau, misalnya noise texture */
  background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc2ZnIj4KICA8ZmlsdGVyIGlkPSJuIiB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIj4KICAgIDxmZVR1cmJ1bGVuY2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjIiIHNlZWQ9IjAiIHN0aXRjaFRpbGVzPSJub1N0aXRjaCIvPgogICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgogICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ibHVtaW5hbmNlVG9AlphaIiB2YWx1ZXM9IjAiLz4KICAgIDxmZUNvbXBvc2l0IGluM090aGVyPSJTb3VyY2VBbHBoYSIgb3BlcmF0b3I9ImluIiByZXN1bHQ9ImFscGhhIi8+CiAgICA8ZmVDb21wb3NpdGUgaW49IkFsaDoiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJhdG9wIiByZXN1bHQ9InN0cmluZyIvPgogICAgPGZlU291cmNlR3JhcGhpYyBhbHBoYS1wcmV2ZW50cz0iYnVpbHRJbiIvPgogICAgPGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjYjBiMGIwIiBmaWx0ZXI9InVybCgjbikiLz4KPC9zdmc+'); /* Contoh noise texture SVG */
  background-size: 200px 200px;
  background-repeat: repeat;
}

.content {
  flex-grow: 1;
  padding: 30px 20px; /* Padding lebih besar */
  max-width: 900px; /* Batasi lebar konten */
  margin: 0 auto;
  position: relative; /* Untuk z-index jika ada efek overlay */
}

/* Scrollbar styling (opsional, untuk kesan lebih dark) */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #2a2a2a;
}
::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background: #777;
}
</style>
