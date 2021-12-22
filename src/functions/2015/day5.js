const Y2015_Day5 = (data) => {

  const meetsRule1 = (word) => {
    let vowels = 0;
    vowels += (word.split("a").length)-1;
    vowels += (word.split("e").length)-1;
    vowels += (word.split("i").length)-1;
    vowels += (word.split("o").length)-1;
    vowels += (word.split("u").length)-1;

    if (vowels >= 3)  {
      return true;
    }
    return false;
  }

  const meetsRule2 = (word) => {
    const charA = 97;
    const charZ = 122 + 1;
    for (let i = charA; i < charZ; i++) {
      const chars = String.fromCharCode(i) + String.fromCharCode(i);
      const isFound = word.search(chars);
      if (isFound >= 0) {
        return true;
      }
    }
    return false;
  }

  const meetsRule3 = (word) => {    
    let exists =0;
    exists = word.search("ab");
    if (exists !== -1) return false;
    exists = word.search("cd");
    if (exists !== -1) return false;
    exists = word.search("pq");
    if (exists !== -1) return false;
    exists = word.search("xy");
    if (exists !== -1) return false;            
    return true;
  }  

  const Part1 = () => {
    let niceWords = 0;
    for (let i = 0; i < data.length; i++) {
      const element = data[i];
      if (meetsRule1(element) && meetsRule2(element) && meetsRule3(element)) {
        niceWords += 1;
      }
    }
    return(niceWords);
  }

  const Part2 = () => {
    return("TBD");
  }
  
  const response = {
    "Day1" : Part1(),
    "Day2" : Part2()
  }

  return(response);
}

export {Y2015_Day5};