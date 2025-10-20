export const translations = {
    es: {
        nav: {
            home: "Inicio",
            about: "Sobre Mí",
            skills: "Habilidades",
            projects: "Proyectos"
        },
        hero: {
            title: "Víctor Hugo Amador",
            subtitle: "Desarrollador Web & Artista 3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur velit nihil culpa quas. Deleniti tenetur illo et minima repellat!",
            available: "Disponible"
        },
        projects: {
            title: "Proyectos",
            gallery: "Galería"
        },
        skills: {
            title: "Habilidades & Tecnologías",
            categories: {
                programming: "Lenguajes de Programación",
                frameworks: "Frameworks & Librerías",
                tools: "Herramientas & Software",
                languages: "Idiomas"
            },
            items: {
                programming: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
                frameworks: ["React", "Astro", "Node.js", "Express", "Tailwind CSS", "Three.js"],
                tools: ["Blender", "Git", "Figma", "Photoshop", "VS Code", "MongoDB"],
                languages: ["Español (Nativo)", "Inglés (C1)", "Francés (B2)", "Japonés (Básico)"]
            }
        },
        // NUEVO: Traducciones para la galería 3D
        gallery: {
            title: "Galería 3D",
            subtitle: "Explora mis proyectos en 3D. Haz clic y arrastra para rotar, scroll para zoom.",
            models: {
                kewpie: {
                    title: "Kewpie Doll",
                    details: "Escultura digital basada en las clásicas muñecas Kewpie. Modelado en Blender con texturas PBR."
                },
                sailorMoon: {
                    title: "Sailor Moon",
                    details: "Herramienta para personalizar productos en tiempo real con selección de colores, materiales y componentes."
                }
            },
            tags: {
                sculpture: "Escultura",
                character: "Carácter",
                lowPoly: "Low Poly",
                ecommerce: "E-commerce",
                personalization: "Personalización",
                uiux: "UI/UX"
            }
        }
    },
    en: {
        nav: {
            home: "Home",
            about: "About",
            skills: "Skills",
            projects: "Projects"
        },
        hero: {
            title: "Victor Hugo Amador",
            subtitle: "Web Developer & 3D Artist",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur velit nihil culpa quas. Deleniti tenetur illo et minima repellat!",
            available: "Available"
        },
        projects: {
            title: "Projects",
            gallery: "Gallery"
        },
        skills: {
            title: "Skills & Technologies",
            categories: {
                programming: "Programming Languages",
                frameworks: "Frameworks & Libraries",
                tools: "Tools & Software",
                languages: "Languages"
            },
            items: {
                programming: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
                frameworks: ["React", "Astro", "Node.js", "Express", "Tailwind CSS", "Three.js"],
                tools: ["Blender", "Git", "Figma", "Photoshop", "VS Code", "MongoDB"],
                languages: ["Spanish (Native)", "English (C1)", "French (B2)", "Japanese (Basic)"]
            }
        },
        // NUEVO: Traducciones para la galería 3D
        gallery: {
            title: "3D Gallery",
            subtitle: "Explore my 3D projects. Click and drag to rotate, scroll to zoom.",
            models: {
                kewpie: {
                    title: "Kewpie Doll",
                    details: "Digital sculpture based on classic Kewpie dolls. Modeled in Blender with PBR textures."
                },
                sailorMoon: {
                    title: "Sailor Moon",
                    details: "Tool for real-time product customization with color, material and component selection."
                }
            },
            tags: {
                sculpture: "Sculpture",
                character: "Character",
                lowPoly: "Low Poly",
                ecommerce: "E-commerce",
                personalization: "Personalization",
                uiux: "UI/UX"
            }
        }
    },
    fr: {
        nav: {
            home: "Accueil",
            about: "À propos",
            skills: "Compétences",
            projects: "Projets"
        },
        hero: {
            title: "Victor Hugo Amador",
            subtitle: "Développeur Web & Artiste 3D",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur velit nihil culpa quas. Deleniti tenetur illo et minima repellat!",
            available: "Disponible"
        },
        projects: {
            title: "Projets",
            gallery: "Galerie"
        },
        skills: {
            title: "Compétences & Technologies",
            categories: {
                programming: "Langages de Programmation",
                frameworks: "Frameworks & Bibliothèques",
                tools: "Outils & Logiciels",
                languages: "Langues"
            },
            items: {
                programming: ["JavaScript", "TypeScript", "Python", "Java", "C++", "HTML/CSS"],
                frameworks: ["React", "Astro", "Node.js", "Express", "Tailwind CSS", "Three.js"],
                tools: ["Blender", "Git", "Figma", "Photoshop", "VS Code", "MongoDB"],
                languages: ["Espagnol (Natif)", "Anglais (C1)", "Français (B2)", "Japonais (Basique)"]
            }
        },
        // NUEVO: Traducciones para la galería 3D
        gallery: {
            title: "Galerie 3D",
            subtitle: "Explorez mes projets 3D. Cliquez et faites glisser pour faire pivoter, défilez pour zoomer.",
            models: {
                kewpie: {
                    title: "Poupée Kewpie",
                    details: "Sculpture numérique basée sur les classiques poupées Kewpie. Modélisée dans Blender avec textures PBR."
                },
                sailorMoon: {
                    title: "Sailor Moon",
                    details: "Outil de personnalisation de produits en temps réel avec sélection de couleurs, matériaux et composants."
                }
            },
            tags: {
                sculpture: "Sculpture",
                character: "Personnage",
                lowPoly: "Low Poly",
                ecommerce: "E-commerce",
                personalization: "Personnalisation",
                uiux: "UI/UX"
            }
        }
    }
} as const;

export type Language = keyof typeof translations;