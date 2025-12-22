import { Question } from '@/types/question';

export const questions: Question[] = [
  // =============================================
  // DOMAIN DRIVEN DESIGN (DDD)
  // =============================================
  {
    id: 1,
    theme: "Domain Driven Design",
    question: "Quelles affirmations sont vraies concernant l'Ubiquitous Language (Langage Ubiquitaire) ?",
    choices: [
      "C'est un langage partagé entre développeurs et experts métier",
      "Il doit être utilisé dans le code source",
      "C'est un langage de programmation spécifique",
      "Il améliore la communication entre l'équipe technique et le business"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "L'Ubiquitous Language est un langage commun structuré autour du modèle de domaine, utilisé par les développeurs ET les experts métier. Il doit se refléter dans le code (noms de classes, méthodes, etc.)."
  },
  {
    id: 2,
    theme: "Domain Driven Design",
    question: "Quelles sont les caractéristiques d'une Entity en DDD ?",
    choices: [
      "Elle est définie par une identité unique",
      "Son identité persiste dans le temps",
      "Elle est toujours immuable",
      "Elle peut être suivie à travers différents états"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Une Entity est définie par son identité unique (ex: un ID) qui persiste dans le temps, pas par ses attributs. Elle n'est PAS immuable contrairement aux Value Objects."
  },
  {
    id: 3,
    theme: "Domain Driven Design",
    question: "Quelles sont les caractéristiques d'un Value Object ?",
    choices: [
      "Il est défini par ses attributs, pas par une identité",
      "Il doit être immuable (immutable)",
      "Il a toujours une clé primaire en base de données",
      "Il est préféré aux Entities quand c'est possible"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les Value Objects sont définis par leur valeur (attributs), doivent être immuables, et sont préférés aux Entities car ils simplifient le code. Ils n'ont PAS d'identité propre."
  },
  {
    id: 4,
    theme: "Domain Driven Design",
    question: "Concernant les Aggregates en DDD, quelles affirmations sont correctes ?",
    choices: [
      "Un Aggregate est un groupe d'objets liés traités comme une unité",
      "L'Aggregate Root contrôle l'accès aux membres internes",
      "Chaque Entity doit être un Aggregate Root",
      "Il garantit la cohérence des données lors des modifications"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Un Aggregate est un cluster d'objets associés avec une 'Root Entity' (Aggregate Root) qui contrôle l'accès. Il garantit la cohérence mais toutes les Entities ne sont PAS des Aggregate Roots."
  },
  {
    id: 5,
    theme: "Domain Driven Design",
    question: "Qu'est-ce qu'un Bounded Context ?",
    choices: [
      "Une limite logique où un modèle de domaine est défini et applicable",
      "Chaque contexte peut avoir sa propre définition des mêmes termes",
      "Un framework de développement Java",
      "Il permet d'isoler les différentes parties du système"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Un Bounded Context est une frontière dans laquelle un modèle de domaine spécifique est défini. Le même mot peut avoir des significations différentes dans différents contextes."
  },
  {
    id: 6,
    theme: "Domain Driven Design",
    question: "Quels sont les rôles des Repositories en DDD ?",
    choices: [
      "Encapsuler la persistance des objets du domaine",
      "Permettre la récupération des objets du domaine",
      "Contenir la logique métier complexe",
      "Il y a généralement un Repository par Aggregate"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les Repositories encapsulent la persistance et la récupération des objets du domaine. La logique métier appartient aux Services ou aux Entities, pas aux Repositories."
  },
  {
    id: 7,
    theme: "Domain Driven Design",
    question: "À quoi sert l'Anti-corruption Layer (ACL) ?",
    choices: [
      "Traduire entre deux Bounded Contexts différents",
      "Empêcher un modèle externe de 'polluer' le modèle interne",
      "Améliorer les performances des requêtes",
      "Utiliser des DTOs et mappers pour l'isolation"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "L'ACL est une couche de traduction qui protège le modèle interne des influences externes (modèles legacy, APIs tierces). Elle utilise des DTOs et mappers, mais n'est pas liée aux performances."
  },
  {
    id: 8,
    theme: "Domain Driven Design",
    question: "Concernant le Core Domain et les Generic Subdomains, quelles affirmations sont vraies ?",
    choices: [
      "Le Core Domain représente la partie la plus critique du système",
      "C'est là où la valeur business principale doit être concentrée",
      "Les Generic Subdomains ont une faible valeur ajoutée métier",
      "Tous les sous-domaines doivent recevoir le même niveau d'investissement"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le Core Domain est le cœur de la valeur métier et doit recevoir le plus d'attention. Les Generic Subdomains (technique, support) sont nécessaires mais n'apportent pas de valeur unique."
  },
  {
    id: 9,
    theme: "Domain Driven Design",
    question: "Quelles sont les caractéristiques des Services en DDD ?",
    choices: [
      "Ils contiennent une logique qui ne s'intègre pas naturellement dans une Entity",
      "Ils sont généralement stateless",
      "Ils remplacent toujours les Entities",
      "Ils peuvent orchestrer plusieurs Aggregates"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les Services sont stateless et contiennent une logique qui ne s'intègre pas dans une Entity ou un Value Object. Ils ne remplacent PAS les Entities mais complètent l'architecture."
  },
  {
    id: 10,
    theme: "Domain Driven Design",
    question: "Qu'est-ce que le Context Map en DDD ?",
    choices: [
      "Un document ou diagramme montrant les liens entre Bounded Contexts",
      "Une carte géographique du déploiement",
      "Il aide à visualiser les relations entre différentes parties du système",
      "Il identifie les patterns d'intégration utilisés"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "Le Context Map est une visualisation des relations entre Bounded Contexts et des patterns d'intégration utilisés (ACL, Shared Kernel, etc.). Ce n'est pas lié au déploiement."
  },
  {
    id: 11,
    theme: "Domain Driven Design",
    question: "Concernant les Factories en DDD, quelles affirmations sont correctes ?",
    choices: [
      "Elles sont responsables de la création d'objets complexes",
      "Elles peuvent créer des Aggregates entiers",
      "Elles remplacent les constructeurs dans tous les cas",
      "Elles encapsulent la logique de création"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les Factories créent des objets complexes ou des Aggregates. Elles ne remplacent PAS tous les constructeurs, seulement quand la logique de création est complexe."
  },
  {
    id: 12,
    theme: "Domain Driven Design",
    question: "Qu'est-ce que le 'Refactoring toward deeper insight' en DDD ?",
    choices: [
      "Améliorer le design quand la compréhension métier évolue",
      "Refactorer uniquement pour améliorer les performances",
      "Peut nécessiter des changements significatifs du modèle",
      "Le code doit refléter les nouvelles connaissances acquises"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "À mesure que la compréhension du domaine s'améliore, le design doit être refactoré pour refléter ces insights, même si cela nécessite des changements majeurs. Ce n'est pas limité aux performances."
  },
  {
    id: 13,
    theme: "Domain Driven Design",
    question: "Concernant les 'Intention-revealing interfaces', quelles sont les bonnes pratiques ?",
    choices: [
      "Les interfaces doivent nommer explicitement leur intention métier",
      "Exemple : PayrollService.getHourlyRate(Employee) plutôt que ErpService.getHourlyRate(sapId)",
      "Les noms techniques sont préférés aux noms métier",
      "Le but business doit être clair dans la signature"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les interfaces doivent révéler l'intention métier, pas les détails techniques. Des noms business explicites (PayrollService, Employee) sont préférés aux noms techniques (ErpService, sapId)."
  },

  // =============================================
  // TEST DRIVEN DEVELOPMENT (TDD)
  // =============================================
  {
    id: 20,
    theme: "Test Driven Development",
    question: "Quelles sont les étapes du cycle TDD (Red-Green-Refactor) ?",
    choices: [
      "Écrire un test qui échoue (Red)",
      "Écrire le code minimal pour passer le test (Green)",
      "Optimiser les performances avant tout",
      "Refactorer le code en gardant les tests verts"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Le cycle TDD est : Red (test échoue) → Green (code minimal pour passer) → Refactor (améliorer sans casser). L'optimisation des performances n'est PAS une étape du cycle."
  },
  {
    id: 21,
    theme: "Test Driven Development",
    question: "Pourquoi écrire un test qui échoue d'abord (étape Red) ?",
    choices: [
      "Pour confirmer que le test harness fonctionne",
      "Pour éviter les 'faux positifs' (tests qui passent toujours)",
      "Pour ralentir le développement",
      "Pour valider que le test détecte bien l'absence de la fonctionnalité"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "L'étape Red confirme que le test fonctionne et détecte vraiment l'absence de fonctionnalité. Cela évite les tests qui passent toujours (faux positifs)."
  },
  {
    id: 22,
    theme: "Test Driven Development",
    question: "Quels outils sont utilisés pour le TDD en Java ?",
    choices: [
      "JUnit pour exécuter les tests",
      "AssertJ pour les assertions fluides",
      "Mockito pour les mocks",
      "Maven pour la couverture de code"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "JUnit est le framework de test, AssertJ pour les assertions lisibles, Mockito pour les mocks. Maven est un outil de build, pas spécifiquement pour la couverture (c'est JaCoCo par exemple)."
  },
  {
    id: 23,
    theme: "Test Driven Development",
    question: "Quels sont les anti-patterns à éviter en TDD ?",
    choices: [
      "Le couplage entre les tests (ordre dépendant)",
      "Tester les méthodes privées directement",
      "Tester les librairies tierces",
      "Des tests trop lents qui découragent leur exécution"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Tous sont des anti-patterns : les tests doivent être indépendants, tester le comportement public, ne pas tester le code tiers, et être rapides à exécuter."
  },
  {
    id: 24,
    theme: "Test Driven Development",
    question: "Quelles sont les caractéristiques d'un bon test unitaire ?",
    choices: [
      "Il est indépendant des autres tests",
      "Il teste le comportement public, pas l'implémentation",
      "Il peut dépendre de l'ordre d'exécution",
      "Il est rapide à exécuter"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les tests doivent être indépendants (ordre invariant), tester le comportement public, et être rapides. Un test ne doit JAMAIS dépendre de l'ordre d'exécution."
  },
  {
    id: 25,
    theme: "Test Driven Development",
    question: "Quels sont les différents niveaux de tests ?",
    choices: [
      "Tests unitaires : fonctions/méthodes isolées",
      "Tests d'intégration : interaction entre modules",
      "Tests E2E : flux utilisateur complets",
      "Tests de performance : validation sous charge"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Tous ces niveaux existent : unitaires (isolation), social/intégration (collaborateurs), E2E (flux complets), performance (charge)."
  },
  {
    id: 26,
    theme: "Test Driven Development",
    question: "Concernant Mockito, quelles affirmations sont vraies ?",
    choices: [
      "mock() crée un objet simulé",
      "when() définit le comportement du mock",
      "verify() vérifie les interactions avec le mock",
      "Les mocks remplacent toujours les vraies classes"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Mockito permet de créer des mocks (mock()), définir leur comportement (when()) et vérifier les appels (verify()). Les mocks ne remplacent PAS toujours les vraies classes, seulement pour isoler le code testé."
  },
  {
    id: 27,
    theme: "Test Driven Development",
    question: "Qu'est-ce que l'ATDD (Acceptance Test Driven Development) ?",
    choices: [
      "Écrire des tests d'acceptation avant le code",
      "Les tests sont basés sur les critères d'acceptation du client",
      "C'est une technique pour améliorer les performances",
      "Il est souvent combiné avec BDD (Behavior Driven Development)"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "ATDD écrit des tests basés sur les critères d'acceptation du client avant le développement. Il est souvent combiné avec BDD. Ce n'est pas lié aux performances."
  },
  {
    id: 28,
    theme: "Test Driven Development",
    question: "Concernant la couverture de code, quelles affirmations sont vraies ?",
    choices: [
      "Elle mesure le pourcentage de code exécuté par les tests",
      "100% de couverture garantit l'absence de bugs",
      "Elle aide à identifier le code non testé",
      "Elle est un indicateur, pas un objectif en soi"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "La couverture mesure le code exécuté par les tests et aide à identifier les lacunes. Mais 100% de couverture ne garantit PAS l'absence de bugs, car elle ne teste pas tous les cas."
  },
  {
    id: 29,
    theme: "Test Driven Development",
    question: "Pourquoi les méthodes privées ne doivent-elles pas être testées directement ?",
    choices: [
      "Elles sont testées indirectement via le comportement public",
      "Tester l'implémentation rend les tests fragiles",
      "Elles ne contiennent jamais de bugs",
      "Le refactoring devient difficile si les tests dépendent de l'implémentation"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les méthodes privées sont des détails d'implémentation. Les tester directement rend les tests fragiles au refactoring. Elles sont testées via le comportement public."
  },

  // =============================================
  // INVERSION OF CONTROL (IoC)
  // =============================================
  {
    id: 40,
    theme: "Inversion of Control",
    question: "Qu'est-ce que l'Inversion of Control (IoC) ?",
    choices: [
      "Déléguer la gestion du cycle de vie des objets à un conteneur",
      "Le framework gère la création et l'injection des dépendances",
      "Un design pattern pour améliorer les performances",
      "Permet de gagner en flexibilité en 'donnant les clés au conteneur'"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "L'IoC consiste à déléguer la gestion des objets au conteneur (Spring, CDI). Le framework crée, injecte et détruit les composants. Ce n'est pas un pattern de performance."
  },
  {
    id: 41,
    theme: "Inversion of Control",
    question: "Quelles sont les caractéristiques de la Dependency Injection (DI) ?",
    choices: [
      "Le conteneur est responsable de créer et fournir les composants",
      "Le conteneur peut injecter des wrappers/proxies au lieu des objets réels",
      "Elle facilite uniquement le développement, pas les tests",
      "Elle favorise la composition plutôt que l'héritage"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "La DI permet au conteneur de créer et injecter les dépendances (parfois via proxies). Elle favorise la composition over inheritance et facilite aussi les tests via les mocks."
  },
  {
    id: 42,
    theme: "Inversion of Control",
    question: "À quoi sert l'annotation @Autowired (ou @Inject) ?",
    choices: [
      "Indiquer où une dépendance doit être injectée",
      "Créer une nouvelle instance à chaque appel",
      "Peut être utilisée sur un attribut ou un paramètre de méthode",
      "Le conteneur résout automatiquement la dépendance"
    ],
    correctAnswers: [0, 2, 3],
    explanation: "@Autowired/@Inject indique au conteneur où injecter une dépendance. Elle ne crée PAS une nouvelle instance à chaque appel (dépend du scope)."
  },
  {
    id: 43,
    theme: "Inversion of Control",
    question: "Concernant l'annotation @Scope, quelles affirmations sont vraies ?",
    choices: [
      "Le scope par défaut est 'singleton' (une instance par conteneur)",
      "Le scope 'prototype' crée une nouvelle instance à chaque demande",
      "Le scope 'request' est lié à une requête HTTP",
      "Le scope 'session' est le scope par défaut"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le scope par défaut est singleton (une instance). Prototype crée une nouvelle instance à chaque fois. Request est lié à une requête HTTP. Session n'est PAS le défaut."
  },
  {
    id: 44,
    theme: "Inversion of Control",
    question: "Pourquoi faut-il éviter d'utiliser 'new' pour les composants injectables ?",
    choices: [
      "Cela court-circuite le conteneur et casse la chaîne d'injection",
      "L'objet créé ne bénéficie pas des injections du conteneur",
      "C'est toujours plus lent que l'injection",
      "Les proxies et wrappers ne sont pas appliqués"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Utiliser 'new' bypasse le conteneur : l'objet n'a pas ses dépendances injectées et les proxies (pour les transactions, etc.) ne sont pas appliqués. Ce n'est pas une question de performance."
  },
  {
    id: 45,
    theme: "Inversion of Control",
    question: "À quoi sert l'annotation @Bean (ou @Produces) ?",
    choices: [
      "Définir comment construire un bean complexe",
      "Utilisée sur une méthode qui retourne le bean à injecter",
      "Remplacer automatiquement toutes les dépendances",
      "Utile quand la construction nécessite une logique personnalisée"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "@Bean/@Produces définit comment créer un bean quand la construction est complexe. Elle ne remplace pas automatiquement les dépendances."
  },
  {
    id: 46,
    theme: "Inversion of Control",
    question: "Quels sont les avantages de l'IoC avec les Repositories automatiques ?",
    choices: [
      "Simplification des opérations de base de données via interfaces",
      "Génération automatique du code CRUD",
      "Les requêtes sont déduites du nom des méthodes",
      "Nécessite toujours d'écrire du SQL manuellement"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Avec Spring Data, les Repositories génèrent automatiquement le CRUD et déduisent les requêtes du nom des méthodes (findByFirstname). Pas besoin de SQL manuel pour les cas simples."
  },
  {
    id: 47,
    theme: "Inversion of Control",
    question: "Concernant les erreurs courantes en IoC, quelles affirmations sont vraies ?",
    choices: [
      "Oublier que le scope par défaut est singleton peut causer des problèmes",
      "Le scope 'request' utilise ThreadLocal, attention aux parallel streams",
      "On ne peut injecter que ce que le conteneur connaît",
      "On peut injecter dans n'importe quel objet créé avec 'new'"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Erreurs courantes : oublier le singleton par défaut, ThreadLocal avec parallel streams (request scope), et tenter d'injecter des composants inconnus. On ne peut PAS injecter dans des objets créés manuellement."
  },
  {
    id: 48,
    theme: "Inversion of Control",
    question: "Que permettent les annotations @Service et @Repository ?",
    choices: [
      "Déclarer un composant que le conteneur doit gérer",
      "@Repository offre des fonctionnalités CRUD de base",
      "Elles sont interchangeables sans aucune différence",
      "@Service indique une classe contenant de la logique métier"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "@Service et @Repository déclarent des composants gérés. @Repository offre le CRUD, @Service indique la logique métier. Elles ne sont PAS totalement interchangeables (sémantique différente)."
  },

  // =============================================
  // REST API
  // =============================================
  {
    id: 60,
    theme: "REST API",
    question: "Quelles sont les caractéristiques de REST (Representational State Transfer) ?",
    choices: [
      "C'est une architecture, pas un protocole",
      "Les ressources sont identifiées de manière unique",
      "Il s'appuie sur le protocole HTTP",
      "Il est plus complexe que SOAP"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "REST est une architecture (pas un protocole comme SOAP), avec identification unique des ressources, utilisant HTTP. REST est plus SIMPLE que SOAP, pas plus complexe."
  },
  {
    id: 61,
    theme: "REST API",
    question: "Quelles sont les différences entre REST et SOAP ?",
    choices: [
      "REST est une architecture, SOAP est un protocole",
      "REST identifie les ressources de manière unique, SOAP non",
      "SOAP est basé sur un contrat (WSDL)",
      "REST est plus lourd et complexe que SOAP"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "REST = architecture avec identification des ressources. SOAP = protocole avec contrat WSDL. REST est plus LÉGER que SOAP, pas plus lourd."
  },
  {
    id: 62,
    theme: "REST API",
    question: "Concernant le niveau 0 du modèle de Richardson, quelles affirmations sont vraies ?",
    choices: [
      "HTTP est utilisé uniquement comme tunnel",
      "Souvent un seul point d'entrée avec POST",
      "C'est appelé 'Swamp of POX'",
      "Les ressources sont correctement identifiées par des URIs"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Le niveau 0 (Swamp of POX) utilise HTTP comme simple tunnel, souvent avec un seul endpoint POST. Les ressources ne sont PAS encore identifiées, c'est le niveau 1."
  },
  {
    id: 63,
    theme: "REST API",
    question: "Concernant le niveau 1 du modèle de Richardson (Resources), quelles affirmations sont vraies ?",
    choices: [
      "Introduction des ressources identifiées par des URIs",
      "Exemple : /doctors/martin au lieu d'un seul endpoint",
      "Les verbes HTTP sont correctement utilisés",
      "Chaque ressource a une URI distincte"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Le niveau 1 introduit les ressources avec des URIs distinctes (/doctors/martin). Les verbes HTTP corrects sont le niveau 2, pas le niveau 1."
  },
  {
    id: 64,
    theme: "REST API",
    question: "Concernant le niveau 2 du modèle de Richardson (HTTP Verbs), quelles affirmations sont vraies ?",
    choices: [
      "Utilisation correcte des verbes HTTP (GET, POST, PUT, DELETE)",
      "Utilisation des codes de statut HTTP appropriés (200, 201, etc.)",
      "Inclut les liens hypermédia (HATEOAS)",
      "GET pour lire, POST pour créer, PUT pour mettre à jour"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Le niveau 2 utilise correctement les verbes et les codes de statut HTTP. HATEOAS est le niveau 3, pas le niveau 2."
  },
  {
    id: 65,
    theme: "REST API",
    question: "Concernant le niveau 3 du modèle de Richardson (HATEOAS), quelles affirmations sont vraies ?",
    choices: [
      "Les réponses incluent des liens hypermédia",
      "L'état de l'application est piloté par les liens",
      "Permet la découvrabilité des actions possibles",
      "C'est le niveau atteint par toutes les APIs REST"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "HATEOAS ajoute des liens dans les réponses pour guider le client. Peu d'APIs atteignent réellement ce niveau dans la pratique."
  },
  {
    id: 66,
    theme: "REST API",
    question: "Quels verbes HTTP correspondent aux opérations CRUD ?",
    choices: [
      "POST pour Create (création)",
      "GET pour Read (lecture)",
      "PUT pour Update (mise à jour complète)",
      "PATCH pour Delete (suppression)"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "POST=Create, GET=Read, PUT=Update complet, PATCH=Update partiel, DELETE=Delete. PATCH n'est pas pour la suppression."
  },
  {
    id: 67,
    theme: "REST API",
    question: "À quoi servent les query strings en REST ?",
    choices: [
      "Filtrage des résultats (filter)",
      "Pagination (offset, limit)",
      "Tri des résultats (sort)",
      "L'implémentation est totalement standardisée"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Les query strings servent au filtrage, pagination et tri. L'implémentation n'est PAS standardisée (chaque API peut utiliser différents noms de paramètres)."
  },
  {
    id: 68,
    theme: "REST API",
    question: "Concernant la négociation de contenu HTTP, quelles affirmations sont vraies ?",
    choices: [
      "Le client indique ses préférences via le header Accept",
      "Le serveur répond selon ses capacités",
      "Permet de demander différents formats (JSON, XML)",
      "Est utilisée uniquement pour la langue"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "La négociation de contenu via Accept permet de demander format, langue, encodage. Elle n'est pas limitée à la langue."
  },
  {
    id: 69,
    theme: "REST API",
    question: "Quels codes de statut HTTP indiquent un succès ?",
    choices: [
      "200 OK",
      "201 Created",
      "400 Bad Request",
      "202 Accepted"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les codes 2XX indiquent un succès : 200 (OK), 201 (Created), 202 (Accepted). 400 est une erreur client (4XX)."
  },
  {
    id: 70,
    theme: "REST API",
    question: "Quels codes de statut HTTP indiquent une erreur client ?",
    choices: [
      "400 Bad Request",
      "401 Unauthorized",
      "403 Forbidden",
      "500 Internal Server Error"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Les codes 4XX sont des erreurs client : 400 (Bad Request), 401 (Unauthorized), 403 (Forbidden). 500 est une erreur serveur (5XX)."
  },
  {
    id: 71,
    theme: "REST API",
    question: "Quels codes de statut HTTP indiquent une erreur serveur ?",
    choices: [
      "500 Internal Server Error",
      "501 Not Implemented",
      "503 Service Unavailable",
      "404 Not Found"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Les codes 5XX sont des erreurs serveur : 500, 501, 503. 404 est une erreur client (ressource non trouvée)."
  },
  {
    id: 72,
    theme: "REST API",
    question: "Quelle est la différence entre PUT et PATCH ?",
    choices: [
      "PUT remplace la ressource entière",
      "PATCH effectue une mise à jour partielle",
      "PUT et PATCH sont totalement interchangeables",
      "PATCH ne nécessite que les champs à modifier"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "PUT remplace la ressource entière, PATCH ne modifie que certains champs. Ils ne sont PAS interchangeables."
  },
  {
    id: 73,
    theme: "REST API",
    question: "Pourquoi le cache HTTP est-il important en REST ?",
    choices: [
      "GET est cacheable par défaut",
      "POST n'est pas cacheable",
      "Améliore les performances en évitant des requêtes inutiles",
      "Tous les verbes HTTP sont cacheables"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "GET est cacheable, POST non. Le cache améliore les performances. Tous les verbes ne sont PAS cacheables (POST, PUT, DELETE ne le sont pas par défaut)."
  },

  // =============================================
  // SPRING CLOUD
  // =============================================
  {
    id: 80,
    theme: "Spring Cloud",
    question: "Qu'est-ce que Spring Cloud ?",
    choices: [
      "Un ensemble d'outils pour créer des applications distribuées",
      "Étroitement intégré à Spring Boot",
      "Un langage de programmation",
      "Permet de créer des applications résilientes et stateless"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Spring Cloud est une suite d'outils intégrés à Spring Boot pour créer des applications distribuées résilientes et stateless. Ce n'est pas un langage."
  },
  {
    id: 81,
    theme: "Spring Cloud",
    question: "Qu'est-ce que le Service Registry (Annuaire de services) ?",
    choices: [
      "Les services s'enregistrent auprès d'un annuaire",
      "Permet la découverte dynamique des services",
      "Remplace complètement les URLs fixes",
      "Exemple : Eureka de Netflix"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Le Service Registry permet aux services de s'enregistrer et d'être découverts dynamiquement (Eureka). Il ne remplace pas complètement les URLs, mais facilite le routing."
  },
  {
    id: 82,
    theme: "Spring Cloud",
    question: "Qu'est-ce que le Service Discovery ?",
    choices: [
      "Le client récupère la liste des services disponibles",
      "Les services sont appelés par leur nom logique",
      "Nécessite de connaître les IPs et ports à l'avance",
      "Permet le load balancing côté client"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Le Service Discovery permet de découvrir les services par nom sans connaître les IPs/ports à l'avance. Il facilite le load balancing côté client."
  },
  {
    id: 83,
    theme: "Spring Cloud",
    question: "Concernant l'architecture client/serveur HTTP dans Spring Cloud, quelles sont les caractéristiques ?",
    choices: [
      "Utilisation du cache HTTP",
      "Communication stateless",
      "Utilisation des verbes et codes de statut HTTP",
      "Les sessions côté serveur sont obligatoires"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "L'architecture repose sur HTTP avec cache, statelessness, verbes et codes de statut. Les sessions côté serveur ne sont PAS obligatoires (stateless)."
  },
  {
    id: 84,
    theme: "Spring Cloud",
    question: "Dans Spring Cloud, pourquoi appeler les services par leur nom plutôt que par URL ?",
    choices: [
      "Découplage : pas besoin de connaître l'IP/port",
      "Permet le load balancing automatique",
      "Résilience si une instance tombe",
      "C'est uniquement pour des raisons de lisibilité"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Appeler par nom permet le découplage, le load balancing et la résilience. Ce n'est pas juste pour la lisibilité mais pour des raisons techniques importantes."
  },

  // =============================================
  // QUESTIONS MIXTES / AVANCÉES
  // =============================================
  {
    id: 90,
    theme: "Domain Driven Design",
    question: "Dans l'exemple d'un siège d'avion, quand doit-on utiliser une Entity vs un Value Object ?",
    choices: [
      "Entity si chaque siège est tracké individuellement (ex: Air France)",
      "Value Object si n'importe quel siège libre convient (ex: low-cost)",
      "Entity quand l'identité de chaque siège importe",
      "Value Object car les sièges sont toujours immuables"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Si chaque siège a une identité (réservation spécifique) → Entity. Si n'importe quel siège équivalent convient → Value Object. Les sièges ne sont pas nécessairement immuables."
  },
  {
    id: 91,
    theme: "Test Driven Development",
    question: "Concernant les tests avec des parsers TDD, quels cas doivent être testés ?",
    choices: [
      "Gestion des nulls et chaînes vides",
      "Termes invalides",
      "Espaces en début et fin",
      "Imbrication complexe des opérateurs"
    ],
    correctAnswers: [0, 1, 2, 3],
    explanation: "Tous ces cas doivent être testés : nulls/blanks, termes invalides, espaces parasites, et les cas complexes d'opérateurs imbriqués."
  },
  {
    id: 92,
    theme: "Inversion of Control",
    question: "Concernant @RestController en Spring, quelles affirmations sont vraies ?",
    choices: [
      "Combine @Controller et @ResponseBody",
      "Les méthodes retournent directement des objets sérialisés",
      "Nécessite toujours de retourner des vues HTML",
      "Peut utiliser @Autowired pour injecter des repositories"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "@RestController combine @Controller + @ResponseBody. Les méthodes retournent des objets JSON/XML, pas des vues HTML. On peut injecter des dépendances via @Autowired."
  },
  {
    id: 93,
    theme: "Test Driven Development",
    question: "Concernant la hiérarchie des exceptions en Java, quelles affirmations sont vraies ?",
    choices: [
      "Error représente des problèmes système (ne pas capturer)",
      "Exception représente des exceptions vérifiées (checked)",
      "RuntimeException représente des exceptions non vérifiées (unchecked)",
      "Toutes les exceptions doivent être déclarées dans la signature"
    ],
    correctAnswers: [0, 1, 2],
    explanation: "Error = problèmes système. Exception = checked (à déclarer ou capturer). RuntimeException = unchecked (pas obligé de déclarer). Seules les checked doivent être déclarées."
  },
  {
    id: 94,
    theme: "REST API",
    question: "Pourquoi le code 418 'I'm a teapot' existe-t-il ?",
    choices: [
      "C'est un easter egg défini dans la RFC 2324",
      "Il indique une erreur de serveur grave",
      "Il est utilisé pour le café par le Hyper Text Coffee Pot Control Protocol",
      "C'est un code de statut sérieux pour la production"
    ],
    correctAnswers: [0, 2],
    explanation: "418 'I'm a teapot' est un easter egg de la RFC 2324 (HTCPCP - protocole de cafetière). Ce n'est PAS un code sérieux pour la production."
  },
  {
    id: 95,
    theme: "Domain Driven Design",
    question: "Pourquoi le DDD encourage-t-il les échanges fréquents avec les experts métier ?",
    choices: [
      "Pour aligner le code avec la logique business",
      "Pour construire l'Ubiquitous Language ensemble",
      "Pour réduire les coûts de développement uniquement",
      "Pour améliorer la compréhension du domaine"
    ],
    correctAnswers: [0, 1, 3],
    explanation: "Les échanges fréquents alignent le code avec le business, construisent le langage commun et améliorent la compréhension. Le but n'est pas uniquement de réduire les coûts."
  }
];
