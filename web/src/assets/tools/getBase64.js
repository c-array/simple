export default (e,callback) => {
  let file  = e.target.files[0];
  let reader = new FileReader();
  if (file && file.type.match('image.*')) {
    reader.readAsDataURL(file);
  } else {
    alert("请上传图片格式文件！");
  }
  reader.onloadend = function (e) {
    callback(reader.result);
  }
}
