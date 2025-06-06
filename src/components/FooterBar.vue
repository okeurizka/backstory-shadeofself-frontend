<template>
  <footer class="main-footer">
    <div class="container">
      <p>&copy; 2025 Shade of Self. All rights reserved.</p>
      <p>Created by Askivar.</p>
    </div>
  </footer>
</template>

<script setup>
// Nggak butuh script banyak di footer sederhana
</script>

<style scoped>
.main-footer {
  background-color: #5a3d5c; /* Warna gelap ala Eastward */
  color: #f7e07a; /* Teks kuning */
  padding: 20px 0;
  text-align: center;
  font-family: 'Press Start 2P', cursive; /* Contoh font pixel art */
  margin-top: 50px; /* Beri jarak dari konten di atasnya */
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.main-footer p {
  margin: 5px 0;
  font-size: 0.9em;
}

/* Responsive dasar */
@media (max-width: 768px) {
  .main-footer p {
    font-size: 0.8em;
  }
}
</style>
