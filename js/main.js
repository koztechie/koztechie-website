document.addEventListener('DOMContentLoaded', () => {
    const p = document.getElementById('contact-link-placeholder');
    if (!p) return;
    const e = 'hello' + '@' + 'koztechie.pp.ua';
    p.innerHTML = `<a href="mailto:${e}" class="contact-link">${e}</a>`;
});
