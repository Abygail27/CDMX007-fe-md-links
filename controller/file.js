let arrNew = [];
  arrayOfHref.forEach(elem => {
    arrNew.push({
      href: elem.href, 
      text: (elem.textContent).slice(0,50), 
      file: routeFile
    });
  });
  return arrNew;
