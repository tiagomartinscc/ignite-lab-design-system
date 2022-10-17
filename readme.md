<h1>Criando um Design System completo</h1>

Usando o Figma para projetar os componentes

<h2>Projeto no Figma</h2>
<a href="https://www.figma.com/community/file/1163786306166583908">https://www.figma.com/community/file/1163786306166583908</a>

No React utilizando Storybook para documentar e exibir os componentes em todas as suas variações.

<h2>Endereço do storybook</h2>
<a href="https://tiagomartinscc.github.io/ignite-lab-design-system/">https://tiagomartinscc.github.io/ignite-lab-design-system/</a>


<h3>Comandos usados na instalação</h3>

Criando o projeto utilizando o Vite
```bash
npm create vite@latest
```

Instalando o tailwindcss
```bash
npm i -D tailwindcss postcss autoprefixer
```

iniciando o tailwindcss
```bash
npx tailwindcss init -p
```

criando o story book
```bash
npx sb init --builder @storybook/builder-vite --use-npm
```

rodando o story book
```bash
npm run storybook
```

Instalando o CLSX (biblioteca para controle condicional do tailwindcss)
```bash
npm install --save clsx
```

Instalando o slot do radix-ui (COmponentes nativos e altamente customizáveis)
```bash
npm install @radix-ui/react-slot
```
Instalando a biblioteca de icones phosphor-react
```bash
npm install phosphor-react
```

Instalando o checkbox do radix
```bash
npm install @radix-ui/react-checkbox
```

Fazendo o deploy do storybook
```bash
npm i @storybook/storybook-deployer --save-dev
```


