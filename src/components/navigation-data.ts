import { BsLinkedin } from "solid-icons/bs";
import { SiGithub, SiYoutube, SiStrava, SiLetterboxd } from "solid-icons/si";
import { getResumeLinks } from "~/utils/yaml";

// Add a local route here once to include it in the navigation's Pages area.
// This list is deliberately independent of the Sanity project collection.
export const standalonePages = [
    { label: "Resume", href: "/resume" },
    { label: "About", href: "/about" },
    { label: "Language Learning", href: "/language-learning" },
    { label: "Vexillology", href: "/vexillology" },
];

export const workPages = [
    { label: "School Data Solutions", href: "/school-data-solutions" },
    { label: "Projects", href: "/projects" },
];

// Add an icon/color here for a resume social link; URLs stay in resume data.
const socialBrands = [
    { label: "LinkedIn", icon: BsLinkedin, color: "#0A66C2" },
    { label: "GitHub", icon: SiGithub, color: "#000000" },
    { label: "YouTube", icon: SiYoutube, color: "#FF0033" },
    { label: "Strava", icon: SiStrava, color: "#FC5200" },
];

export const getNavigationSocialLinks = () => {
    const resumeLinks = getResumeLinks();
    return [
        ...socialBrands.flatMap(brand => {
            const link = resumeLinks.find(link => link.label === brand.label);
            return link ? [{ ...brand, url: link.url }] : [];
        }),
        // Navigation-only destination: intentionally not part of the resume.
        {
            label: "Letterboxd",
            url: "https://boxd.it/bz8UB",
            icon: SiLetterboxd,
            color: "#00E054",
        },
    ];
};
