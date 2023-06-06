<template>
  <PageSectionWrapper :id="skillsData.id" :title="skillsData.title" :subtitle="skillsData.subtitle">
    <div class="row text-center">
      <template v-for="item in skillsData.items">
        <!-- Item -->
        <div class="col-12 col-sm-6 col-lg-4 mb-3 mb-md-5">
          <div class="item">
            <!-- Icon Stack -->
            <span class="fa-stack fa-3x">
              <i class="fas fa-circle fa-stack-2x"></i>
              <img :src="item.icon" alt="icon" class="fa-stack-1x fa-inverse skill-icon" />
              <!-- <i :src="item.icon"></i> -->
            </span>

            <!-- Item Info -->
            <h5 class="my-3">{{item.title}}</h5>
            <p class="white-faded">{{item.description}}</p>
          </div>
        </div>
      </template>
    </div>
  </PageSectionWrapper>
</template>


<script setup lang="ts">
import siteData from '@/data/site-data.json';
import type { SiteData } from '@/data/SiteData';
import PageSectionWrapper from "@/components/PageSectionWrapper.vue";

const data: SiteData = siteData;
const skillsData = data.skills;
</script>


<style scoped lang="scss">
@import "../scss/_theming.scss";

.skill-icon {
  width: 65%;
  // centered
  position: absolute;
  top: 48%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.i {
  color: $dark;
  width: 100%;
  height: 100%;
  // centered
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@include media-breakpoint-up(md) {
  .item {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

</style>
