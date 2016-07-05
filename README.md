Powered by redux-scfld: React-Redux demo application
====================================================

## How to
``` batch
$ npm i -g redux-scfld
```

``` batch
$ redux config
```
edit `.reduxrc`
``` json
{
  "actionsPath": "./app/actions",
  "reducersPath": "./app/reducers",
  "reducersIndexTemplatePath": "./redux-templates/reducer-index.jst",
  "typesPath": "./app/types",
  "statesPath": "./app/states",
  "stateTemplatePath": "./redux-templates/state.jst",
  "statesIndexTemplatePath": "./redux-templates/state-index.jst"
}
```
create template files to work with immutable state
``` javascript
// ./redux-template/reducer-index.jst

{__warning_header}
'use strict';
<%
    const importReducers    = mapEntity(entities, entity => `import ${entity.fullName} from './${entity.path}';` ).join('\n');
%>
{importReducers}

const namespaceReducersMap = {
<%
    _.forEach(entities, (group, namespace) => {
        const mappedReducers = _.map(group, entity => `${entity.TYPE}: ${entity.fullName}` ).join(',\n        ');
%>
    {namespace}: {
        {mappedReducers}
    },
<% } ) %>
};

import defaultState from '../states';

export default function(state = defaultState, action) {
    const {namespace, type} = action;
    if ( state && namespace in namespaceReducersMap ) {
        const prevNamespaceState = state.get(namespace);
        if ( type in namespaceReducersMap[namespace] ) {
            const nextNamespaceState = namespaceReducersMap[namespace][type](prevNamespaceState, action);
            if (typeof nextNamespaceState === 'undefined') {
                throw new Error(`State from ${<%  %>namespace}.${<%  %>type} cannot be undefined`);
            }
            if (prevNamespaceState !== nextNamespaceState) {
                return state.set(namespace, nextNamespaceState);
            }
        } else {
            throw new Error(`Entity ${<%  %>namespace}.${<%  %>type} not defined`);
        }
    }
    return state;
};
```
``` javascript
// ./redux-template/state.jst
'use strict';

import { Map } from 'immutable';

export default Map({

});
```
``` javascript
// ./redux-template/state-index.jst
{__warning_header}
'use strict';
<%
    const importStates = Object.keys(entities).map( namespace => `import ${namespace} from './${namespace}';` ).join('\n');
    const exportStates = Object.keys(entities).join(',\n    ');
%>
import { Map } from 'immutable';
{importStates}

export default Map({
    {exportStates}
});
```
After that create a few entities
``` batch
$ redux create errorRaise
$ redux create errorReset
$ redux create messageShow
$ redux create messageHide
$ redux create postsFetch
$ redux create postsReset
$ redux create postFetch
$ redux create postReset
```

So remains the easiest - just write the code

## License
[The MIT License](http://opensource.org/licenses/MIT)
Copyright (c) 2016 Ivan Zakharchenko