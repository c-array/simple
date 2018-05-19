export default (startDate, endDate) => { //sDate1和sDate2是2002-12-18格式
  startDate = startDate.replace(/\-/g, "/");
  endDate = endDate.replace(/\-/g, "/");
  let d1 = new Date(startDate).getTime();
  let d2 = new Date(endDate).getTime();
  let d3 = d2 - d1;
  if(d3 < 0){
    return 0;
  }

  let days = Math.floor(d3/(24*3600*1000)); //计算天数
  let hour = Math.floor((d2 - d1) / 1000 / 60 / 60); //计算小时数
  if(isNaN(hour) || isNaN(days)){
    return 0;
  }
  return days;
}
