# Project Guidelines

## Documentation Requirements


## Architecture Decision Records

## Code Style & Patterns
- no need to import types inside components, they are auto imported in nuxt
- if you creating an interface inside **/**.d.ts, no need declare inteface with export , example: 
    ```
    Price interface {
        value: string;
    }
    ```
- when using v-for follow this pattern , example on div:
    ```
    <div v-for="(item, key) in items" :key="key" />
    ```

## Testing Standards

