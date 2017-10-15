// 全部变为大写
export default function uppercase(val) {
    if (typeof val !== 'string') {
        return val.toUpperCase()
    }
    return val
}