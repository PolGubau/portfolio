export const Catalan = `# **Introducció**

Material Design és un llenguatge de disseny creat per Google. Es va presentar per primera vegada el 2014 i ara s'utilitza en molts productes de Google, com Android, Google Drive i Google Docs. El disseny de materials es basa en els principis del paper i la tinta, utilitzant ombres i profunditat per crear una jerarquia d'elements. L'objectiu de Material Design és crear un aspecte i una sensació coherents a tots els dispositius i plataformes.

# **Components de disseny de materials**

Material Design proporciona un conjunt de components que es poden utilitzar per crear interfícies d'usuari. Aquests components estan dissenyats per funcionar bé junts i per seguir els principis del disseny de materials. Aquests són alguns exemples de components de Material Design:

## **Botons**

Els botons són un element comú de la interfície d'usuari. Material Design proporciona un conjunt d'estils de botons que es poden utilitzar per crear botons coherents a tota l'aplicació. Aquí teniu un exemple:

\`\`\`html
<button class="mdc-button">
   Feu clic a mi
</button>
\`\`\`

![https://www.wikitechy.com/tutorials/material-design-lite/img/material-design-lite-images/material-design-lite-buttons.gif](https://www.wikitechy.com /tutorials/material-design-lite/img/material-design-lite-images/material-design-lite-buttons.gif)

## **Targetes**

Les targetes són una manera d'agrupar la informació relacionada. Material Design proporciona un component de targeta que es pot utilitzar per crear targetes coherents a tota la vostra aplicació. Aquí teniu un exemple:

\`\`\`html
<div class="mdc-card">
   <div class="mdc-card__primary-action">
     <div class="mdc-card__media mdc-card__media--square">
       <div class="mdc-card__media-content">Imatge</div>
     </div>
     <div class="mdc-card__primary">
       <h2 class="mdc-card__title mdc-card__title--large">Títol de la targeta</h2>
       <h3 class="mdc-card__subtitle">Subtítol de la targeta</h3>
     </div>
   </div>
   <div class="mdc-card__actions">
     <button class="mdc-button mdc-card__action mdc-card__action--button">Acció 1</button>
     <button class="mdc-button mdc-card__action mdc-card__action--button">Acció 2</button>
   </div>
</div>
\`\`\`

![https://i1.wp.com/codemyui.com/wp-content/uploads/2016/11/the-fancy-article-card.gif?fit=880%2C440&ssl=1](https://i1 .wp.com/codemyui.com/wp-content/uploads/2016/11/the-fancy-article-card.gif?fit=880%2C440&ssl=1)

## **Diàlegs**

Els diàlegs són una manera de mostrar informació o demanar a l'usuari que introdueixi informació. Material Design proporciona un component de diàleg que es pot utilitzar per crear diàlegs coherents a tota l'aplicació. Aquí teniu un exemple:

\`\`\`html
<div class="mdc-dialog">
   <div class="mdc-dialog__surface">
     <h2 class="mdc-dialog__title">Títol del diàleg</h2>
     <div class="mdc-dialog__content">
       El contingut del diàleg va aquí.
     </div>
     <div class="mdc-dialog__actions">
       <button class="mdc-button mdc-dialog__button">Cancel·la</button>
       <button class="mdc-button mdc-dialog__button">D'acord</button>
     </div>
   </div>
   <div class="mdc-dialog__scrim"></div>
</div>
\`\`\`
![https://i.stack.imgur.com/3DWz5.gif](https://i.stack.imgur.com/3DWz5.gif)

## **Formes**

Els formularis són una manera de recollir informació de l'usuari. Material Design proporciona un conjunt de components de formularis que es poden utilitzar per crear formularis coherents a tota la vostra aplicació. Aquí teniu un exemple:

\`\`\`html
<form class="mdc-form">
   <div class="mdc-form-field">
     <div class="mdc-text-field">
       <input type="text" class="mdc-text-field__input" id="my-input">
       <label class="mdc-floating-label" for="my-input">Etiqueta</label>
       <div class="mdc-line-ripple"></div>
     </div>
   </div>
   <button class="mdc-button">Envia</button>
</form>
\`\`\`
![https://wdrfree.com/public/blog/material_design_form_1.gif](https://wdrfree.com/public/blog/material_design_form_1.gif)
## **Icones**

Les icones són una part important de qualsevol interfície d'usuari. Material Design proporciona un conjunt d'icones que es poden utilitzar per crear icones coherents a tota la vostra aplicació. Aquí teniu un exemple:

\`\`\`html
<i class="material-icons">preferit</i>
\`\`\`

![https://th.bing.com/th/id/R.90c854f1a8fb36c402ebaad1eb78e0a6?rik=pEnlhg9qkUu3Mg&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.90c854f1a8fb36c402ebaad1eb78e0a6?rik=pEnlhg9qkUu3Mg&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.90c854f1a8fb36c402ebaad1eb78e0a6?rik=pEnlhg9qkUu3Mg? =ImgRaw&r=0)

## **Llistes**

Les llistes són una manera de mostrar un conjunt d'elements relacionats. Material Design proporciona un conjunt de components de llista que es poden utilitzar per crear llistes coherents a tota la vostra aplicació. Aquí teniu un exemple:

\`\`\`html
<ul class="mdc-list">
   <li class="mdc-list-item">
     <span class="mdc-list-item__text">Element 1</span>
   </li>
   <li class="mdc-list-item">
     <span class="mdc-list-item__text">Element 2</span>
   </li>
   <li class="mdc-list-item">
     <span class="mdc-list-item__text">Element 3</span>
   </li>
</ul>
\`\`\`

![https://th.bing.com/th/id/R.e76c102b86e2cc92c2b1ee1efd21012b?rik=1WuHxkyCymqDtQ&riu=http%3a%2f%2fmaterialdesignblog.com%2fwp-content%2fuploads%2fuploads1%2f2f01%2f2f01%2f2f01%2f2f01%2f2f0. 5%2f0yF4Z8hG78w0SyLlI%2fn%2fjUK8VkRbKlU%2bUOuaLOkms%3d&risl=&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.e76c102b86e2cce92b86e2cce9d21012b?rik=1WuHxkyCymqDtQ&riu=http%3a%2f%2fmaterialdesignblog.com%2fwp-content%2fuploads%2f2015%2f03%2funtitled-1.gif&ehk=5%2f0yF4Z8hG78w0SyLlI%2fn%2fjUK8VkRbKlU%2bUOuaLOkms%3d&risl=&pid=ImgRaw&r=0)



## **Navegació**

La navegació és una part important de qualsevol interfície d'usuari. Material Design proporciona un conjunt de components de navegació que es poden utilitzar per crear una navegació coherent a tota la vostra aplicació. Aquí teniu un exemple:

\`\`\`html
<nav class="mdc-tab-bar">
   <a class="mdc-tab mdc-tab--active" href="#tab1">Pestaña 1</a>
   <a class="mdc-tab" href="#tab2">Pestaña 2</a>
   <a class="mdc-tab" href="#tab3">Pestaña 3</a>
</nav>
\`\`\`
![https://th.bing.com/th/id/R.eb3df03677c1297506db2b91bfc1226a?rik=ddSJgNGxHk2jyA&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.eb91bfc1226a?rik=ddSJgNGxHk2jyA&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.eb91bfc1226a? =ImgRaw&r=0)


# **Directrius de disseny de materials**

Material Design també ofereix directrius sobre com utilitzar els components per crear una interfície d'usuari coherent. Aquests són alguns exemples de directrius de disseny de materials:

## **Color**

El disseny de materials utilitza una paleta de colors específica per crear un aspecte i una sensació coherents. La paleta inclou colors primaris, secundaris i d'accent, així com neutres. Aquí teniu un exemple de la paleta de colors:

![Paleta de colors](https://th.bing.com/th/id/OIP.gRhE8TSblGx2g6epSKBDtAHaDP?pid=ImgDet&rs=1 "Paleta de colors de disseny de materials")




## **Tipografia**

Material Design utilitza una tipografia específica per crear un aspecte i una sensació coherents. La tipografia inclou famílies de tipus de lletra, pesos i mides de lletra. Aquí teniu un exemple de la tipografia:


![Exemple de tipografia](https://th.bing.com/th/id/R.595329ed98db01dcb81dc02c8d8a4069?rik=kQzED9WrmXt2Yg&riu=http%3a%2f%2fmaterialdesignblog.com%2fmaterialdesignblog.com%constent2fwp3%2fmaterial%2fwp3%2fwp02fwp3 -design-typography-css.png&ehk=YgQxa16ufLPy%2fY7nSMffDGMUK3JzJJz1Xw%2bWxYTpcA8%3d&risl=&pid=ImgRaw&r=0)




## **Disposició**

El disseny de materials utilitza un disseny específic per crear un aspecte coherent. El disseny inclou espais, quadrícules i punts d'interrupció. Aquí teniu un exemple de la disposició:
![Exemple de maquetació](https://lh3.googleusercontent.com/fJnQ8B_4e5e4OEtHH4LvEvbJvP0Hgb6P0U0wAeNMVZC08igFrDjyLp2LOKnKLd_1CcMqabmeJ2YrDJ0J2YM9XNMVZC08igFrDjyLp2LOKnKLd_1CcMqabmeJ2YrDJ0J2Ym9XGJ09XNVJ09XNMVZC08gFrDjyLp2LOKnKLd_1CcMqabmeJ2YrDJ0J20J09XGJ0J09XNJ00J2Y


# **Conclusió**

Material Design és un llenguatge de disseny potent que es pot utilitzar per crear interfícies d'usuari coherents i boniques. Mitjançant els components i les directrius proporcionats per Material Design, podeu crear una interfície d'usuari que sembli i sembli com si fos dissenyada per Google. Si esteu interessats a obtenir més informació sobre Material Design, us recomano que consulteu el lloc web oficial de Material Design (**[https://material.io/design/](https://material.io/design/)**) ) i els components de disseny de materials per a la documentació web (**[https://material.io/components/web/](https://material.io/components/web/)**).
`;
