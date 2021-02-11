<template>
  <div class="blog-container">
    <div class="feature-text chain-img">
      We've compiled a few handy hints to help you keep on top of your bicycle maintenance!
    </div>
    <br><br>
    <div class="blog-content">
      <div class="blog-text">
        <h2>How to Lubricate Your Chain Properly</h2>
        <p>It's easy to apply lubricant to your chain with our newly designed bottles.</p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/r7TSeO3MsPs"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;    picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div class="blog-content">
      <div class="blog-text">
        <h2>Make Your Own Chain Lube</h2>
        <p>It's easy to make your own chain lube, so long as you don't mind a few harmful side effects...</p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/i5XbD6jRHnc"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
    <div class="blog-content">
      <div class="blog-text">
        <h2>How to Refill a Green Oil Bottle</h2>
        <p>Take your empty bottle to a local bike store or buy a large bottle to refill from.</p>
      </div>
      <iframe
        src="https://www.youtube.com/embed/iiSSxf07dMM"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen>
      </iframe>
    </div>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    margin: 2rem 0;
  }

  .blog-container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2em;
    padding-top: 2rem;
    width: 80%;
    margin: 0 auto;

    .blog-content {
      margin: 0 auto;
      display: flex;
      width: 60%;
      min-height: 17vw;
      box-shadow: 0 5px 10px 2px rgba(0,0,0,0.3);
      padding: 1em 0.75em 0;
      

      .blog-text {
        width: 70%;
        padding: 0 1em 0 0;

        p {
          margin-top: 1em;
        }
      }

      iframe {
        height: 95%;
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 800px) {
    .blog-container .blog-content {
      flex-direction: column;
      width: 90%;
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
</style>
