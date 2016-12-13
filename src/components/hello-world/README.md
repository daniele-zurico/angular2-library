#Hello World

It is an example how to write components in the correct way. It display the message **Hello world**.
  
To include Hello World in your project you have to:
1) In your Module include HelloWorldModule:
```javascript
  @NgModule({
   imports: [HelloWorldModule],
   declarations: [],
   exports: []
   })
```

2) In your html add: <hello-world></hello-world>
```html
  <hello-world></hello-world>
```