<script>
   /**
   * @type {any[]}
   */
    export let users = [];
 
 </script>
 
 <div class="mx-auto">
   <table class="table">
     <thead>
       <tr>
         <th>Name</th>
         <th>City</th>
         <th>Email</th>
         <th></th>
       </tr>
     </thead>
     <tbody>
       {#each users as user}
         <tr>
           <td>
             <div class="flex items-center gap-3">
               <div>
                 <div class="font-bold">{user.name.firstname} {user.name.lastname}</div>
                 <div class="text-sm opacity-50">{user.address.city}</div>
               </div>
             </div>
           </td>
           <td>
             {user.address.city}
             <br/>
             <span class="badge badge-ghost badge-sm">{user.address.zipcode}</span>
           </td>
           <td>{user.email}</td>
           <td>
             <button class="btn btn-ghost btn-xs">details</button>
           </td>
         </tr>
       {/each}
     </tbody>
   </table>
 </div>