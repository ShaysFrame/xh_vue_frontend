<template>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation" style="min-height: 5rem;">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <img src="../assets/xh_logo.png">
        </router-link>
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="toggleNavbar">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div class="navbar-menu" :class="{ 'is-active': isNavbarActive }">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" @click="closeNavbar">Home</router-link>
          <router-link to="/about" class="navbar-item" @click="closeNavbar">About</router-link>
          <router-link to="/courses" class="navbar-item" @click="closeNavbar">Courses</router-link>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="$store.state.user.isAuthenticated && $store.state.userGroups && $store.state.userGroups.includes('teacher')">
                <router-link to="/dashboard/create-course" class="button is-dark">Create course</router-link>
              </template>
              <template v-if="$store.state.user.isAuthenticated">
                <router-link to="/dashboard/my-account" class="button is-light">My account</router-link>
              </template> 
  
              <template v-else>
                <router-link to="/sign-up" class="button is-dark"><strong>Sign up</strong></router-link>
                <router-link to="/log-in" class="button is-light">Log in</router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNavbarActive: false,
      };
    },
    created() {
      // Call the fetchUserGroups action to get the user groups data
      this.$store.dispatch("fetchUserGroups");
    },
    methods: {
      toggleNavbar() {
        this.isNavbarActive = !this.isNavbarActive;
      },
      closeNavbar() {
        this.isNavbarActive = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .navbar-burger {
    cursor: pointer;
  }
  
  .navbar-menu {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  </style>
  

<!-- <template>
    <nav class="navbar is-warning" role="navigation" aria-label="main naviation" style="min-height: 5rem;">
      <div class="navbar-brand">
        <router-link class="navbar-item is-size-4" to="/">
          <img src="../assets/xh_logo.png">
        </router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navMenu">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item" @click="closeMenu">Home</router-link>
          <router-link to="/about" class="navbar-item" @click="closeMenu">About</router-link>
          <router-link to="/courses" class="navbar-item" @click="closeMenu">Courses</router-link>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="$store.state.user.isAuthenticated">
                <router-link to="/dashboard/create-course" class="button is-dark" @click="closeMenu">Create course</router-link>
                <router-link to="/dashboard/my-account" class="button is-light" @click="closeMenu">My account</router-link>
              </template>
  
              <template v-else>
                <router-link to="/sign-up" class="button is-dark" @click="closeMenu"><strong>Sign up</strong></router-link>
                <router-link to="/log-in" class="button is-light" @click="closeMenu">Log in</router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isActive: false
      };
    },
    methods: {
      toggleMenu() {
        this.isActive = !this.isActive;
      },
      closeMenu() {
        this.isActive = false;
      }
    }
  };
  document.addEventListener('DOMContentLoaded', () => {
  
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {
  
          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          const target = el.dataset.target;
          const $target = document.getElementById(target);
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  });
  </script>
  
  <style>
  .navbar-burger {
    display: block;
  }
  </style> -->
  

<!-- <template>
    <nav class="navbar is-warning" role="navigation" aria-label="main navigation" style="min-height: 5rem;">
      <div class="navbar-brand">
        <router-link class="navbar-item is-size-4" to="/">
          <img src="../assets/xh_logo.png">
        </router-link>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu" @click="toggleNav">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
  
      <div id="navbar-menu" class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link to="/courses" class="navbar-item">Courses</router-link>
        </div>
  
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="$store.state.user.isAuthenticated">
                <router-link to="/dashboard/create-course" class="button is-dark">Create course</router-link>
                <router-link to="/dashboard/my-account" class="button is-light">My account</router-link>
              </template>
  
              <template v-else>
                <router-link to="/sign-up" class="button is-dark"><strong>Sign up</strong></router-link>
                <router-link to="/log-in" class="button is-light">Log in</router-link>
              </template>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    methods: {
      toggleNav() {
        const navMenu = document.getElementById('navbar-menu');
        const burger = document.querySelector('.navbar-burger');
        burger.classList.toggle('is-active');
        navMenu.classList.toggle('is-active');
      },
    },
  };
  </script> -->
  
<!-- <template>
    <nav class="navbar is-warning" role="navigation" aria-label="main naviation" style="min-height: 5rem;">
        <div class="navbar-brand">
            <router-link class="navbar-item is-size-4" to="/"><img src="../assets/xh_logo.png"></router-link>
        </div>

        <div id="navbar-item" class="navbar-menu">
            <div class="navbar-start">
                <router-link to="/" class="navbar-item">Home</router-link>
                <router-link to="/about" class="navbar-item">About</router-link>
                <router-link to="/courses" class="navbar-item">Courses</router-link>
            </div>

            <div class="navbar-end">
                <div class="navbar-item">
                    <div class="buttons">
                        <template v-if="$store.state.user.isAuthenticated">
                            <router-link to="/dashboard/create-course" class="button is-dark">Create course</router-link>
                            <router-link to="/dashboard/my-account" class="button is-light">My account</router-link>
                        </template>

                        <template v-else>
                            <router-link to="/sign-up" class="button is-dark"><strong>Sign up</strong></router-link>
                            <router-link to="/log-in" class="button is-light">Log in</router-link>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </nav>
</template> -->