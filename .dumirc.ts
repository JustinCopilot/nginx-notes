import { defineConfig } from 'dumi';

const repo = 'nginx-notes';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  publicPath: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  outputPath: 'docs-dist',
  theme: {
    '@c-primary': 'rgb(182, 206, 5)',
    'primary-color': 'rgb(182, 206, 5)',
  },
  styles: [
    `
      .dumi-default-previewer-demo {
        overflow: auto;
      }
      .dumi-default-sidebar {
        width: 240px !important;
      }
      .dumi-default-header-left {
        width: 220px !important;
      }
      .dumi-default-content {
        padding: 30px 30px 0 !important;
      }
      .dumi-default-hero-title {
        font-size: 50px !important;
      }
    `,
  ],
  themeConfig: {
    name: 'nginx-notes',
    socialLinks: {
      github: 'https://github.com',
    },
    footer: '',
    // sidebar: {
    //   '/nginx': [
    //     {
    //       title: 'nginx',
    //       children: addOrder([{ title: 'nginx', link: '/nginx/note' }]),
    //     },
    //   ],
    // },
  },
});

function addOrder(list: { title: string; link: string }[]) {
  return list.map((i, index) => ({
    ...i,
    order: index + 1,
  }));
}
