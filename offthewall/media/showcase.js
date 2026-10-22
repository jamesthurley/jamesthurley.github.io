/** Shared by the React app and the static thurley.com showcase. */
export function mountShowcaseMedia(root) {
  const video = root.querySelector("video");
  if (!video) return () => {};
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  let wantsPlayback = !reducedMotion.matches;
  let inViewport = false;
  let automaticPauses = 0;
  let disposed = false;
  const pauseAutomatically = () => {
    if (video.paused) return;
    // Media events are queued. Count our pauses so their later events do not
    // overwrite the user's playback choice, even after a quick scroll back.
    automaticPauses++;
    video.pause();
  };
  const updatePlayback = () => {
    if (disposed) return;
    if (!inViewport || document.hidden || !wantsPlayback) {
      pauseAutomatically();
    } else if (video.paused) {
      // Browser autoplay restrictions can still require the native play button.
      void video.play().catch(() => {});
    }
  };
  const observer = new IntersectionObserver(
    ([entry]) => {
      inViewport = entry.isIntersecting && entry.intersectionRatio >= 0.15;
      updatePlayback();
    },
    { threshold: 0.15 },
  );
  observer.observe(video);
  const onPlay = () => {
    if (video.paused) return;
    wantsPlayback = true;
    updatePlayback();
  };
  const onPause = () => {
    if (automaticPauses > 0) {
      automaticPauses--;
      return;
    }
    wantsPlayback = false;
    // A queued manual pause may arrive after an automatic resume.
    updatePlayback();
  };
  const onMotionChange = () => {
    if (reducedMotion.matches) wantsPlayback = false;
    updatePlayback();
  };
  video.addEventListener("play", onPlay);
  video.addEventListener("pause", onPause);
  document.addEventListener("visibilitychange", updatePlayback);
  reducedMotion.addEventListener("change", onMotionChange);
  return () => {
    disposed = true;
    observer.disconnect();
    video.removeEventListener("play", onPlay);
    video.removeEventListener("pause", onPause);
    video.pause();
    document.removeEventListener("visibilitychange", updatePlayback);
    reducedMotion.removeEventListener("change", onMotionChange);
  };
}
