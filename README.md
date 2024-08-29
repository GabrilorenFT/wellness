WellNess

---

## Guia de Configuração para Iniciar o Projeto React Native

Este guia irá orientá-lo para configurar o ambiente necessário para executar o projeto React Native em uma máquina Windows. O projeto utiliza React `17.0.2`, React Native `0.68.2`, Java `11` e a versão mais recente do Node.js com NPM.

### Pré-requisitos

1. **Node.js e NPM**: Instale a versão mais recente do Node.js a partir do [site oficial](https://nodejs.org). Isso também instalará o NPM automaticamente.
2. **Java Development Kit (JDK)**: Instale o JDK na versão 11. Você pode baixar a versão 11 do [site da Oracle](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html) ou de outra fonte confiável.
3. **Android Studio**: Baixe e instale o [Android Studio](https://developer.android.com/studio). Certifique-se de configurar as variáveis de ambiente necessárias:
   - **ANDROID_HOME**: Deve apontar para o diretório do SDK do Android (geralmente `C:\Users\<seu-usuario>\AppData\Local\Android\Sdk`).
   - Adicione também o diretório `platform-tools` à variável de ambiente `PATH`.

### Passos para Instalação

1. **Clone o Repositório**

   Clone o repositório do projeto para a sua máquina:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   cd <NOME_DO_PROJETO>
   ```

2. **Instale as Dependências**

   Execute o comando abaixo para instalar todas as dependências necessárias:
   ```bash
   npm install
   ```

3. **Inicie o Metro Bundler**

   Inicie o Metro Bundler, o servidor de desenvolvimento do React Native:
   ```bash
   npx react-native start
   ```

4. **Execute o Projeto no Android**

   Em outro terminal, execute o comando abaixo para compilar e executar o aplicativo no emulador Android ou em um dispositivo físico:
   ```bash
   npx react-native run-android
   ```

### Solução de Problemas Comuns

- **Erro `Java is not recognized as an internal or external command`**: Verifique se o JDK 11 está instalado corretamente e que a variável de ambiente `JAVA_HOME` está configurada apontando para o diretório de instalação do JDK.
- **Erro de licença do Android SDK**: Abra o Android Studio e aceite todas as licenças do SDK necessárias.

### Recursos Adicionais

- [Documentação Oficial do React Native](https://reactnative.dev/docs/environment-setup)
- [Configuração do Ambiente no Windows para React Native](https://reactnative.dev/docs/environment-setup)

---

Se precisar de mais algum ajuste ou personalização, me avise!
