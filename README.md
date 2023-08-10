# React-Native-First-App
1️⃣ Creating my first app developed with React Native, using expo.

# React Native: criando um app

## Criando Componente Cesta

### Organizando os Pacotes

Primeiramente, organizamos esses pacotes

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled.png)

### Criando o Arquivo

Dentro do arquivo ****************Cesta.js**************** eu coloquei o seguinte código

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%201.png)

1. Primeiramente, é necessario importar o React
2. Depois, eu peguei o componente Text de ************************react-native************************
3. Criei o “**componente**” (função) **Cesta** (que até agora é só um texto com Cesta) e **exportei**

### Os tipos de Import

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%202.png)

O primeiro import que não tem chaves, é por que no arquivo existe um **export default** (assim como o nosso), ou seja, só pode importar isso daquele arquivo

O segundo import tem chaves pq a função não é exportado como default, e então, podem haver diversas funções diferentes exportadas do **********react-native**********

### Adicionando Cesta ao App.js

Depois de criar o componente, só preciso importa-lo no App.js e depois coloca-lo na função.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%203.png)

- O import vai pro caminho do meu arquivo

## Imagens e Estilos

### Modificando o Arquivo App.js

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%204.png)

Apaguei o que vem pronto do React-Native e criar o nosso proprio arquivo **app.js**

1. Apaguei a **const styles**
2. Apaguei o **Text** que antes tinha
3. Troquei de View para **SafaAreaView** 
4. Adicionei o **StatusBar** acima da **Cesta**

**************************************Então, agora, o meu App esta mais ou menos assim:**************************************

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%205.png)

### Adicionando imagem de topo.png

Agora, adicionei uma Imagem no meu componente

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%206.png)

- É necessario importar a imagem
- Colocar a imagem importada no **source={}**

O aplicativo ficou assim: 

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%207.png)

Como da pra ver, a imagem ta bem feia, então, vou estiliza-la

### Estilizando a imagem topo.png

Para editar a minha image, primeiro preciso criar uma constante estilos, e ai criar um estilo para então coloca-lo na image.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%208.png)

1. Para definir o ******width,****** simplesmente coloquei 100% da tela.
2. Para definir o ************height************ foi mais complexo. 
    1. Primeiro eu importei o ****************************Dimensions**************************** do **react-native,**  e salvei o width da tela
        
        ![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%209.png)
        
    2. E com o width da imagem, fiz essa formula para pegar o **heigth**: 
        
        ![largura / altura * largura (o -10 ignora)](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2010.png)
        
        largura / altura * largura (o -10 ignora)
        
    
    No final ficou assim:
    
    ![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2011.png)
    
3. E para finalizar, preciso adicionar o estilo que criei a meu componente **Image**
    
    ![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2012.png)
    

O arquivo ******************Bicileta.js****************** (mudei o nome) ficou assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2013.png)

O aplicativo ficou assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2014.png)

### Adicionando e estilizando Titulo

Agora, quero adicionar um titulo em cima da imagem, para isso.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2015.png)

1. Primeiro importei o **Text** de **************react-native**************
2. Depois, usei os **<>...</>** para poder retornar mais do que um componente
3. Adicionei o bloco **<Text>…<Text/>**

Agora, preciso adicionar um estilo para esse texto. Entao, vou criar mais um estilo na variavel **styles.**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2016.png)

E por ultimo, vou alocar este estilo no componente **Text** que criei anteriormente.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2017.png)

O código final ficou assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2018.png)

E o aplicativo assim: 

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2019.png)

## Criando as Informações

Agora, irei adicionar a seção de informações da bicicleta.

### Organização da seção

Como eu estou criando uma nova seção, que eu quero que ela toda tenha um **padding** comum, vou englobar todo os meus novos códigos dentro de uma **View**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2020.png)

Vamos ver a **estilização** dessa **View**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2021.png)

### Nome da Bicicleta

