export const WhatIsMaterialDesign = `
# 

# **Introduction**

Material Design is a design language created by Google. It was first introduced in 2014 and is now used in many Google products, such as Android, Google Drive, and Google Docs. Material Design is based on the principles of paper and ink, using shadows and depth to create a hierarchy of elements. The goal of Material Design is to create a consistent look and feel across all devices and platforms.

# **Material Design Components**

Material Design provides a set of components that can be used to create user interfaces. These components are designed to work well together and to follow the principles of Material Design. Here are some examples of Material Design components:

## **Buttons**

Buttons are a common user interface element. Material Design provides a set of button styles that can be used to create consistent buttons throughout your application. Here is an example:

\`\`\`html
<button class="mdc-button">
  Click Me
</button>
\`\`\`
![https://www.wikitechy.com/tutorials/material-design-lite/img/material-design-lite-images/material-design-lite-buttons.gif](https://www.wikitechy.com/tutorials/material-design-lite/img/material-design-lite-images/material-design-lite-buttons.gif)

## **Cards**

Cards are a way to group related information together. Material Design provides a card component that can be used to create consistent cards throughout your application. Here is an example:

\`\`\`html
<div class="mdc-card">
  <div class="mdc-card__primary-action">
    <div class="mdc-card__media mdc-card__media--square">
      <div class="mdc-card__media-content">Image</div>
    </div>
    <div class="mdc-card__primary">
      <h2 class="mdc-card__title mdc-card__title--large">Card Title</h2>
      <h3 class="mdc-card__subtitle">Card Subtitle</h3>
    </div>
  </div>
  <div class="mdc-card__actions">
    <button class="mdc-button mdc-card__action mdc-card__action--button">Action 1</button>
    <button class="mdc-button mdc-card__action mdc-card__action--button">Action 2</button>
  </div>
</div>
\`\`\`

![https://i1.wp.com/codemyui.com/wp-content/uploads/2016/11/the-fancy-article-card.gif?fit=880%2C440&ssl=1](https://i1.wp.com/codemyui.com/wp-content/uploads/2016/11/the-fancy-article-card.gif?fit=880%2C440&ssl=1)

## **Dialogs**

Dialogs are a way to display information or prompt the user for input. Material Design provides a dialog component that can be used to create consistent dialogs throughout your application. Here is an example:

\`\`\`html
<div class="mdc-dialog">
  <div class="mdc-dialog__surface">
    <h2 class="mdc-dialog__title">Dialog Title</h2>
    <div class="mdc-dialog__content">
      Dialog content goes here.
    </div>
    <div class="mdc-dialog__actions">
      <button class="mdc-button mdc-dialog__button">Cancel</button>
      <button class="mdc-button mdc-dialog__button">OK</button>
    </div>
  </div>
  <div class="mdc-dialog__scrim"></div>
</div>
\`\`\`
![https://i.stack.imgur.com/3DWz5.gif](https://i.stack.imgur.com/3DWz5.gif)

## **Forms**

Forms are a way to collect information from the user. Material Design provides a set of form components that can be used to create consistent forms throughout your application. Here is an example:

\`\`\`html
<form class="mdc-form">
  <div class="mdc-form-field">
    <div class="mdc-text-field">
      <input type="text" class="mdc-text-field__input" id="my-input">
      <label class="mdc-floating-label" for="my-input">Label</label>
      <div class="mdc-line-ripple"></div>
    </div>
  </div>
  <button class="mdc-button">Submit</button>
</form>
\`\`\`
![https://wdrfree.com/public/blog/material_design_form_1.gif](https://wdrfree.com/public/blog/material_design_form_1.gif)
## **Icons**

Icons are an important part of any user interface. Material Design provides a set of icons that can be used to create consistent icons throughout your application. Here is an example:

\`\`\`html
<i class="material-icons">favorite</i>
\`\`\`

![https://th.bing.com/th/id/R.90c854f1a8fb36c402ebaad1eb78e0a6?rik=pEnlhg9qkUu3Mg&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.90c854f1a8fb36c402ebaad1eb78e0a6?rik=pEnlhg9qkUu3Mg&pid=ImgRaw&r=0)

## **Lists**

Lists are a way to display a set of related items. Material Design provides a set of list components that can be used to create consistent lists throughout your application. Here is an example:

\`\`\`html
<ul class="mdc-list">
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 1</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 2</span>
  </li>
  <li class="mdc-list-item">
    <span class="mdc-list-item__text">Item 3</span>
  </li>
</ul>
\`\`\`

![https://th.bing.com/th/id/R.e76c102b86e2cc92c2b1ee1efd21012b?rik=1WuHxkyCymqDtQ&riu=http%3a%2f%2fmaterialdesignblog.com%2fwp-content%2fuploads%2f2015%2f03%2funtitled-1.gif&ehk=5%2f0yF4Z8hG78w0SyLlI%2fn%2fjUK8VkRbKlU%2bUOuaLOkms%3d&risl=&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.e76c102b86e2cc92c2b1ee1efd21012b?rik=1WuHxkyCymqDtQ&riu=http%3a%2f%2fmaterialdesignblog.com%2fwp-content%2fuploads%2f2015%2f03%2funtitled-1.gif&ehk=5%2f0yF4Z8hG78w0SyLlI%2fn%2fjUK8VkRbKlU%2bUOuaLOkms%3d&risl=&pid=ImgRaw&r=0)

## **Navigation**

Navigation is an important part of any user interface. Material Design provides a set of navigation components that can be used to create consistent navigation throughout your application. Here is an example:

\`\`\`html
<nav class="mdc-tab-bar">
  <a class="mdc-tab mdc-tab--active" href="#tab1">Tab 1</a>
  <a class="mdc-tab" href="#tab2">Tab 2</a>
  <a class="mdc-tab" href="#tab3">Tab 3</a>
</nav>
\`\`\`
![https://th.bing.com/th/id/R.eb3df03677c1297506db2b91bfc1226a?rik=ddSJgNGxHk2jyA&pid=ImgRaw&r=0](https://th.bing.com/th/id/R.eb3df03677c1297506db2b91bfc1226a?rik=ddSJgNGxHk2jyA&pid=ImgRaw&r=0)


# **Material Design Guidelines**

Material Design also provides guidelines for how to use the components to create a consistent user interface. Here are some examples of Material Design guidelines:

## **Color**

Material Design uses a specific color palette to create a consistent look and feel. The palette includes primary, secondary, and accent colors, as well as neutrals. Here is an example of the color palette:

![Color palette](https://th.bing.com/th/id/OIP.gRhE8TSblGx2g6epSKBDtAHaDP?pid=ImgDet&rs=1 "Material Design Color Palette")




## **Typography**

Material Design uses a specific typography to create a consistent look and feel. The typography includes font families, font weights, and font sizes. Here is an example of the typography:


![Example of Typography](https://th.bing.com/th/id/R.595329ed98db01dcb81dc02c8d8a4069?rik=kQzED9WrmXt2Yg&riu=http%3a%2f%2fmaterialdesignblog.com%2fwp-content%2fuploads%2f2015%2f03%2fmaterial-design-typography-css.png&ehk=YgQxa16ufLPy%2fY7nSMffDGMUK3JzJJz1Xw%2bWxYTpcA8%3d&risl=&pid=ImgRaw&r=0)




## **Layout**

Material Design uses a specific layout to create a consistent look and feel. The layout includes spacing, grids, and breakpoints. Here is an example of the layout:
![Example of Layout](https://lh3.googleusercontent.com/fJnQ8B_4e5e4OEtHH4LvEvbJvP0Hgb6P0U0wAeNMVZC08igFrDjyLp2LOKnKLd_1CcMqabmeJ2Ym9rNrJ03X_GNOrTjw_X_s7jtBxDF7zGY=s0)


# **Conclusion**

Material Design is a powerful design language that can be used to create consistent and beautiful user interfaces. By using the components and guidelines provided by Material Design, you can create a user interface that looks and feels like it was designed by Google. If you're interested in learning more about Material Design, I recommend checking out the official Material Design website (**[https://material.io/design/](https://material.io/design/)**) and the Material Design Components for the Web documentation (**[https://material.io/components/web/](https://material.io/components/web/)**).
`;
