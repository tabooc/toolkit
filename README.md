# toolkit
javascript toolkit

搜集的一些javascript常用工具方法

来源:各大类库,自创,网络

- `toolkit.version` 当前类库版本号
- `toolkit.noop` 空方法
- `toolkit.comma` 用逗号分割数字 `toolkit.comma(123456.02,3)`
- `toolkit.pad` 对目标元素按指定长度进行补0处理 `toolkit.pad(12,3)`
- `toolkit.randomInt` 生成[min, max]范围内的随机整数 `toolkit.randomInt(1,10)`
- `toolkit.stripTags` 清理字符串中的html标签 `toolkit.stripTags('<a href="#">163</a>')`
- `toolkit.toCamelCase` 对'-'分割的字符串进行驼峰化处理 `toolkit.toCamelCase('-string-number-')`
- `toolkit.trim` 去除左右空白符 `toolkit.trim('     string  ')`
- `toolkit.guid` 生成UUID `toolkit.guid()`
- `toolkit.URISearch` URI - query属性查询 `toolkit.URISearch('id')`
- `toolkit.betweenVersion` 判断版本号是否在两者之间 `toolkit.betweenVersion('1.0.0','0.9.0','3.1.5')`
- `toolkit.compareVersion` 版本号大小比较 `toolkit.compareVersion('1.0.0','0.9.0')`
- `toolkit.default` 默认值设置 `toolkit.default('','默认值')`
- `toolkit.randomStr` 随机字符串生成 `toolkit.randomStr(15),toolkit.randomStr(15,'$%^&*()_-+=',true)`
- `toolkit.randomColor` 生成HEX随机颜色 `toolkit.randomColor()`
- `toolkit.isCn` 检测字符串是否全是中文 `toolkit.isCn('中文')`
- `toolkit.cloakPhone` 遮挡手机号码中间数字 `toolkit.cloakPhone('13512345678')`
- `toolkit.objectSize` 获取对象长度 `toolkit.objectSize({a:1,b:2,name:'小明'})`
- `toolkit.typeof` 数据类型判断 `toolkit.typeof('要判断的数据')`
- `toolkit.extend` 对象拷贝;类`jQuery.extend`,但没有做朴素对象验证 `toolkit.extend({},{})`
- `toolkit.range` 生成范围为[start,end)的整数数组 `toolkit.range(1,10)`
- `toolkit.isArray` 判断目标对象是否是数组 `toolkit.isArray([1,2,3])`
- `toolkit.inArray` 判断元素是否在目标数组中 `toolkit.inArray([1,2,3],2)`
- `toolkit.empty` 清空数组 `toolkit.empty()`
- `toolkit.indexOf` 元素在目标数组中的索引 `toolkit.indexOf([1,2,3],3)`
- `toolkit.unique` 数组去重 `toolkit.unique([1,1,2,3,4,5,3,'1'])`
- `toolkit.merge` 数组合并 `toolkit.merge([1,2],[5,6])`
- `toolkit.dateFormat` 日期格式化 `toolkit.dateFormat(new Date(),'yyyy-MM-dd HH:mm:ss')`
- `toolkit.dateParse` 将目标字符串转换成日期对象 `toolkit.dateParse('2016-01-09 18:30:56')`
- `toolkit.getDate` 获取指定月份的天数 `toolkit.getDate(2016,2)`
- `toolkit.leapYear` 闰年判断 `toolkit.leapYear(2016)`
- `toolkit.ios` 是否是iOS系统 `toolkit.ios()`
- `toolkit.iphone` 是否是iPhone `toolkit.iphone()`
- `toolkit.ipod` 是否是iPod `toolkit.ipod()`
- `toolkit.ipad` 是否是iPad `toolkit.ipad()`
- `toolkit.android` 是否是Android `toolkit.android()`
- `toolkit.androidPhone` 是否是androidPhone `toolkit.androidPhone()`
- `toolkit.androidTablet` 是否是androidTablet `toolkit.androidTablet()`
- `toolkit.isWechat` 是否是微信环境 `toolkit.isWechat()`
- `toolkit.portrait` 是否竖屏 `toolkit.portrait()`
- `toolkit.landscape` 是否横屏 `toolkit.landscape()`
- `toolkit.runCode` 执行代码 `toolkit.runCode(id)`
- `toolkit.closeCurrentPage` 定时关闭当前页 `toolkit.closeCurrentPage(1000)`
- `toolkit.getCountDown` 天数倒计时 `toolkit.getCountDown(2020,1,1)`
- `toolkit.viewSource` 查看网页源码(需求:1 服务器环境;2 权限) `toolkit.viewSource('index.html')`
- `toolkit.imgComplete` 判断图片是否加载完成 `toolkit.imgComplete(document.getElementByTagName('img')[0],fn)`