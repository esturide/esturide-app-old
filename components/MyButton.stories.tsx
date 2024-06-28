import { MyButton } from '@/components/MyButton'

const meta = {
    title: "Components/MyButton",
    component: MyButton,
    args: { onPress: () => console.log("Clicked") },
  };
  
  export default meta;
  
  export const HelloWorld = {
    args: {
      label: "Hello world",
    },
  };
  