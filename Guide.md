### Icons
In order to make icon management easier, we are using `svg`  icons.
To add new icons, head over to https://www.iconfont.cn, search for the desired icon
and place in `src/svg`. You can use the new icon using the following snippet:
```html
<svg-icon icon-class="password" /> // icon-class is the icon's name
```

### Language
Any text which is meant to be read by the user should be placed in `src/lang` in the appropriate
language file. E.g If we are to display the text "Hello" in the navbar, we'd add `hello: 'Hello'` in
the `navbar` object in `en.js` and any other lang file. To make use of the i8ln text use:
```html
{{ $t('navbar.hello') }} // template
```
or
```js
this.$t('navbar.hello') // Vue script section
```

### API Calls
By default, all data sent and received is transformed to the appropriate case i.e data from the API is transformed
from `snake_case` to `camelCase` and vice versa. If you want to disable this transformation, when calling the `requests`
object, pass `false` as a parameter e.g:
```javascript
import request from '@/utils/request'

export function login(data) {
  // Pass false as a parameter
  return request(false)({
    ...
  })
}
```
