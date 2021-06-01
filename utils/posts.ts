import fs from 'fs';
import {join} from 'path';

const POSTS_DIR = join(process.cwd(), '_posts')

export function getPostSlugs() {
    const except = ['.git', 'assets']
    return fs.readdirSync(POSTS_DIR).filter(filename => !except.includes(filename))
}