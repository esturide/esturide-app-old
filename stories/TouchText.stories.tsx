import { TouchText } from "@/components/TouchText";


const meta = {
    title: "Components/TouchText",
    component: TouchText,
    args: { onPress: () => console.log("Pressed") },
  };

  export default meta;

  export const TabText = {
    args: {
      label: "Tap the text",
    },
  };