Vou criar agora o “titulo” da seção, que vai ser o **nome** da **bicicleta**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2022.png)

Agora, vou **estilizar** o **nome** da bicicleta

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2023.png)

Ficou assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2024.png)

### Nome do Dono

Vou criar agora o texto com o **nome** do **dono** da **Bicicleta**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2025.png)

Agora, vou **estilizar** o **nome** do dono da **bicleta**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2026.png)

Ficou assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2027.png)

### Descrição

Vou agora criar o texto de **descrição** da **bicicleta**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2028.png)

Agora, vou estilizar a **descrição** da **bicicleta**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2029.png)

Ficou assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2030.png)

### Preço

Vou criar o **preço** da **bicicleta**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2031.png)

Agora, vou estilizar o **preço** da **bicicleta**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2032.png)

Ficou assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2033.png)

### Resultado final até agora:

Este é o aplicativo até agora:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2034.png)

Mas, como posso fazer para colocar a imagem do dono da bicicleta, do lado do seu nome?

## Seção do Dono e Imagem

### Criando seção com nova View

Vou criar uma nova **View** para armazenar apenas as informações do dono.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2035.png)

Vou estilizar a View para que o texto fique logo ao lado da imagem

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2036.png)

1. Diz que a **direção** vai ser em **linha**
2. Diz que o **top** e o **bottom** vão ter **padding** de **12**
3. **Alinha** os itens no **centro** da **linha**

### Adicionando a imagem do dono

Primeiro de tudo, preciso **importar** a **imagem.**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2037.png)

Agora, crio uma **Image** passando essa **owner_image**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2038.png)

E por fim, faço o **estilo** da **imagem** do **dono.**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2039.png)

O código da **estrutura** do **app** ficou assim

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2040.png)

E o **aplicativo** assim:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2041.png)

## Adicionando Fonte

### Importando do Google Fonts

Eu quero que o meu aplicativo tenha uma **fonte especifica**, então, vou pegar uma do **google fonts**

Para isso, vou rodar este comando no meu terminal

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2042.png)

- Isso é a forma de baixar uma fonte do **google fonts**, pelo **expo**
- O **final** é o **nome** da fonte que desejo usar, no caso, a **montserrat**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2043.png)

### Validando se for iniciada

Dentro do arquivo **App.js,** preciso primeiro importar o **useFonts** e as **fonts** que baixei

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2044.png)

O caminho da importação é esse **@expo-google-fonts/nomeDaFonte**

- Preciso importar as fontes especificas que desejo usar

Agora, dentro do **App.js** vou criar uma variavel **fontLoaded** 

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2045.png)

- Criei uma variavel **fontLoaded** que diz se ela foi **carregada ou não**
- **Renomeei** as **fontes** que **importei** para nomes mais simples

E agora, vou validar se a ********************fontLoaded******************** é verdadeira, se não for, vou devolver uma tela vazia.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2046.png)

- Se a **fontLoaded** for **verdadeira**, então a **aplicação completa** será **retornada**.
- Se não for, retorna uma **View vazia**

## Configurando o uso da Fonte

Normalmente, eu precisiaria configurar a font em todos os styles que ja criei, mas como isso é muito maçante, vou fazer da seguinte forma. 

### Criando novo Componente

Criei um componente **TextStyled** que terá fim ultimo de ser usado no lugar do Text, e será o local onde o uso da fonte sera configurado.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2047.png)

O que eu vou fazer nesse arquivo, é criar dois estilos dentro dele

1. Um que define a **fontFamily** como **MontserratRegular**
2. Outro que define a **fontFamily** como **MontserratBold**

### Recebendo valores e seus estilos

Vou criar a minha função, e ela tem que ter como parâmetro o **children** e o **style**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2048.png)

- O **Children** é tudo aquilo que estiver dentro das **<></>** do **TextStyled** onde ele for usado
- O **style**, é o estilo que o **TextStyled** especifico terá, passado no **style={}**

