const start = Date.now();

async function getRandomChinese(length) {
  
  try{
    let text = ""

    while (length > 0) {
        await new Promise(res => setTimeout(() => {
        const sign = Date.now() % 100000;      
        const signChines = String.fromCharCode(sign);
        text += signChines
        // console.log(text);        
        length--;
        // console.log(Date.now()-start);
        // start = Date.now();
        res(text);
      }, 50));
    };    
    console.log(text);
    } catch(e) { };
  
}

const length = 4

getRandomChinese(length)