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
        'date-en': 'MMM DD, YYYY'
    }

    // 以后可以穿 object 进来， object.format 就是格式名称
    const formatType = typeof opt === 'string' ? opt : opt.format
    
    const format = formats[formatType] || formatType

    return moment(val).format(format)
}

const util = {
    moment,
    date
}

const mergedUtil = Object.assign(util, lodash)
// lodash 自带了 VERSION , 把它改成自己的
mergedUtil.VERSION = '0.1.0'

export default mergedUtil