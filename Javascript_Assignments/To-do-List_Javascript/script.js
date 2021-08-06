const add = document.getElementById('add')
        const input1 = document.getElementById('inputtask');
        var score = document.getElementById('score')
        var ul = document.querySelector("ul");
        var item = document.getElementsByTagName("li");
        var count = 0;

        function inputLength(){
            return input1.value.length;
        } 

        function totalitems(){
            return item.length;
        }

        function createItem(){
            var li = document.createElement("li");
            var val = document.createTextNode(input1.value)
            var input = input1.value;
            li.appendChild(val);
            ul.appendChild(li);
            input1.value = "";
            
            function remove(){
                li.classList.add("remove")
                count -= 1;
               
           
            }

            function appreciate(){
                li.classList.add("appreciate")
                console.log(val);
                li.removeChild(done);
                li.appendChild(document.createTextNode(`Great Job on ${input} !!!. Keep it up !!!`));
                li.removeChild(val);
                
                
            }

           

            var delete1 = document.createElement("button");
            delete1.appendChild(document.createTextNode("X"));
            li.appendChild(delete1);
            delete1.addEventListener('click',remove);

            var done = document.createElement("button");
            done.appendChild(document.createTextNode("Done"));
            li.appendChild(done);
            done.addEventListener('click',appreciate);

            

        }
        function clickAdd(){
            if (inputLength() > 0) { 
                createItem();
            }
        }

        function pressEnter(event) {
            if (inputLength > 0 && event.key === 'Enter') { 
                createItem();
            } 
        }
    

        add.addEventListener("keypress", pressEnter(this));
