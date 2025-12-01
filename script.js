(function () {
  const artworks = document.querySelectorAll('.artwork');

  if (!('IntersectionObserver' in window) || artworks.length === 0) {
    return;
  }

  artworks.forEach((artwork) => artwork.classList.add('animatable'));

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  artworks.forEach((artwork) => observer.observe(artwork));
})();
