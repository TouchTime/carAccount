//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array1: [2, 3, 4, 5, 6, 7, 8, 9],
    array2: [1, 2, 3, 4, 5],
    array3: ['基础利率', '9.5折', '9折', '8.5折', '8折', '7.5折', '7折', '6.5折', '6折', '5.5折', '5折'],
    array4: ['1.0及一下','1.1-1.6', '1.7-2.0', '2.1-2.5', '2.6-3.0', '3.1-4.0', '4.0及以上' ],
    array5: [6.15, 5.843, 5.535, 5.228, 4.920, 4.612, 4.305, 3.998, 3.690, 3.382, 3.075],
    index1: 0,
    index2: 0,
    index3: 0,
    index4: 1,
    black: true,
    monthMoney: 0,
    carMoney: 0,
    interest: 0,
    repayment: 0,
    money: ''
  },
  //事件处理函数
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })
    let array1 = [2, 3, 4, 5, 6, 7, 8, 9];
    let array2 = [1, 2, 3, 4, 5];
    let array5 = [6.15, 5.843, 5.535, 5.228, 4.920, 4.612, 4.305, 3.998, 3.690, 3.382, 3.075];
    let car_price = this.data.money;
    let shoufu_scale = array1[this.data.index1];
    let year = array2[this.data.index2];
    let apr = array5[this.data.index3];
    let pailiang = Number(this.data.index4) + 1;
    let that = this;
    if (car_price){
      wx.request({
        url: 'https://www.youjin360.com/?m=Mobile&s=jisuanqiChedai',
        data: {
          car_price: car_price,
          shoufu_scale: shoufu_scale,
          year: year,
          apr: apr,
          pailiang: pailiang

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          let datas = res.data.data;
          that.setData({
            monthMoney: datas.meiyue,
            carMoney: datas.shoufu_sum,
            interest: datas.lixi,
            repayment: datas.huankuan_sum
          })
        }
      })
    }
    
  },
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })
    let array1 = [2, 3, 4, 5, 6, 7, 8, 9];
    let array2 = [1, 2, 3, 4, 5];
    let array5 = [6.15, 5.843, 5.535, 5.228, 4.920, 4.612, 4.305, 3.998, 3.690, 3.382, 3.075];
    let car_price = this.data.money;
    let shoufu_scale = array1[this.data.index1];
    let year = array2[this.data.index2];
    let apr = array5[this.data.index3];
    let pailiang = Number(this.data.index4) + 1;
    let that = this;
    if (car_price) {
      wx.request({
        url: 'https://www.youjin360.com/?m=Mobile&s=jisuanqiChedai',
        data: {
          car_price: car_price,
          shoufu_scale: shoufu_scale,
          year: year,
          apr: apr,
          pailiang: pailiang

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          let datas = res.data.data;
          that.setData({
            monthMoney: datas.meiyue,
            carMoney: datas.shoufu_sum,
            interest: datas.lixi,
            repayment: datas.huankuan_sum
          })
        }
      })
    }
  },
  bindPickerChange3: function (e) {
    this.setData({
      index3: e.detail.value
    })
    let array1 = [2, 3, 4, 5, 6, 7, 8, 9];
    let array2 = [1, 2, 3, 4, 5];
    let array5 = [6.15, 5.843, 5.535, 5.228, 4.920, 4.612, 4.305, 3.998, 3.690, 3.382, 3.075];
    let car_price = this.data.money;
    let shoufu_scale = array1[this.data.index1];
    let year = array2[this.data.index2];
    let apr = array5[this.data.index3];
    let pailiang = Number(this.data.index4) + 1;
    let that = this;
    if (car_price) {
      wx.request({
        url: 'https://www.youjin360.com/?m=Mobile&s=jisuanqiChedai',
        data: {
          car_price: car_price,
          shoufu_scale: shoufu_scale,
          year: year,
          apr: apr,
          pailiang: pailiang

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          let datas = res.data.data;
          that.setData({
            monthMoney: datas.meiyue,
            carMoney: datas.shoufu_sum,
            interest: datas.lixi,
            repayment: datas.huankuan_sum
          })
        }
      })
    }
  },
  bindPickerChange4: function (e) {
    this.setData({
      index4: e.detail.value
    })
    let array1 = [2, 3, 4, 5, 6, 7, 8, 9];
    let array2 = [1, 2, 3, 4, 5];
    let array5 = [6.15, 5.843, 5.535, 5.228, 4.920, 4.612, 4.305, 3.998, 3.690, 3.382, 3.075];
    let car_price = this.data.money;
    let shoufu_scale = array1[this.data.index1];
    let year = array2[this.data.index2];
    let apr = array5[this.data.index3];
    let pailiang = Number(this.data.index4) +1;
    let that = this;
    if (car_price) {
      wx.request({
        url: 'https://www.youjin360.com/?m=Mobile&s=jisuanqiChedai',
        data: {
          car_price: car_price,
          shoufu_scale: shoufu_scale,
          year: year,
          apr: apr,
          pailiang: pailiang

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          let datas = res.data.data;
          that.setData({
            monthMoney: datas.meiyue,
            carMoney: datas.shoufu_sum,
            interest: datas.lixi,
            repayment: datas.huankuan_sum
          })
        }
      })
    }
  },
  bindReplaceInput: function (e) {
    this.setData({
      black: false
    })
   
  },
  moneyChange: function (e) {
    this.setData({
      money: e.detail.value
    })
    let array1 = [2, 3, 4, 5, 6, 7, 8, 9];
    let array2 = [1, 2, 3, 4, 5];
    let array5 = [6.15, 5.843, 5.535, 5.228, 4.920, 4.612, 4.305, 3.998, 3.690, 3.382, 3.075];
    let car_price = this.data.money;
    let shoufu_scale = array1[this.data.index1];
    let year = array2[this.data.index2];
    let apr = array5[this.data.index3];
    let pailiang = Number(this.data.index4) + 1;
    let that = this;
    if (car_price) {
      wx.request({
        url: 'https://www.youjin360.com/?m=Mobile&s=jisuanqiChedai',
        data: {
          car_price: car_price,
          shoufu_scale: shoufu_scale,
          year: year,
          apr: apr,
          pailiang: pailiang

        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          let datas = res.data.data;
          that.setData({
            monthMoney: datas.meiyue,
            carMoney: datas.shoufu_sum,
            interest: datas.lixi,
            repayment: datas.huankuan_sum
          })
        }
      })
    }
  },
  onShareAppMessage: function (res) {
    return {
      title: '车贷计算器',
      path: '/pages/index/index',
    }
  }
})
