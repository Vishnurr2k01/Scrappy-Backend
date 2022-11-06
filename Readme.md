Backend hosted at https://scrappy-beta.herokuapp.com

<h2> Auth</h2>

<h4> basic route : <b>/auth </b> </h4>

<ul>
<li> <b>/signup</b> 
<br> email , password ,name,address,phone </li>
<li> <b>/login </b>
<br> email , password  </li>
</ul>

<h2>Scrap Collection</h2>
<h4>basic route : <b> /items</b></h4>

<ul>
<li> <b>/setitems</b> (post): to add items 
<br>  items,
    photo,
    date,
    time,
    address,
    status,
    accepted,
    resolved
</li>
<li> <b>/getitems</b> (get) : to get list of all orders made
 </li>
 <li> <b>/updateitems/:id </b> (post) : to update  orders made
 </li>
</ul>

<h2>Register Complaint</h2>
<h4> basic route : <b>/complaints </b> /h4>

<ul>
<li> <b>/</b> (post) : to register a complaint
<br>  items,
    photo,
    date,
    time,
    address,
    status,
    accepted,
    resolved
</li>
<li> <b>/</b> (get) : to get list of all complaints
 </li>
 <li> <b>/:id</b> (post): to update  a complaint
 </li>
</ul>

