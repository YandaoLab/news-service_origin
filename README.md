# 每日早报

[![news.ydlk.cc](https://socialify.git.ci/YandaoLab/news.ydlk.cc/image?font=Rokkitt&language=1&name=1&owner=1&pattern=Circuit%20Board&theme=Dark)](https://news.ydlk.cc)

#### 项目起因

- 经常在各种地方看到 `每日60s读懂世界`

- 感觉很不错，就想着能不能自己做一个

- 详细经过见博文：[归档 | 前后端都基于 vercel 的每日早报项目](https://icodeq.com/2022/5fe2010403bb/)

#### 官网

- 官网地址：[https://news.ydlk.cc](https://news.ydlk.cc/)
- 源码地址：https://github.com/YandaoLab/news.ydlk.cc

#### `Vercel` 一键部署（推荐）
简洁版：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fzkeq%2Fnews)

完整版（有查看原文功能，但部分不大完善）：

> 且与本项目定位不怎么相符, 但是似乎有相应的需求，见 [#03](https://github.com/zkeq/news/issues/3)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?s=https%3A%2F%2Fgithub.com%2Fzkeq%2Fnews%2Ftree%2Fdev)


#### `Replit` 部署（不推荐）

- 见分支 https://github.com/zkeq/news/tree/replit

#### 服务器部署（不推荐）

1. 安装 `Python 3` 
2. 安装 [依赖库](https://github.com/zkeq/news/blob/main/api/requirements.txt)
3. 将 `api/index.py`  中的 `from api.crawler` 改为 `from crawler`
4. 运行 ` python api/index.py`
5. 将 `index.js`中的 api 域名改为部署得到的域名即可

#### API 说明

GET：`/api`

##### 请求参数

| 参数名           | 位置  | 类型   | 必填 | 示例值 |说明  |
| :--------------- | :---- | :----- | :--: | :--------------------- | :--------------------- |
| `_vercel_no_cache` | `query` |        |  否  | `1` |说明：`vercel` 强制不缓存                            |
| `cache`          | `query` |        |  否  | 任意值  |说明：清除缓存用                              |
| `index`          | `query` | `number` |  否  | `0` | 说明：`0-99` 用来控制天数，`0` 为今天，`1` 为昨天，依次类推 |
| `origin`         | `query` | `string` |  否  | `zhihu` |说明："`zhihu`" 或 "`163`" 切换源                  |

详细信息见：[每日早报 (apifox.cn)](https://www.apifox.cn/apidoc/shared-4c5d28ed-633e-45e0-a6d5-3c0a8933f132/api-28569354)
