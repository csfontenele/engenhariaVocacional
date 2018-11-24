import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet
} from 'react-native';
import { RadioGroup, RadioButton } from 'react-native-flexi-radio-button'

export default class Perguntas extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
    this.onSelect = this.onSelect.bind(this);
  }

  onSelect(index, value) {
    
  }
  render() {
    return (
      <ScrollView style={styles.containerPrincipal}>

        <Text>Perguntas</Text>
        <View style={styles.containerPrincipal}>
          <View style={styles.container}>
            <Text>Em uma visita da escola para uma fábrica, qual tipo de problema você acha que se interessaria, dentre as opções:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={1} resp={0}>
                <Text>A disposição dos resíduos</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={3}>
                <Text>Montagem de peças de grandes dimensões, determinação de formas e posições, medição de movimentos</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={4} resp={0}>
                <Text>Problemas relacionados a defeitos em produtos produzidos</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={0}>
                <Text>Problemas relacionados à estrutura da fábrica, materiais utilizados</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>O funcionamento, programação e manutenção das máquinas</Text>
              </RadioButton>
            </RadioGroup>
            <Text style={styles.text}>{this.state.text}</Text>
          </View>

          <View style={styles.container}>
            <Text>Quais são dentre as opções suas matérias preferidas:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={1}>
                <Text>Biologia, química, matemática e geografia</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Física, Matemática, Geografia</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={4}>
                <Text>Matemática, Física e Química</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={6}>
                <Text>Matemática, física</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={7} resp={0}>
                <Text>Física, matemática e computação</Text>
              </RadioButton>
            </RadioGroup>
            <Text style={styles.text}>{this.state.text}</Text>
          </View>

          <View style={styles.container}>
            <Text>Desde criança você se considera um:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={4}>
                <Text>Pesquisador</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={5}>
                <Text>Especialista em solucionar problemas do dia-a-dia</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>Organizador</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={6} resp={7}>
                <Text>Criador</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={1} resp={0}>
                <Text>Preocupado com o meio em que vive</Text>
              </RadioButton>
            </RadioGroup>
            <Text style={styles.text}>{this.state.text}</Text>
          </View>

        </View>

        <View style={styles.container}>
            <Text>Que tipo de programa de TV, dentre as opções, você prefere?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={1}>
                <Text>Rurais, noticiários e documentários sobre a natureza</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Espaço, planetas, satélites</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={7} resp={3}>
                <Text>Programas de produtividade em geral, vida empresarial, dia a dia em indústrias...</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={4}>
                <Text>Obras Incríveis</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={0}>
                <Text>Programas de automobilismo, documentários sobre aeronáutica</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Caso você desenvolvesse um aplicativo, o que você consideraria mais divertido:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Aplicativo que trabalhe o conceito de preservação ambiental e melhor uso da água do planeta</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Guia para ver o céu noturno com outros olhos. Utilizando a bússola, GPS, acelerômetro e giroscópio do celular</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={5} resp={3}>
                <Text>Simulação de desenvolvimento de tarefas, construção de edifícios e obras mais variadas e seu impacto econômico</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={1} resp={4}>
                <Text>Como manipular a estrutura de materiais realizando reciclagem</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Um aplicativo que mostre a estrutura de um carro, funcionamento, motor, parte elétrica e layout.</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Para você uma grande benfeitoria do homem foi:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={2}>
                <Text>Desenvolvimento da agropecuária e representação de grandes espaços de terra</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={3} resp={0}>
                <Text>Desenvolver tecnologias de análise que permitam aumentar a eficiência nos trabalhos</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={5} resp={0}>
                <Text>Desenvolvimento da matemática, que nos permite ter acesso hoje à várias tecnologias</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={1} resp={3}>
                <Text>Invenção de materiais biodegradáveis e a reciclagem</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Os estudos sobre carros autônomos, elétricos e híbridos</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Dentre as opções, o que mais incomoda você:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={1} resp={0}>
                <Text>Desmatamento e maltrato de animais</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={3} resp={2}>
                <Text>Não encontrar algo, porque o ambiente está desorganizado ou falta de planejamento</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={5} resp={0}>
                <Text>Obras inacabadas ou danificadas a curto prazo</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={4} resp={6}>
                <Text>Objetos que não servem pra nada ou não conseguir utilizar algum objeto</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={7}>
                <Text>Desperdício de energia</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Qual seria seu local ideal de trabalho?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Um escritório/laboratório que fornecesse mobilidade entre cidade e campo</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={1} resp={2}>
                <Text>Ao ar livre</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={4} resp={0}>
                <Text>Laboratório</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={7} resp={6}>
                <Text>Em uma empresa multinacional</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={5}>
                <Text>Escritório ou ao ar livre</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>O que você considera mais importante para a nossa sociedade?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={1}>
                <Text>Produção de alimentos em grande escala de forma sustentável</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={0} resp={2}>
                <Text>O progresso de planejamento da construção de obras de redes de saneamento básico</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>A aplicação dos conhecimentos de forma a melhorar a qualidade de vida das pessoas alcançado através do desenvolvimento socioeconômico</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={7} resp={5}>
                <Text>Desenvolvimento de tecnologias que garantam cada vez mais a melhora da qualidade de vida das pessoas de maneira sustentável</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={4}>
                <Text>Pesquisas e tecnologias</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Seria mais interessante saber...</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={1}>
                <Text>O que pode contribuir para aumentar a produção de alimentos sem devastar o meio ambiente</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={0} resp={3}>
                <Text>Como organizar meus gastos de forma a economizar mais</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={5} resp={0}>
                <Text>Como as pontes são construídas e os efeitos que ela sofre dos agentes externos ou Sobre tecnologias de preservação ambiental, como construir obras sustentáveis</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={4} resp={0}>
                <Text>Diferentes condições de processamento ou de diferentes composições químicas para produzir determinado material</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Sobre a construção de meios de transporte, entendendo os processos</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Quais das tarefas caseiras abaixo você prefere realizar?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Fazer compras no supermercado, selecionar os alimentos</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={1}>
                <Text>Retirar os sacos de lixo</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>Organizar o dinheiro para ir pagar as contas mensais</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={4} resp={5}>
                <Text>Organizar espaços, mudar as coisas de lugar, criar nova utilidade para objetos</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Consertar eletrodomésticos</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Você gostaria de ter feito parte da equipe que inventou</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={6} resp={0}>
                <Text>Os meios de transporte</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={8} resp={4}>
                <Text>Imagens por satélites</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>O planejamento logístico de distribuição de mercadorias pelo mundo</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={0} resp={5}>
                <Text>Os prédios com grandes alturas (arranha-céus)</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={7}>
                <Text>A placa de energia solar</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>O que você não espera da sua rotina de trabalho?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Problemas que influenciem no resultado esperado</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Ficar sempre em escritório</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={4} resp={0}>
                <Text>Monotonia</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={0} resp={1}>
                <Text>Finais de semana com trabalho</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={3}>
                <Text>Que seja solitária</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Como você se imagina vestido para ir trabalhar?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={1}>
                <Text>De maneira informal, como jeans</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={7}>
                <Text>Camisa manga longa, colete, calça, bota e capacete</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={6}>
                <Text>Com vestimentas mais informais, calça jeans, camisa e equipamentos de proteção</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={0} resp={5}>
                <Text>Bota, jeans, camisa social e capacete</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={4}>
                <Text>De jaleco</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>No seu tempo livre você...</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={1}>
                <Text>Tem contato com a natureza ao ar livre</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Utiliza internet para conhecer as novas tecnologias</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>Procura saber como as coisas são feitas e/ou procurar empreender</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={0} resp={5}>
                <Text>Procuro ler sobre curiosidades de grandes obras</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Gosto de abrir equipamentos e consertar se precisar</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Que tipo de leitura está mais presente em sua estante?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={5}>
                <Text>Documentários, Revistas ou livros científicos</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Astronomia</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>Livros de conhecimentos variados: livros de curiosidades, administração, empreendedorismo</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={0} resp={6}>
                <Text>Ciência automobilística</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={1} resp={4}>
                <Text>Revistas sobre novas tecnologias, energias sustentáveis</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>O principal valor do seu trabalho deve ser:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Satisfazer quem o solicita, alcançar metas</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={7}>
                <Text>Facilitar o trabalho e o dia a dia das pessoas</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={5} resp={1}>
                <Text>Solução de problemas para melhorar a vida da sociedade</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={4} resp={3}>
                <Text>Qualidade</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={6}>
                <Text>Produção de meios de transporte sustentáveis</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Para você, matemática é sinônimo de:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Exatidão</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={1} resp={0}>
                <Text>Natureza do universo</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={6}>
                <Text>Uma forma de compreensão e esclarecimento melhor de problemas práticos</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={4} resp={0}>
                <Text>Problema</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={5} resp={7}>
                <Text>Desafio</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Em um jornal, que tipo de manchete costuma chamar mais a sua atenção?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={1}>
                <Text>Que afetam a população em grande escala, "fome cresce no mundo e desafia a FAO</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Aumento de tráfego de veículos, "Número de veículos aumenta e causa mais congestionamentos"</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>“Estudos demonstram a aplicação de ferramentas de aumento de produtividade e redução de custos”</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={4}>
                <Text>Problemas em obras, "Viaduto que cedeu 2 metros na Marginal Pinheiros pode desabar..."</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>"Um drone que pode carregar você e um carro a hidrogênio inovador"</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Qual desses serviços você NÃO contrataria para a sua vida pessoal ou profissional, pois saberia resolver muito bem sozinho:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={0} resp={1}>
                <Text>Construção de pequenos canteiros ou criação de animais</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Avaliar propriedades</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={0}>
                <Text>“Serviços para análise e desenvolvimento de soluções gerenciais de problemas diários</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={4}>
                <Text>Fazer reparo de pintura de parede</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Manutenção de equipamentos/instalações elétricas</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>O fato mais importante na evolução da nossa sociedade foi</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={6}>
                <Text>Uso da tecnologia para mecanizar as lavouras e abastecer a sociedade</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Utilização de satélites para o reconhecimento da Terra</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={4} resp={0}>
                <Text>Processos produtivos e ferramentas associados às novas tecnologias para desenvolvimento de materiais</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={0}>
                <Text>Desenvolvimento de tecnologias sustentáveis</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Geração de energia por vários meios</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Atividades que descrevem o que gosto de fazer:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={2}>
                <Text>Viajar, ter contato com a natureza</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={3} resp={0}>
                <Text>Observar riscos nas atividades, pensar em melhorias no layout de lugares, entender sobre os custos e lucros dos produtos e serviços que utilizo</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={5} resp={1}>
                <Text>Ler, resolver desafios, organizar bagunças, liderar equipes</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={4}>
                <Text>Ler e criar coisas</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={7}>
                <Text>Descobrir como as coisas funcionam</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Atividades que descrevem o que gosto de fazer:</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Plantando árvores</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={2} resp={0}>
                <Text>Não jogando lixo no chão</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={3} resp={1}>
                <Text>Desenvolvendo e estudando sistemas para utilizar e reutilizar eficientemente uma determinado tipo de energia</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={5} resp={4}>
                <Text>Reaproveitando materiais para realização de algumas tarefas e descobrindo novos materiais de natureza sustentável</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={6} resp={7}>
                <Text>Buscando novas formas de energia renovável</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>
          <View style={styles.container}>
            <Text>Se você estivesse disposto a fazer um trabalho voluntário, das alternativas abaixo, qual seria?</Text>
            <RadioGroup
              onSelect={(index, value) => this.onSelect(index, value)}
            >
              <RadioButton value={'item1'} respo={8} resp={0}>
                <Text>Demarcação e regularização de imóveis urbanos</Text>
              </RadioButton>

              <RadioButton value={'item2'} respo={1} resp={0}>
                <Text>Recolhimento de lixo dos rios</Text>
              </RadioButton>

              <RadioButton value={'item3'} respo={6} resp={0}>
                <Text>Manutenção de cadeiras de rodas</Text>
              </RadioButton>

              <RadioButton value={'item4'} respo={8} resp={0}>
                <Text>Horta comunitária com alimentos orgânicos</Text>
              </RadioButton>

              <RadioButton value={'item5'} respo={0} resp={7}>
                <Text>Manutenção de aparelhos</Text>
              </RadioButton>

            </RadioGroup>

            <Text style={styles.text}>{this.state.text}</Text>
          </View>

        <Button
          title="Verificar resultado"
          onPress={() => this.props.navigation.navigate('TelaResultado')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerPrincipal: {
    paddingVertical: 20
  }
})