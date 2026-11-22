# 王睿龙 · 在线简历

单页 A4 简历，纯静态：`index.html` + `css/style.css`，无构建步骤、无外部依赖。

- 网页版：https://kobewangrui.github.io
- PDF：`王睿龙-Web前端工程师.pdf`

## 设计说明

- 版心 794 × 1123 px，等于 A4（210 × 297 mm @96dpi），**屏幕所见即打印所得**，始终一页。
- 浅色底 + 一处主色（默认 Apple 蓝 `#0071e3`），无表格线、无头像，靠字号、留白与分隔线建立层级。
- 打印时纸张自带版心，`@page` 设为零边距，不需要在打印对话框里手动去边距。

## 修改方法

1. **改内容**：编辑 `index.html`（姓名、联系方式、技能、经历、教育）。
2. **换主色**：改 `css/style.css` 顶部 `:root` 里的 `--accent` / `--accent-2`，全站跟着变。
3. **重新导出 PDF**：
   - 浏览器打开 `index.html` → 打印 → 目标打印机选「另存为 PDF」→ 纸张 A4 → 边距「无」→ 勾选「背景图形」→ 保存；
   - 或用命令行：
     ```
     chrome --headless=new --no-pdf-header-footer --print-to-pdf=王睿龙-Web前端工程师.pdf index.html
     ```

## 排版约束

内容已压到正好一页。若要加内容，请注意 `min-height: 1123px` 的纸张：超出会翻到第二页。
需要腾空间时优先改 `--muted` 段落行高（`.pts li` 的 `line-height`）与 `.sec` 的上下间距。

## 目录

- `index.html` 简历正文
- `css/style.css` 样式（含屏幕 / 窄屏 / 打印三套规则）
- `css/`、`js/`、`fonts/`、`sass/`、`scss/`、`src/` 为旧版模板遗留资源，当前页面不再引用
