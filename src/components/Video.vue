<template>
    <div class="video-container">
      <iframe
        :src="'https://player.bilibili.com/player.html?' + youtube_id"
        width="100%" 
        height="600" 
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
      <!-- <iframe
        :src="'https://www.youtube.com/embed/' + youtube_id"
        width="100%"
        height="400"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;"
        allowfullscreen
      ></iframe> -->
      <!-- <iframe
        src="//player.bilibili.com/player.html?aid=883645686&bvid=BV1eK4y147nD&cid=206643770&page=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe>
      <iframe
        src="//player.bilibili.com/player.html?aid=995817128&bvid=BV1ds4y1X7MX&cid=1119056358&page=1"
        scrolling="no"
        border="0"
        frameborder="no"
        framespacing="0"
        allowfullscreen="true"
      >
      </iframe> -->
    </div>
  </template>
  
  <script>
  export default {
    props: ["youtube_id"],
  };
  </script>
  