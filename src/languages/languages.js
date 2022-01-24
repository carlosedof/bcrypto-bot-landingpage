import languages from './langs.json';

export const getWordFromLanguage = (key, lang) => {
    return languages[lang][key];
}
