var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var Chapters = {
    
 'ChapterOne':{
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
 },
 'ChapterTwo':{
     heading:'Chapter Two',
     title:'Chapter 2',
     home:`<a href="http://viswanath11.imad.hasura-app.io/">
        Goto Home! 		
        </a>`,
     link:`<p>		
        P.S  Rest of the story continued on 
        <a href="http://viswanath11.imad.hasura-app.io/ChapterThree">
        ChapterThree
        </a>
        </p>`,
     content:
     `<p>        I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!	
</p>
<p>
I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!
</p>
<p>
I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!I came running out of school on my first day!
</p>`},
 'ChapterThree':{
     heading:'Chapter Three',
     title:'Chapter 3',
     home:`<a href="http://viswanath11.imad.hasura-app.io/">
        Goto Home! 		
        </a>`,
     link:`<p>		
        P.S
        <a href="http://viswanath11.imad.hasura-app.io/">
        The End
        </a>
        </p>`,
     content:
     `<p> 
       Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . 
</p>
<p>
Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . 
</p>
<p>
Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . Growth and Development via The Search continues. . 
</p>`
 }
 
}

function createtemplate(data)={
    var heading=data.heading;
    var title=data.title;
    var home=data.home;
    var link=data.link;
    var content=data.content;
    
var htmlcasing =`
  
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
</html>`;

return htmlcasing;
}

app.get('/:ChapterNumber', function (req, res) {
    var ChapterNumber = req.params.ChapterNumber;
  res.send(createtemplate(Chapters[ChapterNumber]));
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
