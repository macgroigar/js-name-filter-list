        // get input element 
        let filterInput = document.getElementById('filterInput');

        // add event listener
        filterInput.addEventListener('keyup', filterNames);

        function filterNames() {
            // get value of input
            let filterValue = document.getElementById('filterInput').value.toUpperCase();

            // get names ul
            let ul = document.getElementById('names');

            // get items from ul
            let li = ul.querySelectorAll('li.list-group-item');

            // loop through list items
            for(let i = 0;i < li.length;i++) {
                let a = li[i].getElementsByTagName('a')[0];
                
                // matching whats beign typed/letters being typed
                if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                    li[i].style.display = '';
                } else {
                    li[i].style.display = 'none'
                }
            }
        }