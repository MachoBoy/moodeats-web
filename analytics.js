document.addEventListener('click', function (event) {
    var link = event.target.closest('[data-ga-event]');
    if (!link || typeof gtag !== 'function') return;

    var name = link.getAttribute('data-ga-event');
    var params = {};

    if (name === 'email_click') {
        params.email = (link.getAttribute('href') || '')
            .replace(/^mailto:/i, '')
            .split('?')[0];
    } else if (link.href) {
        params.link_url = link.href;
    }

    gtag('event', name, params);
});

document.addEventListener(
    'toggle',
    function (event) {
        var details = event.target;
        if (
            !details.open ||
            !details.closest('.faq') ||
            typeof gtag !== 'function'
        ) {
            return;
        }

        var summary = details.querySelector('summary');
        if (!summary) return;

        gtag('event', 'faq_open', {
            question: summary.textContent.replace(/\s+/g, ' ').trim(),
        });
    },
    true
);
