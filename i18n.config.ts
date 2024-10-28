import LangEN from './languages/en/common.js';
import LangID from './languages/id/common.js';

export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'id',
    messages: {
        id: {
            ...LangID
        },
        en: {
            ...LangEN
        }
    }
}));