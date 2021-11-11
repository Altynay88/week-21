
function onSearch() {
      let url = `https://api.giphy.com/v1/gifs/search?&api_key=XKAj5RqJ8SqvNPEpprAYCzofdnprtzQQ&limit=10&lang=en&q=`
      let str = document.getElementById("search").value.trim();
      url = url.concat(str);
            fetch(url)
            .then(response => response.json())
            .then(images => {
                  document.getElementById("gifImg")
                  .src = images.data[0].images.downsized.url;
                  document.getElementById("gifImg1")
                  .src = images.data[1].images.downsized.url;
                  document.getElementById("gifImg2")
                  .src = images.data[2].images.downsized.url;
                  document.getElementById("gifImg3")
                  .src = images.data[3].images.downsized.url;
                  document.getElementById("gifImg4")
                  .src = images.data[4].images.downsized.url;
             } )
            .catch(error => console.log(error));
      }





