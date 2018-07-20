let app = getApp();

// 页面数据
let data = {
  mapHeight: 0,
  userLocatio: null,
  lot: null,
  lat: null,
  markers: []
};

// 页面方法
let methods = {
  getLocation() {
    // 获取地理位置
    wx.getLocation({
      type: "gcj02",
      success: res => {
        let { latitude, longitude, speed, accuracy } = res;
        // 店铺标记数据
        let markers = [
          {
            id: 1,
            latitude: latitude,
            longitude: longitude,
            width: 50,
            height: 50,
            title: "北京"
          },
          {
            id: 2,
            latitude: 23.099994,
            longitude: 113.34452,
            width: 50,
            height: 50,
            title: "深圳"
          }
        ];
        this.setData({
          userLocatio: res,
          lot: longitude,
          lat: latitude,
          markers
        });
      }
    });
  },
  // 全屏显示
  fullScreen () {
    try{
      let sysInfo = wx.getSystemInfoSync();
      let curHeight = this.data.mapHeight;
      let mapHeight = curHeight > 0 ? 0 : sysInfo.windowHeight;
      this.setData({
        mapHeight
      });
    }catch(e) {
      console.error('获取设备信息是出错');
    }
  },
  // 定位当前
  position () {
    console.log(11);
    this.mapCtx.moveToLocation();
  }
};

Page({
  data,
  ...methods,
  onLoad() {
    this.mapCtx = wx.createMapContext("map");
    this.getLocation();
  }
});
