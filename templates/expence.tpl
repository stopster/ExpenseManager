<td class="amount"><%- amount %></td>
<td class="category">
    <div class="category-icon"
         style="background-color: <%= category.color %>"
         title="<%= category.title %>"></div>
</td>

<td class="title"><%- title %></td>
<td class="date"><%- date %></td>
<td class="delete">
    <button class="button">
        <div class="button-icon">
            <svg viewBox="0 0 32 32">
                <use xlink:href="#close"></use>
            </svg>
        </div>
        delete
    </button>
</td>
