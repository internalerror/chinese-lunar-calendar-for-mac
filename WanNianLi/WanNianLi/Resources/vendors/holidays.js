﻿// Version: 20201126
// 国务院公布的假期调整方案
// 一般不需要手工修改此文件，这个文件会在日历自动更新时被新版的内容覆盖
// 假日为"+"，工作日为"-"
var HOLIDAYADJUSTMENT = {
    // http://www.gov.cn/zhengce/content/2020-11/25/content_5564127.htm
    // 2021年假期调整计划
    // 一、元旦：2021年1月1日至3日放假，共3天。
    "20210101": "+",
    // 二、春节：2月11日至17日放假调休，共7天。2月7日（星期日）、2月20日（星期六）上班。
    "20210207": "-",
    "20210211": "+",
    "20210212": "+",
    "20210215": "+",
    "20210216": "+",
    "20210217": "+",
    "20210220": "-",
    // 三、清明节：4月3日至5日放假调休，共3天。
    "20210405": "+",
    "20210425": "-",
    // 四、劳动节：5月1日至5日放假调休，共5天。4月25日（星期日）、5月8日（星期六）上班。
    "20210503": "+",
    "20210504": "+",
    "20210505": "+",
    "20210508": "-",
    // 五、端午节：6月12日至14日放假，共3天。
    "20210614": "+",
    // 六、中秋节：9月19日至21日放假调休，共3天。9月18日（星期六）上班。
    "20210918": "-",
    "20210920": "+",
    "20210921": "+",
    "20210926": "-",
    // 七、国庆节：10月1日至7日放假调休，共7天。9月26日（星期日）、10月9日（星期六）上班。
    "20211001": "+",
    "20211004": "+",
    "20211005": "+",
    "20211006": "+",
    "20211007": "+",
    "20211009": "-",
    // http://www.gov.cn/zhengce/content/2020-01/27/content_5472352.htm
    // 延长2020年春节假期至2月2日（农历正月初九，星期日），2月3日（星期一）起正常上班
    "20200131": "+",
    // 2020年假期调整计划
    // http://www.gov.cn/zhengce/content/2019-11/21/content_5454164.htm
    // 一、元旦：2020年1月1日放假，共1天。
    "20200101": "+",
    // 二、春节：1月24日至30日放假调休，共7天。1月19日（星期日）、2月1日（星期六）上班。
    "20200119": "-",
    "20200124": "+",
    "20200127": "+",
    "20200128": "+",
    "20200129": "+",
    "20200130": "+",
//    "20200201": "-",
    // 三、清明节：4月4日至6日放假调休，共3天。
    "20200406": "+",
    // 四、劳动节：5月1日至5日放假调休，共5天。4月26日（星期日）、5月9日（星期六）上班。
    "20200426": "-",
    "20200501": "+",
    "20200504": "+",
    "20200505": "+",
    "20200509": "-",
    // 五、端午节：6月25日至27日放假调休，共3天。6月28日（星期日）上班。
    "20200625": "+",
    "20200626": "+",
    "20200628": "-",
    // 六、国庆节、中秋节：10月1日至8日放假调休，共8天。9月27日（星期日）、10月10日（星期六）上班。
    "20200927": "-",
    "20201001": "+",
    "20201002": "+",
    "20201005": "+",
    "20201006": "+",
    "20201007": "+",
    "20201008": "+",
    "20201010": "-",
    // 2019年假期调整计划
    // http://www.gov.cn/zhengce/content/2018-12/06/content_5346276.htm
    // http://www.gov.cn/zhengce/content/2019-03/22/content_5375877.htm
    // 一、元旦：2018年12月30日至2019年1月1日放假调休，共3天。2018年12月29日（星期六）上班。
    "20181229": "-",
    "20181230": "+",
    "20181231": "+",
    "20190101": "+",
    // 二、春节：2月4日至10日放假调休，共7天。2月2日（星期六）、2月3日（星期日）上班。
    "20190202": "-",
    "20190203": "-",
    "20190204": "+",
    "20190205": "+",
    "20190206": "+",
    "20190207": "+",
    "20190208": "+",
    "20190209": "+",
    "20190210": "+",
    // 三、清明节：4月5日放假，与周末连休。
    "20190405": "+",
    // 四、劳动节：5月1日至4日放假调休，共4天。4月28日（星期日）、5月5日（星期日）上班。
    "20190428": "-",
    "20190501": "+",
    "20190502": "+",
    "20190503": "+",
    "20190505": "-",
    // 五、端午节：6月7日放假，与周末连休。
    "20190607": "+",
    // 六、中秋节：9月13日放假，与周末连休。
    "20190913": "+",
    // 七、国庆节：10月1日至7日放假调休，共7天。9月29日（星期日）、10月12日（星期六）上班。
    "20190929": "-",
    "20191001": "+",
    "20191002": "+",
    "20191003": "+",
    "20191004": "+",
    "20191005": "+",
    "20191006": "+",
    "20191007": "+",
    "20191012": "-",
    // 2018年假期调整计划
    // http://www.gov.cn/zhengce/content/2017-11/30/content_5243579.htm
    // 一、元旦：1月1日放假，与周末连休。
    "20180101": "+",
    // 二、春节：2月15日至21日放假调休，共7天。2月11日（星期日）、2月24日（星期六）上班。
    "20180211": "-",
    "20180215": "+",
    "20180216": "+",
    "20180217": "+",
    "20180218": "+",
    "20180219": "+",
    "20180220": "+",
    "20180221": "+",
    "20180224": "-",
    // 三、清明节：4月5日至7日放假调休，共3天。4月8日（星期日）上班。
    "20180405": "+",
    "20180406": "+",
    "20180407": "+",
    "20180408": "-",
    // 四、劳动节：4月29日至5月1日放假调休，共3天。4月28日（星期六）上班。
    "20180428": "-",
    "20180429": "+",
    "20180430": "+",
    "20180501": "+",
    // 五、端午节：6月18日放假，与周末连休。
    "20180618": "+",
    // 六、中秋节：9月24日放假，与周末连休。
    "20180924": "+",
    // 七、国庆节：10月1日至7日放假调休，共7天。9月29日（星期六）、9月30日（星期日）上班。
    "20180929": "-",
    "20180930": "-",
    "20181001": "+",
    "20181002": "+",
    "20181003": "+",
    "20181004": "+",
    "20181005": "+",
    "20181006": "+",
    "20181007": "+",

    // 2017年假期调整计划
    // http://www.gov.cn/xinwen/2016-12/01/content_5141618.htm
    // 一、元旦：1月1日放假，1月2日（星期一）补休。
    "20170102": "+",
    // 二、春节：1月27日至2月2日放假调休，共7天。1月22日（星期日）、2月4日（星期六）上班。
    "20170122": "-",
    "20170127": "+",
    "20170130": "+",
    "20170131": "+",
    "20170201": "+",
    "20170202": "+",
    "20170204": "-",
    // 三、清明节：4月2日至4日放假调休，共3天。4月1日（星期六）上班。
    "20170401": "-",
    "20170403": "+",
    "20170404": "+",
    // 四、劳动节：5月1日放假，与周末连休。
    "20170501": "+",
    // 五、端午节：5月28日至30日放假调休，共3天。5月27日（星期六）上班。
    "20170527": "-",
    "20170529": "+",
    "20170530": "+",
    // 六、中秋节、国庆节：10月1日至8日放假调休，共8天。9月30日（星期六）上班。
    "20170930": "-",
    "20171002": "+",
    "20171003": "+",
    "20171004": "+",
    "20171005": "+",
    "20171006": "+",

    // 2016年假期调整计划
    // http://www.gov.cn/zhengce/content/2015-12/10/content_10394.htm
    // 一、元旦：1月1日放假，与周末连休。
    "20160101": "+",
    // 二、春节：2月7日至13日放假调休，共7天。2月6日（星期六）、2月14日（星期日）上班。
    "20160206": "-",
    "20160207": "+",
    "20160208": "+",
    "20160209": "+",
    "20160210": "+",
    "20160211": "+",
    "20160212": "+",
    "20160213": "+",
    "20160214": "-",
　　// 三、清明节：4月4日放假，与周末连休。
    "20160404": "+",
　　// 四、劳动节：5月1日放假，5月2日（星期一）补休。
    "20160502": "+",
　　// 五、端午节：6月9日至11日放假调休，共3天。6月12日（星期日）上班。
    "20160609": "+",
    "20160610": "+",
    "20160611": "+",
    "20160612": "-",
　　// 六、中秋节：9月15日至17日放假调休，共3天。9月18日（星期日）上班。
    "20160915": "+",
    "20160916": "+",
    "20160917": "+",
    "20160918": "-",
　　// 七、国庆节：10月1日至7日放假调休，共7天。10月8日（星期六）、10月9日（星期日）上班。
    "20161001": "+",
    "20161002": "+",
    "20161003": "+",
    "20161004": "+",
    "20161005": "+",
    "20161006": "+",
    "20161007": "+",
    "20161008": "-",
    "20161009": "-",

    // 增加2015年的抗战胜利日假期
    // http://www.gov.cn/zhengce/content/2015-05/13/content_9742.htm
    "20150903": "+",
    "20150904": "+",
    "20150905": "+",
    "20150906": "-",
    
    // 2015年的假期调整方案
    // http://www.gov.cn/zhengce/content/2014-12/16/content_9302.htm
    // 元旦：1月1日至3日放假调休，共3天。1月4日（星期日）上班
    "20150101": "+",
    "20150102": "+",
    "20150103": "+",
    "20150104": "-",
    // 春节：2月18日至24日放假调休，共7天。2月15日（星期日）、2月28日（星期六）上班
    "20150215": "-",
    "20150218": "+",
    "20150219": "+",
    "20150220": "+",
    "20150221": "+",
    "20150222": "+",
    "20150223": "+",
    "20150224": "+",
    "20150228": "-",
    // 清明节：4月5日放假，4月6日（星期一）补休
    "20150405": "+",
    "20150406": "+",
    // 劳动节：5月1日放假，与周末连休
    "20150501": "+",
    "20150502": "+",
    "20150503": "+",
    // 端午节：6月20日放假，6月22日（星期一）补休
    "20150620": "+",
    "20150621": "+",
    "20150622": "+",
    // 中秋节：9月27日放假
    "20150927": "+",
    // 国庆节：10月1日至7日放假调休，共7天。10月10日（星期六）上班
    "20151001": "+",
    "20151002": "+",
    "20151003": "+",
    "20151004": "+",
    "20151005": "+",
    "20151006": "+",
    "20151007": "+",
    "20151010": "-",
    // 2014年的假期调整方案
    // http://www.gov.cn/zwgk/2013-12/11/content_2546204.htm
    // 一、元旦：1月1日放假1天。
    "20140101": "+",
    // 二、春节：1月31日至2月6日放假调休，共7天。1月26日（星期日）、2月8日（星期六）上班。
    "20140126": "-",
    "20140131": "+",
    "20140201": "+",
    "20140202": "+",
    "20140203": "+",
    "20140204": "+",
    "20140205": "+",
    "20140206": "+",
    "20140208": "-",
    // 三、清明节：4月5日放假，4月7日（星期一）补休。
    "20140405": "+",
    "20140406": "+",
    "20140407": "+",
    // 四、劳动节：5月1日至3日放假调休，共3天。5月4日（星期日）上班。
    "20140501": "+",
    "20140502": "+",
    "20140503": "+",
    "20140504": "-",
    // 五、端午节：6月2日放假，与周末连休。
    "20140602": "+",
    // 六、中秋节：9月8日放假，与周末连休。
    "20140908": "+",
    // 七、国庆节：10月1日至7日放假调休，共7天。9月28日（星期日）、10月11日（星期六）上班。
    "20140928": "-",
    "20141001": "+",
    "20141002": "+",
    "20141003": "+",
    "20141004": "+",
    "20141005": "+",
    "20141006": "+",
    "20141007": "+",
    "20141011": "-",
    // 2013年的假期调整方案
    // http://www.gov.cn/zwgk/2012-12/10/content_2286598.htm
    // 一、元旦：1月1日至3日放假调休，共3天。1月5日（星期六）、1月6日（星期日）上班。
    "20130101": "+",
    "20130102": "+",
    "20130103": "+",
    "20130105": "-",
    "20130106": "-",
    // 二、春节：2月9日至15日放假调休，共7天。2月16日（星期六）、2月17日（星期日）上班。
    "20130209": "+",
    "20130210": "+",
    "20130211": "+",
    "20130212": "+",
    "20130213": "+",
    "20130214": "+",
    "20130215": "+",
    "20130216": "-",
    "20130217": "-",
    // 三、清明节：4月4日至6日放假调休，共3天。4月7日（星期日）上班。
    "20130404": "+",
    "20130405": "+",
    "20130406": "+",
    "20130407": "-",
    // 四、劳动节：4月29日至5月1日放假调休，共3天。4月27日（星期六）、4月28日（星期日）上班。
    "20130427": "-",
    "20130428": "-",
    "20130429": "+",
    "20130430": "+",
    "20130501": "+",
    // 五、端午节：6月10日至12日放假调休，共3天。6月8日（星期六）、6月9日（星期日）上班。
    "20130608": "-",
    "20130609": "-",
    "20130610": "+",
    "20130611": "+",
    "20130612": "+",
    // 六、中秋节：9月19日至21日放假调休，共3天。9月22日（星期日）上班。
    "20130919": "+",
    "20130920": "+",
    "20130921": "+",
    "20130922": "-",
    // 七、国庆节：10月1日至7日放假调休，共7天。9月29日（星期日）、10月12日（星期六）上班。
    "20130929": "-",
    "20131001": "+",
    "20131002": "+",
    "20131003": "+",
    "20131004": "+",
    "20131005": "+",
    "20131006": "+",
    "20131007": "+",
    "20131012": "-",
};
