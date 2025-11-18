// Tab functionality for accessibility and smooth switching
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('[role="tab"]');
  const tabPanels = document.querySelectorAll('[role="tabpanel"]');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Deactivate all tabs
      tabs.forEach(t => {
        t.setAttribute('aria-selected', 'false');
        t.setAttribute('tabindex', '-1');
      });

      // Hide all panels
      tabPanels.forEach(panel => panel.classList.remove('active'));

      // Activate clicked tab and associated panel
      tab.setAttribute('aria-selected', 'true');
      tab.setAttribute('tabindex', '0');
      const panel = document.getElementById(tab.getAttribute('aria-controls'));
      panel.classList.add('active');
      panel.focus();
    });

    // Support keyboard navigation with arrow keys
    tab.addEventListener('keydown', (e) => {
      let index = Array.from(tabs).indexOf(e.currentTarget);
      if (e.key === 'ArrowRight') {
        tabs[(index + 1) % tabs.length].focus();
      } else if (e.key === 'ArrowLeft') {
        tabs[(index - 1 + tabs.length) % tabs.length].focus();
      }
    });
  });
});
