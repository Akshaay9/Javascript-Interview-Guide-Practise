let test = [
    {
      name: "hello",
      album: "shit",
    },
    {
      name: "damn",
      album: "shit",
    },
    {
      name: "hello",
      album: "shit2",
    },
    {
      name: "hello2",
      album: "shit2",
    },
  ];
  
  const segreGate = (arr) => {
    let result = {};
    for (let song of arr) {
      if (result.hasOwnProperty(song.album)) {
        result = {
          ...result,
          [song.album]: [...result[song.album], song.name],
        };
      } else {
        result = {
          ...result,
          [song.album]: [song.name],
        };
      }
    }
    return result;
  };
  console.log(segreGate(test));
  