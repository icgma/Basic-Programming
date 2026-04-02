<div align="center">
  <h1>基础编程课程网站</h1>
  <p>汕头大学长江新闻与传播学院《基础编程（AI 编程与 Python 基础）》课程官网源码</p>
  <p>
    <a href="https://basic-programming.aisbest.eu.cc/">
      <img src="https://img.shields.io/badge/Live-basic--programming.aisbest.eu.cc-2563eb?style=for-the-badge" alt="Live Site">
    </a>
    <img src="https://img.shields.io/badge/HTML-5-e34f26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML">
    <img src="https://img.shields.io/badge/CSS-3-1572b6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS">
    <img src="https://img.shields.io/badge/JavaScript-Vanilla-f7df1e?style=for-the-badge&logo=javascript&logoColor=111111" alt="JavaScript">
    <img src="https://img.shields.io/badge/Deploy-GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Pages">
  </p>
  <p>
    <a href="https://basic-programming.aisbest.eu.cc/"><strong>在线访问</strong></a>
    ·
    <a href="#快速开始"><strong>快速开始</strong></a>
    ·
    <a href="#维护要点"><strong>维护要点</strong></a>
    ·
    <a href="#部署说明"><strong>部署说明</strong></a>
  </p>
</div>

## 项目简介

这是一个面向零基础学生的静态课程网站，用于集中展示《基础编程》课程的教学信息、学习资源与期末项目要求。整个站点不依赖构建工具，直接使用 HTML、CSS 和原生 JavaScript 组织页面与交互。

这个仓库的目标不是做一个复杂系统，而是把课程说明做成一个清晰、稳定、可直接访问的单页入口。

## 页面预览

<p align="center">
  <img src="./assets/readme-preview.png" alt="基础编程课程网站首页预览" width="100%">
</p>

## 站点内容

| 模块 | 内容 |
| --- | --- |
| 课程特色 | AI 辅助编程理念、课程定位、学习路径 |
| 课程进度 | 16 周教学安排、教学目标、实验内容、作业要求 |
| 考核方式 | 平时成绩与期末项目评分结构 |
| 环境配置 | Python、Lingma IDE、常见安装说明 |
| AI 工具指南 | 使用原则、学术诚信、辅助学习方式 |
| 期末项目 | 选题方向、评分标准、提交清单、时间安排 |
| 学习资源 | 文档、课程链接、教材与 FAQ |

## 技术栈

| 类型 | 说明 |
| --- | --- |
| 页面结构 | `HTML` |
| 视觉样式 | `CSS` |
| 页面交互 | `Vanilla JavaScript` |
| 部署方式 | `GitHub Pages` + `CNAME` 自定义域名 |

## 快速开始

这个项目是纯静态站点，没有 `npm install`、没有打包步骤，也没有额外运行时依赖。

### 方式一：直接打开

直接用浏览器打开根目录下的 `index.html` 即可预览页面。

### 方式二：启动本地静态服务

```bash
python -m http.server 8000
```

然后访问：

```text
http://localhost:8000
```

## 仓库结构

```text
.
├── assets/
│   └── readme-preview.png
├── CNAME
├── index.html
├── index.css
├── main.js
└── README.md
```

## 核心文件

| 文件 | 作用 |
| --- | --- |
| `index.html` | 页面主体内容，包含课程介绍、周次安排、项目说明和 FAQ |
| `index.css` | 整体视觉系统、响应式布局、明暗主题与组件样式 |
| `main.js` | 主题切换、周卡折叠、FAQ 展开、滚动效果、当前教学周高亮 |
| `CNAME` | GitHub Pages 自定义域名配置 |

## 维护要点

如果新学期继续沿用这个站点，通常只需要更新下面几类内容：

| 维护任务 | 修改文件 |
| --- | --- |
| 调整课程文案、链接、作业要求 | `index.html` |
| 调整视觉样式或版式 | `index.css` |
| 修改交互行为或当前周逻辑 | `main.js` |
| 更新自定义域名 | `CNAME` |

当前教学周高亮由 `main.js` 中的 `SEMESTER_START` 控制：

```js
const CONFIG = {
  SEMESTER_START: '2026-02-23',
  TOTAL_WEEKS: 16
};
```

每次换学期时，优先检查这项配置是否已经更新到新的开课周一日期。

## 项目特点

- 单文件入口清晰，适合课程官网、教学展示页和资源导航页
- 内容聚焦教学使用场景，不需要后端即可部署
- 支持移动端浏览、明暗主题切换和基础无障碍交互
- 结构简单，便于课程迭代和长期维护

## 部署说明

这个仓库适合直接部署到 GitHub Pages。

1. 将代码推送到默认分支
2. 在 GitHub Pages 设置中选择对应分支和根目录
3. 保留 `CNAME` 文件以绑定自定义域名
4. 确认站点地址指向 `https://basic-programming.aisbest.eu.cc/`

## 适用场景

- 课程官网首页
- 课程资源导航页
- 教学大纲与项目说明发布页
- 轻量级 GitHub Pages 静态站点模板

## 版权说明

本项目内容用于课程教学与教学资源发布。若需复用，请根据具体教学场景自行调整课程名称、院系信息、链接、考核方式与项目要求。
