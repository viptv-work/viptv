import type { DefaultTheme } from "vitepress"

export const search: DefaultTheme.Config["search"] = {
  provider: "local",
  options: {
    locales: {
      root: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            },
          }
        }
      },
    }
  }
}
