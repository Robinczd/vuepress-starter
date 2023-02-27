const nav = require('./config/nav')
const sidebar = require('./config/sidebar')
// const plugins = require('./config/plugins')
// const markdown = require('./config/markdown')
module.exports = {
    base:"/base/",
    title:"大数据知识全栈",
    description:"个人笔记，费时费力，转载请注明出处",
    head:[
        ['link',{ rel:'icon',href:'/dds.ico'} ],
        ['meta',{ name:'author',content:'瑶'} ],
        ['meta',{ name:'keywords',content:'大数据,大数据知识,Flink,spark,hive,hbase,redis,AI,数据湖'}]
    ],
    // plugins,
    themeConfig: {
        docsRepo: "stibel/cpp-notes",
        editLinks: true,
        sidebarDepth: 0,
        locales: {
            "/": {
                label: "简体中文",
                selectText: "Languages",
                editLinkText: "在 GitHub 上编辑此页",
                lastUpdated: "上次更新",
                nav,
                sidebar,
            }
        }
    }
}