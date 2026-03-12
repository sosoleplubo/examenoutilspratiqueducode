# Gestionnaire de Tâches Web

Réalisé par Sofiane & Barthélemy

Ce projet consiste à développer une application web collaborative de gestion de tâches permettant aux utilisateurs de créer, modifier, attribuer et suivre des tâches.

Appliquer des concepts suivants :

-Git et GitHub

-Workflows collaboratifs

-Tests automatisés

-CI/CD

-Qualité du code


## Rôles

Sofiane est un dev Backend 

Barthélemy est un dev Frontend

Tâches communes : CI/CD Eslint
## Workflow Git et Organisation des Branches

### Structure des branches

```text
main
 │
 └── develop
      │
      ├── feature/task-crud
      ├── feature/task-assignment
      ├── feature/task-priority-status
      └── feature/frontend-responsive
```

Choix du Workflow : 

    Feature Branch Workflow.


## Règles de protection des branches

Une règle de protection a été configurée sur la branche `main` afin d'empêcher les modifications directes.

**Nom du rule set :** `main`

### Restrictions

- Le push direct sur la branche `main` est désactivé.
- Toute modification doit passer par une Pull Request.
- Le code doit être validé avant la fusion.

## Règles de protection de la branche develop

Une règle de protection a été configurée sur la branche `develop` afin de structurer l'intégration des nouvelles fonctionnalités.

**Nom du rule set :** `develop`

### Restrictions

- Les modifications doivent être intégrées via une Pull Request.
- Aucune validation obligatoire n’est requise pour fusionner la Pull Request.

### Workflow

Les branches de fonctionnalités sont créées à partir de `develop` et doivent être fusionnées dans `develop` via une Pull Request.

## Mise en place initiale du projet

Une branche `setup` a été créée afin d'initialiser le dépôt avec les fichiers fournis dans le TP.

### Étapes réalisées

1. Sofiane a créé la branche `setup`.
2. Les fichiers du TP ont été ajoutés sur cette branche.
3. Les modifications ont été poussées vers une branche `feature`.

### Intégration du code

4. Barthélemy a ouvert une Pull Request de `feature` vers `develop`.
5. Une fois les modifications validées, la branche a été fusionnée dans `develop`.
6. Sofiane a ensuite ouvert une Pull Request de `develop` vers `main`.
7. Sofiane a approuvé le code afin de permettre la fusion dans la branche `main`.
## Tests unitaires (Jest)

Nous avons ajouté des **tests unitaires avec Jest** afin de vérifier certaines parties de la logique backend.

Les tests couvrent notamment :

- l’authentification
- l’accès aux routes protégées
- la récupération des tâches
- la création de tâches
- la gestion des erreurs API



## Tests unitaires (Jest)

Nous avons ajouté des **tests unitaires avec Jest** afin de vérifier certaines parties de la logique backend.

Les tests couvrent notamment :

- l’authentification
- l’accès aux routes protégées
- la récupération des tâches
- la création de tâches
- la gestion des erreurs API




---

## Tests API (Supertest)

Les routes de l’API Express sont testées avec **Supertest**.

Cela permet de simuler des requêtes HTTP directement sur l’application pour vérifier le comportement des endpoints.

Exemples de routes testées :

- `POST /api/auth/login`
- `GET /api/tasks`
- `POST /api/tasks`
- `GET /api/tasks/:id`

---

## Travail collaboratif

La mise en place des outils de qualité du projet a été réalisée de manière collaborative :

- **Sofiane** : configuration ESLint et tests End-to-End avec Selenium  
- **Barthélemy** : tests unitaires avec Jest et tests des routes API

Ces outils permettent de garantir la qualité du code et le bon fonctionnement de l’application. ## Workflow CI/CD

Nous avons mis en place un pipeline **CI/CD avec GitHub Actions** afin d’automatiser certaines vérifications à chaque modification du projet.

Le workflow est défini dans le fichier : .github/workflows/cicd.yml


---

## Déclenchement

Le pipeline se lance automatiquement lorsqu’une **Pull Request** est créée ou mise à jour vers la branche `develop`.

```yaml
on:
  pull_request:
    branches: [develop]
