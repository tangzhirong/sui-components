# sui-components

> sui 组件库

## 使用

`yarn add sui-components`

## 在线文档

- [在线文档](http://123.56.61.102/#/guides/about)

## 示例

```javascript
// lib
import {
  Wrapper,
  Logo,
  Menu,
  RouterPage,
  Avatar
} from 'sui-components';

const { PageWrapper, LeftWrapper, RightWrapper, Header, Content } = Wrapper;
```

## 清单

| 组件               | 描述          | 类型                                                                                 |
| ------------------ | ------------- | ------------------------------------------------------------------------------------ |
| `Wrapper`          | 容器 组件     | `object => {RightWrapper, PageWrapper, LeftWrapper, Content, NarrowContent, Header}` |
| `SodaForm`         | 表单 组件     | `class`                                                                              |
| `RouterPage`       | 页面路由 组件 | `class`                                                                              |
| `WaitCheck`        | 待审 组件     | `class`                                                                              |
| `SuiTable`         | 表格 组件     | `class`                                                                              |
| `Menu`             | 菜单 组件     | `class`                                                                              |
| `Logo`             | logo 组件     | `class`                                                                              |
| `CollapsedTrigger` | 收缩组件 组件 | `class`                                                                              |
| `Caption`          | 标题 组件     | `class`                                                                              |
| `Avatar`           | 头像 组件     | `class`                                                                              |
| `HttpError`        | 错误 组件     | `class`                                                                              |
| `VideoPlayer`      | 播放器 组件   | `class`                                                                              |

## 发布

1. `git clone https://github.com/tangzhirong/sui-core.git .sui-core`
2. `node build.js`
3. `npm publish`

## 版本变更

1. v0.1.0: 滚动条支持，包括全局滚动和局部滚动两种方式
2. v0.1.5: 修复菜单折叠状态下submenu过长超出可视区问题
3. v0.1.6 修复menu折叠情况下高度计算错误导致滚动条误出现、子菜单路径覆盖问题
4. v0.1.7 兼容自定义布局容器、增加menu icon选中时的颜色
5. v0.1.61 content布局组件支持外部样式
