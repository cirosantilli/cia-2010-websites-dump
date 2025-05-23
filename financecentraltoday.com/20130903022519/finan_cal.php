<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>www.financecentraltoday.com / CALCULATOR</title>
<br />
<base target="_blank">
<meta name="keywords" content="" />
<meta name="description" content="" /><br />
<script language='Javascript'>

//DO NOT REMOVE THIS COPYWRITE INFO!
//Debt Investment Calculator
//By Daniel C. Peterson
//Web Winder Website Services, 1997-2007  All Rights Reserved.
//Distribution, editing or reselling of this script is strictyly prohibited
//without expressed written permission from Daniel C. Peterson.
//For commercial grade (professional) versions of this and many other
//calculators, visit http://www.webwinder.com.

function computeForm(form) {

var i = form.interest.value;

    if (i >= 1.0) {

        i = i / 100.0;

        form.interest.value = i;

    }

     i /= 12;


   var prin1 = eval(form.principal.value);

   var prin2 = eval(form.principal.value);

   var pmt1 = form.origPmt.value;

   var pmt2 = eval(form.origPmt.value) + eval(form.pmtAdd.value);

   var prinPort1 = 0;

   var prinPort2 = 0;

   var intPort1 = 0;

   var intPort2 = 0;

   var count1 = 0;

   var count2 = 0;

  var accumInt1 = 0;
  var accumInt2 = 0;
    
   while(prin1 > 0) {
                    intPort1 = eval(i * prin1);
                    accumInt1 = eval(accumInt1) + eval(intPort1);
                    prinPort1 = eval(pmt1 - intPort1);
                    prin1 = eval(prin1 - prinPort1);
                    count1 = count1 + 1
                    if(count1 > 600) { break; } else { continue;}
                    }

   while(prin2 > 0) {
                    intPort2 = eval(i * prin2);
                    accumInt2 = eval(accumInt2) + eval(intPort2);
                    prinPort2 = eval(pmt2 - intPort2);
                    prin2 = eval(prin2 - prinPort2);
                    count2 = count2 + 1
                    if(count2 > 600) { break; } else { continue;}
                    }

      form.intSave.value = eval(accumInt1) - eval(accumInt2);
      form.roi.value = (form.intSave.value / (count2 * form.pmtAdd.value)) / (count2 / 12);

     var timSave = eval(count1) - eval(count2);

      form.results.value = ("If you add $" + form.pmtAdd.value + " to your monthly payment, you will pay off this debt in " + count2 + " payments instead of " + count1 + ", and you will save $" + parseInt(form.intSave.value,10) + " in interest charges.  This savings translates into a guaranteed, tax-free, average annual return of " + parseInt(form.roi.value * 100,10) + "%.  And that's not even considering the emotional returns you'll get when you pay off this debt " + timSave + "-months (" + parseInt(timSave /12,10) + " years, " + (timSave %12) + " months) ahead of schedule!");
}



function clearForm(form)

{

    form.principal.value = "";

    form.interest.value = "";

    form.origPmt.value = "";

    form.pmtAdd.value = "";

    form.intSave.value = "";

    form.roi.value = "";

    form.results.value = "";
}

</script>

