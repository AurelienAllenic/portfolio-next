"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var projects, createdProjects;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    projects = [
                        {
                            image: 'https://aurelienallenic.fr/assets/booki-CA3PqGpU.webp',
                            title: 'Booki, projet de site de réservation hôtelier réalisé en HTML/CSS',
                            description: 'Un projet de site web de réservation d’hôtels réalisé avec HTML et CSS.',
                            category: 'Web',
                            objectifs: 'Créer un site de réservation simple pour les hôtels.',
                            technologies: ['html', 'css'],
                            result: 'Projet terminé avec succès, disponible en ligne.'
                        },
                        {
                            image: 'https://aurelienallenic.fr/assets/ohmyfood-Dqbwe2yt.jpg',
                            title: 'Ohmyfood, site gastronomique réalisé en HTML, CSS et SCSS',
                            description: 'Un site web gastronomique utilisant HTML, CSS et SCSS pour une meilleure présentation.',
                            category: 'Web',
                            objectifs: 'Mettre en place un site de recettes gastronomiques.',
                            technologies: ['html', 'css', 'scss'],
                            result: 'Site déployé, fonctionnement optimal.'
                        },
                        {
                            image: 'https://aurelienallenic.fr/assets/lapanthere-AMUkuVkG.jpg',
                            title: "Lapanthere, site de web design basée à Lyon, projet d'amélioration SEO d'un site existant",
                            description: 'Amélioration du SEO d’un site web de design basé à Lyon.',
                            category: 'SEO',
                            objectifs: 'Améliorer la visibilité d’un site web dans les résultats des moteurs de recherche.',
                            technologies: ['seo'],
                            result: 'Amélioration du positionnement du site.'
                        },
                        {
                            image: 'https://aurelienallenic.fr/assets/kanap-CEFHtTxJ.webp',
                            title: 'Kanap, site e-commerce réalisé en JavaScript, HTML, CSS',
                            description: 'Développement d’un site e-commerce avec JavaScript, HTML et CSS.',
                            category: 'E-commerce',
                            objectifs: 'Créer un site de vente en ligne de canapés.',
                            technologies: ['html', 'css', 'javascript'],
                            result: 'Le site est fonctionnel, mais en attente de lancement.'
                        },
                        {
                            image: 'http://aurelienallenic.fr/assets/piiquante-CxSmnMkl.webp',
                            title: 'Hot-takes, API de like et partage de sauces pimentées réalisée en NodeJs et en JavaScript',
                            description: 'Création d’une API permettant de liker et partager des sauces pimentées.',
                            category: 'API',
                            objectifs: 'Construire une API RESTful en utilisant NodeJs.',
                            technologies: ['javascript', 'nodejs'],
                            result: 'API fonctionnelle mais non déployée.'
                        },
                        {
                            image: 'http://aurelienallenic.fr/assets/piiquante-CxSmnMkl.webp',
                            title: "Groupomania, réseau social d'entreprise réalisé avec ReactJs et NodeJs",
                            description: 'Réseau social d’entreprise permettant aux employés de communiquer.',
                            category: 'Réseau social',
                            objectifs: 'Créer une plateforme de communication interne pour les entreprises.',
                            technologies: ['reactjs', 'nodejs'],
                            result: 'Application fonctionnelle en développement.'
                        }
                    ];
                    return [4 /*yield*/, prisma.project.createMany({
                            data: projects,
                        })];
                case 1:
                    createdProjects = _a.sent();
                    console.log('Projets ajoutés :', createdProjects);
                    return [2 /*return*/];
            }
        });
    });
}
main()
    .catch(function (e) {
    throw e;
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
