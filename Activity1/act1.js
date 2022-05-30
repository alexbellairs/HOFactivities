const postFive = (str) => {
  for (i = 0; i < 5; i++) {
    console.log(str + ` ${i + 1}`);
  }
};

const postOnce = (str, fn) => {
  fn(str);
};

postOnce("hello codenation", postFive);
