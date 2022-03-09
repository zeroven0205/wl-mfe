### 2022-03-02 
1. package.json中增加依赖chalk，inquirer
2. subapp-blog/package.json中增加依赖regenerator-runtime
3. subapp-login/package.json中增加依赖regenerator-runtime,升级element-ui到^2.15.7
4. subapp-login/src/main.js注释删除【测试go.js】模块代码
5. subapp-login/src/plugins/element.js新增Tabs, TabPane等模块依赖
6. subapp-login/src/router/routes.js中新增调整路由
7. subapp-login/src/views/About.vue修改页面视觉交互
8. subapp-ui/package.json中增加依赖regenerator-runtime
9. 备份master/package-lock.json，_server,subapp-blog,subapp-login,subapp-ui模块使用pnpm管理依赖，使用yarn启停项目
10. 新增HISTORY.md文件
