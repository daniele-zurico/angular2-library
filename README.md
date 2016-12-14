#angular2-library

this project show how to package a library using ngc.

For more information please visit: http://www.dzurico.com/how-to-create-an-angular-library/

###how to install
npm install

###how to package the library
npm run build

###how to use the package in your project
npm install ../angular2-library  (specify the correct path)

in your module include:
```
import {HelloWorldModule} from 'angular2-sdk/dist';

@NgModule({
  imports: [
    ...
    HelloWorldModule
  ],
  declarations: [
   ...
  ],
  providers: [
   ...
  ],
  bootstrap: [...]
})
```

in your view (html)
```
<hello-world></hello-world>
```

