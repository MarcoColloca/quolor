import { reactive } from 'vue'

export const store = reactive({
    test: 'test',
    notFound: false,
    maps: {
        quolor: {
            active: true
        },
    },

    /* Metodi */
    test()
    {
        console.log('test')
    }
})