import { border, extendTheme } from '@chakra-ui/react';

const baseStyle = {
  indicator: {
    color: '#FDDE55',
    borderColor: '#FDDE55',
  },
};

const stepperTheme = {
  baseStyle,
};

export const theme = extendTheme({
  components: {
    Stepper: stepperTheme,
  },
});
