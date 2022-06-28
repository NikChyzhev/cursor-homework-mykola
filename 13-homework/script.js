function getRandomChinese(length) {
  return new Promise((resolve, reject) => {
      symbols = '';
      let i = 0;
      if (length <= 0) reject();
      while (i < length) {
          setTimeout(() => {
              symbols += String.fromCharCode(Date.now() % 100000);
              console.log(Date.now() % 100000);
              if (symbols.length === length) resolve(symbols);
          }, (i + 1) * 50);
          i++;
      }
  })
  .then((symbols) => console.log(symbols))
  .catch(() => console.log('Число має бути більше 0'))
}

getRandomChinese(4);