export class Layout {
    scrollToSection: (sectionId: string) => void;
    getNextSectionClass: () => string;
};

export function useLayout(): Layout;