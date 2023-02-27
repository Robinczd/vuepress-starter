module.exports = {
    base:"/base/",
    title:"大数据知识全栈",
    description:"个人笔记，费时费力，转载请注明出处",
    head:[
        ['link',{ rel:'icon',href:'/dds.ico'} ],
        ['meta',{ name:'author',content:'瑶'} ],
        ['meta',{ name:'keywords',content:'大数据,大数据知识,Flink,spark,hive,hbase,redis,AI,数据湖'}]
    ],
    themeConfig: {
        lastUpdated: 'Last Updated',
        nav: [
            { text: '导读', link: 'https://google.com' },
            { text: '导航', link: '/about' },
            {
                text: '语言',
                items: [
                    { text: 'Chinese', link: 'https://google.com' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            },
            {
                text: '数据结构',
                items: [
                    { text: 'Chinese', link: 'https://google.com' },
                    { text: 'Japanese', link: 'https://google.com' }
                ]
            },
            {
                text: '数据获取',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            },
            {
                text: '数据库',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            },
            {
                text: '执行引擎',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            },
            {
                text: '项目管理',
                items: [
                    { text: 'Chinese', link: '/language/chinese' },
                    { text: 'Japanese', link: '/language/japanese' }
                ]
            }
        ]
    }
}