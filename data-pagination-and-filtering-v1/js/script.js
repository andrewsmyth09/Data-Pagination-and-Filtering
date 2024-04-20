   /*
   Treehouse Techdegree:
   FSJS Project 2 - Data Pagination and Filtering
   */

   /*
   For assistance:
      Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
      Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
   */

   const itemsPerPage = 9;
   // console.log(itemsPerPage)

   /*
   Create the `showPage` function
   This function will create and insert/append the elements needed to display a "page" of nine students
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
   Create the `addPagination` function
   This function will create and insert/append the elements needed for the pagination buttons
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

   // Call functions
   showPage(data, 1);
   addPagination(data);
