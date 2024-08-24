---
title: 'Convertendo videos com o FFMPEG'
description: 'Convertendo videos com o FFMPEG, via linha de comando do linux'
pubDate: 'May 13 2024'
heroImage: '/blog-placeholder-4.jpg'
---

Vamos usar o **ffmpeg** para converter um vídeo do formado AVI para o formato MKV e também vamos alterar a resolução para Full HD (1920x1080). 

Aqui está um exemplo de como você pode fazer isso:

```bash
ffmpeg -i input.avi -s 1920x1080 output.mkv
```

Links:
- [ffmpeg](https://ffmpeg.org/)
- [ffmpeg.wasm](https://ffmpegwasm.netlify.app/)



#dicadev #linux #comandline# convert #video