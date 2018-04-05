
var myProd = [
            {
                "No.": "1",
                "Product Name": "Milk",
                "Quantity": "11",
                "Price": "7",
				"Category": "Food",
				"Details": "<a href='https://en.wikipedia.org/wiki/Milk ' target='_blank'>milk details</a>",
				"Picture": "<a href='Img/milk.jpg'><img src= 'Img/milk.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button> Edit </button>",
				"Delete": "<button> Delete </button> "
            },
            {
                "No.": "2",
                "Product Name": "Bread",
                "Quantity": "10",
                "Price": "3",
				"Category": "Food",
				"Details": "<a href='https://en.wikipedia.org/wiki/Bread ' target='_blank'>bread details</a>",
				"Picture": "<a href='Img/bread.jpg'><img src= 'Img/bread.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button> Edit </button>",
				"Delete": "<button> Delete </button>"
            },
            {
                "No.": "3",
                "Product Name": "Squishy",
                "Quantity": "300",
                "Price": "50",
				"Category": "Toy",
				"Details": "<a href='http://www.ebay.com/bhp/squishy-toys ' target='_blank'>squishy details</a>",
				"Picture": "<a href='Img/squishy.jpg'><img src= 'Img/squishy.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button> Edit </button> ",
				"Delete": "<button> Delete </button> "
            },
			{
                "No.": "4",
                "Product Name": "Barbie doll",
                "Quantity": "30",
                "Price": "100",
				"Category": "Toy",
				"Details": "<a href='https://en.wikipedia.org/wiki/Barbie' target='_blank'>barbie details</a>",
				"Picture": "<a href='Img/barbie.jpg'><img src= 'Img/barbie.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button> Edit </button> ",
				"Delete": "<button> Delete </button>"
            },
			{
                "No.": "5",
                "Product Name": "Adidas shoes",
                "Quantity": "300",
                "Price": "50",
				"Category": "Footwear",
				"Details": "<a href='https://en.wikipedia.org/wiki/Adidas ' target='_blank'>shoes details</a>",
				"Picture": "<a href='Img/adidas.jpg'><img src= 'Img/adidas.jpg' class='ImgDimension'/> </a>",
				"Edit": " <button> Edit </button>",
				"Delete": "<button> Delete </button>"
            }
        ]

var table = document.getElementById("TableId");

function PopulateTableFromJSON() {
        var col = [];
			
		for( var i=0; i< myProd.length; i++)
		{
			for (var key in myProd[i])
			{
				if(col.indexOf(key)=== -1)
				{
					col.push(key);
					
				}
				
			}				
		}
		
		
		
		for (var i=0; i< myProd.length; i++)
		{
			tr = table.insertRow(-1);
			for (var j=0; j<col.length; j++)
			{
				var cell=tr.insertCell(-1);
			    cell.innerHTML = myProd[i][col[j]];
			}
			
		}
		
			
		var mainContainer = document.getElementById("MainId");
		mainContainer.appendChild(table);
		
			
}

function AddProducts()
{
	
	    var col = [];
			
		for( var i=0; i< myProd.length; i++)
		{
			for (var key in myProd[i])
			{
				if(col.indexOf(key)=== -1)
				{
					col.push(key);
					
				}
				
			}				
		}
	var newRow = table.createElement(tr);
	
	
	for(var i=0;i<col.length; i++)
	{
		var cell= tr.insertCell(-1);
		
			
	}
	table.appendChild(newRow);
	
}
	
