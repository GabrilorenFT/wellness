import React, {useState, useEffect} from 'react';
import { View, TouchableOpacity, Text, Button, TextInput, FlatList } from 'react-native';
import { useGlobal } from '../../hooks/useGlobal';

import styles from "./styles";
import {Header} from '../../components';
import { ExercisesList } from './list/list';

let exercises = [
  {
    titulo: "Peito",
    descricao: `**Exercícios:**
    - **Supino reto:** Deite-se em um banco plano com os pés no chão. Segure a barra com as mãos afastadas na largura dos ombros. Abaixe a barra lentamente até o peito e, em seguida, empurre-a de volta à posição inicial.
    - **Supino inclinado:** Deite-se em um banco inclinado. Segure a barra ou os halteres com as mãos afastadas na largura dos ombros e empurre o peso acima da cabeça, contraindo o peitoral superior.
    - **Crucifixo:** Deitado em um banco plano, segure dois halteres. Com os braços estendidos e ligeiramente flexionados, abra os braços lateralmente e depois volte à posição inicial.
    - **Flexão de braço:** Apoie as mãos no chão, na largura dos ombros, e faça a flexão dos cotovelos para abaixar o corpo até o peito quase tocar o chão, depois volte à posição inicial.

    **Séries e Repetições:**
    - Realizar 3 séries de 10 a 12 repetições para cada exercício.
    - Tempo de descanso: 60 a 90 segundos entre as séries.
    **Benefícios:**
    - Fortalece o peitoral.
    - Melhora a postura.
    - Aumenta a força para atividades diárias que envolvem empurrar objetos.`,
    imagem: require("../../assets/images/PEITO.png") // Preencher com o caminho da imagem
  },
  {
    titulo: "Costas",
    descricao: `**Exercícios:**
    - **Puxada alta:** Sente-se na máquina de puxada e agarre a barra com as mãos afastadas. Puxe a barra em direção ao peito, contraindo os músculos das costas. Volte lentamente à posição inicial.
    - **Remada curvada:** Segure uma barra com as mãos na largura dos ombros. Incline-se para frente com as costas retas e puxe a barra em direção ao abdômen, contraindo os músculos das costas.
    - **Levantamento terra:** Com os pés afastados na largura dos ombros, segure uma barra no chão. Levante a barra mantendo as costas retas e estenda os quadris e joelhos para ficar em pé.
    - **Pull-up (barra fixa):** Segure a barra com as palmas das mãos voltadas para fora. Puxe o corpo para cima até que o queixo passe pela barra e depois desça lentamente.

    **Séries e Repetições:**
    - Realizar 3 séries de 8 a 12 repetições para cada exercício.
    - Tempo de descanso: 90 segundos entre as séries.
    **Benefícios:**
    - Melhora da postura.
    - Fortalecimento da musculatura das costas.
    - Alívio de dores nas costas.`,
    imagem: require("../../assets/images/COSTAS.png") // Preencher com o caminho da imagem
  },
  {
    titulo: "Panturrilha",
    descricao: `**Exercícios:**
    - **Elevação de panturrilha em pé:** Em pé, levante os calcanhares colocando o peso nos dedos dos pés e depois abaixe lentamente. Pode ser feito com halteres ou na máquina Smith.
    - **Elevação de panturrilha sentado:** Sente-se em uma máquina específica para panturrilha. Coloque o peso nos joelhos e levante os calcanhares.
    - **Panturrilha no leg press:** Na máquina de leg press, posicione os pés na base com os dedos apontados para cima. Empurre o peso com a força das panturrilhas, levantando os calcanhares.
    - **Saltos com impulso:** Realize pequenos saltos no lugar, focando em levantar os calcanhares no movimento.

    **Séries e Repetições:**
    - Realizar 4 séries de 15 a 20 repetições para cada exercício.
    - Tempo de descanso: 45 a 60 segundos entre as séries.
    **Benefícios:**
    - Aumenta a força nas pernas.
    - Melhora a resistência e desempenho em atividades como corrida ou caminhada.`,
    imagem: require("../../assets/images/PANTURRILHA.png") // Preencher com o caminho da imagem
  },
  {
    titulo: "Bíceps",
    descricao: `**Exercícios:**
    - **Rosca direta:** Segure um halter em cada mão com as palmas voltadas para frente. Flexione os cotovelos, levantando os halteres até a altura dos ombros. Abaixe lentamente.
    - **Rosca martelo:** Segure um halter em cada mão com as palmas voltadas para dentro. Levante os pesos em direção aos ombros, mantendo os cotovelos próximos ao corpo.
    - **Rosca concentrada:** Sentado, apoie o cotovelo na parte interna da coxa. Levante o halter em direção ao ombro, focando no movimento lento e controlado.
    - **Rosca na barra EZ:** Segure a barra EZ com as mãos na posição semi-pronada (palmas viradas para o corpo) e flexione os cotovelos, levantando a barra.

    **Séries e Repetições:**
    - Realizar 3 séries de 10 a 12 repetições para cada exercício.
    - Tempo de descanso: 60 segundos entre as séries.
    **Benefícios:**
    - Aumento da força nos braços.
    - Desenvolvimento muscular equilibrado.
    - Melhoria na estética muscular.`,
    imagem: require("../../assets/images/BICEPS.png") // Preencher com o caminho da imagem
  },
  {
    titulo: "ABS",
    descricao: `**Exercícios:**
    - **Prancha:** Deite-se de barriga para baixo e levante o corpo, apoiando-se nos antebraços e nos dedos dos pés. Mantenha o corpo alinhado e segure por 30 segundos a 1 minuto.
    - **Elevação de pernas:** Deitado, mantenha as pernas estendidas. Eleve as pernas juntas até formar um ângulo de 90 graus com o chão e depois abaixe lentamente.
    - **Crunch abdominal:** Deitado com as costas no chão e os joelhos dobrados, levante a parte superior do corpo em direção aos joelhos, contraindo o abdômen.
    - **Abdominal bicicleta:** Deitado de costas, mova as pernas em um movimento de pedalada enquanto gira o tronco, tentando tocar o cotovelo no joelho oposto.

    **Séries e Repetições:**
    - Realizar 3 séries de 12 a 15 repetições para cada exercício ou manter a posição (prancha) por 3 séries de 30 a 60 segundos.
    - Tempo de descanso: 45 segundos entre as séries.
    **Benefícios:**
    - Fortalece o core.
    - Melhora a postura e a estabilidade do corpo.
    - Auxilia na prevenção de lesões na lombar.`,
    imagem: require("../../assets/images/ABS.png") // Preencher com o caminho da imagem
  }
]

export const Exercises = () => {
  const {globalProps, setGlobalProps} = useGlobal();
  const s = styles();

  return (
    <>
      <Header/>
      <View style={s.container}>
      <FlatList
        data={exercises}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_item, index) => index}
        renderItem={({ item }) => (
          <ExercisesList {...item} />
        )}
      />
      </View>
    </>
  )
};