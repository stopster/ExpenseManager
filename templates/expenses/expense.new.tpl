<input type="text" id="amount" placeholder="Amount"/>
<select id="category">
	<% _.each(data.categoriesList, function(cat){  %>
		<option style="background: <%= cat.get('color')%>" data-color="<%= cat.get('color')%>" value="<%= cat.get('title')%>"><%= cat.get("title") %></option> 
	<%}); %>
</select>
<input type="text" id="title" placeholder="Title"/>
<input type="date" id="date" placehoder="Date"/>
