<template>
  <div class="d-flex flex-column flex-grow-1 page-wrapper">
    <div class="video-bg">
      <video ref="bgVideo"
             preload="metadata"
             :muted="videoMuted"
             class="fill-video"
             :loop="true"
             :paused="!videoPlaying"
             src="media/bg.mp4"></video>
    </div>
    <div class="container page-content">
      <div class="d-flex flex-column justify-content-center">
        <div class="page-content-main d-flex flex-column bump"
             ref="pageContentRow">
          <div class="page-title mx-auto my-4">
            <img src="media/avatar.gif" class="img-fluid page-avatar" alt="Avatar">
            <h1 class="my-0">Aiko</h1>
          </div>

          <div class="card">
            <div class="card-body">

              <p>Labore sunt anim adipisicing aliqua velit cupidatat id elit dolore. Consectetur consequat qui aliquip mollit quis culpa irure minim veniam aliqua esse. Laboris esse dolore laborum elit enim Lorem id deserunt exercitation. Ipsum ut eu culpa commodo officia officia do reprehenderit consectetur sint nostrud ex. Proident proident laboris sit nulla laborum deserunt. Laborum labore ipsum et duis eu do commodo veniam laboris qui commodo elit aliquip.</p>

              <p>Labore sunt anim adipisicing aliqua velit cupidatat id elit dolore. Consectetur consequat qui aliquip mollit quis culpa irure minim veniam aliqua esse. Laboris esse dolore laborum elit enim Lorem id deserunt exercitation. Ipsum ut eu culpa commodo officia officia do reprehenderit consectetur sint nostrud ex. Proident proident laboris sit nulla laborum deserunt. Laborum labore ipsum et duis eu do commodo veniam laboris qui commodo elit aliquip.</p>

              <p>Labore sunt anim adipisicing aliqua velit cupidatat id elit dolore. Consectetur consequat qui aliquip mollit quis culpa irure minim veniam aliqua esse. Laboris esse dolore laborum elit enim Lorem id deserunt exercitation. Ipsum ut eu culpa commodo officia officia do reprehenderit consectetur sint nostrud ex. Proident proident laboris sit nulla laborum deserunt. Laborum labore ipsum et duis eu do commodo veniam laboris qui commodo elit aliquip.</p>
              <div class="divider my-2"></div>
              <div class="d-flex flex-row justify-content-start">
                <button class="btn btn-icon btn-round btn-link mr-2"><yt-icon /></button>
                <a class="btn btn-icon btn-round btn-link mr-2" :href="`mailto:admin@venipa.net?subject=Github: `"><mail-icon /></a>
                <a class="btn btn-icon btn-round btn-link" :href="githubUrl" target="_blank"><git-icon /></a>
                <div class="ml-auto"></div>
                <button class="btn btn-icon btn-round btn-link" @click="toggleMute">
                    <vol-mute-icon v-if="videoMuted" />
                    <vol-icon v-else />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GitIcon from "vue-material-design-icons/GithubFace";
import MailIcon from 'vue-material-design-icons/MailRu';
import YtIcon from 'vue-material-design-icons/Youtube';
import VolIcon from 'vue-material-design-icons/VolumeHigh';
import VolMuteIcon from 'vue-material-design-icons/VolumeMute';

import { pkg } from '../app'

const defaultData = () => {
  return {
    videoVolume: 0.085,
    videoMuted: false,
    videoPlaying: true
  };
};
export default {
  components: {
    GitIcon,
    MailIcon,
    YtIcon,
    VolIcon,
    VolMuteIcon
  },
  computed: {
      githubUrl() {
          return pkg.repository;
      }
  },
  data() {
    return {...defaultData(), videoMuted: localStorage.videoVolume == 0};
  },
  methods: {
    /**
     * @return {HTMLVideoElement}
     */
    getVideo() {
      return this.$refs.bgVideo;
    },
    toggleVideo() {
        const video = this.getVideo();
        if (this.videoPlaying) {
            video.pause();
        } else {
            video.play();
        }
    },
    toggleMute() {
        const video = this.getVideo();
        if (this.videoMuted) {
            video.volume = this.videoVolume;
            this.videoMuted = false;
        } else {
            video.volume = 0;
            this.videoMuted = true;
        }
        localStorage.videoVolume = video.volume;
    }
  },
  mounted() {
    const v = this.getVideo();
    v.volume = localStorage.videoVolume || this.videoVolume;
    v.play();
    window.addEventListener("load", () => {
      this.$refs["pageContentRow"].classList.add("active");
    });
  }
};
</script>

<style lang="scss" scoped>
@media (max-width: 576px) {
    .main-card {
        margin: 0 -15px;
    }
}
</style>