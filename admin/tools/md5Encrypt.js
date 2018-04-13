var crypto = require('crypto'); //引用crypto模块，用于处理密码加密
function encrypt (text) { //加密
    return crypto.createHash('md5').update(text).digest('hex');
}
module.exports = encrypt;