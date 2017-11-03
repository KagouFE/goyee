// import toUpper from 'lodash.toupper'
// import isEqual from 'lodash.isequal'
// import cloneDeep from 'lodash.clonedeep'
// import find from 'lodash.find'
// import sum from 'lodash.sum'
// import union from 'lodash.union'
// import uniq from 'lodash.uniq'
// import difference from 'lodash.difference'
// import findIndex from 'lodash.findindex'
import lodash from 'lodash'
import moment from 'moment'

const date = (val, opt = 'default') => {
    const formats = {
        default: 'YYYY-MM-DD',
        year: 'YYYY',
        month: 'YYYY-MM',
        dateTime: 'YYYY-MM-DD HH:mm',
        longDateTime: 'YYYY-MM-DD HH:mm:ss',
        time: 'HH:mm',
        'date-en': 'MMM DD, YYYY',
        timestamp: 'x'
    }

    // 以后可以传 object 进来， object.format 就是格式名称
    const formatType = typeof opt === 'string' ? opt : opt.format
    const format = formats[formatType] || formatType
    // 返回的是 string 类型
    const ret = moment(val).format(format)
    // 时间戳需要 number 类型
    if (formatType === 'timestamp') {
        return parseInt(ret)
    }
    return ret
}

// 数字格式化
const numeric = (value, decimals) => {
    var digitsRE = /(\d{3})(?=\d)/g
    value = parseFloat(value)
    if (!isFinite(value) || (!value && value !== 0)) return ''
    // currency = currency != null ? currency : '$'
    decimals = decimals != null ? decimals : 2
    var stringified = Math.abs(value).toFixed(decimals)
    console.log(stringified.slice(0, -1 - decimals))

    var _int = stringified.slice(0, -1 - decimals)
    var i = _int.length % 3
    var head = i > 0
        ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
        : ''
    var _float = decimals
        ? stringified.slice(-1 - decimals)
        : ''
    var sign = value < 0 ? '-' : ''
    return sign + head +
        _int.slice(i).replace(digitsRE, '$1,') +
        _float
}

const util = {
    moment,
    date,
    numeric
}

const mergedUtil = Object.assign(util, lodash)
// lodash 自带了 VERSION , 把它改成自己的
mergedUtil.VERSION = '0.1.0'

export default mergedUtil