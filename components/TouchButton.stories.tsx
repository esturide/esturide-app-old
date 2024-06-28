import { TouchButton } from "@/components/TouchButton";


const meta = {
    title: "Components/TouchButton",
    component: TouchButton,
    args: { onPress: () => console.log("Clicked") },
  };
  
  export default meta;
  
  export const HelloWorld = {
    args: {
      label: "Hello world",
    },
  };
  