Exemplo: aqui, o **children** é o texto “**Detalhes da Bicicleta**” e o **style** é o **{styles.title}**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2049.png)

Lembre-se que todo <**Text/>** que eu tenho virará <**TextStyled/>**

### Criando texto normal e texto bold

O que eu quero fazer, é **receber** um **texto** com um **estilo** e só **adicionar** o **tipo de fonte** nele depois

- Faço isso colocando um **outro estilo** que **só contem** o **tipo** da **fonte**
    - E sim, você pode ter mais de um estilo num componente

Então, preciso criar **dois estilos**, um com cada **tipo** de **fonte** 

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2050.png)

### Definindo a fonte para estilo

E para definir se a fonte vai ser bold ou regular?

Bom, eu pego o **style**, e dependendo se tiver **fontWeight** como “**bold**” eu **setto** se for ou não

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2051.png)

- Crio a variavel styleType e setto como padrão sendo o text normal
- Se o style que vir como parametro tiver fontWeight como bold, eu setto o styleType como textBold

### Retornando

E no final, eu retorno um **Text** normal, que tem style={**style**, **styleType**}, e o conteudo é o children.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2052.png)

- **style =** estilo que ja foi definido em outro lugar
- **styleType** = estilo que foi definida a fonte

### Arquivo completo

Arquivo completo do **TextStyled**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2053.png)

### Sendo usado

Este é um exemplo do **TextStyled**  sendo usado

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2054.png)

## Quebrando Bicicleta em Varios componentes

O meu arquivo **Bicycle.js** já esta bem grande, como pode ver, e isto não é bom:

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2055.png)

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2056.png)

O arquivo já tem **88 linhas**, e tendo a ficar ainda **maior com o passar do tempo**. Então, pensando na futura **manutenção** do código, na **legibilidade**, e em **trabalhar em times**, vou **quebra-lo** em outros **componentes**.

Então, vou criar uma pasta **Bicycle**, e dentro dela uma outra pasta chamada **components**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2057.png)

### Componente Top.js

Primeiro de tudo, vou já vou criar a **função** e **retornar** os **components** que formam o **topo**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2058.png)

Agora, vou criar o **styles** que ainda não existe dentro desse **arquivo**. 

Eu só preciso criar o **top** e o **title**, pois são os unicos que são usados pelos components do **Top**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2059.png)

Por fim, vou garantir de ter feito todos os Imports que necessito.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2060.png)

Todos esses itens foram tirados do **Bicycle.js**

### Componente Owner.js

Primeiro de tudo, crio a função **Owner()** retornando os que constroi o Owner.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2061.png)

Depois, crio o **styles** contendo apenas os tipos **owner**, **owner_image** e **owner_name**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2062.png)

