import path from 'path'
import { writeFileSync } from 'fs'
import { Feed } from 'feed'
import { createContentLoader, type SiteConfig } from 'vitepress'

const ogUrl = !!process.env.ogUrl ? process.env.ogUrl : `https://vodtv.cn` || `https://viptv.work`
const blogUrl = `${ogUrl}/blog`

export const buildEnd = async (config: SiteConfig) => {
  const feed = new Feed({
    title: 'VIPTV资源库',
    description: '开源百宝箱 - 简单, 强大, 快速, 无广告',
    id: blogUrl,
    link: blogUrl,
    language: 'cn',
    image: `${ogUrl}/og-image.png`,
    favicon: `${ogUrl}/logo.svg`,
    copyright: 'Copyright © 2019-present HE FUNG Contributors',
  })

  const posts = await createContentLoader('blog/*.md', {
    excerpt: true,
    render: true,
  }).load()

  posts.sort(
    (a, b) =>
      +new Date(b.frontmatter.date as string) -
      +new Date(a.frontmatter.date as string),
  )

  for (const { url, excerpt, frontmatter, html } of posts) {
    feed.addItem({
      title: frontmatter.title,
      id: `${ogUrl}${url}`,
      link: `${ogUrl}${url}`,
      description: excerpt,
      content: html,
      author: [
        {
          name: frontmatter.author.name,
        },
      ],
      date: frontmatter.date,
    })
  }
  writeFileSync(path.join(config.outDir, 'blog.rss'), feed.rss2())
}