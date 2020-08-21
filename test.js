function test() {
  let a = 0;
  setTimeout(()=>{
    a = 1;
  }, 5000);

  return () => a;
}

