# Vue2 
### Usage
``` javascript
import Vue from 'vue';
import goyee from 'goyee';

Vue.use(goyee);
```

### Filters
``` javascript
// sum =======================
{{ [1,2,3] | sum }}
// => 6

{{ [{num:2}, {num:3}] | sum('num') }}
// => 5

// uppercase =======================
{{ 'abc' | uppercase }}
// => ABC

```
