// 配置
window.Config = {

  // 站点名
  SiteName: '爱上程序员',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两只 Api Key
  ApiKeys: [
    'm785164209-189250b818f8cab885889b2d',  // 23cxy.com
    'm785568777-26848f64bfe168b703262d06',  // kms.23cxy.com
    'm785568808-78ac3914a6ba64c521302105',  // status.23cxy.com
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
