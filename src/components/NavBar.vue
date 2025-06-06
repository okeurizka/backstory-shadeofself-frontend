<template>
  <header class="header-nav-look-outside">
    <div class="container">
      <h1 class="site-title">[JUDUL GAME LO]</h1>
      <nav class="nav-links">
        <router-link to="/" class="nav-item">Home</router-link>
        <router-link to="/karakter/galib" class="nav-item">Karakter</router-link>
        <router-link to="/jejak-mereka" class="nav-item">Jejak Mereka</router-link>
        <a href="#" class="nav-item" @click.prevent="scrollToGame">Mainkan Game</a>
      </nav>
    </div>
  </header>
</template>

<script setup>
const scrollToGame = () => {
  console.log('Nanti ini bisa diimplementasikan buat scroll ke bagian game atau link eksternal')
}
</script>

<style scoped>
.header-nav-look-outside {
  background-color: rgba(10, 10, 10, 0.8); /* Hampir hitam, sedikit transparan */
  padding: 18px 25px;
  border-bottom: 1px solid rgba(200, 200, 200, 0.1); /* Garis samar */
  font-family: 'Times New Roman', serif; /* Contoh font klasik */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  position: sticky; /* Sticky di atas */
  top: 0;
  z-index: 1000;
}

.container {
  display: flex;
  justify-content: space-between; /* Judul kiri, nav kanan */
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.site-title {
  color: #e0e0e0; /* Putih gading */
  font-size: 1.8em;
  margin: 0;
  letter-spacing: 2px;
  font-weight: normal;
  /* Kalo mau efek sketchy, bisa pake text-shadow atau filter */
}

.nav-links {
  display: flex;
  gap: 40px; /* Jarak antar item navigasi */
}

.nav-item {
  color: #b0b0b0; /* Abu-abu terang */
  text-decoration: none;
  font-size: 1.05em;
  font-weight: 300;
  transition: color 0.4s ease-in-out;
  position: relative;
}

.nav-item:hover {
  color: #ffffff; /* Putih bersih saat hover */
}

.nav-item::after {
  /* Efek garis bawah saat hover */
  content: '';
  position: absolute;
  width: 0;
  height: 1px;
  bottom: -3px;
  left: 50%;
  background-color: #f0f0f0;
  transition: all 0.4s ease-in-out;
  transform: translateX(-50%);
}

.nav-item:hover::after {
  width: 100%;
}

/* Responsive dasar */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    gap: 15px;
  }
  .site-title {
    font-size: 1.5em;
  }
  .nav-links {
    gap: 20px;
  }
  .nav-item {
    font-size: 0.9em;
  }
}
</style>
