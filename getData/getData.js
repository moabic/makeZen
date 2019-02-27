class Request {
    baseUrl = 'https://easy-mock.com/mock/5bd149fab36f2c5eac3a9274/QM_magazine'
    getData({url,methed="post",data={}}) {
        return new Promise((resover,rejcekt) => {
            wx.request({
              url: this.baseUrl + url,
              methed: methed,
              data: data,
              success(res) {
                  if(res.data.code === 0) {
                      resover(res)
                  } else {
                      this.showError()
                  }
              },
              fail() {
                  rejcekt()
                  this.showError()
              }
            })
        })
    }
    showError(){
        wx.showToast({
            title: '该内容请求错误',
            icon: 'none'
        })
    }
}
export {Request}