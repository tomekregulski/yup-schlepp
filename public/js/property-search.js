console.log("hello properties");

const searchProperties = async (event) => {
  event.preventDefault();

  console.log("hi again");
  //   const content = document.getElementById("comment-text").value;
  //   console.log(content);
  //   const url = window.location.href;
  //   console.log(url);
  //   const split_url = url.split("blogs/");
  //   console.log(split_url);
  //   const blog_id = split_url[1][0];
  //   console.log(blog_id);
  //   const user_id = document
  //     .getElementById("user")
  //     .getAttribute("data-currentuser");
  //   console.log(user_id);
  //   console.log(user_id, blog_id, content);

  const response = await fetch(`/api/buildings/`, {
    method: "GET",
    // headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    console.log("got it");
    // document.location.reload();
    console.log(response.body);
    console.log(response.buildingData);
  } else {
    alert("Failed to create comment.");
  }
};

document
  .getElementById("prop-search-btn")
  .addEventListener("click", searchProperties);
