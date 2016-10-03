var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Chapters = {
 ChapterOne:{
     heading:'Chapter One',
     title:'Chapter 1',
     home:`<a href="http://viswanath11.imad.hasura-app.io/">
        Goto Home! 		
        </a>`,
     link:`<p>		
        P.S  Rest of the story continued on 
        <a href="http://viswanath11.imad.hasura-app.io/ChapterTwo">
        ChapterTwo
        </a>
        </p>`,
     content:
     `<p>
     I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!		
</p>
<p>
I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!
</p>
<p>I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!I was born on August 11th, a Tuesday!
</p>`
 }
};

var htmlcasing ={
  
  <html>		
    <head>		
        <h1>
        ${heading}
        </h1>
<link href="/ui/style.css" rel="stylesheet"/>
	<Title>
	   ${title}
	   <link href="/ui/style.css rel="stylesheet"/>
	</Title>
    </head>		
    <body>		
        <div class=home> 		
        ${home}
        </div>		
        <div class=center text-big bold>		
        ${content}
        </div>		
        <br>		
        ${link}
    </body>		
</html>

    
};


app.get('/ChapterOne', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ChapterOne.html'));
});

app.get('/ChapterTwo', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ChapterTwo.html'));
});

app.get('/ChapterThree', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'ChapterThree.html'));
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
