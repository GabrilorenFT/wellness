import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Button,
  TextInput,
  FlatList,
} from 'react-native';
import {useGlobal} from '../../hooks/useGlobal';

import styles from './styles';
import {Header} from '../../components';
import {ExercisesList} from './list/list';
import HeaderRoutes from '../../components/headerRoutes';

let exercises = [
  {
    titulo: 'Peito',
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
    imagem: require('../../assets/images/PEITO.png'),
    area_afetada: 'Peito',
    titulo1: 'Voador no aparelho',
    imagem1: require('../../assets/images/voador-no-aparelho.png'),
    exercicio1: `
      Sentar-se na máquina com as costas retas no suporte acolchoado do equipamento.
      Segurar as alças de modo que os antebraços fiquem paralelos ao chão. Para isso é necessário ajustar a máquina adequadamente.
      Se tiver dificuldades para fazer isso, peça ajuda ao instrutor da academia.
      Trazer as alças para o centro de modo devagar, aproximando os braços e levando-os para o centro, ao mesmo tempo em que comprime o peito no meio e exala o ar.
      Segurar a contração por um segundo e voltar lentamente ao posicionamento original até que o peito esteja completamente alongado, ao mesmo tempo em que inala o ar.
    `,
    titulo2: 'Supino Reto com Barra',
    imagem2: require('../../assets/images/supino-reto.png'),
    exercicio2: `
      Trata-se de um dos clássicos exercícios para peito. Deitar-se em um banco reto.
      Os joelhos devem estar flexionados, os pés firmes no suporte ou chão, as costas levemente arqueadas e os glúteos bem estabilizados no banco.
      Pegar a barra com as mãos separadas em uma distância maior do que a largura dos ombros. Retirar o peso do suporte, segurando-o na linha do peito com os cotovelos estendidos.
      Descer a barra até o peito de maneira controlada com os punhos retos, fazendo o movimento de flexão dos cotovelos para baixo.
      Fazer uma pequena pausa e empurrar a barra para cima.
      A força do movimento deve estar no peito, e não nos braços. Durante essa etapa, os ombros devem ser mantidos para atrás e as escápulas devem permanecer fixas no banco.
    `,
  },
  {
    titulo: 'Costas',
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
    imagem: require('../../assets/images/COSTAS.png'),
    area_afetada: 'Costas',
    titulo1: 'Remada unilateral com halter (remada serrote)',
    imagem1: require('../../assets/images/costas-remada-unilateral-com-halter-serrote-no-banco.png'),
    exercicio1: `
      Temos aqui um exercício unilateral, que ao trabalhar cada lado de maneira independente, permite que a amplitude de movimento seja maior, assim como a carga que é usada.
      Outras vantagens são não ficar impedido de se exercitar caso o lado mais fraco falhe antes do mais forte e oferecer mais suporte à lombar, devido à possibilidade de apoiar a mão livre.

      A remada unilateral com halter trabalha a região média das costas, o latíssimo do dorso, os bíceps e os ombros.

      Como fazer:

      Para começar, coloque um halter em cada lado de um banco reto.
      Em seguida, coloque as pernas em cima do banco, encostando o joelho e incline tronco para a frente até a parte superior do corpo ficar paralela ao chão.
      Depois, coloque uma das mãos no banco (a que for correspondente a perna que está no banco) para obter suporte e pegue um halter com a outra mão. Mantenha a região lombar reta e a palma da mão voltada para o tronco.
      Então, leve o peso para cima, até a lateral do peito. Flexione o cotovelo e mantenha o tronco imóvel.
      Durante esse movimento, solte o ar e contraia bem os músculos das costas. Você deve se certificar de que está fazendo força com os músculos das costas e não com o braço. Além disso, os antebraços não devem fazer nenhum esforço, a não ser o de segurar o halter.
      Depois, desça o halter e volte à posição inicial, ao mesmo tempo em que inala o ar. Após atingir o número determinado de repetições, troque a posição dos braços.
    `,
    titulo2: 'Remada em pé com a barra T (remada cavalinho)',
    imagem2: require('../../assets/images/costas-remada-em-pe-com-barra-T.png'),
    exercicio2: `
      A remada em pé na barra T é uma das mais fáceis de serem executadas, ainda que seja classificada com grau de dificuldade intermediário.

      Como fazer:

      Para começar, coloque uma carga adequada para você na barra.
      Então, se posicione no equipamento, colocando uma perna de cada lado da barra. Abaixe os quadris e segure a alça das barras com as palmas das mãos para fora, mantenha as costas retas durante todo o exercício.
      Em seguida, retire o peso do chão e leve a barra até a altura dos braços. O movimento deve ser realizado por meio da flexão dos cotovelos, com as escápulas contraídas e puxando o peso até o peito.
      Depois, faça uma pausa rápida na parte alta do exercício e, então, retorne à posição original.
      É possível escolher um tipo de pegada para o exercício, o que muda o músculo a ser mais trabalhado. Por exemplo, uma pegada neutra trabalha melhor a região média das costas, enquanto uma pegada mais ampla aciona mais o latíssimo do dorso.
    `,
  },
  {
    titulo: 'Panturrilha',
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
    imagem: require('../../assets/images/PANTURRILHA.png'),
    area_afetada: 'Panturrilha',
    titulo1: 'Agachamento com salto e halteres (casa e academia)',
    imagem1: require('../../assets/images/Agachamento-com-salto-e-halteres.png'),
    exercicio1: `
      Além de trabalhar a panturrilha, este exercício também atinge os músculos da parte superior da perna, o quadríceps, os glúteos e o abdômen. Seu nível de dificuldade é classificado como avançado.

      Como fazer:

      Para começar, fique em pé, com os pés paralelos aos ombros;
      Em seguida, segure um halter em cada uma das mãos. As palmas das mãos devem estar direcionadas para o lado de dentro, com uma voltada para a outra. Já os braços devem estar estendidos ao longo do corpo;
      Então, mova o quadril para baixo, até ficar na posição de agachamento total, com as coxas paralelas ao chão;
      Quando estiver na parte baixa do movimento, pule o mais alto possível, mantendo os halteres na lateral do corpo.
    `,
    titulo2: 'Elevação de panturrilha no leg press (academia)',
    imagem2: require('../../assets/images/Panturrilha-no-leg-press.png'),
    exercicio2: `
      Este exercício de nível intermediário é realizado no leg press e trabalha a força dos músculos da panturrilha. No site Body Building, ele recebeu a nota 8,8 – em uma escala que vai de zero a 10 – tendo sido classificado como um dos melhores exercícios para a panturrilha.

      Como fazer:

      Para começar, ajuste o banco da máquina de modo que as pernas fiquem ligeiramente dobradas na posição inicial. As pontas dos pés devem estar firmemente apoiadas na plataforma;
      Em seguida, selecione um peso adequado com ajuda do treinador;
      Depois, levante o peso estendendo os joelhos;
      Então, mantenha os joelhos esticados e empurre os calcanhares para alongar a panturrilha. Faça o número de repetições determinado;
      Em seguida, retorne à posição inicial.
      Os próximos exercícios para panturrilha podem ser realizados em casa ou na academia, já que não demandam o uso de nenhum aparelho.
   `,
  },
  {
    titulo: 'Bíceps',
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
    imagem: require('../../assets/images/BICEPS.png'),
    area_afetada: 'Bíceps',
    titulo1: 'Rosca bíceps no cabo e usando a corda',
    imagem1: require('../../assets/images/rosca-biceps-no-cabo.png'),
    exercicio1: `
      A rosca com cabo é feita com uma corda curta que fica presa a uma polia baixa. Opcionalmente pode-se usar uma barra curta.

      Como fazer:

      Primeiro, fique em pé, de maneira ereta e com a coluna vertebral reta. Pegue as extremidades da corta com as palmas das mãos apontadas para o centro e deixe os braços estendidos;
      Então, faça o movimento de levantamento flexionando os cotovelos;
      Depois, retorne o movimento à posição inicial.
      Assim como acontece com a rosca direta com barra, se você usar uma pegada aberta, seu esforço será concentrado na parte interna do bíceps. Já se utilizar a pegada fechada, ele será direcionado à sua parte externa.

      Entretanto, há uma diferença em relação à resistência da rosca com cabo e outros tipos de exercícios de rosca bíceps feitos com halteres ou barra. Nos últimos, a resistência varia durante a elevação, enquanto no movimento realizado com o cabo a resistência é igual o tempo todo.

      A rosca com cabo é um bom exercício para atingir as fibras musculares mais profundas, devido à tensão constante que o cabo causa ao longo do movimento. Além disso, os chamados músculos estabilizadores, que ficam no entorno do bíceps, também são acionados por esse exercício.

      Os músculos estabilizadores são aqueles que oferecem sustentação para as articulações e facilitam o fortalecimento e crescimento muscular. O não fortalecimento desses músculos pode alterar o padrão de movimento, o que favorece o surgimento de lesões.
    `,
    titulo2: 'Rosca bíceps direta com barra',
    imagem2: require('../../assets/images/rosca-direta-com-barra-e-pegada-fechada.png'),
    exercicio2: `
      O segundo exercício da nossa lista é a rosca direta com barra reta. Ao se utilizar a pegada fechada, o esforço será direcionado à parte externa dos bíceps.

      Como fazer:

      Para começar, segure a barra de forma que as suas mãos fiquem paralelas aos ombros e deixe as palmas das mãos voltadas para cima. Nesse momento, você deve manter os braços estendidos;
      Em seguida, levante a barra até a altura dos ombros, ao mesmo tempo que flexiona os cotovelos;
      Depois, devolva a barra à sua posição inicial, retornando os braços para a posição estendida.
      Durante a execução do exercício, o corpo deve estar na posição ereta, com a coluna reta.

      Uma leve inclinação da parte superior do abdômen para a frente pode ser usada para facilitar o exercício, já que esse movimento torna a fase inicial da flexão de braços mais fácil. Já uma inclinação leve para trás, auxilia a repetir o movimento.
    `,
  },
];

export const Exercises = () => {
  const {globalProps, setGlobalProps} = useGlobal();
  const s = styles();

  return (
    <>
      <HeaderRoutes title={"EXERCÍCIOS"}/>
      <View style={s.container}>
        <FlatList
          data={exercises}
          showsVerticalScrollIndicator={false}
          keyExtractor={(_item, index) => index}
          renderItem={({item}) => <ExercisesList {...item} />}
        />
      </View>
    </>
  );
};
