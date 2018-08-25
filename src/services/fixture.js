import acessApi from './acess-api';

export default function fixture(res) {
  return acessApi().then(list => {
    const filter = [{ property: 'repositories.full', length: 1 }];
    let properties = [];
    filter.forEach(f => {
      f.property.split('.').map((p) => {
        properties.push([p]);
      });

      properties.forEach(a => {
        console.log(a);
      })
      
      //console.log(list + f.property)
    });
  });
};