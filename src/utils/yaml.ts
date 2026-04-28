import { parse } from "yaml";
import resumeDataRaw from "../../resume-data.yml?raw";
import quotesDataRaw from "../../quotes-data.yml?raw";

export type ResumeLink = {
    label: string;
    url: string;
};

export type ResumeExperience = {
    role: string;
    organization: string;
    location: string;
    period: string;
    highlights: string[];
};

export type ResumeData = {
    name: string;
    headline: string;
    tagline: string;
    location: string;
    links: ResumeLink[];
    summary: string[];
    experience: ResumeExperience[];
    projects: string[];
    skills: string[];
    background: string[];
    sourceNotes: string[];
};

const resume = parse(resumeDataRaw) as ResumeData;
export const quotes = parse(quotesDataRaw);

export const getResumeData = () => resume;

export const getResumeLinks = () => resume.links;
