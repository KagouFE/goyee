import util from './util'
import filters from './filters'

function each(obj, func) {
    const keys = Object.keys(obj)
    keys.forEach(key => {
        func(key)
    })
}

const goyee = {
    install(Vue) {
        each(fiters, key => {
            Vue.filter(key, filters[key])
        })

        Vue.prototype.goyee = util
    }
}

console.log(util.moment().add(15, 'hour').format('l'))

export default goyee

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(goyee);
}