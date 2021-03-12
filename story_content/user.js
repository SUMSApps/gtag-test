function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xgQKbtrXUv":
        Script1();
        break;
      case "6aZua230dIu":
        Script2();
        break;
      case "5V2cKjSZnAl":
        Script3();
        break;
      case "6HBLJjRzpP7":
        Script4();
        break;
      case "6qydCRrSCSS":
        Script5();
        break;
      case "6hkT9F9zHBt":
        Script6();
        break;
      case "5Z5DcoN5bUq":
        Script7();
        break;
      case "5ZynE5Vpamz":
        Script8();
        break;
      case "5twRlakWl7a":
        Script9();
        break;
      case "62lt3jzxTsy":
        Script10();
        break;
      case "63dq1iB2j3q":
        Script11();
        break;
      case "5yW8tDFkaPb":
        Script12();
        break;
      case "6gcjKIEOPiI":
        Script13();
        break;
      case "6iTPLWYs2PK":
        Script14();
        break;
      case "6hpd6byyFJ5":
        Script15();
        break;
  }
}

function Script1()
{
  ga('send', 'screenview', {screenName: 'Welcome'});
}

function Script2()
{
  ga('send', 'screenview', {screenName: 'Screen Tracking'});
}

function Script3()
{
  ga('send', 'screenview', {screenName: 'Screen Tracking'});
}

function Script4()
{
  ga('send', 'event', 'Button', 'click', 'Test Button');
}

function Script5()
{
  ga('send', 'screenview', {screenName: 'Question 1'});
}

function Script6()
{
  ga('send', 'event', 'Question', 'incorrect', 'Question 1');
}

function Script7()
{
  ga('send', 'event', 'Question', 'correct', 'Question 1');
}

function Script8()
{
  ga('send', 'screenview', {screenName: 'Question 2'});
}

function Script9()
{
  ga('send', 'event', 'Question', 'incorrect', 'Question 2');
}

function Script10()
{
  ga('send', 'event', 'Question', 'correct', 'Question 2');
}

function Script11()
{
  ga('send', 'screenview', {screenName: 'Results'});
}

function Script12()
{
  ga('send', 'event', 'Button', 'click', 'Review Quiz');
}

function Script13()
{
  ga('send', 'event', 'Result', 'fail');
}

function Script14()
{
  ga('send', 'event', 'Result', 'pass');
}

function Script15()
{
  ga('send', 'screenview', {screenName: 'Summary'});
}

