var app = new (function () {
  this.el = document.getElementById("results");
  this.results = [
    "Pretoria",
    "Cape Town",
    "Bloemfontein",
    "Johannesburg",
    "Polokwane",
    "New Castle",
    "Soweto",
    "Durban",
  ];


/**
 * Updates the counter element with the number of results.
 *
 * @param {number} data - The number of results.
 * @return {void} This function does not return a value.
 */
  this.Count = function (data) {
    var el = document.getElementById("counter");
    var name = "results";
    if (data) {
      if (data > 1) {
        name = "<b>Cities</b>";
      }
      el.innerHTML = data + " " + name;
    } else {
      el.innerHTML = "No " + name;
    }
  };



/**
 * Fetches all the data and updates the HTML element with the fetched data.
 *
 * @return {string} The updated HTML element.
 */
  this.FetchAll = function () {
    var data = "";
    if (this.results.length > 0) {
      for (i = 0; i < this.results.length; i++) {
        data += "<tr>";
        data += "<td>" + this.results[i] + "</td>";
        data +=
          '<td><button class="btn btn-info" onclick="app.Edit(' +
          i +
          ')">Edit</button></td>';
        data +=
          '<td><button class="btn btn-danger" onclick="app.Delete(' +
          i +
          ')">Delete</button></td>';
        data += "</tr>";
      }
    }
    this.Count(this.results.length);
    return (this.el.innerHTML = data);
  };



/**
 * Adds a new country to the list of results.
 *
 * @param {string} country - The name of the country to add.
 * @return {undefined} This function does not return a value.
 */
  this.Add = function () {
    el = document.getElementById("add-name");
    // Get the value
    var country = el.value;
    if (country) {
      // Add the new value
      this.results.push(country.trim());
      // Reset input value
      el.value = "";
      // Dislay the new list
      this.FetchAll();
    }
  };


  
/**
 * Edit the specified item.
 *
 * @param {any} item - The item to be edited.
 * @return {undefined} No return value.
 */
  this.Edit = function (item) {
    var el = document.getElementById("edit-name");
    // Display value in the field
    el.value = this.results[item];
    // Display fields
    document.getElementById("spoiler").style.display = "block";
    self = this;
    document.getElementById("saveEdit").onsubmit = function () {
      // Get value
      var country = el.value;
      if (country) {
        // Edit value
        self.results.splice(item, 1, country.trim());
        // Display the new list
        self.FetchAll();
        // Hide fields
        CloseInput();
      }
    };
  };


  /**
   * Delete the current row and display the new list.
   *
   * @param {any} item - The item to be deleted.
   * @return {undefined} This function does not return a value.
   */
  this.Delete = function (item) {
    // Delete the current row
    this.results.splice(item, 1);
    // Display the new list
    this.FetchAll();
  };
})();
app.FetchAll();


/**
 * Closes the input by hiding the "spoiler" element.
 *
 * @param {} 
 * @return {} 
 */
function CloseInput() {
  document.getElementById("spoiler").style.display = "none";
}
