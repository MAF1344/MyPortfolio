import fs from 'fs';
import path from 'path';

type Screenshot = {src: string; alt: string};

const folderMap: Record<string, string> = {
  'online-bookstore': 'toko_buku',
  'internal-management-app': 'kobagus',
};

export function getScreenshotsForProject(slug: string): Screenshot[] {
  const folder = folderMap[slug] ?? slug;
  const dir = path.join(process.cwd(), 'public', 'projects', folder);

  try {
    const files = fs.readdirSync(dir).filter((f) => /\.(png|jpe?g|webp|gif)$/i.test(f));
    return files.map((f) => ({src: `/projects/${folder}/${encodeURIComponent(f)}`, alt: `${slug} screenshot ${f}`}));
  } catch (err) {
    return [];
  }
}

export default getScreenshotsForProject;
