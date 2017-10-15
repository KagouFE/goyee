import util from '../util'

export default function uppercase(val, key) {
    if (Array.isArray(val)) {
        if (key) {
            const arr = val.map(item => {
                return item[key]
            })
            return util.sum(arr)
        }
        return util.sum(val)
    } else {
        console.error('sum 只支持 array 类型')
    }
}