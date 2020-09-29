<template>
  <div>
    <h1>BLOG</h1>
    <h3>
      This is a great place to put any 'helpful advice' content such as 'how to clean your bike chain'. Content that isn't directly selling the products but can be considered extra value for customers. I've just embedded some of the videos for now but this is a good place to improve SEO with short written pieces.
    </h3>
    <br><br>
    <div class="content">
      <div class="video-content">
        <iframe
          src="https://www.youtube.com/embed/r7TSeO3MsPs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-content">
        <iframe
          src="https://www.youtube.com/embed/i5XbD6jRHnc"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class="video-content">
        <iframe
          src="https://www.youtube.com/embed/iiSSxf07dMM"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    margin: 2rem 0;
  }

  .content {
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
