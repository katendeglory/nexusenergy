import { writable } from 'svelte/store'

function getCurrentLang() {
  let currentLang = 'en';
  let lang = localStorage.getItem('lang');
  if (!lang || (lang !== 'en' && lang !== 'fr')) {
    const browserLang = navigator.language || navigator.userLanguage;
    lang = browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
    localStorage.setItem('lang', lang);
  }
  return lang;
}

// Translation function
function t(textEn, textFr) {
  let lang = localStorage.getItem('lang');

  if (!lang || (lang !== 'en' && lang !== 'fr')) {
    const browserLang = navigator.language || navigator.userLanguage;
    lang = browserLang.toLowerCase().startsWith('fr') ? 'fr' : 'en';
    localStorage.setItem('lang', lang);
  }

  return lang === 'fr' ? textFr : textEn;
}

const lang = writable({
  currentLang: getCurrentLang(),
  t
});

export default lang;