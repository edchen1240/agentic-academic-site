/**
 * Generic content loader for listing pages (posts / projects / materials).
 *
 * Usage on a listing page:
 *   <div id="posts-container" data-manifest="manifest.json"></div>
 *   <ul id="toc-list"></ul>            <!-- optional table of contents -->
 *   <script src="../js/load-posts.js" defer></script>
 *
 * manifest.json is an array of items, each:
 *   { "id", "title", "datetimeCreate", "datetimeUpdate", "excerpt",
 *     "coverImage" (optional, relative to this folder), "link" }
 */
document.addEventListener('DOMContentLoaded', function () {
  const container = document.getElementById('posts-container');
  const tocList = document.getElementById('toc-list');
  if (!container) return;

  const manifestUrl = container.dataset.manifest || 'manifest.json';

  fetch(manifestUrl)
    .then(r => { if (!r.ok) throw new Error(manifestUrl + ' not found'); return r.json(); })
    .then(items => {
      if (!Array.isArray(items) || items.length === 0) {
        container.innerHTML = '<div class="block"><p style="color:var(--color-text-secondary)">No entries yet.</p></div>';
        return;
      }
      items.sort((a, b) => new Date(b.datetimeUpdate || b.datetimeCreate) - new Date(a.datetimeUpdate || a.datetimeCreate));

      items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'block post-item';
        div.id = 'post-' + item.id;

        let coverHTML = '';
        if (item.coverImage) {
          coverHTML = `<div class="post-cover"><img src="${item.coverImage}" alt="${escapeHtml(item.title)}" class="post-cover-image"></div>`;
        } else {
          div.classList.add('no-cover');
        }

        const link = item.link || '#';
        const dates = item.datetimeUpdate && item.datetimeUpdate !== item.datetimeCreate
          ? `Published ${item.datetimeCreate} | Updated ${item.datetimeUpdate}`
          : `Published ${item.datetimeCreate || ''}`;

        div.innerHTML = `
          ${coverHTML}
          <div class="post-body">
            <div class="post-header">
              <h2 class="post-title"><a href="${link}">${escapeHtml(item.title)}</a></h2>
              <span class="post-date">${dates}</span>
            </div>
            <p class="post-excerpt">${escapeHtml(item.excerpt || '')}</p>
          </div>`;
        container.appendChild(div);

        if (tocList) {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = '#post-' + item.id;
          a.textContent = item.title;
          a.setAttribute('data-target', 'post-' + item.id);
          a.addEventListener('click', e => {
            e.preventDefault();
            div.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.replaceState(null, '', '#post-' + item.id);
          });
          li.appendChild(a);
          tocList.appendChild(li);
        }
      });

      if (tocList) setupScrollSpy();
    })
    .catch(err => {
      console.log('Could not load content:', err.message);
      container.innerHTML = `<div class="block"><p style="color:var(--color-text-secondary)">No content yet. Add entries to <code>${manifestUrl}</code>.</p></div>`;
    });

  function setupScrollSpy() {
    function onScroll() {
      const scrollY = window.scrollY || window.pageYOffset;
      let currentId = '';
      document.querySelectorAll('.post-item').forEach(p => {
        if (scrollY >= p.getBoundingClientRect().top + scrollY - 120) currentId = p.id;
      });
      tocList.querySelectorAll('a').forEach(a =>
        a.classList.toggle('toc-active', a.getAttribute('data-target') === currentId));
    }
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  function escapeHtml(text) {
    const d = document.createElement('div');
    d.textContent = text == null ? '' : text;
    return d.innerHTML;
  }
});
