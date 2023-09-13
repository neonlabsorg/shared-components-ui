### Develop

Place your components in `src/components` directory. 
According to Mitosis docs all components should have `.lite.tsx` extension.

### Build

```bash
npm exec mitosis build
```
or
```bash
yarn build
```

🎉 You should have an `output` directory with your compiled components in all frameworks specified in mitosis.config

### Prepare package for external usage

For vue projects usage

```bash
yarn pack:vue
```
For angular projects usage

```bash
yarn pack:angular
```

## Useful links

- [Mitosis docs](https://github.com/BuilderIO/mitosis/tree/main/docs): Check Mitosis documentation.
- [Mitosis examples](https://github.com/BuilderIO/mitosis/tree/main/examples): Use this examples to better understanding shared components development.
