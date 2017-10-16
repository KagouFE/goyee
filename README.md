# Vue2 
### Usage
``` javascript
import Vue from 'vue';
import goyee from 'goyee';

Vue.use(goyee);
```

### Filters & Methods
``` javascript
// sum      =======================
{{ [1,2,3] | sum }}
// => 6
this.$goyee.sum([2,3])
// => 5

{{ [{num:2}, {num:3}] | sum('num') }}
// => 5

// uppercase =======================
{{ 'abc' | uppercase }}
// => ABC

// date      =======================
{{ 1508143679588 | date}}
// =>  2017-10-16

{{ 1508143679588 | date('year')}}
// =>  2017

{{ 1508143679588 | date('month')}}
// =>  2017-10

{{ 1508143679588 | date('dateTime')}}
// =>  2017-10-16 16:47

{{ 1508143679588 | date('longDateTime')}}
// =>  2017-10-16 16:47:59

{{ 1508143679588 | date('date-en')}}
// =>  Oct 16, 2017

// custom format
{{ 1508143679588 | date('YYYY / MM / DD')}}
// =>  2017 / 10 / 16
```
