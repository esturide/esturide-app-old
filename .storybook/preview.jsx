import { View } from "react-native";

/** @type{import("@storybook/react").Preview} */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => (
      <View
        style={{
          flex: 1,
          padding: 8,
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
