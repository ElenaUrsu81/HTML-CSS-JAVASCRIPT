	
	var myProd = [
            {
                "No.": "1",
                "Product Name": "Milk",
                "Quantity": "11",
                "Price": "7",
				"Category": "Food",
				"Details": "<a href='https://en.wikipedia.org/wiki/Milk ' target='_blank'>milk details</a>",
				"Picture": "<a href='Img/milk.jpg'><img src= 'Img/milk.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button onClick = 'editRow(this)'> Edit </button>",
				"Delete": "<button onClick = 'delRow(this)'> Delete </button> "
            },
            {
                "No.": "2",
                "Product Name": "Bread",
                "Quantity": "10",
                "Price": "3",
				"Category": "Food",
				"Details": "<a href='https://en.wikipedia.org/wiki/Bread ' target='_blank'>bread details</a>",
				"Picture": "<a href='Img/bread.jpg'><img src= 'Img/bread.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button onClick = 'editRow(this)'> Edit </button>",
				"Delete": "<button onClick = 'delRow(this)'> Delete </button>"
            },
            {
                "No.": "3",
                "Product Name": "Squishy",
                "Quantity": "300",
                "Price": "50",
				"Category": "Toy",
				"Details": "<a href='http://www.ebay.com/bhp/squishy-toys ' target='_blank'>squishy details</a>",
				"Picture": "<a href='Img/squishy.jpg'><img src= 'Img/squishy.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button onClick = 'editRow(this)'> Edit </button> ",
				"Delete": "<button onClick = 'delRow(this)'> Delete </button> "
            },
			{
                "No.": "4",
                "Product Name": "Barbie doll",
                "Quantity": "30",
                "Price": "100",
				"Category": "Toy",
				"Details": "<a href='https://en.wikipedia.org/wiki/Barbie' target='_blank'>barbie details</a>",
				"Picture": "<a href='Img/barbie.jpg'><img src= 'Img/barbie.jpg' class='ImgDimension'/> </a>",
				"Edit": "<button onClick = 'editRow(this)'> Edit </button> ",
				"Delete": "<button onClick = 'delRow(this)'> Delete </button>"
            },
			{
                "No.": "5",
                "Product Name": "Adidas shoes",
                "Quantity": "300",
                "Price": "50",
				"Category": "Footwear",
				"Details": "<a href='https://en.wikipedia.org/wiki/Adidas ' target='_blank'>shoes details</a>",
				"Picture": "<a href='Img/adidas.jpg'><img src= 'Img/adidas.jpg' class='ImgDimension'/> </a>",
				"Edit": " <button onClick = 'editRow(this)'> Edit </button>",
				"Delete": "<button onClick = 'delRow(this)'> Delete </button>"
            }
        ]
	 
	 
	
	 var table = document.getElementById("TableId");	
     
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
    
	
window.onload = function(){    
	     	 
      	
		
		for (var i=0; i< myProd.length; i++)
		{
			var tr = table.insertRow(-1);
			for (var j=0; j<col.length; j++)
			{
				var cell=tr.insertCell(-1);
			    cell.innerHTML = myProd[i][col[j]];
			}
			
		}
		
		
		var mainContainer = document.getElementById("MainId");
		mainContainer.appendChild(table);
	
			
//}
}	
 
 					
function delRow(r)
{
	if(confirm(" Delete row ?"))
	{
	var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("TableId").deleteRow(i);
    myProd.splice(i-1,1);
	
	}
	else
		alert("You canceled the delete operation!");
	
}					
				

function editRow(r)
{
	
	var rIndex = r.parentNode.parentNode.rowIndex;
   	
    var td = document.getElementById("TableId").rows[rIndex].cells;
    	
	for(var i=0; i<col.length-2; i++)
	{
		var inputCell = document.createElement("Input");
	    inputCell.setAttribute("type", "text");
		inputCell.value = td[i].innerHTML;
		document.getElementById("TableId").rows[rIndex].cells[i].innerHTML = "";
		td[i].appendChild(inputCell);
	}	
	
			
		
			
			
			var td1=document.createElement("td");
			var td2=document.createElement("td");
			
			var saveButton = document.createElement("Button");
			saveButton.innerHTML ="Save";
		
			
			
			var cancelButton = document.createElement("Button");
		 
			cancelButton.innerHTML="Cancel";
			
			document.getElementById("TableId").rows[rIndex].cells[col.length-2].innerHTML = "";
			document.getElementById("TableId").rows[rIndex].cells[col.length-1].innerHTML = "";
			
			td[col.length-2].appendChild(saveButton);
			
			
			td[col.length-1].appendChild(cancelButton);
			
	
	
	
	
	
}					

				
function AddProducts()
{
       
		
		    var tr = table.insertRow(-1); // row
			for (var j=0; j< col.length-2; j++)
			{
				var td=document.createElement("td");
				var inputCell = document.createElement("Input");
				inputCell.setAttribute("class", "inputTxt");
				inputCell.setAttribute("id","prodInput" +j );
				inputCell.setAttribute("style", "text");
								
				td.appendChild(inputCell);
				tr.appendChild(td);
			}
			
			
						
			
		
}

function CancelProducts()
{
	
	document.getElementById("TableId").deleteRow(myProd.length + 1);
	
	
}

function SaveProducts()
{
	var len= myProd.length;		
	
	var jsonData = {};	
	for(var i=0; i<(col.length-2);i++)
			jsonData[col[i]] = document.getElementsByTagName("Input")[i].value;
	
	myProd.push(jsonData);
	
		
			
			var tr = table.insertRow(-1);
			for (var j=0; j<col.length-2; j++)
			{
				var cell=tr.insertCell(-1);
			    cell.innerHTML = myProd[len][col[j]];
			}
			
			var td1=document.createElement("td");
			var td2=document.createElement("td");
			
			var editButton = document.createElement("Button");
			editButton.innerHTML ="Edit";
			var delButton = document.createElement("Button");
		    delButton.setAttribute("onClick", 'delRow(this)');
			delButton.innerHTML="Delete";
			
			td1.appendChild(editButton);
			tr.appendChild(td1);
			
			td2.appendChild(delButton);
			tr.appendChild(td2);
			
		
	        table.deleteRow(myProd.length);
			
			
						
		
}

	 






