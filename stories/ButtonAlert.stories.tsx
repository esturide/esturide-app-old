import { ButtonAlert } from '@/components/ButtonAlert'

const meta = {
    title: "Components/ButtonAlert",
    component: ButtonAlert,
    args: { onPress: () => console.log("Clicked") },
  };

  export default meta;

  export const AlertText = {
    args: {
      label: "Hello world",
    },
  };
