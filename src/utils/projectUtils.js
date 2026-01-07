// Helper function to create a slug from project title
export function createProjectSlug(title) {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '');
}

// Helper function to find project by slug
export function findProjectBySlug(projects, slug) {
    return projects.find(project => createProjectSlug(project.title) === slug);
}



