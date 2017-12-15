import Immutable, { List, Map } from 'immutable'

export const cards = List([
	Map({color: 'card', figure: 0, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 1, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 2, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 3, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 4, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 5, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 6, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 7, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 8, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 9, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 10, dice: '', flip: -1, selected: true}),
	Map({color: 'card', figure: 11, dice: '', flip: -1, selected: true})
])

export const profil = Map({
	name: 'toto',
	perception: null,
	connaissance: null,
	charisme: null,
	astuce: null,
	ame: null,
	dexterite: null,
	agilite: null,
	force: null,
	rapidite: null,
	vigueur: null,
	assets: List([]),
	competences: List([
		Map({name: 'detecter', value: 1}),
		Map({name: 'region', value: 2}),
		Map({name: 'natale', value: 2}),
		Map({name: 'furtivite', value: 1}),
		Map({name: 'grimper', value: 1})
	]),
	points: 10
})

export const assets = List([
	Map({name: "Accoutumence", definition: "Si tu ne peux pas faire fonctionner tes meninges sans avoir le ventre plein, tu as une manie. Si c'est l'alcool ou l'opium qui te fais courrir, bienvenue a Accoutumence City, population : un habitant.Une accoutumence legere signifie que le personnage est accro a une substance moyennement dangereuse. Une accoutumence grave signifie que le personnage est alcoolique, opiomane, accro au laudanum ou au peyotl, ou d'autre drogues dangereuses.", value: [1, 3], type: "handicap"}),
	Map({name: "Bigleux", definition: "Parfois, Il vaut mieux pas voir ce qui te tombe dessus. Etre bigleux affecte tous les tests d'Apptitude ou d e Trait que tu fais pour distinguer quelques chose a plus de 20 metres. Le marshall peus parfois t'autoriser a te servir de ce defaut comme un bonus a tes jets de tripes lorsque tu regardes de loin une scene horrible.", value: [3, 5], type: "handicap"}),
	Map({name: "Boiteux", definition: "Il y a un vieux dicton qui dit : quand quelques chose te poursuit, il te suffit de depasser au moins une personne pour avoir la vie sauve. Malheureusement pourtoi, tu es generalemnt la personne en question. Ce Handicap affecte les deplacements du personange et sa capacité a faire une defense active.", value: [3, 5], type: "handicap"}),
	Map({name: "Ça va les chevilles", definition: "C'est bien d'avoir confiance en soi, mais faut etre cintre pour charger 5000 Sioux avec 600 cavaliers. Ton personnage est super sur de lui. Il croit que rien ne lui resiste. et il ne refuse jamais un defi.", value: [3], type: "handicap"}),
	Map({name: "Cinglé", definition: "T'as pas besoin d'etre pour te battre contre les bestioles de Deadlands. mais ça peus aider. Ton héros a un maladie mentale quelconque. Cela peut aller de l'etourderie a la mythomanie, aux phobies, depressions et autres schizophrenies. La maladie est toujours presente et influence les actions du personnage la plupart dutemps. La valeur du handicap depend de la severité de la maladie et de sees effets sur le personnage.", value: [1,2,3,4,5], type: "handicap"}),
	Map({name: "Cupide", definition: "C'est l'un des sept péché capitaux. Mais ton ame peus bien etre damné, tu auras au moinspris du bon temps sur terre a rouler sur l'or. L'argent et le pouvoir signifie tout pour ta canaile de personnage, et il fera n'importe quoi pour en avoir toujours plus.", value: [], type: "handicap"}),
	Map({name: "Curieux", definition: "Ton héros veut tout savoir sur tout. Chaque fois qu'un mystere se presente, il fait tout ce qui est en son pouvoir pour le resoudre, aussi dangereuse que puisse etre la solution.", value: [3], type: "handicap"}),
	Map({name: "Dèche", definition: "Un pauvre connait le prix de tout et la valeur de rien. Un personnage misereux doit toujours achevter lestrucs les moins chers et marchander sans cesse. Il peut seulement acheter le matos d'occase.", value: [3], type: "handicap"}),
	Map({name: "Deux mains gauche", definition: "T'aime pas les machines, et elle te le rendent bien. Les Aptitudes scientifiques et techniques coutent 2 fois plus de points de primes a acquerir et a develloper. Tous les jets pour reparer ou utiliser une machine se font a -2.", value: [2], type: "handicap"}),
	Map({name: "Douillet", definition: "Tu te chopes des echardes rien qu'en serrant la crosse de ton pistolet, et tu arretes seulement de te plaindre quand le chirurgien sort sa scie. Augmente lespenalites de blessure de ton personnage de 1.", value: [3], type: "handicap"}),
	Map({name: "Ennemi", definition: "Rappelle-toi : chaque gars que tu as gentiment de dezingué a des amis ou de la famille qui peuvent le chercher ensuite. Ton personnage a un ou desennemis. Avec le marshall, tu dois decider la valeur de chaque ennemi, en fonction de leur puissance et de la frequence de leur apparition. Un jeune revanchard inexperimenté qui poursuit le personnage. par exempe veut juste deux points, parce que meme s'il intervient souvent, il n'est pas trés fort. Un deserteur peut se choisir un ennemi, mais ni l'union ni les confederes n'ont de temps a perdre, donc cela nevaut que deux points.", value: [1,2,3,4,5], type: "handicap"}),
	Map({name: "Expatrier", definition: "Comment les gens peuvent ils t'aider s'ils ne te comprennent pas? Les expatriés sont etrangers a la culture dominante du lieu ou se deroule l'aventure ou le campagne. Generalement, les etrangers sont des Mexicains, des Indiens, des Chinois qui passnet des heures difficiles a s'adapter aux coutumes et au langage de l'homme blanc. Un Anglais qui s'obstine a deblaterer sur la democratie, ou un chinois employé du rail qui parle mal l'anglais ont deschances d'etre mis a l'ecart par la plupart des gens de la frontiere. Parfois, ce sont les Blancs lesexpatriés. Si ton Marshal dirige une campagne dans les teritoires Sioux. ceux qui ne connaissent pas les usages et les coutumes des indiens risquent de se retrouver dans une situation prejudiciable. Ausi longtemps que ton personnage peut communiquer correctement au seins de la culture dans laquelle il se trouve et qu'il abandonne pas ce comportement, histoire de se prouver qu'il est bien differnet, il ne devrait pas souffrir aucun prejudice, et tu n'as pas besoin de prendre ce handicap. Des personnages etrangers peuvent parfois souffrir du racisme de certains, mais la plupart du temps ils osnt bien traités dans le Weird West.", value: [3], type: "handicap"}),
	Map({name: "Fanatique", definition: "Tu n'as pas toujours raison mais a defaut, tu es sur que les masses ignorantes ont toujours tort. Ton personnage est persuadé que tout ce qu'il fait sert unegrande cause (la chretiente, la ligue de temperance, la conquete de l'ouest, etc.). Il n'abandonne jamais ses convictions. C'est un grand Handicap pour les precheurs et pour les nonnes.", value: [3], type: "handicap"}),
	Map({name: "Gros dodo", definition: "Un loir se reveille plus vite que toi. Tu dois soustraire -2 au jets de Perception de ton heros lorsqu'il tente de se reveiller en catastrophe ou qu'une bestiole lui tombe dessus . Il dort normalement plus que de coutume.", value: [1], type: "handicap"}),
	Map({name: "Gros tas", definition: "Ton cheval deteste te voir arriver. heureusement pour toi, c'est plutit difficile d'abattre quelqu'un de ton gabarit. La Taille de ton personnage a des consequence variables, suivant qu'il est simplement costaud, ou franchement obese. Le fait d'augmenter le Taille de ton personnage modifie aussi les dommages qu'il peut encaisser.", value: [1,2], type: "handicap"}),
	Map({name: "Héroïque", definition: "T'adore quand quelqu'un a des problemes. T'as deja entendu parler du brave typequi finit mal? Les heros qui vont chasser les sales bestioles ne finissent pasdu tout. Ton personnage ne peut ignorer un appel au secours. Cela ne te met pas necessairement de bonne humeur mais tu aura toujours ceux qui en ont besoin.", value: [3], type: "handicap"}),
	Map({name: "Hors la loi", definition: "La seule autorité que tu reconnaisses est la loi de l'ouest. Et encore, cela peut souffrir quelques exceptions quand ça t'arrange. Les hors la loi sont des rebelles de nature. Ils ont peu de respect pour la loi, et peuvent etre pourchassés pour un petit vol dans une seule ville, ou pire, etre un tueur celebre dans tout l'ouest.", value: [1,2,3,4,5], type: "handicap"}),
	Map({name: "Illetré", definition: "C'est un truc terrible derevenir d'entre les morts et dememe pas etre foutu de lire l'epitaphe gravée sur sa propretombe. Les illetés sont incapable de lire les mots les plus simples dans leurs langue maternelle ou de toute autre langue qu'ils peuvent etre amenés a perler.", value: [3], type: "handicap"}),
	Map({name: "Intolerent", definition: "Il ya des types que tu ne peux pas supporter. Ilste plisnet pas, et t'aimerais bien les pousser du haut dela falaise. Ton personnage ne frequente pas certaines personnes (Mexicains, blancs, politiciens ou autre) et ne veus rien avoir afaire avec eux . s'il est obligeé de travailelr avec eux, il les insulte et les provoque chaque fois que c'est possible. La valeur du handicap depend de la frequence des rencontres.", value: [1,2,3], type: "handicap"}),
	Map({name: "Joe la trouille", definition: "En general, on te tire dans le dos. Les couards n'ont pas assez de courage pour aller se battre et tentent de l'eviter autant que possible. Les hommes, les vrais, n'aiment pas trop les trouillards, a mons qu'il ne s'agisse d'une trouillarde, auquel cas elle peut etres encore plus seduisante, Soustrait -2 pourtous les jets de persuation fais contre ceux qui ont peu de respect pour tes manieres de lache.", value: [3], type: "handicap"}),
	Map({name: "Laid comme un pou", definition: "Il y a un diction dans l'ouest qui pretend qu'une sale tronche peut arreter les balles. Si c'etait vrai, tu n'aurais plus a t'inquieter dete faire tirer dessus. Soustrais-2 aux tentatives amicales de persuaaion chaque fois que l'aspect de ton personnage intervient. Bonne nouvelle, tu peux ajouter un bonus de +2 chaque fois que ton apparence peut jouer, comme lorsque tu essaies d'intimider quelqu'un.", value: [1], type: "handicap"}),
	Map({name: "Loyal", definition: "Tu n'es peut-etre pas un heros, mais tes amis savent qu'ils peuvent comptersur toi lorsque ça sent le roussi. Le personnage est extremement loyal a ses amis, ou a un groupe precis, son pays ou ses ideaux. Ils risquera sa vie pour les defendre et pour soutenir ses traditions.", value: [3], type: "handicap"}),
	Map({name: "Malade", definition: "Il y a des trucs que les medecins peuvent pas soigner. Si tu as quelques problemes genre eruptifs dans ton pantalon, ça peut etre genant. Si tu traines une maladie mortelle, tu ferais carrement mieux de faire ami-ami avec le croque-mort du coin. Les personnage souffrants sont plus ou moins genes par leur maladie en fonction de la gravité et des symptomes particuliers de celle-ci. Des allergies regulieres, des coups de froids, des poux a repetition, ou des vers, tout cela rentre dans le cadre de la maladie legere. Les maladies plus graves sont la tuberculose, le diabete, le cancer. Rappelle-toi qu'on est dans le weird west, et qu'il y a des maladiesplus terribles encore.", value: [1,3,5], type: "handicap"}),
	Map({name: "Manchot", definition: "Des tas de veterans ont perdu leurs jambes et leurs bras durant la guerre. Croire que cela rend moins dangereux est une grossiere erreur. Aprés tout, on a besoind'un seul doigt pour actionner unegachette. Ton personnage n'a qu'une main ou qu'un bras. Il doit soustraire -4 a tout les jets de dés qui impliquent l'usage des deux mains.", value: [3], type: "handicap"}),
	Map({name: "Manie", definition: "Les gens sont pas trop portés sur la proprete dans les WeirdWest, mais c'est pas pour autant qu'ils apprecient de voir un piedtendre se curer le nez. Ton personnage a une manie queles autres trouvent penible ou revoltante. Devant d'autres personnes, ce Handicap soustrait a tout les jets de persuasion du personnage un malus egal a la valeur du handicap. Cette valeur depend de la fraquence et de la nature plus ou moins degoutante de la manie en question.", value: [1,2,3], type: "handicap"}),
	Map({name: "Méchant comme une teigne", definition: "T'as l'impression que comme le monde entier a pisser dans ta gamelle. C'est peut-etre vrai. Les gens ont tendance a ne pas aimer ton personnage. Il est aigri et mesquin. Ce qui fais que c'est difficile pour les autres d'aprecier ton heros : soustrais -2 a toutes tes tentatives amicales de puersuasion. A la discretion du marshall, tu pourras parfois ajoutr +2 a tes jets de persuasion hostiles et intimider.", value: [2], type: "handicap"}),
	Map({name: "Mome", definition: "Te laisse pas abuser pas un gamin avec un flingue. Une balle tirés par des petites mains peut toujours t'eclater les tripes. Tonpersonnage a entre 12 et 15 ans. La plupart des gens ne te prennent pas au serieux, ta force maximum est en d10, et tes connaissances au maximum en d8. Tu peux racheter ce handicap avec despoints de prime dès que tu as 16 ans.", value: [2], type: "handicap"}),
	Map({name: "Nauséeux", definition: "Tu ne peux pas garder ton repas lorsque tu vois du sang et des boyaux. C'est un peu genant comparé a tes amis pistoleros qui ne sourcillent meme pas lorsque la moitié de leurs tripes pendouiullent. Les jets de tripes suite a des scenes d'horreur sont penalisé d'un -2.", value: [3], type: "handicap"}),
	Map({name: "Obligation", definition: "Un homme doit faire ce qu'il a a faire. Ton personnage a des obligations envers sa famille, son boulot, l'armée, une ville, ou des devoirs quelconques. Ca lui pose souvent probleme, et il doit rendre des comptes ou repondre a des convocations de temps en temps. Note que ce n'est pas la meme chose qu'un serment.", value: [1,2,3,4,5], type: "handicap"}),
	Map({name: "Pacifiste", definition: "Etre pacifiste signifie pas qu'un gars a peur d'une bagarre. En 1876, et bienqu'il ait été homem de loi pendant desannées a Dodge et d'autres villes du meme genre, Wyatt Earp n'avait jamais tué un homme. Il etait bien connu pour assommer les cow-boys a coup decrsse, mais Earp etait suffisament malin pour savoir que tuer un homme causait souvent, parmis une population et des amis revanchards, plus de problemes que cela n'en meritait. Le pacifiste peut etre celui qui n'aime pas tuer tant qu'il peut l'eviter (3 points) ou celui qui a decider de ne jamais tuer, quellesquesoient les circonstances (5 points).", value: [3,5], type: "handicap"}),
	Map({name: "Panier percé", definition: "Un idiot et son argant sont vite separés. Ton personnage a bien du mal a economiser de l'argent, et il depense sans compter. Tout ce qu'il achete est vite mis au rancart et perdu ou abandonné. Il commence avec 50$ au lieu de 250$ et devrait plutot acheter du matos d'occase.", value: [3], type: "handicap"}),
	Map({name: "Pas de bol", definition: "Calamity Jane, c'est rien a coté de toi. Songe meme pas a utiliser de la dynamite. Si tu te plante, ce que faitton personnage a les consequences les plus catastrophiques qui soient.", value: [5], type: "handicap"}),
	Map({name: "Pied tendre", definition: "Les gommeux qui utilisent des expressions a deux balles se rammassent a la douzaine dans le Weird West depuis que de l'or et de la roche fantome ont été decouvert en Californie. Ceux qui vivaient  prés de la frontiere auparavant n'apprecient pas vraiment ces bellatres bavards et leur manieres new-yorkaises. Les pieds-tendres ont de grandes gueules etviennent de l'Est profond. Ils utilisnet de jolis mots et parlent sans cesse de leur famille.", value: [2], type: "handicap"}),
	Map({name: "Rachitique", definition: "Un fil de fer est plus epais que toi. Mais ton cheval t'aime bien. Les gars rachitiques sont mince et faible et doivent soustraire -1 a leur taille. Leur force maximum est en d10. Le petit gabarit d'un personnage peut lui etre utile dans certaines situations, comme lorsqu'il rampe dans une caverne ou qu'il veut passer par une fentre etroite, mais generalement sa lui porte plutot la poisse.", value: [5], type: "handicap"}),
	Map({name: "Revanchard", definition: "Le monde a besoin d'une bonne leçon et c'est toi ui va la donner. Ton personnage doit toujours chercher a reparer les fautes que l'on a commises a son egard. Que cette reparation soitviolente ou pas depend de sa nature.", value: [3], type: "handicap"}),
	Map({name: "Sanguinaire", definition: "Certain types sont de vrais enfoirés. D'autres estiment qu'il n'est pas necessaire de laisser ses ennemis vivantspour qu'ils reviennent ensuite vous pourrir la vie. Ton personnage fait rarement de prisonnier, et il adore les conflicts . S'il y est obligé, ils ne vivent pas vieux dés lors qu'ils ne sont plus utiles.", value: [2], type: "handicap"}),
	Map({name: "Serment", definition: "Un homme vaut par ses engagements. Renie-les et lesgens ne te croiront plus. Tu seras obligé de t'enfuir en courant avant qu'ils ne t'abattent comme le chien de menteur que tu es. Ton heros a fait le serment d'accomplir quelque tache importante, ou de toujours reagir dans certaines conditions. La valeur du serment depend du nombre de fois ou il peut entrer en compte, et du risque qu'il implique", value: [1,2,3,4,5], type: "handicap"}),
	Map({name: "Sourd", definition: "3 - DUR DE LA FEUILLE soustrait : -2 a tout tes test de perception basé sur l'audition. 5 - SOUR COMME UN POT : Ton personnage n'entend rien du tout.", value: [3,5], type: "handicap"}),
	Map({name: "Superstitieux", definition: "Les chouettes ne hululent jamais sans raison, et les chats noirs devraient etre abattus avant qu'ils ne croisent ton chemin. Ton personnage estsuperstitieux et mene sa vie en fonction des signes et des presages. Tu devrais consulter un recueil consacré aux superstitions et aux croyances populaires pour t'aider a joue ce Handicap", value: [2], type: "handicap"}),
	Map({name: "Terreurs nocturnes", definition: "", value: [5], type: "handicap"}),
	Map({name: "Têtu", definition: "C'est comme tu le sens ou pas dutout. Si le reste du monde est trop stupide pour se rendre compte que tu as raison, il peut aller se faire pendre. Ton heros est tetu comme une mule. Il veuttoujours faire les choses a sa maniere et insiste jusqu'a ce que tout le monde soit d'ccord ou ait fait des concessions.", value: [2], type: "handicap"}),
	Map({name: "Ambidextre", definition: "Quelque rares élus sont aussi bons de la main gauche que de la main droite. Ceux-là font des pistoléros redoutables et trichent mieux que les autres. Un personnage ambidextre ignore la pénalité de -4 lorsqu'il se sert de sa \"mauvaise\" main", value: [3], type: "asset"}),
	Map({name: "Amis haut placés", definition: "Il ne s'agit pas de qui tu connais - mais qui te connait.Ton personnage a des amis qui peuvent l'aider à l'occasion. La valeur de cette amitié dépend de leur influence et de leur notoriété. Un Texas Ranger qui ramène avec lui la cavalerie à chaque partie ou presque vaut bien 3 points. 1 point s'il arrive seul. Un directeur de journal qui te sort de tôle la plupart du temps vaut au moins 2 points.Il y a pas mal de façons d'utiliser cet Atout, alors précise-en tous les détails avec ton Marshal avant d'en fixer le coût.", value: [1,2,3,4,5], type: "asset"}),
	Map({name: "Arcane", definition: "Certains rencontrent le surnaturel et se font bouffer. Quelques-uns survivent à ce genre de rencontre et en ressortent avec d'étranges connaissances, et parfois des pouvoirs au-delà des limites humaines. Il existe quatre types d'arcane disponible: huckster, savant fou, croyant et chaman. Choisis-en un, et demande à ton Marshal qu'il te laisse lire le chapitre correspondant afin de découvrir tes pouvoirs et tes capacités. Les hucksters sont les sorciers du Weird West. Ils utilisent les jeux de poker pour lancer leurs sorts mortels. Les savants fous construisent d'incroyables engins d'acier, mus par la vapeur. Bien qu'ils ne s'en rendent pas compte, leurs machines infernales tirent leurs pouvoirs des Terres de Chasse. Les croyants sont des nonnes, des prêtres ou des gens du commun qui on été bénis par une entité divine pour une raison ou pour une autre. lorsqu'ils se comportent bien, les croyants peuvent accomplir des miracles afin de luter contre les démons du jugement. Les chamans sont les sages indiens, homme ou femme. Leurs pouvoir viend de leurs contacts avec les esprits de la nature.", value: [3], type: "asset"}),
	Map({name: "Aux aguets", definition: "Les vétérants de la frontière s'attendent a tout. Les autres sont simplement nerveux et sursautes a chaque petits bruits. Leur seul point commun, c'est qu'ils sont capables de remarquer un couguar qui s'aproche a 50 mètres. Un héros aux aguets est conscient des petits détails, des bruits et des mouvements que les autres ignorent. Dans ces conditions, il peut ajouter +2 à ses jets de perception.", value: [3], type: "asset"}),
	Map({name: "Belle gueule", definition: "Ils disent qu'une sale gueule peut arrèter une balle. Quelqu'un qui présente bien ne sera peut être pas abattu le premier. Un personnage avec une belle gueule peut ajouter +2 à tous ses jets de persuasion ou chaque fois que son physique entre en jeu.", value: [1], type: "asset"}),
	Map({name: "Don des langues", definition: "On parle un tas de langues dans le Weird West. Ca peut aider d'en comprendre quelques unes. Si un étrange ermite parlant allemand vous invite, toi et ton gang, à dîner, assure toi qu'il veut vous nourir et non pas vous manger. Cet atout te permet d'aprendre une langue à la moitié du coût normal (avec des points de prime). Durant la création de personnage, tu peux acheter n'importe quelle langue supplémentaire avec la même réduction.", value: [1], type: "asset"}),
	Map({name: "Dur a cuire", definition: "Qu'il soit d'une résistance à toute épreuve, ou simplement complètement muet, un cow-boy qui sait maitriser sa douleur est un homme dur à abattre. Les pieds-tendres chialent à la première écharde. Un pistolero dur à cuire fait feux des deux Colts, même s'il baigne dans son propre sang. Un personnage dur à cuire peut ignorer un niveau de pénalité de blessure par zone touchée. Donc, un personnage avec une blessure légère dans chaque bras n'a aucun malus", value: [3], type: "asset"}),
	Map({name: "Grade militaire", definition: "On trouve des soldats partout sur la frontière. La plupart des femmes apprécient l'uniforme, et même un petit grade exige un minimum de respect. Le problème, c'est que les soldats sont les premiers que les gens viennent chercher dès que quelque chose d'étrange arrive. Ceux qui font partie d'une unité militaire passent la plus grande partie de leur temps au service de leurs pays, et donc ne sont pas censé faire partie d'un gang de Deadlands. Cepandant, le personnel militaire peut parfois être détaché pour des missions spéciales, et obtenir quelques semaines ou plusieurs mois pour mener a bien ses recherches. Si c'est le cas, un personnafe peut acheter l'atout grade militaire. Ces personnages sont généralement en service pour l'armée, et donc ne doivent pas trop souvent révéler leur rang. Même alors, ils doivent user de leurs pouvoirs avec précaution, d'ou le faible coût.", value: [1,2,3], type: "asset"}),
	Map({name: "Homme de loi", definition: "Un insigne a beacoup de poids dans le Weird West. Ca impose aussi pas mal de responsabilités. Le commun des mortels compte sur toi pour repousser les maraudeurs, les bandits et des trucs encore plus étranges. Bien que cet atout octroie à ton personnage une réelle autorité, sa juridiction est toujours limitée. Les Marshals opèrent seulement dans les limites de leur ville, les sherifs patrouillent dans un Comté, et l'autorité d'un US Marshal s'étend sur tout le pays.", value: [1,3,5], type: "asset"}),
	Map({name: "La voix", definition: "Que ce soit la ritournelle aguichante d'une chanteuse ou la voie d'outre tombe d'un pistolero, tout ce qui sort de ta bouche requiert l'attention. Tu peut choisir le type de voie de ton personnage. Une voix apésante rajout +2 à tous les jets de persuasion faits avec des situations calmes, paisible ou de séduction. Une voix moqueuse ajoute +2 au jets de ridiculiser. Tu peux acheter plusieurs voix sans probleme.", value: [1], type: "asset"}),
	Map({name: "Mécano", definition: "Les engins mécaniques ne sont pas courants près de la frontière, et ceux qui savent les réparer sont encore moins nombreux. Un personnage doté de cet atout ajoute +2 a tous ses jets dès qu'il s'agit de réparer ou de comprendre une machine.", value: [1], type: "asset"}),
	Map({name: "Money money", definition: "L'argent ne fait pas le bonneur de ceux qui n'en on pas, surtout dans le Weird West. Si tu ne peut p)as te débarrasser du chasseur de prime qui est à tes trousses, quelques pesos peuvent te permettre d'en employer un autre. Les personnes fortunées commencent avec des fond suplémentaire, et peuvent parfois appeler à la maison pour réclamer de l'argent. La somme en question dépend du niveau de fortune. Un personnage commence normalment avec 250$. Un type fortuné peut récupérer vraiment plus d'argent avec un peu de temps, des garanties et une bonne excuse.", value: [1,2,3,4,5], type: "asset"}),
	Map({name: "Oreille fine", definition: "Certains ont des \"poignées sur la tête\" aussi grandes que celles des ânes. Il peuvent entendre une créature marcher à pas de loup sur de la pierre à cent mètres. Une personne à l'oreille fine ajoute +2 à tous ses jets de perception dès que l'ouie entre en jeu.", value: [1], type: "asset"}),
	Map({name: "Peur de rien", definition: "La plupart des gens ne sont pas vraiment courageux_ ils sont simplement stupides. Peut être que ton personnage es différent, mais c'est douteux. Un personnage qui possède cet atout peut ajouter +2 à ses jets de tripes.", value: [2], type: "asset"}),
	Map({name: "Possessions", definition: "Si le flingue d'un cow-boy est son meilleur ami, son cheval est sa maîtresse, Ces deux-là suffisent à satisfaire la plupart des gars, mais quelques-uns ont des objets qu'ils considèrent d'égale valeur. Cet atout couvre tout l'équipement inhabituel dont tu peux avoir envie pour ton personnage. tu dois discuter avec le Marshal du coût précis de chaque objet.", value: [1,2,3,4,5], type: "asset"}),
	Map({name: "Regard d'acier", definition: "Il y a un truc dans ton regard qui met les autres mal à l'aise. Qaund tes yeux se plissent, c'est que certains vont finir au cimetière de Boot Hill. Un personnage avec regard d'acier peut ajouter +2 à ses jets d'intimiser, tant que la victime désignée se trouve suffisament près pour qu'on puisse la fixer dans les yeux.", value: [1], type: "asset"}),
	Map({name: "Renommée", definition: "C'est marrant la réputation. Plus elle est importante, plus les gens évitent dez croiser ton chemin. Mais les gars qui veulent pas s'écarter sont souvent là pour te fliguer. C'est une tâche faisable de reconnaitre quelqu'un de ta ville, de ta profession etc.", value: [1,3,5], type: "asset"}),
	Map({name: "Sens de l'orientation", definition: "Généralement tu sais ou est le Nord_ ou le Sud si t'est un confédéré. Pour t'orienter, fais un jet de perception faisable (SD 5). Avec un jet d'astuce difficile (SD 9), ton personnage peut aussi donner l'heure...", value: [1], type: "asset"}),
	Map({name: "Solide comme un roc", definition: "Il y en a qui tmbent dans les pommes à cause d'une brise légère. Toi, tu bouffe des lames de rasoir au petit déjeuner. Quand tu es solide comme un roc, tu as vraiment des tripes, une volonté de fer et de la détermination. Un vrai héros doit continuer à avancer, aussi pénible que ça puisse être. Pour chaque niveau de solide comme un roc, ton personnage a +2 en souffle. Il peut pisser le sang et continuer à tirer à tout va alors que les autres pleurent comme des mômes en suçant leur pouce.", value: [1,2,3,4,5], type: "asset"}),
	Map({name: "Sommeil leger", definition: "Le sommeil ne vient pas toujours facilment dans deadland. Bien que ça puisse te rendre grognon après ton cfé du matin, avoir le sommeil léger peut avoir ses avantages lorsqu'une grosse bestiole tente de se glisser dans ton sac de couchage. Un personnage avec cet atout ajout +2 a ses jets de perception quand il doit se réveiller rapidement.", value: [1], type: "asset"}),
	Map({name: "Veinard", definition: "Un gars avec une chance pareille peut voir une balle se loger dans la montre de poche qu'il a achetée quelques heures auparavant. c'est comme ça que sa marche pour ces gars là. Chaque fois que tu dépenses une Pépite bleue ou rouge pour un jet, tu peux relancer tous les 1.", value: [3], type: "asset"})
])

