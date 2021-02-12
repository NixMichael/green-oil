<template>
  <div class="blog-container">
    <div class="feature-text chain-img">
      Handy hints from Green Oil to help you keep on top of your bicycle maintenance!
    </div>
    <br><br>

    <div class="blog-content">
      <div class="blog-text">
        <h2>How to Lubricate Your Chain Properly</h2>
        <p>It's easy to apply lubricant to your chain with our newly designed bottles.</p>
      </div>
      <div class="video">
      <div class="video-container">
        <div class="iframe-container">
            <iframe src="https://www.youtube.com/embed/r7TSeO3MsPs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      </div>
    </div>


    <div class="blog-content">
      <div class="blog-text">
        <h2>How to Refill a Green Oil Bottle</h2>
        <p>Take your empty bottle to a local bike store or buy a large bottle to refill from.</p>
      </div>
      <div class="video">
      <div class="video-container">
        <div class="iframe-container">
          <iframe src="https://www.youtube.com/embed/iiSSxf07dMM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      </div>
    </div>


    <div class="blog-content">
      <div class="blog-text">
        <h2>Make Your Own Chain Lube</h2>
        <p>It's easy to make your own chain lube, so long as you don't mind a few harmful side effects...</p>
      </div>
      <div class="video">
      <div class="video-container">
        <div class="iframe-container">
          <iframe src="https://www.youtube.com/embed/i5XbD6jRHnc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    margin: 2rem 0;
  }

  .blog-container {
    width: 80%;
    margin: 0 auto;

    .blog-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 5px 10px 2px rgba(0,0,0,0.3);
      padding: 0.5em;
      margin-bottom: 1em;

      .blog-text {
        padding: 0.5em;

        p {
          margin-top: 1em;
        }
      }
    }

    .video {
      min-width: 50%;

    .video-container {
      max-width: 100%;

      .iframe-container {
        position: relative;
        height: 0;
        padding-bottom: 56.25%;

        iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          // height: 95%;
          // width: 100%;
        }
      }
    }
    }
  }

  @media screen and (max-width: 800px) {
    .blog-container {
      width: 100%;
      .blog-content {
        flex-direction: column;
        width: 100%;
        min-height: 350px;
        padding-bottom: 1em;

        .blog-text {
          width: 100%;
          padding: 0 1em 1em;
        }

        iframe {
          height: 90%;
          margin: 0 auto;
        }
      }
    }
  }
</style>
