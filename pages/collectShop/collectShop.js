// pages/collectShop/collectShop.js
const userId = wx.getStorageSync('userId');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addBox: [{
      content: "",
      create: "",
      shopId:""
    }],
    content: [],
    create: [],
    shopId:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('ok');
    var that = this;
    wx.request({
      url: 'https://www.hongyaoz.club/school/shop/getcollectshop',
      method: 'get',
      data: {
        "userId": userId
      },
      header: {
        'content-type': 'application/json'
      },
      success(res) {
        console.log(res.data);
        var result = res.data.result;
        var contentArr = new Array();
        var createArr = new Array();
        var shopIdArr = new Array();
        for (var i = 0; i < result.length; i++) {
          contentArr[i] = result[i].intro;
          createArr[i] = result[i].shopname;
          shopIdArr[i] = result[i].shopId
        }
        that.setData({
          addBox: result,
          content: contentArr,
          create: createArr,
          shopId:shopIdArr
        })
      },
      fail: function () {
        console.log('err')
      }
    })
  },

  jump: function (e) {
    var index = e.currentTarget.dataset.index;
    console.log(index);
    var shopId = this.data.shopId[index];
    console.log(shopId);
    wx.navigateTo({
      url: '/pages/marketDetail/index?marketId=' + shopId,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})