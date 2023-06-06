<template>
  <!-- Portfolio Modal -->
  <div class="modal modal-xl fade" id="portfolio-modal" tabindex="-1" aria-labelledby="portfolio-modal-label" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <!-- Title -->
        <div class="modal-header">
          <h4 class="modal-title" id="exampleModalLabel">{{ projectTitle }}</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <div class="row">
            <!-- Image Column -->
            <div class="col-12 col-lg-6">
              <img class="portfolio-cover-img img-fluid mb-3 mg-lg-0" :src="projectImage" :alt="projectTitle" />
            </div>

            <!-- Content Column -->
            <div class="col-12 col-lg-6">

              <!-- Tags -->
              <div class="project-tags">
                <span class="me-1"><i class="fa fa-tag me-1"></i> Tags: </span>
                <template v-for="tag in projectTags">
                  <span class="badge bg-primary me-1">{{ tag }}</span>
                </template>
              </div>

              <!-- Description -->
              <div class="project-description mt-4">
                <h5>Project Description</h5>
                <p>{{projectDescription}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from "vue";
import type { Project } from '@/data/SiteData';
import Modal from "bootstrap/js/dist/modal";
// import Modal from '/node_modules/bootstrap/js/src/modal';


const projectTitle = ref<string>();
const projectDescription = ref<string>();
const projectTags = ref<string>();
const projectImage = ref<string>();
let bsModal: Modal = null;

const displayProject = (project: Project) => {
  projectTitle.value = project.title
  projectDescription.value = project.description
  projectTags.value = project.tags.join(', ')
  projectImage.value = project.srcImage

  if(bsModal)
    bsModal.show()
}

onMounted(() => {
  let modalElement = document.getElementById('portfolio-modal')
  bsModal = new Modal(modalElement, {});
})

defineExpose({
  displayProject
})
</script>

<style scoped lang="scss">
@import "../scss/_theming.scss";

p {
  font-size: 0.7rem;
  @include media-breakpoint-up(md) {
    font-size: 0.9rem;
  }
}

h5 {
  font-size: 1.1rem;
  @include media-breakpoint-up(md) {
    font-size: 1.3rem;
  }
}

</style>
