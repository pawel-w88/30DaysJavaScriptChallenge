// 1
const countries = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
  ];
  console.table(countries);

  const countriesObj = {
    name: 'Finland',
    name: 'Sweden',
    name: 'Norway',
  };
  console.table(countriesObj);

  console.group('Countries')
  console.log(countries)
  console.groupEnd();

  // 2
  console.assert(10 > 2 * 10);
  console.assert(10 < 2 * 10);

  console.warn("This is Warning");

  console.error("This is Error");
