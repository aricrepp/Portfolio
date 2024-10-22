<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Aricrepp.</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>
header {
  line-height: 1.5;
  height: 6em;
  position: fixed;
  margin: 0 4rem;
  z-index: 10;
}

nav a.router-link-exact-active {
  color: rgba(0, 0, 0, 1);
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  color: rgba(0, 0, 0, 1);
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.1);
  text-decoration: none;
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  font-weight: 400;
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
