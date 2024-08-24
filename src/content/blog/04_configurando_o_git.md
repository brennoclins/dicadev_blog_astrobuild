---
title: 'Configuração Inicial do Git'
description: 'Configuração Inicial do Git.'
pubDate: 'May 14 2024'
heroImage: '/blog-placeholder-2.jpg'
---

O Git vem com uma ferramenta chamada git config que permite ver e atribuir variáveis de configuração que controlam todos os aspectos de como o Git aparece e opera.

### Sua Identidade
A primeira coisa que você deve fazer ao instalar **Git** é configurar seu nome de usuário e endereço de e-mail. Isto é importante porque cada _commit_ usa esta informação, e ela é carimbada de forma imutável nos _commits_ que você começa a criar:

```bash
git config --global user.name "Brenno - Pessoal"
git config --global user.email brenno@brenno.br
```

### Usando configurações especificas para um projeto

Reiterando, você precisará fazer isso somente uma vez se tiver usado a opção _--global_, porque então o Git usará esta informação para qualquer coisa que você fizer naquele sistema. Se você quiser substituir essa informação com nome diferente para um projeto específico, você pode rodar o comando sem a opção _--global_ dentro daquele projeto.

```bash
git config user.name "Brenno - Microsoft"
git config user.email brenno@microsoft.com
```

### Para listar todas as configurações que o Git:
```bash
git config --list
```

### Links:
- [GIT](https://git-scm.com/book/pt-br/v2/Come%C3%A7ando-Configura%C3%A7%C3%A3o-Inicial-do-Git)


#git #config #gitconfig