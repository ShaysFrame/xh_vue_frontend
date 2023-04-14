<template>
  <div class="about">
    <div class="hero is-warning">
      <div class="hero-body has-text-centered">
        <h1 class="title">About</h1>
      </div>
    </div>

    <section class="section" style="background-color: white;">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img src="/assets/section-1-photo.jpg" alt="Section 1 photo">
          </figure>
        </div>
        <div class="column">
          <h2 class="title is-3">Section 1 heading</h2>
          <p class="subtitle is-5">Section 1 description</p>
        </div>
      </div>
    </section>

    <section class="section" style="background-color: #ffe08a;">
      <div class="columns">
        <div class="column">
          <h2 class="title is-3">Section 2 heading</h2>
          <p class="subtitle is-5">Section 2 description</p>
        </div>
        <div class="column">
          <figure class="image">
            <img src="/assets/section-2-photo.jpg" alt="Section 2 photo">
          </figure>
        </div>
      </div>
    </section>

    <section class="section" style="background-color: white;">
      <div class="columns">
        <div class="column">
          <figure class="image">
            <img src="/assets/section-3-photo.jpg" alt="Section 3 photo">
          </figure>
        </div>
        <div class="column">
          <h2 class="title is-3">Section 3 heading</h2>
          <p class="subtitle is-5">Section 3 description</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = 'About | XueHanyu'
  }
}
</script>


<!-- <template>
  <div class="about">
    <div class="hero is-warning">
      <div class="hero-body has-text-centered">
        <h1 class="title">About</h1>
      </div>
    </div>

    <section class="section">
      THis is the about page
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    document.title = 'About | XueHanyu'
  }
}
</script> -->