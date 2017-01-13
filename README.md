# Contentus.js

Simple JS-library (without dependencies) to help fast testing elements during the development of web interfaces.

## Description (English):

TODO

## Описание (на русском):

**Contentus.js** (или для своих "Контентус", с уважением к Лебедеву и Ко) - простой инструмент, который может помочь верстальщикам и frontend-разработчикам приучить себя проверять устойчивость интерфейсов на разном контенте еще во время верстки.

####Как подключить:

В html-разметке подключите файл библиотеки:

```
<script src="js/contentus.js"></script>
```

После этого запустите контентуса с нужными вам параметрами:

```
<script>
  frontPaste.create({
    fastClass: 'myClass',
      contents: [
      'Small text for example',
      'Middle text in one line or two line for example'
    ]
  });
</script>
```

Можно подключить библиотеку без параметров, тогда будут испольваться тексты по-умолчанию.


####Как использовать:

1) В текстовом редакторе сверстайте нужный элемент и добавьте к нему временный класс `fp`.
2) После обновления страницы в браузере этот элемент будет выделен яркой рамкой и готов к быстрому тестированию.
3) Стрелками влево/вправо переключайте варианты наполнения элемента, при этот изначальное содержимое не будет потеряно (станет частью списка).
4) При необходимости выберите другой элемент для тестирования, зажав клавишу Alt (Option) и кликнув по нужному элементу.


