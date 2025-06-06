<template>
  <div class="timeline-page-wrapper">
    <div class="container">
      <h1 class="page-title">Jejak Takdir: Kisah Lengkap</h1>
      <p class="page-intro">
        Selami setiap babak perjalanan Edelia dan Galib, dari awal hingga titik balik yang
        menentukan.
      </p>

      <div class="full-timeline-grid">
        <div class="timeline-detail-box" v-for="event in timelineEvents" :key="event.id">
          <h2 class="event-title">{{ event.title }}</h2>
          <div class="event-visual-placeholder">
            <p>Ilustrasi: {{ event.title }}</p>
            <img v-if="event.visual" :src="event.visual" :alt="event.title" />
          </div>
          <p class="event-long-desc">{{ event.longDesc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { timelineEvents } from '../data/timeline' // Import data lengkap
</script>

<style scoped>
.timeline-page-wrapper {
  padding: 80px 0;
  background-color: #1a1a1a; /* Background mirip App.vue */
  color: #b0b0b0;
  min-height: calc(100vh - 100px); /* Kurangi tinggi header/footer */
}

.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
}

.page-title {
  font-family: 'Playfair Display', serif;
  font-size: 3.5em;
  color: #f0f0f0;
  margin-bottom: 20px;
  letter-spacing: 2px;
}

.page-intro {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1em;
  margin-bottom: 60px;
  color: #c0c0c0;
}

.full-timeline-grid {
  display: grid;
  grid-template-columns: 1fr; /* Satu kolom, biar memanjang ke bawah */
  gap: 80px; /* Jarak antar event lebih besar */
}

.timeline-detail-box {
  background-color: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(200, 200, 200, 0.15);
  padding: 40px;
  border-radius: 10px;
  text-align: left;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.timeline-detail-box:hover {
  transform: translateY(-10px);
}

.event-title {
  font-family: 'Playfair Display', serif;
  font-size: 2.5em;
  color: #f0f0f0;
  margin-top: 0;
  margin-bottom: 25px;
  text-align: center;
}

.event-visual-placeholder {
  width: 100%;
  height: 300px; /* Ilustrasi lebih besar */
  background-color: rgba(200, 200, 200, 0.1);
  border: 1px dashed rgba(200, 200, 200, 0.2);
  margin: 0 auto 30px auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(200, 200, 200, 0.4);
  font-style: italic;
  font-size: 1em;
  overflow: hidden;
}
.event-visual-placeholder img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.event-long-desc {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.05em;
  color: #d0d0d0;
  line-height: 1.7;
}

@media (max-width: 768px) {
  .page-title {
    font-size: 2.5em;
  }
  .event-title {
    font-size: 1.8em;
  }
  .event-visual-placeholder {
    height: 200px;
  }
}
</style>
