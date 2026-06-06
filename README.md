# Personal Blog - Next.js Starter

This is a personal blog template built with Next.js, tailored for performance, SEO, and developer experience.

## 1. Structure & Technology Stack

**Tech Stack:**
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Content Management**: Contentlayer2 (for MDX processing)
- **Language**: TypeScript
- **Features**: SEO optimization, Pliny (UI/Search components), Dark Mode integration (`next-themes`).

**Project Structure:**
- `app/`: Next.js App Router routing logic (`/blog`, `/about`, `/projects`, `/tags`).
- `data/`: The heart of your content. Contains MDX files for blog posts (`data/blog/`), author information (`data/authors/`), and static data like `projectsData.ts` and `siteMetadata.js`.
- `components/`: Reusable React components (e.g., `Card`, `MDXComponents`, `DevIcons`).
- `layouts/`: Page layouts utilized by Contentlayer for rendering blog posts and author pages (e.g., `PostLayout`, `AuthorLayout`).
- `css/`: Global CSS styles, including `tailwind.css` and `prism.css` for code syntax highlighting.
- `public/static/`: Static assets such as images, favicons, and fonts.
- `scripts/`: Utility scripts that run during the build process (e.g., generating the RSS feed).

---

## 2. How to Run the Source Code

Ensure you have Node.js installed. Open your terminal in the project root directory and follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   > The server will start on `http://localhost:3000` (hoặc cổng có sẵn). Any changes made to MDX files or code will hot-reload automatically.

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Start Production Server:**
   ```bash
   npm run start
   ```

---

## 3. How to Use & Customize

### Updating Website Information
- **Site Metadata**: Open `data/siteMetadata.js` to modify the site title, description, language, GitHub/social links, and analytics configurations.
- **Navigation Menu**: Edit `data/headerNavLinks.ts` to add or remove links from the top header.
- **Author Profile**: Modify `data/authors/default.mdx` to update your picture, name, occupation, and "About Me" text.
- **Projects Portfolio**: Open `data/projectsData.ts` to add, edit, or remove projects shown on the `/projects` page.

### Publishing a New Blog Post
Writing new articles is extremely simple thanks to Contentlayer and MDX:

1. Navigate to the `data/blog/` directory.
2. Create a new `.mdx` or `.md` file (e.g., `my-awesome-post.mdx`).
3. Add the **Frontmatter** metadata at the top of your file:
   ```yaml
   ---
   title: 'My Awesome New Post'
   date: '2024-05-15'
   tags: ['Next.js', 'Web Development']
   draft: false
   summary: 'A short summary that will appear on the blog list page...'
   ---
   ```
4. Below the dashed lines, start writing your blog content using Markdown syntax.
5. Because this is MDX, you can also embed React components directly into your markdown content!

### Working with Images
- Save your images to the `public/static/images/` folder.
- Reference them in your blog posts like this: `![Image Description](/static/images/your-image.png)`.
