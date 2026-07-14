# Imperial Ambitions Wiki 网站开发需求

## 项目标识

- 游戏名称：Imperial Ambitions
- 网站名称：Imperial Ambitions Wiki
- 平台：Steam
- 规范域名：https://www.imperialambitions.wiki
- 本地项目目录名：`imperialambitionswiki`
- GitHub 仓库名：`imperialambitionswiki`
- Cloudflare Worker 项目名：`imperialambitionswiki`

## 已核验的官方身份

- Steam 官方商店：https://store.steampowered.com/app/2219390/Imperial_Ambitions/
- Steam App ID：`2219390`
- 开发者：aoiti
- 发行商：aoiti、Electronic Sheep Games
- 官方网站：https://www.aoiti.com/Imperial-Ambitions（由 Steam 商店直接关联；官网本次预检访问超时，正式调研时需再次检查）
- Steam 商店关联 YouTube：https://www.youtube.com/@aoiti
- Steam 商店关联 Discord：https://discord.gg/NU963utpEb
- Steam 上线日期：2026-07-13
- 官方定位：以地理大发现与文艺复兴时期的欧洲强权为背景的 4X 策略游戏，核心系统包括殖民、劳动力与社会阶层、生产链与贸易、特工、外交以及战术战斗。

不得把模板游戏 Machinefall 的商店链接、开发者、地图、时代推进、单位、资源、发布日期、平台信息或其他事实带入 Imperial Ambitions。

## 核心种子关键词

- `imperial ambitions`
- `imperial ambitions wiki`
- `imperial ambitions guide`
- `imperial ambitions steam`
- `imperial ambitions beginner guide`
- `imperial ambitions walkthrough`

以上仅为建站预检种子词。完整开发前必须重新进行当前长尾需求、People Also Ask、相关搜索、竞品与 YouTube 资料调研，再决定实际页面、实体命名和路由；不预设 `codes`、`tier list` 或数据库页面。

## 目标文件与命名空间

- 计划 PRD：`docs/imperial-ambitions-wiki-prd-and-implementation-plan.md`
- 目标数据层：`src/data/imperial-ambitions/`
- 目标 App Router 路由组：`src/app/[locale]/(imperial-ambitions)/`
- 目标组件命名空间：`src/components/imperial-ambitions/`
- 目标静态资源命名空间：`public/imperial-ambitions/`

## 确认后的开发范围

1. 基于当前搜索需求、Steam 官方资料、Steam 关联官方渠道、可靠竞品和 YouTube 攻略，编写关键词矩阵、竞品基准和 PRD。
2. 将复制的模板彻底迁移为只服务 Imperial Ambitions 的英文攻略站，按资料厚度决定首发页面数量，不为凑数制造空页面。
3. 首页、分类枢纽、攻略详情、侧边 Wiki 导航、移动端 Wiki 菜单、相关链接、法律页面、sitemap、robots 和 manifest 均使用 Imperial Ambitions 专属内容与元数据。
4. 完成模板迁移残留检查、lint、TypeScript、构建和浏览器预览 QA。
5. 验证完成后创建并推送 GitHub 仓库 `imperialambitionswiki`，部署同名 Cloudflare Worker，绑定 `www.imperialambitions.wiki`，配置自动构建和 GA4；若认证或外部审批阻塞，则明确记录阻塞点。
6. 按 `wiki-site-builder` 流程将站点幂等注册到 Shipmanager，并验证两条核心链接。
