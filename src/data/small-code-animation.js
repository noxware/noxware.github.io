import {ASComposition} from '../components/AnimatedFCE';

const smallCode = `%k%import %x%{%d%get%x%} %k%from %s%'api'%x%;
 
%k%async function %d%main%x%() {
  %k%const %d%data %o%= %k%await %v%get%x%(%s%'data'%x%);
   
  %k%for %x%(%k%const %d%d %k%of %v%data%x%)
    %k%if %x%(%v2%d%x%.%p%wisdom%x%)
      %v%console%x%.%p%log%x%(%v2%d%x%.%p%wisdom%x%);
}
 
%v%main%x%();
 
%c%/* Output: This Javascript animation is different and better in a device with higher resolution, like a desktop computer. */`;

export default (new ASComposition())
  .speed(500)
  .cursor('%i%')
  /*.write(`%k%import %x%{$%x%}`).write(`%d%get`).write(` %k%from %s%'$%s%'`).write(`api`).write('%x%;\n\n')*/

  .write(`%k%async function %d%main%x%() {$%x%}`).write(`\n$\n`).write('peneeeeeeeeeeeeeee').write('vaginaaaaaaaaaaaa')
  .finish();