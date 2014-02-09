BlinkTable.js
======================

テーブルのセルに値を設定し、セルを点滅させます。

[Demo](http://hiro20v.github.io/blinktable/)

How to use
----------
### HTML ###

    <table id="blink">
        <tbody>
            <tr>
                <th>...</th>
                <th>...</th>
            </tr>
            <tr>
                <td>...</td>
                <td>...</td>
            </tr>
        </tbody>
    </table>

tbody 必須

### JavaScript ###
    <script src="https://code.jquery.com/jquery-1.10.2.min.js"></script>
    <script src="./jquery.blinktable.js"></script>

    <script type="text/javascript">

        var blinktable = $('#blink').blinktable();
        blinktable.cellValue(0, 0, 'Value');
    </script>

Functions
---------

###blinktable.cellValue(cellIndex, rowIndex, value)

セルに値を設定。

**Parameters:**

 + cellIndex : Number
 
   行(tr)内のセル(th,td)の位置.

 + rowIndex : Number
 
   表本体(tbody)内の行(tr)の位置

 + value : String/Number
 
   セル(th,td)に設定する値.

**Returns:**

 + blinkTableJs オブジェクト.

**Example:**

	blinktable.cellValue(0, 0, 105.87);

Options
-------
    var blinktable = $('#blink').blinktable({
       	blinks:[
       		{
       			color: 'black',
       			backgroundColor: 'pink',
       			duration: 200
       		},
       		{
       			color: 'black',
       			backgroundColor: 'pink',
       			duration: 200
       		},
       		{
       			color: 'black',
       			backgroundColor: 'pink',
       			duration: 200
       		}
       	],
        interval: 200
    });

+    blinks: [...] : 点滅回数分の配列
	+ color: 'black' : 点滅の文字色
	+ backgroundColor: 'pink' : 点滅の背景色
	+ duration: 200 : 点滅の継続時間(ミリ秒)
+    interval: 200 : 点滅の間隔時間(ミリ秒)

Release History
---------------
  
+ **v0.1.0** - 2014-02-09 
   + 最初のコミット

License
-------
Copyright &copy; 2014 [hiro20v](https://github.com/hiro20v)  
Distributed under the [MIT License][mit].  

[MIT]: http://opensource.org/licenses/MIT
