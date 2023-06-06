<template>
  <nav 
    class="navbar navbar-expand-lg navbar-dark fixed-top" 
    :class="{'navbar-shrink': !shouldExpand}" 
    id="navbar"
  >
    <div class="container">
      <!-- Brand -->
      <a class="navbar-brand" href="#app">
        <img :src="navbarData.srcLogo" alt="logo" class="img img-fluid img-logo">
        <span class="brand-text" v-html="navbarData.brand"></span>
      </a>

      <!-- Collapse Button (Small Screens) -->
      <button 
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbar-collapse-container"
        aria-controls="navbar-collapse-container"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars ms-1 me-1"></i>
      </button>

      <!-- Navbar Items -->
      <div class="collapse navbar-collapse" id="navbar-collapse-container">
        <ul class="navbar-nav text-uppercase ms-auto py-2 py-lg-0">
          <template v-for="menuOption in navbarData.menuOptions">
            <!-- Nav Item -->
            <li class="nav-item">
              <a class="nav-link" :class="{'active': displayingSectionId === menuOption.id}" @click="_onNavLinkClicked(menuOption.id)">
                <i :class="menuOption.icon" class="nav-link-icon d-lg-none"></i> {{ menuOption.label }}
              </a>
            </li>
          </template>
        </ul>
      </div>
    </div>
  </nav>
</template>


<script setup lang="ts">
import siteData from '@/data/site-data.json';
import type { SiteData } from '@/data/SiteData';
import {useLayout} from '@/composables/layout.js';
import {computed, onMounted, onUnmounted, ref} from "vue";
import type { Ref } from 'vue';

const data: SiteData = siteData;
const navbarData = data.navbar;
const displayingSectionId: Ref<string | null> = ref(null);
const shouldExpand: Ref<boolean> = ref(true);


onMounted(() => {
  _spyScroll();
  window.addEventListener('scroll', _spyScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', _spyScroll);
});

const _spyScroll = () => {
  shouldExpand.value = window.scrollY === 0;

  var currentSectionId: string = navbarData.menuOptions[0].id;
  var lowestYPosition = null;

  // spying scroll to determine which section to highlight on the menu.
  for(let i in navbarData.menuOptions) {

    let section = navbarData.menuOptions[i];
    let divBounds = document.querySelector("#" + section.id)?.getBoundingClientRect();
    let distanceFromZero = 0;
    if(divBounds) {
      let distanceFromZero = Math.abs(divBounds.y);
    };

    // if the distance from the top of the section to the top of the window
    // is less than the lowestYPosition, update lowestYPosition and currentSectionId.
    if(lowestYPosition === null || distanceFromZero < lowestYPosition) {
      lowestYPosition = distanceFromZero;
      currentSectionId = section.id;
    };
  };

  // if the current section is different from the one being displayed, update the displayingSectionId.
  displayingSectionId.value = currentSectionId;
};

const _onNavLinkClicked = (sectionId: string) => {
  useLayout().scrollToSection(sectionId)
}
</script>


<style scoped lang="scss">
@import "../scss/_theming.scss";

.navbar {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  background-color: $dark;

  .navbar-toggler {
    padding: 0.6rem;
    font-size: 0.75rem;
    font-family: $headings-font-family;
    text-transform: uppercase;
    font-weight: $font-weight-bold;

    &:focus {
      background-color: $gray-800;
    }
  }

  .navbar-brand {
    font-family: $headings-font-family;
    font-weight: $headings-font-weight;
    text-transform: uppercase;

    img {
      height: 3rem;
      margin-right: 0.5rem;
    }
  }

  .navbar-nav {
    .nav-item {
      .nav-link {
        font-family: $subheadings-font-family;
        font-size: 1rem;
        color: $white;
        cursor:pointer;
        margin-left: 0.3rem;

        &.active,
        &:hover {
          color: $primary;
        }

        .nav-link-icon {
          min-width: 1.4rem;
          text-align: right;
          margin-right: 0.3rem;
        }
      }
    }
  }
}

@include media-breakpoint-up(lg) {
  .navbar {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    border: none;
    background-color: transparent;
    transition: padding-top 0.3s ease-in-out,
    padding-bottom 0.3s ease-in-out;

    .navbar-brand {
      font-size: 1.5em;
      transition: font-size 0.3s ease-in-out;

      img {
        height: 3.4rem;
        transition: height 0.3s ease-in-out;
      }
    }

    &-shrink {
      padding-top: 0.4rem;
      padding-bottom: 0.4rem;
      background-color: $dark;

      .navbar-brand {
        font-size: 1.4em;

        svg,
        img {
          height: 3rem;
        }
      }
    }
  }
}
</style>
