<template>
  <Navbar></Navbar>
  <Header></Header>
  <About></About>
  <Skills></Skills>
  <!-- <Portfolio @project-clicked="_onProjectOpened"></Portfolio> -->
  <!-- <Contact></Contact> -->
  <!-- <Footer></Footer> -->
  <!-- <PortfolioModal ref="portfolioModal"></PortfolioModal> -->
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Header from "@/views/Header.vue";
import About from "@/views/About.vue";
import Skills from "@/views/Skills.vue";
import type { Project } from "@/data/SiteData";
import { ref } from "vue";

const portfolioModal = ref()

const _onProjectOpened = (project: Project) => {
  portfolioModal.value.displayProject(project)
}
</script>

<style scoped lang="scss">
// @import "scss/_theming.scss";

// // app should take up full width and height of the screen.
// // this is to prevent the footer from being pushed up when the content is too short.
// html, body, #app {
//   height: 100%;
//   width: 100%;
//   overflow-x: hidden;
// }
</style>