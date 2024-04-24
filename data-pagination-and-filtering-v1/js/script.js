const itemsPerPage = 9;

   /*
      showPage - Function that displays a specific page of student cards
   */
      
   const showPage = (list, page) => {
   const startIndex = page * itemsPerPage - itemsPerPage;
   const endIndex = page * itemsPerPage;
   const student_list = document.querySelector(".student-list");
   student_list.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const studentItem = `
               <li class="student-item cf">
                  <div class="student-details">
                     <img class="avatar" src="${list[i]['picture']['large']}" alt="Profile Picture">
                     <h3>${list[i]['name']['first']} ${list[i]['name']['last']}</h3>
                     <span class="email">${list[i]['email']}</span>
                  </div>
                  <div class="joined-details">
                     <span class="date">Joined ${list[i]['registered']['date']}</span>
                  </div>
               </li>
            `;
            student_list.insertAdjacentHTML('beforeend', studentItem);
      }
   }
   };
   const link_list = document.querySelector('.link-list');
   /*
   addPagination - Function to add pagination buttons based on the number of students
   */

   const addPagination = (list) => {
      const numOfPages = Math.ceil(list.length/itemsPerPage);
      const link_list = document.querySelector('.link-list');
      link_list.innerHTML = '';
      
      for(let i = 1; i <= numOfPages; i++) {
         let button = ``;
         if(i == 1) {
            button += `
         <li>
            <button type="button" class="active">${i}</button>
          </li>
         `;
         } else {
            button += `
         <li>
            <button type="button">${i}</button>
          </li>
         `;
         }

         link_list.insertAdjacentHTML('beforeend', button);
      }
      
      link_list.addEventListener('click', (e) => {
         const buttons = link_list.querySelectorAll('button');
         buttons.forEach(btn => btn.classList.remove('active'));

         if(e.target.tagName === 'BUTTON') {
            e.target.className = 'active';
         }

         showPage(list, e.target.textContent)
      })
   }

   // Call the showPage and addPagination functions
   showPage(data, 1);
   addPagination(data);

   /*
      Requirements for extra credit
   */

   // Search box for the header tag

   const header = document.querySelector('header');

   const label = document.createElement('label');
   label.setAttribute('for', 'search')
   label.className = 'student-search';
   header.appendChild(label);
   
   const span = document.createElement('span');
   span.textContent = 'Search by name';
   label.appendChild(span);

   const searchInput = document.createElement('input');
   searchInput.id = 'search';
   searchInput.setAttribute('placeholder', 'Search by name...');
   label.appendChild(searchInput);

   const searchButton = document.createElement('button');
   searchButton.setAttribute('type', 'button');
   label.appendChild(searchButton);

   const searchImg = document.createElement('img');
   searchImg.src = 'img/icn-search.svg';
   searchImg.alt = 'Search icon';
   searchButton.appendChild(searchImg);

   // Search Functionality

   searchInput.addEventListener('keyup', e => {
      const userInput = e.target.value.toLowerCase();
      const studentName = document.querySelectorAll('.student-item h3');
      studentName.forEach(name => {
         if(name.textContent.includes(userInput)) {
            console.log(name);
         }
      })
   })

   