Por fim, faço o **import** dos **components**/**imagens** que eu usei nesse **arquivo**, que foram: 

- **View**, **Image** e **StyleSheet** do **react-native**
- **owner_imagem** da pasta **assets**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2063.png)

### Componente Infos.js

Primeiro de tudo, crio a **estrutura** que será retornada pelo componente **<Infos />**

- Ele inclusive, utiliza o **<Owner />**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2064.png)

Agora, crio os estilos **name**, **description** e **price**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2065.png)

E por fim, faço o import de tudo que utilizei.

- **StyleSheet** do react-native
- **TextStyled** e **Owner** que eu mesmo criei

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2066.png)

### Bicycle.js componentizado

Agora, no final de tudo isso, o meu arquivo **Bicycle.js** ficou assim. Muito melhor

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2067.png)

Dessa forma, fica muito mais **fácil** de **evoluir** e **crescer** a **aplicação**.

## Criando Mock e Parametros

Bom, até agora eu só fiz a aplicação com uns **Plain Text** padrão, mas que tal **simular** como **seria** com uma **API?**

### Criando e entendendo um Mock

Vou criar um **mock** para **bicycle** que vai ser **responsavel** por armazenar todas os dados nele

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2068.png)

- Mocks são usados em testes automatizados
- Eles contém as informações/dados que mudam

Com o **Mock**, dados como **textos escritos** ou **imagens** que antes deveriam ser **importadas**, ficam **todas nele.**

### Criando Objeto Bicycle

Então, dentro do **mock bicycle**.**js**, eu criei um objeto **bicycle** e o **exportei**.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2069.png)

Então, vou pensar nos **components** da minha aplicação, e ver os **dados** que eles tem

- **Top**
    
    O Top tem a **imagem top** e o **texto do titulo**
    
    ![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2070.png)
    
- **Infos**
    
    O infos tem o **nome** da Bicicleta, a **descrição** e o **preço**.
    
    ![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2071.png)
    
    Ele tem também os dados do **Owner**
    
    - **Owner**
        
        O Owner tem a imagem do **owner_image** e o **nome do dono**
        
        ![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2072.png)
        

### Populando o Objeto Bicycle

Com todos os **dados** usados nos meus **components** mapeados, eu posso criar o **mock**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2073.png)

Todos os **textos** vieram parar aqui, com uma **chave** do **objeto** referente ao o que eles tratam

Inclusive, as **imagens** que precisavam de **import também estão aqui.**

### Passando o Objeto para os Components

Primeiro de tudo, dentro do **App.js** eu preciso importar o **mock**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2074.png)

E então, eu vou até o **componente Bicycle** e passo **através** da **desestruturação**, o meu **objeto mock**.

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2075.png)

- Essa **forma** de passar o **mock**, faz com que o top e o **infos** já sejam **desestrutrurados**
    
    E a mesma coisa que fazer isso
    
    ![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2076.png)
    

### Populando os Components

**Bicycle.js**

E então, eu recebo os meus dados que passei anteriomente

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2077.png)

O **mock** é **formado** por **mock.top** e **mock.infos**, mas como eu fiz o **{…mok}** eu posso pegar **direto** o **top** e o **infos** agora.

1. Passei o **objeto top desestruturado** para o componente **<Top/>**
2. Passei o **objeto infos desestruturado** para o componente **<Infos/>**

**Top.js**

Recebi os atributos **photo** e **title** que foram **passados** pela **desestruturação** do **top**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2078.png)

1. Coloquei o **photo** no **source** da **<Image/>**
2. Coloquei o **title** na **area de texto** do **<Text/>**

**Infos.js**

Recebi o **name**, **owner**, **description** e **price** que foram **passados** pela **desestruturação** do **infos**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2079.png)

1. Coloquei o **name** no children do 1 **<Text/>**
2. Passei o **owner** desestruturado para **<Owner/>**
3. Coloquei o **description** no 2 **<Text/>**
4. Coloquei o **price** no **children** do 3 **<Text>**

**Owner.js**

Recebi o **owner_imagem** e o **owner_name** qque foram passados pela desestruturação do **owner**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2080.png)

1. Coloquei o **owner_image** no **source** do **<Image/>**
2. Coloquei o **owner_name** no **children** do **<Text/>**

Então, assim, fica mais fácil de organizar os dados e modifica-los, tendo um local separado, e simula api

## Tela de Loading

Atualmente, o **app** sempre que a **fontLoaded não carrega**, só mostra uma **<View/>,** vou melhorar.

### Baixando a tela de Loading

Preciso **rodar** este **comando** no **terminal**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2081.png)

### Adicionando Loading

Primeiramente, eu importo a **AppLoading** do **expo-app-loading** que eu acabei de **baixar**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2082.png)

E depois, mudo a **<View/>** **vazia** do **if(!fontLoaded)** para o **<AppLoading/>**

![Untitled](React%20Native%20criando%20um%20app%20a00d6537c72c4e51ba93ff1ca537dd1f/Untitled%2083.png)