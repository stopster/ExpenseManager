    <div>
        <select name="category-select-color" id="add-category-select-color">
             <% _.each(colors, function(color){ %>
                <option><%= color %></option>
            <% }); %>
        </select>
        <input type="text" id="add-category-input-title">
    </div>

    <div class="buttons-container">
        <button id="add-category-save">Save</button>
        <button id="add-category-cancel">Cancel</button>
    </div>
