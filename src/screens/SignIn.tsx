import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
      bg="gray.700"
    >
      <VStack flex={1} px={10} py={10} justifyContent="space-between">
        <Image
          source={BackgroundImg}
          alt="Pessoas malhando"
          resizeMode="contain"
          position="absolute"
        />

        <Center pt={10}>
          <LogoSvg />

          <Text color="gray.100" fontSize="sm">
            Treine seu corpo e sua mente
          </Text>
        </Center>

        <Center py={16}>
          <Heading color="gray.100" fontSize="xl" fontFamily="heading" mb={6}>
            Acesse sua conta
          </Heading>

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Button title="Acessar" />
        </Center>

        <Center>
          <Text color="primary.100" fontSize="sm" mb={3} fontFamily="body">
            Ainda não tem acesso?
          </Text>
          <Button title="Criar conta" variant="outline" />
        </Center>
      </VStack>
    </ScrollView>
  );
}
