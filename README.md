# Teadot

- Author: [Billgo](http://www.yewenbiao.cn)
- Website：[http://teadot.iteago.com](http://teadot.iteago.com)

### How to used

Install teadot
```
npm install --save-dev teadot
```

### Example Component

```javascript
// app.js

import React from 'react';
import ReactDOM from 'react-dom';
import Teadot from 'teadot';

const {Button} = Teadot;

class App extends React.Component {
    render() {
        return (
            <Button>hello teadot</Button>
        );
    }
}

ReactDOM.render((
    <App/>
), document.getElementById('app'));

```

### License
The MIT License([http://opensource.org/licenses/MIT](http://opensource.org/licenses/MIT))
