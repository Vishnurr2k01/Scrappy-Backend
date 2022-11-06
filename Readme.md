Backend hosted at https://scrappy-beta.herokuapp.com

<h2>Auth</h2>

<h4> /auth</h4>

<ul>
<li> /signup 
<br> email , password ,name,address,phone </li>
<li> /login
<br> email , password  </li>
</ul>

<h2>Scrap Collection</h2>
<h4> /items</h4>

<ul>
<li> /setitems (post): to add items 
<br>  items,
    photo,
    date,
    time,
    address,
    status,
    accepted,
    resolved
</li>
<li> /getitems (get) : to get list of all orders made
 </li>
 <li> /updateitems/:id (post) : to update  orders made
 </li>
</ul>

<h2>Register Complaint</h2>
<h4> /complaints</h4>

<ul>
<li> / (post) : to register a complaint
<br>  items,
    photo,
    date,
    time,
    address,
    status,
    accepted,
    resolved
</li>
<li> / (get) : to get list of all complaints
 </li>
 <li> /:id (post): to update  a complaint
 </li>
</ul>

