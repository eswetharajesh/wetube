function reload_with_param() {
   // store the keyword searched to search_keyword variable
    var search_keyword = document.getElementById("search").value;

    //redirect to index.html page with search param,  search = search_keyword and reload the page
    window.location.href = "index.html?search=" + search_keyword;
  }
