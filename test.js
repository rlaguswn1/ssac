async function asyncFunction() {
    console.log(1);
    const result = await getResult();
    console.log(result);
    console.log(3);
  }
  
  function getResult() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
      }, 500);
    });
  }
  
  asyncFunction();