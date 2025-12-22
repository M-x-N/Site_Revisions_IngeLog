# 📚 Site de Révisions Ingénierie Logicielle - Notation Canadienne

Site web de révision pour la matière **Ingénierie Logicielle** (M1) avec des questions à choix multiples utilisant le **système de notation canadienne**.

## 👤 Auteur

- Max (Site)
- Mael (Notes fiches)

## 📊 Système de Notation Canadienne

Contrairement aux QCM classiques, ce système permet plusieurs bonnes réponses par question :

- ✅ **+1 point** par bonne réponse cochée
- ❌ **-1 point** par mauvaise réponse cochée
- Le score peut être **négatif, nul ou positif**

### Exemple

**Question** : 2 + 2 = ?
- a) = 2
- b) = 4 ✓
- c) < 0
- d) > 0 ✓

Bonnes réponses : **b** et **d**

| Réponses cochées | Score |
|-----------------|-------|
| b et d | +2 (max) |
| a et c | -2 (min) |
| a, b, c, d | 0 |
| b uniquement | +1 |
| a et b | 0 (+1 -1) |

## 📖 Thèmes Couverts

| Thème | Concepts |
|-------|----------|
| **Domain Driven Design** | Ubiquitous Language, Entities, Value Objects, Aggregates, Bounded Context, Repositories, ACL |
| **Test Driven Development** | Cycle Red-Green-Refactor, JUnit, AssertJ, Mockito, Anti-patterns |
| **Inversion of Control** | Dependency Injection, @Bean, @Autowired, @Scope, Spring annotations |
| **REST API** | Richardson Maturity Model, HTTP Verbs, Status Codes, HATEOAS |
| **Spring Cloud** | Service Registry, Service Discovery, Architecture distribuée |

## 📚 Sources

- [Slides DDD](https://slides.gwendoline.bzh/domain-driven-design/)
- [Slides TDD](https://slides.gwendoline.bzh/test-driven-development/)
- [Slides IoC](https://slides.gwendoline.bzh/inversion-of-control/)
- [Slides Spring Cloud](https://slides.gwendoline.bzh/spring-cloud/)
- [Slides REST](https://slides.gwendoline.bzh/rest/)
- [GitLab TPs](https://gitlab.com/gwendoline.fichant/genie-log-m1)

## 🚀 Démarrage

### Installation des dépendances

```bash
npm install
```

### Lancement en mode développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
Site_Revision_IngeLog/
├── app/                    # Pages Next.js
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Page d'accueil
│   ├── quiz/               # Page du quiz
│   └── globals.css         # Styles globaux
├── components/             # Composants React
│   ├── QuestionCard.tsx    # Carte de question (checkboxes)
│   ├── ScoreDisplay.tsx    # Affichage du score canadien
│   ├── ResultsDisplay.tsx  # Détail des réponses (+1/-1)
│   └── ThemeStats.tsx      # Stats par thème
├── data/                   # Données
│   └── questions.ts        # Questions QCM
├── types/                  # Types TypeScript
│   ├── question.ts         # Interface Question
│   └── userAnswer.ts       # UserAnswer + calcul score
└── package.json
```

## 🎯 Fonctionnalités

- ✅ **Notation canadienne** : plusieurs bonnes réponses possibles
- ✅ **Score détaillé** : +1/-1 affiché par réponse
- ✅ Interface moderne et responsive
- ✅ Mélange aléatoire des questions
- ✅ Affichage des thèmes par question
- ✅ Barre de progression
- ✅ Statistiques de performance par thème
- ✅ Explications détaillées après chaque question

## 📝 Ajouter des questions

Modifiez le fichier `data/questions.ts` pour ajouter de nouvelles questions :

```typescript
{
  id: number;
  theme: string;
  question: string;
  choices: string[];
  correctAnswers: number[]; // indices des bonnes réponses (notation canadienne)
  explanation?: string;
}
```

## 🛠️ Technologies utilisées

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Tailwind CSS** - Styling moderne
- **React** - Bibliothèque UI
