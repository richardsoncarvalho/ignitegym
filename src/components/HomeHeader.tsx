import { HStack, Heading, Text, VStack, Icon } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { UserProfile } from './UserProfile';
import { TouchableOpacity } from 'react-native';

export function HomeHeader() {
  return (
    <HStack pt={16} pb={8} px={8} bg="gray.500" alignItems="center">
      <UserProfile
        source={{ uri: 'https://github.com/richardsoncarvalho.png' }}
        alt="Image do profile do github"
        size={16}
        mr={4}
      />

      <VStack flex={1}>
        <Text color="gray.100" fontSize="md">
          Olá,
        </Text>
        <Heading color="gray.100" fontSize="md">
          Rodrigo Gonçalves
        </Heading>
      </VStack>

      <TouchableOpacity>
        <Icon as={MaterialIcons} name="logout" color="gray.200" size={7} />
      </TouchableOpacity>
    </HStack>
  );
}
