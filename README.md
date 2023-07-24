# Модуль 14. AJAX
<br>
<b>Задание 1</b><br><br>

Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.<br>

XML<br><br>

&lt;list&gt;<br>
  &lt;student&gt;<br>
    &lt;name lang="en"&gt;<br>
     &lt;first&gt;Ivan&lt;/first&gt;<br>
      &lt;second&gt;Ivanov&lt;/second&gt;<br>
    &lt;/name&gt;<br>
    &lt;age&gt;35&lt;/age&gt;<br>
    &lt;prof&gt;teacher&lt;/prof&gt;<br>
  &lt;/student&gt;<br>
  &lt;student&gt;<br>
    &lt;name lang="ru"&gt;<br>
      &lt;first&gt;Петр&lt;/first&gt;<br>
      &lt;second&gt;Петров&lt;/second&gt;<br>
    &lt;/name&gt;<br>
    &lt;age>58&lt;/age&gt;<br>
    &lt;prof>driver&lt;/prof&gt;<br>
  &lt;/student&gt;<br>
&lt;/list&gt;<br>
JS-объект<br><br>

{<br>
  list: [<br>
    { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },<br>
    { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },<br>
  ]<br>
}<br><br>


<b>Задание 2</b><br>
