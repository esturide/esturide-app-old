export default ({ config }) => ({
  ...config,
  name: "Esturide",
  slug: "esturide-app",
  extra: {
    storybookEnabled: process.env.STORYBOOK_ENABLED,
  },
});
