window.onload = function() {
    const body = document.querySelector("body");
  
    const imgNames = [
      "batman.jpg",
      "flash.jpg",
      "superman.jpg",
      "wonderwoman.jpg"
    ];
  
    let imageActivation;
  
    const isInactive = (textToReplace, changeTo) => {
      imageActivation = function() {
        const newSrc = event.target.src.replace(textToReplace, changeTo);
        event.target.src = newSrc;
      };
 return imageActivation;
    };
      imgNames.forEach(name => {
      const img = document.createElement("img");
      img.src = `./img/${name}`;
      img.addEventListener("mouseout", isInactive(".jpg",));
      body.append(img);
    });
  };
  