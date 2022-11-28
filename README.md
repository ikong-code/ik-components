This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

[组件库搭建学习文档](https://juejin.cn/post/7168885699507126303)

pnpm install remark-gfm remark-footnotes remark-math rehype-katex rehype-slug rehype-autolink-headings rehype-prism-plus -w

remark-gfm 让 md 支持 GitHub Flavored Markdown （自动超链接链接文字、脚注、删除线、表格、任务列表）


remark-math rehype-katex 支持数学公式


rehype-slug rehype-autolink-headings 自动给标题加唯一 id


rehype-prism-plus 支持代码高亮

### 发布流程

运行pnpm changeset version。 这将提高先前使用 pnpm changeset （以及它们的任何依赖项）的版本，并更新变更日志文件。
运行 pnpm install。 这将更新锁文件并重新构建包。
提交更改。
运行 pnpm publish。 此命令将发布所有包含被更新版本且尚未出现在包注册源中的包。