export const competencesDefinition = List([
	Map({
		name: 'perception',
		subsection: List([
			Map({name: 'artillerie', text: 'artillerie', min: 0}),
			Map({name: 'arts', text: 'arts', min: 0, spe: ['peinture', 'sculpture', 'dessin']}),
			Map({name: 'detecter', text: 'detecter (1)', min: 1}),
			Map({name: 'pister', text: 'pister', min: 0}),
			Map({name: 'scruter', text: 'scruter', min: 0}),
			Map({name: 'autre_per', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'connaissance',
		subsection: List([
			Map({name: 'carriere', text: 'carriere', min: 0}),
			Map({name: 'territoires', text: 'conn. des territoires', min: 0}),
			Map({name: 'region', text: "region d'origine (2)", min: 2}),
			Map({name: 'deguisement', text: 'deguisement', min: 0}),
			Map({name: 'explosif', text: 'explosif', min: 0}),
			Map({name: 'langues', text: 'langues', min: 0, spe: ['Apache', 'Français', 'Gaëlique', 'Allemand', 'Latin', 'Langage des signe indiens', 'Sioux', 'Espagnol', 'Autre']}),
			Map({name: 'natale', text: 'langue natal (2)', min: 2}),
			Map({name: 'medecine', text: 'medecine', min: 0, spe: ['Générale', 'Chirurgie', 'Vétérinaire']}),
			Map({name: 'metier', text: 'metier', min: 0}),
			Map({name: 'science', text: 'science', min: 0, spe: ['Générale', 'Biologie', 'Chimie', 'Mécanique', 'Physique']}),
			Map({name: 'universalis', text: 'universalis', min: 0, spe:['Philosophie', 'Histoire', 'Occultisme', 'Théologie', 'Autre']}),
			Map({name: 'autre_con', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'charisme',
		subsection: List([
			Map({name: 'autorite', text: 'autorite', min: 0}),
			Map({name: 'dressage', text: 'dressage', min: 0, spe: ['Chien', 'Chevaux']}),
			Map({name: 'eloquence', text: 'eloquence', min: 0}),
			Map({name: 'intimider', text: 'intimider', min: 0}),
			Map({name: 'persuasion', text: 'persuasion', min: 0}),
			Map({name: 'spectacle', text: 'spectacle', min: 0, spe: ['Comedie', 'Chant', 'Danse', 'Autre']}),
			Map({name: 'autre_cha', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'astuce',
		subsection: List([
			Map({name: 'bidouiller', text: 'bidouiller', min: 0}),
			Map({name: 'bluff', text: 'bluff', min: 0}),
			Map({name: 'rue', text: 'conn. de la rue', min: 0}),
			Map({name: 'denicher', text: 'denicher', min: 0}),
			Map({name: 'jeux', text: 'jeux', min: 0}),
			Map({name: 'ridiculiser', text: 'ridiculiser', min: 0}),
			Map({name: 'survie', text: 'survie', min: 0, spe: ['Desert', 'Montagne', 'Autre']}),
			Map({name: 'autre_ast', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'ame',
		subsection: List([
			Map({name: 'foi', text: 'foi', min: 0}),
			Map({name: 'tripes', text: 'tripes', min: 0}),
			Map({name: 'autre_ame', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'dexterite',
		subsection: List([
			Map({name: 'arc', text: 'arc', min: 0}),
			Map({name: 'crocheter', text: 'crocheter', min: 0}),
			Map({name: 'derober', text: 'derober', min: 0}),
			Map({name: 'lancer', text: 'lancer', min: 0, spe: ['Haches', 'Couteaux', 'Lances']}),
			Map({name: 'passe', text: 'passe passe', min: 0}),
			Map({name: 'recharger', text: 'regarde rapide', min: 0}),
			Map({name: 'tirer1', text: 'tirer', min: 0, spe:['Automatique', 'Lance-flamme', 'Pistolet', 'Fusil', 'Shotgun']}),
			Map({name: 'tirer2', text: 'tirer', min: 0, spe:['Automatique', 'Lance-flamme', 'Pistolet', 'Fusil', 'Shotgun']}),
			Map({name: 'ventiler', text: 'ventiler', min: 0}),
			Map({name: 'autre_dex', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'agilite',
		subsection: List([
			Map({name: 'attelage', text: 'attelage', min: 0}),
			Map({name: 'combat', text: 'combat', min: 0, spe: ['Boxe', 'Bagarre', 'Escrime', 'Couteau', 'Lasso', 'Sabre', 'Fouet', 'Catch']}),
			Map({name: 'conduire', text: 'conduire', min: 0, spe:['Bateau à vapeur', 'Ornithoptere', 'Wagon-Vapeur', 'Autre']}),
			Map({name: 'equitation', text: 'equitation', min: 0}),
			Map({name: 'esquiver', text: 'esquiver', min: 0}),
			Map({name: 'furtivite', text: 'furtivite (1)', min: 1}),
			Map({name: 'grimper', text: 'grimper (1)', min: 1}),
			Map({name: 'nager', text: 'nager', min: 0}),
			Map({name: 'autre_agi', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'force',
		subsection: List([
			Map({name: 'autre_for', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'rapidite',
		subsection: List([
			Map({name: 'degainer', text: 'degainer', min: 0}),
			Map({name: 'autre_rap', text: 'autre', min: 0, spe: []})
		])
	}),
	Map({
		name: 'vigueur',
		subsection: List([
			Map({name: 'autre_vig', text: 'autre', min: 0, spe: []})
		])
	})
])
