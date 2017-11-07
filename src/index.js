import util from './util'
import filters from './filters'

function each(obj, func) {
    const keys = Object.keys(obj)
    keys.forEach(key => {
        func(key)
    })
}

const goyee = {
    install: function (Vue) {
        each(filters, key => {
            Vue.filter(key, filters[key])
        })

        Object.defineProperties(Vue.prototype, {
			$goyee: {
				get: function() {
					return util
				},
			},
		})
    }
}
export {util}
export default goyee

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(goyee);
}