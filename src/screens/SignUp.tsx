import { VStack, Image, Text, Center, Heading, ScrollView } from 'native-base';

import LogoSvg from '@assets/logo.svg';
import BackgroundImg from '@assets/background.png';
import { Input } from '@components/Input';
import { Button } from '@components/Button';
import { useNavigation } from '@react-navigation/native';

export function SignUp() {
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} px={10} py={10} justifyContent="space-between">
        <Image
          source={BackgroundImg}
          defaultSource={BackgroundImg}
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
            Crie sua conta
          </Heading>

          <Input placeholder="Nome" />

          <Input
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <Input placeholder="Senha" secureTextEntry />

          <Input placeholder="Confirme sua Senha" secureTextEntry />

          <Button title="Criar e acessar" />
        </Center>

        <Button
          title="Voltar para o login"
          variant="outline"
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
}
