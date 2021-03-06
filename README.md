# Contentus.js

Simple JS-library (without dependencies) to help fast testing elements during the development of web interfaces.

![contentus](https://raw.githubusercontent.com/kakRostropovich/contentus/master/contentus.gif)

## Description (English):

**Contentus.js** is a simple tool that can help designers and frontend developers to accustom themselves to test the robustness of interfaces for different content during layout.

#### Install:

Load package from npm:

```
$ npm install contentus
```

In the html attach the file library:

```
<script src="node_modules/contentus/dist/contentus.min.js"></script>
```

Then run contentus:

```
<script>
  contentus.create({
    fastClass: 'myClass', # 'ct' by default
    contents: [
      'Small text',
      'Middle text...',
      '<p>And you can add any html. <img src="cat.jpeg" alt="Cat"/><p>',
    ]
  });
</script>
```

You can connect the library without any parameters then it will use texts by default.

#### How to use:

1. In a text editor, create an HTML element and add a temporary class `ct` (or specified in the parameter fastClass when connecting libraries).
2. After a page refresh in the browser the element will be highlighted with bright frame and ready for testing.
3. left/right Arrows change the options of filling the element with that original content will not be lost (will be part of the list).
4. If necessary, select another item for testing, Alt (Option) and clicking on the desired item.

---

## Описание (на русском):

**Contentus.js** (или для своих "Контентус") - простой инструмент, который может помочь верстальщикам и frontend-разработчикам приучить себя проверять устойчивость интерфейсов на разном контенте еще во время верстки.

#### Как подключить:

Загрузите пакет из npm:

```
$ npm install contentus
```

Подключите скрипт контентуса в html:

```
<script src="node_modules/contentus/dist/contentus.min.js"></script>
```

После этого запустите контентуса с нужными вам параметрами:

```
<script>
  contentus.create({
    fastClass: 'myClass', // 'ct' по умолчанию
    contents: [
      'Короткий текст для заголовка',
      'Текст подлиннее для абзаца...',
      '<p>А еще можно добавлять любую html-разметку. <img src="cat.jpeg" alt="Cat"/><p>'
    ]
  });
</script>
```

Можно подключить библиотеку без параметров, тогда будут использоваться тексты по-умолчанию.


#### Как использовать:

1. В текстовом редакторе сверстайте нужный элемент и добавьте к нему временный класс `ct` (или указанный вами в параметре `fastClass` при подключении библиотеки).
2. После обновления страницы в браузере этот элемент будет выделен яркой рамкой и готов к быстрому тестированию.
3. Стрелками влево/вправо переключайте варианты наполнения элемента, при этот изначальное содержимое не будет потеряно (станет частью списка).
4. При необходимости выберите другой элемент для тестирования, зажав клавишу Alt (Option) и кликнув по нужному элементу.


