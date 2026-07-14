let intersectionObserver;

function ensureIntersectionObserver() {
  if (intersectionObserver) return;

  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const eventName = entry.isIntersecting ? 'enterViewport' : 'exitViewport';
        entry.target.dispatchEvent(new CustomEvent(eventName));
      });
    }
  );
}

export default function viewport(element) {
  ensureIntersectionObserver();

  intersectionObserver.observe(element);

  return {
    destroy() {
      intersectionObserver.unobserve(element);
    }
  }
}

/*
  <h1
    class="text-2xl h-font uppercase mb-4 font-bold"
    use:viewport
    on:enterViewport={(e) => e.target.classList.add("xyz-in")}
    on:exitViewport={(e) => e.target.classList.remove("xyz-in")}
  >
    Hello
  </h1>
*/