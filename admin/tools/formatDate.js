/**
 * Created by Administrator on 2017/11/6.
 */
function formatDate(params) {
    function fillIn(value){
        if(value < 10){
            return "0" + value;
        }else{
            return value;
        }
    }
    var time;
    var d = '';
    if(params && params.date){
        d = new Date(params.date);
    }else {
        d = new Date();
    }
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var ndate = d.getDate();
    var hour = d.getHours();
    var minute = d.getMinutes();
    var second = d.getSeconds();
    if(params && params.type == 'yyyy-mm-dd'){
        time = year + '-' + fillIn(month) + '-' + fillIn(ndate);
    }else if(params && params.type == 'yyyy-mm'){
        time = year + '-' + fillIn(month);
    }else if(params && params.type == 'mm-dd'){
        time = fillIn(month) + '-' + fillIn(ndate);
    }else if(params && params.type == 'hh:mm:ss'){
        time = fillIn(hour) + ':' + fillIn(minute) + ':' + fillIn(second);
    }else if(params && params.type == 'time'){
        time = d.getTime();
    }else{
        time = year + '-' + fillIn(month) + '-' + fillIn(ndate) + ' ' + fillIn(hour) + ':' + fillIn(minute) + ':' + fillIn(second);
    }
    return time;
}
module.exports = formatDate;