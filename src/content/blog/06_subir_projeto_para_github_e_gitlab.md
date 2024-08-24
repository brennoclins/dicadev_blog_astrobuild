---
title: 'Git push pro GitHub e GitLAb ao mesmo tempo'
description: 'Subir projeto para o GitHub e GitLab ao mesmo tempo'
pubDate: 'May 17 2024'
heroImage: '/blog-placeholder-3.jpg'
---


Subindo projeto para o **github** e **gitlab** com um único comando

#### Listando os repositórios remotos
```bash
git remote -v
```

#### Criando um remote chamado "all-origin", apontando para a URL do GitHub
```bash
git remote add all-origin minha-url.github
```

#### Vamos configurar o all-origin para ter várias URLs de push diferentes.
```bash
git remote set-url --add --push all-origin url.gitlab
git remote set-url --add --push all-origin url.github
```

#### Subindo projeto para os dois reposirórios
```bash
git push all-origin
```

#git #repository #github #push #add #gitlab
