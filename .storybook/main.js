1/** @type { import('@storybook/react-vite').StorybookConfig } */
2const config = {
3  stories: [
4    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
5    '../src/stories/**/*.mdx'
6  ],
7  addons: [
8    '@storybook/addon-links',
9    '@storybook/addon-essentials',
10    '@storybook/addon-interactions',
11  ],
12  framework: {
13    name: '@storybook/react-vite',
14    options: {},
15  },
16  docs: {
17    autodocs: 'tag',
18  },
19};
20export default config;
21
