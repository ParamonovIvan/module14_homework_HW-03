# Модуль 14. AJAX
<br>
<b>Задание 1</b><br><br>

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.<br>

XML<br>

&lt;list&gt;<br>
  &nbsp;&nbsp;&lt;student&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;name lang="en"&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;first&gt;Ivan&lt;/first&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;second&gt;Ivanov&lt;/second&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/name&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;age&gt;35&lt;/age&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;prof&gt;teacher&lt;/prof&gt;<br>
  &nbsp;&nbsp; &lt;/student&gt;<br>
  &nbsp;&nbsp; &lt;student&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;name lang="ru"&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;first&gt;Петр&lt;/first&gt;<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &lt;second&gt;Петров&lt;/second&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;/name&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;age>58&lt;/age&gt;<br>
    &nbsp;&nbsp;&nbsp;&nbsp; &lt;prof>driver&lt;/prof&gt;<br>
  &nbsp;&nbsp; &lt;/student&gt;<br>
&lt;/list&gt;<br><br>

JS-объект<br>

{<br>
&nbsp;&nbsp; list: &#91;<br>
&nbsp;&nbsp;&nbsp;&nbsp; { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },<br>
&nbsp;&nbsp;&nbsp;&nbsp; { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },<br>
&nbsp;&nbsp; &#93;<br>
}<br><br>


<b>Задание 2</b><br>

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

JSON<br>

{<br>
&nbsp;&nbsp; "list": &#91;<br>
&nbsp;&nbsp;&nbsp;&nbsp; {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "name": "Petr",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "age": "20",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "prof": "mechanic"<br>
&nbsp;&nbsp;&nbsp;&nbsp; },<br>
&nbsp;&nbsp;&nbsp;&nbsp; {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "name": "Vova",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "age": "60",<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; "prof": "pilot"<br>
&nbsp;&nbsp;&nbsp;&nbsp; }<br>
&nbsp;&nbsp; &#93;<br>
}<br><br>

JS-объект<br>

{<br>
&nbsp;&nbsp; list: &#91;<br>
&nbsp;&nbsp;&nbsp;&nbsp; { name: 'Petr', age: 20, prof: 'mechanic' },<br>
&nbsp;&nbsp;&nbsp;&nbsp; { name: 'Vova', age: 60, prof: 'pilot' },<br>
&nbsp;&nbsp; &#93;<br>
}<br><br>

<b>Задание 3</b><br>

Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:<br>

Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».<br>
Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.<br>
Пример. Если пользователь ввёл 5, то запрос будет вида: https://picsum.photos/v2/list?limit=5.<br>
После получения данных вывести ниже картинки на экран.<br><br>

<b>Задание 4</b><br>

