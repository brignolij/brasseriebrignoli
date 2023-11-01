import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        siteKey: '6Lfz_NooAAAAAFmYgEz-Hy4brvzAnEq5rTpHo3UL',
    });
});
