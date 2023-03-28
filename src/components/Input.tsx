import { Input as NativeBaseInput, IInputProps } from 'native-base';

export function Input({ ...rest }: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      borderWidth={0}
      px={4}
      mb={4}
      h={14}
      fontSize="md"
      placeholderTextColor="gray.300"
      fontFamily="body"
      color="primary.100"
      _focus={{
        bg: 'gray.700',
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      {...rest}
    />
  );
}
