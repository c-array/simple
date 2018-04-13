module.exports = (data,msg) => {
    if (data) {
        return {
            status: 0,
            message: msg + '成功！',
            result: data
        }
    } else {
        return {
            status: 1,
            message: msg + '失败！',
            result: ''
        }
    }
}