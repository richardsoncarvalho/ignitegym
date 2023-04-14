import { IImageProps, Image } from 'native-base';

type UserProfileProps = IImageProps & {
  size: number;
};

export function UserProfile({ size, ...rest }: UserProfileProps) {
  return (
    <Image
      w={size}
      h={size}
      borderWidth={2}
      borderColor="gray.400"
      borderRadius="full"
      {...rest}
    />
  );
}
