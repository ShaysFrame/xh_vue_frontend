<template>
  <div class="home">
    <div class="hero is-warning is-medium">
      <div class="hero-body has-text-centered">
        <h1 class="title">欢迎来到学汉语 <br/>  <br/> Welcome to XueHanyu <br/><br/> </h1>

        <h2 class="subtitle">一个使用您的母语的开源学习平台！<br><br>An open source learning platform in your native language!</h2>
      </div>
    </div>

    <section class="section is-medium">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-4">
            <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info"><i class="far fa-clock" style="color: #4a4a4a;"></i></span>

              <h2 class="is-size-4 mt-4 mb-4">Study at your own pace</h2>

              <p>This is just some random placeholder text</p>
            </div>
          </div>

          <div class="column is-4">
            <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info"><i class="far fa-comments" style="color: #4a4a4a;"></i></span>

              <h2 class="is-size-4 mt-4 mb-4">Study with others</h2>

              <p>This is just some random placeholder text</p>
            </div>
          </div>

          <div class="column is-4">
            <div class="box has-text-centered">
              <span class="icon is-size-2 has-text-info"><i class="fas fa-home" style="color: #4a4a4a;"></i></span>

              <h2 class="is-size-4 mt-4 mb-4">Study from your home</h2>

              <p>This is just some random placeholder text</p>
            </div>
          </div>

          <div class="column is-12 has-text-centered">
            <a href="/sign-up" class="button is-warning is-size-3 mt-6 mb-6">Click to get started</a>
          </div>

          <hr>

          <div 
              class="column is-3"
              v-for="course in courses"
              v-bind:key="course.id"
          >
              <CourseItem :course="course" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

import CourseItem from '@/components/CourseItem.vue'

export default {
  name: 'Home',
  data() {
      return {
          courses: []
      }
  },
  components: {
      CourseItem
  },
  mounted() {
      console.log('mounted')

      document.title = 'Welcome | XueHanyu'

      axios
          .get('courses/get_frontpage_courses/')
          .then(response => {
              console.log(response.data)

              this.courses = response.data
          })
  }
}
</script>
