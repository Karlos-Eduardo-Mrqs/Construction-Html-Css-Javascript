# Musical and visual media
Today we will learn how to manipulate video, audio and image files within our pages. Let's go .
# Image
**Starting with the image file, we use the `` <img/> `` tag. Together with it, we have the main attributes**:
- **src:** Defines the name of the file/image that will be used;
- **width:** Width of Pixels that the image will have, that is, its thickness;
- **height:** Pixel height that the image will have, that is, its height;
- **title:** It has the function of displaying an explanatory text, saying what was supposed to be shown, For example:
![ExemploImg](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/eb3d3b19-4512-4c87-a3d5-665444783f9c)
## Image Types
In image types, we have **"JPEG, JPG, SVG, PNG, BMP"** and other formats.
- [Enter the link below to find out the other formats](https://www.futuraexpress.com.br/blog/formatos-de-imagem/)
## Image References and Tips 
When developing larger projects, we have "some difficulty" in finding images, especially for Design. Just ahead, we have three links reliable for you to search for: 
- [icons](https://www.flaticon.com/br/);
- [images SVG](https://www.w3schools.com/graphics/svg_reference.asp);
- [images-and-icons](https://fontawesome.com/);

## Anchors and images
You can use images in a set of anchors (**You can cite someone or an article through the image. Same as the images.html file**), below is the structure:

```
<a href="https://www.youtube.com/@alanzoka/videos" title="Canal Do Alanzoka" target="_blank">
        <img src="im.jpg" width="350" alt="Imagem Do Alanzoka" />
</a>
```

# Music 
In terms of handling audio, music and related materials. We use the ``<audio> </audio> `` TAG, just like images, it needs some attributes such as:
- **controls:** Defines the start, pause, download controls... In other words, interaction controls;
- **src:** Same function in the images, with the difference of defining the audio that will be used;
- **type:** The file type/file type. Example: "audio/mp3";
## Types of audio files
The best known is undoubtedly **"MP3"**. Final Structure:``  <audio controls src="e-o-pix-nada-ainda.mp3" type="audio/mp3"> ``
- [However, there are other types of files in the link fixed here](https://frahm.com.br/formatos-de-audio/) .
# Videos 
Finishing with the manipulation of videos, gifs and related items. We use the ``<video> </video>`` tag, just like images and audio, it needs some attributes such as:
- **controls:** Defines the start, pause, download controls... That is, interaction controls;
- **src:** Same function in audios, with the difference of defining the video that will be used;
- **type:** The file type/file type. Example: "viedo/mp4";
- **width:** Width of Pixels that the video will have, that is, its thickness;
- **height:** Pixel height that the video will have, that is, its height;
## Video File Types
The best known is undoubtedly **"MP4"**.Final Structure:`` <video controls src="ApertouOPlay.mp4" type="video/mp4" width="1024" height="768"> </video> ``.
- [However, there are other types of files in the link fixed here]([https://frahm.com.br/formatos-de-audio/](https://mailchimp.com/pt-br/resources/video-formats/))
## Other related tags 
There is another way for you to use videos within HTML. Using the tags `` <iframe> </iframe> AND <embled> </embled> ``.
### Embled
![ExemploVideoEmbled](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/4d08bf9b-0d9a-4f04-8d6d-e857d85fbbc8)

Just above, the tag **EMBLED** was used. Which is not used as much, due to its black box around the video and not allowing full screen. Furthermore, its control buttons are small, making interaction **"difficult" and visually "ugly"**.
### Iframe
![ExemploIframe](https://github.com/Karlos-Eduardo-Mrqs/Construcao-Html-Css-Javascript/assets/172524894/91d691cc-bc65-42ad-bfe9-8a806ff229f9)

Above we used the **IFRAME** tag. Which is most used, where even on Youtube, you can get this Iframe. Follow step by step:
1. Enter YouTube;
2. Choose Video;
3. Click Share And Then Embed;
4. Copy The Iframe Code And That's It;
5. "CTRL+C ON YOUTUBE AND CTRL+V ON VISUAL STUDIO"**;