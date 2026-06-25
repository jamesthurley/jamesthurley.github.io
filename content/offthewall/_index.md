+++
title = "Off The Wall"
sort_by = "weight"

[extra]
content_class = "otw-site otw-home"
+++

<div class="otw-hero">
  <a id="offthewall-logo-link" class="otw-logo-link" href="/offthewall/app/" title="Launch Off The Wall">
    <img src="/offthewall/app-store-icon.webp" alt="Off The Wall Logo">
  </a>
  <div class="otw-hero-copy">
    <p class="otw-kicker">Creative time between climbs</p>
    <h2>Turn your Kilter Board into a giant canvas</h2>
    <p class="otw-lede">Draw, animate, and play on the wall you already climb on.</p>
    <div class="otw-actions">
      <a class="otw-button otw-button-primary" href="/offthewall/app/">Launch Web App</a>
      <a class="otw-button" href="https://apps.apple.com/app/off-the-wall/id6774084827">Get iOS App</a>
      <a class="otw-button" href="https://www.instagram.com/offthewallapp">Instagram</a>
    </div>
  </div>
</div>

<script>
  const offthewallIsIOS =
    /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

  if (offthewallIsIOS) {
    document.getElementById("offthewall-logo-link").href =
      "https://apps.apple.com/app/off-the-wall/id6774084827";
  }
</script>

<div class="otw-intro">
  <p>Off The Wall is an app for climbers who want to have fun with the Kilter Board between climbs. It connects over Bluetooth and turns the board into a giant low-resolution screen.</p>
</div>

<div class="otw-card-grid otw-feature-grid">

  <article class="otw-card"><p class="otw-card-kicker otw-green">Draw</p><h3>Paint directly on the wall</h3><p>Draw pictures in real time. Import photos. Save and load your creations locally.</p></article>

  <article class="otw-card"><p class="otw-card-kicker otw-teal">Animate</p><h3>Bring pictures to life</h3><p>Sequence multiple frames into animations and play them on the board.</p></article>

  <article class="otw-card"><p class="otw-card-kicker otw-warm">Reactions</p><h3>Send GIFs to the board</h3><p>Search GIFS and create a custom reaction panel for glorious sends, spectacular face plants, and everything between.</p></article>

  <article class="otw-card"><p class="otw-card-kicker otw-pink">Play</p><h3>Play games on the board</h3><p>Play Pong, Conway's Game of Life, Hold Rush, and other games live on the Kilter Board.</p></article>

  <article class="otw-card"><p class="otw-card-kicker otw-teal">Ambiance</p><h3>Mood lighting</h3><p>Run colorful screensavers and generative effects when you want the wall to set the mood.</p></article>

  <article class="otw-card"><p class="otw-card-kicker otw-green">Commercial gyms</p><h3>Put idle walls to work</h3><p>Run playlists when the wall is idle. Automatically turn off holds to prolong LED life.</p><p><a href="/offthewall/commercial-gyms/">Explore gym features →</a></p></article>
</div>

<div class="otw-highlight">
<p class="otw-kicker">Free and private</p>
<h3>No account required. No ads.</h3>
<p>Off The Wall does not require an account, does not include ads, and does not collect personally identifiable information. Anonymous usage analytics may be collected to help improve the app.</p>
</div>

<div class="otw-two-column">
<div>

## Supported boards

- Kilter Board Homewall
- Kilter Board Original
- Tension Board 2 (not verified)

More boards may follow in the future. Let me know if there are any you want added.

Requires Bluetooth Low Energy and a compatible Aurora/Kilter controller for board control. The app can still be opened and used without a board.
</div>
<div>

## Good to know

This app has not been tested on all board configurations and hardware. Use at your own risk.

Boards with older hardware may not refresh as fast as newer hardware, making games unplayable and animations slow.

The Safari browser does not support Web Bluetooth, so you will have to use the iOS App if you are on an iOS device, or Chrome on MacOS.
</div>
</div>

<nav class="otw-related" aria-label="Off The Wall information">
  <a href="/offthewall/commercial-gyms/"><strong>Commercial Gyms</strong><span>Idle and event displays for your wall</span></a>
  <a href="/offthewall/support/"><strong>Support</strong><span>Get help with the app</span></a>
  <a href="/offthewall/privacy/"><strong>Privacy</strong><span>How local data and permissions are handled</span></a>
</nav>
