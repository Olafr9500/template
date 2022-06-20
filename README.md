# Template

Modèle de base pour les applications web.

## Installation

Clonez le projet sur votre machine.

```bash
git clone https://github.com/Olafr9500/template.git <nom-de-votre-projet>
```

Installez les dépendances.

```bash
cd <nom-de-votre-projet>
npm install
```

## Utilisation

Pour commencer le développement de votre application, lancez le serveur et en parallèle le script de compilation.

```bash
npm run dev
```

Une fois le serveur de développement lancé, vous pouvez modifier les fichiers du projet. Les scripts et feuille de style se mettront  automatiquement à jour.

Une fois que vous avez terminé, lancez le script de production.

```bash
npm run build
```

Pour les tests, le projet utilise [Cypress](https://www.cypress.io/).

Une fois vos tests écrit, lancez le script de test. Le projet doit être compilé et le serveur doit être démarré.

```bash
npm run test
```

> Si vous ne voulez pas voir l'interface graphique, vous pouvez lancer vos scripts de test en mode CLI.

```bash
npm run test:cli
```

## About

### Contribution

Make pull requests to help the project :D

### Author

**_Olafr9500_**

- [github/Olafr9500](https://github.com/Olafr9500)

### License

Copyright © 2021, [Olafr9500](https://github.com/Olafr9500).
Released under the [Apache 2.0](LICENSE).