<link href="finance.css" rel="stylesheet" type="text/css" />
<style type="text/css">
<!--
body {
	background-image: url(images/back3.jpg);
	background-color: #F2E1B6;
	background-repeat: repeat-x;
}
body,td,th {
	font-family: "Times New Roman", Times, serif;
	font-size: 11px;
}
.style1 {color: #FFFFFF}
.style3 {color: #FFFFFF; font-size: 9px; }
a {
	font-weight: bold;
}
a:visited {
	color: #000000;
}
a:hover {
	color: #F2E1B6;
}
a:active {
	color: #000000;
}
.style4 {
	font-size: 12px;
	font-weight: bold;
}
.style5 {
	font-size: 9px;
	font-style: italic;
}
.foo {border: 2px; border-color:#000000; }
-->
</style>
</head>
<body>
<div id="menu">
	<ul>
			<li><a href="index.php" title="" target="_parent" accesskey="1">NEWS</a></li>
		<li><a href="finan_ser.php" title="" target="_parent" accesskey="2">SERVICES</a></li>
		<li><a href="finan_com.php" title="" target="_parent" accesskey="3">COMPANIES</a></li>
		<li><a href="finan_ezi.php" title="" target="_parent" accesskey="4">E-ZINES</a></li>
		<li><a href="finan_lin.php" title="" target="_parent" accesskey="5">LINKS</a></li>
		<li><a href="finan_cal.php" title="" target="_parent" accesskey="5">CALCULATOR</a
></li>
	</ul>
</div>
<div id="content">
	<div><img src="images/investuae.jpg" alt="" width="780" height="284" /></div>
  <div id="colOne">
	  <h2 class="style1">INVESTMENT CALCULATOR </h2>
	  <form method="POST">
<table BORDER="1" CELLSPACING="0" CELLPADDING="4">

<tr>
<td align="center" COLSPAN="6">
<font face='arial'><big><strong>Debt Investment Calculator</strong></big></font>
</td>
</tr>

<tr>
<td COLSPAN="6">
<font face='arial'><small>Before you go throwing darts on Wall Street, check to make
sure you can't earn a higher rate of return simply by investing in your own debt! For
example, if you have a credit card balance that's costing you 19% per year, and you
increase your payment, you will get a <u>guaranteed</u> 19% return on your investment.
What's more, your earnings will be tax-free! So use this JavaScript Calculator to see how
much you could be earning if you increased your payment on any one of your debts.</small></font>
<p><font face='tahoma,arial'><small><strong> Instructions: </strong></small><font> <font face='arial'><small>Enter the current payment terms for any one of your outstanding debts,
then enter an amount you could comfortably add to the payment. Finally, click on
"Compute" to see what the return on your investment will be.</small></font>
</td>
</tr>

<tr>
<td align="center"><font face='tahoma,arial'><small><strong>Principal<br>Balance<br>Owed</strong></small><font></td>
<td align="center"><font face='tahoma,arial'><small><strong>Annual<br>Interest<br>Rate</strong></small><font></td>
<td align="center"><font face='tahoma,arial'><small><strong>Current<br>Monthly<br>Payment</strong></small><font></td>
<td align="center"><font face='tahoma,arial'><small><strong>Additional<br>Monthly<br>Payment</strong></small><font></td>
<td align="center"><font face='tahoma,arial'><small><strong>Interest<br>Savings</strong></small><font></td>
<td align="center"><font face='tahoma,arial'><small><strong>Annual<br>Return on<br>Investment</strong></small><font></td>
</tr>

<tr>
<td align="center"><input TYPE="TEXT" NAME="principal" SIZE="9"></td>
<td align="center"><input TYPE="TEXT" NAME="interest" SIZE="9"></td>
<td align="center"><input TYPE="TEXT" NAME="origPmt" SIZE="6"></td>
<td align="center"><input TYPE="TEXT" NAME="pmtAdd" SIZE="5"></td>
<td align="center"><input TYPE="TEXT" NAME="intSave" SIZE="9"></td>
<td align="center"><input TYPE="TEXT" NAME="roi" SIZE="9"></td>
</TR>
<TR>
<td COLSPAN="3" ALIGN="RIGHT"><input TYPE="button" VALUE="Compute" onClick="computeForm(this.form)"></td>
<td COLSPAN="3" ALIGN="LEFT"><input TYPE="reset" VALUE="Reset" onClick="clearForm(this.form)"></td>
</tr>
<tr>
<td align="center" COLSPAN="6"><textarea COLS="60" ROWS="7" name="results" wrap="virtual"></textarea></td>
</tr>

<tr>
<td align="center" COLSPAN="6"><font face='tahoma,arial'><small><small>Copyright © 1997-2007<i> <a href='http://www.webwinder.com'>Web Winder Site Traffic Magnets</a></i>. All rights reserved.</small></small></font></td>
</tr>
</table>
</form>
&nbsp;</p>
  </div>

  <div id="colTwo">
		<h2>&nbsp;</h2>


    <p><a href="http://www.mutualfundsbusiness.com/" target="_blank"><img src="images/pg6/MFB.jpg" alt="Mutual Funds Business" width="145" height="70" class="foo" longdesc="http://www.mutualfundsbusiness.com/" /></a><br />
	    <br />
    <a href="http://www.economicscenario.com/" target="_blank"><img src="images/pg6/ES.jpg" alt="Economic Scenerio" width="145" height="70" class="foo" longdesc="http://www.economicscenario.com/" /></a><br />
	    <br />
    <a href="http://www.worldbankruptcy.com/" target="_blank"><img src="images/pg6/WB.jpg" alt="World Bankruptcy" width="145" height="70" class="foo" longdesc="http://www.worldbankruptcy.com/" /></a></p>
    <p><a href="http://www.worldfairtrade.com/" target="_blank"><img src="images/pg6/WFT.jpg" alt="World Fair Trade" width="145" height="70" class="foo" longdesc="http://www.worldfairtrade.com" /></a><br />
    </p>
    <h2>&nbsp;</h2>
	  <p>&nbsp;</p>
		<p><br />
		</p>
  </div>
  <div style="clear: both;"><br />
  &nbsp;</div>
</div>
<div id="footer">
  <p class="style1"><span class="style3">&copy; 2008 FINANCECENTRALTODAY.COM. All Rights Reserved.</span><br />
  </p>
</div>
</body>
</html>
