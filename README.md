<h1 align="center">My Input Component</h1>

<div align="center">
   Solution for a challenge from  <a href="http://devchallenges.io" target="_blank">Devchallenges.io</a>.
</div>

<div align="center">
  <h3>
    <a href="https://eugene0m.github.io/input-component/">
      Demo
    </a>
    <span> | </span>
    <a href="https://github.com/eugene0m/input-component/blob/main/main.js">
      Solution
    </a>
    <span> | </span>
    <a href="https://devchallenges.io/challenges/TSqutYM4c5WtluM7QzGp">
      Challenge
    </a>
  </h3>
</div>

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Overview](#overview)
  - [Built With](#built-with)
- [Features](#features)
- [How to use](#how-to-use)
- [Contact](#contact)

<!-- OVERVIEW -->

## Overview

### Requires [VueJS](https://vue3-fr.netlify.app/guide/installation.html#cdn)
``<script src="https://unpkg.com/vue@next"></script>``



![screenshot](https://i.imgur.com/J0VDEKU.png)

Same as my [Button Component](https://github.com/eugene0m/button-component) but with Inputs.

It is a component that produces an input with various properties.

This includes the possibility to add an icon before and after the input field, or to choose its size, its color, or to choose to make it a textarea with the number of lines or not for example, or simply to disable it...

Also, a dynamic text field automatically matches the properties chosen in the input component, for example :

```javascript
<InputCpt startIcon="phone" error></InputCpt>
```
The text field (span) above this input will be the following:
```
<Input startIcon="phone" error />
```

In detail with this component you can :

- See error state
- Choose to disable input
- Choose to have helper text
- Choose to have an icon on the left or right
- Have different input sizes
- Have different colors
- Choose to have input take the width of the parent
- Have multiline input like a textarea
- When you hover or focus, you can see visual indicators
- You can still access all input attributes

### Built With

- [Vue.js](https://vuejs.org/)
- HTML/CSS
- [Google Material Icons](https://google.github.io/material-design-icons/)

## Features

This application/site was created as a submission to a [DevChallenges](https://devchallenges.io/challenges) challenge. The [challenge](https://devchallenges.io/challenges/TSqutYM4c5WtluM7QzGp) was to build an application to complete the given user stories.

## How To Use

The component is contained in a single JS file as well as the style and its own input classes.

You just have to clone the repo and include the file ``main.js`` in your own ``index.html`` or other (you can also keep the basic index.html)

```bash
# Clone this repository
$ git clone https://github.com/eugene0m/input-component.git
```

Finally you can call the component via the ``<InputCpt />`` tag, for example :

```html
<InputCpt helperText="Some interesting text"></InputCpt>
```

This will give:

![inputscreenshoot](https://i.imgur.com/UoGoUeP.png)

Here is the list of props of the component:

- **error** which gives the error status to the input
- **disabled** which disables the input
- **helpertext** which receives a text value and adds a small text below the input
- **starticon** which receives as value a google icon (see google website) on the left of the input
- **endicon** which receives as value a google icon (see the google website) on the right of the input
- **value** which receives a text value and modifies the html value of the field
- **size** which receives `sm` or `md` and gives a certain size to the input
- **fullwidth** which gives the input a size that takes 100% of the width of the parent div
- **multiline** & **row** which changes the input to a textarea field, you can also choose the number of lines with **row** (optional)

## Contact

- GitHub [@eugene0m](https://github.com/eugene0m)
