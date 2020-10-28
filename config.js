// 配置
window.Config = {

  // 站点名
  SiteName: '爱上程序员',

  // 站点链接
  SiteUrl: 'https://status.23cxy.com',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785164209-189250b818f8cab885889b2d',  // 23cxy.com
    'm786234498-e64e417edf918e6d9bad49ed',  // oqu.me
    'm785164211-f64c9378b26f2a2d163392ae',  // qingmi.icu
    'm785568808-78ac3914a6ba64c521302105',  // status.23cxy.com
    'm785591349-ca420c934301ac6f2bf0107b',  // 23cxy.me
    'm785591351-ef3225fd824bd86054ca84f8',  // 23cxy.shop
    'm785568768-090e9a2e3e647b214e7aae2a',  // github.com
  ],

  // 是否显示监测站点的链接
  ShowLink: true,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: '返回主站',
      url: 'https://23cxy.com'
    },
  ]
};
